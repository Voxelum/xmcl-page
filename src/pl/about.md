<!-- filepath: d:\Workspace\xmcl-page\src\pl\about.md -->
---
outline: false
layout: home
hero:
  name: XMCL
  text: Odkryj inne doświadczenia związane z launcherem Minecraft.
  image:
    src: /logo.png
    alt: XMCL
  actions:
    - theme: brand
      text: Pobierz
      link: /pl/
    - theme: alt
      text: GitHub
      link: https://github.com/voxelum/x-minecraft-launcher
    - text: Licencja MIT
      link: https://github.com/Voxelum/x-minecraft-launcher/blob/master/LICENSE
      theme: alt
features:
  - icon: 📥
    title: Pobieranie i automatyczne uzupełnianie
    details: Obsługuje pobieranie Minecraft, Forge, Fabric, Quilt, OptiFine, JVM z oficjalnych lub zewnętrznych serwerów lustrzanych.
  - icon: ⚡️
    title: Szybkie pobieranie
    details: Ponowne wykorzystanie gniazd przez agenty HTTP/HTTPS i równoczesne pobieranie części plików.
  - icon: 💻
    title: Wieloplatformowość
    details: Launcher oparty jest na Electron i obsługuje Windows 10/11, MacOS i Linux.
  - icon: 📚
    title: Wiele instancji
    details: Twórz wiele instancji, aby izolować różne wersje, mody i ustawienia uruchamiania.
  - icon: 🗂
    title: Zarządzanie wszystkimi zasobami
    details: Używaj linków do instalowania zasobów w instancjach, utrzymując optymalne wykorzystanie dysku.
  - icon: 🔥
    title: Wbudowana obsługa CurseForge i Modrinth
    details: Pobieraj zasoby bezpośrednio w launcherze.
markdownStyles: false
---

<div class="vp-doc" style="margin: auto; max-width: 1180px; padding: 0 24px">

## Pierwsze kroki

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

Jeśli masz winget, możesz go użyć do instalacji

```bash
winget install CI010.XMinecraftLauncher
```

Instalacja przez HomeBrew również dostępna przez tap

```bash
brew tap voxelum/xmcl
brew install --cask --no-quarantine voxelum/xmcl
```

### Chcesz się przyczynić?

Jeśli chcesz dodać funkcje lub naprawić błędy, zobacz [Udział w rozwoju](/pl/guide/contributing)

Jeśli chcesz pomóc w tłumaczeniu, postępuj zgodnie z [Wprowadzenie do lokalizacji](/en/guide/i18n).


## Sponsorzy

| [![](https://github.com/DGP-Studio/Snap.Hutao/assets/10614984/73ae8b90-f3c7-4033-b2b7-f4126331ce66)](https://www.netlify.com/) |                 Darmowe podpisywanie kodu w Windows dostarczone przez [SignPath.io](https://signpath.io/), certyfikat przez [SignPath Foundation](https://signpath.org/)                  |
| :----------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                        [![](/deno-logo.webp)](https://deno.com/deploy)                                         |        [Deno Deploy](https://deno.com/deploy), XMCL wykorzystuje tę bezproblemową platformę do bezserwerowych aplikacji JavaScript. Dostarczone przez [Deno](https://deno.com/)        |
|                                         [![](https://bmclapidoc.bangbang93.com/assets/favicon.ico?v=1742218388684)](https://bmclapidoc.bangbang93.com/)                                         | BMCLAPI to część BMCL opracowana przez @bangbang93 w celu rozwiązania problemu wolnego połączenia z Amazon S3 używanego przez Forge i oficjalnego Minecrafta w Chinach. BMCLAPI jest dostępny publicznie, wszystkie launchery wymagające zasobów Minecraft mogą go używać. |

### AFDIAN

<!-- afdian-start -->
<!--@include: ../../parts/afdian.md-->
<!-- afdian-end -->

## Współtwórcy

<a href="https://github.com/voxelum/x-minecraft-launcher/graphs/contributors" flex justify-center>
  <img src="https://contrib.rocks/image?repo=voxelum/x-minecraft-launcher" />
</a>

### Specjalne podziękowania

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/86590991?v=4">

[BANER](https://github.com/BANSAFAn), który pomaga mi bardzo w społecznościach RU/UK.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/119564588?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/155435591?v=4">

[GodLeaveMe](https://github.com/GodLeaveMe), [v1mkss](https://github.com/v1mkss), utrzymują rejestr pakietów AUR.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/52188337?v=4">

[0xc0000142](https://github.com/0xc0000142), utrzymuje winget.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/109208530?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/86590991?v=4">

[Marmur2020](https://github.com/Marmur2020) i [BANSAFAn](https://github.com/BANSAFAn), całkowicie przetłumaczyli język ukraiński!
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/7201687?v=4">

[vanja-san](https://github.com/vanja-san), dostarczył język rosyjski!
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/37006668?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/11472320?v=4">

[lukechu10](https://github.com/lukechu10) i [HoldYourWaffle](https://github.com/HoldYourWaffle) pomagają mi z rdzeniem launchera.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/25716486?v=4">

[laolarou726](https://github.com/laolarou726), który bardzo pomaga przy projektowaniu launchera.
</div>

Współtwórcy starszego projektu:

[Yricky](https://github.com/Yricky), [Jin](https://github.com/Indexyz), [LG](https://github.com/LasmGratel), [Phoebe](https://github.com/PhoebezZ), [Sumeng Wang](https://github.com/darkkingwsm), [Luca](https://github.com/LucaIsGenius), [Charles Tang](https://github.com/CharlesQT)

</div>
