---
date: 2026-08-12
title: "P2P Multiplayer Reborn: Cloudflare Workers, DPoP Security & Zero-Trust Privacy"
description: "XMCL's P2P online multiplayer is officially restored in v0.66.0 & v0.66.1! Discover our new backend architecture built on Cloudflare Workers with Durable Objects, client-side DPoP cryptographic authentication, and uncompromising zero-trust privacy."
category: Major Update
author: XMCL Core Team
---

# P2P Multiplayer Reborn: Cloudflare Workers, DPoP Security & Zero-Trust Privacy

We are thrilled to announce that **P2P Online Multiplayer is officially back and fully operational** in [XMCL v0.66.0](https://github.com/Voxelum/x-minecraft-launcher/releases/tag/v0.66.0) and [v0.66.1](https://github.com/Voxelum/x-minecraft-launcher/releases/tag/v0.66.1)!

Following the [temporary downtime](/en/blog/posts/p2p-multiplayer-status) caused by Deno Deploy quota exhaustion, we completely rebuilt our WebRTC signaling infrastructure from the ground up. The new system is powered by **Cloudflare Workers with Durable Objects**, client-side **DPoP cryptographic authentication (RFC 9449)**, and an architecture designed around strict **zero-trust privacy**.

---

<PostDetail>

:::tip SERVICE STATUS: ONLINE
**P2P Multiplayer Room Hosting is Fully Restored!**
Update your launcher to **XMCL v0.66.1 or later** to enjoy high-speed, port-forwarding-free multiplayer with your friends worldwide.
:::

## 1. The Return of Seamless World Sharing

XMCL's P2P multiplayer allows you to host single-player Minecraft worlds and play with friends across the internet **without port forwarding, dedicated server setups, or third-party VPN tools like Hamachi or Radmin**.

With the release of XMCL v0.66.0 (new account system, host-star multiplayer v2 client, room master migration & reconnect) and stability patches in v0.66.1 (P2P connection fix, DPoP auth, multiplayer gated behind account login), room creation, WebRTC ICE candidate exchanges, and connection handshakes are faster and more reliable than ever.

---

## 2. New Backend Architecture: Cloudflare Workers, Durable Objects & `xmcl-web-api`

To replace the legacy Deno Deploy infrastructure, we migrated our entire backend to [Cloudflare Workers](https://workers.cloudflare.com/) and open-sourced the brand-new backend repository: **[`xmcl-web-api`](https://github.com/Voxelum/xmcl-web-api)**. The backend is built on the [Hono](https://hono.dev) web framework.

```
+---------------------------+                                     +---------------------------+
|                           |       signaling.xmcl.app            |                           |
|   Host XMCL Launcher     | <==== WebSocket + DPoP Auth ====>   |   Guest XMCL Launcher     |
|   (Local DPoP Key Pair)  |    (Durable Object per Room)        |   (Local DPoP Key Pair)   |
+---------------------------+                                     +---------------------------+
             |                                                                 |
             +=================== Direct WebRTC P2P Connection ===============+
                              (Encrypted Host-Star DataChannel)
```

### Production Domain Split

The backend runs as three independent Cloudflare Workers, each with its own domain:

| Domain | Purpose |
|---|---|
| `api.xmcl.app` | Core API: launcher updates, notifications, flights, mod translations |
| `ai.xmcl.app` | AI chat completions proxy (Agnes) |
| `signaling.xmcl.app` | Multiplayer room signaling (`/v1/multiplayer/*`) and WebRTC (`/v1/rtc/official`) |

### Why Cloudflare Workers & Durable Objects?
- **Global Low Latency:** Signal exchanges route through Cloudflare's 300+ edge data centers globally, minimizing WebRTC connection setup times.
- **Stateful Room Objects:** Each P2P room is managed by a dedicated `MultiplayerRoomObject` Durable Object instance with `master`/`member` roles and revisioned room-state snapshots. When a room closes or all players disconnect, the Durable Object is automatically evicted from memory.
- **High Availability:** Built-in DDoS protection and serverless scalability ensure room signaling never suffers from traffic spikes or single-point failures -- eliminating the Deno Deploy quota exhaustion that caused the [previous outage](/en/blog/posts/p2p-multiplayer-status).

---

## 3. Why Account Sessions are Now Required

The XMCL account system was introduced in v0.66.0 (`add account system #1619`). Starting with v0.66.1, hosting or joining P2P online multiplayer rooms **requires logging in** to a lightweight XMCL Web Account (`gate multiplayer behind XMCL account login`).

### The Reasons for Account Authentication:
1. **Spam & Abuse Prevention:** Open WebRTC signaling brokers are vulnerable to automated botnets, room spamming, and denial-of-service exploits. Account sessions provide rate-limiting and access control.
2. **Cryptographic Identity Verification:** Accounts enable the launcher to issue secure, DPoP-signed session tokens to verify that room hosts and guests are legitimate clients.
3. **STUN/TURN Relay Management:** When direct P2P connections are restricted by strict NAT routers, account sessions grant authenticated relay access to keep your game connected smoothly.

---

## 4. Zero-Trust Privacy & Security Architecture

We understand that introducing user accounts raises privacy questions. We designed our authentication and session system under a strict **Zero-Trust Privacy Model**.

```
+-----------------------------------------------------------------------------------+
|                        XMCL ZERO-TRUST PRIVACY ARCHITECTURE                       |
+-----------------------------------------------------------------------------------+
|  1. Client-Side DPoP  : Private keys generated & stored on your device only.      |
|  2. Developer Access   : ZERO access to private keys, tokens, or credentials.     |
|  3. Cloudflare Managed : Auth & signaling run in isolated Cloudflare Workers.      |
|  4. Ephemeral Rooms    : Durable Objects evicted when rooms close or idle out.     |
|  5. No Data Harvesting : Zero tracking, zero IP logging, zero activity selling.    |
+-----------------------------------------------------------------------------------+
```

### 1. Client-Side DPoP Cryptographic Security (RFC 9449)
XMCL v0.66.1 implements **DPoP (Demonstrating Proof-of-Possession)** as a client-side authentication mechanism for Web Account sessions.
- When you log in, your launcher generates an **asymmetric cryptographic key pair** locally on your computer. The private key never leaves your device.
- Every API request sent to `xmcl-web-api` includes a DPoP proof signed by your local private key, cryptographically binding the token to your specific device.
- **Even if a session token were intercepted in transit, it is completely useless without your device's private key.** This eliminates traditional token-theft attacks.

### 2. Zero Access by Developers & Moderators
- Core XMCL developers, server admins, and moderators **have ZERO access to user private keys or credentials**.
- All account authentication, token issuance, and validation run **strictly inside Cloudflare's isolated Worker execution environment**. No human operator can extract runtime secrets from a running Worker.

### 3. Ephemeral Room Signaling via Durable Objects
- P2P room signaling data lives **exclusively inside Cloudflare Durable Objects** -- stateful, per-room instances that exist only while a room is active.
- When all players disconnect or a room is closed, the Durable Object is **automatically evicted from memory**. No room state, chat history, or connection metadata persists after a session ends.
- The launcher does **not** maintain any database storing user activity logs, connection history, or room archives.

### 4. No Data Harvesting or Activity Tracking
- The launcher does **NOT** collect, harvest, track, or monetize user account data, IP addresses, or playing habits.
- XMCL remains 100% open-source, allowing anyone to audit both the [launcher source code](https://github.com/Voxelum/x-minecraft-launcher) and the [`xmcl-web-api`](https://github.com/Voxelum/xmcl-web-api) backend repository.

---

## 5. How to Start Playing P2P in XMCL v0.66.1

Getting back into P2P multiplayer takes less than a minute:

1. **Update XMCL:** Download the latest version ([v0.66.1](https://github.com/Voxelum/x-minecraft-launcher/releases/tag/v0.66.1)).
2. **Create / Sign In to Account:** Click the account menu in the top-right corner and create a lightweight XMCL account.
3. **Launch Your World:** Start any Minecraft single-player world.
4. **Open P2P Room:** Press Esc -> Click **"Open to LAN / P2P"** -> Share your room link or QR code with your friends!

---

## 6. Open Source Verification & Release Links

We invite security researchers and community developers to inspect our open-source codebase:

- **XMCL Launcher Releases:** [v0.66.0 Release Notes](https://github.com/Voxelum/x-minecraft-launcher/releases/tag/v0.66.0) | [v0.66.1 Release Notes](https://github.com/Voxelum/x-minecraft-launcher/releases/tag/v0.66.1)
- **Web API Backend Repository:** [github.com/Voxelum/xmcl-web-api](https://github.com/Voxelum/xmcl-web-api)
- **RFC 9449 DPoP Standard:** [OAuth 2.0 Demonstrating Proof-of-Possession](https://datatracker.ietf.org/doc/html/rfc9449)
- **Previous Outage Report:** [P2P Multiplayer Service Downtime & Backend Migration](/en/blog/posts/p2p-multiplayer-status)

Thank you for your patience during the backend migration. Happy gaming!

---
*The XMCL Core Team*

</PostDetail>
