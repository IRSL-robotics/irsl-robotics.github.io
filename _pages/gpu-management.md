---
layout: page
permalink: /about/gpu-management/
title: GPU Management
description: GPU reservation board for IRSL members
nav: false
---

<style>
  .gpu-page {
    --gpu-border: var(--global-divider-color, #d7dde5);
    --gpu-muted: var(--global-text-color-light, #6b7280);
    --gpu-panel: var(--global-card-bg-color, #ffffff);
    --gpu-accent: var(--global-theme-color, #2563eb);
  }

  .gpu-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    margin: 1rem 0 1.25rem;
    padding: 0.85rem;
    border: 1px solid var(--gpu-border);
    border-radius: 8px;
    background: var(--gpu-panel);
  }

  .gpu-summary {
    display: flex;
    gap: 0.55rem;
    flex-wrap: wrap;
    align-items: center;
  }

  .gpu-pill {
    display: inline-flex;
    align-items: center;
    min-height: 2rem;
    padding: 0.25rem 0.65rem;
    border: 1px solid var(--gpu-border);
    border-radius: 999px;
    font-size: 0.9rem;
    font-weight: 650;
  }

  .gpu-actions {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .gpu-button {
    min-height: 2rem;
    padding: 0.28rem 0.7rem;
    border: 1px solid var(--gpu-accent);
    border-radius: 6px;
    color: var(--gpu-accent);
    background: transparent;
    font: inherit;
    font-size: 0.9rem;
    font-weight: 650;
    cursor: pointer;
  }

  .gpu-button:hover,
  .gpu-button:focus {
    color: #ffffff;
    background: var(--gpu-accent);
  }

  .gpu-server {
    margin: 1.2rem 0 1.7rem;
    padding-top: 0.15rem;
  }

  .gpu-server-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.75rem;
    padding: 0.55rem 0.7rem;
    border-left: 5px solid var(--server-accent, var(--gpu-accent));
    border-radius: 8px;
    background: var(--server-soft, transparent);
  }

  .gpu-server-title {
    margin: 0;
    font-size: 1.15rem;
    font-weight: 750;
  }

  .gpu-server-count {
    color: var(--server-text, var(--gpu-muted));
    font-size: 0.95rem;
    font-weight: 650;
    white-space: nowrap;
  }

  .gpu-server-nrmk {
    --server-accent: #2f7d5b;
    --server-soft: #edf8f2;
    --server-text: #1d5d42;
  }

  .gpu-server-new {
    --server-accent: #2c6fb8;
    --server-soft: #eef6ff;
    --server-text: #1f5a99;
  }

  .gpu-server-old {
    --server-accent: #d9466f;
    --server-soft: #fff0f5;
    --server-text: #a61e4d;
  }

  .gpu-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 0.55rem;
  }

  .gpu-card {
    display: grid;
    grid-template-columns:
      minmax(7rem, 0.75fr) minmax(11rem, 1.3fr) minmax(9rem, 1fr)
      minmax(9rem, 1fr) auto;
    align-items: end;
    gap: 0.7rem;
    border: 1px solid var(--gpu-border);
    border-radius: 8px;
    padding: 0.65rem 0.75rem;
    background: var(--gpu-panel);
  }

  .gpu-card-top {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 0.35rem;
    min-height: 2.55rem;
  }

  .gpu-name {
    font-size: 1rem;
    font-weight: 750;
  }

  .gpu-status {
    min-height: 1.65rem;
    padding: 0.15rem 0.5rem;
    border-radius: 999px;
    background: #eaf7ef;
    color: #15613a;
    font-size: 0.78rem;
    font-weight: 750;
  }

  .gpu-status.is-used {
    background: #fff3d9;
    color: #8a5200;
  }

  .gpu-field {
    display: grid;
    gap: 0.28rem;
    margin-bottom: 0;
  }

  .gpu-field label {
    color: var(--gpu-muted);
    font-size: 0.82rem;
    font-weight: 700;
  }

  .gpu-field select,
  .gpu-field input {
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    min-height: 2.25rem;
    padding: 0.35rem 0.35rem;
    border: 1px solid var(--gpu-border);
    border-radius: 6px;
    background: var(--gpu-panel);
    color: var(--global-text-color, #111827);
    font: inherit;
    font-size: 0.86rem;
  }

  .gpu-date-row {
    display: contents;
  }

  .gpu-clear {
    width: auto;
    min-width: 4.8rem;
    min-height: 2rem;
    border-color: var(--gpu-border);
    color: var(--gpu-muted);
  }

  .gpu-import {
    display: none;
  }

  .gpu-sync-message {
    min-height: 1.4rem;
    margin: -0.6rem 0 1rem;
    color: var(--gpu-muted);
    font-size: 0.9rem;
  }

  @media (max-width: 640px) {
    .gpu-toolbar,
    .gpu-server-header {
      align-items: stretch;
      flex-direction: column;
    }

    .gpu-actions {
      justify-content: flex-start;
    }

    .gpu-card {
      grid-template-columns: 1fr;
    }

    .gpu-card-top {
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
    }

    .gpu-clear {
      width: 100%;
    }
  }
</style>

<div class="gpu-page">
  <p>
    This board tracks GPU usage across the lab servers.
  </p>

  <div class="gpu-toolbar" aria-label="GPU management tools">
    <div class="gpu-summary">
      <span class="gpu-pill"><span id="gpu-used-count">0</span>&nbsp;/&nbsp;17 in use</span>
      <span class="gpu-pill"><span id="gpu-free-count">17</span>&nbsp;available</span>
      <span class="gpu-pill" id="gpu-sync-status">Local only</span>
    </div>
    <div class="gpu-actions">
      <button class="gpu-button" type="button" id="gpu-refresh">Refresh</button>
      <button class="gpu-button" type="button" id="gpu-export">Export</button>
      <button class="gpu-button" type="button" id="gpu-import-button">Import</button>
      <button class="gpu-button" type="button" id="gpu-reset">Clear all</button>
      <input class="gpu-import" type="file" id="gpu-import-file" accept="application/json,.json">
    </div>
  </div>

  <div class="gpu-sync-message" id="gpu-sync-message"></div>

  <div id="gpu-board"></div>
</div>

<script>
  (() => {
    const syncEndpoint = {{ site.data.gpu_management.sync_endpoint | default: "" | jsonify }};
    const members = [
      "Min Jun Kim",
      "Kanghyun Kim",
      "Jinyeong Jeong",
      "Ji Wan Han",
      "Seo Wook Han",
      "Seongsu Park",
      "Jiwon Kim",
      "Sungmin Kim",
      "Sanghoon Lee",
      "Taeho Yun",
      "Sunho Kim",
      "Wonjun Han",
      "Jaehun Jeong",
      "Seoyoon Kim",
      "Jinyeol Kim",
      "Seungmin Shin",
    ];

    const servers = [
      { name: "NRMK Server", count: 8, prefix: "NRMK" },
      { name: "New Server", count: 7, prefix: "NEW" },
      { name: "Old Server", count: 2, prefix: "OLD" },
    ];

    const storageKey = "irsl-gpu-management-v1";
    const pendingStorageKey = "irsl-gpu-management-pending-v1";
    const board = document.getElementById("gpu-board");
    const usedCount = document.getElementById("gpu-used-count");
    const freeCount = document.getElementById("gpu-free-count");
    const syncStatus = document.getElementById("gpu-sync-status");
    const syncMessage = document.getElementById("gpu-sync-message");
    const importFile = document.getElementById("gpu-import-file");
    let saveTimer;
    let expirationTimer;
    let operationSequence = 0;
    let pendingOperations = [];
    let isSavingRemote = false;

    const gpuIds = servers.flatMap((server) =>
      Array.from({ length: server.count }, (_, index) => `${server.prefix}-${index}`)
    );

    const emptyState = () =>
      Object.fromEntries(
        gpuIds.map((id) => [id, { user: "", startDate: "", endDate: "" }])
      );

    const normalizeState = (incoming) => {
      const normalized = emptyState();
      const source = incoming || {};

      servers.forEach((server) => {
        const usesZeroBasedIds = Object.prototype.hasOwnProperty.call(
          source,
          `${server.prefix}-0`
        );
        for (let index = 0; index < server.count; index += 1) {
          const id = `${server.prefix}-${index}`;
          const legacyId = `${server.prefix}-${index + 1}`;
          normalized[id] =
            source[usesZeroBasedIds ? id : legacyId] || normalized[id];
        }
      });

      return normalized;
    };

    const loadState = () => {
      try {
        return normalizeState(JSON.parse(localStorage.getItem(storageKey)));
      } catch {
        return emptyState();
      }
    };

    let state = loadState();
    let isRemoteReady = false;
    let remoteProtocolVersion = 0;

    const setSyncMessage = (message) => {
      syncMessage.textContent = message;
    };

    const todayKey = () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    };

    const saveLocalState = () => {
      localStorage.setItem(storageKey, JSON.stringify(state));
    };

    const savePendingOperations = () => {
      localStorage.setItem(pendingStorageKey, JSON.stringify(pendingOperations));
    };

    const loadPendingOperations = () => {
      try {
        const stored = JSON.parse(localStorage.getItem(pendingStorageKey));
        if (!Array.isArray(stored)) return;
        pendingOperations = stored.filter(
          (operation) => operation && gpuIds.includes(operation.id)
        );
        operationSequence = pendingOperations.reduce(
          (maximum, operation) => Math.max(maximum, Number(operation.sequence) || 0),
          0
        );
      } catch {
        pendingOperations = [];
      }
    };

    const queueOperation = (operation) => {
      pendingOperations.push({ ...operation, sequence: ++operationSequence });
      savePendingOperations();
    };

    const applyOperationLocally = (operation) => {
      const id = operation.id;
      if (!id || !gpuIds.includes(id)) return;

      if (operation.type === "patch") {
        state[id] = {
          ...(state[id] || { user: "", startDate: "", endDate: "" }),
          ...(operation.fields || {}),
        };
      } else if (operation.type === "set") {
        const item = operation.item || {};
        state[id] = {
          user: item.user || "",
          startDate: item.startDate || "",
          endDate: item.endDate || "",
        };
      } else if (operation.type === "clear") {
        clearGpu(id);
      } else if (
        operation.type === "clearExpired" &&
        state[id]?.endDate === operation.expectedEndDate &&
        state[id].endDate < todayKey()
      ) {
        clearGpu(id);
      }
    };

    const saveState = (operation) => {
      if (operation) queueOperation(operation);
      const expiredCleared = clearExpiredAssignments({ persist: false });
      saveLocalState();
      if (expiredCleared) {
        render();
      } else {
        updateSummary();
      }
      scheduleRemoteSave();
    };

    const syncUrl = (params = {}) => {
      const url = new URL(syncEndpoint);
      Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));
      return url.toString();
    };

    const requestRemote = (params) =>
      new Promise((resolve, reject) => {
        const callbackName = `gpuSyncCallback${Date.now()}${Math.random()
          .toString(36)
          .slice(2)}`;
        const script = document.createElement("script");
        const timeout = window.setTimeout(() => {
          cleanup();
          reject(new Error("Shared sync timed out"));
        }, 10000);
        const cleanup = () => {
          window.clearTimeout(timeout);
          delete window[callbackName];
          script.remove();
        };

        window[callbackName] = (payload) => {
          cleanup();
          resolve(payload);
        };
        script.onerror = () => {
          cleanup();
          reject(new Error("Shared sync request failed"));
        };
        script.src = syncUrl({ ...params, callback: callbackName });
        document.body.appendChild(script);
      });

    const reconcileRemoteState = (payload) => {
      state = normalizeState(payload.state);
      isRemoteReady = true;
      remoteProtocolVersion = Number(payload.protocolVersion || 1);
      pendingOperations.forEach(applyOperationLocally);
      const expiredCleared = clearExpiredAssignments({ persist: false });
      saveLocalState();
      render();
      return expiredCleared;
    };

    const loadRemoteState = async () => {
      if (!syncEndpoint) {
        setSyncMessage("Shared sync is not configured yet. Changes are saved only in this browser.");
        return;
      }

      setSyncMessage("Loading shared GPU assignments...");
      try {
        const payload = await requestRemote({ action: "get" });
        if (!payload?.ok || !payload.state) throw new Error("Invalid shared sync response");
        const expiredCleared = reconcileRemoteState(payload);
        if (remoteProtocolVersion >= 3) {
          syncStatus.textContent = "Shared";
          if (expiredCleared || pendingOperations.length) scheduleRemoteSave();
          setSyncMessage(
            expiredCleared
              ? "Shared data loaded; expired reservations were checked."
              : `Shared data loaded${payload.updatedAt ? `: ${payload.updatedAt}` : "."}`
          );
        } else {
          syncStatus.textContent = "Update required";
          setSyncMessage(
            "Shared sync is read-only until the Google Apps Script is updated to version 3."
          );
        }
      } catch {
        syncStatus.textContent = "Sync error";
        setSyncMessage("Shared data could not be loaded. Unsaved local changes are preserved.");
      }
    };

    const saveRemoteState = async () => {
      if (
        !syncEndpoint ||
        !isRemoteReady ||
        remoteProtocolVersion < 3 ||
        isSavingRemote ||
        !pendingOperations.length
      ) {
        return;
      }

      const sentOperations = pendingOperations.slice();
      const sentSequences = new Set(sentOperations.map((operation) => operation.sequence));
      let retryDelay = 450;
      isSavingRemote = true;
      syncStatus.textContent = "Saving";
      setSyncMessage("Saving changes to the shared sheet...");

      try {
        const payload = await requestRemote({
          action: "apply",
          payload: JSON.stringify(sentOperations),
        });
        if (!payload?.ok || !payload.state) throw new Error("Shared save was rejected");
        pendingOperations = pendingOperations.filter(
          (operation) => !sentSequences.has(operation.sequence)
        );
        savePendingOperations();
        reconcileRemoteState(payload);
        syncStatus.textContent = "Shared";
        setSyncMessage("Saved to the shared sheet.");
      } catch {
        retryDelay = 5000;
        syncStatus.textContent = "Retrying";
        setSyncMessage("Shared save failed. Your change is kept locally and will be retried.");
      } finally {
        isSavingRemote = false;
        if (pendingOperations.length) scheduleRemoteSave(retryDelay);
      }
    };

    const scheduleRemoteSave = (delay = 450) => {
      window.clearTimeout(saveTimer);
      saveTimer = window.setTimeout(saveRemoteState, delay);
    };

    const clearGpu = (id) => {
      state[id] = { user: "", startDate: "", endDate: "" };
    };

    const clearExpiredAssignments = ({ persist = true } = {}) => {
      const today = todayKey();
      let didClear = false;

      gpuIds.forEach((id) => {
        const item = state[id];
        if (!item?.endDate || item.endDate >= today) return;
        const expectedEndDate = item.endDate;
        clearGpu(id);
        queueOperation({ type: "clearExpired", id, expectedEndDate });
        didClear = true;
      });

      if (didClear && persist) {
        saveLocalState();
        render();
        scheduleRemoteSave();
      }

      return didClear;
    };

    const scheduleExpirationCheck = () => {
      window.clearTimeout(expirationTimer);
      const now = new Date();
      const nextMidnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1,
        0,
        0,
        1
      );

      expirationTimer = window.setTimeout(() => {
        clearExpiredAssignments();
        scheduleExpirationCheck();
      }, nextMidnight.getTime() - now.getTime());
    };

    const updateSummary = () => {
      const used = gpuIds.filter((id) => state[id]?.user).length;
      usedCount.textContent = used;
      freeCount.textContent = gpuIds.length - used;

      gpuIds.forEach((id) => {
        const status = document.querySelector(`[data-status-for="${id}"]`);
        if (!status) return;
        const isUsed = Boolean(state[id]?.user);
        status.textContent = isUsed ? "In use" : "Available";
        status.classList.toggle("is-used", isUsed);
      });
    };

    const memberOptions = () =>
      [`<option value="">Available</option>`]
        .concat(members.map((member) => `<option value="${member}">${member}</option>`))
        .join("");

    const renderCard = (server, index) => {
      const id = `${server.prefix}-${index}`;
      const data = state[id] || { user: "", startDate: "", endDate: "" };

      return `
        <article class="gpu-card">
          <div class="gpu-card-top">
            <div class="gpu-name">GPU ${index}</div>
            <div class="gpu-status" data-status-for="${id}">Available</div>
          </div>
          <div class="gpu-field">
            <label for="${id}-user">User</label>
            <select id="${id}-user" data-gpu-field="user" data-gpu-id="${id}">
              ${memberOptions()}
            </select>
          </div>
          <div class="gpu-date-row">
            <div class="gpu-field">
              <label for="${id}-start">Start date</label>
              <input id="${id}-start" type="date" value="${data.startDate}" data-gpu-field="startDate" data-gpu-id="${id}">
            </div>
            <div class="gpu-field">
              <label for="${id}-end">Expected end</label>
              <input id="${id}-end" type="date" value="${data.endDate}" data-gpu-field="endDate" data-gpu-id="${id}">
            </div>
          </div>
          <button class="gpu-button gpu-clear" type="button" data-clear-gpu="${id}">Clear</button>
        </article>
      `;
    };

    const render = () => {
      board.innerHTML = servers
        .map(
          (server) => `
            <section class="gpu-server gpu-server-${server.prefix.toLowerCase()}">
              <div class="gpu-server-header">
                <h2 class="gpu-server-title">${server.name}</h2>
                <div class="gpu-server-count">${server.count} GPUs</div>
              </div>
              <div class="gpu-grid">
                ${Array.from({ length: server.count }, (_, index) => renderCard(server, index)).join("")}
              </div>
            </section>
          `
        )
        .join("");

      gpuIds.forEach((id) => {
        const select = document.getElementById(`${id}-user`);
        if (select) select.value = state[id]?.user || "";
      });

      updateSummary();
    };

    board.addEventListener("input", (event) => {
      const field = event.target.dataset.gpuField;
      const id = event.target.dataset.gpuId;
      if (!field || !id) return;

      state[id] = {
        ...(state[id] || { user: "", startDate: "", endDate: "" }),
        [field]: event.target.value,
      };
      saveState({ type: "patch", id, fields: { [field]: event.target.value } });
    });

    board.addEventListener("click", (event) => {
      const id = event.target.dataset.clearGpu;
      if (!id) return;

      clearGpu(id);
      saveState({ type: "clear", id });
      render();
    });

    document.getElementById("gpu-reset").addEventListener("click", () => {
      const confirmation = window.prompt(
        'This clears every shared GPU assignment for everyone. Type "CLEAR ALL" to continue.'
      );
      if (confirmation !== "CLEAR ALL") return;
      state = emptyState();
      gpuIds.forEach((id) => queueOperation({ type: "clear", id }));
      saveState();
      render();
    });

    document.getElementById("gpu-export").addEventListener("click", () => {
      const blob = new Blob([JSON.stringify(state, null, 2)], {
        type: "application/json",
      });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "irsl-gpu-management.json";
      link.click();
      URL.revokeObjectURL(link.href);
    });

    document.getElementById("gpu-import-button").addEventListener("click", () => {
      importFile.click();
    });

    importFile.addEventListener("change", async () => {
      const file = importFile.files?.[0];
      if (!file) return;

      try {
        const imported = JSON.parse(await file.text());
        state = normalizeState(imported);
        gpuIds.forEach((id) => queueOperation({ type: "set", id, item: state[id] }));
        saveState();
        render();
      } catch {
        window.alert("The selected file could not be imported.");
      } finally {
        importFile.value = "";
      }
    });

    document.getElementById("gpu-refresh").addEventListener("click", () => {
      loadRemoteState();
    });

    loadPendingOperations();
    pendingOperations.forEach(applyOperationLocally);
    clearExpiredAssignments({ persist: false });
    saveLocalState();
    render();
    scheduleExpirationCheck();
    loadRemoteState();
  })();
</script>
