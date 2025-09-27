# Przechowywanie danych

Dane XMCL dzielą się na dwie części:

1. Dane XMCL jako pamięć podręczna i baza danych generowana przez Chromium
2. Dane związane z Minecraft

## Pamięć podręczna i baza danych XMCL

Pamięć podręczna związana z XMCL jest zapisywana w folderze AppData systemu, który różni się w zależności od platformy.

::: code-group
```cmd [Windows]
%AppData%\xmcl
```
```cmd [Windows (APPX/appinstaller)]
# Wersja < 0.34
%LocalAppData%\Packages\XMCL_ncdvebj03zfcm\LocalCache\Roaming\xmcl
# Wersja >= 0.34 i < 0.40
%LocalAppData%\Packages\XMCL_68mcaawk44tpj\LocalCache\Roaming\xmcl
```
```sh [macOS]
~/Library/Application Support/xmcl
```
```sh [Linux]
~/.config/xmcl
```
:::

:::warning Uwaga
Nie usuwaj tych plików, chyba że wiesz, co robisz.
:::

Znajdziesz tu kilka plików `json` służących do przechowywania różnych ustawień; baza danych również jest tu przechowywana.

- [Dane użytkownika](../protocol/user.md). Przechowuje konta użytkowników, linki do skinów itp. Zapisane w `/user.json`.
- [Ustawienia globalne](../protocol/setting.md). Ustawienia globalne, takie jak język, adres proxy, węzeł pobierania itp. Zapisane w `/settings.json`.
- [Pamięć podręczna instancji](../protocol/instance.md). Zawiera ostatnio wybraną ścieżkę instancji oraz ścieżki wszystkich znanych instancji. Zapisane w `/instances.json`.
- [Pamięć podręczna Java](../protocol/java.md). Zawiera wykryte ścieżki Javy, informacje o wersjach itp. Zapisane w `/java.json`.
- [Baza zasobów](../protocol/resources.md). Metadane plików zasobów, np. informacje o modach. W formacie `leveldb`, zapisane w katalogu `/resources-v2`.
- [Logi](../protocol/logs.md). Historyczne logi XMCL. Zapisane w katalogu `/logs`.

## Dane związane z Minecraft

Zakładam, że jesteś dobrze zaznajomiony ze strukturą katalogu danych Minecraft.
Katalog danych XMCL różni się nieco od standardowego katalogu Minecraft:

```sh
.
├─ mods
│  ├─ modA.jar # Rzeczywisty plik, do którego instancja może robić odnośniki
│  └─ modB.jar
├─ resourcepacks # Prawdziwe lokalizacje resourcepacks, do których odwołują się instancje
├─ shaderpacks # Prawdziwe lokalizacje shaderpacks, do których odwołują się instancje
├─ versions # Folder przechowujący wszystkie wersje
├─ assets # Folder przechowujący wszystkie zasoby gry
├─ instances # Wszystkie instancje utworzone automatycznie przez XMCL (oprócz importowanych)
└─ libraries # Folder z bibliotekami
```

Większość zawartości jest taka sama jak w Minecraft; folder `instances` zawiera wszystkie pliki instancji.
