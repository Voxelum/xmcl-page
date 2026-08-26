# XMCL Together: Cloud Multiplayer, Server Hosting & Troubleshooting Guide

**XMCL Together** is an online cloud and networking platform built specifically for XMCL. It solves the biggest headaches of modded Minecraft: **joining friends through strict firewalls and CGNAT, hosting reliable cloud servers without paying for idle time, and getting instant AI diagnostics for modpack crashes.**

---

## 🌟 1. What is XMCL Together?

![XMCL Together Overview](/guidephoto/xmcl%20together.png)

Playing modded Minecraft with friends is often frustrating due to network firewalls (Carrier-Grade NAT / CGNAT), complex port forwarding, and traditional server hosts that charge expensive 24/7 monthly fees even when you only play on weekends.

XMCL Together solves this through three core pillars:

### 1. Global High-Speed Relay Network (300+ Edge Nodes)
When playing via P2P LAN, if your router or ISP blocks direct peer connections, Together automatically routes your game traffic through **Cloudflare high-speed relay edges**, delivering low latency and zero complex router configuration.

### 2. Pay-As-You-Play Cloud Servers
Instead of paying \$20–\$40 every month for an idle server, Together cloud servers use a fair pay-as-you-play model:
* **Low Base Fee**: Preserves your world save, server IP, and mod configuration permanently.
* **Compute Charged Only When Online**: Turn on the server when you and your friends play (\$0.06 – \$0.12 / running hour).
* **Instant Pause**: Pause the server when everyone logs off. Charges stop immediately.

### 3. Built-In AI Diagnostic Copilot
Every Together plan includes access to our AI Copilot to analyze server crash logs, resolve missing mod dependencies, and suggest optimal JVM memory flags.

---

## 📊 2. Service Plans Overview

| Plan | Price | Target Audience | Key Specs & Inclusions |
| :--- | :--- | :--- | :--- |
| 🏠 **Together Home** | **\$2.99** / mo | Hosting on your own PC | 20 GB Global Relay traffic + AI Crash Assistant |
| 🏕️ **Together Camp** | **\$4** / mo + **\$0.06** / hr | 2–4 Friends (Vanilla+ / Light mods) | 4 GiB RAM, 2/4 vCPU, 32 GiB NVMe Storage |
| 🏡 **Together Lodge** *(Recommended)* | **\$6** / mo + **\$0.09** / hr | 4–6 Friends (Heavy Modpacks) | 6 GiB RAM, 3/6 vCPU, 48 GiB NVMe Storage |
| 🏰 **Together Village** | **\$8** / mo + **\$0.12** / hr | 6–10 Friends (Large Tech/Magic packs) | 8 GiB RAM, 4/8 vCPU, 64 GiB NVMe Storage |

👉 **[Explore Plans on the Official Together Portal](/en/together/)**

---

## 💳 3. Troubleshooting Payment Failures & Region Errors

When attempting to purchase a plan or top up your account, you might encounter payment checkout errors:

![Payment Error Troubleshooting](/guidephoto/errortoghether1.png)

### Why Does Payment Fail?
1. **Regional Payment Processor Restrictions**: Our global payment gateway (Creem / Merchant processor) enforces strict fraud prevention and regional compliance checks. If your IP address originates from a restricted or unsupported billing region, the checkout portal will decline the transaction.
2. **Bank / Card Cross-Border Blocks**: Your bank may block international digital transactions or automatic currency conversions.
3. **ISP / Firewall Blocking Payment Scripts**: Regional internet service providers may block payment verification scripts or 3D Secure frames.

---

### 🛠️ How to Fix Payment Errors:

#### Step 1: Use a Stable VPN Connection
If the payment gateway refuses to load or declines your transaction due to regional restrictions:
1. Enable a reliable **VPN** and connect to a supported region (such as **Germany, United Kingdom, United States, or another EU country**).
2. Refresh the [XMCL Together Checkout Page](/en/together/) with the VPN active.
3. Complete the checkout process.

#### Step 2: Enable International Online Payments & 3D Secure
* Open your mobile banking app and ensure that **"International Online Transactions"** and **"Online Purchasing Limits"** are enabled.
* Confirm that your card supports 3D Secure (SMS or in-app approval).

#### Step 3: Clear Browser Cache or Try Incognito
Cached session cookies can occasionally cause checkout token mismatches. Open the Together portal in an Incognito / Private window with your VPN enabled.

---

## 🛡️ 4. Security, Privacy & Refund Policy

* **PCI-DSS Certified Security**: XMCL never stores your credit card numbers, CVV, or banking credentials. All payments are processed through certified international gateways.
* **7-Day Balance Refund**: In accordance with our [Terms of Service](/en/together/terms), unspent wallet balance can be refunded within 7 days of deposit upon request.
* **Full Privacy Compliance**: Together operates in strict compliance with international privacy frameworks ([GDPR](/en/together/privacy), Ukraine Data Protection Law, COPPA, PIPL). Diagnostic logs are retained for a maximum of 90 days.

---

## 💬 5. Need Assistance?

If you continue to experience payment errors or need billing support:
* 💬 **Join our Discord**: [discord.gg/W5XVwYY7GQ](https://discord.gg/W5XVwYY7GQ)
* 📧 **Contact Official Support Email**: `cijhn@hotmail.com`
