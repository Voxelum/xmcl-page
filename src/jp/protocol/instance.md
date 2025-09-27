# インスタンス保存フォーマット

> 作成中

XMCL は MultiMC と同様にインスタンス情報を保存します。

この情報は XMCL のデータディレクトリに保存されます: /jp/guide/manage#xmcl-cache-and-database

```sh
XMCL データディレクトリ
instances.json # グローバルなインスタンス設定ファイル
```

および XMCL のゲームデータディレクトリに:

```sh
XMCL ゲームデータディレクトリ
instances # インスタンスのファイルを含む
  instance-a
    instance.json # インスタンス A の設定ファイル
  instance-b
    instance.json # インスタンス B の設定ファイル
```

## グローバル設定ファイルのフォーマット

ここでは XMCL データが `/path/to/xmcl` にあると仮定します。

```json5
{
    // これは最後に選択されたインスタンスです。ランチャーは起動時にこれを選択します。
    "selectedInstance": "/path/to/xmcl/instances/instance-a",
    // キャッシュされたすべてのインスタンスのリストです。外部からインポートされたインスタンスのパスもここに保存されます。
    "instances": [
        "/path/to/xmcl/instances/instance-a",
        "/path/to/xmcl/instances/instance-b",
        // 外部インスタンス
        "/external/.minecraft"
    ]
}
```

## インスタンス設定ファイル

例: `/path/to/xmcl/instances/mc.hypixel.com` に作成した場合

```json5
{
    // ランチャーに表示される名前
    "name": "mc.hypixel.com",
    // 現状未有効。インスタンスのゲーム解像度を設定します
    "resolution": { "width": 800, "height": 400, "fullscreen": false },
    // 最小メモリ
    "minMemory": 0,
    // 最大メモリ
    "maxMemory": 0,
    // JVM の追加起動パラメータ
    "vmOptions": [],
    // Minecraft の追加起動パラメータ
    "mcOptions": [],
    "url": "",
    // インスタンスアイコンの URL
    "icon": "",
    // 起動後に XMCL がログウィンドウを表示するか
    "showLog": false,
    // 起動後にランチャーを非表示にするか
    "hideLauncher": true,
    // インスタンスに必要なバージョン。空文字列は不要を意味します
    "runtime": {
        "minecraft": "1.16.3",
        "forge": "",
        "liteloader": "",
        "fabricLoader": "",
        "yarn": "",
        "optifine": "",
        "quiltLoader": ""
    },
    // Java のパス。空は自動検出を意味します
    "java": "",
    // 手動指定の起動バージョン。空は runtime に基づいて算出されます
    "version": "",
    // サーバーアドレス。存在する場合、ランチャーは直接このサーバーに接続します
    "server": { "host": "mc.hypixel.net", "port": 25565 },
    // Modpack の作者
    "author": "ci010",
    // 説明
    "description": "",
    "lastAccessDate": 1661774086015,
    "creationDate": 1602514422594,
    "modpackVersion": "",
    "fileApi": "",
    "tags": [],
    "assignMemory": false,
    // 高速起動を有効にするか
    "fastLaunch": false
}
```
