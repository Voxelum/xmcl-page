# Launch & Crash Troubleshooting

<!-- xmcl-auto-fallback -->
::: info Ta sekcja nie została jeszcze przetłumaczona na język polski
Treść jest wyświetlana w języku angielskim. Jeśli chcesz pomóc w tłumaczeniu, zapraszamy do repozytorium [xmcl-page na GitHubie](https://github.com/voxelum/xmcl-page).
:::

::: tip TROUBLESHOOTING & DIAGNOSTICS HUB
This section is split into three dedicated guides for streamlined diagnostics:
- **[Launch & Crash Troubleshooting](./troubleshooting.md)** (you are here) — Java runtime errors, memory allocation, GPU drivers, and mod conflicts.
- **[Crash Logs & Exit Codes](./crash-logs.md)** — Where log files live (`crash-reports`, `latest.log`), exit codes (0xC0000005, 1, 137), and stack trace analysis.
- **[Diagnostic Report (.zip) & Privacy](./diagnostic-report.md)** — How to export a 1-click diagnostic archive, telemetry contents, and zero-token privacy guarantees.
:::

If Minecraft or XMCL fails to launch, crashes silently, or throws runtime exceptions, the vast majority of issues stem from incompatible Java JDK runtimes, insufficient memory allocation (OOM), outdated graphics drivers, or modloader conflicts.

---

## 1. Java Runtime Environment (JRE) Issues

### Java Version Incompatibilities
Minecraft strictly enforces exact major Java versions depending on the game release:

| Minecraft Version | Required Java Version | Recommended Distribution |
| :--- | :--- | :--- |
| **1.20.5+ / 1.21+** | **Java 21 LTS** | Eclipse Adoptium Temurin 21 |
| **1.18 – 1.20.4** | **Java 17 LTS** | Eclipse Adoptium Temurin 17 |
| **1.17 – 1.17.1** | **Java 16** | Eclipse Adoptium Temurin 16 |
| **1.16.5 and older** | **Java 8 (1.8)** | Eclipse Adoptium Temurin 8 or Zulu 8 |

#### How to Fix in XMCL:
1. Open your instance dashboard -> **Settings** -> **Java Runtime**.
2. XMCL automatically scans your system for installed JDKs. If the required version is missing, click **Auto Download** to fetch a pre-verified Adoptium Temurin or Microsoft OpenJDK build.
3. Avoid 32-bit Java: it restricts memory allocation to ~1.5 GB and triggers immediate crashes. Always use **x64** (or **arm64** for Apple Silicon / ARM devices).

---

## 2. Memory Allocation & OutOfMemoryError (OOM)

### Symptoms
The game freezes during mod initialization, logs show `java.lang.OutOfMemoryError: Java heap space`, or the process terminates with exit code `1` or `137` (Linux OOM killer).

### Solutions:
1. In the instance settings, adjust the **Assigned Memory** slider:
   - **Vanilla Minecraft / light modpacks (<30 mods)**: 3072 MB – 4096 MB (3–4 GB).
   - **Modern heavy modpacks (150–300+ mods)**: 6144 MB – 8192 MB (6–8 GB).
2. **Do not over-allocate**: Assigning more than 10–12 GB often leads to long micro-stutters from Java Garbage Collection. Always leave at least 2–4 GB for your operating system and graphics driver.

---

## 3. Graphics Drivers & OpenGL Crashes

### Symptoms
The game crashes before the main window renders, showing `GLFW error 65542: WGL: The driver does not appear to support OpenGL`, or native crashes in `nvoglv64.dll` / `amdope64.dll`.

### Solutions:
- **Update GPU Drivers**: Download the latest driver directly from NVIDIA, AMD, or Intel. Default drivers from Windows Update often lack full OpenGL ICD implementations.
- **Dual-GPU Laptops**: Open *Windows Settings -> System -> Display -> Graphics*, locate `javaw.exe`, and assign it to **High Performance (Dedicated GPU)**.
- **Conflicting Overlays**: Disable third-party injection hooks (RivaTuner, MSI Afterburner, Discord Game Overlay) if crashes persist during initialization.

---

## 4. Mod Conflicts & Missing Dependencies

### Symptoms
The launcher displays `Incompatible mod set found!`, missing dependency errors, or ClassNotFound exceptions during FML/Fabric bootstrap.

### Solutions:
1. **Verify Modloader Compatibility**: Fabric mods cannot run on Forge, and vice versa. Ensure all `.jar` files match your active loader and Minecraft version.
2. **Install Fabric API**: If running Fabric, always ensure `Fabric API` is present in your instance's mods folder, as most mods depend on it.
3. **Binary Search (Halving Method)**:
   - Disable half the mods in your instance mods manager.
   - Launch the game. If it launches successfully, the culprit is in the disabled half.
   - Repeat until the single conflicting mod is isolated.

---

## 5. Corrupted Caches & Asset Verification

If the game previously ran without issues and crashes without mod changes:
1. Open your instance directory via **Open Folder** in the dashboard.
2. Delete the `.cache/` folder and inspect `config/` (make a backup before removing).
3. In XMCL **Settings** -> **Storage**, run asset and library integrity verification to redownload any corrupted vanilla files.

---

::: tip NEXT STEP
If crashes persist, check **[Crash Logs & Exit Codes](./crash-logs.md)** to decode specific exit numbers, or generate a **[Diagnostic Report (.zip)](./diagnostic-report.md)** to share with developers.
:::
