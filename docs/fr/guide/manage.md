# Stockage de données

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
- [Cache Java](../protocole/java.md). Enregistre les chemins Java détectés, les informations de version, etc. Stocké dans le fichier `/java.json`.
- [Base de données des ressources](../protocol/resources.md). Métadonnées pour les fichiers de ressources, telles que les informations de mod analysés. Stocké au format `leveldb`, dans le dossier `/resources-v2`.
- [Journaux](../protocol/logs.md). Journaux historiques XMCL. Stocké dans le dossier `/logs`.

## Données liées à Minecraft

Je pense que vous connaissez très bien la structure des répertoires des données Minecraft.
Le répertoire de données de XMCL est légèrement différent de celui de Minecraft :

<script setup>
import CentraProjectTree from '../../../src/components/CentraProjectTree.vue'
</script>

<CentraProjectTree />

La plupart du contenu est en fait le même que Minecraft, parmi lesquels le dossier `instances` contient tous les fichiers d'instance.