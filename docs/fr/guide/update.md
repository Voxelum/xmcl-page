# Guide de mise à jour

> Rédaction en cours

Comme le launcher est encore au stade `beta`, la sauvegarde des données est particulièrement importante... Ici, nous allons vous présenter comment résoudre les problèmes rencontrés lors des mises à jour et comment effectuer une sauvegarde si vous souhaitez réinstaller.

## La mise à jour APPX nécessite une réinstallation

Étant donné que l'ancien launcher de version du format `APPX` a des certificats expirés, lors de la mise à niveau de l'ancienne version vers la nouvelle version, il faudra désinstaller l'ancienne version. Dans ce cas, veuillez sauvegarder votre dossier de données XMCL.

Supposons que `foo` soit votre nom d'utilisateur :

::: code-group
```[Windows (APPX)]
%LocalAppData%\Packages\XMCL_ncdvebj03zfcm\LocalCache\Roaming\xmcl
```
:::

Vous pouvez le copier et le mettre sur le bureau. Après la réinstallation, la nouvelle version de XMCL devrait avoir le chemin de fichier suivant :

::: code-group
```[Windows (APPX)]
%LocalAppData%\Packages\XMCL_68mcaawk44tpj\LocalCache\Roaming\xmcl
```
:::

Remettez simplement vos fichiers de sauvegarde.

## Échec de la mise à jour APPX

La mise à jour APPX devrait également ouvrir un dossier contenant un fichier `xmcl.appinstaller` téléchargé. Vous pouvez double-cliquer manuellement sur ce fichier pour installer la mise à jour.

## D'autres mises à jour nécessitant une réinstallation

Cette situation ne nécessite pas réellement de backup, car seul `APPX` effacera les fichiers de données de XMCL. Bien sûr, vous pouvez sauvegarder une backup si vous le souhaitez, et les fichiers de données seront situés aux emplacements suivants :

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

## La mise à jour d'une autre version a échoué

Il suffit de retélécharger le launcher...