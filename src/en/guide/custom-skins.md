# Custom Skins Guide (Ely.by / LittleSkin)

This guide will explain why custom skins (from services like Ely.by or LittleSkin) might not show up by default in XMCL compared to other loaders, how skin rendering works in Minecraft Java, and how to configure it correctly.

---

## How Minecraft Java Skin Rendering Works

Normally, Minecraft Java obtains your skin from the official Mojang session server. The process follows this sequence:

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 250" width="100%" style="max-width: 600px; font-family: system-ui, -apple-system, sans-serif; margin: 20px auto; display: block;">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#94a3b8"/>
    </marker>
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#1d4ed8" />
    </linearGradient>
    <linearGradient id="grayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4b5563" />
      <stop offset="100%" stop-color="#1f2937" />
    </linearGradient>
  </defs>

  <!-- Node 1: Client -->
  <rect x="200" y="10" width="200" height="40" rx="8" fill="url(#blueGrad)" />
  <text x="300" y="34" fill="#ffffff" font-size="14" font-weight="600" text-anchor="middle">Minecraft Client</text>

  <!-- Arrow down to check -->
  <line x1="300" y1="50" x2="300" y2="80" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)" />

  <!-- Node 2: Check Decision -->
  <rect x="180" y="90" width="240" height="40" rx="8" fill="url(#grayGrad)" stroke="#4b5563" stroke-width="1" />
  <text x="300" y="114" fill="#f3f4f6" font-size="13" font-weight="500" text-anchor="middle">Is custom Yggdrasil active?</text>

  <!-- Branch Left: No -->
  <path d="M 240 130 L 140 180" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)" />
  <text x="170" y="152" fill="#ef4444" font-size="12" font-weight="600" text-anchor="middle">No</text>

  <!-- Branch Right: Yes -->
  <path d="M 360 130 L 460 180" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)" />
  <text x="430" y="152" fill="#10b981" font-size="12" font-weight="600" text-anchor="middle">Yes</text>

  <!-- Node 3: Mojang (Left) -->
  <rect x="20" y="190" width="240" height="50" rx="8" fill="#1f2937" stroke="#374151" stroke-width="1.5" />
  <text x="140" y="210" fill="#f3f4f6" font-size="13" font-weight="600" text-anchor="middle">Mojang Session Server</text>
  <text x="140" y="228" fill="#9ca3af" font-size="11" text-anchor="middle">textures.minecraft.net</text>

  <!-- Node 4: Custom (Right) -->
  <rect x="340" y="190" width="240" height="50" rx="8" fill="#1f2937" stroke="#10b981" stroke-width="1.5" />
  <text x="460" y="210" fill="#f3f4f6" font-size="13" font-weight="600" text-anchor="middle">Custom Skin Server</text>
  <text x="460" y="228" fill="#10b981" font-size="11" font-weight="500" text-anchor="middle">Ely.by / LittleSkin</text>
</svg>

---

## Why Skins Do Not Show in XMCL by Default

In other launchers like **Legacy Launcher** or **ElyPrism**:
* **Legacy Launcher** automatically modifies the game's internal `authlib.jar` or runs a silent Java agent. It queries Ely.by's skins for any offline (local) accounts by name, bypassing security.
* **ElyPrism** is a fork of Prism Launcher pre-configured specifically for the Ely.by ecosystem.

**XMCL** is a clean, open-source launcher. It **never** modifies your game files or redirects traffic to third-party skin servers without your authorization.

---

## How to Set Up Custom Skins in XMCL

You can set up custom skins using one of the two methods below.

### Method 1: Add a Third-Party Account (Recommended)

Instead of using a simple offline/local account name, add your official Ely.by or LittleSkin account to the launcher. This enables **Authlib-Injector** automatically:

1. Click on the **Accounts** icon in the launcher sidebar.
2. Click **Add Account**.
3. Choose **Ely.by** or **Yggdrasil** (for LittleSkin, enter their Yggdrasil API URL: `https://littleskin.cn/api/yggdrasil`).
4. Sign in with your account credentials.
5. In your instance settings, make sure **Disable Authlib Injector** is turned **OFF**.

#### How it works under the hood
When you launch the game, XMCL automatically appends the `authlib-injector` Java agent with the custom API root:

```cmd
java -javaagent:authlib-injector.jar=https://authserver.ely.by/api/ -jar ...
```

---

### Method 2: Use the CustomSkinLoader Mod

If you prefer playing with a local (offline) account but want your game to load skins from Ely.by or LittleSkin, you should install the **CustomSkinLoader** mod.

1. Install a mod loader (Forge, Fabric, or Quilt) in your instance.
2. Search and download the **CustomSkinLoader** mod in the XMCL mod download tab.
3. Launch the game once. It will create a configuration file at `minecraft/CustomSkinLoader/CustomSkinLoader.json`.
4. Open the JSON configuration and configure the skin servers:

```json
{
  "enable": true,
  "loadTypes": ["Mojang", "ElyBy", "LittleSkin"],
  "skinList": [
    { "type": "Mojang" },
    { "type": "Yggdrasil", "apiRoot": "https://authserver.ely.by/api/" },
    { "type": "Yggdrasil", "apiRoot": "https://littleskin.cn/api/yggdrasil/" }
  ]
}
```
5. CustomSkinLoader will query these skin networks by nickname and display the skins for you and any other players who have configured it!
