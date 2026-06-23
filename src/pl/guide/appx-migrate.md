# Migracja AppX

Ta strona poprowadzi Cię przez proces migracji danych z instalacji AppX do instalacji Zip.

Pomysł jest prosty: wystarczy skopiować folder AppData `xmcl` dla aplikacji AppX do wspólnej lokalizacji AppData.

> [!IMPORTANT]
> **NIE** usuwaj aplikacji w wersji AppX podczas procesu migracji.

## Znajdź swoje dane AppX

Przejdź do następującej ścieżki, aby znaleźć swoje dane AppX:

```cmd [Windows (APPX/appinstaller)]
# Wersja < 0.34
%LocalAppData%\Packages\XMCL_ncdvebj03zfcm\LocalCache\Roaming\xmcl
# Wersja >= 0.34 i < 0.40
%LocalAppData%\Packages\XMCL_68mcaawk44tpj\LocalCache\Roaming\xmcl
```

::: tip
Użyj paska adresu w Eksploratorze plików, aby przejść do wyżej wymienionej ścieżki.
:::

## Skopiuj dane do wspólnego folderu AppData

Skopiuj cały folder `xmcl` z poprzedniego kroku do:

```cmd [Windows]
%AppData%\xmcl
```

## Uruchom nowy XMCL i usuń stary

Po skopiowaniu danych możesz uruchomić nowy XMCL z archiwum Zip.

Po potwierdzeniu, że nowy XMCL działa poprawnie, możesz usunąć starą aplikację XMCL.

::: tip
Usunięcie aplikacji AppX **automatycznie** usunie stare dane, więc nie musisz się martwić o pozostawione pliki.
:::
