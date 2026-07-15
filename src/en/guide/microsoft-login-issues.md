# Microsoft Login, Demo Mode & Licensing Issues

This guide will explain how to log in to your Microsoft account in XMCL, what to do if you encounter the **"failed to exchange Xbox token"** error, why Minecraft might launch in **Demo Mode**, and how to play without a paid license using alternative logins.

---

## 🔑 1. Logging In with a Microsoft Account

To sign in and play with your official Minecraft license, follow these steps:

1. Click on your profile/avatar (or **"Manage Account"**) in the top right to open the Account Manager:

   <video src="/guidephoto/My%20stuff.mp4" autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

2. Click **"Add Account"**, choose **Microsoft**, and proceed with the login:

   <video src="/guidephoto/add%20account.mp4" autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

> 💡 **Sign In via Device Code:**  
> If you don't want to type your password inside the launcher, check **"Login by Device Code"**. XMCL will show a code; simply visit `microsoft.com/link` in your web browser, enter the code, and confirm the login.

---

## 🔍 2. How Microsoft Authentication Works

When logging in, the launcher must verify your identity across three separate authentication layers:

<div style="display: flex; flex-direction: column; gap: 16px; margin: 24px 0; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-weight: 600; font-size: 1.1rem; color: var(--vp-c-text-1);">🔑 Authentication Handshake:</span>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: center; margin: 10px 0;">
    <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #3b82f6; font-size: 0.85rem;">STEP 1</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Microsoft Login</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Checks Password</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold;">➔</div>
    <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #10b981; font-size: 0.85rem;">STEP 2</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Xbox Live Services</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Obtains Gamertag</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold; color: #ef4444;">➔ ❌ Fails Here</div>
    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #ef4444; font-size: 0.85rem;">STEP 3 (Exchange)</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Minecraft Token</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Verifies License</div>
    </div>
  </div>
  <p style="font-size: 0.9rem; color: var(--vp-c-text-2); margin: 0; text-align: center; line-height: 1.6;">
    If Step 3 fails, the login will reject with <strong>"failed to exchange Xbox token"</strong>, or the game will launch in <strong>Demo Mode</strong>. Both symptoms mean the Mojang authentication servers could not verify a valid Minecraft license on your Microsoft account.
  </p>
</div>

---

## 🛠 3. Troubleshooting Microsoft Login & Demo Mode Issues

If you own the game but encounter login failures or the Demo screen:

### Cause A: No Minecraft License on This Microsoft Account

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #ef4444; font-weight: bold; font-size: 1.25rem;">
    🎮
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Mojang servers did not find the purchased game</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">This is the most common reason. You logged in successfully, but Mojang reports that this specific account does not own Minecraft Java Edition.</p>
  </div>
</div>

#### How to fix:
* **Verify Purchase:** Log in to [Minecraft.net](https://www.minecraft.net/) using your Microsoft account and verify that you see the download option instead of a buy prompt.
* **Verify Game Pass Status:** If playing via **Xbox Game Pass**, ensure your subscription is active and that you are logging in with the exact Microsoft account associated with the active subscription.
* **Double Check Email:** Make sure you aren't logging in with a different Microsoft account (like a school or work email) instead of the personal account that holds the purchase.

---

### Cause B: Missing Xbox Live Profile

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #f59e0b; font-weight: bold; font-size: 1.25rem;">
    👤
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Microsoft account not activated on Xbox Live</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">You created a Microsoft account but never initialized Xbox Live services. The login servers cannot generate an access token because the account lacks a unique Gamertag.</p>
  </div>
</div>

#### How to fix:
1. Go to the official [Xbox.com](https://www.xbox.com/) website.
2. Click **Sign In** in the top right corner.
3. If prompted to create an Xbox profile, **accept the agreement and set up a Gamertag** (unique nickname).
4. Wait 1-2 minutes for the servers to sync, then launch XMCL and try logging in again.

---

### Cause C: Network Blocks and ISP Routing Restrictions

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(139, 92, 246, 0.05); border: 1px solid rgba(139, 92, 246, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(139, 92, 246, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #8b5cf6; font-weight: bold; font-size: 1.25rem;">
    🌐
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Blocked connection to Mojang or Microsoft servers</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Due to regional ISP blocks, local firewalls, or corrupt DNS configurations, your PC cannot establish a connection to `api.minecraftservices.com` or Xbox Live login servers.</p>
  </div>
</div>

#### How to fix:
* **Use a VPN:** Connect to a stable VPN before attempting to log in. This bypasses ISP throttling and blocked routing paths.
* **Configure Proxy inside XMCL:**
  1. Open **Settings** (gear icon on the left sidebar).
  2. Navigate to **Network Settings**.
  3. Input your active proxy server address (HTTP, HTTPS, and SOCKS5 protocols are supported).
* **Reset your hosts file:** Ensure there are no rules redirecting `mojang.com` or `minecraftservices.com` in your system hosts file.

---

## 🆓 4. Playing Without a License (Alternative Logins)

If you do not own a licensed copy of Minecraft, you can play using alternative login systems. XMCL includes a **Developer Mode** to allow offline play and third-party authentication services.

### How to Enable Developer Mode:
1. Go to **Settings** (gear icon on the left sidebar).
2. Find the **"Developer Mode"** option and toggle it on:

   ![Enabling Developer Mode](/guidephoto/developer-mode.png)

Once enabled, you will see additional authentication options in the Account Manager when adding an account:

### 🟢 Offline Mode
- Play **locally** without connecting to Mojang's servers.
- Simply choose any username and start playing single-player or local multiplayer worlds.

### 🟡 Littleskin
- A free community authentication and skin server.
- Allows you to use custom skins without a paid Minecraft license.
- Website: [https://littleskin.cn](https://littleskin.cn)

### 🔵 Ely.by
- A popular third-party skin and account database.
- Supports custom skins, capes, and is compatible with many community servers.
- Website: [https://ely.by](https://ely.by)
