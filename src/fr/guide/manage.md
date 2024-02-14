# Gestion des Données

Les données XMCL sont divisées en deux parties :

1. XMCL en tant que cache et base de données générée par chromium
2. Données liées à Minecraft

## Cache et base de données XMCL

Le cache lié à XMCL lui-même est stocké dans le chemin d'accès système appdata, qui est différent sur différentes plates-formes.

::: code-group
```cmd[Windows]
%AppData%\xmcl
```
```cmd [Windows (APPX/appinstaller)]
%LocalAppData%\Packages\XMCL_ncdvebj03zfcm\LocalCache\Roaming\xmcl
# Version >= 0.34
%LocalAppData%\Packages\XMCL_68mcaawk44tpj\LocalCache\Roaming\xmcl
```
```sh [macOS]
~/Library/Application Support/xmcl
```
```sh [Linux]
~/.config/xmcl
```
:::

:::warning Remarque
Ne supprimez pas les fichiers ici à moins que vous ne sachiez ce que vous faites.
:::

Vous trouverez ici quelques fichiers "json" utilisés pour stocker diverses configurations, et la base de données sera également stockée ici.

- [Données utilisateur](../protocol/user.md). Stocke les comptes des utilisateurs, les liens de skin, etc. Stocké dans le fichier `/user.json`.
- [Paramètres globaux](../protocol/setting.md). Paramètres globaux, tels que la langue, l'URL du proxy, le node de téléchargement, etc. Stockés dans le fichier `/settings.json`.
- [Cache d'instance](../protocol/instance.md). Enregistre le dernier chemin d'instance sélectionné et les chemins de toutes les instances connues. Stocké dans le fichier `/instances.json`.
<!-- - [Cache Java](../protocole/java.md). Enregistre les chemins Java détectés, les informations de version, etc. Stocké dans le fichier `/java.json`. -->
- [Base de données des ressources](../protocol/resources.md). Métadonnées pour les fichiers de ressources, telles que les informations de mod analysés. Stocké au format `leveldb`, dans le dossier `/resources-v2`.
- [Journaux](../protocol/logs.md). Journaux historiques XMCL. Stocké dans le dossier `/logs`.

## Données du jeu (Minecraft)

Je suis sûr que vous connaissez la structure du répertoire de données de Minecraft.
Le répertoire de données de XMCL est légèrement différent de celui de Minecraft :

```sh {9}
.
├─ mods
│ ├─ modA.jar # Le fichier auquel l'exemple ci-dessus se connecte.
│ └─ modB.jar
├─ resourcepacks # L'adresse réelle du lien resourcepacks dans l'exemple ci-dessus.
├─ shaderpacks # L'adresse réelle du lien shaderpacks dans l'exemple ci-dessus.
├─ versions # Dossier de stockage pour toutes les versions.
├─ assets # Le dossier de stockage pour toutes les ressources du jeu.
├─ instances # Toutes les instances créées automatiquement par XMCL (sauf les importations) sont ici.
└─ libraries # Dossier de stockage pour tous les fichiers de la bibliothèque.
```

La plus grande partie est en fait la même que Minecraft, avec `instances` contenant tous les fichiers d'instance.

```sh {9}
.
├─ mods
│ ├─ modA.jar # Les fichiers réels auxquels les instances ci-dessus sont connectées.
│ └─ modB.jar
├─ resourcepacks # L'adresse réelle du lien resourcepacks dans l'exemple ci-dessus.
├─ shaderpacks # L'adresse réelle du lien shaderpacks dans l'exemple ci-dessus.
├─ versions # Dossier de stockage pour toutes les versions.
├─ assets # Le dossier de stockage pour toutes les ressources du jeu.
├─ instances # Toutes les instances créées automatiquement par XMCL (sauf l'import) sont ici // [!code focus]
└─ libraries # Le dossier de stockage pour tous les fichiers de la bibliothèque.
``

Traduit avec www.DeepL.com/Translator (version gratuite)