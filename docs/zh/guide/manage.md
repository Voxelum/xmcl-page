# 数据存储

XMCL 的数据分为2个部分

1. XMCL 作为 chromium 生成的缓存，数据库等
2. Minecraft 相关的数据

## XMCL 缓存及数据库

其中 XMCL 本身相关的缓存会存储到系统 appdata 路径中，而这个路径不同平台是不一样的。

::: code-group
```cmd [Windows]
%AppData%\xmcl
```
```cmd [Windows (APPX/appinstaller)]
# 版本 < 0.34
%LocalAppData%\Packages\XMCL_ncdvebj03zfcm\LocalCache\Roaming\xmcl
# 版本 >= 0.34
%LocalAppData%\Packages\XMCL_68mcaawk44tpj\LocalCache\Roaming\xmcl
```
```sh [macOS]
~/Library/Application Support/xmcl
```
```sh [Linux]
~/.config/xmcl
```
:::

:::warning 注意
请勿随意删除这里的文件，除非你知道你在干什么
:::

在这里你会找到一些 `json` 文件用于存储各种配置，数据库也会存放在这。

- [用户数据](../protocol/user.md)。存储用户的账号，皮肤链接等。存储在 `/user.json` 文件中。
- [全局配置](../protocol/setting.md)。全局设置，如语言，代理 URL，下载节点等。存储在 `/settings.json` 文件中。
- [实例缓存](../protocol/instance.md)。记录了上次选择的实例路径，已经所有已知实例的路径。存储在 `/instances.json` 文件中。
- [Java 缓存](../protocol/java.md)。记录已经检测到的 Java 路径、版本信息等。存储在 `/java.json` 文件中。
- [资源数据库](../protocol/resources.md)。资源文件的元数据，如解析出的 mod 信息等。存储格式是 `leveldb`，存储在 `/resources-v2` 文件夹。
- [日志](../protocol/logs.md)。XMCL 历史日志。存储在 `/logs` 文件夹中

## 游戏数据 (Minecraft)

我相信大家对于 Minecraft 的数据目录结构非常清楚。
XMCL 的数据目录和 Minecraft 的比稍有不同：

```sh {9}
.
├─ mods
│  ├─ modA.jar # 上面实例连接的实际文件
│  └─ modB.jar
├─ resourcepacks # 上面实例 resourcepacks 链接的真实地址
├─ shaderpacks # 上面实例 shaderpacks 链接的真实地址
├─ versions # 所有版本的存储文件夹
├─ assets # 所有游戏资源的存储文件夹
├─ instances # 所有由 XMCL 自动创建的（导入除外）实例都在这里
└─ libraries # 所有库文件的存储文件夹
```

大部分内容其实和 Minecraft 相同，其中 `instances` 中包含了所有实例文件。

```sh {9}
.
├─ mods
│  ├─ modA.jar # 上面实例连接的实际文件
│  └─ modB.jar
├─ resourcepacks # 上面实例 resourcepacks 链接的真实地址
├─ shaderpacks # 上面实例 shaderpacks 链接的真实地址
├─ versions # 所有版本的存储文件夹
├─ assets # 所有游戏资源的存储文件夹
├─ instances # 所有由 XMCL 自动创建的（导入除外）实例都在这里 // [!code focus]
└─ libraries # 所有库文件的存储文件夹
```