---
outline: false
layout: home
hero:
  name: X Minecraft Launcher
  text: Minecraft лаунчері туралы түрлі тәжірибелерді ашыңыз.
  image:
    src: /logo.png
    alt: X Minecraft Launcher
  actions:
    - theme: brand
      text: Жүктеу
      link: /kk/
    - theme: alt
      text: GitHub
      link: https://github.com/voxelum/x-minecraft-launcher
    - text: MIT Лицензиясы
      link: https://github.com/Voxelum/x-minecraft-launcher/blob/master/LICENSE
      theme: alt
features:
  - icon: 📥
    title: Жүктеу және автотолтыру
    details: Minecraft, Forge, Fabric, Quilt, OptiFine, JVM жүктеуді ресми немесе үшінші тарап айналарынан қолдайды.
  - icon: ⚡️
    title: Жылдам жүктеу
    details: HTTP/HTTPS агенттері арқылы сокетті қайта пайдалану және файлдарды бөліктермен бір уақытта жүктеу.
  - icon: 💻
    title: Кросс-платформа
    details: Лаунчер Electron-ға негізделген және Windows 10/11, MacOS және Linux-ты қолдайды.
  - icon: 📚
    title: Мульти-данасы
    details: Түрлі нұсқаларды, модтарды және іске қосу параметрлерін оқшаулау үшін бірнеше данасын жасаңыз.
  - icon: 🗂
    title: Барлық ресурстарды басқару
    details: Даналарда ресурстарды орнату үшін сілтемелерді пайдаланып, диск қолданысын оңтайлы ұстаңыз.
  - icon: 🔥
    title: CurseForge және Modrinth-ті кіріктірілген қолдау
    details: Лаунчер ішінде тікелей ресурстарды жүктеңіз.
markdownStyles: false
---

<div class="vp-doc" style="margin: auto; max-width: 1180px; padding: 0 24px">

## Бастау

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

Егер сізде winget болса, winget арқылы орнатуға болады

```bash
winget install CI010.XMinecraftLauncher
```

HomeBrew арқылы орнату да қолжетімді

```bash
brew tap voxelum/xmcl
brew install --cask --no-quarantine voxelum/xmcl
```

### Үлес қосқыңыз келе ме?

Егер функцияларды қосқыңыз немесе қателерді түзеткіңіз келсе, [Үлес қосу](/kk/guide/contributing) бөлімін қараңыз

Егер аудармаға көмектескіңіз келсе, [Жерсіндіруді бастау](/en/guide/i18n) нұсқауларын орындаңыз.


## Демеушілер

| [![](https://github.com/DGP-Studio/Snap.Hutao/assets/10614984/73ae8b90-f3c7-4033-b2b7-f4126331ce66)](https://www.netlify.com/) |                 Windows-та тегін код қол қою [SignPath.io](https://signpath.io/) арқылы қамтамасыз етілді, сертификатты [SignPath Foundation](https://signpath.org/) берді                  |
| :----------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                        [![](/deno-logo.webp)](https://deno.com/deploy)                                         |        [Deno Deploy](https://deno.com/deploy), XMCL серверсіз JavaScript қолданбалары үшін оңай платформасын пайдаланады. [Deno](https://deno.com/) арқылы қамтамасыз етілген        |
|                                         [![](https://bmclapidoc.bangbang93.com/assets/favicon.ico?v=1742218388684)](https://bmclapidoc.bangbang93.com/)                                         | BMCLAPI - бұл @bangbang93 жасаған BMCL бөлігі, Қытайдан Forge және Minecraft ресми қолданатын Amazon S3 баяу байланыс мәселесін шешуге арналған. BMCLAPI ашық қол жетімді, Minecraft ресурстарын қажет ететін барлық лаунчерлер оны қолдана алады. |

### AFDIAN

<!-- afdian-start -->
<!--@include: ../../parts/afdian.md-->
<!-- afdian-end -->

## Үлес қосушылар

<a href="https://github.com/voxelum/x-minecraft-launcher/graphs/contributors" flex justify-center>
  <img src="https://contrib.rocks/image?repo=voxelum/x-minecraft-launcher" />
</a>

### Ерекше алғыс

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/86590991?v=4">

[BANER](https://github.com/BANSAFAn), RU/UK қауымдастықтарында маған көп көмектеседі.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/119564588?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/155435591?v=4">

[GodLeaveMe](https://github.com/GodLeaveMe), [v1mkss](https://github.com/v1mkss), AUR пакет тізілімін қолдайды.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/52188337?v=4">

[0xc0000142](https://github.com/0xc0000142), winget-ті қолдайды.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/109208530?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/86590991?v=4">

[Marmur2020](https://github.com/Marmur2020) және [BANSAFAn](https://github.com/BANSAFAn), украин тіліне толық аударма жасады!
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/7201687?v=4">

[vanja-san](https://github.com/vanja-san), орыс тілін ұсынды!
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/37006668?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/11472320?v=4">

[lukechu10](https://github.com/lukechu10) және [HoldYourWaffle](https://github.com/HoldYourWaffle) лаунчер ядросымен көмектеседі.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/25716486?v=4">

[laolarou726](https://github.com/laolarou726), лаунчер дизайнында көп көмектеседі.
</div>

Бұрынғы жоба қатысушылары:

[Yricky](https://github.com/Yricky), [Jin](https://github.com/Indexyz), [LG](https://github.com/LasmGratel), [Phoebe](https://github.com/PhoebezZ), [Sumeng Wang](https://github.com/darkkingwsm), [Luca](https://github.com/LucaIsGenius), [Charles Tang](https://github.com/CharlesQT)

</div>
