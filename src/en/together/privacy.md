---
title: XMCL Together Privacy Policy
description: How XMCL Together handles account, billing, AI, and multiplayer service information.
---

# XMCL Together Privacy Policy

**Effective date: August 21, 2026 · Version: P3-2026-08-21**

This policy explains how **CI010**, operating as an individual operator under the Voxelum and XMCL names ("XMCL Together", "we", "us"), processes information when you use an XMCL Together account, paid services, or related online features at [xmcl.app](https://xmcl.app). It does not govern independent services you choose to connect, such as Microsoft, Mojang, third-party authentication servers, Modrinth, or CurseForge.

---

## 1. Information we process

### Together website and service telemetry
Together pages and services may use Microsoft Azure Application Insights to record page views, service actions, approximate network and device information, browser information, and diagnostic events. The website also stores a language-preference cookie. Telemetry from the free, open-source launcher is covered separately by the [XMCL Open-Source Project Privacy Notice](../privacy).

### Accounts and authentication
When you create or use an XMCL Together account, we process account identifiers, authentication-provider identifiers, session and refresh-token metadata, granted scopes, timestamps, and security information used to prevent replay or account abuse. We do not receive your Microsoft or other third-party account password.

### Billing and subscriptions
We process account balances, currency and rate information, orders, subscription state, allowance periods, usage totals, refunds, disputes, idempotency identifiers, and audit records. Waffo Pancake processes payment-card and checkout information. XMCL receives transaction references, status, amount, currency, and signed webhook events, but does not receive or store full card numbers or card security codes (CVC/CVV).

### AI features
If you invoke an AI feature, we process the prompt, conversation content, selected model, and launcher context you choose to provide (such as instance name, game and loader versions, selected page, or local instance path). Requests are sent to our configured AI providers, currently Agnes and, when needed, DeepSeek. We measure token counts and weighted allowance usage for billing and abuse prevention. We do not use your prompts or outputs to train an XMCL model.

> **Third-Party AI Disclaimer:** Third-party AI providers (Agnes, DeepSeek) process this data according to their own privacy policies. We configure our integrations to request "no-training" modes where the provider allows it, but we cannot guarantee the internal data handling practices of external API providers.

### Multiplayer, signaling, and TURN (P2P Connectivity)
Together and RTC features process account and session identifiers, room or peer-routing metadata, IP addresses, timestamps, TURN credential identifiers, and aggregate ingress/egress usage. Cloudflare provides edge, signaling, TURN, and traffic analytics services.

> **P2P IP Exposure Consent:** Peer-to-peer connectivity can reveal your public IP address to the other peer in the multiplayer session. By using P2P features, you explicitly acknowledge and consent to this specific technical data exposure necessary for direct connection. XMCL signaling services route connection metadata only; they are not intended to record Minecraft voice, video, or gameplay content.

### Support and community communications
If you contact us, we process the information you submit, such as your contact details, account or transaction reference, diagnostic information, and the content of the request. Do not send passwords, access tokens, full payment-card data, or unrelated personal information.

---

## 2. Why we use information and legal bases

We use information to:
- provide, authenticate, secure, and troubleshoot XMCL services;
- operate subscriptions, balances, allowances, payments, refunds, and support;
- route multiplayer connections and measure TURN usage;
- generate requested AI responses and account for AI usage;
- prevent fraud, replay, abuse, and security incidents;
- comply with payment, accounting, tax, legal, and dispute obligations.

**Legal Bases (GDPR / UK GDPR):** Depending on your location, our legal bases include performing our contract with you (providing subscribed services), our legitimate interests in operating and securing the services, compliance with statutory legal and tax obligations, and explicit consent where required (e.g., for optional AI features and telemetry).

---

## 3. When information is shared and international transfers

We share only what is reasonably necessary with:
- **Waffo Pancake**, for checkout, payment processing, fraud review, refunds, and payment events;
- **Cloudflare**, for Workers, edge delivery, DDoS protection, signaling, TURN, and traffic analytics;
- **Microsoft Azure**, for hosting, MongoDB-compatible data storage, diagnostics, and Application Insights;
- **Vercel and GitHub**, for website delivery, source hosting, releases, and issue-based support;
- **Agnes and DeepSeek**, when you request AI functionality;
- authentication and content services you choose to use (Microsoft, Mojang, Modrinth, CurseForge);
- maintainers and service operators who need access to investigate support, reliability, billing, or security issues;
- authorities or other parties when required by law or necessary to protect users and the services.

**International Transfers:** When data is processed outside the European Economic Area (EEA) and the United Kingdom, we ensure adequate data protection by relying on European Commission-approved Standard Contractual Clauses (SCCs) and the UK International Data Transfer Agreement (IDTA) / Addendum. We do not sell personal information or share it for cross-context behavioral advertising.

---

## 4. Retention limits

We adhere to strict retention limits:
- **Operational telemetry, AI usage metrics, and TURN measurements** are retained for a **maximum of 90 days**, then permanently deleted or irreversibly anonymized.
- **Account and session data** is retained while the account is active, and for **30 days** after account deletion to allow for recovery and dispute resolution.
- **Financial ledger entries, payment events, refunds, and audit records** are retained for **5 to 7 years** to comply with accounting, tax, payment-network, and legal obligations, even after account closure.
- Backups are removed through normal rotation schedules.

---

## 5. Your choices and legal rights

### General & GDPR / UK GDPR Rights
You can:
- avoid optional online features or disconnect third-party services;
- change website language cookies through your browser;
- cancel Together Home renewal from the account interface, effective at the end of the current period;
- request access, rectification, export (portability), or deletion of eligible account information;
- object to or restrict certain processing, or withdraw consent at any time;
- lodge a complaint with your local Data Protection Authority or the UK Information Commissioner's Office (ICO).

### California and US State Privacy Rights (CCPA / CPRA)
- **Do Not Sell or Share My Personal Information:** XMCL does **not** sell personal information and does **not** share personal information for cross-context behavioral advertising.
- Consumers have the right to request disclosure of categories and specific pieces of personal information collected, request deletion, request correction of inaccurate data, and exercise these rights free from discrimination.

---

## 6. Security

We use access controls, scoped sessions, encrypted transport (TLS), signed payment webhooks, replay protection, provider secrets, and service monitoring. No system is completely secure. You are responsible for protecting your device, account sessions, and third-party credentials.

---

## 7. Children and COPPA Notice

XMCL Together paid services and AI features are not directed to children under the age of **14** (or the applicable age of digital consent in your jurisdiction, e.g., 16 in parts of the EU, 13 in the US/UK). Users under this age may only use these services with verifiable consent from a parent or legal guardian.

**COPPA Notice (US):** We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child under 13 has provided us with personal information, please contact us immediately at [cijhn@hotmail.com](mailto:cijhn@hotmail.com) for prompt deletion.

---

## 8. Third-party links and Minecraft

Third-party integrations and links are governed by their own privacy policies. XMCL is an independent open-source project and is not affiliated with or endorsed by Microsoft, Mojang Studios, or the providers of third-party Minecraft content.

---

## 9. Changes

We may update this policy as the services change. We will publish the new effective date and version here. When required, we will provide additional notice before a material change takes effect.

---

## 10. Contact

CI010 can be contacted through:
- [cijhn@hotmail.com](mailto:cijhn@hotmail.com) for general, billing, refund, legal, and privacy requests;
- [GitHub private vulnerability reporting](https://github.com/voxelum/x-minecraft-launcher/security) for security reports;
- [XMCL Discord](https://discord.gg/W5XVwYY7GQ) for community support.

For account, billing, refund, or privacy requests, include only the minimum account or transaction reference needed to locate the record. We may ask you to verify control of the account through a private channel.
