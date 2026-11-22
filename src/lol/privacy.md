---
title: XMCL Open-Source Project Privacy Notice
description: Privacy notice for the XMCL website and open-source launcher, compliant with EU GDPR, UK GDPR, US COPPA/CCPA, and international data protection standards.
---

> **Note:** To ensure full legal clarity and enforceability, XMCL's Privacy Policy and Terms of Service are provided in standard English rather than LOLCAT.

# XMCL Open-Source Project Privacy Notice

**Effective date: November 22, 2026 · Version: OP3-2026-11-22**

This notice covers the public XMCL website ([xmcl.app](https://xmcl.app)) and the free, open-source XMCL launcher. It does not cover paid features, accounts, billing, AI, or multiplayer signaling/TURN services provided by XMCL Together, which are governed separately by the [XMCL Together Privacy Policy](./together/privacy).

---

## 1. Data Controller and Contact

XMCL is an independent open-source project operated by **CI010** and the Voxelum contributor community.
- **Privacy & Legal Inquiries:** [cijhn@hotmail.com](mailto:cijhn@hotmail.com)
- **Source Code Repository:** [github.com/voxelum/x-minecraft-launcher](https://github.com/voxelum/x-minecraft-launcher)
- **Security Vulnerability Reporting:** [GitHub Security Advisories](https://github.com/voxelum/x-minecraft-launcher/security)
- **Community Support:** [XMCL Discord](https://discord.gg/W5XVwYY7GQ)

---

## 2. Information Processed & Minimization

XMCL follows strict data minimization principles:

### Public Website (xmcl.app)
- **Cookieless Aggregated Analytics:** We use Microsoft Azure Application Insights configured in **cookieless mode** (`disableCookiesUsage: true`) with ingestion hosted in **Microsoft Azure East Asia (Hong Kong)** to record anonymous page views, download selections, general network/device attributes, and browser user-agents. No analytics or cross-site tracking cookies are placed on your device.
- **Strictly Necessary Cookie:** We store only one local functional cookie (`nf_lang`) strictly necessary to remember your interface language preference. We do not use third-party marketing, advertising, or behavioral tracking cookies.

### Open-Source Launcher
- **Opt-in Telemetry & Diagnostics:** Diagnostic telemetry is **disabled by default**. Only if you explicitly enable telemetry in the launcher settings (Opt-in), the launcher may process:
  - A randomly generated, pseudonymous installation/device identifier;
  - Application lifecycle events (game launch, normal/error exit codes, application version);
  - Authentication provider type (e.g., Microsoft or offline authentication identifier);
  - Basic runtime environment specs (operating system, Java runtime version, CPU architecture);
  - Error crash logs and stack traces.
- **Sanitization & Credentials:** Crash diagnostics are stripped of sensitive file paths, usernames, and system tokens where feasible. We **never** process or store your Microsoft/Mojang account passwords, credentials, or session tokens.

---

## 3. Data Retention

We avoid indefinite retention schedules:
- All telemetry logs, diagnostic error records, and performance metrics are retained for a **maximum of 90 days**, after which they are permanently deleted or irreversibly anonymized.
- Public issue tracker reports on GitHub remain available under GitHub's platform policies and repository governance until resolved or deleted.

---

## 4. Sub-processors & International Data Transfers

XMCL uses global infrastructure providers to deliver downloads, web pages, and optional diagnostics:

| Provider | Role & Data Processed | Processing Regions | Privacy Policy |
| :--- | :--- | :--- | :--- |
| **Microsoft Azure (Application Insights)** | Cookieless web analytics, optional launcher diagnostics | Hong Kong (East Asia), United States, EU | [Microsoft Privacy](https://privacy.microsoft.com/privacystatement) |
| **Cloudflare** | CDN, edge routing, DDoS protection | Global Edge Network / United States | [Cloudflare Privacy](https://www.cloudflare.com/privacypolicy/) |
| **GitHub** | Source hosting, releases, issue tracker | United States | [GitHub Privacy](https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement) |
| **Vercel** | Website hosting and delivery | United States / Global Edge | [Vercel Privacy](https://vercel.com/legal/privacy-policy) |

- **Transfer Safeguards:** When technical data is transferred outside the EEA, UK, or Switzerland, we rely on European Commission-approved Standard Contractual Clauses (SCCs), the UK International Data Transfer Agreement (IDTA) / Addendum, and equivalent statutory safeguards.
- **Right to Refuse:** You may refuse cross-border transfer of launcher diagnostics simply by keeping telemetry disabled (its default state).
- **No Sale of Data:** We never sell personal information or share it for cross-context behavioral advertising.

---

## 5. Region-Specific Provisions and Legal Rights

### European Union & EEA (GDPR)
- **Legal Bases:** Consent (Art. 6(1)(a) GDPR) for optional diagnostic telemetry; Legitimate Interests (Art. 6(1)(f) GDPR) for infrastructure security, availability, and cookieless aggregated analytics.
- **Age of Consent:** 16 years of age (or the applicable Member State digital consent age, 13–15). Minors below this threshold require parental or guardian consent.
- **Your Rights:** Under Articles 15–22 GDPR, you have the right to access, rectify, erase ("right to be forgotten"), restrict processing, data portability, object, withdraw consent at any time, and lodge a complaint with your national Data Protection Supervisory Authority.

### United Kingdom (UK GDPR & DPA 2018)
- Regulated under UK GDPR and the Data Protection Act 2018. Age of digital consent: **13 years**. Supervisory authority: UK Information Commissioner’s Office (ICO) at [ico.org.uk](https://ico.org.uk).

### United States (COPPA, CCPA / CPRA & State Laws)
- **COPPA:** XMCL is not directed to children under 13. We do not knowingly collect personal information from children under 13. Parents or guardians may contact [cijhn@hotmail.com](mailto:cijhn@hotmail.com) for prompt deletion.
- **CCPA / CPRA & US State Laws:** XMCL does **not** sell or share personal information for cross-context behavioral advertising. Residents of California, Virginia, Colorado, Connecticut, Utah, Texas, Oregon, and other states with applicable privacy laws have the right to know, access, correct, delete, and exercise these rights free from discrimination.

### Other Jurisdictions
- We respect equivalent data-subject rights under applicable local laws worldwide (including Brazil LGPD, Japan APPI, South Korea PIPA, China PIPL, Taiwan PDPA, Turkey KVKK, India DPDP Act, Indonesia UU PDP, Vietnam Decree 13, Ukraine, Saudi Arabia/UAE PDPL).

---

## 6. Exercising Your Rights

To exercise your rights of access, rectification, erasure, or consent withdrawal, contact **CI010** at **[cijhn@hotmail.com](mailto:cijhn@hotmail.com)**.

---

## 7. Governing Language & Disclaimer

- **Governing Language:** Translations of this notice are provided for convenience. In the event of any discrepancy between a translated version and the English version, the English version prevails to the extent permitted by mandatory local law.
- **Minecraft & Mojang Disclaimer:** XMCL is an independent open-source software project and is not affiliated with, authorized by, sponsored by, or endorsed by Microsoft Corporation or Mojang Studios.
