---
outline: false
layout: home
hero:
  name: XMCL
  text: Découvrez une nouvelle expérience avec un lanceur Minecraft moderne.
  image:
    src: /logo.png
    alt: XMCL
  actions:
    - theme: brand
      text: Télécharger
      link: /fr-CA/
    - theme: alt
      text: GitHub
      link: https://github.com/voxelum/x-minecraft-launcher
    - text: Licence MIT
      link: https://github.com/Voxelum/x-minecraft-launcher/blob/master/LICENSE
      theme: alt
features:
  - icon: 📥
    title: Téléchargement et complétion automatique
    details: Prend en charge le téléchargement de Minecraft, Forge, Fabric, Quilt, OptiFine et JVM depuis les sources officielles ou des miroirs tiers.
  - icon: ⚡️
    title: Téléchargement rapide
    details: Réutilisation des connexions via des agents HTTP/HTTPS et téléchargement simultané des fichiers par segments.
  - icon: 💻
    title: Multiplateforme
    details: Basé sur Electron, le lanceur fonctionne sous Windows 10/11, macOS et Linux.
  - icon: 📚
    title: Instances multiples
    details: Créez plusieurs instances pour isoler vos différentes versions, mods et paramètres de lancement.
  - icon: 🗂
    title: Gestion centralisée des ressources
    details: Utilise des liens physiques pour installer vos ressources dans les instances et optimiser l'espace disque.
  - icon: 🔥
    title: Prise en charge intégrée de CurseForge et Modrinth
    details: Téléchargez vos ressources directement depuis le lanceur.
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

Si vous utilisez winget, vous pouvez installer XMCL avec la commande suivante :

```bash
winget install CI010.XMinecraftLauncher
```

L'installation avec Homebrew est aussi offerte :

```bash
brew tap voxelum/xmcl
brew install --cask --no-quarantine voxelum/xmcl
```

### Vous souhaitez contribuer ?

Si vous voulez ajouter des fonctionnalités ou corriger des bogues, consultez [Contribuer](/fr/guide/contributing).

Si vous voulez aider à la traduction, consultez le guide [Débuter avec la localisation](https://github.com/voxelum/xmcl-page).


## Commanditaires

| [![](https://github.com/DGP-Studio/Snap.Hutao/assets/10614984/73ae8b90-f3c7-4033-b2b7-f4126331ce66)](https://www.netlify.com/) |                 Signature de code gratuite sur Windows fournie par [SignPath.io](https://signpath.io/), certificat par [SignPath Foundation](https://signpath.org/)                  |
| :----------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                        [![](/deno-logo.webp)](https://deno.com/deploy)                                         |        [Deno Deploy](https://deno.com/deploy), utilisé par XMCL comme plateforme sans serveur pour les applications JavaScript. Fourni par [Deno](https://deno.com/)        |
|                                         [![](https://bmclapidoc.bangbang93.com/assets/favicon.ico?v=1742218388684)](https://bmclapidoc.bangbang93.com/)                                         | BMCLAPI fait partie de BMCL, développé par @bangbang93 pour pallier la lenteur des connexions chinoises vers Amazon S3 utilisé par Forge et Minecraft officiel. BMCLAPI est ouvert au public et accessible à tous les lanceurs ayant besoin de ressources Minecraft. |

### AFDIAN

<!-- afdian-start -->
<!--@include: ../../parts/afdian.md-->
<!-- afdian-end -->

## Contributeurs

<a href="https://github.com/voxelum/x-minecraft-launcher/graphs/contributors" flex justify-center>
  <img src="https://contrib.rocks/image?repo=voxelum/x-minecraft-launcher" />
</a>

### Remerciements particuliers

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/86590991?v=4">

[BANER](https://github.com/BANSAFAn), qui m'aide énormément dans la communauté RU/UK.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/119564588?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/155435591?v=4">

[GodLeaveMe](https://github.com/GodLeaveMe), [v1mkss](https://github.com/v1mkss), qui maintiennent le dépôt de paquets AUR.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/52188337?v=4">

[0xc0000142](https://github.com/0xc0000142), qui maintient le paquet winget.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/109208530?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/86590991?v=4">

[Marmur2020](https://github.com/Marmur2020) et [BANSAFAn](https://github.com/BANSAFAn), qui ont entièrement traduit l'ukrainien !
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/7201687?v=4">

[vanja-san](https://github.com/vanja-san), qui a fourni la traduction russe !
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/37006668?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/11472320?v=4">

[lukechu10](https://github.com/lukechu10) et [HoldYourWaffle](https://github.com/HoldYourWaffle), qui m'aident sur le cœur du lanceur.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/25716486?v=4">

[laolarou726](https://github.com/laolarou726), qui apporte une grande aide à la conception du lanceur.
</div>

Contributeurs historiques du projet :

[Yricky](https://github.com/Yricky), [Jin](https://github.com/Indexyz), [LG](https://github.com/LasmGratel), [Phoebe](https://github.com/PhoebezZ), [Sumeng Wang](https://github.com/darkkingwsm), [Luca](https://github.com/LucaIsGenius), [Charles Tang](https://github.com/CharlesQT)

</div>
