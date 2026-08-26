# Microsoft Login, Bedrock vs Java & License Issues

This guide explains how Microsoft authentication works in XMCL, why login errors (such as **"failed to exchange Xbox token"**) occur, why the game might launch in **Demo Mode**, the critical difference between **Bedrock Edition (Mobile/Console)** and **Java Edition (PC)**, and how to fix common account issues.

---

## 🔑 1. Logging In with a Microsoft Account

To sign in and play with your official Minecraft license, follow these steps:

1. Click on your profile/avatar (or **"Manage Account"**) in the top-right corner to open the Account Manager:

   <video src="/guidephoto/My%20stuff.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

2. Click **"Add Account"**, choose **Microsoft**, and proceed with the login:

   <video src="/guidephoto/add%20account.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

> 💡 **Sign In via Device Code:**  
> If you prefer not to enter your credentials directly inside the launcher, check **"Login by Device Code"**. XMCL will generate an 8-digit code; simply visit [microsoft.com/link](https://microsoft.com/link) in your web browser, enter the code, and confirm.

---

## 🔍 2. How Microsoft Authentication Works

When you authenticate, the launcher communicates across three distinct verification stages:

<div style="display: flex; flex-direction: column; gap: 16px; margin: 24px 0; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-weight: 600; font-size: 1.1rem; color: var(--vp-c-text-1);">🔑 3-Step Verification Handshake:</span>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: center; margin: 10px 0;">
    <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #3b82f6; font-size: 0.85rem;">STEP 1</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Microsoft OAuth</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Verifies Email & Password</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold;">➔</div>
    <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #10b981; font-size: 0.85rem;">STEP 2</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Xbox Live Services</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Verifies Xbox Profile & Gamertag</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold; color: #ef4444;">➔ ❌ Fails Here</div>
    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #ef4444; font-size: 0.85rem;">STEP 3 (Exchange)</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Mojang Java License</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Checks PC Java Ownership</div>
    </div>
  </div>
  <p style="font-size: 0.9rem; color: var(--vp-c-text-2); margin: 0; text-align: center; line-height: 1.6;">
    If Step 3 fails, the login will return <strong>"failed to exchange Xbox token"</strong> (or <strong>"Not Purchased"</strong>), or the game will launch in <strong>Demo Mode</strong>. This means Mojang's servers could not find an active <strong>Minecraft: Java Edition</strong> license on this Microsoft account.
  </p>
</div>

---

## 🛑 3. Crucial: Bedrock vs. Java Edition (The #1 Confusion)

**XMCL is a launcher for Minecraft: Java Edition (Windows, macOS, Linux).**

Many players attempt to log in after buying Minecraft on other platforms, only to encounter login errors:

| Platform Where You Bought Minecraft | Edition Owned | Compatible with XMCL? | Why It Fails |
| :--- | :--- | :--- | :--- |
| 📱 **Mobile (iOS / Android / Google Play)** | Bedrock Edition | ❌ No | Mobile licenses do not grant PC Java Edition access. |
| 🎮 **Console (PlayStation 4 / 5)** | Bedrock Edition | ❌ No | PlayStation licenses are console-only. |
| 🎮 **Console (Xbox One / Series X\|S)** | Bedrock Edition | ❌ No | Xbox console purchases do not transfer to PC Java. |
| 🕹️ **Nintendo Switch** | Bedrock Edition | ❌ No | Nintendo eShop licenses are Switch-only. |
| 💻 **PC (Minecraft: Java & Bedrock Bundle)** | Java & Bedrock | ✅ **Yes** | Fully supported! |
| 🟢 **PC Game Pass / Game Pass Ultimate** | Java & Bedrock | ✅ **Yes** | Supported as long as subscription is active. |

> ⚠️ **Important:**  
> If you only purchased Minecraft on your **phone**, **tablet**, **PlayStation**, **Xbox console**, or **Nintendo Switch**, Mojang's authentication servers will report that your Microsoft account **does not own Java Edition**.  
> To play official Java Edition on PC, you must own the **"Minecraft: Java & Bedrock Edition for PC"** bundle on [Minecraft.net](https://www.minecraft.net/) or have an active **PC Game Pass / Game Pass Ultimate** subscription.

---

## 🛠 4. Troubleshooting Common Login Failures

### Cause A: No Java Edition License on This Microsoft Account

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #ef4444; font-weight: bold; font-size: 1.25rem;">
    🎮
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Mojang reports no Java license</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Your Microsoft account authenticated successfully, but Mojang's licensing database does not show an active Minecraft Java Edition license.</p>
  </div>
</div>

#### How to fix:
* **Verify on Minecraft.net:** Go to [Minecraft.net](https://www.minecraft.net/), sign in with your Microsoft account, and check your profile. If it says "Buy Now" instead of showing your Java profile name, this account does not own the game.
* **Check Microsoft Order History:** Open [account.microsoft.com/billing/orders](https://account.microsoft.com/billing/orders) to confirm whether your purchase was for the PC Java bundle or for a console/mobile edition.
* **Check Multiple Accounts:** Make sure you aren't logging in with a school, work, or secondary family email instead of the personal Microsoft account holding the game.
* **Check Game Pass Subscription:** If using Game Pass, verify your subscription is active and includes PC access (PC Game Pass or Xbox Game Pass Ultimate).

---

### Cause B: Missing or Uninitialized Xbox Live Profile

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #f59e0b; font-weight: bold; font-size: 1.25rem;">
    👤
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Microsoft account has no Xbox Gamertag</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">If you recently created a Microsoft account or never played on Xbox Live, your account may lack an active Xbox Gamertag profile.</p>
  </div>
</div>

#### How to fix:
1. Visit [Xbox.com](https://www.xbox.com/) in your web browser.
2. Click **Sign In** in the top-right corner.
3. Complete the prompt to create an Xbox profile and choose a **Gamertag**.
4. Wait 1–2 minutes for Microsoft's servers to synchronize, then try logging in again in XMCL.

---

### Cause C: Regional ISP Blocks & Network Restrictions

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(139, 92, 246, 0.05); border: 1px solid rgba(139, 92, 246, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(139, 92, 246, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #8b5cf6; font-weight: bold; font-size: 1.25rem;">
    🌐
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Connection to Mojang/Xbox servers blocked</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Regional ISP restrictions, firewall rules, or DNS issues may block requests to <code>api.minecraftservices.com</code> or <code>user.auth.xboxlive.com</code>.</p>
  </div>
</div>

#### How to fix:
* **Use a VPN:** Connect to a reliable VPN before logging in to route past ISP blocks.
* **Configure Proxy in XMCL:**
  1. Open **Settings** (gear icon on the left sidebar).
  2. Navigate to **Network Settings**.
  3. Enter your proxy details (HTTP, HTTPS, or SOCKS5).
* **Check Hosts File:** Ensure your system `hosts` file contains no redirect entries for `mojang.com`, `minecraft.net`, or `xboxlive.com`.

---

### Cause D: Xbox Family Privacy & Child Account Restrictions

If your account is set up as a child account in a Microsoft Family Safety group:
1. An adult organizer must visit [account.xbox.com/settings](https://account.xbox.com/settings).
2. Under **Xbox and Windows 10 Online Safety**, ensure that:
   - *"You can play with people outside of Xbox Live"* is set to **Allow**.
   - *"You can join multiplayer games"* is set to **Allow**.

---

## 🎮 Don't Have a Paid License?

If you do not currently own an official Minecraft Java Edition license, you can still play locally or on community servers using **Offline Mode** and third-party skin accounts.

👉 **[Read our Complete Guide: Playing Without a License (Offline Mode & Custom Skins)](./offline-mode)**
