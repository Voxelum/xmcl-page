# 实例存储格式

> 施工中

XMCL 和 multimc 类似，是存储实例信息的。

这些信息分别存储与 [xmcl 数据目录](/zh/guide/manage#xmcl-缓存及数据库)

<!-- ```bash
.
├─ instances
│  ├─ .vitepress
│  │  └─ config.js
│  ├─ api-examples.md
│  ├─ markdown-examples.md
│  └─ index.md
└─ package.json
``` -->

```sh
xmcl数据目录
└─ 📜instances.json # 全局实例配置文件
```

以及 [xmcl 游戏数据目录](/zh/guide/manage#minecraft-相关数据)中

```sh
xmcl游戏数据目录
└─📂instances # 放置着实例的文件
  ├─📂instance-a
  │ └─ 📜instance.json # 实例 A 的 配置文件
  └─ 📂instance-b
    └─ 📜instance.json # 实例 B 的配置文件
```

## 全局配置文件格式

这里假定你的 XMCL 数据存储在 `/path/to/xmcl`.

```json5
{
    // 这个是上次选择的实例，启动器开启时会选择这个
    "selectedInstance": "/path/to/xmcl/instances/instance-a",
    // 这个是缓存的所有实例列表，从外部导入的实例路径也会放在这，删除了启动器就找不到了
    "instances": [
        "/path/to/xmcl/instances/instance-a",
        "/path/to/xmcl/instances/instance-b",
        // 外部实例
        "/external/.minecraft"
    ]
}
```

## 实例配置文件

假如你创建了一个

这里以 `/path/to/xmcl/instances/mc.hypixel.com` 举例子



```json5
{
    // 启动器中显示的名字
    "name": "mc.hypixel.com",
    // 暂时未启用，设置实例游戏的分辨女
    "resolution": { "width": 800, "height": 400, "fullscreen": false },
    // 最小内存
    "minMemory": 0,
    // 最大内存
    "maxMemory": 0,
    // jvm 的额外启动参数
    "vmOptions": [],
    // mc 的额外启动参数
    "mcOptions": [],
    "url": "",
    // 实例图标的 URL
    "icon": "",
    // 启动后 xmcl 是否显示 log 窗口
    "showLog": false,
    // 是否启动后隐藏启动器
    "hideLauncher": true,
    // 实例需要的版本，空字符串代表着不需要
    "runtime": {
        "minecraft": "1.16.3",
        "forge": "",
        "liteloader": "",
        "fabricLoader": "",
        "yarn": "",
        "optifine": "",
        "quiltLoader": ""
    },
    // java 的路径，空代表着自动激素按
    "java": "",
    // 手工指定的启动版本，空代表根据 runtime 计算
    "version": "",
    // 服务器地址，如果有这个，启动器会直接并进入这个服务器
    "server": { "host": "mc.hypixel.net", "port": 25565 },
    // 整合包的作者
    "author": "ci010",
    // 描述
    "description": "",
    "lastAccessDate": 1661774086015,
    "creationDate": 1602514422594,
    "modpackVersion": "",
    "fileApi": "",
    "tags": [],
    "assignMemory": false,
    // 是否快速启动
    "fastLaunch": false
}

```