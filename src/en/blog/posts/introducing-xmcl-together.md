---
date: 2026-08-14
title: "Introducing XMCL Together: The Story Behind Our Vision, Cloud Infrastructure & Smart Hosting"
description: "From a high-school night when a modpack failed to launch with friends to our new Together cloud platform. Discover our origin story, the 4 hosting tiers, pay-as-you-play architecture, and open-source guarantee."
category: Major Update
author: BANSAFAn
authorRole: Technical Writer & Contributor
coAuthors:
  - name: CI010
    role: Core Creator & Lead Architect
    github: https://github.com/ci010
---

<PostDetail>

> *"The best Minecraft setup is the friends you play with."*

Today, we are thrilled to unveil **[XMCL Together](https://xmcl.app/en/together/)**—a purpose-built online services and cloud platform designed to solve the hardest part of modded Minecraft: **actually playing together with friends without friction, crashes, or wasted server costs.**

In this article, we share the origin story behind XMCL, the engineering architecture powering Together, our 4 flexible service plans, and our unwavering commitment to the free, open-source core of XMCL.

---

## 1. The Story of XMCL: The Night We Never Got to Play

I still remember one evening in high school.

A friend and I wanted to play a modpack together. At the time, there were few launchers that made installing mods easy. I was on Windows, my friend was on a Mac, and I had barely touched Minecraft on macOS. Installing Forge alone produced problem after problem.

I helped him troubleshoot remotely for three agonizing hours. Versions, file paths, Java runtimes, Forge build logs—anything that could go wrong, did. By the time the game was finally installed and ready, the evening was almost gone.

**But we still did not get to play.**

The virtual LAN software we used refused to connect. When it finally established a link, the latency was unplayable and dropped constantly. Exhausted after hours of debugging, my friend lost all enthusiasm and gave up for the night.

That night, I quietly made myself a promise: **one day I would build a launcher.** It would not only make modpacks effortless to install and manage—it would solve the problem of playing them with friends once and for all.

At university, that idea became **XMCL**.

---

## 2. Four Plans. Designed for Every Group Size

Whether you are hosting a casual world from your gaming PC or running a dedicated 24/7 modpack server, XMCL Together provides four tailored tiers:

<BlogTierCards />

### 1. Together Home — $2.99 / month
Built for players who host worlds directly on their own computer. When direct P2P NAT traversal fails due to strict router firewalls or ISP Carrier-Grade NAT (CGNAT), Together Home automatically routes traffic through **300+ global Cloudflare relay edges**.
- **20 GB High-Speed Relay Included** (typically covers ~65 hours of 3-player sessions; only $0.08 / GB thereafter).
- **Complimentary AI Modpack Assistant** to diagnose startup crashes and config conflicts.

### 2. Together Camp — $4 / month (Base) + $0.06 / running hour
A lightweight cloud server ideal for 2 to 4 friends playing vanilla+, vanilla with shaders, or lighter modpacks:
- **4 GiB High-Frequency RAM** & **2 / 4 vCPU cores**.
- **32 GiB Persistent NVMe Storage** with automatic world backups.

### 3. Together Lodge — $6 / month (Base) + $0.09 / running hour *(Recommended)*
Our most balanced tier, calibrated specifically for 4 to 6 friends playing typical heavy modpacks (All the Mods, FTB, Create, Vault Hunters):
- **6 GiB High-Frequency RAM** & **3 / 6 vCPU cores**.
- **48 GiB Persistent NVMe Storage**.

### 4. Together Village — $8 / month (Base) + $0.12 / running hour
High-capacity infrastructure for 6 to 10 friends, large tech/magic modpacks, high-entity automation, and custom dimension generation:
- **8 GiB High-Frequency RAM** & **4 / 8 vCPU cores**.
- **64 GiB Persistent NVMe Storage**.

---

## 3. The "Pay-As-You-Play" Server Philosophy

Traditional Minecraft server hosts lock you into expensive 24/7 monthly rates—even when your group only plays a few hours on weekends. 

With **XMCL Together Camp, Lodge, and Village**, you never pay for idle time:
1. **Low Base Fee**: Keeps your server address, modpack installation, save files, and world configuration preserved indefinitely.
2. **Compute Charged Only When Online**: Turn the server on when friends gather, and pay only for actual running hours ($0.06 – $0.12 / hr).
3. **Instant Pause**: When everyone logs off, pause the server with a single click. Runtime charges halt immediately.

---

## 4. Complimentary AI Diagnostic & Modpack Copilot

Getting a server running with 200+ mods shouldn't require a degree in computer science. Every Together plan includes complimentary access to our **AI Diagnostic Copilot**:
- **Crash Log Analysis**: Paste or automatically parse crash reports to identify conflicting mod IDs or corrupted block entities in seconds.
- **Dependency Resolution**: Automatically flags missing library mods (e.g. Cloth Config, Architectury, Curios).
- **Server JVM Optimization**: Recommends optimal garbage collection flags (Aikar's flags / G1GC / ZGC) based on your allocated RAM.

---

## 5. 100% Free & Open-Source Guarantee

We want to make this crystal clear: **XMCL will always remain 100% free and open source.**

- The standalone launcher requires **no account and no subscription** to use.
- Local instance management, mod downloading from Modrinth/CurseForge, shader installation, and free direct P2P multiplayer will never be locked behind a paywall.
- Together services exist solely to fund and sustain the real infrastructure costs: high-speed global relay bandwidth, dedicated cloud compute, and AI token allowances.

---

## 6. Web Platform & Authentication Engineering

Under the hood, lead architect **CI010** deployed extensive infrastructure updates to make the Together web console bulletproof:

- **Saved-Locale OAuth Routing**: When authenticating through third-party identity providers, users are automatically routed back to their selected language (`/uk/`, `/de/`, `/fr/`, `/en/`).
- **Administrative Reauthentication**: Dedicated security safeguards allowing instant session validation and secure console operations.
- **Deterministic Theme & Plan Hydration**: Eliminated client/server state flickering across pricing plan comparisons and dashboard widgets.
- **GDPR & Payment Compliance**: Fully localized European GDPR privacy notices and transparent legal policies.

---

## Explore Together Today

Ready to start your next modpack journey?

👉 **[Explore XMCL Together & Server Plans](https://xmcl.app/en/together/)**  
👉 **[Read the Full Story of XMCL](https://xmcl.app/en/together/story)**  
👉 **[Join the Discussion on Discord](https://discord.gg/W5XVwYY7GQ)**

</PostDetail>
