# Guide d'Installation

Le launcher fournit plusieurs formats d'installation, dont certains sont moins courants. Ici, nous nous concentrerons sur l'introduction des fonctionnalités de format **moins courantes** ou **spéciales**.

## Windows

### APPX

APPX est un format de **package d'installation** fourni par Windows 10 qui permet aux programmes de s'exécuter dans un environnement virtualisé/sandbox. Les programmes installés via APPX s'exécuteront tous dans le bac à sable Windows.

Le plus grand avantage pour les utilisateurs est que les fichiers cache de l'application, les modifications du registre et les autres opérations seront isolées - lorsque vous désinstallez l'application, le cache et les modifications du registre seront supprimés aussi.

:::info Bonne nouvelle
Ne vous inquiétez pas si le programme modifie le registre, étant donné que le seul ajout au registre par XMCL puisse être l'association d'extension de fichier.
:::

AppX est mis à jour via le mécanisme appinstaller. Selon la stratégie de [mise à jour automatique](https://learn.microsoft.com/fr-fr/windows/msix/app-installer/auto-update-and-repair--overview#automatic-updates) intégrée à appinstaller, XMCL vérifie les mises à jour lorsque l'utilisateur **lance l'application**, et s'il y a une mise à jour, elle sera mise à jour au prochain lancement.

:::tip Bonne nouvelle
Les mises à jour automatiques d'APPX prennent en charge la **livraison d'optimisation** et les **mises à jour incrémentielles** de Windows - ne mettant à jour que le contenu modifié.
:::

### Installation en ligne (appinstaller)

`appinstaller` est essentiellement le même que le format `APPX`. `appinstaller` lui-même est un fichier texte `XML` qui contient l'`URL` de `APPX`. Lorsque l'interface d'installation s'affiche, elle tente de télécharger `APPX` et de l'installer. Par conséquent, son mécanisme de mise à jour est le même que APPX.

### Windows 7/8

Solution découverte et fournie par [longteng](https://github.com/longteng-H)([bilibili](https://space.bilibili.com/1030667057))

:::details Comment exécuter XMCL sur les systèmes Windows inférieurs à Windows 10
Par défaut, XMCL ne prend pas en charge le fonctionnement natif de Windows 7. En installant le noyau étendu VxKex pour compléter les bibliothèques d'exécution requises, cela fournit une solution pour les utilisateurs qui sont encore sur des systèmes hérités. (Note : Cette méthode est également applicable à certains logiciels qui ne peuvent pas fonctionner normalement sur des systèmes plus anciens)

1. Téléchargez et installez le noyau étendu [VxKex-NEXT](https://github.com/YuZhouRen86/VxKex-NEXT). Il s'agit d'une branche domestique fournie ici.
2. Trouvez X Minecraft Launcher.exe et activez VxKex pour celui-ci. Si vous ne savez pas comment faire, veuillez vous référer au tutoriel vidéo : [Modern Apps on Windows 7 | Windows 7 Extended Kernel](https://www.youtube.com/watch?v=zl7AsxtoPV8).

Cochez à la fois "Activer VxKex NEXT pour ce programme" et "Signaler d'autres versions de Windows", puis appliquez et confirmez.

À ce stade, XMCL peut fonctionner normalement sur Windows 7, et toutes les fonctions sauf le multijoueur fonctionnent normalement.
:::

## MacOS

:::warning
Les utilisateurs de Mac doivent autoriser l'installation de logiciels piratés.
Étant donné que XMCL n'est pas signé, vous devez autoriser son exécution dans les paramètres du système.
:::

### DMG

Nous ne fournissons que le format DMG pour les utilisateurs de MacOS. Le format DMG est un format d'image disque qui est monté comme un disque virtuel. Après avoir ouvert le DMG, faites glisser l'application vers le dossier `Applications` pour l'installer.

Pour exécuter l'application, vous devez autoriser le logiciel à s'exécuter dans les paramètres du système.

```sh
# autoriser les logiciels de n'importe quelle source
sudo spctl --master-disable
# effacer l'attribut de quarantaine
sudo xattr -c /Applications/X\ Minecraft\ Launcher.app
```

Si vous installez `X Minecraft Launcher.app` à un autre endroit, remplacez simplement `/Applications/X\ Minecraft\ Launcher.app` par le chemin d'accès.

## Linux

:::info
Linux a tellement de distributions qu'il est difficile de fournir une méthode d'installation universelle. Ici, nous ne mentionnons que l'`AppImage`.
:::

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