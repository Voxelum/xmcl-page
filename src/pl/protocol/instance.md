# Format przechowywania instancji

> W budowie

XMCL, podobnie jak MultiMC, przechowuje informacje o instancjach.

Informacje te są przechowywane w katalogu danych XMCL: /pl/guide/manage#xmcl-cache-and-database

```sh
Katalog danych XMCL
instances.json # Globalny plik konfiguracji instancji
```

Jak również w katalogu danych gry XMCL:

```sh
Katalog danych gry XMCL
instances # Zawiera pliki instancji
  instance-a
    instance.json # Plik konfiguracji instancji A
  instance-b
    instance.json # Plik konfiguracji instancji B
```

## Format globalnego pliku konfiguracyjnego

Załóżmy, że Twoje dane XMCL są przechowywane w `/path/to/xmcl`.

```json5
{
    // Ostatnio wybrana instancja. Launcher wybierze ją przy uruchomieniu.
    "selectedInstance": "/path/to/xmcl/instances/instance-a",
    // Jest to pamięć podręczna listy wszystkich instancji. Ścieżki do zewnętrznych importowanych instancji również są tutaj przechowywane.
    "instances": [
        "/path/to/xmcl/instances/instance-a",
        "/path/to/xmcl/instances/instance-b",
        // Zewnętrzne instancje
        "/external/.minecraft"
    ]
}
```

## Plik konfiguracji instancji

Załóżmy, że utworzyłeś jedną w `/path/to/xmcl/instances/mc.hypixel.com`.

```json5
{
    // Nazwa wyświetlana w launcherze
    "name": "mc.hypixel.com",
    // Obecnie nieaktywne. Ustawia rozdzielczość gry dla instancji
    "resolution": { "width": 800, "height": 400, "fullscreen": false },
    // Minimalna pamięć
    "minMemory": 0,
    // Maksymalna pamięć
    "maxMemory": 0,
    // Dodatkowe parametry uruchomieniowe JVM
    "vmOptions": [],
    // Dodatkowe parametry uruchomieniowe MC
    "mcOptions": [],
    "url": "",
    // URL ikony instancji
    "icon": "",
    // Czy XMCL pokaże okno logów po uruchomieniu
    "showLog": false,
    // Czy ukryć launcher po uruchomieniu
    "hideLauncher": true,
    // Wymagane wersje dla instancji, pusty string oznacza brak wymagań
    "runtime": {
        "minecraft": "1.16.3",
        "forge": "",
        "liteloader": "",
        "fabricLoader": "",
        "yarn": "",
        "optifine": "",
        "quiltLoader": ""
    },
    // Ścieżka do Java, pusta oznacza automatyczne wykrywanie
    "java": "",
    // Ręcznie określona wersja uruchomienia, pusta oznacza obliczenie na podstawie runtime
    "version": "",
    // Adres serwera, jeśli ustawiony launcher połączy się bezpośrednio z tym serwerem
    "server": { "host": "mc.hypixel.net", "port": 25565 },
    // Autor modpacka
    "author": "ci010",
    // Opis
    "description": "",
    "lastAccessDate": 1661774086015,
    "creationDate": 1602514422594,
    "modpackVersion": "",
    "fileApi": "",
    "tags": [],
    "assignMemory": false,
    // Czy włączyć szybkie uruchamianie
    "fastLaunch": false
}
```
