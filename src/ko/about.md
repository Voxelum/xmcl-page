---
outline: false
layout: home
hero:
  name: XMCL
  text: 마인크래프트 런처에<br>대한 다양한 경험을<br>발견해보세요.
  image:
    src: /logo.png
    alt: XMCL
  actions:
    - theme: brand
      text: 다운로드
      link: /ko/
    - theme: alt
      text: GitHub
      link: https://github.com/voxelum/x-minecraft-launcher
    - text: MIT 라이선스
      link: https://github.com/Voxelum/x-minecraft-launcher/blob/master/LICENSE
      theme: alt
features:
  - icon: 📥
    title: 다운로드 및 자동 완성
    details: 공식 또는 제3자 미러 사이트에서 Minecraft, Forge, Fabric, Quilt, OptiFine, JVM 다운로드 지원.
  - icon: ⚡️
    title: 빠른 다운로드
    details: HTTP/HTTPS 에이전트를 통해 소켓을 재사용하고, 파일을 부분별로 동시 다운로드합니다.
  - icon: 💻
    title: 크로스 플랫폼
    details: 런처는 Electron을 기반으로 하며, Windows 10/11, MacOS 및 Linux를 지원합니다.
  - icon: 📚
    title: 다중 인스턴스
    details: 여러 인스턴스를 생성하여 서로 다른 버전, 모드 및 실행 환경을 분리합니다.
  - icon: 🗂
    title: 모든 리소스을 관리
    details: 인스턴스에 리소스를 설치할 때는 링크를 사용하세요. 디스크 사용량을 최적화할 수 있습니다.
  - icon: 🔥
    title: CurseForge 및 Modrinth 빌트인 지원
    details: 런처 내에서 바로 리소스를 다운로드하세요.
markdownStyles: false
---

<div class="vp-doc" style="margin: auto; max-width: 1180px; padding: 0 24px">

## 시작하기

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

winget이 설치되어 있다면 winget을 사용하여 설치할 수 있습니다.

```bash
winget install CI010.XMinecraftLauncher
```

HomeBrew 설치는 tap을 통해서도 가능합니다

```bash
brew tap voxelum/xmcl
brew install --cask --no-quarantine voxelum/xmcl
```

### 기여하고 싶으신가요?

기능 추가나 버그 수정을 원한다면 다음을 확인하세요: [기여하기](/ko/guide/contributing)

번역에 도움을 주고 싶으시다면, 다음을 따라주세요 [현지화 시작하기](/ko/guide/i18n).


## 후원

| [![](https://github.com/DGP-Studio/Snap.Hutao/assets/10614984/73ae8b90-f3c7-4033-b2b7-f4126331ce66)](https://www.netlify.com/) |                 Windows에서 제공하는 무료 코드 서명 [SignPath.io](https://signpath.io/), 증명서 발급 [SignPath Foundation](https://signpath.org/)                  |
| :----------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                        [![](/deno-logo.webp)](https://deno.com/deploy)                                         |        [Deno Deploy](https://deno.com/deploy), XMCL은 서버리스(serverless) 자바스크립트 애플리케이션을 위한 번거로움 없는 플랫폼을 활용합니다. 제공: [Deno](https://deno.com/)        |
|                                         [![](https://bmclapidoc.bangbang93.com/assets/favicon.ico?v=1742218388684)](https://bmclapidoc.bangbang93.com/)                                         | BMCLAPI는 @bangbang93이 개발한 BMCL의 일부로, 국내 네트워크에서 Forge 및 Minecraft 공식 사이트가 사용하는 Amazon S3의 속도 저하 문제를 해결하기 위해 만들어졌습니다. BMCLAPI는 공개되어 있으며, Minecraft 리소스가 필요한 모든 런처에서 호출할 수 있습니다. |

### AFDIAN

<!-- afdian-start -->
<!--@include: ../../parts/afdian.md-->
<!-- afdian-end -->

## 기여자들

<a href="https://github.com/voxelum/x-minecraft-launcher/graphs/contributors" flex justify-center>
  <img src="https://contrib.rocks/image?repo=voxelum/x-minecraft-launcher" />
</a>

### 특별한 감사

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/86590991?v=4">

[BANER](https://github.com/BANSAFAn), RU/UK 커뮤니티에서 많이 도와주시는 분.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/119564588?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/155435591?v=4">

[GodLeaveMe](https://github.com/GodLeaveMe), [v1mkss](https://github.com/v1mkss), AUR 패키지 레지스트리의 유지보수.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/52188337?v=4">

[0xc0000142](https://github.com/0xc0000142), winget 유지보수.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/109208530?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/86590991?v=4">

[Marmur2020](https://github.com/Marmur2020) & [BANSAFAn](https://github.com/BANSAFAn), 우크라이나어를 완전히 번역했습니다!
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/7201687?v=4">

[vanja-san](https://github.com/vanja-san), 러시아어 제공!
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/37006668?v=4">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/11472320?v=4">

[lukechu10](https://github.com/lukechu10) & [HoldYourWaffle](https://github.com/HoldYourWaffle) 런처 코어 개발을 지원해 줍니다.
</div>

<div style="display: flex; align-items: center; gap: 10px;">
<img width="32" height="32" style="border-radius: 100%" src="https://avatars.githubusercontent.com/u/25716486?v=4">

[laolarou726](https://github.com/laolarou726), 런처 디자인에 많은 도움을 주는 사람.
</div>

레거시 프로젝트 기여자들:

[Yricky](https://github.com/Yricky), [Jin](https://github.com/Indexyz), [LG](https://github.com/LasmGratel), [Phoebe](https://github.com/PhoebezZ), [Sumeng Wang](https://github.com/darkkingwsm), [Luca](https://github.com/LucaIsGenius), [Charles Tang](https://github.com/CharlesQT)

</div>