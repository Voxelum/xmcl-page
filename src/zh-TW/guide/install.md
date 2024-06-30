# 安裝指南

啟動器提供了多種安裝格式，其中一些安裝格式較為**少見**或**特殊**的格式特性。

## 安裝格式

### APPX

APPX 是 Windows 10 提供的一種帶虛擬化/沙箱運行程序的**安裝包**格式，透過 APPX 安裝的程序都會在 Windows 沙箱中運行。

對於用戶最大的感知就是，這種程序的應用`快取文件`、`登錄表修改`等操作都會被隔離 —— 你卸載這個應用時，`快取`和`登錄表修改`都會一併刪除。

:::info 好消息
~~不用擔心程序在登錄表裡到處拉屎了，雖然XMCL唯一添加的登錄表可能就是檔案後綴關聯~~
:::

AppX 的更新是走 [appinstaller](https://learn.microsoft.com/zh-tw/windows/msix/app-installer/auto-update-and-repair--overview#app-installer-file) 機制的。根據 appinstaller 自帶的[自動更新](https://learn.microsoft.com/zh-tw/windows/msix/app-installer/auto-update-and-repair--overview#automatic-updates)策略，XMCL 會在用戶**啟動應用**時檢查更新，若有更新則下次啟動會更新。

:::tip 好消息
APPX 的自動更新支援 Windows 的**優化傳遞**，以及**增量更新** —— 只更新變化的内容
:::

### 在線安裝 (appinstaller)

`appinstaller` 本質上和 `APPX` 格式相同，`appinstaller` 本身是個 `XML` 文本檔，裡面儲存著 `APPX` 的 `URL`。彈出安裝界面時會嘗試下載 `APPX` 並安裝。因此其更新機制和 `APPX` 是相同的。

### AppImage

AppImage 是一種 Linux 應用程序的格式，它可以在任何 Linux 桌面上運行，而無需安裝。AppImage 檔案是可執行的，只需雙擊或從終端運行即可。

這是 XMCL 唯一提供的非安裝式的程序 (~~其實是很不想支援的~~)。因此他的更新機制和其它的格式都不同，他需要用戶自行下載一個新的 AppImage 來更新。

### 其他格式

目前其他的安裝格式安裝後，都要么支援[熱更新]，要么支援 electron-builder 自帶的更新方式。這種更新模式一般來說不需要太在意（~~更新不了也可以重新下~~）。

:::tip 熱更新
熱更新是指啟動器自行替換核心的 asar 檔案 (~30mb)，不需要完整重新下載啟動器
:::

## 遊戲數據目錄的選擇

在初次安裝時，用戶需要選擇`遊戲數據目錄`。XMCL 將會把下載的 `assets`, `libraries`, `versions` 等放置到這個目錄下。

:::warning 注意
而如同引導頁描述的一樣，因為 XMCL 的檔案結構較為特殊，不建議使用**原始**的 Minecraft 遊戲目錄作為 XMCL 的數據目錄。
:::

這裡推薦選擇一個新的資料夾作為 XMCL 的`遊戲數據目錄`。

關於遊戲數據目錄的結構，詳細請看[資料管理指南](/zh/guide/manage.md#minecraft-相關資料)。