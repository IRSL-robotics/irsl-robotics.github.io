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
sync_endpoint: "https://script.google.com/macros/s/AKfycbx8VsLt0F1DZDroHB2MQ6BPhqMmBhL6sELVQGcOioxL3Oka6LuCzGIacvmF6q3wIi1_WQ/exec"
```

After the endpoint is configured and the site is deployed, everyone using the
GPU management page will read from and save to the same Google Sheet.

## Notes

- The page keeps a browser-local backup and falls back to it if the shared sheet
  cannot be reached.
- The Google Sheet is still readable as a normal table with one row per GPU.
- Anyone who can access the web app URL can update the GPU board, so restrict
  the deployment to the lab domain if that is available.
