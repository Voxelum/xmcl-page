# Installation Guide

XMCL provides multiple installation formats tailored for Windows, macOS, and Linux.

:::tip Useful Guides
- 💾 **Need to move the launcher or game data to drive D: or E:?** Read the [Drive Relocation Guide](./change-drive.md).
- 🧱 **Want to play Minecraft Bedrock Edition (Windows 10/11)?** Read the [Bedrock Edition Guide](./bedrock.md).
:::

---

## Windows

Several installation options are available for Windows:

### 1. APPX & Online AppInstaller — Recommended
- **APPX** is the modern Windows 10/11 sandboxed package format. Apps run in an isolated environment. When uninstalled, cache and registry changes are cleanly removed.
- **AppInstaller** automatically downloads and updates the APPX package via secure Microsoft delivery channels with **incremental updates** support.

### 2. Portable ZIP Package
- Requires no installation or administrator privileges.
- Extract the archive anywhere (e.g. `D:\Games\XMCL`) and run `xmcl.exe` directly.
- Ideal for USB drives or secondary disk partitions.

### 3. Running on Windows 7 / 8 / 8.1 (VxKex Extended Kernel)

:::warning Important Compatibility Notice
Modern XMCL is built on **Electron 43 / Chromium 130+**. Chromium and Microsoft have **officially dropped all support for Windows 7, 8, and 8.1**. The launcher will **not run natively** on legacy Windows versions out of the box.
:::

:::details Workaround using VxKex Extended Kernel
You can run XMCL on Windows 7 / 8 using the unofficial **VxKex** extended kernel:

1. Download and install [VxKex-NEXT](https://github.com/YuZhouRen86/VxKex-NEXT).
2. Right-click `xmcl.exe` -> **Properties** -> **VxKex** tab.
3. Check **"Enable VxKex NEXT for this program"** and **"Report other versions of Windows"**, then apply.

**What works and what doesn't on Windows 7/8:**
- ✅ **Singleplayer (Java Edition)** — Works normally with an appropriate Java runtime (Java 8 / 17 / 21).
- ❌ **P2P WebRTC Multiplayer** — Not supported (requires Windows 10+ network APIs).
- ❌ **Bedrock Edition (UWP)** — Not supported (requires Windows 10/11 UWP framework).
:::

---

## macOS

### DMG Package
1. Download and open the `.dmg` file.
2. Drag **XMCL.app** to your **Applications** folder.

:::warning Gatekeeper Clearance
To clear the unsigned application warning on macOS, run this command in Terminal:

```sh
sudo xattr -c /Applications/X\ Minecraft\ Launcher.app
```
:::

---

## Linux

### AppImage
- Universal binary for Linux distributions (Ubuntu, Fedora, Arch, etc.).
- Mark as executable: `chmod +x XMCL.AppImage` and launch.

---

## Game Data Directory Selection

During initial setup, XMCL prompts for a **Game Data Directory**.
- It is recommended to choose a dedicated folder (e.g., `D:\XMCL-Data`).
- For details, see the [Data Management Guide](./manage.md) and [Drive Relocation Guide](./change-drive.md).
