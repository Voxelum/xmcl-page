# Przewodnik po aktualizacji

> W budowie

Ponieważ launcher jest nadal w fazie `beta`, tworzenie kopii zapasowych danych jest szczególnie ważne... Tutaj przedstawimy, jak rozwiązywać problemy napotkane podczas aktualizacji oraz jak utworzyć kopię zapasową w przypadku ponownej instalacji.

## Aktualizacja APPX wymaga ponownej instalacji

Ponieważ starsza wersja launchera w formacie `APPX` ma wygasłe certyfikaty, podczas aktualizacji ze starej wersji do nowej wymagane będzie odinstalowanie starej wersji. W takim przypadku należy utworzyć kopię zapasową folderu danych XMCL.

Załóżmy, że `foo` to Twoja nazwa użytkownika:

::: code-group
```[Windows (APPX)]
%LocalAppData%\Packages\XMCL_ncdvebj03zfcm\LocalCache\Roaming\xmcl
```
:::

Możesz go skopiować i umieścić np. na pulpicie. Po ponownej instalacji nowa wersja XMCL powinna korzystać z następującej ścieżki pliku:

::: code-group
```[Windows (APPX)]
%LocalAppData%\Packages\XMCL_68mcaawk44tpj\LocalCache\Roaming\xmcl
```
:::

Po prostu przenieś swoje pliki kopii zapasowej z powrotem.

## Aktualizacja APPX nie powiodła się

Aktualizacja APPX powinna również otworzyć folder, w którym znajduje się pobrany plik `xmcl.appinstaller`. Możesz kliknąć dwukrotnie ten plik ręcznie, aby zainstalować aktualizację.

## Inne aktualizacje wymagają ponownej instalacji

Ta sytuacja w rzeczywistości nie wymaga kopii zapasowej, ponieważ tylko format `APPX` czyści pliki danych XMCL. Oczywiście możesz wykonać kopię zapasową, jeśli chcesz, pliki danych znajdują się w następujących lokalizacjach:

::: code-group
```cmd [Windows]
%AppData%\xmcl
```
```sh [macOS]
~/Library/Application Support/xmcl
```
```sh [Linux]
~/.config/xmcl
```
:::

## Aktualizacja innych wersji nie powiodła się

Po prostu pobierz ponownie...
