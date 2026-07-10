# Fehlerbehebung bei Installation & Spielstart

Wenn bei der Installation von Minecraft, Modloadern (Forge/Fabric/NeoForge/Quilt), Mods, Modpacks oder Shadern Probleme auftreten oder das Spiel nicht startet, hilft Ihnen dieser Leitfaden Schritt für Schritt weiter.

---

## 🌐 1. Download schlägt fehl oder hängt (Netzwerkprobleme)

### Symptome
* Der Download von Minecraft, Assets, Bibliotheken oder Forge/Fabric bleibt bei `0%` hängen.
* Der Launcher wirft Timeout- oder Verbindungsfehler (`CONNECTION_TIMED_OUT`, `NAME_NOT_RESOLVED`, `HTTP_STATUS 504`).

### Lösungen

:::tip Download-Spiegel verwenden
Wenn die offiziellen Mojang- oder Forge-Server langsam oder von Ihrem Internetanbieter blockiert sind, können Sie zu einem Spiegelserver wechseln:
1. Klicken Sie in der linken Seitenleiste auf **Einstellungen** (Zahnrad-Symbol).
2. Scrollen Sie nach unten zum Bereich **Netzwerkeinstellungen**.
3. Suchen Sie die Option **Download-Quelle / Spiegel** (Download Source / Mirror).
4. Wechseln Sie von **Standard** auf **BMCLAPI** oder **MCBBS** (zuverlässige Spiegelserver, die Kopien der offiziellen Daten bereitstellen).
:::

:::info Proxy konfigurieren
Wenn Sie sich hinter einer Firewall befinden, können Sie direkt im Launcher einen Proxy konfigurieren:
1. Suchen Sie unter **Einstellungen** -> **Netzwerkeinstellungen** nach den Proxy-Optionen.
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

## 🔄 3. Endlosschleife bei Dateibeschädigung (Prüfsummenfehler)

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

## ☕ 4. Spiel stürzt sofort ab (Falsche Java-Version)

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

## 📑 5. Launcher öffnet sich nicht oder zeigt schwarzen Bildschirm

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
3. Senden Sie diese Datei an das Entwicklerteam auf Discord oder erstellen Sie ein Issue auf GitHub, um Hilfe zu erhalten.
