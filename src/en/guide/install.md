# Installation Guide

XMCL provides multiple installation formats tailored for Windows, macOS, and Linux.

:::tip Useful Guides
- **Need to move the launcher or game data to drive D: or E:?** Read the [Drive Relocation Guide](./change-drive.md).
- **Want to play Minecraft Bedrock Edition (Windows 10/11)?** Read the [Bedrock Edition Guide](./bedrock.md).
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

### 3. DeskGap (Windows x64) — Ultra-Lightweight Build (v0.72.0+)
- **What is DeskGap?** Starting with XMCL **0.72.0**, an official lightweight package powered by DeskGap and the system's native **Microsoft Edge WebView2** engine is available alongside standard Electron builds.
- **Why is it special?**
  - **Dramatically Smaller Download Size**: Standard Electron bundles the entire Chromium browser engine (~120–160 MB). DeskGap reuses the Windows built-in Edge Chromium engine, slashing the download size down to just **~15–25 MB** (over 80% reduction).
  - **Lower Memory Usage**: Shares existing Windows WebView2 system processes rather than spawning redundant renderer processes, saving precious RAM for heavily modded Minecraft instances.
  - **Faster Cold Starts**: Because the system web engine is often already pre-cached in Windows, DeskGap starts almost instantly.
  - **Full Capability**: Includes the complete Node.js backend, P2P WebRTC networking, mod installers, and Agnes AI.
- **Requirement**: Windows 10 (with WebView2 installed) or Windows 11 (WebView2 is built-in by default).

### 4. Running on Windows 7 / 8 / 8.1 (VxKex Extended Kernel)

:::warning Important Compatibility Notice
Modern XMCL is built on **Electron 43 / Chromium 130+**. Chromium and Microsoft have **officially dropped all support for Windows 7, 8, and 8.1**. The launcher will **not run natively** on legacy Windows versions out of the box.
:::

:::details Workaround using VxKex Extended Kernel
You can run XMCL on Windows 7 / 8 using the unofficial **VxKex** extended kernel:

1. Download and install [VxKex-NEXT](https://github.com/YuZhouRen86/VxKex-NEXT).
2. Right-click `xmcl.exe` -> **Properties** -> **VxKex** tab.
3. Check **"Enable VxKex NEXT for this program"** and **"Report other versions of Windows"**, then apply.

**Compatibility status on Windows 7/8:**
- **Singleplayer (Java Edition)** — Works normally with an appropriate Java runtime (Java 8 / 17 / 21).
- **P2P WebRTC Multiplayer** — Not supported (requires Windows 10+ network APIs).
- **Bedrock Edition (UWP)** — Not supported (requires Windows 10/11 UWP framework).
:::

---

## macOS

### DMG Package
1. Download and open the `.dmg` file.
2. Drag **XMCL.app** to your **Applications** folder.

:::warning Gatekeeper Clearance
To clear the unsigned application warning on macOS, run this command in Terminal:

```sh
sudo xattr -c /Applications/XMCL.app
```
:::

---

## Linux

On Linux, XMCL focuses on modern universal packaging formats (Snap is not supported, and Arch AUR has been deprecated in favor of official Flatpak distribution):

### 1. Flatpak (Flathub) — Recommended
- The official, primary recommended distribution format for **Arch Linux**, **Fedora**, **Ubuntu**, **Debian**, and **Steam Deck (SteamOS)**.
- Provides complete sandboxing, automatic isolation, and seamless updates via Flathub:
  ```sh
  flatpak install flathub app.xmcl.XMCL
  ```

### 2. AppImage — Universal & Standalone
- Single executable that runs on any modern Linux distribution without installation:
  ```sh
  chmod +x xmcl-*.AppImage
  ./xmcl-*.AppImage
  ```
- Works out of the box on **Steam Deck (SteamOS Desktop Mode)**.

### 3. Native Tarball (.tar.xz) & Distribution Packages
- Standalone `.tar.xz` archives, as well as native `.deb` (Debian/Ubuntu) and `.rpm` (Fedora/RHEL/openSUSE) packages are provided on our releases page.
