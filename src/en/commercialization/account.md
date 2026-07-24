---
title: XMCL Account and sign-in
description: Learn how passwordless XMCL Accounts use Microsoft, Modrinth, Google, and Discord identities without replacing Minecraft game accounts.
---

# XMCL Account and sign-in

An **XMCL Account** is the identity used by XMCL services. It has no separate password: you sign in with Microsoft, Modrinth, Google, or Discord. The website manages the XMCL Account and its sign-in methods; it does not contain the launcher's Minecraft game-account list.

## How account recovery works

- Microsoft and Modrinth can create or restore the same XMCL Account used by the launcher.
- A verified Microsoft identity is enough for XMCL sign-in. It does not prove Minecraft ownership and does not depend on an Xbox profile or Gamertag.
- Google and Discord follow the same passwordless web flow. Their launcher entries remain unavailable until the launcher implements those provider logins.
- Email addresses, display names, Gamertags, and devices never trigger automatic linking or merging.

## Linking and conflicts

After signing in, you may link another provider through a fresh OAuth authorization. If that identity already belongs to another XMCL Account, XMCL returns `identity_conflict` without revealing the other account. The only continuation is a separately authenticated merge preview and explicit confirmation. A merge is never inferred from a matching email.

## Session and token safety

OAuth uses a one-time authorization-code transaction with PKCE, `state`, `nonce`, and an allowlisted callback. Provider credentials are used only for server-side verification. The browser keeps the XMCL access and refresh session in `sessionStorage` so it can restore the signed-in account in the current browser session; it never displays or logs either token and never stores provider tokens.

## Published shared policy

This account consumes the published `shared/v1` backup-storage policy through an XMCL session: the fixed free allowance is **1 GiB** (`1,073,741,824` bytes). It is policy only; M6 alone owns account usage, overage, object references, and settlement accounting.

## Current implementation status

Account management is available from the signed-in name in the system bar. It lists the public account state and linked identity display names, and allows local sign-out by revoking this browser session. Provider linking, unlinking, account deletion, and account merging remain intentionally unavailable from the public website.
