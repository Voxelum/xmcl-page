# Appearance & Custom CSS Guide

This guide covers how to customize the user interface of XMCL, including built-in palettes, theme modes, background effects, and advanced styling using custom CSS rules.

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
  font-family: -apple-system, BlinkMacSystemFont, "Space Grotesk", "Segoe UI", Roboto, sans-serif !important;
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

## 4. Customizing the Background via CSS

Beyond the built-in image selector, you can configure complex background wallpapers, overlay gradients, acrylic blurs, and animated mesh glows directly through CSS.

### 1. High-Resolution Wallpaper with Dark Contrast Overlay
Keep cards readable on bright wallpapers by adding a semi-transparent gradient mask over your custom wallpaper:

```css
body, #app, .v-application {
  background-image: 
    linear-gradient(180deg, rgba(16, 22, 18, 0.75) 0%, rgba(16, 22, 18, 0.92) 100%),
    url("https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=2560") !important;
  background-size: cover !important;
  background-position: center !important;
  background-attachment: fixed !important;
}
```

### 2. Animated Ambient Mesh Gradient (Live Background)
Create a breathing dynamic background without needing heavy video files:

```css
@keyframes meshShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

body, #app, .v-application {
  background: linear-gradient(-45deg, #0d1310, #16241c, #102a24, #0b1c18) !important;
  background-size: 400% 400% !important;
  animation: meshShift 20s ease infinite !important;
}
```

### 3. Frosted Glass / Acrylic Blur (Backdrop Filter)
Give your cards and panels a modern glassmorphic look:

```css
.v-card, .v-sheet:not(.v-toolbar) {
  background: rgba(27, 36, 31, 0.65) !important;
  backdrop-filter: blur(20px) saturate(160%) !important;
  -webkit-backdrop-filter: blur(20px) saturate(160%) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35) !important;
}
```

---

## 5. Custom Icons and SVG Masks

You can replace or colorize launcher icons without touching JavaScript or Vue template files.

### 1. Dynamic Themed Icons via CSS Mask
Using CSS `mask-image`, you can inject any SVG icon and have it automatically inherit your launcher's active primary color:

```css
/* Replace the settings sidebar icon with a custom SVG outline */
[data-testid="nav-settings"] .v-icon,
[data-testid="nav-settings"] .sidebar-notch-item__icon {
  background-color: var(--xmcl-lime, #c9f85a) !important;
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3Cpath d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z'/%3E%3C/svg%3E") !important;
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3Cpath d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z'/%3E%3C/svg%3E") !important;
  -webkit-mask-size: contain !important;
  mask-size: contain !important;
  -webkit-mask-repeat: no-repeat !important;
  mask-repeat: no-repeat !important;
  -webkit-mask-position: center !important;
  mask-position: center !important;
  font-size: 0 !important; /* Hide original icon font glyph */
  width: 22px !important;
  height: 22px !important;
}
```

### 2. Custom Colored PNG/SVG Background Icon
If your icon has multiple colors, use `background-image` directly:

```css
.sidebar-notch-item--active .v-icon {
  background-image: url("https://your-domain.com/custom-icon.png") !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  font-size: 0 !important;
  width: 24px !important;
  height: 24px !important;
}
```

---

## 6. Animations, Transitions & Micro-Interactions

Bring life to the launcher with smooth physics and hover effects.

### 1. Card Lift and Glow on Hover
Give instance and mod cards an interactive floating feedback:

```css
.v-card {
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), 
              box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.25s ease !important;
}

.v-card:hover {
  transform: translateY(-4px) !important;
  border-color: rgba(201, 248, 90, 0.45) !important;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.35), 
              0 0 15px rgba(201, 248, 90, 0.15) !important;
}
```

### 2. Button Micro-Animations & Ripple Glow
Make buttons react dynamically when hovered or clicked:

```css
.v-btn {
  transition: transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), 
              box-shadow 0.18s ease, 
              filter 0.18s ease !important;
}

.v-btn:hover {
  transform: translateY(-1.5px) scale(1.02) !important;
  filter: brightness(1.08) !important;
}

.v-btn:active {
  transform: translateY(0.5px) scale(0.98) !important;
  filter: brightness(0.95) !important;
}

/* Pulsing Launch Button Glow */
[data-testid="launch-button"] {
  position: relative !important;
  overflow: hidden !important;
}

[data-testid="launch-button"]::after {
  content: '' !important;
  position: absolute !important;
  inset: 0 !important;
  border-radius: inherit !important;
  box-shadow: 0 0 20px rgba(201, 248, 90, 0.6) !important;
  opacity: 0 !important;
  transition: opacity 0.3s ease !important;
}

[data-testid="launch-button"]:hover::after {
  opacity: 1 !important;
}
```

### 3. Smooth Page & Modal Entrance Animation
Fade and slide dialogs into view smoothly:

```css
@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.v-dialog > .v-overlay__content {
  animation: modalSlideIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
}
```

### 4. Custom macOS-Style Scrollbars
Replace clunky scrollbars with slim, rounded indicators:

```css
::-webkit-scrollbar {
  width: 7px !important;
  height: 7px !important;
}
::-webkit-scrollbar-track {
  background: transparent !important;
}
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.18) !important;
  border-radius: 999px !important;
  border: 1px solid transparent !important;
  background-clip: padding-box !important;
  transition: background 0.2s ease !important;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(201, 248, 90, 0.45) !important;
}
```
