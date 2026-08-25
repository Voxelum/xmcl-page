# 無正版遊玩指南（離線模式與第三方皮膚站）

XMCL 是一款充分尊重玩家自由的開源啟動器。若您目前尚未購買 Minecraft Java 版正版授權，或希望在無網路環境下測試模組整合包，XMCL 完整支援**離線模式**與主流第三方皮膚站。

---

## ⚙️ 1. 開啟開發者模式

若要使用離線帳號及第三方皮膚站，需先在設定中啟用**開發者模式**：

1. 點選左側底欄的**設定**（齒輪圖示）。
2. 找到**「開發者模式」**選項並**開啟**：

   ![開啟開發者模式](/guidephoto/developer-mode.png)

開啟後，在帳號管理器新增帳號時將顯示更多帳號類型選項。

---

## 👥 2. 支援的帳號類型

<div style="display: flex; flex-direction: column; gap: 14px; margin: 24px 0;">

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🟢</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">離線模式 (Offline Mode)</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      無需連線官方認證伺服器即可離線遊玩。只需輸入任意喜歡的使用者名稱。非常適合單人遊戲、本機模組測試、區域網路連線以及設定為 <code>online-mode=false</code> 的社群伺服器。
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🟡</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">LittleSkin 皮膚站</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      廣受歡迎的免費皮膚與認證服務。支援自訂皮膚與披風，可配合 CustomSkinLoader 模組顯示皮膚。  
      官網：<a href="https://littleskin.cn" target="_blank" rel="noopener noreferrer">https://littleskin.cn</a>
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🔵</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">Ely.by 皮膚站</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      國際知名的第三方認證與皮膚網路，提供雲端皮膚庫與高畫質披風支援。  
      官網：<a href="https://ely.by" target="_blank" rel="noopener noreferrer">https://ely.by</a>
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🌐</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">自訂 Authlib-Injector / Yggdrasil 認證伺服器</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      支援填入任何符合 Yggdrasil 規範的第三方外置登入伺服器 API 網址。
    </p>
  </div>

</div>

---

## 🎮 3. 如何新增與切換帳號

1. 點選啟動器右上角的使用者圖示開啟**帳號管理器**。
2. 點選**「新增帳號」**。
3. 選擇 **離線模式**、**LittleSkin**、**Ely.by** 或 **自訂認證伺服器**。
4. 輸入使用者名稱或相應登入資訊。
5. 點選該帳號將其設為**目前使用中帳號**。

---

## 💡 4. 帳號類型比較

| 功能特色 | 微軟正版帳號 | 離線帳號 | LittleSkin / Ely.by |
| :--- | :--- | :--- | :--- |
| **費用** | 付費購買正版 | 免費 | 免費 |
| **官方正版伺服器 (Hypixel 等)** | ✅ 支援 | ❌ 不支援 | ❌ 不支援 |
| **社群伺服器 / LAN 區網 / P2P** | ✅ 支援 | ✅ 支援 (`online-mode=false`) | ✅ 支援 |
| **單人模組整合包** | ✅ 支援 | ✅ 支援 | ✅ 支援 |
| **自訂皮膚與披風** | ✅ 官方皮膚 | ⚠️ 預設外觀 | ✅ 對應皮膚站皮膚與披風 |

---

## ❓ 常見問題

### 可以使用離線帳號進入 Hypixel 等官方伺服器嗎？
不行。官方商業伺服器開啟了強制線上正版驗證（`online-mode=true`），必須使用購買了 Java 版的微軟帳號登入。

### 沒有正版如何與朋友連線？
您可以使用 XMCL 內建的 **P2P 多人連線 / 區域網路分享** 功能，或加入關閉正版驗證的社群伺服器。

👉 **[遇到微軟正版登入問題？查看微軟登入疑難排解指南](./microsoft-login-issues)**
