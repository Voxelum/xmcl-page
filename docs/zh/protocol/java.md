# Java 数据缓存

XMCL 检查过、找到的 java 都会缓存在 JSON 文件中，这个 JSON 文件会保存在 [xmcl 数据目录下](/zh/guide/manage#xmcl-缓存及数据库)。

```sh
xmcl数据目录
└─ java.json # java 缓存文件
```

## Java 缓存 JSON 格式

```json5
{
    "all": [
        {
            // 可执行文件的路径
            "path": "path/to/java",
            // 缓存到的版本
            "version": "11.0.6",
            // 大版本号
            "majorVersion": 11,
            // 是否可访问+可执行
            "valid": true
        },
    ]
}
```
