# Agnes AI 配置指南

本指南用于在 XMCL 中配置内置 AI Agent。

::: tip Agnes AI 完全免费
**Agnes AI 完全免费使用。** 你只需免费创建一个 API Key，
无需付费、订阅或绑定银行卡。
:::

完成后，你应该可以：

- 打开 AI Agent 对话框；
- 用内置 agent 诊断崩溃日志；
- 执行 agent 工具（模组启停、安装、配置搜索/修改等）。

## 你需要准备

- 最新版 XMCL。
- 可用网络连接。
- Agnes AI API Key（免费）。

## 第一步：获取 Agnes AI API Key

1. 打开 Agnes AI 开发者控制台。
2. 注册或登录账号。
3. 创建 API Key。
4. 复制并安全保存该 Key。

![Agnes AI 控制台中创建/复制 API Key 的位置](create-and-copy.webp)

## 第二步：打开 XMCL Agent 设置

1. 打开 XMCL。
2. 进入 **设置 -> 通用**。
3. 打开 **开发者模式**。
4. 下滑到 **AI Agent** 区域。

![XMCL 通用设置页面，突出显示开发者模式与 AI Agent 区域](<setup xmcl.webp>)

## 第三步：填写 Agent 字段

在 **AI Agent** 设置中填写：

- **API Key**：粘贴 Agnes Key；
- **Model**：无特殊需求保持默认；
- **Endpoint**：无特殊需求保持默认。

默认 Agnes Endpoint：

```text
https://apihub.agnes-ai.com/v1/chat/completions
```

![AI Agent 表单（API Key / Model / Endpoint）与示例值](<setup xmcl.webp>)

## 第四步：验证是否生效

1. 按 `Ctrl/Cmd + Shift + A` 打开 Agent 对话框；
2. 发送一条简单消息，例如：`list my installed mods`；
3. 确认助手返回结果且没有配置报错。

## 常见问题

### Agent 无法打开

- 确认已开启 **开发者模式**；
- 开启后重启一次 XMCL。

### 仍显示“未配置”

- 重新检查 API Key（避免首尾空格与换行）；
- 确认当前网络可访问 Endpoint。

### 请求失败 / 401 / 403

- API Key 无效、过期或无权限；
- 在 Agnes 控制台重新生成 Key 后再粘贴。

### 请求超时

- 检查防火墙/代理；
- 先改回默认 Endpoint 再测试。

## 安全建议

- 把 API Key 当作密码保管；
- 不要分享包含 Key 的截图；
- 若怀疑泄漏，请及时轮换 Key。
