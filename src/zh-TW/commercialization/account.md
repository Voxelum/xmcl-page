---
title: XMCL 帳戶與登入
description: 瞭解 XMCL 帳戶如何透過 Microsoft、Modrinth、Google 與 Discord 免密碼登入，同時與 Minecraft 遊戲帳戶保持獨立。
---

# XMCL 帳戶與登入

**XMCL 帳戶**用來識別 XMCL 服務中的使用者，不設獨立密碼。你可以透過 Microsoft、Modrinth、Google 或 Discord 登入。官網只管理 XMCL 帳戶及其登入方式，不包含啟動器中的 Minecraft 遊戲帳戶清單。

## 建立與還原帳戶

- Microsoft 與 Modrinth 可以建立或還原啟動器使用的同一個 XMCL 帳戶。
- Microsoft 身分驗證成功即可登入 XMCL；這不代表擁有 Minecraft，也不依賴 Xbox profile 或 Gamertag。
- Google 與 Discord 使用相同的免密碼網頁流程；啟動器實作對應登入前，不會顯示為可用的啟動器入口。
- 電子郵件、顯示名稱、Gamertag 與裝置都不會觸發自動綁定或合併。

## 綁定與衝突

登入後，可以透過一次新的 OAuth 授權綁定其他 provider。若該身分已屬於另一個 XMCL 帳戶，服務只會傳回 `identity_conflict`，不會洩漏對方帳戶資訊。之後必須分別驗證兩個帳戶、檢視合併預覽並明確確認。相同電子郵件絕不會自動觸發合併。

## Session 與 token 安全

OAuth 使用包含 PKCE、`state`、`nonce` 與回呼位址允許清單的一次性 authorization code transaction。Provider 憑證只在伺服器端完成驗證。瀏覽器會將 XMCL access 與 refresh session 存在 `sessionStorage`，以便在目前的瀏覽器工作階段中恢復登入狀態；頁面不會顯示或記錄這些 token，也絕不儲存 provider token。

## 已發布的共享政策

此帳戶透過 XMCL session 使用已發布的 `shared/v1` 備份儲存政策：固定免費額度為 **1 GiB**（`1,073,741,824` bytes）。此政策不包含用量；M6 獨自擁有帳戶用量、超額、物件參照與結算記錄。

## 目前實作狀態

帳戶管理可從 SystemBar 中已登入的使用者名稱進入，呈現公開的帳戶狀態與已綁定身分的顯示名稱，並可藉由撤銷目前瀏覽器 session 登出。身分綁定、解除綁定、帳戶刪除與帳戶合併仍不會在官網公開提供。
