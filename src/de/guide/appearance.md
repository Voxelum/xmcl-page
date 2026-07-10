# Aussehen & Custom CSS Leitfaden

In diesem Leitfaden erfahren Sie, wie Sie die Benutzeroberfläche von XMCL anpassen, einschließlich der integrierten Farbpaletten, Themenmodi, Hintergrundeffekte (Bilder/Videos/Partikel) und erweiterten Gestaltungen mit benutzerdefinierten CSS-Regeln.

---

## 1. Integrierte Design-Einstellungen

Sie können das grundlegende Erscheinungsbild des Launchers anpassen, indem Sie in der linken Seitenleiste auf **Einstellungen** (Zahnrad-Symbol) klicken und zum Reiter **Aussehen** navigieren.

### Farbpalette und Themen
XMCL ermöglicht es Ihnen, die folgenden Farbelemente separat anzupassen:
- **Kartenfarbe**: Hintergrundfarbe von Modulen und Dialogfeldern.
- **Farbe der oberen Leiste**: Hintergrund der Titelleiste/des Ziehbereichs des Fensters.
- **Farbe der Seitenleiste**: Hintergrund des linken Navigationsbereichs.
- **Hintergrundfarbe**: Hauptfenster-Hintergrund unter allen Elementen.
- **Hervorhebungsfarbe**: Farbe für aktive Symbole, Fokusringe, Hauptaktionstasten und Links.
- **Fehlerfarbe**: Farbe für Warnungen, Fehlerbanner und Abzeichen.

Der Launcher enthält zwei Standardfarbschemata: **Heller Modus** und **Dunkler Modus**.

:::tip Getrennte Einstellungen
Die Farbkonfigurationen für den hellen und dunklen Modus werden unabhängig voneinander gespeichert. Das Umschalten zwischen den Modi lädt automatisch Ihre angepasste Palette für diesen Modus.
:::

---

### Hintergrundeffekte & Medien
Sie können den Haupthintergrund des Launchers mit drei verschiedenen Optionen anpassen:

1. **Bild**: Legen Sie ein beliebiges Bild (PNG, JPG, WEBP) als Hintergrund fest. XMCL kopiert und speichert die Bilddateien in seinem Konfigurationsverzeichnis, sodass es nicht verloren geht, wenn Sie das Originalbild löschen.
2. **Video**: Verwenden Sie eine lokale MP4/WEBM-Videodatei als animierten Hintergrund.
   :::warning Pfadabhängigkeit
   Der Launcher speichert nur den absoluten **Dateipfad** des Hintergrundvideos. Wenn Sie die Videodatei verschieben, umbenennen oder löschen, wird die Hintergrundeinstellung ungültig und es wird auf die Standardfarbe zurückgegriffen.
   :::
3. **Partikeleffekte**: Aktivieren Sie dynamische Hintergrundanimationen wie schwebende Sterne, fallenden Schnee oder Partikelnetze.

---

## 2. Fortgeschrittenes Custom CSS Styling

XMCL verfügt über einen integrierten Custom CSS Editor am Ende des Einstellungsreiters **Aussehen**. Da die Benutzeroberfläche auf **Vue 3** und **Vuetify 3** basiert, können Sie die Stile aller Elemente global überschreiben.

Um sicherzustellen, dass Ihre eigenen CSS-Stile die Vuetify-Standards überschreiben, verwenden Sie spezifische Selektoren und setzen Sie bei Konflikten mit den Vuetify-Regeln `!important`.

### Typografie & Schriftglättung
Optimieren Sie die Textdarstellung und legen Sie Schriftfamilien auf der Stammebene fest:
```css
html, body, #app, .v-application {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  text-rendering: optimizeLegibility !important;
}
```

---

## 3. Überschreiben von Vuetify 3 Farbtokens

Vuetify definiert Farben als reine RGB-Triaden (z. B. `255, 255, 255`) in den Hauptcontainern zur Berechnung von Transparenzen. Um Farbvariablen global zu ändern, definieren Sie sie in diesen Selektoren neu:

```css
.v-application,
.v-theme--dark,
.v-theme--light {
  --v-theme-background: 18, 18, 28;      /* Hauptfenster-Hintergrund */
  --v-theme-surface: 25, 25, 35;          /* Oberfläche von Karten & Dialogen */
  --v-theme-on-surface: 255, 255, 255;    /* Haupttextfarbe */
  --v-theme-primary: 0, 122, 255;         /* Akzentuierte Hervorhebungsfarbe */
  --v-theme-on-primary: 255, 255, 255;    /* Textfarbe auf aktiven Schaltflächen */
  --v-theme-error: 255, 59, 48;           /* Fehlerbanner & Fehlermeldungen */
}
```

Wenn Sie die Standard-Seitenhintergründe transparent machen möchten, damit Ihr benutzerdefiniertes Bild oder Video voll zur Geltung kommt:
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

## 4. Selektor-Referenz für Hauptkomponenten

