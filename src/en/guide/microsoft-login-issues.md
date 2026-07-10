# Microsoft Login Issues (failed to exchange Xbox token)

This guide will explain why you might see the error **"failed to exchange Xbox token"** when logging in to your Microsoft account in XMCL, what causes it, and how to resolve it.

---

## 🔍 How the Authentication Process Works

To launch a licensed copy of Minecraft, the launcher must verify your identity across three separate authentication layers:

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
    The error <strong>"failed to exchange Xbox token"</strong> means that Step 1 and Step 2 completed successfully, but Mojang's authentication servers rejected the exchange at Step 3.
  </p>
</div>

---

## 🛠 Three Main Causes and Solutions

### 1. No Minecraft License on This Account

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #ef4444; font-weight: bold; font-size: 1.25rem;">
    🎮
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Cause: Mojang servers did not find the purchased game</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">This is the most common reason. You logged in to a Microsoft account, but Mojang indicates that this specific account does not own a license for Minecraft Java Edition.</p>
  </div>
</div>

#### How to fix:
* **Verify Purchase:** Log in to [Minecraft.net](https://www.minecraft.net/) using your Microsoft account and check your profile. Make sure you see the download option rather than a prompt to buy the game.
* **Verify Game Pass Status:** If playing via **Xbox Game Pass**, ensure your subscription is active and that you are logging in with the exact Microsoft account associated with the active subscription.
* **Double Check Email:** Make sure you aren't logging in with a different Microsoft account (like a school or work email) instead of the personal account that holds the purchase.

---

### 2. Missing Xbox Live Profile

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #f59e0b; font-weight: bold; font-size: 1.25rem;">
    👤
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Cause: Microsoft account not activated on Xbox Live</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">You created a Microsoft account but never initialized Xbox Live services. The login servers cannot generate an access token because the account lacks a unique Gamertag.</p>
  </div>
</div>

#### How to fix:
1. Go to the official [Xbox.com](https://www.xbox.com/) website.
2. Click **Sign In** in the top right corner.
3. If prompted to create an Xbox profile, **accept the agreement and set up a Gamertag** (unique nickname).
4. Wait 1-2 minutes for the servers to sync, then launch XMCL and try logging in again.

---

### 3. Network Blocks and ISP Routing Restrictions

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(139, 92, 246, 0.05); border: 1px solid rgba(139, 92, 246, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(139, 92, 246, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #8b5cf6; font-weight: bold; font-size: 1.25rem;">
    🌐
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Cause: Blocked connection to Mojang or Microsoft servers</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Due to regional ISP blocks, local firewalls, or corrupt DNS configurations, your PC cannot establish a connection to `api.minecraftservices.com` or Xbox Live login servers.</p>
  </div>
</div>

#### How to fix:
* **Use a VPN:** Connect to a stable VPN before attempting to log in. This bypasses ISP throttling and blocked routing paths.
* **Configure Proxy inside XMCL:**
  1. Open **Settings** (gear icon on the left sidebar).
  2. Navigate to **Network Settings**.
  3. Input your active proxy server address (HTTP, HTTPS, and SOCKS5 protocols are supported).
* **Reset your hosts file**:
  Verify your hosts file (`C:\Windows\System32\drivers\etc\hosts`) does not contain any static rules redirecting requests for `mojang.com` or `minecraftservices.com`. Clean them if present.

---

## 📋 Quick Diagnostic Chart

| Error Symptom | Likely Cause | First Step to Solve |
| :--- | :--- | :--- |
| Error right after entering email/password | Microsoft account locked or invalid | Reset password at Microsoft.com |
| Error **"failed to exchange Xbox token"** | No Minecraft license / No Xbox profile | Create a Gamertag on Xbox.com or buy the game |
| Error **"Failed to connect to server"** | Network blocks / DNS routing issues | Connect to a VPN or configure proxy in XMCL |
