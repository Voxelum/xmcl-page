# XMCL Website 1.4 Beta Update: What’s New & Fixed

We’re thrilled to announce the **1.4 Beta** release of the **XMCL website**! This update brings a host of improvements, new features, and critical fixes to enhance your experience. Whether you're a long-time user or just discovering XMCL, there’s something here for everyone.

---

## ✨ Highlights: New Features

- **New AI Assistant Page – XMAIHelp**  
  We’ve added a dedicated page for **XMAIHelp**, our AI-powered assistant, complete with seamless navigation integration.

![aix](blogphoto/aix.png)

- **Information Page & Expanded Translations**  
  A brand-new **Information page** is now live, accompanied by translations in **Italian, Korean, Belarusian, Kazakh**, and more. We’ve also implemented **auto language detection** for a smoother onboarding experience.

- **Enhanced Download Experience**  
  Download cards now include a **package info modal**, giving you quick access to version details and metadata directly from the download section.

- **Improved Search & Navigation**  
  The **Language Selector** now supports search, and we’ve introduced a **StaggeredMenu** for more intuitive navigation across the site.

![staggeredmenu](blogphoto/strangemenu.png)

---

## 🛠️ Under the Hood: Refactors & Fixes

- **Modernized UI Components**  
  The outdated `ModernDownloadSection` has been removed. The `FeatureShowcase` component is now optimized with `React.memo` and features refined animations and a cleaner data structure.

- **i18n System Overhaul**  
  Our internationalization system has been completely refactored for better maintainability and scalability.

![i18n](blogphoto/i18n.png) 

- **Blog & Guide Search Fixed**  
  A long-standing issue with search functionality in the **Blog & Guide** sections has been resolved.

![searchblog](blogphoto/blogsearch.png)
![searchguide](blogphoto/guidesearch.png)

- **Changelog UI Refresh**  
  The changelog now boasts an **animated background** and improved link styling for better readability.

![changelog](blogphoto/newchangelogs.png)

- **Dependency Management**  
  Several packages in `package.json` were rolled back or downgraded to ensure greater stability.

---

## 🚫 What We’re *Not* Doing (For Now)

To keep the project focused and secure, we’ve decided **against** the following:

- **No migration to Astro.js** – We’re sticking with our current stack.
- **No Discord webhooks** – Due to permission and security concerns.
- **No site-wide search engine** – It’s deemed unnecessary for our current scope.

---

## 📬 New Content Added

We’ve also published several new posts and documentation pages, including:

- `i18n-en`, `i18n-zh`, `i18n-uk`
- `Demo-Minecraft`
- `Date Storage` (by CIO10)
- Technical guides on `User`, `Data-Storage`, `Instance`, `Java`, and `Settings`

---

This beta marks a significant step forward in both design and functionality. We invite you to explore the changes, test the new features, and share your feedback!

**Preview Deployments**: Thanks to Vercel, you can track all recent deployments in real time as we continue to refine the experience.

For the full technical details, check out the [pull request #15](https://github.com/BANSAFAn/xmcl-website-NOT-OFFICIAL-/pull/15).

Happy launching! 🚀