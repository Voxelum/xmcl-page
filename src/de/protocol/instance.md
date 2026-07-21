# Instanz-Speicherformat

> Im Aufbau

XMCL speichert Instanzinformationen ähnlich wie MultiMC.

Diese Informationen werden im XMCL-Datenverzeichnis gespeichert: /de/guide/manage#xmcl-cache-and-database

```sh
XMCL Datenverzeichnis

instances.json # Globales Instanz-Konfigurationsdatei
```

Sowie im XMCL-Spiel-Datenverzeichnis: /de/guide/manage#minecraft-related-data

```sh
XMCL Spieldatenverzeichnis
instances # Enthält Dateien für Instanzen
  instance-a
    instance.json # Konfigurationsdatei für Instanz A
  instance-b
    instance.json # Konfigurationsdatei für Instanz B
```

## Format der globalen Konfigurationsdatei

Hier nehmen wir an, dass deine XMCL-Daten unter `/path/to/xmcl` liegen.

```json5
{
    // Dies ist die zuletzt ausgewählte Instanz. Der Launcher wählt diese beim Start aus.
    "selectedInstance": "/path/to/xmcl/instances/instance-a",
    // Dies ist eine zwischengespeicherte Liste aller Instanzen. Extern importierte Instanzpfade werden ebenfalls hier gespeichert.
    "instances": [
        "/path/to/xmcl/instances/instance-a",
        "/path/to/xmcl/instances/instance-b",
        // Externe Instanzen
        "/external/.minecraft"
    ]
}
```

## Instanz-Konfigurationsdatei

Angenommen, du hast eine Instanz in `/path/to/xmcl/instances/mc.hypixel.com` erstellt.

```json5
{
    // Der Name, der im Launcher angezeigt wird
    "name": "mc.hypixel.com",
    // Derzeit nicht aktiviert. Legt die Auflösung des Spiels für die Instanz fest
    "resolution": { "width": 800, "height": 400, "fullscreen": false },
    // Minimale Arbeitsspeichergröße
    "minMemory": 0,
    // Maximale Arbeitsspeichergröße
    "maxMemory": 0,
    // Zusätzliche JVM-Startparameter
    "vmOptions": [],
    // Zusätzliche Minecraft-Startparameter
    "mcOptions": [],
    "url": "",
    // URL des Instanz-Icons
    "icon": "",
    // Ob XMCL nach dem Start ein Protokollfenster anzeigen soll
    "showLog": false,
    // Ob der Launcher nach dem Start ausgeblendet werden soll
    "hideLauncher": true,
    // Erforderliche Versionen für die Instanz, ein leerer String bedeutet keine Anforderung
    "runtime": {
        "minecraft": "1.16.3",
        "forge": "",
        "liteloader": "",
        "fabricLoader": "",
        "yarn": "",
        "optifine": "",
        "quiltLoader": ""
    },
    // Java-Pfad, leer bedeutet automatische Erkennung
    "java": "",
    // Manuell angegebene Startversion, leer bedeutet Berechnung basierend auf runtime
    "version": "",
    // Server-Adresse; wenn vorhanden, verbindet der Launcher direkt mit diesem Server
    "server": { "host": "mc.hypixel.net", "port": 25565 },
    // Modpack-Autor
    "author": "ci010",
    // Beschreibung
    "description": "",
    "lastAccessDate": 1661774086015,
    "creationDate": 1602514422594,
    "modpackVersion": "",
    "fileApi": "",
    "tags": [],
    "assignMemory": false,
    // Ob schneller Start aktiviert ist
    "fastLaunch": false
}
```
