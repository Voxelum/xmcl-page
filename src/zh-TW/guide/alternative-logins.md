# 離線模式與第三方登入

本指南將說明如何在沒有正版 Minecraft 帳號的情況下，利用離線模式、開發者模式及第三方皮膚與登入服務遊玩 XMCL。

---

## 離線模式與第三方登入 (無需正版 Microsoft 帳號)

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
