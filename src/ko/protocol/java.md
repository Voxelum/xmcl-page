# 자바 데이터 캐시

XMCL은 발견된 모든 자바를 JSON 파일에 캐시하며, 이 파일은 [xmcl 데이터 디렉터리](/en/guide/manage#xmcl-cache-and-database)에 저장됩니다.

```sh
xmcl 데이터 경로
└─ java.json # 자바 캐시 파일
```

## Java 캐시 JSON 형식

```json5
{
    "all": [
        {
            // 실행 파일의 경로
            "path": "자바/파일/경로",
            // 캐시된 버전
            "version": "11.0.6",
            // 메이저 버전 번호
            "majorVersion": 11,
            // 접근 가능하고 실행 가능한지 여부
            "valid": true
        },
    ]
}
```