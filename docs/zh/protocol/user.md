# 用户数据格式

> 施工中

用户数据存储在 `user.json` 中

```json5
{
  "users": {
    "dcc87657-8e6f-3095-8cca-2cf98457104b": {
      "id": "dcc87657-8e6f-3095-8cca-2cf98457104b",
      "profiles": {
        "dcc87657-8e6f-3095-8cca-2cf98457104b": {
          "textures": { "SKIN": { "url": "" } },
          "id": "dcc87657-8e6f-3095-8cca-2cf98457104b",
          "name": "123"
        }
      },
      "username": "123",
      "profileService": "mojang",
      "authService": "offline",
      "selectedProfile": "dcc87657-8e6f-3095-8cca-2cf98457104b",
      "expiredAt": 0
    }
  },
  "authServices": {
    "littleskin.cn": {
      "hostName": "https://littleskin.cn/api/yggdrasil",
      "authenticate": "/authserver/authenticate",
      "refresh": "/authserver/refresh",
      "validate": "/authserver/validate",
      "invalidate": "/authserver/invalidate",
      "signout": "/authserver/signout"
    },
    "ely.by": {
      "hostName": "https://authserver.ely.by",
      "authenticate": "/auth/authenticate",
      "refresh": "/auth/refresh",
      "validate": "/auth/validate",
      "invalidate": "/auth/invalidate",
      "signout": "/auth/signout"
    }
  },
  },
  "selectedUser": {
    "id": "dcc87657-8e6f-3095-8cca-2cf98457104b",
    "profile": "dcc87657-8e6f-3095-8cca-2cf98457104b"
  },
  "clientToken": "a202be06e9294ec98d4193244584529f"
}
```
