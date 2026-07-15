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

---

## 📋 6. Generate a Diagnostic Report (Recommended First Step)

Before searching for raw log files manually, we highly recommend generating a **Diagnostic Report** inside the launcher. This compiles all launcher logs, game logs, and system environment info into a single package, allowing the community or developers to help you much faster.

### How to Generate a Report:
1. Click on the **Help & Feedback** menu in the launcher header.
2. Click **Generate Report** to bundle launcher diagnostics and logs.

   <video src="/guidephoto/Generate%20Report.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

---

## 📑 7. How to Analyze Launcher & Game Logs

If you prefer to find the logs manually, they will tell you exactly what is happening. Here is how to locate them and understand common crash scenarios.

### 🔍 How to Find the Logs

Depending on whether it's a launcher error or a game crash, you will need to check different logs:

#### A. Launcher Logs (`main.log`)
For launcher crashes, download failures, network errors, or login issues:
- **Windows:** Press `Win + R`, type `%appdata%\xmcl\logs` and press Enter.
- **macOS:** Navigate to `~/Library/Application Support/xmcl/logs`.
- **Linux:** Go to `~/.config/xmcl/logs`.
- Find the latest file named `main.log`.

#### B. Game Logs (`latest.log` & Crash Reports)
For mod conflicts, Minecraft crashes, performance issues, or Java errors:
- Open the instance card in the launcher.
- Click the **Folder** icon at the top right of the instance dashboard to open its directory.
- Go to the `logs` folder and open `latest.log`.
- If the game crashed and closed, go to the `crash-reports` folder and look for the newest `.txt` file (named like `crash-YYYY-MM-DD_HH.MM.SS-client.txt`).

---

### 🛠 How to Analyze Logs & Fix Common Errors

Open the log file in any text editor (like Notepad) and look for the following errors (you can use `Ctrl + F` to search):

#### 🔴 Case 1: Out of Memory Error
- **What to look for:** `java.lang.OutOfMemoryError: Java heap space` or `Exit code: -805306369`.
- **Explanation:** You haven't allocated enough RAM for the game to load all the mods.
- **How to fix:**
  1. Open instance settings (gear icon next to the Play button).
  2. Scroll down to the **Java** section.
  3. Increase the **Min Memory** and **Max Memory** (e.g. set Max Memory to `4096` or `6144` MB).

#### 🔴 Case 2: Mod Mismatch or Missing Dependencies
- **What to look for:** `Mixin transformation failed`, `DependencyResolutionException`, or lines like `Requires mod 'fabric' (version X or later), but only version Y is installed`.
- **Explanation:** One of your mods requires another mod (dependency) that is missing, or two mods are incompatible with each other.
- **How to fix:** Read the error line carefully. It usually names the missing mod. Download and place the missing mod jar file into your `mods` folder, or update the conflicting mod to a compatible version.

#### 🔴 Case 3: Java Version Mismatch
- **What to look for:** `java.lang.UnsupportedClassVersionError: ... has been compiled by a more recent version of the Java Runtime`.
- **Explanation:** You are running a Minecraft version or modpack with an incompatible Java version (e.g., using Java 8 for Minecraft 1.20).
- **How to fix:** Open instance settings, go to the **Java** section, and click **Install Java** to download the recommended Java version for that specific Minecraft version.

#### 🔴 Case 4: Graphics Card Driver Crash
- **What to look for:** `GLFW error 65542: WGL: The driver does not seem to support OpenGL` or `Pixel format not accelerated`.
- **Explanation:** Your graphics card drivers are outdated, missing, or the game is running on your CPU's integrated graphics instead of your dedicated GPU.
- **How to fix:** Update your graphics drivers to the latest version from the official manufacturer website (NVIDIA, AMD, or Intel). For laptops, ensure the launcher is running on the high-performance GPU in your system settings.

---

### ❓ What to Do If You Can't Understand the Logs?

If you've looked through the logs/reports and still don't know what is causing the crash, do not worry! The XMCL community is here to help across multiple platforms:

#### 1. Join Our Official Discord Server
- Get instant help from developers and experienced players.
- Join via: **[Discord Server Link](https://discord.gg/W5XVwYY7GQ)**
- **How to ask:** Go to the **#feedback-and-idea** channel and upload your generated diagnostic report or crash log file.
- Look at this illustration of our feedback channel:
  
  <img src="/guidephoto/Discord-feedback.gif" style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

#### 2. Ask on Reddit
- You can post your issues and ask the community on our subreddit:
- Visit: **[r/XMCL Subreddit](https://www.reddit.com/r/XMCL/)**

#### 3. Open a GitHub Issue
- If you believe you found a bug in the launcher itself, you can file a bug report.
- Submit here: **[XMCL GitHub Issues](https://github.com/Voxelum/x-minecraft-launcher/issues)**
- Paste the content of your report or logs inside the issue description so developers can debug it.
