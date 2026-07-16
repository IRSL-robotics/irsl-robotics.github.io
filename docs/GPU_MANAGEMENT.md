# GPU Management Shared Sync

The GPU management page can share one live state across lab members through a
Google Sheet and a small Google Apps Script web app.

## Setup

1. Create a Google Sheet.
2. Open `Extensions` > `Apps Script`.
3. Paste the full contents of `docs/gpu-management-apps-script.js`.
4. Click `Deploy` > `New deployment`.
5. Select `Web app`.
6. Set `Execute as` to `Me`.
7. Set `Who has access` to `Anyone with the link` or your KAIST Google domain.
8. Deploy and copy the Web app URL.
9. Paste that URL into `_data/gpu_management.yml`:

```yaml
sync_endpoint: "https://script.google.com/macros/s/AKfycbzkX0uxm4t6Ppev19M3f6bAeEhHW3yi5NRNqWIESQ4qCNOb5f8BdT0l0dFeRD_x7Dd-ZQ/exec"
```

After the endpoint is configured and the site is deployed, everyone using the
GPU management page will read from and save to the same Google Sheet.

When `docs/gpu-management-apps-script.js` changes, create a new deployment
version from `Deploy` > `Manage deployments` > `Edit` before deploying the site
change. Deploy the Apps Script first, then deploy the site. The page intentionally
keeps shared sync read-only when it detects an older script, because the
acknowledged operation-based sync in protocol version 3 is required to prevent
failed saves from looking successful and to prevent an old browser tab from
overwriting a reservation that another user extended.

## Notes

- The page keeps a browser-local backup and falls back to it if the shared sheet
  cannot be reached.
- Unsaved operations are also kept in the browser and retried after a temporary
  network or Apps Script failure. They are removed only after the server confirms
  the save and returns the resulting shared state.
- The Google Sheet is still readable as a normal table with one row per GPU.
- Shared saves update only the GPU fields that changed. Automatic expiration is
  conditional on the Expected End value still matching, so a stale browser tab
  cannot clear a reservation that has since been extended.
- Shared reads and writes use the same script lock, so a refresh cannot observe
  the sheet between its clear-and-rewrite steps.
- The destructive `Clear all` action requires typing `CLEAR ALL`; it clears the
  shared board for every user, not only the current browser.
- GPU numbers are zero-based (`GPU 0`, `GPU 1`, ...). If this script changes,
  update and redeploy the Google Apps Script web app. Existing one-based rows in
  the sheet are migrated by the page and rewritten as zero-based rows on the
  next shared save.
- Anyone who can access the web app URL can update the GPU board, so restrict
  the deployment to the lab domain if that is available.
