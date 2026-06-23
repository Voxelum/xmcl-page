# Launcher Custom CSS Theme Guide

Diese Anleitung bietet ein umfassendes Handbuch zum Entwerfen, Schreiben und Anpassen der Launcher-Benutzeroberfläche mithilfe benutzerdefinierter CSS-Stylesheets. Sie beschreibt die Hauptlayoutelemente, Selektoren und fortgeschrittene Techniken (wie Glassmorphismus, Glanzlichter und Austausch nativer Symbole), mit denen Sie benutzerdefinierte Designs erstellen können.

---

## 1. Kernarchitektur & Theme-Injektion

Die Benutzeroberfläche des Launchers basiert auf **Vue 3** und **Vuetify 3**. Stile werden global über die benutzerdefinierte CSS-Engine injiziert.

Um sicherzustellen, dass Ihre benutzerdefinierten Stile die Standardstile von Vuetify ordnungsgemäß überschreiben, schreiben Sie stets präzise CSS-Selektoren und verwenden Sie `!important`, wenn Konflikte mit integrierten Stilen oder CSS-Deklarationen mit hoher Spezifität vorliegen.

### Typografie & Schriftglättung
Legen Sie immer den Standardschriftstapel fest und optimieren Sie das Text-Rendering im Root:
```css
html, body, #app, .v-application {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  text-rendering: optimizeLegibility !important;
}
```

---

## 2. Überschreiben von Vuetify 3 Farbtokens

Vuetify definiert Kernfarben als rohe RGB-Triplets (z. B. `255, 255, 255`) auf den Root-Containern, um Deckkraft-Berechnungen durchzuführen. Um diese Variablen global zu ändern, ohne Komponenten zu beschädigen, definieren Sie sie innerhalb dieser Selektoren neu:

```css
.v-application,
.v-theme--dark,
.v-theme--light {
  --v-theme-background: 18, 18, 28;      /* Hintergrund der Hauptanwendung */
  --v-theme-surface: 25, 25, 35;          /* Oberflächen für Karten und Dialoge */
  --v-theme-on-surface: 255, 255, 255;    /* Standardtextfarbe */
  --v-theme-primary: 0, 122, 255;         /* Akzentfarbe (Apple-Blau usw.) */
  --v-theme-on-primary: 255, 255, 255;    /* Textfarbe auf Akzentschaltflächen */
  --v-theme-error: 255, 59, 48;           /* Fehler-Banner & Badges */
}
```

Wenn Sie die Standardseiten transparent machen möchten, damit Ihr Desktop-Hintergrundbild durchscheint:
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

## 3. Schlüsselkomponenten & CSS-Selektoren

### 🖥️ Titelleiste / Systemleiste
Der Fenster-Header verwendet `.v-system-bar`, welche die Fenstersteuerungen und Badge-Trigger enthält.
- **Titelleiste**: `.v-system-bar`
- **Steuerungsschaltflächen (Min/Max/Schließen)**: `.system-btn` oder `.v-system-bar .system-btn`
- **Spezifische Klasse für Schließen-Button**: `.system-btn--close`
- **System-Badges (Suche, Aufgaben, Hilfe)**: `.system-bar-badge`
- **Hotkey-Textbeschriftung im Badge**: `.palette-hotkey`

*Beispiel: Anordnen der Fenstersteuerungen auf der linken Seite und Gestaltung als macOS-Ampel per Flexbox:*
```css
.v-system-bar {
  flex-direction: row-reverse !important; /* Schaltflächen nach links verschieben */
  justify-content: space-between !important;
}
.v-system-bar > span[role="group"] {
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
}
/* Reihenfolge ändern: Schließen (3. Kind -> 1.), Min (1. -> 2.), Max (2. -> 3.) */
.v-system-bar .system-btn.system-btn--close { order: 1 !important; background: #ff5f56 !important; }
.v-system-bar .system-btn:nth-child(1) { order: 2 !important; background: #ffbd2e !important; }
.v-system-bar .system-btn:nth-child(2) { order: 3 !important; background: #27c93f !important; }
```

---

### 🎛️ Navigations-Seitenleiste (Dock)
Die linke Seitenleiste dient als Dock für Ihre Profile, die Verknüpfung zur Suche und Einstellungen.
- **Hauptbehälter der Seitenleiste**: `.sidebar` or `[data-testid="app-sidebar"]`
- **Behälter für Elementliste**: `.sidebar-notch__container`
- **Einzelne Seitenleistensymbole**: `.sidebar-notch-item`
- **Aktive Navigationsschaltfläche**: `.sidebar-notch-item.router-link-active` oder `.sidebar-notch-item--active`
- **Zurück-Navigationsschaltfläche**: `.sidebar-back-btn` oder `.system-bar-back-btn`

---

### 📦 Fenster, Karten & Dialoge
Karten dienen als modulare Boxen für alle Funktionen.
- **Karten-Behälter**: `.v-card`
- **Karten-Header / Dialog-Header**: `.v-card-title`
- **Inhaltsbereich der Karte**: `.v-card-text`
- **Unterer Aktionsbereich (Buttons)**: `.v-card-actions`
- **Freischwebende Overlay-Dialoge**: `.v-dialog`
- **Gruppenkarten auf Einstellungsseite**: `.setting-page .v-card`

---

