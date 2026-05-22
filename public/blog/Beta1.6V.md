# Beta 1.6 V: The "Repair & Refine" Update 🛠️

> [!IMPORTANT]
> **This is a massive overhaul.** We have migrated the core framework, optimized every corner of the UI, and finalized the design for our content pages.

---

## 🔌 Fix & Repairs + Add New

We've been busy! Here is the complete breakdown of changes in this version, and **why** we made them.

### 🎨 Design & UI Overhaul
-   **✨ Main Page Redesign & Optimization**
    -   *Why?* The old homepage was getting slow and cluttered. We redesigned it to be visually stunning while drastically reducing load times (LCP). First impressions matter!
-   **📥 Download Page Separation**
    -   *Why?* Initially, everything was on one tab, which was confusing. Moving "Download" to its own page clarifies the user journey: you are either here to learn (Home) or to get the launcher (Download).
-   **📘 Guide & Blog Finalization**
    -   *Why?* We spent too much time tweaking colors and layouts. This "Final Version" design is clean, readable, and lets us stop redesigning so we can focus on writing actual content.
-   **🧭 Sidebar & Navigation**
    -   *Why?* As the site grew, navigation became tricky. The new sidebar ensures you never get lost, no matter how deep you are in the docs.

### ⚡ Core & Performance
-   **🚀 Astro Migration**
    -   *Why?* We moved to **Astro** for its "Island Architecture." This means we send way less JavaScript to your browser, making the site load almost instantly on slower devices.
-   **🔄 Theme System Refactor (Zero Lag)**
    -   *Why?* Previously, switching themes caused a ~600ms lag spike because we were manually updating styles in JavaScript. We rewrote this to use CSS variables, making theme switching **instant** (0ms delay).
-   **📦 CI/CD Pipeline**
    -   *Why?* To ensure stability. We added automated checks that run every time we update code, catching bugs before they reach you.
-   **🌐 i18n Optimization**
    -   *Why?* Language loading was clunky. The new system loads translations faster and smoother, respecting our global community.

### 🐛 Fixes & Improvements
-   **🦶 Footer Updates**: Refactored the footer and fixed RSS feeds so you can actually subscribe to our updates.
-   **📝 Markdown Renderer**: Fixed a bug where **inline code** (like `this`) looked like full blocks. Now your guides are much more readable.
-   **🧪 Testing Page**: Enhanced the UI to make it clear which builds are stable and which are experimental.
-   **🗑️ Cleanup**: Removed the legacy privacy page and deleted outdated notes to keep the codebase healthy.

---

## ⚠ Future Roadmap & Decisions

> [!WARNING]
> **Design Freeze on Content Pages**
> There will be **no more updates or changes** to the visual design of the **Guide** and **Blog** pages.
>
> **Why?** We realized we were spending 90% of our time on *how* the blog looks and only 10% on *what* it says. By freezing the design, we can shift 100% of our focus to creating high-quality tutorials and news for you.

---

## 📪 New Content

We've added a new guide to help you navigate Minecraft username limitations.

### 📝 [Username Guide](/guide/name-bad)
*A new detailed post explains why certain usernames don't work on servers and how to choose a compatible name.*
- *Why?* Many players were confused about why they couldn't join servers. This guide visualizes exactly which characters are allowed and which are not.

---

> [!TIP]
> This update represents a shift from "building the site" to "polishing the experience". Enjoy the speed!
