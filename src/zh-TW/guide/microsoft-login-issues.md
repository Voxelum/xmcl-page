# 微軟登入、基岩版與 Java 版差異及授權問題排解

本指南將詳細說明 XMCL 中微軟帳號的登入機制、為何會出現 **「failed to exchange Xbox token」**（或提示未購買）、為何遊戲會進入**試玩模式（Demo Mode）**、**基岩版（手機/主機）與 Java 版（PC）**的關鍵差異，以及常見登入問題的解決方法。

---

## 🔑 1. 使用微軟帳號登入

若要使用官方 Minecraft 正版授權登入，請依照以下步驟操作：

1. 點選右上角的使用者頭像（或**「管理帳號」**）開啟帳號管理面板：

   <video src="/guidephoto/My%20stuff.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

2. 點選**「新增帳號」**，選擇 **Microsoft**，並依提示完成登入：

   <video src="/guidephoto/add%20account.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

> 💡 **裝置代碼登入（Device Code）：**  
> 若您不想在啟動器內建視窗中輸入密碼，可勾選**「裝置代碼登入」**。XMCL 會產生一組 8 位代碼；只需在瀏覽器中開啟 [microsoft.com/link](https://microsoft.com/link)，輸入代碼即可完成授權。

---

## 🔍 2. 微軟三階段驗證機制

登入時，啟動器會經過三個獨立的驗證階段：

<div style="display: flex; flex-direction: column; gap: 16px; margin: 24px 0; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-weight: 600; font-size: 1.1rem; color: var(--vp-c-text-1);">🔑 三階段驗證流程：</span>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: center; margin: 10px 0;">
    <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #3b82f6; font-size: 0.85rem;">第 1 步</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">微軟 OAuth 驗證</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">校驗帳號密碼</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold;">➔</div>
    <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #10b981; font-size: 0.85rem;">第 2 步</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Xbox Live 服務</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">取得 Xbox 玩家代號</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold; color: #ef4444;">➔ ❌ 常見失敗點</div>
    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #ef4444; font-size: 0.85rem;">第 3 步 (Token 交換)</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Mojang Java 版授權</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">校驗 PC Java 正版</div>
    </div>
  </div>
  <p style="font-size: 0.9rem; color: var(--vp-c-text-2); margin: 0; text-align: center; line-height: 1.6;">
    若第 3 步失敗，登入將回傳 <strong>「failed to exchange Xbox token」</strong>（或提示未購買），或者遊戲啟動後進入<strong>試玩模式（Demo Mode）</strong>。這代表 Mojang 伺服器未在此微軟帳號中找到有效的 <strong>Minecraft: Java 版</strong> 授權。
  </p>
</div>

---

## 🛑 3. 核心觀念：基岩版 vs. Java 版差異（最常見原因）

**XMCL 是 Minecraft: Java 版（PC / Windows / macOS / Linux）專用啟動器。**

許多玩家在手機或主機上購買了遊戲，嘗試在 XMCL 中登入時會發生錯誤：

| 購買平台與管道 | 擁有的版本 | XMCL 是否支援？ | 失敗原因說明 |
| :--- | :--- | :--- | :--- |
| 📱 **手機版（iOS / Android / Google Play）** | 基岩版 (Bedrock) | ❌ 否 | 行動裝置版授權不包含 PC 上的 Java 版。 |
| 🎮 **PlayStation 4 / 5 主機版** | 基岩版 (Bedrock) | ❌ 否 | PSN 商店購買僅限主機遊玩。 |
| 🎮 **Xbox One / Series X\|S 主機版** | 基岩版 (Bedrock) | ❌ 否 | 主機版購買無法轉移至 PC Java 版。 |
| 🕹️ **Nintendo Switch 掌機版** | 基岩版 (Bedrock) | ❌ 否 | 任天堂 eShop 購買僅限 Switch 使用。 |
| 💻 **PC（Minecraft: Java 與基岩版組合包）** | Java 版 + 基岩版 | ✅ **是** | 官方完全支援！ |
| 🟢 **PC Game Pass / Ultimate 訂閱** | Java 版 + 基岩版 | ✅ **是** | 訂閱期間完全支援。 |

> ⚠️ **重要提醒：**  
> 若您之前僅在**手機**、**iPad**、**PS5/PS4**、**Xbox 主機**或 **Switch** 上購買過 Minecraft，Mojang 官方驗證系統將判定該微軟帳號**沒有 Java 版所有權**。  
> 若想在 PC 上遊玩 Java 版，您需要在 [Minecraft.net](https://www.minecraft.net/) 購買 **「Minecraft: Java & Bedrock Edition for PC」** 組合包，或開通 **PC Game Pass**。

---

## 🛠 4. 常見登入問題排解

### 原因 A：微軟帳號下沒有 Java 版授權

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #ef4444; font-weight: bold; font-size: 1.25rem;">
    🎮
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Mojang 未查詢到購買記錄</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">微軟帳號已成功驗證，但 Mojang 資料庫顯示該帳號未持有 PC Java 版授權。</p>
  </div>
</div>

#### 解決方法：
* **前往官網確認：** 前往 [Minecraft.net](https://www.minecraft.net/) 並登入該微軟帳號，確認個人檔案是否顯示 Java 版名稱，還是顯示「立即購買」。
* **核對訂單記錄：** 開啟 [account.microsoft.com/billing/orders](https://account.microsoft.com/billing/orders) 查看購買歷史，確認購買的是 PC 組合包還是手機/主機版。
* **確認電子郵件：** 避免誤登學校、公司或非主要購買的微軟信箱。
* **Game Pass 狀態：** 若透過訂閱遊玩，請確認 PC Game Pass 是否在有效期限內。

---

### 原因 B：未建立或未啟用 Xbox Live 玩家代號

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #f59e0b; font-weight: bold; font-size: 1.25rem;">
    👤
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">帳號缺少 Xbox Gamertag</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">新建立的微軟帳號可能尚未建立 Xbox 個人檔案，導致無法發行安全權杖。</p>
  </div>
</div>

#### 解決方法：
1. 造訪 [Xbox.com](https://www.xbox.com/) 官網。
2. 點選右上角**登入**。
3. 依頁面提示同意條款並設定一個 **玩家代號（Gamertag）**。
4. 等待 1~2 分鐘同步後，回到 XMCL 重新登入。

---

### 原因 C：網路連線受限或 DNS 異常

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(139, 92, 246, 0.05); border: 1px solid rgba(139, 92, 246, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(139, 92, 246, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #8b5cf6; font-weight: bold; font-size: 1.25rem;">
    🌐
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">無法連線至 Mojang 或 Xbox 認證伺服器</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">由於網路路由問題、防火牆限制或 DNS 解析異常，電腦無法與 <code>api.minecraftservices.com</code> 正常通訊。</p>
  </div>
</div>

#### 解決方法：
* **使用 VPN 或網路加速工具：** 登入前開啟連線工具以避開連線節點阻礙。
* **在 XMCL 中設定網路代理：**
  1. 點選左下角**設定**（齒輪圖示）。
  2. 進入**網路設定**。
  3. 填入您的代理伺服器資訊（支援 HTTP/HTTPS/SOCKS5）。
* **檢查 hosts 檔案：** 確保系統 hosts 檔案中沒有殘留的 `mojang.com` 重新導向規則。

---

## 🎮 尚未購買正版？

若您目前尚未購買正版，您依然可以透過**離線模式**或第三方皮膚站遊玩遊戲與自建模組伺服器。

👉 **[查看完整教學：無正版遊玩指南（離線模式與第三方皮膚站）](./offline-mode)**
