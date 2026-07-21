# Anleitung für Eigene Skins (Ely.by / LittleSkin)

Diese Anleitung erklärt, warum eigene Skins (von Diensten wie Ely.by oder LittleSkin) in XMCL standardmäßig nicht angezeigt werden, wie das Rendern von Skins in Minecraft Java funktioniert und wie Sie es richtig konfigurieren.

---

## Wie das Rendern von Skins in Minecraft Java funktioniert

Normalerweise lädt Minecraft Java Ihren Skin vom offiziellen Mojang-Session-Server herunter. Der Ablauf sieht wie folgt aus:

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 250" width="100%" style="max-width: 600px; font-family: system-ui, -apple-system, sans-serif; margin: 20px auto; display: block;">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#94a3b8"/>
    </marker>
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#1d4ed8" />
    </linearGradient>
    <linearGradient id="grayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4b5563" />
      <stop offset="100%" stop-color="#1f2937" />
    </linearGradient>
  </defs>

  <!-- Node 1: Client -->
  <rect x="200" y="10" width="200" height="40" rx="8" fill="url(#blueGrad)" />
  <text x="300" y="34" fill="#ffffff" font-size="14" font-weight="600" text-anchor="middle">Minecraft-Client</text>

  <!-- Arrow down to check -->
  <line x1="300" y1="50" x2="300" y2="80" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)" />

  <!-- Node 2: Check Decision -->
  <rect x="180" y="90" width="240" height="40" rx="8" fill="url(#grayGrad)" stroke="#4b5563" stroke-width="1" />
  <text x="300" y="114" fill="#f3f4f6" font-size="13" font-weight="500" text-anchor="middle">Eigener Yggdrasil aktiv?</text>

  <!-- Branch Left: No -->
  <path d="M 240 130 L 140 180" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)" />
  <text x="170" y="152" fill="#ef4444" font-size="12" font-weight="600" text-anchor="middle">Nein</text>

  <!-- Branch Right: Yes -->
  <path d="M 360 130 L 460 180" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)" />
  <text x="430" y="152" fill="#10b981" font-size="12" font-weight="600" text-anchor="middle">Ja</text>

  <!-- Node 3: Mojang (Left) -->
  <rect x="20" y="190" width="240" height="50" rx="8" fill="#1f2937" stroke="#374151" stroke-width="1.5" />
  <text x="140" y="210" fill="#f3f4f6" font-size="13" font-weight="600" text-anchor="middle">Mojang-Session-Server</text>
  <text x="140" y="228" fill="#9ca3af" font-size="11" text-anchor="middle">textures.minecraft.net</text>

  <!-- Node 4: Custom (Right) -->
  <rect x="340" y="190" width="240" height="50" rx="8" fill="#1f2937" stroke="#10b981" stroke-width="1.5" />
  <text x="460" y="210" fill="#f3f4f6" font-size="13" font-weight="600" text-anchor="middle">Eigener Skin-Server</text>
  <text x="460" y="228" fill="#10b981" font-size="11" font-weight="500" text-anchor="middle">Ely.by / LittleSkin</text>
</svg>

---

## Warum Skins in XMCL standardmäßig nicht angezeigt werden

In anderen Launchern wie **Legacy Launcher** oder **ElyPrism**:
* **Legacy Launcher** modifiziert automatisch die interne `authlib.jar` des Spiels oder führt einen unsichtbaren Java-Agenten aus. Er ruft die Skins von Ely.by für alle Offline-Konten (lokale Konten) direkt anhand des Namens ab und umgeht so Sicherheitsprüfungen.
* **ElyPrism** ist ein Fork von Prism Launcher, der speziell für die Nutzung von Ely.by vorkonfiguriert ist.

**XMCL** ist ein sauberer Open-Source-Launcher. Er modifiziert **niemals** Ihre Spieldateien oder leitet Datenverkehr ohne Ihre ausdrückliche Zustimmung an Drittanbieter-Skinserver weiter.

---

## Eigene Skins in XMCL einrichten

Sie können eigene Skins mit einer der beiden folgenden Methoden einrichten.

### Methode 1: Ein Drittanbieter-Konto hinzufügen (Empfohlen)

Verwenden Sie keinen einfachen Offline-/lokalen Kontonamen, sondern fügen Sie Ihr offizielles Ely.by- oder LittleSkin-Konto im Launcher hinzu. Dadurch wird der **Authlib-Injector** automatisch aktiviert:

1. Klicken Sie in der Seitenleiste des Launchers auf das Symbol **Konten**.
2. Klicken Sie auf **Konto hinzufügen**.
3. Wählen Sie **Ely.by** oder **Yggdrasil** (für LittleSkin geben Sie deren Yggdrasil-API-URL ein: `https://littleskin.cn/api/yggdrasil`).
4. Melden Sie sich mit Ihren Kontodaten an.
5. Stellen Sie in Ihren Instanz-Einstellungen sicher, dass die Option **Authlib Injector deaktivieren** auf **AUS** steht.

#### Funktionsweise im Hintergrund
Wenn Sie das Spiel starten, fügt XMCL automatisch den Java-Agenten `authlib-injector` mit dem eigenen API-Stammverzeichnis hinzu:

```cmd
java -javaagent:authlib-injector.jar=https://authserver.ely.by/api/ -jar ...
```

---

### Methode 2: Den Mod CustomSkinLoader verwenden

Wenn Sie lieber mit einem lokalen (Offline-)Konto spielen, aber möchten, dass Ihr Spiel Skins von Ely.by oder LittleSkin lädt, sollten Sie den Mod **CustomSkinLoader** installieren.

1. Installieren Sie einen Modloader (Forge, Fabric oder Quilt) in Ihrer Instanz.
2. Suchen und laden Sie den Mod **CustomSkinLoader** im Mod-Download-Tab in XMCL herunter.
3. Starten Sie das Spiel einmal. Es wird eine Konfigurationsdatei unter `minecraft/CustomSkinLoader/CustomSkinLoader.json` erstellt.
4. Öffnen Sie die JSON-Konfiguration und tragen Sie die Skin-Server ein:

```json
{
  "enable": true,
  "loadTypes": ["Mojang", "ElyBy", "LittleSkin"],
  "skinList": [
    { "type": "Mojang" },
    { "type": "Yggdrasil", "apiRoot": "https://authserver.ely.by/api/" },
    { "type": "Yggdrasil", "apiRoot": "https://littleskin.cn/api/yggdrasil/" }
  ]
}
```
5. CustomSkinLoader fragt diese Skin-Netzwerke anhand Ihres Benutzernamens ab und zeigt die Skins für Sie sowie für alle anderen Spieler an, die diesen Mod ebenfalls installiert haben!
