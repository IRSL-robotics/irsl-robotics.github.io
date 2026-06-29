const SHEET_NAME = "GPU Management";

const SERVERS = [
  { name: "NRMK Server", count: 8, prefix: "NRMK" },
  { name: "New Server", count: 4, prefix: "NEW" },
  { name: "Old Server", count: 2, prefix: "OLD" },
];

const HEADERS = ["GPU ID", "Server", "GPU", "User", "Start Date", "Expected End", "Updated At"];

function doGet(event) {
  const requestedCallback = (event && event.parameter.callback) || "callback";
  const callback = /^[\w.$]+$/.test(requestedCallback) ? requestedCallback : "callback";
  const payload = JSON.stringify({
    ok: true,
    state: readState_(),
    updatedAt: new Date().toISOString(),
  });

  return ContentService.createTextOutput(`${callback}(${payload});`).setMimeType(
    ContentService.MimeType.JAVASCRIPT
  );
}

function doPost(event) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const payload = JSON.parse(event.parameter.payload || "{}");
    writeState_(payload.state || {});

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true, updatedAt: new Date().toISOString() })
    ).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function readState_() {
  const sheet = getSheet_();
  const rows = sheet.getDataRange().getValues().slice(1);
  const state = {};

  rows.forEach((row) => {
    const id = row[0];
    if (!id) return;
    state[id] = {
      user: row[3] || "",
      startDate: formatDate_(row[4]),
      endDate: formatDate_(row[5]),
    };
  });

  return state;
}

function writeState_(state) {
  const sheet = getSheet_();
  const rows = [];
  const updatedAt = new Date().toISOString();

  SERVERS.forEach((server) => {
    for (let index = 1; index <= server.count; index += 1) {
      const id = `${server.prefix}-${index}`;
      const item = state[id] || {};
      rows.push([
        id,
        server.name,
        `GPU ${index}`,
        item.user || "",
        item.startDate || "",
        item.endDate || "",
        updatedAt,
      ]);
    }
  });

  sheet.clearContents();
  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  sheet.getRange(2, 1, rows.length, HEADERS.length).setValues(rows);
  sheet.autoResizeColumns(1, HEADERS.length);
}

function getSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  return sheet;
}

function formatDate_(value) {
  if (!value) return "";

  if (Object.prototype.toString.call(value) === "[object Date]") {
    return Utilities.formatDate(value, Session.getScriptTimeZone(), "yyyy-MM-dd");
  }

  return String(value);
}
