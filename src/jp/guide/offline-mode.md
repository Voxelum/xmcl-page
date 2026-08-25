# ライセンスなしでのプレイ（オフラインモード・外部アカウント）

XMCL はプレイヤーの自由を尊重するオープンソースランチャーです。現在 Minecraft Java 版の有料ライセンスをお持ちでない場合や、Mojang サーバーに接続せずオフラインで Modpack をテストしたい場合、XMCL は**オフラインモード**およびコミュニティスキンネットワークに完全対応しています。

---

## ⚙️ 1. 開発者モードを有効にする

オフラインアカウントやサードパーティ製スキンサーバーを利用するには、設定で**開発者モード**を有効にします：

1. 画面左下の**設定**（歯車アイコン）を開きます。
2. **「開発者モード」**を見つけて**オン**にします：

   ![開発者モードを有効化](/guidephoto/developer-mode.png)

有効化すると、アカウントマネージャーに各種ログインプロバイダーが表示されます。

---

## 👥 2. 利用可能なアカウントタイプ

<div style="display: flex; flex-direction: column; gap: 14px; margin: 24px 0;">

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🟢</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">オフラインモード（ローカルアカウント）</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      公式サーバーに接続せずにオフラインでプレイします。好きなユーザー名を入力するだけで利用可能。シングルプレイ、Modpack のテスト、LAN プレイ、<code>online-mode=false</code> のコミュニティサーバーに最適です。
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🟡</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">LittleSkin</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      カスタムスキンやマントに対応した無料のコミュニティ認証・スキンサーバー。  
      公式サイト：<a href="https://littleskin.cn" target="_blank" rel="noopener noreferrer">https://littleskin.cn</a>
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🔵</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">Ely.by</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      クラウドスキンや HD マントに対応した世界的に普及しているサードパーティ認証ネットワーク。  
      公式サイト：<a href="https://ely.by" target="_blank" rel="noopener noreferrer">https://ely.by</a>
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🌐</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">カスタム Authlib-Injector / Yggdrasil サーバー</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      標準 Yggdrasil API 仕様に準拠した任意のプライベート認証サーバーを登録できます。
    </p>
  </div>

</div>

---

## 🎮 3. アカウントの追加と切り替え

1. 画面右上のアイコンをクリックして**アカウントマネージャー**を開きます。
2. **「アカウントを追加」**をクリックします。
3. **オフライン**、**LittleSkin**、**Ely.by**、または**カスタムサーバー**を選択します。
4. ユーザー名またはログイン情報を入力します。
5. 追加したアカウントをクリックして**アクティブ**に設定します。

---

## 💡 4. アカウントタイプの比較

| 機能 | Microsoft アカウント（公式） | オフラインアカウント | LittleSkin / Ely.by |
| :--- | :--- | :--- | :--- |
| **価格** | 有料（公式ライセンス） | 無料 | 無料 |
| **公式サーバー（Hypixel など）** | ✅ 対応 | ❌ 非対応 | ❌ 非対応 |
| **コミュニティサーバー / LAN / P2P** | ✅ 対応 | ✅ 対応 (`online-mode=false`) | ✅ 対応 |
| **シングルプレイ・Modpack** | ✅ 対応 | ✅ 対応 | ✅ 対応 |
| **カスタムスキン・マント** | ✅ Mojang 公式スキン | ⚠️ デフォルトスキン | ✅ 各スキン站のスキン・マント |

---

## ❓ よくある質問

### オフラインアカウントで Hypixel に入れますか？
いいえ。公式商業サーバーは Mojang による厳格な認証を行っているため（`online-mode=true`）、Java 版を購入した Microsoft アカウントが必要です。

### ライセンスなしで友達と遊ぶには？
XMCL 内蔵の **P2P マルチプレイ / LAN 共有** 機能を利用するか、`online-mode=false` に設定されたコミュニティサーバーをご利用ください。

👉 **[Microsoft ログインでお困りの場合はこちら：トラブルシューティングガイド](./microsoft-login-issues)**
