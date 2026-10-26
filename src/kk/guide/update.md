# Update Guide

<!-- xmcl-auto-fallback -->
::: info Бұл бөлім әлі қазақ тіліне аударылмаған
Мәтін ағылшын тілінде көрсетіледі. Аударма жасауға көмектескіңіз келсе, [xmcl-page GitHub репозиторийіне](https://github.com/voxelum/xmcl-page) қосылыңыз.
:::

This guide covers how to update XMCL across Windows, macOS, and Linux, and how to verify that your game instances, saves, and accounts remain completely safe during updates.

:::tip Data Safety Guarantee
Updating XMCL **never wipes your game instances, saves, modpacks, or login credentials**. User data is stored separately from the launcher executable files in dedicated system directories.
:::

---

## Windows

### 1. In-App Automatic Updates (Standard)
1. When a new release is published, XMCL displays an update notification badge on the top title bar.
2. Click the update notification to review release notes and begin the background download.
3. Once downloaded, click **Restart & Apply Update**. XMCL will restart with the new version.

### 2. AppInstaller & APPX Packages
- If you installed XMCL via the `xmcl.appinstaller` package, Windows automatically checks for and installs updates in the background on app launch using Windows Delivery Optimization.
- Only differential, changed binary blocks are downloaded, saving bandwidth.
- If an update fails, download the latest `xmcl.appinstaller` from the official website and run it to repair the installation.

### 3. Portable ZIP & DeskGap Builds
- **Portable ZIP**: Download the latest `xmcl-*-win32-x64.zip` from our releases page, extract it, and replace the existing launcher executable files. Your instances, settings, and worlds will be immediately detected since data lives in `%AppData%\xmcl`.
- **DeskGap (v0.72.0+)**: Extract the new `xmcl-*-deskgap-win32-x64.zip` over your current folder.

---

## macOS

### 1. In-App Update
- XMCL automatically queries GitHub release channels for macOS builds.
- When notified, download and install the update with a single click.

### 2. Manual DMG Update
1. Download the latest `.dmg` matching your Mac's processor:
   - **Apple Silicon (M1 / M2 / M3 / M4)**: `arm64.dmg`
   - **Intel Core Macs**: `x64.dmg`
2. Open the `.dmg` file.
3. Drag **XMCL.app** into your **Applications** folder and select **Replace**.

:::warning Clearing macOS Gatekeeper Quarantine
If macOS prevents opening the newly updated app with a warning stating the file is damaged or from an unidentified developer, run this command in **Terminal**:

```sh
sudo xattr -cr /Applications/XMCL.app
```
:::

---

## Linux & Steam Deck

### 1. AppImage
- **Direct Replacement**: Download the latest `xmcl-*.AppImage`, make it executable, and run:
  ```sh
  chmod +x xmcl-*.AppImage
  ./xmcl-*.AppImage
  ```
- **AppImageUpdate**: If you use desktop integration tools like AppImageUpdate or Geary, XMCL supports binary delta-updates directly.
- **Steam Deck**: In SteamOS Desktop Mode, replace your existing `xmcl.AppImage` in your `Applications` or `Games` directory.

### 2. Flatpak (Flathub) — Recommended
Flatpak is the officially maintained, primary distribution format on Linux (including Arch Linux, Fedora, Ubuntu, and SteamOS). Update it via your system Software Center (GNOME Software, KDE Discover) or run:

```sh
flatpak update app.xmcl.XMCL
```

### 3. Native Tarball & Distribution Packages
For `.tar.xz`, `.deb`, or `.rpm` packages, download the latest package from our GitHub Releases page and install over your previous version.

---

## Backup & Storage Locations

If you want to perform a manual safety backup before an update, your data is stored in the following directories:

::: code-group
```cmd [Windows]
%AppData%\xmcl
```
```sh [macOS]
~/Library/Application Support/xmcl
```
```sh [Linux]
~/.config/xmcl
```
:::

You can simply copy this folder to an external drive or cloud storage to create a full backup of all instances, accounts, and configurations.
