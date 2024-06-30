# AppX 迁移指南

本页面将指导您如何将您的数据从 AppX 版本迁移到 zip 版。

迁移的思路很简单：只需要将 AppX 版本的 xmcl 文件夹复制到通用的 AppData 位置。

> [!IMPORTANT] 重要
> 在迁移过程中**不要**提前删除 AppX 版本的应用。

## 找到你的 AppX 的数据目录

请前往以下路径找到您的 AppX 数据

```cmd [Windows (APPX/appinstaller)]
# 版本 < 0.34
%LocalAppData%\Packages\XMCL_ncdvebj03zfcm\LocalCache\Roaming\xmcl
# 版本 >= 0.34 且 < 0.40
%LocalAppData%\Packages\XMCL_68mcaawk44tpj\LocalCache\Roaming\xmcl
```

::: tip 提示
请使用文件资源管理器中的地址栏来导航到上面提到的路径。
:::

## 复制数据到通用 AppData

请将上一步的 `xmcl` 文件夹复制到

```cmd [Windows]
%AppData%\xmcl
```

## 检查并删除旧版

在确认 Zip 版的 XMCL 正常工作后，您可以删除旧的 AppX XMCL 应用。

::: tip 提示
删除 AppX 应用会**自动**删除旧的数据，所以您不需要担心数据残留。
:::
