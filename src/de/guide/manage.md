# Datenspeicherung

XMCL-Daten sind in zwei Teile unterteilt:

1. XMCL selbst (Cache und Datenbanken, die von Chromium erzeugt werden)
2. Minecraft-bezogene Spieldaten

## XMCL-Cache und Datenbank

Der für XMCL relevante Cache wird im systemabhängigen AppData-Pfad gespeichert. Dieser Pfad ist je nach Plattform unterschiedlich.

::: code-group
```cmd [Windows]
%AppData%\xmcl
```
```cmd [Windows (APPX/appinstaller)]
# Version < 0.34
%LocalAppData%\Packages\XMCL_ncdvebj03zfcm\LocalCache\Roaming\xmcl
# Version >= 0.34 und < 0.40
%LocalAppData%\Packages\XMCL_68mcaawk44tpj\LocalCache\Roaming\xmcl
```
```sh [macOS]
~/Library/Application Support/xmcl
```
```sh [Linux]
~/.config/xmcl
```
:::

:::warning Hinweis
Löschen Sie die Dateien in diesem Ordner nicht, es sei denn, Sie wissen genau, was Sie tun.
:::

Hier finden Sie einige `json`-Dateien, die zur Speicherung verschiedener Konfigurationen benutzt werden; die Datenbank wird ebenfalls hier abgelegt.

- [Benutzerdaten](../protocol/user.md). Speichert Konten, Skin-Links etc. Wird in der Datei `/user.json` gespeichert.
- [Globale Einstellungen](../protocol/setting.md). Globale Einstellungen wie Sprache, Proxy-URL, Download-Knoten usw. Wird in `/settings.json` gespeichert.
- [Instanz-Cache](../protocol/instance.md). Zeichnet den zuletzt gewählten Instanzpfad und alle bekannten Instanzpfade auf. Wird in `/instances.json` gespeichert.
- [Java-Cache](../protocol/java.md). Zeichnet erkannte Java-Pfade, Versionsinformationen usw. auf. Wird in `/java.json` gespeichert.
- [Ressourcen-Datenbank](../protocol/resources.md). Metadaten zu Ressourcen-Dateien, z. B. analysierte Mod-Informationen. Im `leveldb`-Format im Ordner `/resources-v2` gespeichert.
- [Logs](../protocol/logs.md). Historische XMCL-Logs. Im Ordner `/logs` gespeichert.

## Minecraft-bezogene Daten

Die Verzeichnisstruktur der Spieldaten ist größtenteils identisch mit der von Minecraft. Das XMCL-Datenverzeichnis unterscheidet sich jedoch leicht:

```sh
"Public Data folder"
└─ 📂mods # Gemeinsamer Mods-Ordner für alle Instanzen
  └─ modA.jar # Eine Mod-Datei; Instanzen können Mods daraus verlinken
├─ 📂resourcepacks # Gemeinsamer Resourcepacks-Ordner für alle Instanzen
├─ 📂shaderpacks # Gemeinsamer Shaderpacks-Ordner für alle Instanzen
├─ 📂versions # Gemeinsamer Versions-Ordner für alle Instanzen
├─ 📂assets # Gemeinsamer Assets-Ordner für alle Instanzen
├─ 📂libraries # Gemeinsamer Libraries-Ordner für alle Instanzen
└─ 📂instances # Beinhaltet die von XMCL erstellten Instanzen
```

Der Großteil ist wie bei Minecraft; der Ordner `instances` enthält alle Instanzdateien.
