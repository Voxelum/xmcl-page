# 故障排查

因为启动器还是 `beta` 阶段，常常会遇到一些莫名其妙的情况。:cry:

这种情况，推荐大家尽快联系、并将日志发送给开发团队，但是大家也可以自己做一些简单的排查，对于一些情况也有立刻的**解决办法**。

这里总结一下一些常见的故障，以及处理方式。

## 启动器程序无法打开

这是糟糕的情况，希望大家别遇到。:sob:

但如果遇到启动器程序无法打开，请去[XMCL 数据目录](./manage#xmcl-缓存及数据库)中寻找到 `logs` 文件夹，确认其中有最新的 `main.log` 文件。

将 `logs` 文件夹打包并发送给开发团队寻求帮助。

你同样可以尝试使用命令行启动启动器

:::code-group

```cmd [Windows]
java -jar xmcl.jar
```

```sh [macOS]
java -jar xmcl.jar
```

```sh [Linux]
java -jar xmcl.jar
```

:::

## 启动器卡在某一个状态

比如某个组件一直转圈，或者某个页面一直在加载，或者某个下载一直在等待。

尝试 `ctrl+R` 刷新启动器页面，或者重启启动器。

若还是无法解决，请去[XMCL 数据目录](./manage#xmcl-缓存及数据库)中寻找到 `logs` 文件夹，确认其中有最新的 `main.log` 文件。

## 文件损坏一直无法修复

比如一直提示某一个库文件损坏，无法修复。

请根据提示的文件路径，去[XMCL 游戏数据目录](./manage#游戏数据-Minecraft)中删除对应的文件。

例如提示这个库一直损坏：

```sh
libraries/org/scala-lang/scala-parser-combinators_2.11-1.0.1
```

请去 `libraries/org/scala-lang` 文件夹中删除 `scala-parser-combinators_2.11-1.0.1` 文件夹。

若无法修复请联系开发团队。

