---
date: 2026-10-31
title: "XMCL v0.73.0: Backup & Auto-Restore System, Screenshot Manager with Safe Editing, Redesigned Mod Market & Quick Account Switcher"
description: "XMCL v0.73.0 is here! Discover in-depth release highlights: full-featured backup and scheduled background auto-backup, native screenshot manager with a built-in image editor, modern mod market redesign preserving search state, validated packwiz export, quick avatar account switcher, and core stability hardening."
category: Release
author: BANSAFAn
authorRole: Technical Writer & Contributor
coAuthors:
  - name: CI010
    role: Core Creator & Lead Architect
    github: https://github.com/ci010
cover: https://github.com/user-attachments/assets/b110bf62-102e-4e03-97d0-556689211184
---

<PostDetail>

We are thrilled to announce the official release of **[XMCL v0.73.0](https://github.com/Voxelum/x-minecraft-launcher/releases/tag/v0.73.0)**! This major feature release introduces a long-requested, robust backup and restore system with background automation, a native in-launcher screenshot manager with integrated image editing tools, a thoroughly redesigned mod market with persistent search state, validated packwiz export capabilities, a quick sidebar account switcher, and significant core engine optimizations.

:::tip UPDATE NOW AVAILABLE
**XMCL v0.73.0** is available across Windows, macOS, and Linux. Update directly using the built-in launcher updater, download standalone installers from **[GitHub Releases](https://github.com/Voxelum/x-minecraft-launcher/releases/tag/v0.73.0)**, or update via **[Flathub](https://flathub.org/en/apps/app.xmcl.voxelum)**.
:::

---

## 🌟 1. Comprehensive Backup & Restore System with Background Auto-Backup

Safeguarding your Minecraft worlds, instances, and personal configurations is paramount. Version 0.73.0 introduces a full-fledged, resilient backup and restore subsystem ([PR #1815](https://github.com/Voxelum/x-minecraft-launcher/pull/1815)).

![XMCL Backup and Restore System](https://github.com/user-attachments/assets/b110bf62-102e-4e03-97d0-556689211184)

### Key Backup Capabilities:
* **Portable Single-File Archives (`.xmclbackup` / `.zip`)**:
  * Back up and restore launcher configuration (`setting.json`), saved collections (`collections.json`), custom visual themes and media assets (`theme.json`, `theme.css`, `theme-media/`), and selected Java game instances.
  * **Intelligent File Exclusion**: XMCL automatically excludes shared core libraries, vanilla Minecraft assets, and temporary log/cache folders. This keeps backup archives lightweight, blisteringly fast to create, and free from redundant gigabytes.
  * **Dual Mod Archiving Modes**:
    1. *Full Mod Files (`.jar`)* — completely self-contained offline snapshots.
    2. *Lightweight Mod List Only (`mods-list.json`)* — an ultra-compact manifest of mod IDs, versions, and hashes that re-downloads missing files upon restoration.
* **Granular Real-Time Monitoring**:
  * Track active backup progress with real-time category counters, elapsed and remaining time estimations, and an integrated diagnostic activity log.
* **Flexible Conflict Resolution**:
  * When restoring an instance that matches an existing folder, choose between **Rename**, **Overwrite**, or **Skip**.

### Background Auto-Backup:
* **Disabled by default** to preserve disk space and background CPU cycles.
* Select one or multiple Java instances (automatically filtering out Bedrock profiles).
* **Customizable Schedules**: trigger automatic background snapshots every 30 minutes, 1, 2, 6, 12, or 24 hours.
* **Automatic Retention Rotation (`maxBackups`)**: automatically prunes older backups to prevent disk exhaustion.
* **Granular Content Filters**: choose exactly what components to archive (saves/worlds, config files, mods, resource packs, shaders, or launcher settings).
* **Manual "Run Now" Trigger** & history list with one-click **Restore**, **Show in Folder**, and **Delete** actions.

#### Backup & Restore System Video Demo:
<video controls autoplay loop muted playsinline width="100%" style="border-radius: 8px; margin: 16px 0; border: 1px solid var(--card-line, #334139);">
  <source src="https://github.com/user-attachments/assets/8375af05-b16b-433f-a1aa-184fffd9511f" type="video/mp4">
  Your browser does not support the video tag.
</video>

---

## 📸 2. Native Screenshot Manager with Safe Editing & File Operations

Managing your in-game memories is now seamless thanks to the brand-new built-in Screenshot Manager ([PR #1803](https://github.com/Voxelum/x-minecraft-launcher/pull/1803), [PR #1824](https://github.com/Voxelum/x-minecraft-launcher/pull/1824)).

### Features:
* **Responsive Visual Gallery**: View screenshots from a specific instance or browse across all your setups in a clean, responsive thumbnail grid with timestamps and file sizes.
* **Full-Resolution Lightbox**: Inspect shots in original quality with fluid zoom controls and arrow-key navigation.
* **Quick File Operations**:
  * Copy images or file paths directly to your clipboard.
  * Safely rename or delete captures with confirmation guards.
  * Open screenshot locations in your native file manager (Explorer, Finder, or Nautilus) in a single click.
* **Built-in Image Editor**:
  * Crop, highlight, add text notes, and draw callout arrows right inside the launcher before sharing your builds on Discord or Reddit.
* **Non-Disruptive Dialog Integration**: Opens as a modal dialog that preserves your current page, keyboard focus, and scoped drag-and-drop actions.

#### Screenshot Manager Gallery Video Demo:
<video controls autoplay loop muted playsinline width="100%" style="border-radius: 8px; margin: 16px 0; border: 1px solid var(--card-line, #334139);">
  <source src="https://github.com/user-attachments/assets/8d34059d-0550-4f09-91f2-f3df9ad821dc" type="video/mp4">
  Your browser does not support the video tag.
</video>

#### Screenshot Editor Video Demo:
<video controls autoplay loop muted playsinline width="100%" style="border-radius: 8px; margin: 16px 0; border: 1px solid var(--card-line, #334139);">
  <source src="https://github.com/user-attachments/assets/66afcf23-5520-4282-97d1-080df9722e91" type="video/mp4">
  Your browser does not support the video tag.
</video>

---

## 🛒 3. Modern Mod Market Redesign with Persistent Search State

The community content marketplace has undergone a visual and architectural upgrade ([PR #1805](https://github.com/Voxelum/x-minecraft-launcher/pull/1805)):

* **Refined Card Typography & Layout**: Fresh project cards with clearer author credits, supported mod loaders, and download statistics from Modrinth and CurseForge.
* **Search State Preservation**:
  * Navigating to a project details view and returning backward no longer resets your active query, applied tags, or scroll position.
* **Instant Filtering**: Quick-toggle pills for mod loaders (Forge, Fabric, Quilt, NeoForge), Minecraft target versions, and client/server execution environments.

#### Redesigned Mod Market Video:
<video controls autoplay loop muted playsinline width="100%" style="border-radius: 8px; margin: 16px 0; border: 1px solid var(--card-line, #334139);">
  <source src="https://github.com/user-attachments/assets/d12e9fe9-c81a-4868-97bd-a1db339094ec" type="video/mp4">
  Your browser does not support the video tag.
</video>

---

## ⚡ 4. Quick Account Switcher Context Menu

For players managing multiple game accounts or switching between official Microsoft logins and custom authentication servers, v0.73.0 adds an instantaneous context switcher ([PR #1808](https://github.com/Voxelum/x-minecraft-launcher/pull/1808)):

* Right-clicking the user avatar on the left navigation rail summons an instant context menu.
* Switch between any configured profile (Microsoft, Offline, Ely.by, LittleSkin) without having to navigate to the full Account Settings view.
* The currently active profile is clearly marked, and a quick "Add Account" shortcut is always accessible.

#### Quick Account Switcher Video Demo:
<video controls autoplay loop muted playsinline width="100%" style="border-radius: 8px; margin: 16px 0; border: 1px solid var(--card-line, #334139);">
  <source src="https://github.com/user-attachments/assets/6924be8e-c4ee-4813-8517-6b148a47f3a2" type="video/mp4">
  Your browser does not support the video tag.
</video>

---

## 📦 5. Validated Packwiz Export & Modpack Builder Enhancements

Modpack authors and server administrators gain powerful new export tooling ([PR #1804](https://github.com/Voxelum/x-minecraft-launcher/pull/1804)):

* **Packwiz Format Export**: Generate valid `pack.toml` and `index.toml` manifests with cryptographic file hashes. Packwiz is the ideal format for Git-managed modpacks and lightweight client updates.
* **Streamlined Modpack Builder**: Improved file picker workflow for selecting included configs, overrides, and resource packs when preparing CurseForge or Modrinth distribution bundles.

---

## 🛠️ 6. Bug Fixes, Stability Patches & Engine Hardening

Alongside headline features, v0.73.0 includes essential stability patches across all platforms:

* **Screenshot Dialog Polish (#1824)**: Standardized toolbar padding, eliminated unwanted corner rounding in full-screen lightbox mode, and completed Chinese and multi-language localization strings.
* **Feedback & Telemetry Safeguards (#1817)**: Hardened error reporting and user feedback services against crash loops.
* **Core Installer Imports (#1809)**: Switched `@xmcl/installer` to published public imports so downstream consumers can load it cleanly outside the monorepo workspace.
* **Java Runtime Targeting (#1813, `ecc13691`)**: Automatically resolves and downloads the exact Java runtime version (e.g., Java 17 or 21) required by the selected Minecraft version and mod loader when "Install" is clicked.
* **AI Agent Chat Performance (#1812)**: Eliminated deep reactivity watchers on AI agent chat transcripts, stopping high CPU usage spikes and UI frame drops during complex troubleshooting conversations.
* **DeskGap / Electron Integration (`b64e90f6`)**: Polyfilled idle callbacks and exposed platform-level updater capabilities to secondary windows.
* **Authentication Error Handling (`029f9ba4`)**: Clears stale login error messages immediately when switching between different authentication authorities.
* **Windows Java Console Suppression (`e43edcbe`)**: Suppressed flickering black console windows during background Java runtime detection, and fixed Microsoft OAuth loopback redirection handling.

---

Thank you to all community contributors, translators, and players who helped test and refine this release! Download **XMCL v0.73.0** today and enjoy your game!

</PostDetail>
