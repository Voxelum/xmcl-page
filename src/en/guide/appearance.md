# Appearance & Custom CSS Guide

This guide covers how to customize the user interface of XMCL, including the built-in color palettes, theme modes, background effects (images/videos/particles), and advanced styling using custom CSS rules.

---

## 1. Built-in Theme Settings

You can customize the basic appearance of the launcher by clicking the **Settings** (gear icon) in the left sidebar and navigating to the **Appearance** tab.

### Color Palette and Themes
XMCL allows you to customize the following color elements separately:
- **Card color**: Background color of modules and dialog boxes.
- **Top bar color**: Background of the window title/drag area.
- **Sidebar color**: Background of the left navigation pane.
- **Background color**: Underlying main window background.
- **Primary highlight color**: Color for active icons, focus rings, primary action buttons, and links.
- **Error color**: Color used for warnings, error banners, and badges.

The launcher includes two default color schemes: **Light Mode** and **Dark Mode**.

:::tip Separated Settings
Color configurations for Light and Dark modes are saved independently. Toggling between modes will automatically load your customized palette for that specific mode.
:::

---

### Background Effects & Media
You can customize the main background of the launcher using three different media options:

1. **Image**: Set any image (PNG, JPG, WEBP) as the background. XMCL copies and stores the image data inside its configuration directory, so it won't break if you delete the original file.
2. **Video**: Use a local MP4/WEBM video file as an animated background.
   :::warning Path dependency
   The launcher only saves the absolute **file path** of the background video. If you move, rename, or delete the video file, the background setting will become invalid and revert to the default color.
   :::
3. **Particle Effects**: Enable dynamic background animations like floating stars, falling snow, or particle webs.

---

## 2. Advanced Custom CSS Styling

XMCL features a built-in Custom CSS editor at the bottom of the **Appearance** settings tab. Because the user interface is built on **Vue 3** and **Vuetify 3**, you can override any element's styles globally.

To ensure your custom styles override Vuetify's defaults, write specific selectors and use `!important` when competing with Vuetify's inline style rules.

### Typography & Anti-Aliasing
Optimize text rendering and set a clean font stack at the root:
```css
html, body, #app, .v-application {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  text-rendering: optimizeLegibility !important;
}
```

---

## 3. Vuetify 3 Color Token Overrides

Vuetify defines colors as raw RGB triplets (e.g. `255, 255, 255`) on root wrappers to calculate opacities. To override color variables globally, redefine them inside these selectors:

```css
.v-application,
.v-theme--dark,
.v-theme--light {
  --v-theme-background: 18, 18, 28;      /* Main window background */
  --v-theme-surface: 25, 25, 35;          /* Card & dialogue surfaces */
  --v-theme-on-surface: 255, 255, 255;    /* Body text color */
  --v-theme-primary: 0, 122, 255;         /* Accent highlight color */
  --v-theme-on-primary: 255, 255, 255;    /* Accent buttons text color */
  --v-theme-error: 255, 59, 48;           /* Error banners & badges */
}
```

If you want to make the default page backgrounds transparent so your custom background image or video is fully visible:
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

## 4. Selector Reference for Main Components

### 🖥️ Titlebar / Window Header
The window header uses `.v-system-bar` which contains window controls and badge triggers.
- **Title Bar**: `.v-system-bar`
- **Control Buttons (Min/Max/Close)**: `.system-btn` or `.v-system-bar .system-btn`
- **Close Button**: `.system-btn--close`
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

### 🎛️ Navigation Sidebar
The left sidebar contains your profiles, search shortcut, and settings.
- **Main Sidebar container**: `.sidebar` or `[data-testid="app-sidebar"]`
- **Item list container**: `.sidebar-notch__container`
- **Individual Sidebar buttons**: `.sidebar-notch-item`
- **Active Navigation button**: `.sidebar-notch-item.router-link-active` or `.sidebar-notch-item--active`
- **Back navigation button**: `.sidebar-back-btn` or `.system-bar-back-btn`

### 📦 Cards & Dialogs
- **Card container**: `.v-card`
- **Card header / Dialog header**: `.v-card-title`
- **Card content area**: `.v-card-text`
- **Card bottom action buttons container**: `.v-card-actions`
- **Floating overlay dialogs**: `.v-dialog`
- **Setting-page Group cards**: `.setting-page .v-card`

### 🔘 Buttons
- **Global button class**: `.v-btn`
- **Button shape variants**: `.v-btn--variant-flat`, `.v-btn--variant-elevated`, `.v-btn--variant-tonal`, `.v-btn--variant-outlined`
- **Primary / Action buttons**: `.v-btn[color="primary"]`, `.v-btn.text-primary`, `[data-testid="login-submit"]`, `[data-testid="launch-button"]`
- **Active state (in toggles)**: `.v-btn.v-btn--active`, `.v-btn-toggle .v-btn--active`, `.v-btn[aria-pressed="true"]`
- **Disabled buttons**: `.v-btn:disabled`, `.v-btn[disabled]`

### 📝 Form Fields & Dropdowns
- **Field container**: `.v-field`, `.v-text-field`, `textarea`
- **Focused input border highlight**: `.v-field--focused`, `.v-text-field:focus-within`
- **Dropdown list box**: `.v-list`
- **Dropdown individual options**: `.v-list-item`
- **Selected option**: `.v-list-item--active`

---

## 5. Advanced CSS Styling Tricks

### 💧 Glassmorphic Cards (Matte Glass Effect)
To create a translucent "matte glass" card layout with top/left highlight lines:

```css
.v-card {
  /* Gloss split reflection background */
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

### 🎨 Native Icon Customization (SVG Injections)
You can replace launcher icons directly in CSS using URL-encoded SVGs:

```css
/* 1. Clear material ligature letters and define dimensions */
.sidebar-notch-item__icon,
.my-stuff-page .section-icon,
.badge-icon {
  font-size: 0 !important;
  width: 18px !important;
  height: 18px !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  display: inline-block !important;
}

/* 2. Inject target SVGs as background images */
/* Example: Custom cog icon for Settings navigation button */
[data-testid="nav-settings"] .sidebar-notch-item__icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3Cpath d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z'/%3E%3C/svg%3E") !important;
}
```

### 💾 Modern macOS-Style Scrollbars
To make scrollbars match macOS style:
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