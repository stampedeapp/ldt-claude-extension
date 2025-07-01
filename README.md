# Let's Do This MCP Claude Extension

![Let's Do This](./icon.png)

A Claude Desktop extension to connect to the Let's Do This MCP server.

## Installation

1. Download the latest release from the [GitHub releases page](https://github.com/stampedeapp/ldt-claude-extension/releases).
2. Open the Claude Desktop app. Go to Settings > Extensions, and drag the downloaded `.dxt` file into the window.
3. Enter your API key when prompted.

## Shipping new releases

To ship a new release of the extension, use the automated [release](.github/workflows/release.yml) workflow.

- Update the version number of the extension in the `manifest.json` file, as well as the `package.json` file.
- Create and push a new commit with the updated release version.
- Create a new release using the [`gh` CLI](https://cli.github.com/). Always create a new tag for a new release.

```bash
gh release create
```

If the automated release process fails for any reason, you can trigger a manual run of the workflow too.

---

Copyright © 2025 Let's Do This
