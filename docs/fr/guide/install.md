# Guide d'installation

Le launcher fournit plusieurs formats d'installation, dont certains sont moins courants. Ici, nous nous concentrerons sur l'introduction des fonctionnalités de format **moins courantes** ou **spéciales**.

## APPX

APPX est un format de **package d'installation** fourni par Windows 10 qui permet aux programmes de s'exécuter dans un environnement virtualisé/sandbox. Les programmes installés via APPX s'exécuteront tous dans le bac à sable Windows.

Le plus grand avantage pour les utilisateurs est que les fichiers cache de l'application, les modifications du registre et les autres opérations seront isolées - lorsque vous désinstallez l'application, le cache et les modifications du registre seront supprimés aussi.

:::info Bonne nouvelle
Ne vous inquiétez pas si le programme modifie le registre, étant donné que le seul ajout au registre par XMCL puisse être l'association d'extension de fichier.
:::

AppX est mis à jour via le mécanisme appinstaller. Selon la stratégie de [mise à jour automatique](https://learn.microsoft.com/fr-fr/windows/msix/app-installer/auto-update-and-repair--overview#automatic-updates) intégrée à appinstaller, XMCL vérifie les mises à jour lorsque l'utilisateur **lance l'application**, et s'il y a une mise à jour, elle sera mise à jour au prochain lancement.

:::tip Bonne nouvelle
Les mises à jour automatiques d'APPX prennent en charge la **livraison d'optimisation** et les **mises à jour incrémentielles** de Windows - ne mettant à jour que le contenu modifié.
:::

## Installation en ligne (appinstaller)

`appinstaller` est essentiellement le même que le format `APPX`. `appinstaller` lui-même est un fichier texte `XML` qui contient l'`URL` de `APPX`. Lorsque l'interface d'installation s'affiche, elle tente de télécharger `APPX` et de l'installer. Par conséquent, son mécanisme de mise à jour est le même que APPX.

## AppImage

AppImage est un format d'application Linux qui peut s'exécuter sur n'importe quel bureau Linux sans installation. Le fichier AppImage est exécutable, il suffit de double-cliquer ou de l'exécuter depuis le terminal.

C'est le seul programme de non-installation fourni par XMCL (~~en fait, je ne veux pas le supporter~~). Par conséquent, son mécanisme de mise à jour est différent des autres formats et les utilisateurs doivent télécharger eux-mêmes une nouvelle AppImage pour effectuer la mise à jour.

## Autres formats

Actuellement, d'autres formats d'installation prennent en charge les [mises à jour à chaud] ou prennent en charge la méthode de mise à jour fournie par electron-builder. Ce mode de mise à jour ne nécessite généralement pas trop d'attention (~~si vous ne pouvez pas mettre à jour, vous pouvez simplement télécharger à nouveau le launcher~~).

:::tip Hot update
Une mise à jour "Hot update" signifie que le launcher remplace le fichier asar principal (~30Mo) par lui-même, sans avoir besoin d'un nouveau téléchargement complet du launcher.
:::

## Annexe : Choisir le répertoire des données du jeu

Lors de l'installation initiale, les utilisateurs doivent choisir le `Game Data Directory`. XMCL placera les `assets` téléchargées, les `libraries`, les `versions`, etc. dans ce répertoire.

:::warning Remarque
Comme mentionné sur la page de configuration, en raison de la structure de fichier spéciale de XMCL, il n'est pas recommandé d'utiliser le répertoire de jeu **raw** Minecraft comme répertoire de données de XMCL.
:::

Ici, il est recommandé de choisir un nouveau dossier comme `Game Data Directory` de XMCL.

Pour plus d'informations sur la structure du répertoire des données du jeu, veuillez consulter le [Guide de gestion des données](/fr/guide/manage.md#minecraft-related-data).