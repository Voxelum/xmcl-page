# AppX 마이그레이션

이 페이지는 AppX 설치 방식에서 ZIP 설치 방식으로 데이터를 마이그레이션하는 방법을 안내합니다.

방법은 간단합니다: AppX 앱의 AppData xmcl 폴더를 공통 AppData 위치로 복사하기만 하면 됩니다.

> [!IMPORTANT]
> 이동 과정에서 AppX 버전 앱을 **절대** 삭제하지 마십시오.

## AppX 데이터를 찾기

다음 경로로 이동하여 AppX 데이터를 찾으십시오.

```cmd [Windows (APPX/appinstaller)]
# 버전 < 0.34
%LocalAppData%\Packages\XMCL_ncdvebj03zfcm\LocalCache\Roaming\xmcl
# 버전 >= 0.34 < 0.40
%LocalAppData%\Packages\XMCL_68mcaawk44tpj\LocalCache\Roaming\xmcl
```

::: tip
파일 탐색기의 입력 상자(경로 지정용)를 사용하여 위에서 언급한 경로로 이동하십시오.
:::

## 데이터를 공통 AppData 폴더로 복사하십시오.

이전 단계에서 `xmcl` 폴더 전체를 다음 위치로 복사하십시오:

```cmd [Windows]
%AppData%\xmcl
```

## 새로운 XMCL를 실행하고 이전 파일을 지우세요.

데이터를 복사한 후, zip 파일에서 새 XMCL을 실행할 수 있습니다.

새 XMCL이 정상적으로 작동하는지 확인한 후, 기존 XMCL 앱을 삭제할 수 있습니다.

::: tip
AppX 앱을 삭제하면 **자동으로** 기존 데이터가 제거되므로, 남겨진 데이터에 대해 걱정할 필요가 없습니다.
:::
