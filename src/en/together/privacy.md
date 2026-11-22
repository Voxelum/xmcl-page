---
title: XMCL Together Privacy Policy
description: How XMCL Together handles account, billing, AI, and multiplayer service information in compliance with international data protection laws.
---

# XMCL Together Privacy Policy

**Effective date: November 22, 2026 · Version: P4-2026-11-22**

This policy explains how **CI010**, operating as an individual operator under the Voxelum and XMCL names ("XMCL Together", "we", "us"), processes information when you use an XMCL Together account, paid services, or related online features at [xmcl.app](https://xmcl.app). It does not govern independent services you choose to connect, such as Microsoft, Mojang, third-party authentication servers, Modrinth, or CurseForge.

---

## 1. Information We Process

### Together Website and Service Telemetry
Together pages and services use Microsoft Azure Application Insights configured in **cookieless mode** (`disableCookiesUsage: true`), hosted in **Azure East Asia (Hong Kong)**, to record anonymous page views, service actions, approximate network/device attributes, and diagnostic events. The website stores only one strictly necessary local cookie (`nf_lang`) for your language preference. Telemetry from the free open-source launcher is governed separately by the [XMCL Open-Source Project Privacy Notice](../privacy).

### Accounts and Authentication
When you create or use an XMCL Together account, we process account identifiers, authentication-provider identifiers, session and refresh-token metadata, granted scopes, timestamps, and security telemetry used to prevent replay or account abuse. We **never** receive or store your Microsoft or other third-party account passwords.

### Billing and Subscriptions
We process account balances, currency and rate information, orders, subscription state, allowance periods, usage totals, refunds, disputes, idempotency identifiers, and audit records. **Waffo Pancake** processes payment-card and checkout information directly. XMCL receives transaction references, status, amount, currency, and signed webhook events, and never receives or stores full card numbers or security codes (CVC/CVV).

### AI Features
If you invoke an AI feature, we process the prompt, conversation content, selected model, and launcher context you choose to provide (such as instance name, game and loader versions, selected page, or local instance path). Requests are transmitted to our configured AI providers, currently **Agnes** and, when needed, **DeepSeek**. We measure token counts and weighted allowance usage for billing and abuse prevention. We do not use your prompts or outputs to train an XMCL model.

> **Third-Party AI Disclaimer:** External AI providers (Agnes, DeepSeek) process request payloads under their own privacy policies and terms. We configure integrations to request "no-training" modes where supported, but we cannot guarantee the internal data handling practices of external API providers. Do not submit sensitive personal data, passwords, or confidential information in AI prompts.

### Multiplayer, Signaling, and TURN (P2P Connectivity)
Together and RTC features process account and session identifiers, room/peer-routing metadata, IP addresses, timestamps, TURN credential identifiers, and aggregate ingress/egress usage. **Cloudflare** provides edge, signaling, TURN, and traffic analytics infrastructure.

> **P2P IP Exposure Consent:** Peer-to-peer connectivity inherently reveals your public IP address to the other peer in the multiplayer session. By using P2P features, you explicitly acknowledge and consent to this technical data disclosure necessary to establish direct connectivity. XMCL signaling routes connection metadata only and does not record Minecraft voice, video, or gameplay content.

### Support and Community Communications
If you contact us, we process the contact details, account or transaction references, diagnostics, and message content you submit. Do not send passwords, access tokens, full payment-card data, or unrelated sensitive personal information.

---

## 2. Purposes and Legal Bases

We process information to:
- provide, authenticate, secure, and troubleshoot XMCL Together services;
- operate subscriptions, balances, allowances, payments, refunds, and customer support;
- route multiplayer connections and measure TURN bandwidth usage;
- generate requested AI responses and meter AI allowances;
- prevent fraud, replay attacks, abuse, and security incidents;
- comply with accounting, tax, payment-network, legal, and dispute obligations.

**Legal Bases (GDPR / UK GDPR / LGPD / International):**
- **Contract performance (Art. 6(1)(b) GDPR):** providing accounts, subscriptions, AI, and multiplayer services you request;
- **Legal obligation (Art. 6(1)(c) GDPR):** retaining financial, tax, and payment audit records;
- **Legitimate interests (Art. 6(1)(f) GDPR):** securing infrastructure, preventing fraud/abuse, and cookieless operational diagnostics;
- **Explicit consent (Art. 6(1)(a) GDPR):** optional AI prompts, P2P IP exposure, and cross-border transfers where consent is required by law.

---

## 3. Sub-processors & International Data Transfers

We share only what is reasonably necessary with the following infrastructure and service providers:

| Recipient | Purpose & Data Categories | Processing Regions | Privacy Policy |
| :--- | :--- | :--- | :--- |
| **Waffo Pancake** | Payment checkout, fraud review, refunds, webhook events (transaction & payment metadata) | Global / United States / Singapore | Provided at checkout |
| **Cloudflare** | Workers, CDN, DDoS protection, WebRTC signaling, TURN relay (IP, session & traffic metadata) | Global Edge / United States | [Cloudflare Privacy](https://www.cloudflare.com/privacypolicy/) |
| **Microsoft Azure** | Hosting, database storage, cookieless Application Insights (account, billing & diagnostic data) | Hong Kong (East Asia), United States, EU | [Microsoft Privacy](https://privacy.microsoft.com/privacystatement) |
| **Vercel & GitHub** | Website delivery, releases, issue/security support | United States / Global Edge | [Vercel](https://vercel.com/legal/privacy-policy) / [GitHub](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement) |
| **Agnes & DeepSeek** | AI response generation (prompts, conversation context, model parameters) | Global / China (PRC) / United States | Provider policies |

- **Transfer Safeguards:** Cross-border transfers outside the EEA, UK, or Switzerland rely on EU Standard Contractual Clauses (SCCs), the UK IDTA/Addendum, TLS encryption in transit, and strict data minimization.
- **Consequences of Refusal:** Providing account, payment, and cross-border routing data is necessary to operate XMCL Together. If you decline such processing or cross-border transfer, you may still use the free offline/open-source XMCL launcher, but hosted XMCL Together features will not be available.
- **No Sale of Data:** We do **not** sell personal information or share it for cross-context behavioral advertising.

---

## 4. Retention Limits

We enforce strict retention periods:
- **Operational telemetry, AI usage metrics, and TURN measurements:** retained for a **maximum of 90 days**, then permanently deleted or irreversibly anonymized.
- **Account and session data:** retained while the account is active, plus **30 days** after account deletion for recovery and dispute resolution.
- **Financial ledger entries, payment events, refunds, and audit records:** retained for **5 to 7 years** to comply with statutory accounting, tax, and payment-network obligations, even after account closure.
- Encrypted backups are purged through normal rotation schedules.

---

## 5. Your Choices and Legal Rights

### General, GDPR, UK GDPR & International Rights
You may:
- opt out of optional online features or disconnect third-party services;
- manage the `nf_lang` cookie via your browser;
- cancel Together Home renewal anytime from your account interface (effective at the end of the current paid period);
- request access, rectification, erasure ("right to be forgotten"), restriction, data portability, or object to processing;
- withdraw consent at any time without affecting prior lawful processing;
- lodge a complaint with your national Data Protection Authority (e.g., EU DPA, UK ICO at [ico.org.uk](https://ico.org.uk), or local regulator).

### California & US State Privacy Rights (CCPA / CPRA)
XMCL does **not** sell personal information or share it for cross-context behavioral advertising. Residents of California and US states with applicable privacy statutes (VA, CO, CT, UT, TX, OR, etc.) have the right to know, access, delete, correct inaccurate data, and exercise these rights without discrimination.

---

## 6. Security

We implement scoped sessions, least-privilege access controls, TLS encryption in transit, signed payment webhooks, replay protection, secret isolation, and continuous monitoring. No online system is 100% immune to risk; you are responsible for safeguarding your device, sessions, and third-party credentials.

---

## 7. Children and Age Requirements

- **Paid Services & Accounts:** XMCL Together accounts and paid features require you to be at least **18 years of age** (or the age of legal majority in your jurisdiction), or to have verifiable consent from a parent or legal guardian.
- **Digital Consent & COPPA (US):** We do not knowingly collect personal information from children under **13** (US/UK) or below the applicable local digital consent age (14–16 in EU/Ukraine/Korea/China, 18 under India DPDP Act) without verifiable parental consent. Parents or guardians may contact [cijhn@hotmail.com](mailto:cijhn@hotmail.com) for prompt deletion.

---

## 8. Changes, Governing Language & Disclaimer

- **Changes:** We will publish updates here with a new effective date and version, and provide advance notice for material changes where required by law.
- **Governing Language:** In the event of any discrepancy between a translated version and the English version, the English version prevails to the extent permitted by mandatory local law.
- **Minecraft Disclaimer:** XMCL is an independent project and is not affiliated with, sponsored by, or endorsed by Microsoft Corporation or Mojang Studios.

---

## 9. Contact

**Operator / Privacy Contact (CI010):**
- General, billing, refund, legal, and privacy requests: [cijhn@hotmail.com](mailto:cijhn@hotmail.com)
- Security reports: [GitHub private vulnerability reporting](https://github.com/voxelum/x-minecraft-launcher/security)
- Community support: [XMCL Discord](https://discord.gg/W5XVwYY7GQ)

Include only the minimum account or transaction reference needed to locate your record. We may ask you to verify account ownership before fulfilling a request.
