---
outline: false
layout: home
hero:
  name: X Minecraft Launcher
  text: Découvrez différentes expériences avec un lanceur Minecraft.
  image:
    src: /logo.png
    alt: X Minecraft Launcher
  actions:
    - theme: brand
      text: Télécharger
      link: /fr/
    - theme: alt
      text: GitHub
      link: https://github.com/voxelum/x-minecraft-launcher
    - text: Licence MIT
      link: https://github.com/Voxelum/x-minecraft-launcher/blob/master/LICENSE
      theme: alt
features:
  - icon: 📥
    title: Téléchargement & auto-complétion
    details: Prend en charge le téléchargement de Minecraft, Forge, Fabric, Quilt, OptiFine, JVM depuis des sources officielles ou des miroirs tiers.
  - icon: ⚡️
    title: Téléchargement rapide
    details: Réutilisation des sockets via des agents HTTP/HTTPS, et téléchargement des fichiers par parties simultanément.
  - icon: 💻
    title: Multi-plateforme
    details: Le lanceur est basé sur Electron et prend en charge Windows 10/11, MacOS et Linux.
  - icon: 📚
    title: Instances multiples
    details: Créez plusieurs instances pour isoler différentes versions, mods et paramètres de lancement.
  - icon: 🗂
    title: Gérer toutes les ressources
    details: Utilisez des liens pour installer des ressources dans les instances, optimisez votre utilisation du disque.
  - icon: 🔥
    title: Support intégré pour CurseForge & Modrinth
    details: Téléchargez des ressources directement à l'intérieur du lanceur.
markdownStyles: false
---

<div class="vp-doc" style="margin: auto; max-width: 1180px; padding: 0 24px">

## Premiers pas

<p style="display: flex; gap: 4px;">
  <a href="https://github.com/Voxelum/x-minecraft-launcher">
    <img src="https://github.com/Voxelum/x-minecraft-launcher/workflows/Build/badge.svg" alt="Build">
  </a>
  <a href="https://github.com/Voxelum/x-minecraft-launcher/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/@xmcl/core.svg" alt="Licence">
  </a>
  <a href="https://conventionalcommits.org">
    <img src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg" alt="Commit">
  </a>
  <br>
  <a href="https://kook.top/gqjSHh">
    <img src="https://img.shields.io/endpoint?url=https://api.xmcl.app/kook-badge" alt="Kook">
  </a>
</p>

Si vous avez winget, vous pouvez l'utiliser pour installer

```bash
winget install CI010.XMinecraftLauncher
```

L'installation via HomeBrew est également disponible

```bash
brew tap voxelum/xmcl
brew install --cask --no-quarantine voxelum/xmcl
```

### Vous souhaitez contribuer ?

Si vous voulez ajouter des fonctionnalités ou corriger des bugs, consultez [Contribuer](/fr/guide/contributing)

Si vous souhaitez aider à la traduction, veuillez suivre [Débuter avec la localisation](/fr/guide/i18n).


## Parrainage

| [![](https://github.com/DGP-Studio/Snap.Hutao/assets/10614984/73ae8b90-f3c7-4033-b2b7-f4126331ce66)](https://www.netlify.com/) |                 Signature de code gratuite sur Windows fournie par [SignPath.io](https://signpath.io/), certificat par [SignPath Foundation](https://signpath.org/)                  |
| :----------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                        [![](/deno-logo.webp)](https://deno.com/deploy)                                         |        [Deno Deploy](https://deno.com/deploy), XMCL utilise sa plateforme sans tracas pour les applications JavaScript sans serveur. Fourni par [Deno](https://deno.com/)        |
|                                         [![](https://bmclapidoc.bangbang93.com/assets/favicon.ico?v=1742218388684)](https://bmclapidoc.bangbang93.com/)                                         | BMCLAPI est une partie de BMCL développée par @bangbang93, utilisée pour résoudre le problème de lenteur des connexions chinoises vers Amazon S3 utilisé par Forge et Minecraft officiel. BMCLAPI est ouvert au public, tous les lanceurs nécessitant des ressources Minecraft peuvent l'utiliser. |

### AFDIAN

<!-- afdian-start -->
<!--@include: ../../parts/afdian.md-->
<!-- afdian-end -->

## Contributeurs

<a href="https://github.com/voxelum/x-minecraft-launcher/graphs/contributors" flex justify-center>
  <img src="https://contrib.rocks/image?repo=voxelum/x-minecraft-launcher" />
</a>

### Remerciements spéciaux

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/86590991?v=4">

[BANER](https://github.com/BANSAFAn), qui m'aide beaucoup dans la communauté RU/UK.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/119564588?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/155435591?v=4">

[GodLeaveMe](https://github.com/GodLeaveMe), [v1mkss](https://github.com/v1mkss), maintenant le registre de paquets AUR.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/52188337?v=4">

[0xc0000142](https://github.com/0xc0000142), maintient le winget.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/109208530?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/86590991?v=4">

[Marmur2020](https://github.com/Marmur2020) & [BANSAFAn](https://github.com/BANSAFAn), ont complètement traduit la langue ukrainienne !
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/7201687?v=4">

[vanja-san](https://github.com/vanja-san), a fourni la langue russe !
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/37006668?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/11472320?v=4">

[lukechu10](https://github.com/lukechu10) & [HoldYourWaffle](https://github.com/HoldYourWaffle) m'aident sur le cœur du lanceur.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/25716486?v=4">

[laolarou726](https://github.com/laolarou726), qui aide beaucoup sur la conception du lanceur.
</div>

Les contributeurs du projet historique :

[Yricky](https://github.com/Yricky), [Jin](https://github.com/Indexyz), [LG](https://github.com/LasmGratel), [Phoebe](https://github.com/PhoebezZ), [Sumeng Wang](https://github.com/darkkingwsm), [Luca](https://github.com/LucaIsGenius), [Charles Tang](https://github.com/CharlesQT)

</div>
