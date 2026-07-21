<!-- filepath: d:\Workspace\xmcl-page\src\ru\about.md -->
---
outline: false
layout: home
hero:
  name: X Minecraft Launcher
  text: Откройте для себя новый опыт использования лаунчера Minecraft.
  image:
    src: /logo.png
    alt: X Minecraft Launcher
  actions:
    - theme: brand
      text: Скачать
      link: /ru/
    - theme: alt
      text: GitHub
      link: https://github.com/voxelum/x-minecraft-launcher
    - text: MIT Лицензия
      link: https://github.com/Voxelum/x-minecraft-launcher/blob/master/LICENSE
      theme: alt
features:
  - icon: 📥
    title: Загрузка и автозаполнение
    details: Поддерживает загрузку Minecraft, Forge, Fabric, Quilt, OptiFine, JVM из официальных или сторонних зеркал.
  - icon: ⚡️
    title: Быстрая загрузка
    details: Повторное использование сокетов через агенты HTTP/HTTPS и одновременная загрузка файлов частями.
  - icon: 💻
    title: Кросс-платформенность
    details: Лаунчер основан на Electron и поддерживает Windows 10/11, MacOS и Linux.
  - icon: 📚
    title: Множество экземпляров
    details: Создавайте несколько экземпляров для изоляции разных версий, модов и настроек запуска.
  - icon: 🗂
    title: Управление всеми ресурсами
    details: Используйте ссылки для установки ресурсов в экземпляры, оптимизируя использование диска.
  - icon: 🔥
    title: Встроенная поддержка CurseForge и Modrinth
    details: Загружайте ресурсы прямо внутри лаунчера.
markdownStyles: false
---

<div class="vp-doc" style="margin: auto; max-width: 1180px; padding: 0 24px">

## Начало работы

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

Если у вас есть winget, вы можете использовать его для установки

```bash
winget install CI010.XMinecraftLauncher
```

Также доступна установка через HomeBrew

```bash
brew tap voxelum/xmcl
brew install --cask --no-quarantine voxelum/xmcl
```

### Хотите внести вклад?

Если вы хотите добавить функции или исправить ошибки, см. [Участие в разработке](/ru/guide/contributing)

Если вы хотите помочь с переводом, следуйте [Начало работы с локализацией](/ru/guide/i18n).


## Спонсорство

| [![](https://github.com/DGP-Studio/Snap.Hutao/assets/10614984/73ae8b90-f3c7-4033-b2b7-f4126331ce66)](https://www.netlify.com/) |                 Бесплатная подпись кода в Windows предоставлена [SignPath.io](https://signpath.io/), сертификат от [SignPath Foundation](https://signpath.org/)                  |
| :----------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                        [![](/deno-logo.webp)](https://deno.com/deploy)                                         |        [Deno Deploy](https://deno.com/deploy), XMCL использует эту безпроблемную платформу для бессерверных JavaScript-приложений. Предоставлено [Deno](https://deno.com/)        |
|                                         [![](https://bmclapidoc.bangbang93.com/assets/favicon.ico?v=1742218388684)](https://bmclapidoc.bangbang93.com/)                                         | BMCLAPI - это часть BMCL, разработанная @bangbang93, для решения проблемы медленного соединения с Amazon S3, используемых Forge и официальным Minecraft, в Китае. BMCLAPI открыт для общего доступа, и его могут использовать все лаунчеры, требующие ресурсы Minecraft. |

### AFDIAN

<!-- afdian-start -->
<!--@include: ../../parts/afdian.md-->
<!-- afdian-end -->

## Участники

<a href="https://github.com/voxelum/x-minecraft-launcher/graphs/contributors" flex justify-center>
  <img src="https://contrib.rocks/image?repo=voxelum/x-minecraft-launcher" />
</a>

### Особая благодарность

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/86590991?v=4">

[BANER](https://github.com/BANSAFAn), который очень помогает мне в сообществах RU/UK.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/119564588?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/155435591?v=4">

[GodLeaveMe](https://github.com/GodLeaveMe), [v1mkss](https://github.com/v1mkss), поддерживают реестр пакетов AUR.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/52188337?v=4">

[0xc0000142](https://github.com/0xc0000142), поддерживает winget.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/109208530?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/86590991?v=4">

[Marmur2020](https://github.com/Marmur2020) и [BANSAFAn](https://github.com/BANSAFAn), полностью перевели украинский язык!
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/7201687?v=4">

[vanja-san](https://github.com/vanja-san), предоставил русский язык!
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/37006668?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/11472320?v=4">

[lukechu10](https://github.com/lukechu10) и [HoldYourWaffle](https://github.com/HoldYourWaffle) помогают мне с ядром лаунчера.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/25716486?v=4">

[laolarou726](https://github.com/laolarou726), который много помогает с дизайном лаунчера.
</div>

Участники наследуемого проекта:

[Yricky](https://github.com/Yricky), [Jin](https://github.com/Indexyz), [LG](https://github.com/LasmGratel), [Phoebe](https://github.com/PhoebezZ), [Sumeng Wang](https://github.com/darkkingwsm), [Luca](https://github.com/LucaIsGenius), [Charles Tang](https://github.com/CharlesQT)

</div>
