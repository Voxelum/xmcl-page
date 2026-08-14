# Minecraft Bedrock Edition（統合版）ガイド

XMCL は、**Minecraft Bedrock Edition**（*Windows 10/11 版* / *UWP 版*）の管理、ダウンロード、起動をサポートしています。

---

## 1. システム要件と設定（Windows のみ）

### Windows 開発者モードを有効にする
1. **Windows の設定** (`Win + I`) を開きます。
2. **プライバシーとセキュリティ** -> **開発者向け** に移動します。
3. **開発者モード** を **オン** に切り替えます。

---

## 2. パッケージのダウンロード元

パッケージファイル（`.appx`）は **Microsoft 公式の Windows Update Delivery CDN** から直接ダウンロードされます。

---

## 3. OS の互換性

| OS | 互換性 | 詳細 |
| :--- | :--- | :--- |
| 💻 **Windows 10 / 11** | ✅ **完全対応** | ネイティブ UWP 実行環境。 |
| 🍎 **macOS** | ❌ **非対応** | Windows 固有の UWP API が必要です。**Java Edition** をプレイしてください。 |
| 🐧 **Linux** | ❌ **非対応** | Windows 固有の UWP API が必要です。**Java Edition** をプレイしてください。 |
