---
date: 2026-08-24
title: "XMCL v0.67.0: Customizable Quick Actions, Next-Gen Installer, AI Copilot for All & Exhaustive Global Privacy Framework"
description: "XMCL v0.67.0 is here! Discover in-depth commit analyses: custom Quick Action hotkeys, instant double-click launching, next-gen stream installer, automatic Java repairs, Forge stability, Flatpak Wayland fixes, and our comprehensive 15-locale Global Privacy Architecture."
category: Release
author: BANSAFAn
authorRole: Technical Writer & Contributor
coAuthors:
  - name: CI010
    role: Core Creator & Lead Architect
    github: https://github.com/ci010
---

<PostDetail>

![XMCL v0.67.0 Release](/blog/blog%2008.24.26.png)

We are thrilled to present **[XMCL v0.67.0](https://github.com/Voxelum/x-minecraft-launcher/releases/tag/v0.67.0)**! This is one of our most expansive updates to date, combining ground-up architectural performance rewrites, much-requested workflow features, AI Agent accessibility for everyone, and comprehensive cross-platform stability fixes across Windows, macOS, and Linux.

Simultaneously with this launcher release, we have rolled out a massive **Multi-Country Privacy & Legal Framework** across our official website ([`xmcl.app`](https://xmcl.app)). We have tailored dedicated legal compliance policies natively across **15 languages and jurisdictions** worldwide (including the EU, UK, Ukraine, China, Taiwan, Japan, South Korea, USA, Saudi Arabia, UAE, Kazakhstan, and Belarus), reinforcing our fundamental commitment: **XMCL is and will always remain 100% free, open-source, and privacy-respecting software.**

:::tip UPDATE NOW AVAILABLE
**XMCL v0.67.0** is ready for all platforms. Update directly via the built-in launcher updater, download standalone binaries from **[GitHub Releases](https://github.com/Voxelum/x-minecraft-launcher/releases/tag/v0.67.0)**, or update via **[Flathub](https://flathub.org/en/apps/app.xmcl.voxelum)**.
:::

---

## 1. Deep Dive: Core Platform & Architectural Overhauls

Core creator **CI010** conducted extensive architectural rewrites across the launcher engine, delivering measurable boosts in memory efficiency, launch responsiveness, and network throughput:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       XMCL v0.67.0 Architecture Pipeline                    │
├─────────────────────────────────────────────────────────────────────────────┤
│  User Action (Launch / Install)                                             │
│       │                                                                     │
│       ▼                                                                     │
│  [Next-Gen Stream Pipeline] ──► Non-blocking chunk workers & buffer streams │
│       │                                                                     │
│       ├──► [Concurrent Asset Downloader]   (Zero race-condition file locks) │
│       ├──► [Automatic Java Runtime Repair] (Self-healing missing DLLs/libs) │
│       └──► [DPoP Cryptographic Binding]    (Zero-trust replay protection)   │
│       │                                                                     │
│       ▼                                                                     │
│  🚀 Game Boot (< 1s launcher overhead, smooth 60 FPS UI)                    │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 📦 Next-Generation Stream-Based Installer ([`8c9f647`](https://github.com/Voxelum/x-minecraft-launcher/commit/8c9f6474612e7eee70813a3afc949367950d94d9))
The installation pipeline responsible for downloading Minecraft client jars, game assets, asset indices, and third-party loaders (Forge, NeoForge, Fabric, Quilt) has been completely rewritten from scratch. The new implementation leverages non-blocking streaming buffers and parallelized chunk workers, reducing disk I/O bottlenecks and cutting overall modpack installation times significantly.

### ⚡ Install Concurrency Lock & Race Condition Fixes ([`0f4e3e2`](https://github.com/Voxelum/x-minecraft-launcher/commit/0f4e3e21c39569360f13f3a18a5ecb3de1f0ba9d))
Fixed file-lock race conditions that occurred when simultaneously installing multiple mods, extracting shared library jars, and unpacking runtime environments. Inter-process file operations are now guarded with strict concurrency mutexes.

### 🧹 State Provide/Inject Architecture Simplification ([`240504e`](https://github.com/Voxelum/x-minecraft-launcher/commit/240504e7fdf6846c24a702179b869b0e4271eb4e))
Streamlined the entire Vue 3 Composition API reactive hierarchy. By eliminating deeply nested state-injection trees, the UI now consumes less idle memory, prevents spurious component re-renders, and guarantees instant UI responsiveness.

### 📈 Page Performance & Virtualization ([`8a45ee33`](https://github.com/Voxelum/x-minecraft-launcher/commit/8a45ee3359bd51286c6c5fd3f160b68728912fb8))
Optimized rendering pipelines and DOM node recycling for resource-heavy views, such as browsing online Modrinth/CurseForge catalogs with thousands of items, managing large local mod collections, and browsing modpack versions.

### 🔬 High-Performance Diagnostic Engine ([`d49205d`](https://github.com/Voxelum/x-minecraft-launcher/commit/d49205d482c48fe0f3c6c1e752d4ceadc6cc411d))
The diagnostic subsystem that scans instance directories for missing dependencies, duplicate mod IDs, and corrupted files now processes checks in background workers, ensuring zero UI stutter even when analyzing 400+ mod instances.

### 🏷️ Primary Brand Consolidation: XMCL ([`5b9cb51`](https://github.com/Voxelum/x-minecraft-launcher/commit/5b9cb5111d72afb6a1ff2dc56a2bcba56c15aca5))
Consolidated all internal metadata, client headers, window titles, and telemetry signatures under our official primary brand: **XMCL**.

---

## 2. Productivity Features & Launch Workflow Polish

| Feature | Technical Commit / PR | Description |
| :--- | :--- | :--- |
| **Custom Quick Action Hotkeys** | [#1666](https://github.com/Voxelum/x-minecraft-launcher/pull/1666) ([`438e18c`](https://github.com/Voxelum/x-minecraft-launcher/commit/438e18ca061e183b25b731709ec2fbf03ec41be1)) | Users can now fully customize the global shortcut key combination to summon the Command Palette / Quick Action bar in settings. |
| **Double-Click Instance Launch** | [`76e754e`](https://github.com/Voxelum/x-minecraft-launcher/commit/76e754ebe0829aa104bc01fd358d0857a34a482c) | Double-clicking any instance card or icon in the sidebar/grid immediately boots Minecraft without extra clicks. |
| **Instance Card Play Button** | [`c4f20c1`](https://github.com/Voxelum/x-minecraft-launcher/commit/c4f20c1345db5aae7be7cb6ccbcaac05bbadfa1c) | Added an instant play button directly to instance headers and overview cards for streamlined single-click launch. |
| **Dependent Mod Inspection** | [`9d96b66`](https://github.com/Voxelum/x-minecraft-launcher/commit/9d96b66505cd84c279bc05385370d4f1495454ab) | The mod manager now displays which installed mods depend on a specific library (e.g. Cloth Config, Architectury, Curios) before you disable or remove it. |
| **Clean "No Instance" State** | [`55dc3b2`](https://github.com/Voxelum/x-minecraft-launcher/commit/55dc3b2d2340a6659447bd704209a8595995b1c2) | Guided onboarding view when no instances exist, enabling instant creation, template selection, or importing. |
| **Localized Sort Tabs** | [`9738673`](https://github.com/Voxelum/x-minecraft-launcher/commit/97386732fee4f4c43baa06596d5f384a29ca272d) | Instance sorting tabs ("Recently Played", "Version", "Name", "Date Created") now correctly translate across all languages. |

---

## 3. AI Copilot for All Users & Multiplayer Evolution

### 🤖 AI Diagnostic Copilot Enabled for All Users ([`dc76591`](https://github.com/Voxelum/x-minecraft-launcher/commit/dc76591ac1e9bba1fa31e9c56f75551c87aee308))
We believe intelligent modpack debugging should be accessible to everyone. In v0.67.0, the built-in AI Agent is now enabled for all users. The launcher analyzes your crash dumps, JVM flags, and mod compatibility errors directly, with context hints for heavy usage.

### 💬 Chat UX Auto-Scroll Fix ([`4bff059`](https://github.com/Voxelum/x-minecraft-launcher/commit/4bff0597776368843eec3782ec19b258cd0fac60))
Fixed an annoying UI issue where opening the AI Agent dialog would stay at the top of long conversations. The chat view now smoothly scrolls to the latest assistant message on load.

### 🌐 Consolidated XMCL Together Multiplayer ([`70a0670`](https://github.com/Voxelum/x-minecraft-launcher/commit/70a067056b64ed0c3b86a25befe3e59f8d0d1aa4))
Consolidated our signaling and WebRTC peer-to-peer multiplayer stack, improving NAT traversal stability and reconnect reliability when playing LAN worlds over the internet.

---

## 4. Comprehensive Bug Fixes & Stability Patches

### 🛠️ Mod & Modpack Management
- **Case-Sensitive Modpack Upgrade Resolution ([`3b9a82c`](https://github.com/Voxelum/x-minecraft-launcher/commit/3b9a82c4980f4e7e1ed57571f6ac4ed881138421))**: Fixed file matching on Linux/macOS filesystems where differences in filename casing during modpack updates could cause redownloads or mismatched files.
- **Disabled Mods Double-Suffix Safeguard ([`7494c3a`](https://github.com/Voxelum/x-minecraft-launcher/commit/7494c3af970e9876e260e2b270d7b0a563171e6a))**: Prevented files that are already disabled from receiving redundant duplicate `.disabled.disabled` extension suffixes.
- **CurseForge Upgrade Plan Key Alignment ([#1692](https://github.com/Voxelum/x-minecraft-launcher/pull/1692), [`fbbf06d`](https://github.com/Voxelum/x-minecraft-launcher/commit/fbbf06d4a389e8f307186952fa3215304b80cf06))**: Standardized CurseForge mod update plan keys with canonical `item.id` identifiers.
- **Modrinth Collection Removal API ([#1688](https://github.com/Voxelum/x-minecraft-launcher/pull/1688), [`a0f6c75`](https://github.com/Voxelum/x-minecraft-launcher/commit/a0f6c7548570c3adc8e95be340227a32301dd4d9))**: Adopted the official `remove_projects` endpoint for removing projects from Modrinth collections.
- **Collection Bookmark Active State ([#1689](https://github.com/Voxelum/x-minecraft-launcher/pull/1689), [`bc07716`](https://github.com/Voxelum/x-minecraft-launcher/commit/bc077167c14392b19db8bba27d51e4a704355e96))**: Added immediate visual feedback when toggling bookmark states on online mod collections.

### ☕ Java & Forge Install Reliability
- **Automatic Java Runtime Repair ([`f130b2a`](https://github.com/Voxelum/x-minecraft-launcher/commit/f130b2a3966fe2a56ff75e538b9798af7e69a21d))**: Automatically detects broken or incomplete Java runtime downloads and repairs missing binary dependencies on the fly.
- **Improved Forge Installation Success Rate ([`ab2df49`](https://github.com/Voxelum/x-minecraft-launcher/commit/ab2df499fc1fe658572e34e916bf4c8d51b1a5f3))**: Hardened legacy and modern Forge installer execution, artifact unpackers, and checksum validation.
- **Linux Flatpak Display Failure Handling ([`b4cfb2c`](https://github.com/Voxelum/x-minecraft-launcher/commit/b4cfb2c3393a6ecb3f90cca57284b8c1893027dc))**: Enhanced display environment variable detection and fallback handling under Flatpak sandboxes and Wayland compositors.

### 🔒 Authentication & Account Hardening
- **DPoP Token Key Binding ([`546ada4`](https://github.com/Voxelum/x-minecraft-launcher/commit/546ada4d103e7dd723119f09d504a8063a61ba9c))**: Cryptographically binds OAuth tokens using Demonstrating Proof-of-Possession (DPoP), preventing token replay attacks.
- **Silent Microsoft Bootstrap Deduplication ([`4b80842`](https://github.com/Voxelum/x-minecraft-launcher/commit/4b80842446e5f57d10e6fc5d69051540873c8f25))**: Deduplicated concurrent background token renewals, eliminating redundant Microsoft authentication calls.
- **Refined Login Cache ([`2726659`](https://github.com/Voxelum/x-minecraft-launcher/commit/2726659e25d65c3f1caf51c628e924a04f6364df))**: Polished credential caching to eliminate cold-start startup delay.
- **Context Menu Stability ([`1a79eb0`](https://github.com/Voxelum/x-minecraft-launcher/commit/1a79eb044da83e8d41d280a74c35baa64144247a))**: Fixed right-click context menu dismiss and focus-trapping glitches.
- **Reddit Community in Feedback Dialog ([#1684](https://github.com/Voxelum/x-minecraft-launcher/pull/1684), [`b0cf753`](https://github.com/Voxelum/x-minecraft-launcher/commit/b0cf753c0c03db5f8f16141952aeebc35af76b84))**: Added a dedicated shortcut to [r/XMCL](https://www.reddit.com/r/XMCL/) inside the Feedback dialog.

---

## 5. Global Privacy Framework: Free, Libre & Built for Every Jurisdiction

At XMCL, we believe that open-source software must champion digital sovereignty. We have completely overhauled all legal documentation across **15 distinct regional localizations**, ensuring full compliance with international laws while protecting user privacy.

```
🌍 XMCL Multi-Jurisdiction Privacy Matrix
├── 🇪🇺 European Union (GDPR) ──── Strict Opt-In · 90-Day Retention · Standard Contractual Clauses (SCCs)
├── 🇬🇧 United Kingdom (UK GDPR) ── ICO Oversight · UK IDTA Transfers · Age 13 Threshold
├── 🇺🇦 Ukraine (Data Protection) ─ Article 8 Rights · Age 14 Threshold · Ombudsman Representation
├── 🇷🇺 Russian Federation (152-FZ) No Local Servers · Refusal of Primary Storage · Voluntary Cross-Border
├── 🇨🇳 China (PIPL) ────────────── Separate Consent (单独同意) · Sanitized Diagnostics · Art. 53 Notice
├── 🇹🇼 Taiwan (PDPA) ───────────── Cross-Border Protections · Virtual Asset Classification
├── 🇺🇸 United States (COPPA/CCPA) ─ Under-13 Protection · "Do Not Sell or Share My Personal Info"
├── 🇯🇵 Japan (APPI) ────────────── Concrete Purpose Specification (Crash Logs & Release Delivery)
├── 🇰🇷 South Korea (PIPA) ──────── Statutory Guardian Consent for Minors under 14
├── 🇸🇦/🇦🇪 Saudi Arabia & UAE ───── PDPL Compliance · Explicit Cross-Border Infrastructure Consent
└── 🇰🇿/🇧🇾 Kazakhstan & Belarus ── Regional Compliance · Direct Data Subject Access Rights
```

### 🛡️ What This Means For You Across Every Region:
- 🇪🇺 **European Union & 🇬🇧 United Kingdom**: Strict **Opt-in only** telemetry (disabled by default), Standard Contractual Clauses (SCCs), UK IDTA, and enforceable rights under Articles 15–22.
- 🇺🇦 **Ukraine**: Native alignment with Article 8 statutory rights of the Law "On Personal Data Protection", age 14 threshold, and direct Ombudsman representation (`hotline@ombudsman.gov.ua`).
- 🇷🇺 **Russian Federation**: Explicit **152-FZ disclaimer** clarifying that XMCL operates with **no servers or databases in the Russian Federation**, does not collect or store primary personal data within Russia, and that browsing the website does not constitute consent to data collection.
- 🇨🇳 **China (PIPL) & 🇹🇼 Taiwan (PDPA)**: Enforced Separate Consent (**单独同意**) for online features and cross-border routing, sanitized diagnostic logs without system paths or usernames, and virtual property classifications.
- 🇯🇵 **Japan (APPI) & 🇰🇷 South Korea (PIPA)**: Granular diagnostic purpose limitations (crash dump analysis and version stability) and explicit under-14 guardian protections.
- 🇺🇸 **United States (COPPA & CCPA/CPRA)**: Strict under-13 child protections and explicit *"Do Not Sell or Share My Personal Information"* compliance.
- 🇸🇦/🇦🇪 **Saudi Arabia & UAE (PDPL)**: Strict GCC cross-border transmission transparency and digital consent age harmonization.
- 🇰🇿 **Kazakhstan & 🇧🇾 Belarus**: Dedicated localized privacy policies tailored to national data protection regulations.
- ⏱️ **Universal 90-Day Retention Ceiling**: We abolished vague "rolling schedules." Operational telemetry is kept for a **maximum of 90 days** before permanent deletion or irreversible anonymization.
- 🔓 **100% Free & Open-Source Software (FOSS)**: The launcher requires **no account and no subscription** to manage instances, install mods, download shaders, or play free P2P LAN multiplayer.
- 🚫 **No Data Selling Ever**: XMCL will never sell user data or share information for behavioral advertising.

You can inspect the customized legal policies for your language in our [Privacy Notice](/privacy) and [Together Portal](/together/privacy).

---

## 6. Complete Changelog

```
🛰️ Core & Platform:
- brand: make XMCL the primary brand (5b9cb511)
- install: new high-performance stream install implementation (8c9f6474)
- install: fix download & extraction concurrency locks (0f4e3e21)
- state: simplify Vue 3 state provide/inject hierarchy (240504e7)
- perf: optimize heavy page rendering & DOM virtualization (8a45ee33)
- diagnose: improve diagnostic status & background worker perf (d49205d4)

🚀 New Features:
- shortcut: allow customizing Quick Action shortcut combination (#1666) (438e18ca)
- instance: support double-click instance icon to launch (76e754eb)
- instance: add instant play button on instance cards (c4f20c13)
- mods: support showing dependent mods before removal (9d96b665)
- instance: support clean no-instance state (55dc3b2d)
- ai: enable AI agent for all users with subscription hint (dc76591a)

🐛 Bug Fixes & Stability Patches:
- modpack: fix case-sensitive issues during modpack upgrades (3b9a82c4)
- mods: should not double-disable already disabled mods (7494c3af)
- launch: handle Flatpak Wayland display failures on Linux (b4cfb2c3)
- forge: improve Forge installer success rate & verification (ab2df499)
- java: detect and repair incomplete runtimes automatically (f130b2a3)
- ui: scroll agent chat to bottom on conversation load (4bff0597)
- ui: localize instance sort tabs in all languages (97386732)
- ui: add Reddit channel to Feedback dialog (#1684) (b0cf753c)
- ui: show active state on collection bookmark button (#1689) (bc077167)
- modrinth: use remove_projects for collection removal (#1688) (a0f6c754)
- curseforge: align upgrade plan key with item.id (#1692) (fbbf06d4)
- auth: deduplicate silent Microsoft token bootstrap (4b808424)
- account: bind DPoP key during OAuth token exchange (546ada4d)
- auth: refine credential and session login cache (2726659e)
- ui: improve right-click context menu stability (1a79eb04)
- multiplayer: consolidate Together WebRTC signaling layer (70a06705)
```

---

## Getting the Update & Community Links

- **Direct Downloads**: Grab the installer for Windows, macOS, or Linux from **[GitHub Releases v0.67.0](https://github.com/Voxelum/x-minecraft-launcher/releases/tag/v0.67.0)**.
- **Linux Flatpak**: Available on **[Flathub](https://flathub.org/en/apps/app.xmcl.voxelum)**.
- **Join Our Community**: Discuss the update on **[Discord](https://discord.gg/W5XVwYY7GQ)** or share feedback on **[Reddit r/XMCL](https://www.reddit.com/r/XMCL/)**.

</PostDetail>
