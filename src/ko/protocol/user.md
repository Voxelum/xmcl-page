# User Data Format

> 작업 진행 중..

사용자 데이터는 [xmcl 데이터 경로](/ko/guide/manage#xmcl-cache-and-database)에 저장됩니다.

```sh
xmcl 데이터 경로
└─ 📜user.json # 사용자 설정 파일
```

사용자 설정 파일에는.. :
- 사용자 ID
- 사용자 이름
- 사용자 역할 정보 (이름, 스킨, 망토)
- 등록된 제3자 서비스 정보.

## 파일 형식

```json5
{
  "users": {
    // 특정 계정
    "a6490773-7e31-4ab4-a70c-e3fa02e7e786": {
      "id": "a6490773-7e31-4ab4-a70c-e3fa02e7e786",
      // 사용자 이름, Microsoft 계정은 이메일 주소입니다
      "username": "xxx@xyz.com",
      "invalidated": false,
      // Microsoft 계정임을 나타냅니다
      "authService": "microsoft",
      // 액세스 토큰 만료 시간
      "expiredAt": 1678164533914,
      "profiles": {
        // 특정 사용자 역할
        "abf81fe99f0d4948a9097721a8198ac4": {
          "id": "abf81fe99f0d4948a9097721a8198ac4",
          // 이름
          "name": "가나다",
          "textures": {
            // 스킨 정보
            "SKIN": {
              "url": "주소",
              "metadata": {
                "model": "steve"
              }
            },
            // 망토 정보
            "CAPE": {
              "url": "주소"
            }
          }
        }
      },
      "selectedProfile": "abf81fe99f0d4948a9097721a8198ac4",
      // 아타타 URL
      "avatar": "주소"
    },
  "selectedUser": {
    // 선택된 사용자 ID
    "id": "a6490773-7e31-4ab4-a70c-e3fa02e7e786"
  },
  // 마인크래프트 클라이언트 토큰
  "clientToken": "e4c06b2c3ab4405aae6fa6739f310fe5",
  // 캐시된 제3자 서비스, 일반적으로 authlibinjector와 호환됨
  "yggdrasilServices": [
    {
      // 제3사 서비스 URL
      "url": "https://littleskin.cn/api/yggdrasil",
      "authlibInjector": {
        "meta": {
          "serverName": "LittleSkin",
          "implementationName": "Yggdrasil API for Blessing Skin",
          "implementationVersion": "5.1.1",
          "links": {
            "homepage": "https://littleskin.cn",
            "register": "https://littleskin.cn/auth/register"
          },
          "feature.non_email_login": true
        },
        "signaturePublickey": "-----BEGIN PUBLIC KEY-----\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEArGcNOOFIqLJSqoE3u0hj\ntOEnOcET3wj9Drss1BE6sBqgPo0bMulOULhqjkc/uH/wyosYnzw3xaazJt87jTHh\nJ8BPMxCeQMoyEdRoS3Jnj1G0Kezj4A2b61PJJM1DpvDAcqQBYsrSdpBJ+52MjoGS\nvJoeQO5XUlJVQm21/HmJnqsPhzcA6HgY71RHYE5xnhpWJiPxLKUPtmt6CNYUQQoS\no2v36XWgMmLBZhAbNOPxYX+1ioxKamjhLO29UhwtgY9U6PWEO7/SBfXzyRPTzhPV\n2nHq7KJqd8IIrltslv6i/4FEM81ivS/mm+PN3hYlIYK6z6Ymii1nrQAplsJ67OGq\nYHtWKOvpfTzOollugsRihkAG4OB6hM0Pr45jjC3TIc7eO7kOgIcGUGUQGuuugDEz\nJ1N9FFWnN/H6P9ukFeg5SmGC5+wmUPZZCtNBLr8o8sI5H7QhK7NgwCaGFoYuiAGL\ngz3k/3YwJ40BbwQayQ2gIqenz+XOFIAlajv+/nyfcDvZH9vGNKP9lVcHXUT5YRnS\nZSHo5lwvVrYUrqEAbh/zDz8QMEyiujWvUkPhZs9fh6fimUGxtm8mFIPCtPJVXjeY\nwD3Lvt3aIB1JHdUTJR3eEc4eIaTKMwMPyJRzVn5zKsitaZz3nn/cOA/wZC9oqyEU\nmc9h6ZMRTRUEE4TtaJyg9lMCAwEAAQ==\n-----END PUBLIC KEY-----\n",
        "skinDomains": [
          "skin.prinzeugen.net",
          "littleskin.cn"
        ]
      }
    },
    {
      "url": "https://authserver.ely.by/api/authlib-injector",
      "favicon": "https:authserver.ely.by/favicon.ico",
      "authlibInjector": {
        "meta": {
          "serverName": "Ely.by",
          "implementationName": "Account Ely.by adapter for the authlib-injector library",
          "implementationVersion": "1.0.0",
          "links": {
            "homepage": "https://ely.by",
            "register": "https://account.ely.by/register"
          },
          "feature.non_email_login": false
        },
        "signaturePublickey": "-----BEGIN PUBLIC KEY-----\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAxgFJRb0e9fRyVG5+JlCg\nh0hccRIcgO5yxEVkMJajAI12Ev/Pc7lpTt6OtKTEcUNfjYgBnEhIKbdLD0Z+B5Bx\nSg9DQmozgzZcesScpASQb4Kt6P8itowdbgbUm4v+6x1QUKJjjmhHq93m9OIEbxQL\nCq+SrEMZpDrXRgd9DhNPjZv/95ximP8otvh7+bmEl8jwINgfJx0PAeJFYlceQcsh\niYh+LHtaIwzbTTqkDibDm7QiEc+/qGab3mABtVTpqw/refwFoR0M8+xkWF+1/D8k\nH0WFa+rBhdjLyLG+2hdOpKXoH/fMH0tQMPHU78J17JVKWwIWCwEWXp8HiWSbIt3a\ncmBYtyW3tqarFFMMECx2wmJP6FVOvYVThZxq9qc9/f3yeTGz3g7zU1YljHSVRP16\niEbEnHQBKxmrj2cdZgosJej4YppV7f3iZ8o8PF6UY51LSqvaCteXuWeYSJJESGAs\nUoV7ihJfWL8DymHamywB2Cahx7EiDGS3/iBcQUmpk4TTg2FrZPuKGItn1QfIRieO\nknnj9CPKiWdfOtJBr3i1FXLEfExgcJhQ00Y6B08QVvgiCzUF3t+VAG3Ef2YINYyG\nAXcW0TIgMalwwgGzdhQRhItODXptWigy0DNTUAgKQT9PS8N09yPBGxIq64T9A3/z\nFqC/k2bMLWUSVtIlilIItn0CAwEAAQ==\n-----END PUBLIC KEY-----\n",
        "skinDomains": [
          "ely.by",
          ".ely.by"
        ]
      }
    }
  ]
}
```
## 오프라인 사용자

오프라인 사용자의 데이터 저장 방식은 상당히 특별하며, 오프라인 사용자의 ID는 `OFFLINE`으로 고정됩니다:

```json5
{
  "users": {
    "OFFLINE": {
      "id": "OFFLINE",
      "invalidated": false,
      "selectedProfile": "1f4f5288115c3bcba74149a9dad0c89c",
      "profiles": {
        "1f4f5288115c3bcba74149a9dad0c89c": {
          // 오프라인 사용자 이름은 마음대로 작성할 수 있습니다
          "name": "Offline User",
          "id": "1f4f5288115c3bcba74149a9dad0c89c",
          "uploadable": [
            "cape",
            "skin"
          ],
          "textures": {
            "SKIN": {
              "url": "",
              "metadata": {}
            }
          }
        }
      },
      "expiredAt": 8556839292003941,
      "authService": "offline",
      // 사용자 이름은 항상 OFFLINE일것 입니다 
      "username": "OFFLINE"
    }
  }
}
```

## 액세스 토큰 저장

XMCL은 [keytar](https://www.npmjs.com/package/keytar)를 사용하여 현재 시스템의 비밀번호 관리자에 엑세스 토큰을 저장합니다.

다른 시스템들은 저장을 위해 서로 다른 서비스를 사용할 것입니다:

#### Windows

[Credential Manager](https://support.microsoft.com/en-us/windows/accessing-credential-manager-1b5c916a-6a16-889f-8581-fc16e8165ac0)

#### macOS

[Keychain](https://support.apple.com/zh-cn/guide/mac-help/mchlf375f392/mac)

#### Linux

[libsecret](https://wiki.gnome.org/Projects/Libsecret) 또는 [Secret Service API](https://www.gnu.org/software/emacs/manual/html_node/auth/Secret-Service-API.html)

런처는 위의 사용자 ID와 같이 `서비스`와 `계정`을 키로 사용하여 이를 저장합니다.

``` 
a6490773-7e31-4ab4-a70c-e3fa02e7e786
```

저장소에 있는 키는

``` 
xmcl/microsoft/a6490773-7e31-4ab4-a70c-e3fa02e7e786
```

오프라인 사용자들의 경우에는 xmcl/offline/OFFLINE 이 됩니다.