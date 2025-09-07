# Global Settings

> 공사중

Global data is stored in [xmcl data directory](/en/guide/manage#xmcl-cache-and-database).

```sh
xmcl data directory
└─ setting.json # 사용자 설정 파일
```

## 전체 설정 JSON 형식

```json5
{
    // 현재 선택된 언어
    "locale": "en",
    // 사용되지 않음        
    "autoInstallOnAppQuit": false,
    // 사용되지 않음
    "autoDownload": false,
    // 사용되지 않음
    "allowPrerelease": false,
    // BMCL API 목록
    "apiSets": [
        {
            "name": "mcbbs",
            "url": "https://download.mcbbs.net"
        },
        {
            "name": "bmcl",
            "url": "https://bmclapi2.bangbang93.com"
        }
    ],
    // 선호하는 BCML API, 비어 있으면 자동 선택
    "apiSetsPreference": "",
    // 로컬 프록시 URL
    "httpProxy": "http://127.0.0.1:7890",
    // 프록시 사용 여부
    "httpProxyEnabled": true,
    // 테마, Light 또는 dark
    "theme": "dark",
    // 다운로드용 최대 HTTP 소켓 수
    "maxSockets": 16,
    "globalMinMemory": 0,
    "globalMaxMemory": 0,
    "globalAssignMemory": false,
    "globalVmOptions": [
        ""
    ],
    "globalMcOptions": [
        ""
    ],
    "globalFastLaunch": false,
    "globalHideLauncher": true,
    "globalShowLog": false,
    // 디스코드 상태 표시 활성화 여부
    "discordPresence": true,
    // 개발자 모드 활성화 여부
    "developerMode": false,
    // API 요청에 대한 최대 HTTP 소켓 수
    "maxAPISockets": 16
}
```