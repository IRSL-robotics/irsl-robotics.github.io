const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");

const pageSource = fs.readFileSync("_pages/gpu-management.md", "utf8");
assert.match(pageSource, /irsl-gpu-management-pending-v1/);
assert.match(pageSource, /action: "apply"/);
assert.match(pageSource, /confirmation !== "CLEAR ALL"/);
assert.doesNotMatch(pageSource, /form\.submit\(\)/);

const rows = [];

const sheet = {
  getDataRange() {
    return { getValues: () => rows.map((row) => row.slice()) };
  },
  clearContents() {
    rows.length = 0;
  },
  getRange(startRow, startColumn, rowCount, columnCount) {
    return {
      setValues(values) {
        values.forEach((valueRow, rowOffset) => {
          const targetRow = startRow - 1 + rowOffset;
          rows[targetRow] ||= [];
          for (let columnOffset = 0; columnOffset < columnCount; columnOffset += 1) {
            rows[targetRow][startColumn - 1 + columnOffset] = valueRow[columnOffset];
          }
        });
      },
    };
  },
  autoResizeColumns() {},
};

const context = {
  SpreadsheetApp: {
    getActiveSpreadsheet: () => ({
      getSheetByName: () => sheet,
      insertSheet: () => sheet,
    }),
  },
  Utilities: {
    formatDate: () => "2026-07-11",
  },
  Session: {
    getScriptTimeZone: () => "Asia/Seoul",
  },
  ContentService: {
    MimeType: { JAVASCRIPT: "javascript", JSON: "json" },
    createTextOutput: () => ({ setMimeType() {} }),
  },
  LockService: {
    getScriptLock: () => ({
      waitLock() {
        context.lockDepth += 1;
      },
      releaseLock() {
        context.lockDepth -= 1;
      },
    }),
  },
  lockDepth: 0,
};

vm.runInNewContext(fs.readFileSync("docs/gpu-management-apps-script.js", "utf8"), context);

let getResponse;
context.ContentService.createTextOutput = (text) => {
  getResponse = text;
  return { setMimeType() {} };
};
context.doGet({ parameter: { callback: "testCallback" } });
assert.match(getResponse, /"protocolVersion":3/);
assert.equal(context.lockDepth, 0);

const emptyState = Object.fromEntries(
  [
    ...Array.from({ length: 8 }, (_, index) => `NRMK-${index}`),
    ...Array.from({ length: 4 }, (_, index) => `NEW-${index}`),
    ...Array.from({ length: 2 }, (_, index) => `OLD-${index}`),
  ].map((id) => [id, { user: "", startDate: "", endDate: "" }])
);

emptyState["NRMK-0"] = {
  user: "Extended User",
  startDate: "2026-07-01",
  endDate: "2026-07-15",
};
emptyState["NEW-0"] = {
  user: "Other User",
  startDate: "2026-07-02",
  endDate: "2026-07-20",
};
context.writeState_(emptyState);

context.doGet({
  parameter: {
    action: "apply",
    callback: "saveCallback",
    payload: JSON.stringify([
      { type: "patch", id: "OLD-0", fields: { user: "Saved User" } },
    ]),
  },
});
assert.match(getResponse, /^saveCallback\(/);
assert.match(getResponse, /"protocolVersion":3/);
assert.match(getResponse, /"Saved User"/);

context.applyOperations_([
  {
    type: "clearExpired",
    id: "NRMK-0",
    expectedEndDate: "2026-07-10",
  },
]);

let state = context.readState_();
assert.equal(state["NRMK-0"].user, "Extended User");
assert.equal(state["NRMK-0"].endDate, "2026-07-15");

context.applyOperations_([
  {
    type: "patch",
    id: "NRMK-0",
    fields: { endDate: "2026-07-18" },
  },
]);

state = context.readState_();
assert.equal(state["NRMK-0"].endDate, "2026-07-18");
assert.deepEqual(
  { ...state["NEW-0"] },
  { user: "Other User", startDate: "2026-07-02", endDate: "2026-07-20" }
);

context.applyOperations_([
  {
    type: "patch",
    id: "NRMK-0",
    fields: { endDate: "2026-07-10" },
  },
  {
    type: "clearExpired",
    id: "NRMK-0",
    expectedEndDate: "2026-07-10",
  },
]);

state = context.readState_();
assert.deepEqual(
  { ...state["NRMK-0"] },
  { user: "", startDate: "", endDate: "" }
);

console.log("GPU management sync tests passed.");
