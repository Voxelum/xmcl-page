---
outline: false
layout: home
hero:
  name: XMCL
  text: Otkrijte novo iskustvo Minecraft pokretača.
  image:
    src: /logo.png
    alt: XMCL
  actions:
    - theme: brand
      text: Preuzmi
      link: /hr/
    - theme: alt
      text: GitHub
      link: https://github.com/voxelum/x-minecraft-launcher
    - text: MIT licenca
      link: https://github.com/Voxelum/x-minecraft-launcher/blob/master/LICENSE
      theme: alt
features:
  - icon: 📥
    title: Preuzimanje i automatsko dovršavanje
    details: Podrška za preuzimanje Minecrafta, Forgea, Fabrica, Quilta, OptiFinea i JVM-a sa službenih ili zrcalnih poslužitelja trećih strana.
  - icon: ⚡️
    title: Brzo preuzimanje
    details: Ponovno korištenje mrežnih priključaka putem HTTP/HTTPS agenata i istovremeno preuzimanje datoteka u dijelovima.
  - icon: 💻
    title: Višeplatformski
    details: Pokretač se temelji na Electronu i podržava Windows 10/11, macOS i Linux.
  - icon: 📚
    title: Više instanci
    details: Stvorite više instanci za odvajanje različitih verzija, modova i postavki pokretanja.
  - icon: 🗂
    title: Upravljanje svim resursima
    details: Koristi veze za instalaciju resursa u instance i održava optimalnu potrošnju prostora na disku.
  - icon: 🔥
    title: Ugrađena podrška za CurseForge i Modrinth
    details: Preuzimajte resurse izravno unutar pokretača.
markdownStyles: false
---

<div class="vp-doc" style="margin: auto; max-width: 1180px; padding: 0 24px">

## Početak rada

<p style="display: flex; gap: 4px;">
  <a href="https://github.com/Voxelum/x-minecraft-launcher">
    <img src="https://github.com/Voxelum/x-minecraft-launcher/workflows/Build/badge.svg" alt="Build">
  </a>
  <a href="https://github.com/Voxelum/x-minecraft-launcher/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/@xmcl/core.svg" alt="License">
  </a>
  <a href="https://conventionalcommits.org">
    <img src="https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg" alt="Commit">
  </a>
  <br>
  <a href="https://kook.top/gqjSHh">
    <img src="https://img.shields.io/endpoint?url=https://api.xmcl.app/kook-badge" alt="Kook">
  </a>
</p>

Ako imate winget, možete ga koristiti za instalaciju:

```bash
winget install CI010.XMinecraftLauncher
```

Instalacija putem Homebrewa također je dostupna putem tapa:

```bash
brew tap voxelum/xmcl
brew install --cask --no-quarantine voxelum/xmcl
```

### Želite doprinijeti?

Ako želite dodati značajke ili ispraviti greške, pogledajte [Vodič za doprinos](/en/guide/contributing).

Ako želite pomoći s prijevodom, slijedite [Upute za lokalizaciju](https://github.com/voxelum/xmcl-page).


## Sponzorstvo

| [![](https://github.com/DGP-Studio/Snap.Hutao/assets/10614984/73ae8b90-f3c7-4033-b2b7-f4126331ce66)](https://www.netlify.com/) | Besplatno potpisivanje koda na Windowsu omogućuje [SignPath.io](https://signpath.io/), certifikat osigurava [SignPath Foundation](https://signpath.org/) |
| :----------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                        [![](/deno-logo.webp)](https://deno.com/deploy)                                         | [Deno Deploy](https://deno.com/deploy), XMCL koristi njegovu jednostavnu platformu za serverless JavaScript aplikacije. Omogućuje [Deno](https://deno.com/) |
|                                         [![](https://bmclapidoc.bangbang93.com/assets/favicon.ico?v=1742218388684)](https://bmclapidoc.bangbang93.com/)                                         | BMCLAPI je dio BMCL-a koji je razvio @bangbang93 za rješavanje problema sporog preuzimanja s Amazon S3 poslužitelja za Forge i Minecraft. BMCLAPI je javno dostupan svim pokretačima kojima su potrebni Minecraft resursi. |

### AFDIAN

<!-- afdian-start -->
<!--@include: ../../parts/afdian.md-->
<!-- afdian-end -->

## Suradnici

<a href="https://github.com/voxelum/x-minecraft-launcher/graphs/contributors" flex justify-center>
  <img src="https://contrib.rocks/image?repo=voxelum/x-minecraft-launcher" />
</a>

### Posebne zahvale

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/86590991?v=4">

[BANER](https://github.com/BANSAFAn), koji puno pomaže u RU/UK zajednici.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/119564588?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/155435591?v=4">

[GodLeaveMe](https://github.com/GodLeaveMe), [v1mkss](https://github.com/v1mkss), održavaju AUR paket.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/52188337?v=4">

[0xc0000142](https://github.com/0xc0000142), održava winget paket.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/109208530?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/86590991?v=4">

[Marmur2020](https://github.com/Marmur2020) i [BANSAFAn](https://github.com/BANSAFAn), u potpunosti preveli ukrajinski jezik!
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/7201687?v=4">

[vanja-san](https://github.com/vanja-san), osigurao ruski prijevod!
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/37006668?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/11472320?v=4">

[lukechu10](https://github.com/lukechu10) i [HoldYourWaffle](https://github.com/HoldYourWaffle), pomažu na jezgri pokretača.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/25716486?v=4">

[laolarou726](https://github.com/laolarou726), koji puno pomaže u dizajnu pokretača.
</div>

Suradnici na starijem projektu:

[Yricky](https://github.com/Yricky), [Jin](https://github.com/Indexyz), [LG](https://github.com/LasmGratel), [Phoebe](https://github.com/PhoebezZ), [Sumeng Wang](https://github.com/darkkingwsm), [Luca](https://github.com/LucaIsGenius), [Charles Tang](https://github.com/CharlesQT)

</div>
