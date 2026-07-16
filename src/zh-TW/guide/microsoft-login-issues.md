# Microsoft 帳號登入與演示模式指南

本指南將解釋如何在 XMCL 中新增您的 Microsoft 帳號，詳細分析登入認證原理，以及快速解決 **"failed to exchange Xbox token"** 或卡在**演示模式（Demo Mode）**等常見登入故障。

---

## 🔑 1. 如何新增 Microsoft 帳號

要使用您的官方正版帳號登入並暢玩 Minecraft，請按照以下步驟操作：

1. 點擊啟動器右上角的個人頭像/檔案（或 **「管理帳戶」**），打開帳戶管理器：

   <video src="/guidephoto/My%20stuff.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

2. 點擊 **「新增帳戶」**，選擇 **Microsoft**，然後按照螢幕指引完成登入：

   <video src="/guidephoto/add%20account.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

> 💡 **透過裝置代碼登入（Device Code）：**  
> 如果您不想在啟動器內直接輸入帳號密碼，可以勾選 **「透過裝置代碼登入」**（Login by Device Code）。XMCL 會為您顯示一個唯一的裝置代碼。只需使用您的網頁瀏覽器訪問 `microsoft.com/link`，輸入該代碼並確認，即可安全完成登入。

---

## 🔍 2. 詳解登入認證原理

為了能順利啟動正版 Minecraft，啟動器必須在三個不同的安全認證層級上依次驗證您的身份：

<div style="display: flex; flex-direction: column; gap: 16px; margin: 24px 0; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-weight: 600; font-size: 1.1rem; color: var(--vp-c-text-1);">🔑 身份驗證握手機制：</span>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: center; margin: 10px 0;">
    <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #3b82f6; font-size: 0.85rem;">步驟 1</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Microsoft 登入</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">核對帳戶密碼</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold;">➔</div>
    <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #10b981; font-size: 0.85rem;">步驟 2</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Xbox Live 服務</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">獲取玩家 Gamertag</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold; color: #ef4444;">➔ ❌ 在此攔截</div>
    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #ef4444; font-size: 0.85rem;">步驟 3 (兌換)</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Minecraft 權杖</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">核對正版遊戲授權</div>
    </div>
  </div>
  <p style="font-size: 0.9rem; color: var(--vp-c-text-2); margin: 0; text-align: center; line-height: 1.6;">
    如果介面提示 <strong>"failed to exchange Xbox token"</strong>，說明步驟 1 和步驟 2 已成功完成，但在步驟 3 時，Mojang 官方驗證伺服器拒絕了兌換。
  </p>
</div>

---

## 🛠 3. 三大主因排查與解決辦法

### 1. 當前 Microsoft 帳號未擁有 Minecraft 遊戲授權

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #ef4444; font-weight: bold; font-size: 1.25rem;">
    🎮
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">起因：Mojang 校驗伺服器在其資料庫中未查詢到已購記錄</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">這是最常見的情況。您的電子信箱密碼輸入無誤，但 Mojang 校驗介面回饋稱該 Microsoft 帳號並不持有 Minecraft Java 版的正版許可證。</p>
  </div>
</div>

#### 如何解決：
* **檢查遊戲所有權：** 登入 [Minecraft.net 官網](https://www.minecraft.net/) 並查看個人資料頁。確認您能直接看到下載遊戲的按鈕，而非提示您“立刻購買”。
* **確認 Game Pass 訂閱狀態：** 如果您是透過 **Xbox Game Pass (XGP)** 獲取遊戲，請確保您的 XGP 訂閱依然有效，並且您登入的電子信箱與訂閱了 XGP 的 Microsoft 帳號一致。
* **確認電子信箱地址是否正確：** 部分玩家會無意中登入了工作、學校電子信箱或備用 Microsoft 帳號，請核對實際購買了正版遊戲的帳號電子信箱。

---

### 2. 該 Microsoft 帳號沒有 Xbox Live 檔案 (缺失 Gamertag)

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #f59e0b; font-weight: bold; font-size: 1.25rem;">
    👾
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">起因：Microsoft 帳號尚未註冊遊戲角色</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">您的 Microsoft 帳號必須綁定一個有效的 Xbox Live 玩家檔案以供拉取正版憑證。如果您是剛購買了遊戲或從未運行過遊戲，可能還未創建該檔案，從而導致登入後卡在 <strong>「演示模式」</strong>。</p>
  </div>
</div>

#### 如何解決：
1. 訪問 [Xbox Live 官網](https://www.xbox.com/)。
2. 使用您的 Microsoft 帳號密碼登入。
3. 按照指引免費註冊一個 Xbox Live 帳戶（設定您的玩家代號 Gamertag 和頭像）。
4. 註冊成功後，重新啟動 XMCL 啟動器並重新登入帳戶。

---

### 3. 網路故障或連線被系統攔截

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(59, 130, 246, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #3b82f6; font-weight: bold; font-size: 1.25rem;">
    🌐
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">起因：DNS 污染或網路安全屏蔽</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">在特定地區或對於某些較為嚴格的網路運營商，連接到 Xbox Live 或 Mojang 驗證伺服器的通道可能會被防火牆阻斷、污染，導致網路丟包或驗證逾時。</p>
  </div>
</div>

#### 如何解決：
* **使用 VPN/加速器：** 如果您所在的地區網路受到嚴格過濾，請打開網路加速器或 VPN，然後嘗試完成 Microsoft 正版驗證。
* **修改本地 DNS 服務：** 將您的系統 DNS 手動修改為快速、安全的公共 DNS（例如 Google DNS: `8.8.8.8` 和 `8.8.4.4`）。
* **稍後重試：** Microsoft 校驗伺服器偶爾可能會出現波動。您可以稍等幾分鐘，網路通暢後再試。

---

## 🚪 4. 離線模式與第三方登入 (無需正版 Microsoft 帳號)

如果您不持有官方正版 Microsoft 帳號，或是處於沒有網路的環境下需要與本地區域網聯機，XMCL 同樣提供了極具彈性的第三方和離線登入方案。

### 方案 A：離線本地遊玩 (開發者模式)

**開發者模式**（Developer Mode）允許您在本地自定義任何玩家名字，且無需密碼直接離線進入遊戲。

1. 點擊右上角打開帳戶管理器。
2. 點擊 **「新增帳戶」**（Add Account）。
3. 選擇其中的 **開發者**（Developer）模式：

   <img src="/guidephoto/developer-mode.png" style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

4. 輸入任意您想要的玩家名字並確認。
5. 現在即可運行遊戲。**注意：** 離線帳戶只允許進入關閉了正版驗證（即伺服器端 `online-mode=false`）的聯機伺服器，並且您的皮膚外觀將是 Minecraft 預設的基礎外觀。

---

### 方案 B：自定義皮膚平台 (Yggdrasil 介面服務)

如果您希望在進入伺服器後展示您在特定皮膚站配置的個性皮膚，XMCL 原生支援透過 Yggdrasil 協定登入第三方平台（如 **LittleSkin**、**Ely.by** 或自建皮膚站）。

1. 前往帳戶管理器，點擊 **新增帳戶**。
2. 選擇您要登入的平台（例如 **LittleSkin**，或者使用 **Yggdrasil** 並填寫自建站的 API 介面 URL）。
3. 輸入您該第三方平台註冊的電子信箱及密碼：

   <img src="/guidephoto/reg-account.png" style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

4. 啟動器將自動從對應服務站抓取您的頭像、皮膚配置以及外置授權資訊。
