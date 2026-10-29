---
date: 2026-10-29
title: "Major XMCL Website Update: New Documentation Hub, 22 Locales & UI Redesign"
description: "A comprehensive look at the recent XMCL website overhaul: technical cyberpunk documentation hub, 22 locales with full features catalog localization, vector flags, and performance tuning."
category: Announcement
author: BANSAFAn
cover: /blog/new-language-selector.png
---

<PostDetail>

We are thrilled to unveil one of the most substantial updates to the official **XMCL** website! Over the last two commits, the website has received a major visual overhaul of its core components, expanded language support to 22 locales, an all-new technical cyberpunk Documentation Hub, and significant performance and stability refinements.

Below is an in-depth breakdown of everything new, improved, and re-engineered.

---

## 1. All-New Interactive Documentation Hub

The documentation portal has been completely redesigned with a technical, terminal-inspired cyberpunk dark aesthetic:

![New XMCL Documentation Hub](/blog/doc-hub-redesign.png)

### Key Improvements:
* **Cyberpunk Technical Specification Aesthetic**: High-contrast dark backgrounds, glowing grid accents, and monospace tags provide an authentic launcher command-center feel.
* **Terminal Query Bar `query-docs`**: An interactive command-line style search interface with global `Ctrl + K` quick-jump support.
* **Interactive Quick Flags**: Direct filters such as `--install`, `--modloaders`, `--together`, `--ai-models`, `--p2p-lan`, `--custom-skins`, and `--diagnostics` allow instant navigation to targeted guides.
* **Clean Modular Architecture**:
  * `01 / Getting Started` — Installation, updates, offline mode, Microsoft authentication, and drive migration.
  * `02 / Game Management & Mods` — Instance isolation, mod loaders, appearance & CSS theming, Big Picture controller support, and AI assistant setup.
  * `03 / Multiplayer & Diagnostics` — XMCL Together, P2P LAN multiplayer without public IPs, crash forensics, and game logs.
* **Comprehensive AI Integration Guides**: Step-by-step documentation for configuring the built-in Agnes AI assistant, cloud LLM providers (Google Gemini, OpenAI GPT), and local models via Ollama and LM Studio.

---

## 2. Global Language Expansion: 22 Locales & Complete Features Localization

XMCL connects Minecraft enthusiasts worldwide. We have broadened our international coverage by adding **6 new requested languages**:
* 🇹🇷 **Turkish (`tr`)** — Complete interface, guides, and feature catalog translations.
* 🇻🇳 **Vietnamese (`vi`)** — Full Vietnamese localization.
* 🇮🇳 **Hindi (`hi`)** — Dedicated support for the Indian community.
* 🇧🇩 **Bengali (`bn`)** — Localized documentation and instance guides.
* 🇮🇩 **Javanese (`jv`)** — Authentic regional localization for Indonesia.
* 🐱 **LOLCAT (`lol`)** — The community-favorite feline dialect (`Mod Boss`, `World Map & Chunk Slicer`, `Built-in AI Robo-Cat`!).

![Complete Features Catalog Localization](/blog/i18n-blog-banner.png)

### Complete Features Catalog Localization:
All **22 workflow cards**, groups, status pills, and interface buttons have been meticulously translated for each newly introduced language.

---

## 3. Redesigned Language Selector & Top Navigation

Replacing the standard dropdown menu, the new language selector is now a floating, interactive modal:

![New Language Selector with Vector SVG Flags](/blog/new-language-selector.png)

### Highlights:
* **Instant Language Search**: A search field filters 22 languages by native name, English name, or region code in real time.
* **Vector SVG Flags**: Crisp vector graphics replace emojis and text tags, ensuring high-DPI rendering across all displays.
* **Route & Anchor Preservation**: Switching languages maintains your active page and documentation section without redirecting to the root homepage.
* **Keyboard Accessibility**: Full support for quick dismissal via `Escape` and fluid focus management.
* **Mathematically Balanced Dividers**: Top navbar dividers have been aligned with optical symmetry (`22px` height) and subtle cyberpunk ambient glows in dark mode.

---

## 4. Blog Architecture & Intelligent Language Routing

![Ukrainian Blog Bilingual Side Box](/blog/uk-bilingual-widget.png)

* **Universal Global Feed**: The blog tab is now active across all 22 languages on the site.
* **Intelligent Post Fallback**: Visitors on Ukrainian and Russian versions are prioritized with Ukrainian translations, while international visitors see English dispatches with clean fallbacks.
* **Dedicated Bilingual Side Box**: The Ukrainian blog features a side indicator informing readers about bilingual (UA + EN) publications.
* **Localized Native-Tongue Banners**: International readers on German, French, Spanish, Chinese, Turkish, etc., receive helpful dispatches notice banners written in their own language.
* **Clean English Experience**: For English readers, extraneous notices are automatically hidden for an uncluttered reading environment.

---

## 5. Performance Tuning & Technical Debt Cleanup

* **Accelerated Largest Contentful Paint (LCP)**: Removed the initial `opacity: 0` CSS animation on the hero visual and applied `fetchpriority="high"` to primary graphics.
* **Zero Console Errors**: Disabled Application Insights telemetry pings on `localhost` dev environments, eliminating 400 errors.
* **Resolved `[intlify]` Scope Warnings**: Updated all `useI18n` invocations to use global scope explicitly.

---

Thank you to everyone in the community for supporting XMCL! If you'd like to contribute translations or propose new features, visit us on [GitHub](https://github.com/Voxelum/x-minecraft-launcher).

</PostDetail>
