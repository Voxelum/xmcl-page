# マイクロソフトログイン、統合版と Java 版の違いおよびライセンス問題の解決

本ガイドでは、XMCL における Microsoft アカウント認証の仕組み、ログインエラー（**「failed to exchange Xbox token」**や未購入エラー）が発生する原因、ゲームが**デモモード（Demo Mode）**で起動する理由、**統合版（スマホ/Switch/PS/Xbox）と Java 版（PC）**の決定的な違い、および解決手順を解説します。

---

## 🔑 1. Microsoft アカウントでサインインする

公式 Minecraft ライセンスでログインしてプレイする手順：

1. 画面右上のプロフィールアイコン（または**「アカウント管理」**）をクリックしてアカウントマネージャーを開きます：

   <video src="/guidephoto/My%20stuff.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

2. **「アカウントを追加」**をクリックし、**Microsoft** を選択してログインを完了します：

   <video src="/guidephoto/add%20account.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

> 💡 **デバイスコードでログイン（Device Code）：**  
> ランチャー内でパスワードを直接入力したくない場合は、**「デバイスコードでログイン」**にチェックを入れます。表示される 8 桁のコードをブラウザで [microsoft.com/link](https://microsoft.com/link) に入力して認証できます。

---

## 🔍 2. Microsoft 3 段階認証の仕組み

ログイン時、ランチャーは次の 3 つの認証サーバーと順次通信します：

<div style="display: flex; flex-direction: column; gap: 16px; margin: 24px 0; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-weight: 600; font-size: 1.1rem; color: var(--vp-c-text-1);">🔑 3 段階の認証フロー：</span>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: center; margin: 10px 0;">
    <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #3b82f6; font-size: 0.85rem;">ステップ 1</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Microsoft OAuth</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">メールとパスワードを検証</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold;">➔</div>
    <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #10b981; font-size: 0.85rem;">ステップ 2</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Xbox Live サービス</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">ゲーマータグを取得</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold; color: #ef4444;">➔ ❌ 主な失敗原因</div>
    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #ef4444; font-size: 0.85rem;">ステップ 3 (交換)</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Mojang Java ライセンス</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">PC 版の購入状況を確認</div>
    </div>
  </div>
  <p style="font-size: 0.9rem; color: var(--vp-c-text-2); margin: 0; text-align: center; line-height: 1.6;">
    ステップ 3 が失敗すると、<strong>「failed to exchange Xbox token」</strong>（または未購入）と表示されるか、ゲームが<strong>デモモード</strong>で起動します。これは、Mojang サーバーがこのアカウントに有効な <strong>Minecraft: Java Edition</strong> ライセンスを認識できなかったことを意味します。
  </p>
</div>

---

## 🛑 3. 最も多い誤解：統合版 (Bedrock) と Java 版の違い

**XMCL は Minecraft: Java Edition（PC / Windows・macOS・Linux）専用ランチャーです。**

スマートフォンや家庭用ゲーム機で Minecraft を購入した方がログインを試みた場合、以下のようになります：

| 購入したプラットフォーム | 所有しているエディション | XMCL に対応？ | 理由 |
| :--- | :--- | :--- | :--- |
| 📱 **スマホ / タブレット (iOS / Android)** | 統合版 (Bedrock) | ❌ 非対応 | スマホ版購入は PC の Java 版を含みません。 |
| 🎮 **PlayStation 4 / 5** | 統合版 (Bedrock) | ❌ 非対応 | PSN での購入は本体専用です。 |
| 🎮 **Xbox One / Series X\|S** | 統合版 (Bedrock) | ❌ 非対応 | Xbox 本体の購入は PC Java 版に移行されません。 |
| 🕹️ **Nintendo Switch** | 統合版 (Bedrock) | ❌ 非対応 | ニンテンドーeショップの購入は Switch 専用です。 |
| 💻 **PC（Minecraft: Java & Bedrock バンドル）** | Java 版 + 統合版 | ✅ **対応** | 公式完全対応！ |
| 🟢 **PC Game Pass / Ultimate 加入** | Java 版 + 統合版 | ✅ **対応** | 加入期間中プレイ可能です。 |

> ⚠️ **重要：**  
> **スマートフォン**、**PlayStation**、**Xbox 本体**、**Nintendo Switch** でのみ Minecraft を購入していた場合、Mojang 認証サーバーはそのアカウントが **Java 版を所有していない** と判定します。  
> PC で公式 Java 版をプレイするには、[Minecraft.net](https://www.minecraft.net/) で **「Minecraft: Java & Bedrock Edition for PC」** を購入するか、**PC Game Pass** に加入する必要があります。

---

## 🛠 4. よくあるログイン問題の解決策

### 原因 A: この Microsoft アカウントに Java 版ライセンスがない

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #ef4444; font-weight: bold; font-size: 1.25rem;">
    🎮
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Mojang に PC 版の購入履歴が見つからない</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Microsoft 認証は成功していますが、Mojang 側に Java Edition の購入データが存在しません。</p>
  </div>
</div>

#### 確認と対処：
* **Minecraft.net で確認：** [Minecraft.net](https://www.minecraft.net/) にサインインし、プロファイルに Java 版のプレイヤー名が表示されるか、「今すぐ購入」と表示されるか確認します。
* **注文履歴を確認：** [account.microsoft.com/billing/orders](https://account.microsoft.com/billing/orders) で購入履歴を開き、購入内容を確認します。
* **メールアドレスの確認：** 学校用や仕事用など、購入していない別のアカウントでログインしていないか確認します。
* **Game Pass の状態：** サブスクリプションが有効で PC 版が含まれているか確認します。

---

### 原因 B: Xbox Live プロフィール（ゲーマータグ）未作成

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #f59e0b; font-weight: bold; font-size: 1.25rem;">
    👤
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">アカウントにゲーマータグが未設定</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">新規作成した Microsoft アカウントなどで Xbox プロフィールが作成されていない場合、トークンが発行できません。</p>
  </div>
</div>

#### 解決方法：
1. [Xbox.com](https://www.xbox.com/) にアクセスします。
2. 右上の**「サインイン」**をクリックします。
3. 規約に同意し、**ゲーマータグ（Gamertag）**を設定します。
4. 1〜2 分待ってから XMCL で再度ログインしてください。

---

### 原因 C: ネットワークの遮断・DNS の問題

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(139, 92, 246, 0.05); border: 1px solid rgba(139, 92, 246, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(139, 92, 246, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #8b5cf6; font-weight: bold; font-size: 1.25rem;">
    🌐
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Mojang / Xbox 認証サーバーへの接続遮断</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">セキュリティソフトや DNS 設定により、<code>api.minecraftservices.com</code> との通信が妨げられています。</p>
  </div>
</div>

#### 解決方法：
* **VPN の利用：** 安定した VPN に接続してからログインを試みます。
* **XMCL のプロキシ設定：** **設定** -> **ネットワーク設定** でプロキシ（HTTP/HTTPS/SOCKS5）を設定します。
* **hosts ファイルの確認：** システムの hosts ファイルに `mojang.com` 等のリダイレクトがないか確認します。

---

## 🎮 正版ライセンスをお持ちでない場合

公式ライセンスをお持ちでない場合でも、**オフラインモード**や外部スキンサーバーを利用して遊ぶことができます。

👉 **[完全ガイド：ライセンスなしでのプレイ（オフラインモード・外部アカウント）](./offline-mode)**
