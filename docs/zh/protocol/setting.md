# 全局设置

> 施工中

全局数据存储在 [xmcl 数据目录下](/zh/guide/manage#xmcl-缓存及数据库)。

```sh
xmcl数据目录
└─ setting.json # 用户配置文件
```


## 全局设置 JSON 格式

```json5
{
    // 当前选择的语言
    "locale": "en",
    // 未启用
    "autoInstallOnAppQuit": false,
    // 未启用
    "autoDownload": false,
    // 未启用
    "allowPrerelease": false,
    // 已知的 BMCL API 列表
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
    // 偏好哪个 BCML API，空代表自动选择
    "apiSetsPreference": "",
    // 本地代理 url
    "httpProxy": "http://127.0.0.1:7890",
    // 是否使用代理
    "httpProxyEnabled": true,
    // 主题 light 或 dark
    "theme": "dark",
    // 下载时最大 HTTP socket 数量
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
    // 是否开启 discord presence
    "discordPresence": true,
    // 是否开启开发者模式
    "developerMode": false,
    // 请求 API 时 HTTP 的最大 socket 数量
    "maxAPISockets": 16
}
```