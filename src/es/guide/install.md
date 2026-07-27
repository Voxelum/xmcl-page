# Guía de Instalación y Selección de Paquetes

XMCL provides multiple installation options for Windows, macOS, and Linux. This section breaks down every package available on the download page:

---

## 💻 Formatos de Paquete para Windows

### 1. App Installer (`.appinstaller`) ⭐ *(Recommended for Win 10/11)*
* **Description:** Automatic Microsoft web installer. Downloads and updates XMCL automatically in the background.
* **Best Choice For:** General Windows 10 & 11 users who want hassle-free updates.

### 2. AppX Package (`.appx` / `.msix`)
* **Description:** Sandboxed MSIX package. All registry entries and temporary files are isolated in the app container.
* **Best Choice For:** Users who prefer a direct installer download with clean uninstall support.

### 3. Zip (x64) Portable Archive
* **Description:** Standalone compressed archive. Requires no installation and no administrator rights.
* **Best Choice For:** Portable USB drives, school/work PCs, and advanced users.

### 4. WinGet CLI
* **Command:** `winget install CI010.XMinecraftLauncher`
* **Best Choice For:** Command-line users and sysadmins.

---

## 🍎 Formatos de Paquete para macOS

### 1. DMG Disk Image (`x64` / `ARM64`) ⭐ *(Recommended)*
* **ARM64:** Native build for Apple Silicon (**M1, M2, M3, M4** Macs).
* **x64:** Build for Intel Macs.
* **Gatekeeper Fix:** `sudo xattr -rd com.apple.quarantine /Applications/X\ Minecraft\ Launcher.app`

### 2. Homebrew Cask
* **Command:** `brew tap voxelum/xmcl` && `brew install --cask voxelum/xmcl/xmcl`

---

## 🐧 Formatos de Paquete para Linux

### 1. Flathub / Flatpak (+ Steam Deck) ⭐ *(Recommended for Steam Deck & Flatpak)*
* **Description:** Containerized Flatpak package available from Flathub.
* **Best Choice For:** **Steam Deck (SteamOS)**, Fedora Silverblue, and Flatpak-enabled desktops.

### 2. Deb (`x64` / `ARM64`)
* **Description:** Native package for Debian, Ubuntu, Linux Mint, Pop!_OS (`sudo apt install ./xmcl.deb`).

### 3. RPM (`x64` / `AArch64`)
* **Description:** Native package for Fedora, RHEL, openSUSE (`sudo dnf install ./xmcl.rpm`).

### 4. AppImage (`x64` / `ARM64`)
* **Description:** Universal standalone executable for any Linux distro (`chmod +x xmcl.AppImage`).

### 5. Tar.xz (`x64` / `ARM64`)
* **Description:** Portable tarball archive for custom extraction.

---

## 📊 Resumen: ¿Qué paquete deberías elegir?

| Platform | Best Choice (Recommended) | Portable / Alternative | CLI Installation |
|---|---|---|---|
| **Windows 10/11** | **App Installer** or **AppX** | **Zip (x64)** | `winget install CI010.XMinecraftLauncher` |
| **macOS (M1-M4)** | **DMG (ARM64)** | — | `brew tap voxelum/xmcl` && `brew install --cask voxelum/xmcl/xmcl` |
| **macOS (Intel)** | **DMG (x64)** | — | `brew tap voxelum/xmcl` && `brew install --cask voxelum/xmcl/xmcl` |
| **Linux (Steam Deck)** | **Flathub (Flatpak)** | **AppImage** | — |
| **Linux (Ubuntu/Debian)** | **Deb (x64)** | **AppImage** | — |
| **Linux (Fedora/RHEL)** | **RPM (x64)** | **AppImage** | — |