### 🔘 Schaltflächen
Schaltflächen existieren in verschiedenen Zuständen (erhaben, Kontur, Text).
- **Globale Schaltflächenklasse**: `.v-btn`
- **Formvarianten**: `.v-btn--variant-flat`, `.v-btn--variant-elevated`, `.v-btn--variant-tonal`, `.v-btn--variant-outlined`
- **Primäre / Aktions-Schaltflächen**: `.v-btn[color="primary"]`, `.v-btn.text-primary`, `[data-testid="login-submit"]`, `[data-testid="launch-button"]`
- **Aktiver Zustand (in Umschaltern)**: `.v-btn.v-btn--active`, `.v-btn-toggle .v-btn--active`, `.v-btn[aria-pressed="true"]`
- **Deaktivierte Schaltflächen**: `.v-btn:disabled`, `.v-btn[disabled]`
- **Text- / Symbolschaltflächen**: `.v-btn--variant-text`, `.v-btn--variant-plain`, `.v-btn--icon`

---

### 📝 Formularfelder & Dropdowns
Zielsteuerung für Eingaben und Auswahlen.
- **Eingabebehälter (Textfelder / Textbereiche)**: `.v-field`, `.v-text-field`, `textarea`
- **Fokus-Rahmenhervorhebung**: `.v-field--focused`, `.v-text-field:focus-within`
- **Dropdown-Listenfeld (Optionsauswahl)**: `.v-list`
- **Dropdown-Einzeloptionen**: `.v-list-item`
- **Ausgewählte Option**: `.v-list-item--active`

---

### 🎚️ Schalter, Kontrollkästchen & Schieberegler
- **Schalter-Spur**: `.v-switch__track`
- **Schalter-Spur im aktiven Zustand**: `.v-switch--selected .v-switch__track`
- **Schalter-Knopf**: `.v-switch__thumb`
- **Checkbox-Rahmen**: `.v-checkbox .v-selection-control__input`
- **Ausgewählte Checkbox**: `.v-checkbox .v-selection-control__input--selected`

---

### 📰 Profilseite (Me Page) Karussell & Abschnitte
Die Seite "Meine Sachen" (Profil) enthält das News-Karussell und Grid-Listen.
- **Grid-Behälter**: `.my-stuff-page`
- **Abschnitts-Header**: `.my-stuff-page .section-title`, `.my-stuff-page .section-icon`
- **News-Karussell-Behälter**: `.news-carousel-wrapper` oder `.news-carousel`
- **Slide-Umhüllung**: `.news-slide`
- **Bildbehälter**: `.news-image-wrapper`, `.news-image`
- **Bildschattengradient**: `.news-gradient`
- **Textbereich der News-Karte**: `.news-info`
- **News-Titel**: `.news-title`
- **News-Beschreibungstext**: `.news-description`
- **"Mehr lesen"-Link**: `.news-read-more` oder `.v-btn.news-read-more`

---

## 4. Fortgeschrittene CSS-Designtricks

### 💧 Flüssiges Glas (Glassmorphismus mit Glanz)
So entwerfen Sie den transluzenten "Flüssigglas"-Hintergrund im macOS-Stil:
1. Erhöhen Sie die Hintergrundtransparenz (`rgba`) und die Sättigung.
2. Verwenden Sie `backdrop-filter: blur(...)`, um Inhalte hinter dem Glas zu verwischen.
3. Zeichnen Sie einen diagonalen Verlauf, um eine Lichtreflexion zu imitieren.
4. Fügen Sie scharfe helle Ränder an den oberen und linken Kanten hinzu.

```css
.v-card {
  /* Glanzreflexion */
  background: linear-gradient(135deg, 
                rgba(255, 255, 255, 0.16) 0%, 
                rgba(255, 255, 255, 0.07) 50%, 
                rgba(255, 255, 255, 0.0) 50.1%, 
                rgba(255, 255, 255, 0.03) 100%) !important;
  backdrop-filter: blur(25px) saturate(200%) contrast(90%) !important;
  -webkit-backdrop-filter: blur(25px) saturate(200%) contrast(90%) !important;
  
  /* Glanzrand-Hervorhebungen */
  border: 1px solid rgba(255, 255, 255, 0.15) !important;
  border-top-color: rgba(255, 255, 255, 0.32) !important;
  border-left-color: rgba(255, 255, 255, 0.24) !important;
  
  /* Schatten und inneres Leuchten */
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35), 
              inset 0 1px 1px rgba(255, 255, 255, 0.25) !important;
  border-radius: 16px !important;
}
```

---

### 🎨 Native Symbol-Anpassung (SVG-Injektionen)
Der Launcher zeigt Symbole mithilfe von Material Design Symbol-Schriften an. Sie können jedes Symbol nativ über CSS ersetzen, ohne Vue-Vorlagen zu ändern, indem Sie den Originaltext ausblenden und eine SVG-Hintergrundgrafik zuweisen:

1. **Ligaturtext ausblenden**: Setzen Sie für `.v-icon` oder Ihre Klasse `font-size: 0 !important`.
2. **Dimensionen zuweisen**: Geben Sie den Symbolelementen explizite Werte für `width` und `height`.
3. **Vektor injizieren**: Weisen Sie ein URL-codiertes SVG als `background-image` zu.

```css
/* 1. Globaler Reset für überschriebene Symbole */
.sidebar-notch-item__icon,
.my-stuff-page .section-icon,
.badge-icon {
  font-size: 0 !important; /* Originaltext ausblenden */
  width: 18px !important;
  height: 18px !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  display: inline-block !important;
}

/* 2. Ziel-SVGs injizieren */
/* Zahnrad für Einstellungen */
[data-testid="nav-settings"] .sidebar-notch-item__icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3Cpath d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z'/%3E%3C/svg%3E") !important;
}

/* App-Store Dreiecke */
[data-testid="nav-store"] .sidebar-notch-item__icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2.5' stroke-linecap='round'%3E%3Cpath d='M12 4v16M5 16l14-8M5 8l14 8'/%3E%3C/svg%3E") !important;
}
```

---

### 💾 macOS / Moderne Scrollbalken
Gestaltung von Scrollbalken-Spuren und -Schiebern:
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
