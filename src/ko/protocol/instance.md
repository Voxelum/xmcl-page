# 인스턴스 저장 형식

> 공사중

XMCL은 multimc와 유사하게 인스턴스 정보를 저장합니다.

이 정보는 [XMCL 데이터 경로](/ko/guide/manage#xmcl-cache-and-database)에 저장됩니다:

<!-- ```bash
.
├─ instances
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ api-examples.md
│  ├─ markdown-examples.md
│  └─ index.md
└─ package.json
``` -->

```sh
XMCL 데이터 경로
└─ 📜instances.json # 글로벌 인스턴스 구성 파일
```

[XMCL 게임 데이터 경로](/ko/guide/manage#minecraft-related-data)와 더불어：

```sh
XMCL 게임 데이터 경로
└─📂instances # 인스턴스용 파일을 포함
  ├─📂instance-a
  │ └─ 📜instance.json # 인스턴스 A용 구성 파일
  └─ 📂instance-b
    └─ 📜instance.json # 인스턴스 B용 구성 파일
```

## 전체 설정 파일 형식

여기서는 XMCL 데이터가 `/경로/xmcl`에 저장되어 있다고 가정합니다.

```json5
{
    // 이것이 마지막으로 선택된 인스턴스입니다. 런처가 실행될 때 이 인스턴스가 선택됩니다.
    "selectedInstance": "/경로/xmcl/instances/instance-a",
    // 이것은 모든 인스턴스의 캐시된 목록입니다. 가져온 외부 인스턴스 경로도 여기에 저장됩니다. 런처가 삭제되면 사용할 수 없게 됩니다.
    "instances": [
        "/경로/xmcl/instances/instance-a",
        "/경로/xmcl/instances/instance-b",
        // 외부 인스턴스
        "/external/.minecraft"
    ]
}
```

## 인스턴스 설정 파일

`/경로/xmcl/instances/mc.hypixel.com`에 하나를 생성했다고 가정합니다.

```json5
{
    // 런처에 표시되는 이름입니다
    "name": "mc.hypixel.com",
    // 현재 활성화되지 않음. 인스턴스 게임의 해상도를 설정합니다.
    "resolution": { "width": 800, "height": 400, "fullscreen": false },
    // 최소 메모리
    "minMemory": 0,
    // 최대 메모리
    "maxMemory": 0,
    // JVM 추가 시작 매개변수
    "vmOptions": [],
    // MC 추가 시작 매개변수
    "mcOptions": [],
    "url": "",
    // 인스턴스 아이콘의 URL
    "icon": "",
    // XMCL이 실행 후 로그 창을 표시할지 여부
    "showLog": false,
    // 실행 후 런처를 숨길지 여부
    "hideLauncher": true,
    // 필수 항목의 경우, 빈 문자열은 필수 아님을 나타냅니다.
    "runtime": {
        "minecraft": "1.16.3",
        "forge": "",
        "liteloader": "",
        "fabricLoader": "",
        "yarn": "",
        "optifine": "",
        "quiltLoader": ""
    },
    // Java 경로, 비어 있으면 자동 감지
    "java": "",
    // 수동으로 지정된 실행 버전, 빈 값은 런타임 기반 계산을 나타냅니다 수동으로 지정된 런치 버전, 빈 값은 런타임 기반 계산을 나타냅니다
    "version": "",
    // 서버 주소가 지정된 경우 런처는 이 서버에 직접 연결합니다.
    "server": { "host": "mc.hypixel.net", "port": 25565 },
    // 모드팩 제작자
    "author": "ci010",
    // 설명
    "description": "",
    "lastAccessDate": 1661774086015,
    "creationDate": 1602514422594,
    "modpackVersion": "",
    "fileApi": "",
    "tags": [],
    "assignMemory": false,
    // 빠른 시작 여부
    "fastLaunch": false
}

```