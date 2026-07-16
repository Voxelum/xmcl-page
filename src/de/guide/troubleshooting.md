# Fehlerbehebung bei Installation und Start

Wenn Sie Probleme bei der Installation von Minecraft, Mod-Loadern (Forge/Fabric/NeoForge/Quilt), Mods, Modpacks, Shadern oder beim Starten des Spiels haben, hilft Ihnen diese Anleitung Schritt für Schritt bei der Fehlersuche und -behebung.

---

## 🌐 1. Download schlägt fehl oder hängt (Netzwerkprobleme)

### Symptome
* Der Download von Minecraft-Dateien, Ressourcen, Bibliotheken oder Mod-Loadern stoppt bei `0%`.
* Der Launcher zeigt Timeout- oder Verbindungsfehler an (`CONNECTION_TIMED_OUT`, `NAME_NOT_RESOLVED`, `HTTP_STATUS 504`).

### Lösung

:::tip Download-Spiegel (Mirror) verwenden
Wenn die offiziellen Server von Mojang oder den Mod-Loadern überlastet oder in Ihrer Region blockiert sind, können Sie auf einen alternativen Download-Spiegel wechseln:
1. Klicken Sie in der linken Seitenleiste auf **Einstellungen** (Zahnrad-Symbol).
2. Scrollen Sie zum Bereich **Netzwerkeinstellungen**.
3. Suchen Sie die Option **Download-Quelle / Spiegel** (Download Source / Mirror).
4. Ändern Sie die Einstellung von **Standard** auf **BMCLAPI** oder **MCBBS** (zuverlässige Spiegel, die offizielle Dateien spiegeln).
:::

:::info Proxy-Einstellungen
Wenn der Zugriff auf bestimmte Server in Ihrem Netzwerk eingeschränkt ist, können Sie direkt im Launcher einen Proxy konfigurieren:
1. Gehen Sie zu **Einstellungen** -> **Netzwerkeinstellungen** und suchen Sie den Bereich Proxy.
2. Geben Sie die Adresse Ihres SOCKS5- oder HTTP-Proxy-Servers ein.
3. Testen Sie die Verbindung.
:::

---

## 📦 2. Mod- / Modpack-Download schlägt fehl (CurseForge-Einschränkung)

### Symptome
* Beim Herunterladen eines Modpacks oder einer Mod von CurseForge schlägt der Download fehl und es wird ein Warnsymbol angezeigt.
* Eine Meldung warnt vor eingeschränkten Drittanbieter-Downloads ("Restricted third-party downloads").

### Ursache
Einige Mod-Autoren auf CurseForge deaktivieren den API-Download für Drittanbieter-Launcher, um Spieler dazu zu zwingen, ihre offizielle Webseite zu besuchen.

### Lösung
XMCL ermöglicht es Ihnen, die fehlenden Dateien manuell herunterzuladen:
1. Öffnen Sie die Details der fehlgeschlagenen Aufgabe in der Aufgabenverwaltung des Launchers (oben rechts).
2. Klicken Sie auf den Link neben der fehlgeschlagenen Mod, um deren Downloadseite in Ihrem Browser zu öffnen.
3. Laden Sie die `.jar`-Datei manuell über Ihren Browser herunter.
4. Ziehen Sie die heruntergeladene `.jar`-Datei per **Drag-and-Drop** direkt in das Fenster des Launchers (oder legen Sie sie im Ordner `mods` der Instanz ab).
5. XMCL erkennt die Datei automatisch und schließt die Installation ab.

---

## 🔍 3. Mod auf CurseForge vorhanden, fehlt aber in Launcher-Suche

### Symptome
* Sie suchen im Launcher nach einer Mod, aber es wird "Keine Ergebnisse gefunden" angezeigt, obwohl die Mod auf der offiziellen CurseForge-Website vorhanden ist.

### Ursache
CurseForge ermöglicht es Mod-Autoren, den **Drittanbieter-API-Zugriff** für ihre Mods zu deaktivieren. Wenn dieser deaktiviert ist, darf die CurseForge-API (die XMCL zur Suche und zum Abrufen von Mods verwendet) die Mod nicht in den Suchergebnissen zurückgeben.

