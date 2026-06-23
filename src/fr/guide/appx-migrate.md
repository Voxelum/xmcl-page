# Migration AppX

Cette page vous guidera pour migrer vos données d'une installation AppX vers une installation Zip.

L'idée est simple : il suffit de copier le dossier AppData `xmcl` de l'application AppX vers l'emplacement AppData commun.

> [!IMPORTANT]
> Ne supprimez **PAS** l'application en version AppX pendant le processus de migration.

## Trouver vos données AppX

Allez au chemin suivant pour trouver vos données AppX :

```cmd [Windows (APPX/appinstaller)]
# Version < 0.34
%LocalAppData%\Packages\XMCL_ncdvebj03zfcm\LocalCache\Roaming\xmcl
# Version >= 0.34 et < 0.40
%LocalAppData%\Packages\XMCL_68mcaawk44tpj\LocalCache\Roaming\xmcl
```

::: tip
Utilisez la barre d'adresse de l'Explorateur de fichiers pour naviguer vers le chemin mentionné ci-dessus.
:::

## Copier les données vers l'AppData commun

Copiez tout le dossier `xmcl` de l'étape précédente vers :

```cmd [Windows]
%AppData%\xmcl
```

## Démarrer le nouveau XMCL et supprimer l'ancien

Après avoir copié les données, vous pouvez démarrer le nouveau XMCL à partir du fichier Zip.

Une fois que vous avez confirmé que le nouveau XMCL fonctionne correctement, vous pouvez supprimer l'ancienne application XMCL.

::: tip
La suppression de l'application AppX supprimera **automatiquement** les anciennes données, vous n'avez donc pas à vous soucier des données restantes.
:::
