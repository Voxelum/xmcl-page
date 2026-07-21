# AppX Migration

Diese Seite führt Sie durch die Migration Ihrer Daten von einer AppX-Installation zu einer Zip-Installation.

Die Idee ist einfach: Kopieren des AppData-Ordners von XMCL für die AppX-App in den normalen AppData-Pfad.

> [!IMPORTANT]
> Löschen Sie die AppX-Version der App **NICHT** während des Migrationsprozesses.

## Finden Sie Ihre AppX-Daten

Gehen Sie zum folgenden Pfad, um Ihre AppX-Daten zu finden:

```cmd [Windows (APPX/appinstaller)]
# Version < 0.34
%LocalAppData%\Packages\XMCL_ncdvebj03zfcm\LocalCache\Roaming\xmcl
# Version >= 0.34 und < 0.40
%LocalAppData%\Packages\XMCL_68mcaawk44tpj\LocalCache\Roaming\xmcl
```

::: tip
Verwenden Sie die Adressleiste im Windows Explorer, um zu dem oben genannten Pfad zu navigieren.
:::

## Kopieren Sie die Daten in den normalen AppData-Ordner

Kopieren Sie den gesamten `xmcl`-Ordner aus dem vorherigen Schritt nach:

```cmd [Windows]
%AppData%\xmcl
```

## Starten Sie das neue XMCL und löschen Sie das alte

Nach dem Kopieren der Daten können Sie das neue XMCL aus der Zip-Datei starten.

Sobald Sie sich vergewissert haben, dass das neue XMCL ordnungsgemäß funktioniert, können Sie die alte AppX-Version von XMCL löschen.

::: tip
Durch das Löschen der AppX-App werden die alten Daten **automatisch** entfernt, sodass Sie sich keine Sorgen über Datenrückstände machen müssen.
:::
