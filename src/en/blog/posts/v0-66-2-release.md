---
date: 2026-08-14
title: "XMCL v0.66.2: Robust Account Authentication, P2P File Encoding & Web Platform Upgrades"
description: "XMCL v0.66.2 is out now! Discover key bug fixes for identity provider authentication, silent Microsoft token refresh, P2P multiplayer file transfers, and major web platform upgrades."
category: Release
author: BANSAFAn
authorRole: Technical Writer & Contributor
coAuthors:
  - name: CI010
    role: Core Creator & Lead Architect
    github: https://github.com/ci010
---

<PostDetail>

We are excited to announce the release of **[XMCL v0.66.2](https://github.com/Voxelum/x-minecraft-launcher/releases/tag/v0.66.2)**! This maintenance update delivers vital stability improvements across account management, Microsoft authentication, P2P multiplayer file sharing, and mod drag-and-drop imports, alongside major architectural enhancements to our web infrastructure and Together platform.

:::tip UPDATE AVAILABLE
**XMCL v0.66.2** is available for Windows, macOS, and Linux. Update directly through the launcher's built-in updater, download from [GitHub Releases](https://github.com/Voxelum/x-minecraft-launcher/releases/tag/v0.66.2), or install via [Flathub](https://flathub.org/en/apps/app.xmcl.voxelum).
:::

---

## 1. Account Management & Authentication Hardening

Following the architectural rework of our account and identity subsystems, v0.66.2 polishes edge-case behaviors and improves login stability for all identity providers:

- **Identity Refresh on Authentication**: Account identities and session states now refresh immediately upon completing authentication ([`4a798f4`](https://github.com/Voxelum/x-minecraft-launcher/commit/4a798f45b4e5c4b691f9d97467c3a72a427c1567)).
- **Direct Provider Authentication in Account Panel**: Users can now trigger identity provider authentication flows directly from within the launcher's Account Panel without switching context ([`4afbab8`](https://github.com/Voxelum/x-minecraft-launcher/commit/4afbab87ebbdef7d9fbaa13c3790fc9887ec2286)).
- **Clearer Error Handling for Missing Profiles**: When signing in with a Microsoft account that has not yet purchased or created a Minecraft Java Edition profile, the launcher now returns normalized, user-friendly error messages rather than raw API stack traces ([`fd2c0d1`](https://github.com/Voxelum/x-minecraft-launcher/commit/fd2c0d1f846d1e5f75f438a4e54c5b7e12866ec2)).
- **Traced Login & Passive Silent Token Refresh**: Enhanced tracing for Microsoft OAuth login sequences, and converted background silent token renewals to a passive, non-intrusive lifecycle ([`f616c6f`](https://github.com/Voxelum/x-minecraft-launcher/commit/f616c6f7dfe696a8d0fb0125081e597ee4dcfb1d)).

---

## 2. P2P Multiplayer: Proper File Name Encoding

XMCL's built-in Peer-to-Peer multiplayer allows friends to join LAN worlds directly over encrypted WebRTC DataChannels. In v0.66.2, we resolved an issue where world resource packs, mod synchronization payloads, and custom files with Unicode or special characters in their filenames could fail during transfer:

- **Encoded Shared File Responses**: File transfer responses over P2P DataChannels now strictly encode filename headers ([`bf9bf56`](https://github.com/Voxelum/x-minecraft-launcher/commit/bf9bf56da4a6d63cca309370584e98b2f245adbe)), ensuring seamless resource synchronization regardless of file naming or language.

---

## 3. Reliable Drag-and-Drop File Imports

Importing `.jar` mods, modpacks (`.mrpack`, CurseForge `.zip`), resource packs, and world saves via drag-and-drop is a core feature of XMCL. 

- **Electron Preload Path Resolution**: Resolved a path lookup inconsistency in modern Chromium/Electron builds by routing dropped file paths through our secure preload bridge ([`8c002ee`](https://github.com/Voxelum/x-minecraft-launcher/commit/8c002ee8cf35ca5738d777859a5d8a91cf2d014d)), ensuring files are instantly recognized and imported into instances.

---

## 4. Web Infrastructure & Platform Enhancements

In parallel with the launcher update, core maintainer **CI010** deployed extensive enhancements to the official website and cloud services ecosystem (`xmcl-page`):

| Area | Enhancement | Impact |
| :--- | :--- | :--- |
| **OAuth Routing** | Locale-Preserving Callbacks | Users are smoothly redirected back to their selected language after completing OAuth flows. |
| **Admin Console** | Reauthentication & State Management | Added secure administrative reauthentication, session renewal, and dedicated console return paths. |
| **Session Hydration** | Deterministic Theme & Plan Hydration | Fixed SSR/CSR hydration discrepancies across VitePress components and service pricing plans. |
| **Together Services** | Billing Type Safety & Flow Polish | Hardened type safety for Together billing integrations, streamlined purchase actions, and modernized staging pipelines. |

---

## 5. Changelog Summary

```
🐛 Launcher Bug Fixes (v0.66.2):
- account: refresh identities after authentication (4a798f45)
- account: authenticate providers from account panel (4afbab87)
- auth: normalize missing Minecraft profile errors (fd2c0d1f)
- auth: trace Microsoft login and keep silent refresh passive (f616c6f7)
- multiplayer: encode shared file response names (bf9bf56d)
- import: resolve dropped file paths via preload (8c002ee8)

🌐 Web Platform & Service Updates:
- auth: route OAuth callbacks to saved locale and support admin reauthentication
- session: deterministic theme hydration and Together plan hydration
- billing: type-safe billing integration and refined commercial checkout flow
```

---

## Getting the Update

- **Auto-Update**: If you are already running XMCL v0.66.0 or v0.66.1, the launcher will prompt you to update automatically.
- **Direct Downloads**: Grab the installer for Windows, macOS, or Linux from **[GitHub Releases v0.66.2](https://github.com/Voxelum/x-minecraft-launcher/releases/tag/v0.66.2)**.
- **Linux Flatpak**: Updated builds are rolling out on **[Flathub](https://flathub.org/en/apps/app.xmcl.voxelum)**.

</PostDetail>
