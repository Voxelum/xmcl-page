
## KeyStone UI 常见问题 FAQ

### 版本隔离？不，XMCL中使用的是实例 (Instance)

大家熟悉的一些启动器，是使用"版本隔离"实现不同启动目标之间的数据隔离的

- .minecraft
  - assets
  - libraries
  - versions
    - 1.18.2
      - mods
      - saves
      - logs
    - 1.16.2-forge-33.0.61
      - logs
      - saves
      - mods

XMCL 是通过"实例隔离"来实现不同启动目标的数据隔离的，这点和 multimc 启动器，或 ftb 启动器更像

- .minecraft <- 这是个实例文件夹
  - mods
    - modA.jar <- 这个是一个硬链接，指向实际的 Mod jar 文件
  - resourcepacks <- 这个是一个软连接，指向一个公用的资源包仓库地址
  - shaderpacks <- 这个是一个软连接，指向一个公用的资源包仓库地址
  - logs
  - saves
  - instance.json <- 实例的配置文件，包含比如用什么java，启动什么版本，内存多少等信息

你可能对上述结构有所疑问，versions 呢？libraries 呢？不要急，那些都被存储在一个公用的数据文件夹下（就是启动器一开始让你选择的那个）

- <公用数据文件夹>
  - mods
    - modA.jar <- 上面实例连接的实际文件
  - resourcepacks <- 上面实例 resourcepacks 链接的真实地址
  - shaderpacks <- 上面实例 shaderpacks 链接的真实地址
  - versions
  - assets
  - libraries

这样的设计首先有一个显而易见的的好处：空间效率较高，重复的 mod、资源包等不会站额外空间。

那有什么坏处？可能是实例的文件夹不好直接复制来分享给别人了，但不用担心，启动器内置生成整合包功能。

-可能对一部分人的坏处就是学习成本-

实例，即是一组游戏配置，比如一组 Minecraft 版本，Forge 版本，java 版本，内存设置的组合。

一个实例对应着一个**实际的文件夹路径**，启动器选择用某个实例启动后，Minecraft 会在对应文件夹下生成 logs，游戏设置（options.txt）文件等。

XMCL是一个基于实例的启动器，你简单的创建、修改、删除实例。有些启动器叫这个功能**版本隔离**，但做的事情实际上大同小异。

对于一个实例一个文件夹，最大的好处还是玩家的 Mods 可以分开管理了。Mod 管理详情见 [Mod 管理](#) 部分。


### XMCL 和 PCL2, HMCL 比怎么样

由于经常有人问这个问题，我认为在这里明确对比 PCL2 和 HMCL 是有必要的

|                    | XMCL                                          | PCL2                          | HMCL                          |
| ------------------ | --------------------------------------------- | ----------------------------- | ----------------------------- |
| 如何实现多启动目标 | 实例隔离                                      | 版本隔离                      | 版本隔离                      |
| 跨平台             | Windows, Mac, Linux                           | Windows                       | Windows, Mac, Linux           |
| 启动器依赖         | 无依赖                                        | 需要用户有 .net               | 需要用户有 java               |
| 启动器大小         | 很大，压缩后~80mb左右                         | 很小，不算依赖<5mb            | 很小，不算依赖<5mb            |
| Mod 管理           | 集中式管理，使用硬链接管理到每个实例          | 支持安装到每个版本            | 支持安装到每个版本            |
| 资源包管理         | 集中式管理，使用软连接管理到每个实例          | 通过整合包支持?安装到每个版本 | 通过整合包支持?安装到每个版本 |
| 光影包管理         | 集中式管理，使用软连接管理到每个实例          | 无                            | 无                            |
| 拓展性             | 强，基于 web 技术，可以做到启动器**完全**换皮 | 支持 XAML 自定义主界面        | 支持设置中调整 UI             |
| Curseforge         | 支持，但暂时没有翻译                          | 支持，并使用自己的中文 api    | 支持                          |
| Modrinth           | 支持                                          | 无                            | 无                            |
| 导出整合包         | 支持 MCBBS，Curseforge                        | 好像不支持？                  | 支持 MCBBS，Curseforge        |

### 资源 Resource

目前资源在XMCL中指代了所有导入的

- 资源包
- 光影包
- Mod（模组）
- 整合包
- 地图

他们有统一的管理格式，启动器在导入时会辨别这些资源的元数据并加以利用，这样你就可以在启动器中看到 Mod 的具体信息了（如 modid、版本等）

### 版本 Version

版本就是玩家正常理解的 Minecraft 游戏版本，他们被存储在 `versions/<version-id>/<version-id>.json` 文件中。启动器在打开之初读取本地的这些版本信息。

## 安装游戏

用户首先需要进入版本设置，在首页中点击当前版本的标志：


## 实例管理

实例管理

## 资源

## Mod 管理


## 从 Curseforge 安装资源

##