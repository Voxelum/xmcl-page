# 업데이트 가이드

> 준비 중

런처가 아직 `베타` 단계이므로, 데이터 백업이 특히 중요합니다. 여기서는 업데이트 중 발생할 수 있는 문제 해결 방법과 재설치를 위해 데이터를 백업하는 방법을 안내합니다.

## APPX 업데이트 시 재설치 필요

`APPX` 형식의 이전 버전 런처는 인증서가 만료되어 있기 때문에, 구버전에서 신버전으로 업그레이드할 때 기존 버전을 삭제해야 합니다. 이 경우 XMCL 데이터 폴더를 반드시 백업하세요.

예를 들어, 사용자 이름이 `foo`라고 가정하면
:

::: code-group
```[Windows (APPX)]
%LocalAppData%\Packages\XMCL_ncdvebj03zfcm\LocalCache\Roaming\xmcl
```
:::

데이터를 복사하여 바탕화면 등에 임시로 보관할 수 있습니다. 재설치 후, 새 버전 XMCL의 파일 경로는 다음과 같습니다.

::: code-group
```[Windows (APPX)]
%LocalAppData%\Packages\XMCL_68mcaawk44tpj\LocalCache\Roaming\xmcl
```
:::

백업한 파일을 그냥 원래 위치에 다시 넣으면 됩니다.

## APPX 업데이트 실패

APPX 업데이트 또한 폴더를 열어 보면 다운로드된 `xmcl.appinstaller` 파일이 있습니다. 이 파일을 수동으로 더블 클릭하여 업데이트를 설치할 수 있습니다.

## 그 외 업데이트는 재설치 필요

이 경우 실제로는 백업이 필수는 아닙니다. APPX를 제외하면 XMCL의 데이터 파일이 지워지지 않기 때문입니다. 물론 원하면 백업을 할 수도 있으며, 데이터 파일은 다음 위치에 있습니다.

::: code-group
```cmd [Windows]
%AppData%\xmcl
```
```sh [macOS]
~/Library/Application Support/xmcl
```
```sh [Linux]
~/.config/xmcl
```
:::

## Other version updates failed

다시 다운로드 하세요..