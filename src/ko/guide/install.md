# 설치 가이드

런처는 여러 설치 방법을 제공하며, 그중 일부는 덜 일반적입니다. 여기서는 **덜 일반적인** 또는 **특별한** 형식 기능에 대해 중점적으로 소개하겠습니다.

## 윈도우

:::info
Windows 사용자에게 권장되는 설치 형식은 `APPX` 또는 `온라인 설치(appinstaller)`입니다.
:::

### APPX

APPX는 Windows 10에서 제공하는 **설치 패키지** 형식으로, 프로그램을 가상화/샌드박스 환경에서 실행할 수 있게 해요. APPX를 통해 설치된 프로그램은 모두 Windows 샌드박스 안에서 실행됩니다.

사용자에게 가장 큰 장점은 애플리케이션의 `캐시 파일`, `레지스트리 수정` 등 다른 작업이 격리된다는 점이에요. 즉, 프로그램을 제거하면 `캐시`와 `레지스트리 수정 내용`도 함께 삭제돼요.

:::info 좋은 소식
레지스트리를 건드릴 걱정은 없어요. XMCL이 레지스트리에 추가하는 건 아마도 파일 확장자 연결 정도예요.
:::

AppX는 appinstaller 메커니즘을 통해 업데이트돼요. [자동 업데이트](https://learn.microsoft.com/en-us/windows/msix/app-installer/auto-update-and-repair--overview#automatic-updates) 전략에 따라, XMCL은 사용자가 **애플리케이션을 실행할 때** 업데이트를 확인하며, 업데이트가 있으면 다음 실행 시 적용돼요.

:::tip 좋은 소식
APPX의 자동 업데이트는 Windows의 **최적화 배포**와 **증분 업데이트**를 지원해요. 즉, 변경된 내용만 업데이트돼요.
:::

### 온라인 설치(appinstaller)

`appinstaller`는 본질적으로 `APPX` 형식과 동일해요. `appinstaller` 자체는 `APPX`의 `URL`을 담고 있는 `XML` 텍스트 파일이에요. 설치 인터페이스가 나타나면, 해당 URL에서 APPX를 다운로드하여 설치하려고 시도합니다. 따라서 업데이트 메커니즘도 APPX와 동일하게 작동해요.

### 윈도우 7/8

해결책은 [longteng](https://github.com/longteng-H)([bilibili](https://space.bilibili.com/1030667057))님이 발견하고 제공했어요.

:::details Windows 10 이하 시스템에서 XMCL 실행 방법
기본적으로 XMCL은 Windows 7에서 네이티브 실행을 지원하지 않아요. 필요한 런타임 라이브러리를 보충하기 위해 VxKex 확장 커널을 설치하면, 구형 시스템에서도 XMCL을 실행할 수 있어요. (참고: 이 방법은 구형 시스템에서 정상 실행되지 않는 일부 소프트웨어에도 적용 가능해요.)

1. [VxKex-NEXT](https://github.com/YuZhouRen86/VxKex-NEXT) 확장 커널을 다운로드하여 설치해요. 국내 브랜치를 여기서 제공하고 있어요.
2. X Minecraft Launcher.exe를 찾아 VxKex를 활성화해요. 방법을 잘 모른다면 영상 튜토리얼을 참고하세요: [Modern Apps on Windows 7 | Windows 7 Extended Kernel](https://www.youtube.com/watch?v=zl7AsxtoPV8).

"Enable VxKex NEXT for this program"와 "Report other versions of Windows" 모두 체크한 뒤 적용하고 확인해요.

이제 XMCL은 Windows 7에서도 정상적으로 실행되며, 멀티플레이를 제외한 모든 기능이 정상적으로 작동해요.
:::

## MacOS

:::warning
Mac 사용자는 크랙 소프트웨어 설치를 허용해야 해요.  
XMCL은 서명이 되어 있지 않기 때문에, 시스템 설정에서 실행을 허용해야 해요.
:::

### DMG

MacOS 사용자에게는 DMG 형식만 제공해요. DMG는 디스크 이미지 형식으로, 가상 디스크로 마운트돼요. DMG를 열고 애플리케이션을 `Applications` 폴더로 드래그하면 설치가 완료돼요.

애플리케이션을 실행하려면, 다음 명령어를 사용할 수 있어요.

```sh
# 모든 출처의 소프트웨어 허용
sudo spctl --master-disable
# 격리 속성(quarantine) 제거
sudo xattr -c /Applications/X\ Minecraft\ Launcher.app
```

만약 `X Minecraft Launcher.app`를 다른 위치에 설치했다면, `/Applications/X\ Minecraft\ Launcher.app` 대신 해당 경로를 사용하면 돼요.

## Linux

:::info
Linux는 배포판이 매우 다양해서 범용 설치 방법을 제공하기 어렵습니다. 여기서는 `AppImage`만 언급합니다.
:::

### AppImage

AppImage는 설치 없이도 모든 Linux 데스크탑에서 실행할 수 있는 Linux 애플리케이션 형식입니다. AppImage 파일은 실행 파일이므로, 더블 클릭하거나 터미널에서 실행하면 됩니다.

이것이 XMCL에서 제공하는 유일한 비설치형 프로그램입니다 (~~사실 지원하고 싶지 않음~~). 따라서 업데이트 방식이 다른 형식과 다르며, 사용자는 새 AppImage를 직접 다운로드하여 업데이트해야 합니다.

## Other formats

현재 다른 설치 형식은 [핫 업데이트]를 지원하거나 electron-builder가 제공하는 업데이트 방식을 지원합니다. 이 업데이트 방식은 일반적으로 많은 신경을 쓰지 않아도 됩니다 (~~업데이트가 안 되면 그냥 런처를 다시 다운로드하면 됨~~).

:::tip Hot update
핫 업데이트란 런처가 코어 asar 파일(~30MB)만 자체적으로 교체하며, 런처 전체를 다시 다운로드할 필요가 없다는 의미입니다.
:::

## Appendix: Choosing the Game Data Directory

초기 설치 시, 사용자는 `Game Data Directory`를 선택해야 합니다. XMCL은 다운로드한 `assets`, `libraries`, `versions` 등을 이 디렉토리에 저장합니다.

:::warning Note
설치 안내 페이지에서 언급했듯이, XMCL의 특수한 파일 구조 때문에 **원본** Minecraft 게임 디렉토리를 XMCL 데이터 디렉토리로 사용하는 것은 권장되지 않습니다.
:::


여기서는 XMCL의 `Game Data Directory`로 새 폴더를 선택하는 것을 권장합니다.

게임 데이터 디렉토리 구조에 대한 자세한 내용은 [데이터 관리 가이드](/en/guide/manage.md#minecraft-related-data)를 참고하세요.


