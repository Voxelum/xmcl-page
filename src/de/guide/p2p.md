# 🎮 Minecraft LAN-Multiplayer-Leitfaden

Dieser Leitfaden hilft dir, Minecraft mit deinen Freunden über ein lokales Netzwerk oder sogar über das Internet mit den integrierten Funktionen des Launchers einzurichten und zu spielen.

## Was ist P2P (Peer-to-Peer)? Eine einfache Erklärung

P2P steht für "Peer-to-Peer" (Gleichrangig-zu-Gleichrangig). Stell es dir so vor: Anstatt dass sich alle mit einem großen zentralen Server verbinden (wie ein Hauptcomputer im Himmel), verbinden sich die Spieler *direkt* mit den Computern der anderen. Es ist wie eine direkte Telefonleitung zwischen Freunden, anstatt dass alle über eine Vermittlung telefonieren.

- **Direkte Verbindung:** Dein Computer spricht *direkt* mit dem Computer deines Freundes.
- **Kein zentraler Server:** Im Gegensatz zu Online-Servern benötigst du keinen dedizierten Rechner, der rund um die Uhr läuft.
- **Lokales Netzwerk (LAN):** Funktioniert am besten im selben lokalen Netzwerk (z. B. im selben WLAN zu Hause).
- **Spielen über das Internet:** Kann über das Internet funktionieren, erfordert jedoch bestimmte Netzwerkkonfigurationen (wie das unten beschriebene Relay-System des Launchers).

Dies ermöglicht es Spielern, einem Spiel beizutreten, das auf dem Computer einer Person gehostet wird, ohne dass eine komplexe Servereinrichtung erforderlich ist.

## Erste Schritte: Öffnen des Multiplayer-Fensters

Öffne zuerst das Fenster "Multiplayer im LAN" im Launcher:

![Multiplayer](/guidephoto/multi.png)

## Verbindungstatus verstehen

Nach dem Öffnen siehst du deinen Status, deine IP-Adresse und deine Router-Informationen. Der wichtigste Teil ist dein **Status**:

![Verbindungstatus](/guidephoto/windows-mul.png)

- **Status 1 oder 2:** Alles bestens! Du kannst ohne Probleme mit Freunden spielen.
- **Andere Statuswerte:** Wenn du eine andere Statusnummer siehst, bedeutet dies, dass dein Verbindungstyp möglicherweise nicht optimal für das direkte Spielen ist. Du musst nach Lösungen suchen, die für deine Interneteinrichtung oder Firewall spezifisch sind. (Versuche zuerst, den Status im Launcher zu aktualisieren – manchmal hilft das!)

## So spielst du: Mit oder ohne Lizenz

### Option 1: Spieler mit Lizenz
Wenn jeder eine Minecraft-Lizenz besitzt, kannst du den Standard-LAN-Multiplayer verwenden:
1. Eine Person startet eine Welt in Minecraft und öffnet sie für LAN.
2. Die anderen Spieler suchen nach dem Spiel in ihrer Minecraft-Multiplayer-Liste.

### Option 2: Verwendung des Relay-Servers (Für Spieler ohne Lizenz oder bei schwierigen Verbindungen)
Wenn du keine Lizenz hast oder Verbindungsprobleme auftreten, bietet der Launcher eine Relay-Server-Funktion:
1. Gehe zu den **Allgemeinen Einstellungen** des Launchers.
2. Aktiviere die **Relay-Server-Funktion**.
   - *Hinweis:* Wenn diese Option nicht verfügbar ist, blockiert dein Internetanbieter möglicherweise den Zugriff darauf.

![Relay-Server](/guidephoto/relay-server.png)

## Verbindung einrichten

### Methode 1: Verwendung von Verbindungs-IDs (Einfacher)
1. **ID erstellen:** Klicke auf die Schaltfläche `+` im Multiplayer-Fenster.
2. **ID teilen:** Sende deine generierte ID an deinen Freund.

![Verbindung per ID](/guidephoto/ID.png)

3. **Freund tritt bei:** Dein Freund klickt auf `+` und gibt deine ID in das entsprechende Feld ein.
4. **Verbunden:** Dein Freund sollte nun mit dir verbunden sein!

### Methode 2: Manuelle Verbindung (Wenn Methode 1 fehlschlägt)
Wenn die ID-Methode nicht funktioniert, verwende die manuellen Verbindungseinstellungen:

1. Klicke auf das **Einstellungssymbol**.
![Verbindungseinstellungen](/guidephoto/token.png)
2. Eine Person wählt **"Verbindung initiieren" (Initiale-Connection)** (erstellt die Verbindung).
![Verbindung initiieren](/guidephoto/intiale.png)
3. Die andere wählt **"Beitreten" (Join)** (verbindet sich mit dem Host).
4. Der Host muss seinen Verbindungsschlüssel senden und der Freund muss ihn akzeptieren.

## Welten teilen

Sobald die Verbindung hergestellt ist, kannst du Weltinstanzen mit deinen Freunden über die entsprechende Schaltfläche in der Benutzeroberfläche teilen.

![Welt teilen](/guidephoto/share.png)
![Welt teilen 2](/guidephoto/Share2.png)

## Spiel starten

1. **Host:** Öffne Minecraft, starte eine Welt und öffne sie für LAN.
2. **Spieler:** Gehe in Minecraft auf Multiplayer, und das gehostete Spiel sollte unten in deiner Serverliste erscheinen!

## Netzwerkoptimierung
### Für das beste Spielerlebnis solltest du diese Netzwerkeinstellungen berücksichtigen:

* Verwende eine stabile Internetverbindung mit einer Upload-Geschwindigkeit von mindestens 5 Mbit/s.
* Bevorzuge nach Möglichkeit kabelgebundene Verbindungen (LAN) gegenüber WLAN.
* **Schließe bandbreitenintensive Anwendungen während des Spielens.**
* **Deaktiviere unnötige Hintergrunddienste.**

## Benötigst du Hilfe?

Wenn Probleme auftreten, kannst du gerne in Discord, Reddit oder anderen Minecraft-Communitys um Hilfe bitten.