### 🖥️ Titelleiste / Fensterkopf
Der Fensterkopf verwendet die Klasse `.v-system-bar`, welche die Steuerungselemente und Indikatoren enthält.
- **Titelleiste**: `.v-system-bar`
- **Fenstersteuerung (Min/Max/Schließen)**: `.system-btn` oder `.v-system-bar .system-btn`
- **Schließen-Schaltfläche**: `.system-btn--close`
- **System-Indikatoren (Suche, Aufgaben, Hilfe)**: `.system-bar-badge`
- **Hotkeys-Text im Indikator**: `.palette-hotkey`

*Beispiel: Steuerungselemente nach links verschieben und im macOS-Design stylen mit Flexbox:*
```css
.v-system-bar {
  flex-direction: row-reverse !important; /* Knöpfe links platzieren */
  justify-content: space-between !important;
}
.v-system-bar > span[role="group"] {
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
}
/* Reihenfolge ändern: Schließen (3. Element -> 1.), Min (1. -> 2.), Max (2. -> 3.) */
.v-system-bar .system-btn.system-btn--close { order: 1 !important; background: #ff5f56 !important; }
.v-system-bar .system-btn:nth-child(1) { order: 2 !important; background: #ffbd2e !important; }
.v-system-bar .system-btn:nth-child(2) { order: 3 !important; background: #27c93f !important; }
```

### 🎛️ Navigations-Seitenleiste
Die linke Seitenleiste enthält Profile, Suchverknüpfungen und Einstellungen.
- **Hauptcontainer der Seitenleiste**: `.sidebar` oder `[data-testid="app-sidebar"]`
- **Verzeichnisliste**: `.sidebar-notch__container`
- **Einzelne Schaltflächen**: `.sidebar-notch-item`
- **Aktiver Menüpunkt**: `.sidebar-notch-item.router-link-active` oder `.sidebar-notch-item--active`
- **Zurück-Schaltfläche**: `.sidebar-back-btn` oder `.system-bar-back-btn`

### 📦 Karten & Dialoge
- **Karten-Container**: `.v-card`
- **Kartenkopf / Dialogkopf**: `.v-card-title`
- **Inhaltsbereich der Karte**: `.v-card-text`
- **Aktionsbereich unten**: `.v-card-actions`
- **Schwebende Dialogfenster**: `.v-dialog`
- **Karten auf der Einstellungsseite**: `.setting-page .v-card`

### 🔘 Schaltflächen
- **Globale Schaltflächenklasse**: `.v-btn`
- **Formvarianten**: `.v-btn--variant-flat`, `.v-btn--variant-elevated`, `.v-btn--variant-tonal`, `.v-btn--variant-outlined`
- **Primäre Schaltflächen**: `.v-btn[color="primary"]`, `.v-btn.text-primary`, `[data-testid="login-submit"]`, `[data-testid="launch-button"]`
- **Aktiver Zustand**: `.v-btn.v-btn--active`, `.v-btn-toggle .v-btn--active`, `.v-btn[aria-pressed="true"]`
- **Deaktivierte Tasten**: `.v-btn:disabled`, `.v-btn[disabled]`

### 📝 Textfelder & Dropdowns
- **Textfeld-Container**: `.v-field`, `.v-text-field`, `textarea`
- **Fokus-Hervorhebung**: `.v-field--focused`, `.v-text-field:focus-within`
- **Dropdown-Listenbox**: `.v-list`
- **Dropdown-Optionen**: `.v-list-item`
- **Ausgewählte Option**: `.v-list-item--active`

---

## 5. Fortgeschrittene CSS-Gestaltungstipps

### 💧 Matte-Glas-Effekt (Glassmorphism)
Erzeugung eines transluzenten Glassmorphism-Effekts mit feinen Glanzlichtern am oberen und linken Rand:

```css
.v-card {
  /* Transluzenter Hintergrund mit Glanz-Verlauf */
  background: linear-gradient(135deg, 
                rgba(255, 255, 255, 0.16) 0%, 
                rgba(255, 255, 255, 0.07) 50%, 
                rgba(255, 255, 255, 0.0) 50.1%, 
                rgba(255, 255, 255, 0.03) 100%) !important;
  backdrop-filter: blur(25px) saturate(200%) contrast(90%) !important;
  -webkit-backdrop-filter: blur(25px) saturate(200%) contrast(90%) !important;
  
  /* Glanzlichter an den Rändern */
  border: 1px solid rgba(255, 255, 255, 0.15) !important;
  border-top-color: rgba(255, 255, 255, 0.32) !important;
  border-left-color: rgba(255, 255, 255, 0.24) !important;
  
  /* Schatten & inneres Leuchten */
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35), 
              inset 0 1px 1px rgba(255, 255, 255, 0.25) !important;
  border-radius: 16px !important;
}
```

### 🎨 Anpassung nativer Symbole (SVG-Injektion)
Sie können Symbole im Launcher direkt über CSS mithilfe von URL-codierten SVGs ersetzen:

```css
/* 1. Standard-Schriftzeichen ausblenden und Abmessungen definieren */
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

/* 2. SVG als Hintergrundbild injizieren */
/* Beispiel: Zahnrad-Symbol für die Einstellungen-Schaltfläche */
[data-testid="nav-settings"] .sidebar-notch-item__icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3Cpath d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z'/%3E%3C/svg%3E") !important;
}
```

### 💾 Moderne Bildlaufleisten im macOS-Stil
Stylen von Bildlaufleisten wie unter macOS:
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
