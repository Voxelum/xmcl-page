# P2P LAN Multiplayer Guide

This guide explains how to play Minecraft with friends across different networks using XMCL's built-in **P2P (Peer-to-Peer) WebRTC** system without third-party VPN tools (Hamachi, Radmin) or router port forwarding.

---

## 1. What is XMCL P2P Multiplayer?

Traditional Minecraft LAN play requires all computers to be physically connected to the same home Wi-Fi or Ethernet router. Playing over the internet historically required renting a dedicated server, manually configuring router NAT port forwarding, or installing third-party virtual network software like Hamachi or Radmin VPN.

XMCL solves this natively by implementing a **direct WebRTC peer-to-peer mesh networking stack**:
- **Zero Third-Party Software**: No extra drivers, virtual network adapters, or administrative privileges required.
- **Direct Encrypted Data Pipe**: Traffic travels point-to-point directly between players with DTLS/SRTP encryption.
- **Automatic LAN Emulation**: When you connect, the host's singleplayer world automatically appears inside your friend's in-game **Multiplayer** menu just like a local home LAN game.

---

## 2. Step-by-Step Guide for the Host

### Step 1: Launch Your Game
Launch your desired Minecraft instance (Vanilla, Forge, Fabric, NeoForge, or Quilt) from XMCL.

### Step 2: Open the World to LAN
1. Enter your singleplayer world.
2. Press `Esc` and click **Open to LAN**.
3. Choose your preferred game mode and whether cheats are allowed, then click **Start LAN World**.
4. Minecraft will display a message in chat showing the local port number (e.g. `Local game hosted on port 54321`).

### Step 3: Create a P2P Room in XMCL
1. Switch to the XMCL launcher window.
2. Click **Multiplayer (P2P)** on the left navigation sidebar.
3. Click **Host Room** / **Create Room**.
4. XMCL will automatically detect the active LAN game running on your PC.
5. Click **Copy Room Code** (or copy the one-click invite link) and send it to your friends via Discord, Telegram, or chat.

---

## 3. Step-by-Step Guide for the Guest (Friends Joining)

### Step 1: Match Game Version & Mods
Ensure you have the same Minecraft version and the same modpack installed as the host.

### Step 2: Join the Room in XMCL
1. Open XMCL and navigate to **Multiplayer (P2P)** on the left sidebar.
2. Click **Join Room** and paste the Room Code or invite link provided by the host.
3. Wait a few seconds while XMCL performs the WebRTC handshake and STUN hole-punching. The room status will update to **Connected (Direct P2P)**.

### Step 3: Launch Minecraft and Join
1. Launch your matching Minecraft instance in XMCL.
2. In the Minecraft main menu, click **Multiplayer**.
3. Scroll to the bottom of the server list under **Scanning for games on your local network**.
4. The host's world will appear automatically under **LAN Worlds**! Click it and press **Join Server**.

---

## 4. Playing with Offline Profiles (No Microsoft License)

XMCL P2P multiplayer works seamlessly whether all players have official Microsoft accounts or use offline profiles:

1. **Unique Usernames**: Ensure every player sets a distinct username in XMCL's account manager. Duplicate usernames will cause connection conflicts.
2. **Online Mode Configuration**:
   - If playing a vanilla world where some players use offline profiles, install a lightweight server mod like **LAN World Plug-n-Play** or **e4mc** that allows setting `online-mode: false` on LAN worlds.
   - For modpacks with built-in auth mods, players can join instantly without Microsoft session validation.

---

## 5. Automatic Mod Synchronization (Manifest Sync)

When connected to a room, XMCL compares the client mods between the Host and the Guest:
- **Compatible**: All required gameplay mods match; you can join immediately.
- **Mod Mismatch Warning**: If the host has added mods that the guest is missing (or version numbers differ), XMCL displays a notification highlighting the exact mismatched `.jar` files so you can install them before launching.

---

## 6. Troubleshooting Common Connection Issues

### 1. Game Does Not Appear in Minecraft's Multiplayer List
- Make sure the guest clicked **Join Room** in XMCL *before* entering Minecraft's Multiplayer menu.
- If it still doesn't scan automatically, look at the room details in XMCL: XMCL displays a local fallback proxy address (e.g. `127.0.0.1:49152`).
- In Minecraft, click **Direct Connection**, enter `127.0.0.1:49152` (replace with your port), and click **Join Server**.

### 2. Windows Defender Firewall Blocking Java or XMCL
Windows Firewall often blocks incoming UDP/TCP traffic for new Java runtimes:
1. Open Windows **Control Panel** -> **Windows Defender Firewall** -> **Allow an app through firewall**.
2. Look for **Java(TM) Platform SE binary** (`javaw.exe`) and **XMCL**.
3. Ensure both **Private** and **Public** checkboxes are ticked.
4. Restart the Minecraft instance.

### 3. Symmetric NAT & TURN Relay Fallback
If both you and your friend are behind strict, symmetric carrier-grade NATs (CGNAT) that block direct hole-punching:
- XMCL will automatically switch the connection to an encrypted **TURN Relay**.
- You will see the connection status change from **Direct P2P** to **Relay**.
- The game will still work without manual port forwarding, though latency (ping) may be slightly higher depending on relay distance.
