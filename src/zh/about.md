---
outline: false
layout: home
hero:
  name: X Minecraft Launcher
  text: 体验不一样的 Minecraft 启动器。
  image:
    src: /logo.png
    alt: X Minecraft Launcher
  actions:
    - theme: brand
      text: 下载
      link: /zh/
    - theme: alt
      text: GitHub
      link: https://github.com/voxelum/x-minecraft-launcher
    - text: MIT 许可证
      link: https://github.com/Voxelum/x-minecraft-launcher/blob/master/LICENSE
      theme: alt
features:
  - icon: 📥
    title: 自动下载与补全
    details: 支持下载 Minecraft、Forge、Fabric、Quilt、OptiFine、JVM，可以从官方或第三方镜像下载。
  - icon: ⚡️
    title: 下载飞快
    details: 通过 HTTP/HTTPS 代理复用 Socket，并发部分下载文件。
  - icon: 💻
    title: 跨平台
    details: 启动器基于 Electron，支持 Windows 10/11、MacOS 和 Linux。
  - icon: 📚
    title: 多实例
    details: 创建多个实例以隔离不同的版本、模组和启动设置。
  - icon: 🗂
    title: 管理所有资源
    details: 使用链接在实例中安装资源，保持磁盘使用最优。
  - icon: 🔥
    title: 内置支持 CurseForge 和 Modrinth
    details: 在启动器内直接下载资源。
---

<div class="vp-doc" style="margin: auto; max-width: 1180px; padding: 0 24px">

## 开始使用

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

如果你有 winget，你可以使用 winget 安装

```bash
winget install CI010.XMinecraftLauncher
```

HomeBrew 也可使用

```bash
brew tap voxelum/xmcl
brew install --cask --no-quarantine voxelum/xmcl
```

### 想要参与贡献？

如果你想要添加功能或修复 bug，请查看 [参与贡献](/zh/guide/contributing)

如果你想要帮助翻译，请按照 [本地化入门](/en/guide/i18n) 进行。


## 赞助

| [![](https://github.com/DGP-Studio/Snap.Hutao/assets/10614984/73ae8b90-f3c7-4033-b2b7-f4126331ce66)](https://www.netlify.com/) |                 [SignPath.io](https://signpath.io/)提供的免费的 Windows 代码签名，证书来自 [SignPath Foundation](https://signpath.org/)                  |
| :----------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                        [![](/deno-logo.webp)](https://deno.com/deploy)                                         |        [Deno Deploy](https://deno.com/deploy)，XMCL 利用其无忧平台部署 JavaScript 无服务器应用程序。由 [Deno](https://deno.com/) 提供支持        |
|                                         [![](https://bmclapidoc.bangbang93.com/assets/favicon.ico?v=1742218388684)](https://bmclapidoc.bangbang93.com/)                                         | BMCLAPI是@bangbang93开发的BMCL的一部分，用于解决国内线路对Forge和Minecraft官方使用的Amazon S3 速度缓慢的问题。BMCLAPI是对外开放的，所有需要Minecraft资源的启动器均可调用。 |

### 赞助（爱发电）

<!-- afdian-start -->
<!--@include: ../../parts/afdian.md-->
<!-- afdian-end -->

## 贡献者

<a href="https://github.com/voxelum/x-minecraft-launcher/graphs/contributors" flex justify-center>
  <img src="https://contrib.rocks/image?repo=voxelum/x-minecraft-launcher" />
</a>

### 特别感谢

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/86590991?v=4">

[BANER](https://github.com/BANSAFAn)，他在 RU/UK 社区帮了我很多忙。
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/119564588?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/155435591?v=4">

[GodLeaveMe](https://github.com/GodLeaveMe), [v1mkss](https://github.com/v1mkss)，维护 AUR 包注册表。
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/52188337?v=4">

[0xc0000142](https://github.com/0xc0000142)，维护 winget。
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/109208530?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/86590991?v=4">

[Marmur2020](https://github.com/Marmur2020) 和 [BANSAFAn](https://github.com/BANSAFAn)，完全翻译了乌克兰语！
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/7201687?v=4">

[vanja-san](https://github.com/vanja-san)，提供俄语！
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/37006668?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/11472320?v=4">

[lukechu10](https://github.com/lukechu10) 和 [HoldYourWaffle](https://github.com/HoldYourWaffle) 在启动器核心上帮助了我。
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/25716486?v=4">

[laolarou726](https://github.com/laolarou726)，在启动器设计上提供了很多帮助。
</div>

历史项目贡献者：

[Yricky](https://github.com/Yricky), [Jin](https://github.com/Indexyz), [LG](https://github.com/LasmGratel), [Phoebe](https://github.com/PhoebezZ), [Sumeng Wang](https://github.com/darkkingwsm), [Luca](https://github.com/LucaIsGenius), [Charles Tang](https://github.com/CharlesQT)

</div>
