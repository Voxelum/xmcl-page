# 数据存储

XMCL 的数据分为2个部分

1. XMCL 作为 chromium 生成的缓存，数据库等
2. Minecraft 相关的数据

## XMCL 缓存及数据库

其中 XMCL 本身相关的缓存会存储到系统 appdata 路径中，而这个路径不同平台是不一样的。假如你的用户名是 `foo`，那么数据将被存储在

::: code-group
```[Windows]sh
C:\Users\foo\AppData\Roaming\xmcl
```
```[Windows (APPX/appinstaller)]sh
# 版本 < 0.34
C:\Users\foo\AppData\Local\Packages\XMCL_ncdvebj03zfcm\LocalCache\Roaming\xmcl
# 版本 >= 0.34
C:\Users\foo\AppData\Local\Packages\XMCL_68mcaawk44tpj\LocalCache\Roaming\xmcl
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

## Minecraft 相关数据

我相信大家对于 Minecraft 的数据目录结构非常清楚。
XMCL 的数据目录和 Minecraft 的比稍有不同：

<script setup>
import CentraProjectTree from '../../../src/components/CentraProjectTree.vue'
</script>

<CentraProjectTree />

大部分内容其实和 Minecraft 相同，其中 `instances` 中包含了所有实例文件。
