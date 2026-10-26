# Diagnostic Report (.zip) & Privacy

<!-- xmcl-auto-fallback -->
::: info 本章節暫無繁體中文翻譯
目前內容以英文顯示。如果您願意協助翻譯或改進文件，歡迎造訪 [xmcl-page GitHub 倉庫](https://github.com/voxelum/xmcl-page) 提交 PR。
:::

::: tip TROUBLESHOOTING HUB
Looking for crash fixes or exit codes?
- **[Launch & Crash Troubleshooting](./troubleshooting.md)** - Java runtime errors, memory allocation, graphics drivers, and corrupted mod caches.
- **[Crash Logs & Exit Codes](./crash-logs.md)** - Log paths (`minecraft/logs`, `crash-reports`), exit codes (0xC0000005, 1, 137), and how to read stack traces.
:::

When troubleshooting complex launcher crashes, peer-to-peer connection failures, or dependency download hangs, community helpers or developers may request an **XMCL Diagnostic Report**.

This guide details how to export the report, what diagnostic telemetry it bundles, and how XMCL strictly protects your personal privacy and account credentials.

---

## 1. How to Generate a Diagnostic Report

You can generate a diagnostic report directly inside XMCL:

1. Open **Settings** from the bottom-left sidebar navigation.
2. Navigate to the **Data & Storage** or **Troubleshooting** section.
3. Click **Export Diagnostic Report** (or press `Ctrl+Shift+D` / `Cmd+Shift+D` in recent versions).
4. XMCL aggregates current logs, environment specs, and anonymized instance manifests into a `.zip` archive on your desktop or chosen folder (e.g., `xmcl-diagnostic-2026-10-26.zip`).

Alternatively, if XMCL fails to launch entirely:
- Zip the folder manually:
  - **Windows**: `%APPDATA%\xmcl\logs\`
  - **macOS**: `~/Library/Application Support/xmcl/logs/`
  - **Linux**: `~/.config/xmcl/logs/`

---

## 2. What Is Collected in the Report?

The `.zip` archive is transparent and unencrypted so you can inspect every file before sharing it. It typically contains:

| File / Folder | Contents & Purpose |
| :--- | :--- |
| `main.log` | Core Electron / DeskGap backend process log: launcher startup, filesystem I/O, IPC messages, update checks. |
| `renderer.log` | Frontend interface log: Vue 3 render cycles, UI errors, route changes. |
| `device.json` | System runtime architecture: OS version, kernel/build number, total system RAM, CPU architecture (`x64`, `arm64`), detected GPU driver vendor. |
| `java.json` | Scanned Java installations: detected JDK versions, paths, major version numbers, vendor (`Adoptium`, `Oracle`, `Zulu`). |
| `instance.json` (redacted) | Active instance configuration: Minecraft version, mod loader (Fabric, Forge, NeoForge, Quilt), allocated memory (`-Xmx`), custom JVM arguments. |
| `network.log` | Download attempts, CDN mirror fallback events, STUN/TURN handshake logs for P2P lobbies. |

---

## 3. Strict Privacy: What Is NEVER Collected

XMCL operates on an open-source, local-first privacy model. Diagnostic reports strictly exclude:

- **Microsoft / Xbox OAuth Tokens**: Access tokens, refresh tokens, and session identifiers are stored in OS-encrypted credential storage (Windows DPAPI, macOS Keychain, Linux Secret Service / Keyring) and are never written to log files.
- **Yggdrasil / Offline Passwords**: No passwords, auth server secrets, or encryption keys are logged.
- **Personal Paths & Names**: Local system paths containing sensitive user identifiers (such as `/home/username/` or `C:\Users\Username\`) are automatically scrubbed or masked as `<USER_HOME>` or sanitized placeholders in exported reports.
- **Game World & Save Data**: Worlds, player inventories, server IP addresses from `servers.dat`, and chat histories are completely excluded.
- **Custom Mod Configs Containing Tokens**: Any mod configs or webhook URLs (e.g., Discord webhook integration mods) are excluded.

---

## 4. How to Inspect & Sanitize Before Sharing

Before posting your diagnostic `.zip` file on public support forums:

1. **Extract and inspect**: Unpack the `.zip` archive using 7-Zip, WinRAR, or your system archive manager.
2. **Text search for sensitive info**: Open `main.log` or `renderer.log` in VS Code, Notepad++, or text editor. Search for your public IP address or local computer name if you prefer complete anonymity.
3. **Delete unnecessary instance logs**: If an issue is strictly related to launcher updates or UI behavior, you can delete old `logs/latest.log` game output files from the archive before sending.

---

## 5. Where to Safely Share Your Diagnostic Report

Once inspected, you can submit the report through official channels:

- **GitHub Issues**: Attach the `.zip` directly to an issue ticket at [voxelum/x-minecraft-launcher/issues](https://github.com/voxelum/x-minecraft-launcher/issues).
- **Official Discord**: Share in the `#support` or `#troubleshooting` channels on [XMCL Discord](https://discord.gg/W57tNmF).
- **Reddit**: Upload redacted log excerpts to [mclo.gs](https://mclo.gs) or pastebin services and link them in the [r/xmcl](https://www.reddit.com/r/xmcl/) community.

::: tip PRO-TIP
Never upload raw log files containing full directory paths to unverified public paste sites. When pasting snippets into Discord or GitHub, use [mclo.gs](https://mclo.gs), which automatically hides known IP addresses, authentication tokens, and system usernames.
:::
