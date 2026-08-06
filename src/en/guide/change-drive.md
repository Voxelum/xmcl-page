# How to Move XMCL & Game Data to Another Drive

When installing X Minecraft Launcher or downloading many Minecraft versions, mods, resource packs, and shaders, your system drive (`C:`) can quickly run out of storage space.

This guide explains how to **move the launcher application** and **relocate your Minecraft game data** to a secondary disk drive (such as `D:` or `E:`).

:::tip Quick Recommendation
If you only want to free up disk space on `C:`, you only need to **[Change the Game Data Directory](#1-relocating-minecraft-game-data-recommended)** inside XMCL. Game data (mods, saves, versions) accounts for 99% of used storage space!
:::

---

## 1. Relocating Minecraft Game Data (Recommended)

XMCL allows you to store all heavy Minecraft files (versions, mods, instances, resource packs, assets) on any drive without reinstalling the launcher.

### Steps to Change the Data Directory:
1. Launch **X Minecraft Launcher**.
2. Open **Settings** (click the gear icon ⚙️ in the lower-left corner).
3. Go to **Global Settings** -> **General / Storage**.
4. Find the **Data Directory / Path** setting.
5. Click **Browse** / **Change Path** and select a folder on your desired drive (e.g. `D:\XMCL-Data` or `E:\MinecraftData`).
6. Confirm the selection. XMCL will automatically use the new location for all current and future Minecraft instances, mods, and downloads!

---

## 2. Moving the Launcher Application Binary

Depending on which package format you used to install XMCL, moving the launcher executable requires different methods:

### Option A: Portable ZIP Package
- **Features**: Fully portable and standalone.
- **How to move**:
  1. Close XMCL if it is running.
  2. Simply copy or cut-and-paste the extracted `XMCL` folder from `C:\` to your new drive (e.g. `D:\Games\XMCL`).
  3. Run `xmcl.exe` directly from the new directory. You can create a desktop shortcut from `xmcl.exe`.

### Option B: AppX / Online AppInstaller / WinGet
- **Why simple copy fails**: AppX, AppInstaller, and WinGet install XMCL as a sandboxed Windows package in protected system paths (`C:\Program Files\WindowsApps` and `%LocalAppData%\Packages`). Manually copying these folders in File Explorer will cause Windows permission errors.
- **How to move using Windows Settings**:
  1. Press `Win + I` to open **Windows Settings**.
  2. Navigate to **Apps** -> **Installed apps** (or *Apps & features*).
  3. Search for **X Minecraft Launcher**.
  4. Click the three dots `...` next to XMCL and select **Move**.
  5. Select your target drive (e.g. `D:`) from the dropdown list and click **Move**. Windows will cleanly transfer the application binary and its sandbox data to the selected drive.

:::tip Change Default Windows AppX Install Location
To make future AppX / WinGet applications install to another drive by default:
Open **Settings** -> **System** -> **Storage** -> **Advanced storage settings** -> **Where new content is saved** -> Change *New apps will save to:* to drive `D:`.
:::

### Option C: macOS (DMG)
- Drag `X Minecraft Launcher.app` from `/Applications` to any connected disk volume, or keep the app in `/Applications` while changing the Game Data Directory inside launcher settings to an external drive.

### Option D: Linux (AppImage / Flatpak / Deb / RPM)
- For **AppImage**, simply move the `.AppImage` file to any mounted partition (e.g. `/media/data/XMCL.AppImage`).
- For **Deb / RPM / Flatpak**, system binaries remain in standard system paths, but all heavy game assets can be directed to another drive using **Section 1**.