### Lösung
1. Öffnen Sie Ihren Webbrowser und rufen Sie die Seite der Mod auf [CurseForge](https://www.curseforge.com/minecraft/search) auf.
2. Klicken Sie auf **Download**, um die `.jar`-Datei auf Ihrem Computer zu speichern.
3. Öffnen Sie XMCL und wählen Sie Ihre aktive Instanz aus.
4. Ziehen Sie die heruntergeladene `.jar`-Datei per **Drag-and-Drop** direkt in das Fenster des Launchers. XMCL installiert sie automatisch im Ordner `mods` der ausgewählten Instanz.

---

## 📦 4. Importierte Modpacks "verschwinden" oder scheinen leer zu sein

### Symptome
* Sie ziehen eine Modpack-Datei (`.zip` oder `.mrpack`) per Drag-and-Drop in den Launcher, können sie aber in Ihrem aktuellen Spielprofil nicht finden oder die Mod-Liste erscheint leer.

### Ursache
1. **Erstellung einer neuen Instanz**: XMCL fügt Modpacks nicht in Ihr aktuell aktives Profil ein. Stattdessen erstellt es eine **völlig neue Instanz** (Profil) für dieses Modpack.
2. **Hintergrund-Download-Aufgaben**: Modpack-Dateien enthalten aus Platzgründen nicht die tatsächlichen `.jar`-Mods (sie enthalten nur Metadaten). Nach dem Import startet XMCL eine Hintergrundaufgabe, um alle Mods herunterzuladen. Bis diese Aufgabe abgeschlossen ist, kann die Mod-Liste leer erscheinen.

### Lösung
1. **Instanz wechseln**: Klicken Sie auf das Seitenleisten-Menü oder den Profil-Switcher, um alle Instanzen anzuzeigen. Suchen Sie nach einer neuen Instanz, die nach dem importierten Modpack benannt ist, und wählen Sie sie aus.
2. **Aufgabenverwaltung überprüfen**: Klicken Sie auf das Aufgabensymbol (oben rechts im Launcher), um zu überprüfen, ob der Download des Modpacks noch läuft. Warten Sie, bis der Download abgeschlossen ist, bevor Sie das Spiel starten.

---

## 🔄 5. Endlosschleife bei Dateibeschädigung (Prüfsummenfehler)

### Symptome
* Der Launcher lädt dieselbe Bibliotheks- oder Asset-Datei ständig neu herunter und meldet, sie sei beschädigt.
* Das Spiel startet nicht, weil die Überprüfung der Dateien wiederholt fehlschlägt.

### Ursache
Der Download einer Datei wurde unterbrochen und eine beschädigte Teildatei ist im lokalen Cache gesperrt, wodurch der Launcher daran gehindert wird, sie ordnungsgemäß zu überschreiben.

### Lösung
1. Suchen Sie den Pfad der beschädigten Datei in den Diagnosemeldungen oder Logs des Launchers (z. B. `libraries/org/lwjgl/...`).
2. Öffnen Sie den Datenordner Ihrer Instanz (klicken Sie auf das Ordner-Symbol oben rechts in der Instanz-Übersicht).
3. Navigieren Sie zu dem in der Fehlermeldung angegebenen Pfad und **löschen Sie den Ordner**, der die beschädigte Datei enthält.
4. Klicken Sie auf **Reparieren** (Repair) oder starten Sie das Spiel erneut. Der Launcher lädt eine neue, intakte Kopie herunter.

---

## ☕ 6. Spiel stürzt sofort ab (Falsche Java-Version)

### Symptome
* Das Spiel startet, stürzt jedoch sofort mit dem Fehlercode `1` oder `-1` ab.
* In den Logs steht `UnsupportedClassVersionError` oder "Java wurde nicht gefunden".

### Ursache
Jede Minecraft-Version erfordert eine bestimmte Java-Version (JDK). Die Verwendung einer falschen Version führt zum Absturz des Spiels.

### Lösung
XMCL verfügt über einen automatischen Java-Manager, der kompatible JDK-Versionen für Sie herunterlädt.

:::warning Java-Kompatibilitätsmatrix
Stellen Sie sicher, dass Ihre Instanz die richtige Java-Version verwendet:
* **Minecraft 1.12.2 und älter:** Java 8
* **Minecraft 1.16 - 1.17:** Java 16 / 17
* **Minecraft 1.18 - 1.20.4:** Java 17
* **Minecraft 1.20.5+:** Java 21
:::

#### So wählen Sie die Java-Version in XMCL aus:
1. Öffnen Sie die Instanz-Einstellungen (Zahnrad-Symbol neben der Schaltfläche "Spielen").
2. Suchen Sie den Bereich **Java**.
3. Klicken Sie auf das Auswahlfeld. XMCL listet alle installierten Java-Versionen auf Ihrem System auf und markiert kompatible Versionen mit einem grünen Symbol.
4. Wenn Sie nicht die richtige Version haben, klicken Sie auf **Java installieren**, damit der Launcher die optimale Version automatisch herunterlädt.

---

## 📑 7. Launcher öffnet sich nicht oder zeigt schwarzen Bildschirm

### Symptome
* Ein Doppelklick auf das Launcher-Symbol bewirkt nichts.
* Das Launcher-Fenster öffnet sich, bleibt aber komplett schwarz.

### Lösung
Sie können die Logdateien einsehen, um die Fehlerursache zu ermitteln:
1. Navigieren Sie zum XMCL-Datenordner auf Ihrem System:
   * **Windows:** `%appdata%\xmcl`
   * **macOS:** `~/Library/Application Support/xmcl`
   * **Linux:** `~/.config/xmcl`
2. Öffnen Sie den Ordner `logs` und suchen Sie nach der neuesten Datei `main.log`.

---

## 📋 8. Diagnosebericht erstellen (Empfohlener erster Schritt)

Vor der manuellen Suche nach Protokolldateien empfehlen wir dringend, im Launcher einen **Diagnosebericht** zu erstellen. Dadurch werden alle Launcher-Logs, Spiel-Logs und Systemumgebungsinformationen in einem einzigen Paket gebündelt, sodass die Community oder Entwickler Ihnen viel schneller helfen können.

### So erstellen Sie einen Bericht:
1. Klicken Sie im Launcher-Header auf das Menü **Hilfe & Feedback**.
2. Klicken Sie auf **Bericht erstellen** (Generate Report), um Launcher-Diagnosen und Logs zu bündeln.

   <img src="/guidephoto/Generate%20Report.gif" alt="Generate Report" style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;">

---

## 📑 9. So analysieren Sie Launcher- und Spiel-Logs

Wenn Sie die Logs lieber manuell suchen möchten, sagen sie Ihnen genau, was los ist. Hier erfahren Sie, wie Sie sie finden und häufige Absturzszenarien beheben.

### 🔍 So finden Sie die Logs

Je nachdem, ob es sich um einen Launcher-Fehler oder einen Spielabsturz handelt, müssen Sie unterschiedliche Logs überprüfen:

#### A. Launcher-Logs (`main.log`)
Bei Abstürzen des Launchers, fehlgeschlagenen Downloads, Netzwerkfehlern oder Login-Problemen:
- **Windows:** Drücken Sie `Win + R`, geben Sie `%appdata%\xmcl\logs` ein und drücken Sie die Eingabetaste.
- **macOS:** Navigieren Sie zu `~/Library/Application Support/xmcl/logs`.
- **Linux:** Gehen Sie zu `~/.config/xmcl/logs`.
- Suchen Sie nach der neuesten Datei namens `main.log`.

#### B. Spiel-Logs (`latest.log` & Absturzberichte)
Bei Mod-Konflikten, Minecraft-Abstürzen, Performance-Problemen oder Java-Fehlern:
- Öffnen Sie das Dashboard der Instanz im Launcher.
- Klicken Sie oben rechts auf das **Ordner-Symbol**, um das Verzeichnis zu öffnen.
- Gehen Sie in den Ordner `logs` und öffnen Sie `latest.log`.
- Wenn das Spiel abgestürzt ist, gehen Sie in den Ordner `crash-reports` und suchen Sie nach der neuesten `.txt`-Datei (z. B. `crash-YYYY-MM-DD_HH.MM.SS-client.txt`).

---

### 🛠 Logs analysieren & häufige Fehler beheben

Öffnen Sie die Logdatei in einem beliebigen Texteditor (wie dem Windows Editor) und suchen Sie nach folgenden Fehlern (nutzen Sie `Strg + F` zum Suchen):

#### 🔴 Fall 1: Speicher voll (Out of Memory)
- **Wonach suchen:** `java.lang.OutOfMemoryError: Java heap space` oder Exit-Code `-805306369`.
- **Erklärung:** Dem Spiel wurde nicht genügend Arbeitsspeicher (RAM) zugewiesen, um alle Mods zu laden.
- **Behebung:**
  1. Öffnen Sie die Instanz-Einstellungen (Zahnrad-Symbol neben "Spielen").
  2. Scrollen Sie nach unten zum Bereich **Java**.
  3. Erhöhen Sie den **Mindest-** und **Maximalwert** des Arbeitsspeichers (z. B. maximalen RAM auf `4096` oder `6144` MB setzen).

#### 🔴 Fall 2: Mod-Konflikte oder fehlende Abhängigkeiten
- **Wonach suchen:** `Mixin transformation failed`, `DependencyResolutionException` oder Zeilen wie `Requires mod 'fabric' (version X or later), but only version Y is installed`.
- **Erklärung:** Eine Ihrer Mods benötigt eine andere Mod (Abhängigkeit), die fehlt, oder zwei Mods sind inkompatibel.
- **Behebung:** Lesen Sie die Fehlerzeile sorgfältig. Meist wird die fehlende Mod namentlich genannt. Laden Sie diese herunter und legen Sie sie in den Ordner `mods`, oder aktualisieren Sie die inkompatible Mod.

#### 🔴 Fall 3: Falsche Java-Version
- **Wonach suchen:** `java.lang.UnsupportedClassVersionError: ... has been compiled by a more recent version of the Java Runtime`.
- **Erklärung:** Sie verwenden eine Java-Version, die nicht mit der gewählten Minecraft-Version oder dem Modpack kompatibel ist (z. B. Java 8 für Minecraft 1.20).
- **Behebung:** Öffnen Sie die Instanz-Einstellungen, gehen Sie zum Bereich **Java** und klicken Sie auf **Java installieren**, um die empfohlene Java-Version automatisch herunterzuladen.

#### 🔴 Fall 4: Grafikkartentreiber-Absturz
- **Wonach suchen:** `GLFW error 65542: WGL: The driver does not seem to support OpenGL` oder `Pixel format not accelerated`.
- **Erklärung:** Ihre Grafikkartentreiber sind veraltet oder fehlen, oder das Spiel läuft auf der integrierten CPU-Grafik statt auf der dedizierten Grafikkarte.
- **Behebung:** Aktualisieren Sie Ihre Grafikkartentreiber über die offizielle Website des Herstellers (NVIDIA, AMD oder Intel). Stellen Sie bei Laptops sicher, dass das Spiel in den Windows-Grafikeinstellungen der Hochleistungs-GPU zugewiesen ist.

---

### ❓ Was tun, wenn Sie die Logs nicht verstehen?

Wenn Sie die Logs/Berichte geprüft haben und immer noch nicht wissen, was den Absturz verursacht, keine Sorge! Die XMCL-Community hilft Ihnen auf verschiedenen Plattformen:

#### 1. Treten Sie unserem offiziellen Discord-Server bei
- Erhalten Sie schnelle Hilfe von Entwicklern und erfahrenen Spielern.
- Beitrittslink: **[Discord-Server-Einladung](https://discord.gg/W5XVwYY7GQ)**
- **Wie Sie fragen:** Gehen Sie in den Kanal **#feedback-and-idea** und laden Sie Ihren Diagnosebericht oder Ihre Logdatei hoch.
- Schauen Sie sich diese Vorschau unseres Kanals an:
  
  <img src="/guidephoto/Discord-feedback.gif" style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

#### 2. Auf Reddit fragen
- Sie können Fragen in unserer Reddit-Community stellen:
- Subreddit besuchen: **[r/XMCL Subreddit](https://www.reddit.com/r/XMCL/)**

#### 3. Ein GitHub-Issue erstellen
- Wenn Sie glauben, einen Fehler im Launcher selbst gefunden zu haben, können Sie einen Fehlerbericht erstellen.
- Hier erstellen: **[XMCL GitHub Issues](https://github.com/Voxelum/x-minecraft-launcher/issues)**
- Fügen Sie den Inhalt Ihres Diagnoseberichts oder der Logdateien in die Beschreibung ein, damit die Entwickler das Problem beheben können.
