# Installation & Package Selection Guide

XMCL provides multiple installation formats tailored for different operating systems and user preferences. This guide explains the differences between each package format, how they work, and which option is best for your setup.

---

## 💻 Windows Package Formats

### 1. App Installer (`.appinstaller`) ⭐ *Recommended for Windows 10/11*
* **How it works:** A web installer file provided by Microsoft Windows. When opened, it automatically downloads and installs the latest version of XMCL directly from Microsoft's CDN.
* **Key Benefits:**
  * **Automatic Background Updates:** Seamlessly updates when launching the launcher.
  * **Incremental Delta Updates:** Downloads only updated files, saving bandwidth and time.
* **Best Choice For:** Most Windows 10 & 11 users who want automatic updates without manual re-downloads.

---

### 2. AppX Package (`.appx` / `.msix`)
* **How it works:** A native Windows UWP/MSIX package file. Installs inside the Windows App Container sandbox.
* **Key Benefits:**
  * **System Isolation:** Registry changes and temporary files are isolated within the app container.
  * **Clean Uninstallation:** When uninstalled, all app cache and registry entries are completely removed without leaving leftover clutter.
* **Best Choice For:** Windows 10/11 users who want a direct installer file with sandboxed security.

---

### 3. Zip (x64) Portable Archive
* **How it works:** A standard compressed `.zip` file containing a standalone, portable version of XMCL.
* **Key Benefits:**
  * **Zero Installation Needed:** Extract to any folder and run `X Minecraft Launcher.exe`.
  * **No Admin Privileges Required:** Works on guest accounts or restricted PCs (school/work).
  * **Portable:** Can be placed on a USB flash drive to carry your launcher setup anywhere.
* **Best Choice For:** Advanced users, portable USB setups, or PCs without administrator rights.

---

### 4. WinGet CLI
* **How it works:** Official Windows Package Manager command-line installation.
* **Command:** `winget install CI010.XMinecraftLauncher`
* **Best Choice For:** Power users, developers, and system administrators who prefer command-line setup and automation.

---

### 💻 Legacy Windows (Windows 7 / 8) Support

:::details How to run XMCL on Windows 7 / 8 (via VxKex)
By default, XMCL requires Windows 10 or newer. Users on Windows 7 can run XMCL using the **VxKex Extended Kernel**:
1. Download and install [VxKex-NEXT](https://github.com/YuZhouRen86/VxKex-NEXT).
2. Right-click `X Minecraft Launcher.exe`, open **Properties**, and enable **VxKex** for the program.
3. Check "Enable VxKex NEXT for this program" and "Report other versions of Windows", then apply settings.
4. XMCL will run normally on Windows 7 (all features work except P2P multiplayer).
:::

---

## 🍎 macOS Package Formats

### 1. DMG Disk Image (`x64` / `ARM64`) ⭐ *Recommended for macOS*
* **Architecture Options:**
  * **ARM64:** Native build for Apple Silicon Macs (**M1, M2, M3, M4** chips).
  * **x64:** Build for Intel-based Macs.
* **Installation:** Open the DMG file and drag **X Minecraft Launcher** to your **Applications** folder.

:::warning macOS Gatekeeper (Unsigned App) Permission Fix
Because XMCL is open-source and not signed with an expensive Apple Developer certificate, macOS Gatekeeper may block it upon first launch. Run the following command in Terminal to allow it:

```bash
# Clear quarantine attribute for XMCL
sudo xattr -rd com.apple.quarantine /Applications/X\ Minecraft\ Launcher.app
```
:::

---

### 2. Homebrew Cask
* **Command:** `brew tap voxelum/xmcl` && `brew install --cask voxelum/xmcl/xmcl`
* **Best Choice For:** macOS users who manage applications via Homebrew in Terminal.

---

## 🐧 Linux Package Formats

### 1. Flathub / Flatpak (+ Steam Deck) ⭐ *Recommended for Steam Deck & Flatpak distros*
* **How it works:** Containerized package available directly from Flathub.
* **Key Benefits:** Isolated sandbox, native integration with Steam Game Mode, and automatic updates via Discover / Flatpak.
* **Best Choice For:** **Steam Deck (SteamOS)**, Fedora Silverblue, Endless OS, or any Linux distro with Flatpak support.

---

### 2. Deb (`x64` / `ARM64`)
* **Supported Distros:** Debian, Ubuntu, Linux Mint, Pop!_OS, Elementary OS.
* **Installation:** Double-click or run `sudo apt install ./xmcl.deb`.

---

### 3. RPM (`x64` / `AArch64`)
* **Supported Distros:** Fedora, RHEL, CentOS, openSUSE.
* **Installation:** Double-click or run `sudo dnf install ./xmcl.rpm`.

---

### 4. AppImage (`x64` / `ARM64`)
* **How it works:** Universal single-file executable for any Linux desktop distribution.
* **Installation:** Right-click -> Properties -> Allow executing file as program (or `chmod +x xmcl.AppImage`), then run.

---

### 5. Tar.xz (`x64` / `ARM64`)
* **How it works:** Standard compressed tarball archive for custom extraction and manual desktop shortcut creation.

---

## 📊 Summary: What Package Should You Choose?

| Platform | Best Choice (Recommended) | Portable / Alternative | CLI Installation |
|---|---|---|---|
| **Windows 10/11** | **App Installer** or **AppX** | **Zip (x64)** | `winget install CI010.XMinecraftLauncher` |
| **macOS (M1/M2/M3/M4)** | **DMG (ARM64)** | — | `brew tap voxelum/xmcl` && `brew install --cask voxelum/xmcl/xmcl` |
| **macOS (Intel)** | **DMG (x64)** | — | `brew tap voxelum/xmcl` && `brew install --cask voxelum/xmcl/xmcl` |
| **Linux (Steam Deck)** | **Flathub (Flatpak)** | **AppImage** | — |
| **Linux (Ubuntu/Debian)** | **Deb (x64)** | **AppImage** | — |
| **Linux (Fedora/RHEL)** | **RPM (x64)** | **AppImage** | — |

---

## 📂 Appendix: Game Data Directory Setup

During initial setup, XMCL will ask you to select a **Game Data Directory**. All downloaded game assets, modpacks, Java runtimes, and instances will be stored here.

:::warning Important Data Structure Note
Due to XMCL's unique multi-instance data architecture, **do NOT select your default `.minecraft` directory** as XMCL's data folder. Create a new separate folder (e.g. `D:\XMCLData` or `~/XMCLData`).
:::

For details, refer to the [Data Management Guide](/en/guide/manage.md).
