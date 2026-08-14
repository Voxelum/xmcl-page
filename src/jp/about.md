---
outline: false
layout: home
hero:
  name: XMCL
  text: マインクラフトのランチャーの新しい体験を発見します。
  image:
    src: /logo.png
    alt: XMCL
  actions:
    - theme: brand
      text: ダウンロード
      link: /jp/
    - theme: alt
      text: GitHub
      link: https://github.com/voxelum/x-minecraft-launcher
    - text: MIT ライセンス
      link: https://github.com/Voxelum/x-minecraft-launcher/blob/master/LICENSE
      theme: alt
features:
  - icon: 📥
    title: ダウンロードと自動補完
    details: Minecraft、Forge、Fabric、Quilt、OptiFine、JVMの公式またはサードパーティのミラーからのダウンロードをサポートします。
  - icon: ⚡️
    title: 高速ダウンロード
    details: HTTP/HTTPSエージェントを通じてソケットを再利用し、ファイルを同時に部分的にダウンロードします。
  - icon: 💻
    title: クロスプラットフォーム
    details: ランチャーはElectronをベースにしており、Windows 10/11、MacOS、およびLinuxをサポートしています。
  - icon: 📚
    title: マルチインスタンス
    details: 複数のインスタンスを作成して、異なるバージョン、MOD、起動設定を分離します。
  - icon: 🗂
    title: すべてのリソースを管理
    details: リンクを使用してインスタンスにリソースをインストールし、ディスク使用量を最適に保ちます。
  - icon: 🔥
    title: CurseForgeとModrinthの組み込みサポート
    details: ランチャー内で直接リソースをダウンロードできます。
markdownStyles: false
---

<div class="vp-doc" style="margin: auto; max-width: 1180px; padding: 0 24px">

## はじめに

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

wingetをお持ちの方は、wingetを使ってインストールできます

```bash
winget install CI010.XMinecraftLauncher
```

HomeBrewのインストールも利用可能です

```bash
brew tap voxelum/xmcl
brew install --cask --no-quarantine voxelum/xmcl
```

### 貢献したい？

機能を追加したりバグを修正したい場合は、[貢献する](/jp/guide/contributing)をご覧ください。

翻訳を手伝いたい場合は、[ローカライゼーションの開始](/en/guide/i18n)をご覧ください。


## スポンサー

| [![](https://github.com/DGP-Studio/Snap.Hutao/assets/10614984/73ae8b90-f3c7-4033-b2b7-f4126331ce66)](https://www.netlify.com/) |                 Windows でのコード署名は [SignPath.io](https://signpath.io/) が無償提供、認証は [SignPath Foundation](https://signpath.org/) から提供されています                  |
| :----------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                        [![](/deno-logo.webp)](https://deno.com/deploy)                                         |        [Deno Deploy](https://deno.com/deploy)、XMCL はこのプラットフォームを活用してサーバーレス JavaScript アプリケーションを簡単にデプロイしています。[Deno](https://deno.com/) によって提供されています        |
|                                         [![](https://bmclapidoc.bangbang93.com/assets/favicon.ico?v=1742218388684)](https://bmclapidoc.bangbang93.com/)                                         | BMCLAPI は @bangbang93 が開発した BMCL の一部で、中国国内からの Forge と Minecraft が公式に使用する Amazon S3 への接続速度問題を解決するためのものです。BMCLAPI は公開されており、Minecraft リソースを必要とするすべてのランチャーで利用できます。 |

### AFDIAN

<!-- afdian-start -->
<!--@include: ../../parts/afdian.md-->
<!-- afdian-end -->

## 貢献者

<a href="https://github.com/voxelum/x-minecraft-launcher/graphs/contributors" flex justify-center>
  <img src="https://contrib.rocks/image?repo=voxelum/x-minecraft-launcher" />
</a>

### 特別な感謝

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/86590991?v=4">

[BANER](https://github.com/BANSAFAn)、RU/UKコミュニティで多大な助けをくれています。
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/119564588?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/155435591?v=4">

[GodLeaveMe](https://github.com/GodLeaveMe)、[v1mkss](https://github.com/v1mkss)、AURパッケージレジストリのメンテナンス。
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/52188337?v=4">

[0xc0000142](https://github.com/0xc0000142)、wingetのメンテナンス。
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/109208530?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/86590991?v=4">

[Marmur2020](https://github.com/Marmur2020) & [BANSAFAn](https://github.com/BANSAFAn)、ウクライナ語の完全翻訳を提供！
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/7201687?v=4">

[vanja-san](https://github.com/vanja-san)、ロシア語を提供！
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/37006668?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/11472320?v=4">

[lukechu10](https://github.com/lukechu10) & [HoldYourWaffle](https://github.com/HoldYourWaffle)、ランチャーコアの開発を支援。
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/25716486?v=4">

[laolarou726](https://github.com/laolarou726)、ランチャーのデザインに多大な貢献。
</div>

レガシープロジェクトの貢献者：

[Yricky](https://github.com/Yricky), [Jin](https://github.com/Indexyz), [LG](https://github.com/LasmGratel), [Phoebe](https://github.com/PhoebezZ), [Sumeng Wang](https://github.com/darkkingwsm), [Luca](https://github.com/LucaIsGenius), [Charles Tang](https://github.com/CharlesQT)

</div>
