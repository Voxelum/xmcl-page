# Instrukcja instalacji

Launcher oferuje wiele formatów instalacji, z których niektóre są mniej powszechne. Tutaj skupimy się na przedstawieniu funkcji formatów **mniej powszechnych** lub **specjalnych**.

## Windows

:::info
Zalecany format instalacji dla użytkowników systemu Windows to `APPX` lub `Instalacja online (appinstaller)`.
:::

### APPX

APPX to **format pakietu instalacyjnego** dostarczany przez Windows 10, który umożliwia programom działanie w zwirtualizowanym/sandboxowym środowisku. Programy zainstalowane przez APPX będą działać w sandboxie Windows.

Największą korzyścią dla użytkowników jest to, że `pliki pamięci podręcznej`, `modyfikacje rejestru` i inne operacje aplikacji będą izolowane - po odinstalowaniu aplikacji, `pamięć podręczna` i `modyfikacje rejestru` zostaną usunięte razem.

:::info Dobra wiadomość
Nie martw się, że program będzie manipulować rejestrem, chociaż jedynym dodatkiem do rejestru XMCL może być skojarzenie rozszerzeń plików.
:::

AppX jest aktualizowany za pośrednictwem mechanizmu appinstaller. Zgodnie ze [strategią automatycznych aktualizacji](https://learn.microsoft.com/en-us/windows/msix/app-installer/auto-update-and-repair--overview#automatic-updates) wbudowaną w appinstaller, XMCL sprawdza aktualizacje, gdy użytkownik **uruchamia aplikację**, a jeśli jest aktualizacja, zostanie ona zainstalowana przy następnym uruchomieniu.

:::tip Dobra wiadomość
Automatyczne aktualizacje APPX obsługują **zoptymalizowane dostarczanie** i **przyrostowe aktualizacje** Windows - aktualizując tylko zmienioną zawartość.
:::

### Instalacja online (appinstaller)

`appinstaller` jest zasadniczo taki sam jak format `APPX`. `appinstaller` sam w sobie jest plikiem tekstowym `XML`, który zawiera `URL` do `APPX`. Gdy pojawi się interfejs instalacji, próbuje pobrać `APPX` i zainstalować. Dlatego jego mechanizm aktualizacji jest taki sam jak w przypadku APPX.

## MacOS

:::warning
Użytkownicy Mac muszą pozwolić na instalację niepodpisanego oprogramowania.
Ponieważ XMCL nie jest podpisany, musisz zezwolić na jego uruchomienie w ustawieniach systemowych.
:::

### DMG

Dla użytkowników MacOS oferujemy tylko format DMG. Format DMG to format obrazu dysku, który jest montowany jako wirtualny dysk. Po otwarciu DMG, przeciągnij aplikację do folderu `Applications`, aby ją zainstalować.

Aby uruchomić aplikację, musisz pozwolić na jej działanie. Możesz użyć następującego polecenia:

```sh
# zezwól na oprogramowanie z dowolnego źródła
sudo spctl --master-disable
# wyczyść atrybut kwarantanny
sudo xattr -c /Applications/X\ Minecraft\ Launcher.app
```

Jeśli zainstalujesz `X Minecraft Launcher.app` w innym miejscu, po prostu użyj tej ścieżki zamiast `/Applications/X\ Minecraft\ Launcher.app`.

## Linux

:::info
Linux ma tak wiele dystrybucji, że trudno jest dostarczyć uniwersalną metodę instalacji. Tutaj wspominamy tylko o `AppImage`.
:::

### AppImage

AppImage to format aplikacji Linux, który może działać na dowolnym pulpicie Linux bez instalacji. Plik AppImage jest wykonywalny, wystarczy dwukrotnie kliknąć lub uruchomić z terminala.

Jest to jedyny nieinstalacyjny program, który oferuje XMCL (~~właściwie nie chcemy go wspierać~~). Dlatego jego mechanizm aktualizacji różni się od innych formatów, a użytkownicy muszą sami pobrać nowy AppImage, aby go zaktualizować.

## Inne formaty

Obecnie inne formaty instalacji obsługują albo [aktualizacje na gorąco], albo metodę aktualizacji dostarczoną przez electron-builder. Ten tryb aktualizacji generalnie nie wymaga zbyt dużej uwagi (~~jeśli nie możesz zaktualizować, możesz po prostu ponownie pobrać launcher~~).

:::tip Aktualizacja na gorąco
Aktualizacja na gorąco oznacza, że launcher samodzielnie zastępuje podstawowy plik asar (~30MB), bez potrzeby ponownego pobierania całego launchera.
:::

## Dodatek: Wybór katalogu danych gry

Podczas początkowej instalacji użytkownicy muszą wybrać `Katalog danych gry`. XMCL umieści pobrane `zasoby`, `biblioteki`, `wersje` itp. w tym katalogu.

:::warning Uwaga
Jak wspomniano na stronie konfiguracji, ze względu na specjalną strukturę plików XMCL, nie zaleca się używania **surowego** katalogu gry Minecraft jako katalogu danych XMCL.
:::

W tym miejscu zaleca się wybranie nowego folderu jako `Katalogu danych gry` XMCL.

Aby uzyskać więcej informacji na temat struktury katalogu danych gry, zobacz [Przewodnik zarządzania danymi](/en/guide/manage.md#minecraft-related-data).
