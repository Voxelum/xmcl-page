---
outline: false
layout: home
hero:
  name: XMCL
  text: Fedezd fel a Minecraft-indítók új élményét.
  image:
    src: /logo.png
    alt: XMCL
  actions:
    - theme: brand
      text: Letöltés
      link: /hu/
    - theme: alt
      text: GitHub
      link: https://github.com/voxelum/x-minecraft-launcher
    - text: MIT licenc
      link: https://github.com/Voxelum/x-minecraft-launcher/blob/master/LICENSE
      theme: alt
features:
  - icon: 📥
    title: Letöltés és automatikus kiegészítés
    details: Támogatja a Minecraft, Forge, Fabric, Quilt, OptiFine és JVM letöltését hivatalos vagy külső tükrökről.
  - icon: ⚡️
    title: Gyors letöltés
    details: HTTP/HTTPS kapcsolatok újrafelhasználása és párhuzamos, darabolt fájletöltés.
  - icon: 💻
    title: Platformfüggetlen
    details: Az indító Electron alapú, és támogatja a Windows 10/11, macOS és Linux rendszereket.
  - icon: 📚
    title: Többpéldányos kezelés
    details: Hozz létre több példányt a különböző verziók, modok és indítási beállítások elkülönítéséhez.
  - icon: 🗂
    title: Összes erőforrás kezelése
    details: Hivatkozások (linkek) segítségével telepíti az erőforrásokat a példányokba, optimálisan tartva a tárhelyhasználatot.
  - icon: 🔥
    title: Beépített CurseForge és Modrinth támogatás
    details: Tölts le erőforrásokat közvetlenül az indítón belül.
markdownStyles: false
---

<div class="vp-doc" style="margin: auto; max-width: 1180px; padding: 0 24px">

## Első lépések

<p style="display: flex; gap: 4px;">
  <a href="https://github.com/Voxelum/x-minecraft-launcher">
    <img src="https://github.com/Voxelum/x-minecraft-launcher/workflows/Build/badge.svg" alt="Build">
  </a>
  <a href="https://github.com/Voxelum/x-minecraft-launcher/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/@xmcl/core.svg" alt="Licenc">
  </a>
  <a href="https://conventionalcommits.org">
    <img src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg" alt="Commit">
  </a>
  <br>
  <a href="https://kook.top/gqjSHh">
    <img src="https://img.shields.io/endpoint?url=https://api.xmcl.app/kook-badge" alt="Kook">
  </a>
</p>

Ha rendelkezel wingettel, az alábbi paranccsal telepítheted:

```bash
winget install CI010.XMinecraftLauncher
```

Homebrew telepítés is elérhető tap segítségével:

```bash
brew tap voxelum/xmcl
brew install --cask --no-quarantine voxelum/xmcl
```

### Szeretnél közreműködni?

Ha funkciókat szeretnél hozzáadni vagy hibákat javítani, tekintsd meg a [Közreműködési útmutatót](/en/guide/contributing).

Ha a fordításban szeretnél segíteni, kövesd a [Honosítási útmutatót](https://github.com/voxelum/xmcl-page).


## Támogatók

| [![](https://github.com/DGP-Studio/Snap.Hutao/assets/10614984/73ae8b90-f3c7-4033-b2b7-f4126331ce66)](https://www.netlify.com/) |                 Ingyenes Windows-kódaláírást biztosít a [SignPath.io](https://signpath.io/), a tanúsítványt a [SignPath Foundation](https://signpath.org/) adja                  |
| :----------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                        [![](/deno-logo.webp)](https://deno.com/deploy)                                         |        [Deno Deploy](https://deno.com/deploy) – az XMCL a gondtalan, szerver nélküli JavaScript-platformját használja, a [Deno](https://deno.com/) támogatásával        |
|                                         [![](https://bmclapidoc.bangbang93.com/assets/favicon.ico?v=1742218388684)](https://bmclapidoc.bangbang93.com/)                                         | A BMCLAPI a @bangbang93 által fejlesztett BMCL része, amely a Forge és a Minecraft hivatalos Amazon S3 szervereinek lassú elérését oldja meg. A BMCLAPI nyitott minden Minecraft-erőforrásokat használó indító számára. |

### AFDIAN

<!-- afdian-start -->
<!--@include: ../../parts/afdian.md-->
<!-- afdian-end -->

## Közreműködők

<a href="https://github.com/voxelum/x-minecraft-launcher/graphs/contributors" flex justify-center>
  <img src="https://contrib.rocks/image?repo=voxelum/x-minecraft-launcher" />
</a>

### Külön köszönet

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/86590991?v=4">

[BANER](https://github.com/BANSAFAn), aki rengeteget segít az orosz/ukrán közösségben.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/119564588?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/155435591?v=4">

[GodLeaveMe](https://github.com/GodLeaveMe), [v1mkss](https://github.com/v1mkss), az AUR csomagtár karbantartói.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/52188337?v=4">

[0xc0000142](https://github.com/0xc0000142), a winget csomag karbantartója.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/109208530?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/86590991?v=4">

[Marmur2020](https://github.com/Marmur2020) és [BANSAFAn](https://github.com/BANSAFAn), akik elkészítették a teljes ukrán fordítást!
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/7201687?v=4">

[vanja-san](https://github.com/vanja-san), aki az orosz fordítást biztosította!
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/37006668?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/11472320?v=4">

[lukechu10](https://github.com/lukechu10) és [HoldYourWaffle](https://github.com/HoldYourWaffle), akik az indító alaprendszerén segítenek.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/25716486?v=4">

[laolarou726](https://github.com/laolarou726), aki sokat segített az indító dizájnjában.
</div>

A projekt korábbi közreműködői:

[Yricky](https://github.com/Yricky), [Jin](https://github.com/Indexyz), [LG](https://github.com/LasmGratel), [Phoebe](https://github.com/PhoebezZ), [Sumeng Wang](https://github.com/darkkingwsm), [Luca](https://github.com/LucaIsGenius), [Charles Tang](https://github.com/CharlesQT)

</div>
