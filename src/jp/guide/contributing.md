### 技術スタックと背景情報

このプロジェクトのツールチェーンとランタイムの概要を紹介します

プロジェクト全体では以下を使用しています：

- [Node.js >=20](https://nodejs.org/)。コアライブラリのベース環境。
- [Electron 29](https://electron.atom.io)。ランチャーの実際のランタイム。
- [pnpm](https://pnpm.io/)。モノレポのパッケージ管理に使用。
- [TypeScript](https://www.typescriptlang.org/)。プロジェクト全体でできるだけTypeScriptを使用しています。

メインプロセス（Electron）では：

- [esbuild](https://esbuild.github.io/)。メインプロセスのTypeScriptをビルドするために使用しています。

レンダラー側、つまり純粋なフロントエンドでは：

- [Vue](https://vuejs.org)。ユーザーインターフェースの構築に使用。
- [Vite](https://vitejs.dev/)。ビルドシステムとして使用。
- [Vuetify](https://vuetifyjs.com/)。コンポーネントライブラリとして使用。
- [Vue Composition API](https://github.com/vuejs/composition-api)。Vue 2向けのコンポジショナルAPIのブリッジ。VuetifyがVue 3にアップグレードされると、Vueもアップグレードされ、これは削除される予定です。

### プロジェクト構造と設計

![diagram](../../assets/diagram.svg)

詳細な設計については[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/Voxelum/x-minecraft-launcher)をご覧ください。90%のケースをカバーしています！

## 貢献する

プロジェクトを開くにはVSCodeの使用を強く推奨します。

### 始め方

#### クローン

サブモジュールフラグ`--recurse-submodules`を使ってプロジェクトをクローンします。

```bash
git clone --recurse-submodules https://github.com/Voxelum/x-minecraft-launcher
```

`--recurse-submodules`フラグを追加し忘れた場合は、gitサブモジュールを手動で初期化・更新する必要があります。

```bash
git submodule init
git submodule update
```

#### インストール

[pnpm](https://pnpm.io)を使ってプロジェクトをインストールします：

```
pnpm install
```

<details>
  <summary> 中国国内での依存関係（ElectronなどのようなもPの）インストールが遅い問題の解決策 </summary>

  gitバッシュを開き、`pnpm i`の前に`registry=https://registry.npm.taobao.org electron_mirror="https://npm.taobao.org/mirrors/electron/"`を追加します。Alibabaが提供する国内のnpmおよびElectronミラーを使用します。

  最終的に入力するコマンドは

  ```bash
  registry=https://registry.npm.taobao.org electron_mirror="https://npm.taobao.org/mirrors/electron/" pnpm i
  ```
</details>

#### 環境変数の設定

`xmcl-electron-app`の下に`.env`ファイルを作成して`CURSEFORGE_API_KEY`を設定する必要があります。この`.env`ファイルは`.gitignore`ファイルに追加されています。

:::warning 注意点
**CURSEFORGEのAPIキーを漏らさないでください**
:::

#### ランチャーを起動する

これでランチャーを実行できます

#### VSCode利用者向け

`実行とデバッグ`セクションに移動し、`Electron: Main (launch)`プロファイルを使用してelectronを起動します。(ホットキーF5)

#### VSCode以外の利用者向け

ターミナルを一つ開き

```bash
# UIのためにdevサーバーを開始
npm run dev:renderer
```

別のターミナルを開き

``` bash
# メインプロセスコードの監視を開始
npm run dev:main
```

#### コードの「ホット」変更

コードを変更した場合、その変更を実行中のランチャーインスタンスに更新する方法です。

##### ブラウザプロセスの場合

Viteはホットリロードを提供しているので、自動的に更新されるはずです。何か問題が発生した場合は、`Ctrl+R`でブラウザを更新できます。

##### メインプロセスの場合

VSCodeを使用してランチャーを起動している場合、コードを変更した後、VSCodeデバッガーの再読み込みボタンを押すことができます。

VSCodeを使用して起動していない場合、Electronは自動的に閉じて再読み込みします。

### ランチャーコアの問題を発見した場合

ランチャーコアはTypeScriptで書かれた[別プロジェクト](https://github.com/voxelum/minecraft-launcher-core-node)にあります。

関連する問題を特定した場合は、そちらで問題を開いてください。

### VSCodeデバッガー

プロジェクトにはVSCodeデバッガー設定が含まれています。行にブレークポイントを追加してデバッグできます。現在、VSCodeデバッガーの方法はメインプロセスのデバッグのみをサポートしています。

（レンダラープロセスにはChrome Devtoolsを使用できます）

現在、2つのオプションがあります：

1. Electron: Main (launch)
2. Electron: Main (attach)

最初のオプションを使って起動すると、自動的にデバッガーがインスタンスにアタッチされます。

### コードのコミット

このプロジェクトは[コンベンショナルコミット](https://www.conventionalcommits.org/en/v1.0.0-beta.3/)に従っています。簡単に言えば、コミットメッセージの最初の行は次のようになります：

```
commit type: commit description
```

利用可能なコミットタイプは：`feat`、`fix`、`refactor`、`style`、`docs`、`chore`、`test`があります。

[このgist](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)を参考にすると：

> feat: （ユーザー向けの新機能。ビルドスクリプトの新機能ではない）
>
> fix: （ユーザー向けのバグ修正。ビルドスクリプトの修正ではない）
>
> docs: （ドキュメントの変更）
>
> style: （フォーマットや、セミコロンの欠落など；実際のコード変更はない）
>
> refactor: （実際のコードのリファクタリング。変数名の変更など）
>
> test: （欠落しているテストの追加、テストのリファクタリング；実際のコード変更はない）
>
> chore: （gruntタスクの更新など；実際のコード変更はない）

**これらのルールに従わないと、コミットは拒否されます。**

### ビルド方法

現在のランチャーは、ビルドするために2つのコマンドを実行する必要があります

まず、フロントエンドコードをビルドする必要があります：

```bash
pnpm build:renderer
```

`xmcl-keystone-ui`の下のコードが変更されていない限り、これを再度ビルドする必要はありません。

次に、先ほどビルドしたフロントエンドを同梱してElectronをビルドできます：

```bash
pnpm build
```
