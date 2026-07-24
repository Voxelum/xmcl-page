---
title: XMCL 账户与登录
description: 了解 XMCL 账户如何通过 Microsoft、Modrinth、Google 和 Discord 实现无密码登录，同时与 Minecraft 游戏账户保持独立。
---

# XMCL 账户与登录

**XMCL 账户**用于识别 XMCL 服务中的用户，不设置独立密码。你可以通过 Microsoft、Modrinth、Google 或 Discord 登录。官网只管理 XMCL 账户及其登录方式，不包含启动器中的 Minecraft 游戏账户列表。

## 账户创建与恢复

- Microsoft 和 Modrinth 可以创建或恢复启动器使用的同一个 XMCL 账户。
- Microsoft 身份验证成功即可登录 XMCL；它不代表拥有 Minecraft，也不依赖 Xbox profile 或 Gamertag。
- Google 和 Discord 使用相同的无密码网页流程；在启动器实现对应登录前，不会显示为可用的启动器入口。
- 邮箱、显示名、Gamertag 和设备都不会触发自动绑定或合并。

## 绑定与冲突

登录后，可以通过一次新的 OAuth 授权绑定其他 provider。如果该身份已属于另一个 XMCL 账户，服务只返回 `identity_conflict`，不会泄露对方账户信息。之后必须分别验证两个账户、查看合并预览并显式确认。相同邮箱绝不会自动触发合并。

## Session 与 token 安全

OAuth 使用带 PKCE、`state`、`nonce` 和回调地址白名单的一次性 authorization code transaction。Provider 凭据只在服务端完成验证。浏览器会将 XMCL access 与 refresh session 保存在 `sessionStorage`，以便在当前浏览器会话中恢复登录状态；页面不会显示或记录这些 token，也绝不会保存 provider token。

## 已发布的共享政策

此账户通过 XMCL session 消费已发布的 `shared/v1` 备份存储政策：固定免费额度为 **1 GiB**（`1,073,741,824` bytes）。该政策不包含用量；M6 独占账户用量、超额、对象引用和结算记录。

## 当前实现状态

账户管理可从 SystemBar 中已登录的用户名进入，展示公开的账户状态与已绑定身份的显示名称，并可通过撤销当前浏览器 session 退出。身份绑定、解绑、账户删除和账户合并仍不会在官网公开提供。
