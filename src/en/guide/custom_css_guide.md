# Launcher Custom CSS Theme Guide

This guide provides a comprehensive manual on how to design, write, and customize the interface of the launcher using custom CSS stylesheets. It details the main layout elements, target selectors, and advanced styling techniques (such as glassmorphism, specular highlights, and native icon replacement) that you can use to build custom themes.

---

## 1. Core Architecture & Theme Injection

The launcher's user interface is built on **Vue 3** and **Vuetify 3**. Styles are injected globally via the custom CSS engine. 

To ensure your custom stylesheet overrides the default Vuetify styles correctly, always write clean CSS selectors and use `!important` when competing with Vuetify's inline style rules or high-specificity class declarations.

### Typography & Smoothing
Always set the default font stack and optimize text rendering at the root:
```css
html, body, #app, .v-application {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  text-rendering: optimizeLegibility !important;
}
```

---

## 2. Vuetify 3 Color Token Overrides

Vuetify defines core colors as raw RGB triplets (e.g. `255, 255, 255`) on the root application wrappers to calculate opacities. To change color variables globally without breaking components, redefine them inside these selectors:

```css
.v-application,
.v-theme--dark,
.v-theme--light {
  --v-theme-background: 18, 18, 28;      /* Root application background */
  --v-theme-surface: 25, 25, 35;          /* Card and dialogue surfaces */
  --v-theme-on-surface: 255, 255, 255;    /* Default text color */
  --v-theme-primary: 0, 122, 255;         /* Accent color (Apple Blue, etc.) */
  --v-theme-on-primary: 255, 255, 255;    /* Accent buttons text color */
  --v-theme-error: 255, 59, 48;           /* Error banners & badges */
}
```

If you need to make default pages transparent so your desktop wallpaper shows through:
```css
.v-main,
.v-main__wrap,
.v-container,
.v-layout,
.home-page,
.setting-page,
.multiplayer,
.absolute.z-0.h-full.w-full {
  background: transparent !important;
  background-color: transparent !important;
}
```

---

## 3. Key Components & CSS Selectors

### 🖥️ Titlebar / System Bar
The window header uses `.v-system-bar` which contains window controls and badge triggers.
- **Title Bar**: `.v-system-bar`
- **Control Buttons (Min/Max/Close)**: `.system-btn` or `.v-system-bar .system-btn`
- **Close Button Specific Class**: `.system-btn--close`
- **System Badges (Search, Tasks, Help)**: `.system-bar-badge`
- **Hotkey text label inside badge**: `.palette-hotkey`

*Example: Reordering window controls to the left and styling as macOS traffic lights using Flexbox:*
```css
.v-system-bar {
  flex-direction: row-reverse !important; /* Put buttons on the left */
  justify-content: space-between !important;
}
.v-system-bar > span[role="group"] {
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
}
/* Reorder buttons: Close (3rd child -> 1st), Min (1st -> 2nd), Max (2nd -> 3rd) */
.v-system-bar .system-btn.system-btn--close { order: 1 !important; background: #ff5f56 !important; }
.v-system-bar .system-btn:nth-child(1) { order: 2 !important; background: #ffbd2e !important; }
.v-system-bar .system-btn:nth-child(2) { order: 3 !important; background: #27c93f !important; }
```

---

### 🎛️ Navigation Sidebar (Dock)
The sidebar on the left behaves like a drawer hosting your profiles, search shortcut, and settings.
- **Main Sidebar container**: `.sidebar` or `[data-testid="app-sidebar"]`
- **Item list container**: `.sidebar-notch__container`
- **Individual Sidebar buttons**: `.sidebar-notch-item`
- **Active Navigation button**: `.sidebar-notch-item.router-link-active` or `.sidebar-notch-item--active`
- **Back navigation button**: `.sidebar-back-btn` or `.system-bar-back-btn`

---

### 📦 Windows, Cards & Dialogs
Cards serve as the modular boxes for all features.
- **Card container**: `.v-card`
- **Card header / Dialog header**: `.v-card-title`
- **Card content area**: `.v-card-text`
- **Card bottom action buttons container**: `.v-card-actions`
- **Floating overlay dialogs**: `.v-dialog`
- **Setting-page Group cards**: `.setting-page .v-card`

---

### 🔘 Buttons
Buttons exist in various states (elevated, outline, text).
- **Global button class**: `.v-btn`
- **Button shape variants**: `.v-btn--variant-flat`, `.v-btn--variant-elevated`, `.v-btn--variant-tonal`, `.v-btn--variant-outlined`
- **Primary / Action buttons**: `.v-btn[color="primary"]`, `.v-btn.text-primary`, `[data-testid="login-submit"]`, `[data-testid="launch-button"]`
- **Active state (in toggles)**: `.v-btn.v-btn--active`, `.v-btn-toggle .v-btn--active`, `.v-btn[aria-pressed="true"]`
- **Disabled buttons**: `.v-btn:disabled`, `.v-btn[disabled]`
- **Text / Icon buttons**: `.v-btn--variant-text`, `.v-btn--variant-plain`, `.v-btn--icon`

