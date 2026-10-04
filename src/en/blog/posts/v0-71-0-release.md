---
date: 2026-10-04
title: "XMCL v0.71.0: Save Advancements & FTB Quests Viewer, Task Manager Redesign, Glassmorphism P2P Login & URL Modpack Import"
description: "XMCL v0.71.0 is here! Discover in-depth commit analyses: built-in save progress & advancements tree viewer, FTB Quests browser, overhauled task manager with animated progress and icons, modern glassmorphism P2P login dialog, direct modpack URL import, automatic game language sync, and key system resilience fixes."
category: Release
author: BANSAFAn
authorRole: Technical Writer & Contributor
coAuthors:
  - name: CI010
    role: Core Creator & Lead Architect
    github: https://github.com/ci010
---

<PostDetail>

We are thrilled to announce the release of **[XMCL v0.71.0](https://github.com/Voxelum/x-minecraft-launcher/releases/tag/v0.71.0)**! This major release brings in-depth game progression visualization, a complete redesign of critical interface workflows, seamless modpack imports from any web URL, automatic language synchronization, and comprehensive platform stability hardening across Windows, macOS, and Linux.

:::tip UPDATE NOW AVAILABLE
**XMCL v0.71.0** is ready for Windows, macOS, and Linux. Update directly via the built-in launcher updater, download standalone installers from **[GitHub Releases](https://github.com/Voxelum/x-minecraft-launcher/releases/tag/v0.71.0)**, or update via **[Flathub](https://flathub.org/en/apps/app.xmcl.voxelum)**.
:::

---

## 🌟 1. Release Highlights Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       XMCL v0.71.0 Highlights Overview                      │
│                                                                             │
│  📜 Save Progress: Advancements & FTB Quests ──► Interactive Quest Canvases │
│  ⚡ Overhauled Task Manager                 ──► Item Icons, Animations & i18n│
│  🌐 Glassmorphism P2P Login Dialog          ──► Modern Provider Identity    │
│  📦 Direct Modpack Import via URL           ──► Any HTTP/HTTPS .zip/.mrpack │
│  🔄 Launcher & Game Language Sync           ──► Automatic options.txt Sync  │
│  🛡️ Core System & Network Resilience        ──► Java, macOS, Network & DeskGap│
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 📜 2. Save Progress Visualizer: Advancements Tree & FTB Quests ([`5c9bfcbb`](https://github.com/Voxelum/x-minecraft-launcher/commit/5c9bfcbb689bf2d151e59e82a43bf097008a4670))

One of the most requested features by players and modpack creators is the ability to inspect game progression directly within the launcher without having to boot up Minecraft and wait through heavy modpack loading screens.

### 🏆 Vanilla & Modded Advancements Tree Viewer

XMCL now parses world save advancement records (`advancements/*.json`) and maps them against the instance's registered advancement hierarchies.

<img width="1112" height="947" alt="Minecraft Advancements Tree Viewer in XMCL" src="https://github.com/user-attachments/assets/9ca75f15-6a75-4f97-8273-b7c4f431a0d5" />

* **Full Graph Visualization**: Navigate connected tree graphs illustrating parent-child relationships across all advancement tabs.
* **Completion Status**: Distinct visual styling clearly differentiates unlocked achievements from locked goals.
* **Detailed Tooltips**: Hover over any advancement node to inspect its description, frame type (Task, Goal, or Challenge), and individual criteria milestones.

---

### 🗺️ Interactive FTB Quests Book Explorer

For modpacks utilizing the renowned **FTB Quests** system, XMCL now features a dedicated, native quest book viewer. The launcher parses chapter configurations (`config/ftbquests/quests/`) and per-world player completion states:

<img width="1024" height="915" alt="FTB Quests Chapter View in XMCL" src="https://github.com/user-attachments/assets/315e252e-9248-4a58-97c8-0f660804bf93" />

<img width="1851" height="1080" alt="Full Screen FTB Quests Book in XMCL" src="https://github.com/user-attachments/assets/b061e4a0-f83c-4316-9104-38299a85a3de" />

* **Chapters & Dependency Graphs**: Switch between quest chapters, follow branched dependency arrows, and plan your modpack progression.
* **Tasks & Rewards**: Inspect required items, fluids, kills, or custom criteria alongside rewards granted upon quest completion.
* **Overall World Completion**: Save cards in the launcher now calculate and present the overall completion percentage of your world.

---

## ⚡ 3. Complete Task Manager Redesign ([`938d90df`](https://github.com/Voxelum/x-minecraft-launcher/commit/938d90df04edfe7ca7c9ab7e3cf3d3c6d2061957))

The background Task Manager has undergone a comprehensive UI transformation, turning routine downloads and operations into an informative, polished experience.

<video controls autoplay loop muted playsinline width="100%" style="border-radius: 8px; margin: 12px 0;">
  <source src="https://github.com/user-attachments/assets/f9658430-e31e-48bc-8f85-ab6c2dcadab0" type="video/mp4">
  Your browser does not support the video tag.
</video>

<video controls autoplay loop muted playsinline width="100%" style="border-radius: 8px; margin: 12px 0;">
  <source src="https://github.com/user-attachments/assets/d16976bf-342f-4fa1-8b2b-b85a0c102095" type="video/mp4">
  Your browser does not support the video tag.
</video>

<video controls autoplay loop muted playsinline width="100%" style="border-radius: 8px; margin: 12px 0;">
  <source src="https://github.com/user-attachments/assets/1d2aefe5-ff45-4e92-a74f-258287d6cc9f" type="video/mp4">
  Your browser does not support the video tag.
</video>

* **Item Icons for Every Task**: Generic spinner bars are replaced with rich contextual icons representing the actual downloaded assets—including mod icons, Forge/Fabric/Quilt/NeoForge logos, Java badges, and asset files.
* **Fluid Micro-Interactions**: Smooth animations for task initialization, step transitions, and completion states.
* **Exhaustive Progress Metrics**: Live bandwidth throughput, downloaded vs. total byte sizes, ETA countdowns, and expandable subtask execution trees.
* **Comprehensive Multi-Language Localization (i18n)**: Every operation title, subtask status, and error message is fully translated across all 15 supported languages.

---

## 🌐 4. Glassmorphism P2P Multiplayer Login ([#1768](https://github.com/Voxelum/x-minecraft-launcher/pull/1768) / [`74e2dc90`](https://github.com/Voxelum/x-minecraft-launcher/commit/74e2dc900806052ec413b101797f34b230d97c62))

The P2P multiplayer connection dialog has been redesigned from the ground up with a modern, frosted glassmorphism visual language:

<img width="548" height="373" alt="Redesigned P2P Multiplayer Login Dialog in XMCL" src="https://github.com/user-attachments/assets/c34a0934-dc9f-4d48-b364-3707e1f0bba4" />

* **Frosted Translucent Glass Aesthetics**: Clean acrylic blur with elegant border highlights matching modern operating system themes.
* **Branded Provider Badges**: Distinct visual styling for network providers (STUN/TURN, Together Relay, and direct peer-to-peer).
* **Frictionless Connection Workflow**: Simplified input for room codes and invite links with real-time latency indicators.

---

## 📦 5. Direct Modpack Import via URL ([#1686](https://github.com/Voxelum/x-minecraft-launcher/pull/1686) / [`10cae668`](https://github.com/Voxelum/x-minecraft-launcher/commit/10cae66869efeaefddf306d621ad6a67c7568aff))

No more manually downloading modpack archives through your browser, navigating through downloads folders, and dragging files into the launcher:

* Paste any direct **HTTP/HTTPS** download link pointing to a `.zip` or `.mrpack` archive (from CurseForge, Modrinth, GitHub Releases, private community servers, or Discord).
* XMCL automatically downloads the package, recognizes the manifest specification, resolves modloader dependencies, and installs the instance seamlessly.

---

## 🔄 6. Sync Launcher Language to Game Settings ([#1757](https://github.com/Voxelum/x-minecraft-launcher/pull/1757) / [`32580ef7`](https://github.com/Voxelum/x-minecraft-launcher/commit/32580ef7b50c83baaf238bd412b687b545921165))

Whenever you change or select your interface language in XMCL, the launcher now automatically propagates that setting directly into Minecraft's `options.txt` configuration (`lang:xx_yy`). 
You no longer have to dig through in-game menus to match your preferred language—your instances launch ready in your language immediately.

---

## 🗑️ 7. Improved Instance Deletion Feedback ([`3b5a0461`](https://github.com/Voxelum/x-minecraft-launcher/commit/3b5a04618a06e24837112e47e8cb5236102aeb06))

Deleting an instance now features an informative and protective confirmation dialog:
* Details exactly which unique local files will be removed (saves, local configurations, custom mods) while confirming that shared cached assets remain safe in the global library.
* Clear visual progress during the removal process eliminates accidental data loss.

---

## 🛠️ 8. Deep Dive: Bug Fixes & Resilience Improvements

Behind the visual updates, v0.71.0 introduces critical architectural stability fixes. Here is how each fix operates under the hood:

### 🧩 ASCII-Safe Save Progress Regex for DeskGap ([`bd872b1`](https://github.com/Voxelum/x-minecraft-launcher/commit/bd872b19125803b4399933095fe2a51417b56699))
* **The Issue:** In the ultra-lightweight DeskGap distribution of XMCL, regular expressions containing non-ASCII characters caused string encoding mismatch errors during save progress parsing.
* **The Fix:** Constrained save progress parsing regular expressions to standard ASCII character boundaries, ensuring identical, bulletproof execution across both standard Electron and ultra-lightweight DeskGap builds.

### 🛡️ Bounded Authentication Retries & Telemetry Reduction ([#1780](https://github.com/Voxelum/x-minecraft-launcher/pull/1780) / [`a5a8fa8`](https://github.com/Voxelum/x-minecraft-launcher/commit/a5a8fa82fb3aa42ae4542ad612e920ab6dc117fe))
* **The Issue:** Temporary outages or rate limits from Microsoft authentication endpoints could cause runaway retry loops, resulting in temporary IP throttling and excessive background telemetry noise.
* **The Fix:** Implemented bounded exponential backoff on auth retries and streamlined telemetry event emission, minimizing unnecessary network overhead and enhancing connection recovery.

### 🍎 Local Network Privacy Entitlements on macOS ([`4e712f9`](https://github.com/Voxelum/x-minecraft-launcher/commit/4e712f90cb485a79e7c12ec73f88673e9be330ef))
* **The Issue:** In macOS Sequoia and Sonoma, Apple strictly enforces local network privacy. Applications without declared network intent have local socket discovery silently blocked.
* **The Fix:** Added the required `NSLocalNetworkUsageDescription` entitlement in XMCL's macOS bundle, allowing macOS to properly prompt for permission and enabling smooth local LAN and P2P peer discovery.

### 📥 Honor Disabled Range Splitting for Databases ([`49c4313`](https://github.com/Voxelum/x-minecraft-launcher/commit/49c43133cc1e3d481dd2655425b9af7e0274c139))
* **The Issue:** Certain mirror CDNs and database endpoints do not support HTTP byte-range splitting. Attempting chunked downloads on these endpoints resulted in `416 Range Not Satisfiable` errors or corrupted files.
* **The Fix:** The download manager now strictly honors the flag to disable range splitting on database endpoints, pulling data as an atomic, continuous stream.

### ☕ Adoptium Java Detection & Manual Import Picker ([`cfba8b4`](https://github.com/Voxelum/x-minecraft-launcher/commit/cfba8b4dbb790bc825735d693b3da1f8affb454e))
* **The Issue:** Widely used Eclipse Adoptium (Temurin) JRE/JDK installations often install to custom registry keys or specific system folders that bypassed standard runtime discovery.
* **The Fix:** Upgraded Java environment scanning heuristics to automatically detect Adoptium installations, and exposed a direct manual import action in the UI to browse and add any custom `java` / `javaw` binary.

### 🪟 Windows Server Service Path & UAC Elevation ([`894a6e6`](https://github.com/Voxelum/x-minecraft-launcher/commit/894a6e64fb4f537deca6c38f3d6bf13d0e78b5cc))
* **The Issue:** Configuring a local Windows server service failed if XMCL was installed in a path containing spaces, and timed out prematurely if the user delayed accepting the UAC administrator prompt.
* **The Fix:** Added robust path quoting and asynchronous handling that cleanly awaits UAC privilege elevation before executing service registration commands.

### 📦 Datapack Origins Persistence & Hot Save State Refresh ([`b2f0461`](https://github.com/Voxelum/x-minecraft-launcher/commit/b2f0461833138b2f5cd9bd7aec67250054682728))
* **The Issue:** Mod-bundled datapacks vs user-added world datapacks were conflated in metadata, and changes made to datapacks required restarting the launcher to reflect in the UI.
* **The Fix:** XMCL now persists datapack origins and automatically refreshes save state reactively whenever datapack configurations change.

### 🛒 Marketplace Installed Resource Synchronization ([`0178407`](https://github.com/Voxelum/x-minecraft-launcher/commit/01784071376452904890ef361310b4447ed320d5))
* **The Issue:** Installed mods or resource packs in the Modrinth and CurseForge marketplace browsers occasionally displayed stale install badges or missed newer version updates.
* **The Fix:** Synchronized installed content hashes directly with market project states in real time.

### 📐 Blueprint Selection Error Fix & 3D Lighting Enhancements ([#1770](https://github.com/Voxelum/x-minecraft-launcher/pull/1770) / [`28eb066`](https://github.com/Voxelum/x-minecraft-launcher/commit/28eb066f349802814d48474ec33d2b66b8ac8885))
* **The Issue:** Selecting certain complex Litematica or WorldEdit blueprints triggered structure selection exceptions, with occasional texture rendering artifacts in the 3D previewer.
* **The Fix:** Resolved blueprint selection state errors, refined lighting shaders, and improved texture atlas mapping for schematic previews.

### ✏️ UI Typo & Localization Corrections ([#1762](https://github.com/Voxelum/x-minecraft-launcher/pull/1762) / [`d16ecd3`](https://github.com/Voxelum/x-minecraft-launcher/commit/d16ecd38e09fc0d317e37ef8b874b99999c8e759))
* Corrected spelling mistakes and polished localization phrases across UI components.

---

## 📋 9. Summary of Commits

| Commit | Category | Description |
| :--- | :--- | :--- |
| [`5c9bfcbb`](https://github.com/Voxelum/x-minecraft-launcher/commit/5c9bfcbb689bf2d151e59e82a43bf097008a4670) | Feature | saves: add progress, advancements, and quest viewers |
| [`3b5a0461`](https://github.com/Voxelum/x-minecraft-launcher/commit/3b5a04618a06e24837112e47e8cb5236102aeb06) | Feature | instances: improve deletion confirmation and feedback |
| [`938d90df`](https://github.com/Voxelum/x-minecraft-launcher/commit/938d90df04edfe7ca7c9ab7e3cf3d3c6d2061957) | Feature | tasks: add item icons, animations, progress details, and full i18n |
| [`10cae668`](https://github.com/Voxelum/x-minecraft-launcher/commit/10cae66869efeaefddf306d621ad6a67c7568aff) | Feature | add import modpack via URL (Source: ALL) ([#1686](https://github.com/Voxelum/x-minecraft-launcher/pull/1686)) |
| [`74e2dc90`](https://github.com/Voxelum/x-minecraft-launcher/commit/74e2dc900806052ec413b101797f34b230d97c62) | Feature | ui: redesign P2P multiplayer login dialog with modern glassmorphism and brand provider styles ([#1768](https://github.com/Voxelum/x-minecraft-launcher/pull/1768)) |
| [`32580ef7`](https://github.com/Voxelum/x-minecraft-launcher/commit/32580ef7b50c83baaf238bd412b687b545921165) | Feature | sync launcher language to minecraft game settings ([#1757](https://github.com/Voxelum/x-minecraft-launcher/pull/1757)) |
| [`bd872b1`](https://github.com/Voxelum/x-minecraft-launcher/commit/bd872b19125803b4399933095fe2a51417b56699) | Bug Fix | keep save progress regex ASCII for DeskGap packaging |
| [`a5a8fa8`](https://github.com/Voxelum/x-minecraft-launcher/commit/a5a8fa82fb3aa42ae4542ad612e920ab6dc117fe) | Bug Fix | bound auth retries and telemetry overhead ([#1780](https://github.com/Voxelum/x-minecraft-launcher/pull/1780)) |
| [`4e712f9`](https://github.com/Voxelum/x-minecraft-launcher/commit/4e712f90cb485a79e7c12ec73f88673e9be330ef) | Bug Fix | declare macOS local network usage |
| [`49c4313`](https://github.com/Voxelum/x-minecraft-launcher/commit/49c43133cc1e3d481dd2655425b9af7e0274c139) | Bug Fix | honor disabled range splitting for database downloads |
| [`cfba8b4`](https://github.com/Voxelum/x-minecraft-launcher/commit/cfba8b4dbb790bc825735d693b3da1f8affb454e) | Bug Fix | detect Adoptium Java and expose manual imports |
| [`894a6e6`](https://github.com/Voxelum/x-minecraft-launcher/commit/894a6e64fb4f537deca6c38f3d6bf13d0e78b5cc) | Bug Fix | resolve Windows server service paths and await elevation |
| [`b2f0461`](https://github.com/Voxelum/x-minecraft-launcher/commit/b2f0461833138b2f5cd9bd7aec67250054682728) | Bug Fix | saves: persist data pack origins and refresh save state |
| [`0178407`](https://github.com/Voxelum/x-minecraft-launcher/commit/01784071376452904890ef361310b4447ed320d5) | Bug Fix | market: keep installed resource versions in sync |
| [`28eb066`](https://github.com/Voxelum/x-minecraft-launcher/commit/28eb066f349802814d48474ec33d2b66b8ac8885) | Bug Fix | fix blueprint selection error and improve 3D preview and textures ([#1770](https://github.com/Voxelum/x-minecraft-launcher/pull/1770)) |
| [`d16ecd3`](https://github.com/Voxelum/x-minecraft-launcher/commit/d16ecd38e09fc0d317e37ef8b874b99999c8e759) | Bug Fix | ui: correct misspelled word ([#1762](https://github.com/Voxelum/x-minecraft-launcher/pull/1762)) |

---

## 💬 Feedback & Community

Encountered an issue or want to suggest a new feature?
* 💬 Join the conversation on **[Discord](https://discord.gg/W5XVwYY7GQ)**.
* 🌐 Discuss updates and share your thoughts on **[Reddit (r/XMCL)](https://www.reddit.com/r/XMCL/)**.
* 🐛 Report bugs and submit feature requests on **[GitHub Issues](https://github.com/Voxelum/x-minecraft-launcher/issues)**.

Enjoy exploring your worlds and quests with **XMCL v0.71.0**! 🚀

</PostDetail>
