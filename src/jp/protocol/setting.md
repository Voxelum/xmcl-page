# グローバル設定

> 作成中

グローバルデータは [XMCL データディレクトリ](/jp/guide/manage#xmcl-cache-and-database) に保存されます。

```sh
xmcl data directory
└─ setting.json # ユーザー設定ファイル
```

## グローバル設定の JSON フォーマット

```json5
{
    // 現在選択されている言語
    "locale": "en",
    // 無効
    "autoInstallOnAppQuit": false,
    // 無効
    "autoDownload": false,
    // 無効
    "allowPrerelease": false,
    // 既知の BMCL API のリスト
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
    // 優先する BCML API（空の場合は自動選択）
    "apiSetsPreference": "",
    // ローカルプロキシ URL
    "httpProxy": "http://127.0.0.1:7890",
    // プロキシを使用するか
    "httpProxyEnabled": true,
    // テーマ (light または dark)
    "theme": "dark",
    // ダウンロード時の最大 HTTP ソケット数
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
    // Discord プレゼンスを有効にするか
    "discordPresence": true,
    // 開発者モードを有効にするか
    "developerMode": false,
    // API リクエスト時の最大 HTTP ソケット数
    "maxAPISockets": 16
}
```
