# Troubleshooting Installation & Launch Issues

If you encounter issues when installing Minecraft, mod loaders (Forge/Fabric/NeoForge/Quilt), mods, modpacks, or shaders, or if the game fails to launch, this guide will help you resolve them step-by-step.

---

## 🌐 1. Download Fails or Hangs (Network Issues)

### Symptoms
* Downloading Minecraft, assets, libraries, or Forge/Fabric gets stuck at `0%`.
* The launcher throws timeout or connection errors (`CONNECTION_TIMED_OUT`, `NAME_NOT_RESOLVED`, `HTTP_STATUS 504`).

### Solutions

:::tip Try a Download Mirror
If the official Mojang or Forge servers are slow or blocked by your internet service provider, you can switch to a mirror:
1. Click **Settings** (gear icon) in the left sidebar.
2. Scroll to the **Network Settings** section.
3. Find the **Download Source / Mirror** setting.
4. Switch from **Default** to **BMCLAPI** or **MCBBS** (highly reliable mirrors that copy official assets).
:::

:::info Configure a Proxy
If you are behind a firewall or in a region with restricted internet access, configure a proxy in the launcher:
1. Under **Settings** -> **Network Settings**, find the proxy options.
2. Configure your SOCKS5 or HTTP proxy address.
3. Test the connection.
:::

---

## 📦 2. Mod / Modpack Download Fails (CurseForge API Restriction)

### Symptoms
* When downloading a modpack or mod from CurseForge, some mods fail to download and show a warning icon.
* A message warns about "Restricted third-party downloads".

### Cause
Some mod authors on CurseForge disable third-party launcher API downloads to force players to visit their webpage.

### Solution
XMCL handles this by allowing you to manually download the missing files:
1. Look at the download task details in the launcher's task manager (top right).
2. Click the link provided next to the failed mod to open its download page in your web browser.
3. Download the `.jar` file manually from your browser.
4. **Drag-and-drop** the downloaded `.jar` file directly onto the launcher's window (or place it in the `mods/` directory of the instance).
5. XMCL will automatically match it and resume/complete the installation.

---

## 🔄 3. Infinite File Corruption Loop (Checksum Mismatch)

### Symptoms
* The launcher continuously redownloads a library or asset file, saying it is corrupted.
* The game fails to start because validation fails repeatedly.

### Cause
A file download was interrupted, and a corrupted partial file is locked in your cache, preventing the launcher from overriding it correctly.

### Solution
1. Find the path of the corrupted file shown in the launcher diagnostics or logs (e.g., `libraries/org/lwjgl/...`).
2. Open your instance data folder (click the Folder icon at the top right of the instance dashboard).
3. Navigate to the path specified in the error and **delete the containing folder** of the corrupted library/asset.
4. Click **Repair** or restart the launch process. The launcher will download a fresh, clean copy.

---

## ☕ 4. Game Crashes Instantly (Java Version Mismatch)

### Symptoms
* The game starts but crashes immediately with exit code `1` or `-1`.
* The log says `UnsupportedClassVersionError` or "Java not found".

### Cause
Each Minecraft version requires a specific version of Java (JDK). Using the wrong one will cause the game to crash.

### Solution
XMCL has an automatic Java manager that downloads correct JDK versions for you.

:::warning Java Compatibility Matrix
Ensure your instance is using the correct Java version:
* **Minecraft 1.12.2 and older:** Java 8
* **Minecraft 1.16 - 1.17:** Java 16 / 17
* **Minecraft 1.18 - 1.20.4:** Java 17
* **Minecraft 1.20.5+:** Java 21
:::

#### How to manage Java in XMCL:
1. Go to the instance settings (gear icon next to the Play button).
2. Look at the **Java** section.
3. Click the selection box. XMCL will list all detected Java versions on your system and highlight compatible ones.
4. If you don't have the correct Java version, click **Install Java** to let the launcher download the optimal version automatically.

---

## 📑 5. Launcher Won't Open or Black Screen

### Symptoms
* Double-clicking the launcher does nothing.
* The launcher window opens but remains completely black.

### Solution
You can find the log files to see what is causing the crash:
1. Go to your local app data directory:
   * **Windows:** `%appdata%\xmcl`
   * **macOS:** `~/Library/Application Support/xmcl`
   * **Linux:** `~/.config/xmcl`
2. Open the `logs` folder and look for the latest `main.log` file.
3. Send this log file to the development team on Discord or GitHub for support.
