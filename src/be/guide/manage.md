# Data & Storage Management

The data architecture of X Minecraft Launcher (XMCL) is divided into two distinct components:

1. **System Configurations & XMCL Database** (settings, accounts, marketplace cache).
2. **Minecraft Game Data** (versions, instances, mods, worlds, assets).

:::tip Relocating Storage to Another Drive
Running out of space on drive `C:`? You can easily relocate the entire Game Data Directory to drive `D:` or `E:`. See the [Drive Relocation Guide](./change-drive.md).
:::

---

## 1. System Cache & XMCL Database

:::tip 💡 Easiest Way to Open the Data Directory
You don't need to manually search for hidden system folders! Inside the launcher, go to **Settings ⚙️** -> **Global Settings** -> **Storage** and click **"Open Data Directory"**. XMCL will automatically open the exact folder in Windows File Explorer!
:::

### Exact System Folder Paths by Installation Type:

If you are navigating manually in File Explorer (press `Win + R` and paste the corresponding path):

#### 🔹 Option 1: AppX / AppInstaller / WinGet Installation (Most Common)
AppX packages run in a sandboxed environment on Windows 10/11. Their data is stored **NOT in the standard `Roaming` AppData**, but inside the Windows package sandbox:
```cmd
%LocalAppData%\Packages\XMCL_68mcaawk44tpj\LocalCache\Roaming\xmcl
```
*(Full path: `C:\Users\<Your_Username>\AppData\Local\Packages\XMCL_68mcaawk44tpj\LocalCache\Roaming\xmcl`)*

#### 🔹 Option 2: Standard EXE Installation
```cmd
%AppData%\xmcl
```
*(Full path: `C:\Users\<Your_Username>\AppData\Roaming\xmcl`)*

#### 🔹 Option 3: Portable ZIP Package
For the portable ZIP package, data is stored directly in the same folder where you extracted `XMCL` (alongside `xmcl.exe`), or in your selected Game Data Directory.

#### 🔹 macOS & Linux:
- **macOS**: `~/Library/Application Support/xmcl`
- **Linux**: `~/.config/xmcl`

---

### Key Configuration Files:
- **`user.json`** — Account profiles (Microsoft, Yggdrasil, Offline), tokens, and skin links.
- **`settings.json`** — Global launcher configuration (data path, language, theme, proxy, download nodes).
- **`instances.json`** — Registry of all created instances and the last selected instance.
- **`java.json`** — Cache of detected Java runtime installations.
- **`resources-v2/`** — LevelDB database containing indexed metadata for mods, resource packs, shaders.
- **`logs/`** — Launcher execution logs (`main.log`, `renderer.log`).

---

## 2. Minecraft Game Data Directory

All heavy game files are stored inside the **Game Data Directory**.

### Directory Structure:

```sh
📂 Game Data Directory
 ├─ 📂 instances/        # Individual Minecraft instances
 │   ├─ 📂 Fabric-1.20/  # Specific instance folder
 │   │   ├─ 📂 saves/        # World save files for this instance
 │   │   ├─ 📂 options.txt   # In-game settings for this instance
 │   │   ├─ 📂 screenshots/  # Screenshots
 │   │   └─ 📂 mods/         # Hardlinks/symlinks to shared mods
 ├─ 📂 mods/             # Global shared mod pool
 ├─ 📂 resourcepacks/    # Shared resource pack pool
 ├─ 📂 shaderpacks/      # Shared shader pack pool
 ├─ 📂 versions/         # Downloaded Minecraft versions (JAR, JSON)
 ├─ 📂 assets/           # Minecraft game assets & textures
 ├─ 📂 libraries/        # Shared Java libraries
 └─ 📂 modpacks/         # Saved and exported modpacks
```

---

## 3. How XMCL Saves Storage Space (Hardlinks)

1. Each mod file is downloaded **only once** into the global `mods/` pool.
2. Adding a mod to multiple instances creates a lightweight **hardlink** in that instance's folder.
3. **Result**: 10 instances using identical mods take up no extra disk space beyond a single instance!
