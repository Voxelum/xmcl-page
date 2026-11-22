---
outline: false
layout: home
hero:
  name: XMCL
  text: Odkrijte drugačno izkušnjo zaganjalnika za Minecraft.
  image:
    src: /logo.png
    alt: XMCL
  actions:
    - theme: brand
      text: Prenos
      link: /sl/
    - theme: alt
      text: GitHub
      link: https://github.com/voxelum/x-minecraft-launcher
    - text: Licenca MIT
      link: https://github.com/Voxelum/x-minecraft-launcher/blob/master/LICENSE
      theme: alt
features:
  - icon: 📥
    title: Prenos in samodejno dopolnjevanje
    details: Podpira prenos Minecrafta, Forge, Fabric, Quilt, OptiFine in JVM iz uradnih ali zunanjih zrcalnih strežnikov.
  - icon: ⚡️
    title: Hiter prenos
    details: Ponovno uporablja vtičnice prek posrednikov HTTP/HTTPS in vzporedno prenaša datoteke po delih.
  - icon: 💻
    title: Večplatformski
    details: Zaganjalnik temelji na ogrodju Electron ter podpira Windows 10/11, macOS in Linux.
  - icon: 📚
    title: Več primerkov
    details: Ustvarite več primerkov za ločevanje različnih različic, modov in zagonskih nastavitev.
  - icon: 🗂
    title: Upravljanje vseh virov
    details: Uporablja trde povezave za nameščanje virov v primerke in ohranja porabo diska optimalno.
  - icon: 🔥
    title: Vgrajena podpora za CurseForge in Modrinth
    details: Prenašajte vire neposredno v zaganjalniku.
markdownStyles: false
---

<div class="vp-doc" style="margin: auto; max-width: 1180px; padding: 0 24px">

## Začetek

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

Če imate winget, ga lahko uporabite za namestitev:

```bash
winget install CI010.XMinecraftLauncher
```

Namestitev prek Homebrew je prav tako na voljo prek repozitorija tap:

```bash
brew tap voxelum/xmcl
brew install --cask --no-quarantine voxelum/xmcl
```

### Želite prispevati?

Če želite dodati funkcije ali odpraviti napake, si oglejte [Prispevanje](/en/guide/contributing).

Če želite pomagati pri prevajanju, sledite [vodniku za lokalizacijo](https://github.com/voxelum/xmcl-page).


## Sponzorstvo

| [![](https://github.com/DGP-Studio/Snap.Hutao/assets/10614984/73ae8b90-f3c7-4033-b2b7-f4126331ce66)](https://www.netlify.com/) |                 Brezplačno podpisovanje kode za Windows zagotavlja [SignPath.io](https://signpath.io/), potrdilo izdaja [SignPath Foundation](https://signpath.org/)                  |
| :----------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                        [![](/deno-logo.webp)](https://deno.com/deploy)                                         |        [Deno Deploy](https://deno.com/deploy): XMCL uporablja njegovo preprosto platformo za brezstrežniške aplikacije JavaScript. Zagotavlja [Deno](https://deno.com/)        |
|                                         [![](https://bmclapidoc.bangbang93.com/assets/favicon.ico?v=1742218388684)](https://bmclapidoc.bangbang93.com/)                                         | BMCLAPI je del projekta BMCL avtorja @bangbang93, zasnovan za odpravo počasnih povezav do uradnih virov Forge in Minecraft na Amazon S3. BMCLAPI je javno odprt za vse zaganjalnike Minecraft. |

### AFDIAN

<!-- afdian-start -->
<!--@include: ../../parts/afdian.md-->
<!-- afdian-end -->

## Prispevatelji

<a href="https://github.com/voxelum/x-minecraft-launcher/graphs/contributors" flex justify-center>
  <img src="https://contrib.rocks/image?repo=voxelum/x-minecraft-launcher" />
</a>

### Posebna zahvala

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/86590991?v=4">

[BANER](https://github.com/BANSAFAn), za veliko pomoč v skupnosti RU/UK.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/119564588?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/155435591?v=4">

[GodLeaveMe](https://github.com/GodLeaveMe), [v1mkss](https://github.com/v1mkss), vzdrževanje registra paketov AUR.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/52188337?v=4">

[0xc0000142](https://github.com/0xc0000142), vzdrževanje paketa winget.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/109208530?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/86590991?v=4">

[Marmur2020](https://github.com/Marmur2020) in [BANSAFAn](https://github.com/BANSAFAn), za celoten prevod v ukrajinščino!
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/7201687?v=4">

[vanja-san](https://github.com/vanja-san), za prevod v ruščino!
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/37006668?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/11472320?v=4">

[lukechu10](https://github.com/lukechu10) in [HoldYourWaffle](https://github.com/HoldYourWaffle), za pomoč pri jedru zaganjalnika.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/25716486?v=4">

[laolarou726](https://github.com/laolarou726), za veliko pomoč pri oblikovanju zaganjalnika.
</div>

Nekdanji prispevatelji projekta:

[Yricky](https://github.com/Yricky), [Jin](https://github.com/Indexyz), [LG](https://github.com/LasmGratel), [Phoebe](https://github.com/PhoebezZ), [Sumeng Wang](https://github.com/darkkingwsm), [Luca](https://github.com/LucaIsGenius), [Charles Tang](https://github.com/CharlesQT)

</div>
