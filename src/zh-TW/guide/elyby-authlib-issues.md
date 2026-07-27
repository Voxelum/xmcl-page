# Ely.by Authlib 相容性問題

本指南將說明為何在 XMCL 中啟動較新版本的 Minecraft 時會出現 **「Ely.by Authlib 相容性問題」** 警告，以及如何在實例或啟動器設定中解決此問題。

---

## ⚠️ 為何會出現此警告？

使用 **Ely.by 帳號** 登入時，XMCL 會自動載入 **Ely.by Authlib 替換檔**，以便從 Ely.by 伺服器載入自訂皮膚與進行身分驗證。

然而，對於較新的 Minecraft 版本（如 **1.20.5+** 或 **1.21.x**），Ely.by 的 Authlib 注入器可能尚未完全相容 Mojang 新版程式碼，XMCL 偵測到潛在不相容時即會提示警告。

---

## 🛠 如何解決此問題

### 方法 1：在實例設定中停用 Ely.by Authlib（推薦）

1. 開啟 XMCL 並選擇您的 Minecraft 實例。
2. 點擊 **實例設定**（目前實例的齒輪圖示）。
3. 找到 **「停用 Ely.by Authlib」**（*Disable Ely.by Authlib*）選項。
4. 將開關切換為 **開啟**（ON）。
5. 啟動遊戲即可正常進行。

### 方法 2：全域停用 Ely.by Authlib

1. 點擊左側邊欄的 **設定** 齒輪圖示。
2. 在全域設定中開啟 **「停用 Ely.by Authlib」**。