---

### 📝 Form Fields & Dropdowns
Targeting inputs and selects.
- **Field container (Inputs / Textareas)**: `.v-field`, `.v-text-field`, `textarea`
- **Focused input border highlight**: `.v-field--focused`, `.v-text-field:focus-within`
- **Dropdown list box (Options selector)**: `.v-list`
- **Dropdown individual options**: `.v-list-item`
- **Selected option**: `.v-list-item--active`

---

### 🎚️ Switches, Checkboxes & Sliders
- **Toggle switch track**: `.v-switch__track`
- **Active state toggle switch track**: `.v-switch--selected .v-switch__track`
- **Toggle switch thumb knob**: `.v-switch__thumb`
- **Checkbox border box**: `.v-checkbox .v-selection-control__input`
- **Active checked checkbox**: `.v-checkbox .v-selection-control__input--selected`

---

### 📰 Me page Carousel & Page Sections
The "My Stuff" (Me) page contains the news hero carousel and grid lists.
- **Me Page grid container**: `.my-stuff-page`
- **Page section headers**: `.my-stuff-page .section-title`, `.my-stuff-page .section-icon`
- **News Carousel container**: `.news-carousel-wrapper` or `.news-carousel`
- **Slide wrapper**: `.news-slide`
- **Image container**: `.news-image-wrapper`, `.news-image`
- **Image shadow gradient fade**: `.news-gradient`
- **News card text area**: `.news-info`
- **News titles**: `.news-title`
- **News body text**: `.news-description`
- **"Read More" link**: `.news-read-more` or `.v-btn.news-read-more`

---

## 4. Advanced CSS Theming Tricks

### 💧 Liquid Glass (Glassmorphism with Gloss)
To design the macOS-style translucent "liquid glass" background:
1. Boost background transparency (`rgba`) and saturation.
2. Use `backdrop-filter: blur(...)` to blur content behind the glass.
3. Draw a diagonal split gradient to mimic a light gloss reflection.
4. Draw sharp light border highlights on the top and left edges.

```css
.v-card {
  /* Gloss split reflection */
  background: linear-gradient(135deg, 
                rgba(255, 255, 255, 0.16) 0%, 
                rgba(255, 255, 255, 0.07) 50%, 
                rgba(255, 255, 255, 0.0) 50.1%, 
                rgba(255, 255, 255, 0.03) 100%) !important;
  backdrop-filter: blur(25px) saturate(200%) contrast(90%) !important;
  -webkit-backdrop-filter: blur(25px) saturate(200%) contrast(90%) !important;
  
  /* Specular border highlights */
  border: 1px solid rgba(255, 255, 255, 0.15) !important;
  border-top-color: rgba(255, 255, 255, 0.32) !important;
  border-left-color: rgba(255, 255, 255, 0.24) !important;
  
  /* Drop shadow and inner glow */
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35), 
              inset 0 1px 1px rgba(255, 255, 255, 0.25) !important;
  border-radius: 16px !important;
}
```

---

### 🎨 Native Icon Customization (SVG Injections)
The launcher displays ligatures using Material Design icon fonts. You can replace any icon natively via CSS without modifying Vue templates by hiding the text glyph and applying an SVG background-image:

1. **Clear Ligature Text**: Target `.v-icon` or your class and set `font-size: 0 !important`.
2. **Apply Dimension**: Give the icon elements explicit `width` and `height`.
3. **Inject Vector**: Assign a URL-encoded SVG as the `background-image`.

```css
/* 1. Global Reset for overridden icons */
.sidebar-notch-item__icon,
.my-stuff-page .section-icon,
.badge-icon {
  font-size: 0 !important; /* Hide original material ligature letters */
  width: 18px !important;
  height: 18px !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  display: inline-block !important;
}

/* 2. Inject target SVGs */
/* Preferences Settings Cog */
[data-testid="nav-settings"] .sidebar-notch-item__icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3Cpath d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z'/%3E%3C/svg%3E") !important;
}

/* App Store Triangles */
[data-testid="nav-store"] .sidebar-notch-item__icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2.5' stroke-linecap='round'%3E%3Cpath d='M12 4v16M5 16l14-8M5 8l14 8'/%3E%3C/svg%3E") !important;
}
```

---

### 💾 macOS / Modern Scrollbars
Styling standard browser scrollbar tracks and thumbs:
```css
::-webkit-scrollbar {
  width: 8px !important;
  height: 8px !important;
}
::-webkit-scrollbar-track {
  background: transparent !important;
}
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.22) !important;
  border-radius: 10px !important;
  border: 2px solid transparent !important;
  background-clip: padding-box !important;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.35) !important;
}
```
