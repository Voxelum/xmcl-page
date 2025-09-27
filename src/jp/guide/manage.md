# データ保存

XMCL のデータは大きく2つに分かれます:

1. Chromium によって生成される XMCL 自身のキャッシュやデータベース
2. Minecraft に関連するデータ

## XMCL のキャッシュとデータベース

XMCL 自体に関するキャッシュはシステムのアプリデータパスに保存されます。プラットフォームごとにパスが異なります。

::: code-group
```cmd [Windows]
%AppData%\xmcl
```
```cmd [Windows (APPX/appinstaller)]
# バージョン < 0.34
%LocalAppData%\Packages\XMCL_ncdvebj03zfcm\LocalCache\Roaming\xmcl
# バージョン >= 0.34 かつ < 0.40
%LocalAppData%\Packages\XMCL_68mcaawk44tpj\LocalCache\Roaming\xmcl
```
```sh [macOS]
~/Library/Application Support/xmcl
```
```sh [Linux]
~/.config/xmcl
```
:::

:::warning 注意
ここにあるファイルは、内容を理解していない限り勝手に削除しないでください。
:::

ここには設定を保持するためのいくつかの `json` ファイルやデータベースが置かれています。

- [ユーザーデータ](../protocol/user.md)。アカウントやスキンのリンクなどを保存します。`/user.json` に格納されます。
- [グローバル設定](../protocol/setting.md)。言語、プロキシ URL、ダウンロードノードなどのグローバル設定。`/settings.json` に格納されます。
- [インスタンスキャッシュ](../protocol/instance.md)。最後に選択したインスタンスのパスや既知の全インスタンスのパスを記録します。`/instances.json` に格納されます。
- [Java キャッシュ](../protocol/java.md)。検出された Java のパスやバージョン情報などを記録します。`/java.json` に格納されます。
- [リソースデータベース](../protocol/resources.md)。リソースファイルのメタデータ（解析された mod 情報など）。`leveldb` 形式で `/resources-v2` フォルダに保存されます。
- [ログ](../protocol/logs.md)。XMCL の過去のログ。`/logs` フォルダに保存されます。

## Minecraft 関連データ

Minecraft のデータディレクトリ構造には慣れていると思います。XMCL のデータディレクトリは Minecraft と比べて少し異なります:

```sh
"Public Data folder"
└─ 📂mods # すべてのインスタンスで共有される mods フォルダ
  └─ modA.jar # 具体的な mod ファイル。インスタンスはここから mod をリンクすることがある
├─ 📂resourcepacks # すべてのインスタンスで共有される resourcepacks フォルダ
├─ 📂shaderpacks # すべてのインスタンスで共有される shaderpacks フォルダ
├─ 📂versions # すべてのインスタンスで共有される versions フォルダ
├─ 📂assets # すべてのインスタンスで共有される assets フォルダ
├─ 📂libraries # すべてのインスタンスで共有される libraries フォルダ
└─ 📂instances # XMCL によって作成されたインスタンスを含むフォルダ
```

ほとんどの内容は Minecraft と同じですが、`instances` フォルダにはすべてのインスタンスファイルが含まれます。
