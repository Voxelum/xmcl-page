# Minecraft Bedrock Edition Guide

X Minecraft Launcher (XMCL) supports managing, downloading, and launching **Minecraft Bedrock Edition** (also known as *Windows 10/11 Edition* or *UWP Edition*).

This guide covers how to set up Bedrock Edition in XMCL, where package downloads originate, and OS compatibility.

---

## 1. System Requirements & Setup (Windows Only)

Minecraft Bedrock Edition utilizes the Windows UWP (Universal Windows Platform) package architecture (`Microsoft.MinecraftUWP`).

### Step 1: Enable Windows Developer Mode
To allow XMCL to switch and register extracted Bedrock version packages on your system without re-downloading from the Microsoft Store each time:

1. Press `Win + I` to open **Windows Settings**.
2. Go to **Privacy & Security** (or *System*) -> **For developers**.
3. Toggle **Developer Mode** to **ON**.
4. Confirm the Windows prompt.

:::warning Microsoft License Requirement
You must own a valid license for **Minecraft Bedrock Edition** on your Microsoft Account (or have downloaded Bedrock from the Microsoft Store) to play full release versions. Beta/Preview builds require a Microsoft account registered in the Insider Beta program.
:::

---

## 2. Installing & Launching Bedrock Versions in XMCL

1. Open **X Minecraft Launcher**.
2. Click **Create Instance** or open **Instance Settings**.
3. Change the game type / edition to **Bedrock Edition**.
4. In the version selector, browse the list of available release, beta, or preview builds.
5. Click **Install**. XMCL will fetch the version package and extract it to your local data folder.
6. Click **Launch**. XMCL will dynamically register the version with Windows AppX services and launch the game.

---

## 3. Where Do Bedrock Packages Come From?

All Bedrock version files and metadata accessed by XMCL are retrieved directly from official infrastructure:

- **Version Database (`mrarm.io/r/w10-vdb`)**: Provides an indexed list of public release and preview version GUIDs (Update Identities).
- **Package Downloads (`tlu.dl.delivery.mp.microsoft.com`)**: Package binaries (`.appx`) are downloaded directly from **Microsoft's official Windows Update Delivery CDN**. XMCL does not host or redistribute game files.

---

## 4. Platform Compatibility (Windows vs. macOS vs. Linux)

| Operating System | Compatibility Status | Details |
| :--- | :--- | :--- |
| 💻 **Windows 10 / 11** | ✅ **Fully Supported** | Native UWP runtime environment. Version switching and launching work seamlessly. |
| 🍎 **macOS** | ❌ **Not Supported** | Bedrock in XMCL relies on Windows-specific AppX/UWP APIs (`Get-AppxPackage`). On macOS, play **Java Edition** natively or use standalone Android wrappers outside XMCL. |
| 🐧 **Linux** | ❌ **Not Supported** | UWP package management is exclusive to Windows. On Linux, play **Java Edition** natively or use standalone tools like `mcpelauncher` (Android APK) outside XMCL. |

:::info Playing on macOS & Linux
If you are on macOS or Linux, we strongly recommend playing **Minecraft Java Edition** in XMCL, which is 100% cross-platform, supports thousands of mods, custom shaders, and cross-play with Java servers!
:::
