# Agnes AI Setup

This guide helps you configure the built-in AI Agent in XMCL.

::: tip Agnes AI is free
**Agnes AI is completely free to use.** You only need to create a free API key
— there is no payment, subscription, or credit card required.
:::

After completing this page, you should be able to:

- open the AI Agent dialog;
- diagnose crash logs with the built-in agent;
- run agent tools (mod toggle, install, config search/edit, etc.).

## What You Need

- XMCL latest version.
- Internet access.
- A free Agnes AI API key.

## Step 1: Get Your Agnes AI API Key

1. Open the Agnes AI developer portal.
2. Create or sign in to your account.
3. Create an API key.
4. Copy and store the key safely.

![Agnes AI console page showing where to create/copy API key.](create-and-copy.webp)

## Step 2: Open XMCL Agent Settings

1. Open XMCL.
2. Go to **Settings -> General**.
3. Enable **Developer Mode**.
4. Scroll to the **AI Agent** section.

![XMCL General settings with Developer Mode and AI Agent section highlighted](general-setting.webp)

## Step 3: Fill Agent Fields

In **AI Agent** settings:

- **API Key**: paste your Agnes key.
- **Model**: keep default unless instructed otherwise.
- **Endpoint**: keep default unless instructed otherwise.

Default Agnes endpoint:

```text
https://apihub.agnes-ai.com/v1/chat/completions
```

![AI Agent form with API Key / Model / Endpoint fields and example values](general-setting.webp)

## Step 4: Verify It Works

1. Press `Ctrl/Cmd + Shift + A` to open the Agent dialog.
2. Send a simple message like: `list my installed mods`.
3. Confirm the assistant replies without configuration error.

## Troubleshooting

### Agent does not open

- Confirm **Developer Mode** is enabled.
- Restart XMCL once after enabling Developer Mode.

### "Not configured" warning still appears

- Re-check API key (no extra spaces/new lines).
- Ensure endpoint is reachable from your network.

### Request failed / 401 / 403

- API key is invalid, expired, or has no permission.
- Regenerate key in Agnes portal and paste again.

### Request timeout

- Check firewall/proxy.
- Try again with default endpoint.

## Security Notes

- Treat API keys like passwords.
- Do not share screenshots containing your key.
- Rotate keys if you suspect leakage.
