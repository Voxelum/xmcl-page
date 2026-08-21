---
title: XMCL 開源專案隱私權聲明
description: XMCL 網站和開源啟動器的隱私權聲明，遵循相關個人資料保護法規與國際隱私標準。
---

# XMCL 開源專案隱私權聲明

**生效日期：2026 年 8 月 21 日 · 版本：OP2-2026-08-21**

本聲明適用於 XMCL 公共網站（[xmcl.app](https://xmcl.app)）及免費開源啟動器。本聲明不適用於 XMCL Together 的付費服務、帳戶、帳務、AI 或多人連線信令/TURN 服務，該部分由獨立的 [XMCL Together 隱私權政策](./together/privacy) 規範。

---

## 1. 個人資料保護與聯絡資訊

XMCL 為由 CI010 與 Voxelum 開源社群維護之獨立開放原始碼專案。
- **個人資料保護聯絡信箱：** [cijhn@hotmail.com](mailto:cijhn@hotmail.com)
- **原始碼儲存庫：** [github.com/voxelum/x-minecraft-launcher](https://github.com/voxelum/x-minecraft-launcher)
- **社群支援：** [XMCL Discord](https://discord.gg/W5XVwYY7GQ)

---

## 2. 蒐集之資料與資料最小化原則

專案遵循嚴格的「資料最小化」與「去識別化」原則：

### 官方網站 (xmcl.app)
- **統計資訊：** 使用 Microsoft Azure Application Insights 記錄匿名瀏覽量、下載選項及基本瀏覽器環境。
- **Cookie 使用：** 僅儲存用於記錄語言偏好之技術 Cookie，不包含任何第三方行銷或跨網站追蹤 Cookie。

### 開源啟動器
- **選擇性遙測 (Opt-in)：** 診斷遙測功能**預設為關閉**。僅在您於啟動器設定中主動開啟時，方會傳輸：
  - 隨機產生的匿名化裝置識別碼；
  - 遊戲啟動與結束代碼、應用程式版本；
  - 執行階段環境規格（作業系統、Java 版本、處理器架構）；
  - 錯誤與崩潰堆疊追蹤（Stack Trace）。
- **敏感資訊過濾：** 錯誤日誌將自動過濾使用者名稱與本機檔案路徑。我們**絕不會**蒐集或儲存您的 Microsoft/Mojang 密碼或存取權杖。

---

## 3. 保存期限

我們明確訂定資料保存期限：
- 所有診斷日誌、遙測資料及錯誤報告**最多僅保留 90 天**，期滿後即自動永久刪除或進行不可逆之匿名化。
- 於 GitHub Issues 公開提交之技術討論則依 GitHub 平台規則與專案管理規範留存。

---

## 4. 跨境傳輸與第三方雲端服務

- 專案使用國際知名雲端服務（Microsoft Azure、Cloudflare、GitHub、Vercel）以確保全球下載與服務穩定性。
- **免責與風險告知：** 本專案為國際開放原始碼專案，未在各地設立實體。使用者開啟遙測或提交工單，即代表瞭解並主動同意將必要的去識別化技術資料傳輸至境外伺服器。
- 我們絕不出售個人資料，亦不將其用於跨情境行為廣告。

---

## 5. 使用者法定權利

依據相關法規，您享有以下權利：
1. 查詢或請求閱覽您的個人資料；
2. 請求製給複製本；
3. 請求補充或更正；
4. 請求停止蒐集、處理或利用（可隨時於啟動器設定中關閉遙測）；
5. 請求刪除（「被遺忘權」）。

如需行使上述權利，請透過電子郵件聯絡：**cijhn@hotmail.com**。

---

## 6. 免責聲明

XMCL 為獨立開源專案，與 Microsoft Corporation 或 Mojang Studios 無任何附屬或官方合作關係。
