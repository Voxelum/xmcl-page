# 安裝指南

啟動器提供了多種安裝格式，其中一些安裝格式較為，在這裡將著重介紹一下**少見**或**特殊**的格式特性。

## Windows

:::info
Windows 推薦使用 `APPX` 或 `線上安裝 (appinstaller)` 安裝
:::

### APPX

APPX 是 Windows 10 提供的一種帶虛擬化/沙箱運行程式的**安裝包**格式，透過 APPX 安裝的程式都會在 Windows 沙箱中運行。

對於使用者最大的感知就是，這種程式的應用程式`快取檔案`、`登錄檔修改`等操作都會被隔離 —— 你解除安裝這個應用程式的時候，`快取`和`登錄檔修改`都會被一併刪除。

:::info 好消息
~~不用擔心程式在登錄檔裡到處拉屎了，雖然XMCL唯一新增的登錄檔可能就是檔案後綴關聯~~
:::

AppX 的更新是走 [appinstaller](https://learn.microsoft.com/en-us/windows/msix/app-installer/auto-update-and-repair--overview#app-installer-file) 機制的。根據 appinstaller 自帶的[自動更新](https://learn.microsoft.com/en-us/windows/msix/app-installer/auto-update-and-repair--overview#automatic-updates)策略，XMCL 會在使用者**啟動應用程式**時檢查更新，若有更新則下次啟動會更新。

:::tip 好消息
APPX 的自動更新支援 Windows 的**最佳化傳遞**，以及**增量更新** —— 只更新變化的內容
:::

### 線上安裝 (appinstaller)

`appinstaller` 本質上和 `APPX` 格式相同，`appinstaller` 本身是個 `XML` 文字檔案，裡面儲存著 `APPX` 的 `URL`。彈出安裝介面時會嘗試下載 `APPX` 並安裝。因此其更新機制和 `APPX` 是相同的。

### Windows 7/8

由[龍騰](https://github.com/longteng-H)([bilibili](https://space.bilibili.com/1030667057))發現並提供的解決方案

:::details 如何在win10以下系統運行 XMCL
預設情況下xmcl不支援原生win7運行，透過安裝VxKex 擴展核心以補全所需運行庫來運行，這對已然處於舊系統的使用者提供了一個解決方案（註：此方式同樣適用於一些無法在老系統上正常運行的軟體）

1. 下載並安裝 [VxKex-NEXT](https://github.com/YuZhouRen86/VxKex-NEXT) 擴展核心. 此處提供的是國內的一個分支 ([藍奏雲](https://geekerz.lanzoue.com/b0ra5olfi), [百度網盤](https://pan.baidu.com/s/1w0JUk4JpoKiZQVi2LMoqwA?pwd=0000))
2. 找到 X Minecraft Launcher.exe，並給其啟用 VxKex。如果不會請參考影片
[【讓 Win7 強行相容 Win10 應用程式？VxKex 擴展核心安裝體驗】]( https://www.bilibili.com/video/BV1SedHYsE6b/?share_source=copy_web&vd_source=bcfefb5f9c9518f3326b2f5096fea0fc)
![](https://raw.githubusercontent.com/longteng-H/longteng_H/refs/heads/main/PixPin_2025-05-17_00-22-13.png)
勾選[為此程式啟用VxKex NEXT]和[報告其他版本的Windows]，套用，確定

此時xmcl即可在win7上正常運行，除聯機外，其他功能均正常
:::

## MacOS

:::warning
Mac 使用者需要允許安裝破解軟體。
由於 XMCL 未簽名，您需要在系統設定中允許其運行。
:::

### DMG

我們僅為 MacOS 使用者提供 DMG 格式。DMG 格式是一種磁碟映像格式，可以掛載為虛擬磁碟。開啟 DMG 後，將應用程式拖到 `Applications` 資料夾中以進行安裝。

但因為 XMCL 沒有蘋果的程式碼簽名，你需要允許你的蘋果系統安裝任意來源的應用程式才能使用，安裝後請開啟終端機輸入以下指令：

```sh
# 允許來自任何來源的軟體
sudo spctl --master-disable
# 清除隔離屬性
sudo xattr -c /Applications/X\ Minecraft\ Launcher.app
```

如果您將 X Minecraft Launcher.app 安裝到其他位置，只需使用該路徑替換 `/Applications/X\ Minecraft\ Launcher.app`。

## Linux

:::info
Linux 的發行版太多了……這裡只提一下 `AppImage` 格式，歡迎大家補充
:::

### AppImage

AppImage 是一種 Linux 應用程式的格式，它可以在任何 Linux 桌面上運行，而無需安裝。AppImage 檔案是可執行的，只需雙擊或從終端機運行即可。

這是 XMCL 唯一提供的非安裝式的程式 (~~其實是很不想支援的~~)。因此他的更新機制和其他的格式都不同，他需要使用者自行下載一個新的 AppImage 來更新。

### 其他格式

目前其他的安裝格式安裝後，都要麼支援[熱更新]，要麼支援 electron-builder 自帶的更新方式。這種更新模式一般來說不需要太在意（~~更新不了也可以重新下~~）。

:::tip 熱更新
熱更新是指啟動器自行替換核心的 asar 檔案 (~30mb)，不需要完整重新下載啟動器
:::

## 遊戲資料目錄的選擇

在初次安裝時，使用者需要選擇`遊戲資料目錄`。XMCL 將會把下載的 `assets`, `libraries`, `versions` 等放置到這個目錄下。

:::warning 注意
而如同引導頁描述的一樣，因為 XMCL 的檔案結構較為特殊，不建議使用**原始**的 Minecraft 遊戲目錄作為 XMCL 的資料目錄。
:::

這裡推薦選擇一個新的資料夾作為 XMCL 的`遊戲資料目錄`。

關於遊戲資料目錄的結構，詳情請看[資料管理指南](/zh-TW/guide/manage.md#minecraft-相關資料)。