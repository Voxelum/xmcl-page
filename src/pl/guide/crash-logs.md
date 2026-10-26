# Crash Logs & Exit Codes

<!-- xmcl-auto-fallback -->
::: info Ta sekcja nie została jeszcze przetłumaczona na język polski
Treść jest wyświetlana w języku angielskim. Jeśli chcesz pomóc w tłumaczeniu, zapraszamy do repozytorium [xmcl-page na GitHubie](https://github.com/voxelum/xmcl-page).
:::

When Minecraft fails to launch or closes abruptly, analyzing the log output is the fastest way to pinpoint the exact broken mod, missing dependency, or driver failure.

:::info Related Troubleshooting Guides
* [Launch & Crash Troubleshooting](./troubleshooting.md) — Fix Java mismatches, memory allocation, and graphics drivers.
* [Diagnostic Report (.zip) & Privacy](./diagnostic-report.md) — How to generate a comprehensive diagnostic archive for developer support.
:::

---

## 1. Where to Find Logs

XMCL provides 1-click access to all relevant log files:

### In the Launcher Interface
1. Open your instance in XMCL.
2. In the top toolbar, click the **Log Console** icon (terminal symbol) or press `Ctrl + L` / `Cmd + L`.
3. The real-time log viewer displays color-coded output:
   - **White/Gray**: Informational messages (`[INFO]`)
   - **Yellow**: Warnings (`[WARN]`)
   - **Red**: Fatal errors and stack traces (`[ERROR]`, `[FATAL]`)

### On Your File System
Click the **Folder** icon in the instance header to open the directory directly:
- **Realtime Game Log**: `.minecraft/logs/latest.log`
- **Crash Reports**: `.minecraft/crash-reports/crash-YYYY-MM-DD_HH.MM.SS-client.txt`
- **Launcher Internal Log**: `%AppData%/xmcl/logs/main.log` (Windows) or `~/.config/xmcl/logs/main.log` (Linux)

---

## 2. Common Exit Codes Decoded

Minecraft and the Java Virtual Machine return exit codes when terminating:

### Exit Code `0` — Normal Exit
- The game closed normally, or the process was cleanly terminated by the user or an external process manager without unhandled exceptions.

### Exit Code `1` — Generic Java / Mod Exception
- The most common crash code. Indicates that the JVM caught an unhandled exception thrown by Minecraft or an installed mod.
- **Action**: Check `latest.log` or the latest file in `crash-reports/`. Look for the first line starting with `Caused by:`.

### Exit Code `-1` — Modloader Initialization Failure
- Typically occurs when Forge or Fabric fails during the very early bootstrap phase before the game window is even created (e.g. mismatched Fabric Loader version or corrupt coremod).

### Exit Code `-1073741819` (`0xC0000005`) — Access Violation
- A fatal native memory error occurred in a non-Java library.
- **Common Causes**:
  - Outdated or corrupted graphics card drivers (`nvoglv64.dll`, `ig9icd64.dll`).
  - Overlays injecting into the game process (RivaTuner, MSI Afterburner, Discord, GeForce Experience shadowplay).
  - Running out of physical system RAM and pagefile space.
- **Action**: Clean-install graphics drivers and close third-party overlays.

### Exit Code `-1073740791` (`0xC0000409`) — Stack Buffer Overrun
- A native driver or overlay caused a stack buffer overflow.
- **Action**: Disable NVIDIA Ansel, Nahimic Audio, or third-party screen recorders.

### Exit Code `137` / `134` (Linux & macOS) — Out of Memory Killer
- The Linux kernel or macOS terminated the Java process because the system ran out of physical memory.
- **Action**: Lower the memory allocated to the instance in XMCL instance settings so the OS has breathing room.

---

## 3. How to Read a Crash Report (Stack Trace)

A crash report contains thousands of lines, but only two sections matter for finding the culprit:

### 1. The Header: What Crashed
Look at the top 10-15 lines:
```text
---- Minecraft Crash Report ----
// I bet Ocelots did this.

Time: 2026-10-26 10:00:00
Description: Initializing game

java.lang.NullPointerException: Cannot invoke method on null object
    at net.fabricmc.fabric.api...
```

### 2. The "Caused by" Section (The Culprit)
Scroll down to the first section that begins with `Caused by:`. This line identifies the exact mod that broke:

```text
Caused by: org.spongepowered.asm.mixin.transformer.throwables.MixinTransformerError: 
    An unexpected critical error was encountered
Caused by: java.lang.ClassNotFoundException: com.example.brokenmod.core.Api
```

In the example above, `brokenmod` is the mod responsible for the crash.

---

## 4. Resolving Missing Dependencies

Modern modloaders will clearly name missing mods in `latest.log`:

```text
net.fabricmc.loader.impl.FormattedException: Some of your mods are incompatible with the game or each other!
 - Mod 'sodium-extra' (0.5.1) requires 'sodium' (>=0.5.0), but it is missing!
```

Simply search for the missing mod (in this case, `sodium`) in XMCL's built-in Modrinth/CurseForge browser and click Install.
