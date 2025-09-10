

# 데이터 관리

XMCL 데이터는 두 부분으로 나뉩니다:

1. Chromium이 생성한 XMCL 자체 캐시 및 데이터베이스
2. Minecraft 관련 데이터

## XMCL 캐시 및 데이터베이스

XMCL 자체와 관련된 캐시는 시스템의 앱 데이터 경로에 저장됩니다. 플랫폼에 따라 경로가 달라요.

::: code-group
```cmd [Windows]
%AppData%\xmcl
```
```cmd [Windows (APPX/appinstaller)]
# Version < 0.34
%LocalAppData%\Packages\XMCL_ncdvebj03zfcm\LocalCache\Roaming\xmcl
# Version >= 0.34 and < 0.40
%LocalAppData%\Packages\XMCL_68mcaawk44tpj\LocalCache\Roaming\xmcl
```
```sh [macOS]
~/Library/Application Support/xmcl
```
```sh [Linux]
~/.config/xmcl
```
:::

:::warning 알아두기
여기 있는 파일들은 사용법을 잘 모르면 삭제하지 마세요.
:::

여기에는 다양한 설정을 저장하는 `json` 파일과 데이터베이스가 있습니다.

- [사용자 데이터](../protocol/user.md) : 사용자의 계정, 스킨 링크 등을 저장합니다. `/user.json` 파일에 저장됩니다.
- [글로벌 설정](../protocol/setting.md) : 언어, 프록시 URL, 다운로드 노드 등 전역 설정을 저장합니다. `/settings.json` 파일에 저장됩니다.
- [인스턴스 캐시](../protocol/instance.md) : 마지막으로 선택한 인스턴스 경로와 모든 알려진 인스턴스의 경로를 기록합니다. `/instances.json` 파일에 저장됩니다.
- [Java 캐시](../protocol/java.md) : 감지된 Java 경로, 버전 정보 등을 기록합니다. `/java.json` 파일에 저장됩니다.
- [리소스 데이터베이스](../protocol/resources.md) : 리소스 파일의 메타데이터(예: 파싱된 모드 정보)를 저장합니다. `leveldb` 포맷으로 `/resources-v2` 폴더에 저장됩니다.
- [로그](../protocol/logs.md) : XMCL의 과거 로그를 저장합니다. `/logs` 폴더에 저장됩니다.

## Minecraft 관련 데이터

Minecraft 데이터 디렉토리 구조는 이미 익숙할 것으로 생각할게요.
XMCL의 데이터 디렉토리는 Minecraft와 약간 달라요.

```sh
"Public Data folder"
└─ 📂mods # 모든 인스턴스에서 공유되는 모드 폴더
  └─ modA.jar # 특정 모드 파일, 인스턴스가 이 파일을 링크할 수 있음
├─ 📂resourcepacks # 모든 인스턴스에서 공유되는 리소스팩 폴더
├─ 📂shaderpacks # 모든 인스턴스에서 공유되는 쉐이더팩 폴더
├─ 📂versions # 모든 인스턴스에서 공유되는 버전 폴더
├─ 📂assets # 모든 인스턴스에서 공유되는 에셋 폴더
├─ 📂libraries # 모든 인스턴스에서 공유되는 라이브러리 폴더
└─ 📂instances # XMCL에서 생성한 인스턴스를 포함
```

대부분의 내용은 실제 Minecraft와 동일하며, 그중 `instances` 폴더는 모든 인스턴스 파일을 포함합니다.
