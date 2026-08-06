# So verschieben Sie XMCL & Spieldaten auf ein anderes Laufwerk

Beim Installieren des X Minecraft Launchers oder beim Herunterladen vieler Minecraft-Versionen, Mods, Ressourcenpakete und Shader kann das Systemlaufwerk (`C:`) schnell voll werden.

Diese Anleitung erklärt, wie Sie **die Launcher-Anwendung verschieben** und **Ihre Minecraft-Spieldaten** auf ein zweites Laufwerk (wie `D:` oder `E:`) verlegen.

:::tip Schnelle Empfehlung
Wenn Sie nur Speicherplatz auf `C:` freigeben möchten, müssen Sie lediglich das **[Spieldaten-Verzeichnis ändern](#1-minecraft-spieldaten-verlegen-empfohlen)**. Die Spieldaten (Mods, Welten, Versionen) machen 99 % des belegten Speicherplatzes aus!
:::

---

## 1. Minecraft-Spieldaten verlegen (Empfohlen)

XMCL ermöglicht es Ihnen, alle großen Minecraft-Dateien auf einem beliebigen Laufwerk zu speichern, ohne den Launcher neu zu installieren.

### Schritte zum Ändern des Datenverzeichnisses:
1. Starten Sie den **X Minecraft Launcher**.
2. Öffnen Sie die **Einstellungen** (Zahnrad-Symbol ⚙️ unten links).
3. Gehen Sie zu **Globale Einstellungen** -> **Allgemein / Speicher**.
4. Suchen Sie die Einstellung **Datenverzeichnis / Pfad**.
5. Klicken Sie auf **Durchsuchen** und wählen Sie einen Ordner auf Ihrem gewünschten Laufwerk (z. B. `D:\XMCL-Data`).
6. Bestätigen Sie die Auswahl. XMCL verwendet automatisch den neuen Speicherort!

---

## 2. Verschieben der Launcher-Anwendungsdatei

Je nachdem, welches Paketformat Sie zur Installation verwendet haben, unterscheidet sich das Vorgehen:

### Option A: Portables ZIP-Paket
- Einfach den entpackten Ordner `XMCL` von `C:\` auf Ihr neues Laufwerk (z. B. `D:\Games\XMCL`) verschieben und `xmcl.exe` von dort starten.

### Option B: AppX / Online AppInstaller / WinGet
- Öffnen Sie die **Windows-Einstellungen** (`Win + I`) -> **Apps** -> **Installierte Apps** -> **X Minecraft Launcher** -> `...` -> **Verschieben** -> Wählen Sie Laufwerk `D:`.

### Option C: macOS (DMG)
- Verschieben Sie `X Minecraft Launcher.app` auf ein anderes Laufwerk oder ändern Sie das Spieldaten-Verzeichnis in den Einstellungen.

### Option D: Linux (AppImage / Flatpak / Deb / RPM)
- Verschieben Sie die `.AppImage`-Datei oder ändern Sie das Spieldaten-Verzeichnis in den Einstellungen.
