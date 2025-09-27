# Java データキャッシュ

XMCL は検出したすべての Java を JSON ファイルにキャッシュし、そのファイルは [XMCL データディレクトリ](/jp/guide/manage#xmcl-cache-and-database) に保存されます。

```sh
xmcl data directory
└─ java.json # Java キャッシュファイル
```

## Java キャッシュ JSON フォーマット

```json5
{
    "all": [
        {
            // 実行ファイルのパス
            "path": "path/to/java",
            // キャッシュされたバージョン
            "version": "11.0.6",
            // メジャー バージョン番号
            "majorVersion": 11,
            // アクセス可能かつ実行可能か
            "valid": true
        }
    ]
}
```
