# Connecting Cloud AI Models (ChatGPT, Gemini, Claude, Qwen, Z.ai)

<!-- xmcl-auto-fallback -->
::: info Dieser Abschnitt ist noch nicht auf Deutsch verfügbar
Der Text wird auf Englisch angezeigt. Wenn Sie bei der Übersetzung helfen möchten, können Sie gerne im [xmcl-page GitHub-Repository](https://github.com/voxelum/xmcl-page) mitwirken.
:::

The XMCL **AI Agent** communicates using the standard **OpenAI Chat Completions API protocol** (`/v1/chat/completions`). This enables you to bring your own API keys from any commercial cloud provider to power the launcher assistant.

---

General Setup Workflow in XMCL

To connect any cloud provider:

1. Open XMCL and navigate to **Settings** -> **General**.
2. Enable **Developer Mode**.
3. Scroll down to the **AI Agent** section.
4. Fill in the **Endpoint**, **Model**, and **API Key** fields according to the instructions below.

::: tip Secret Storage & Encryption
All entered API keys are encrypted at rest using your operating system's native hardware-backed credential vault (Windows DPAPI, macOS Keychain, Linux Secret Service). Keys are isolated, never included in diagnostic logs or bug reports, and sent directly to your chosen provider.
:::

---

## 1. Google Gemini (Recommended)

Google provides fast and intelligent Gemini models with a generous free-tier allocation for developers.

* **Get API Key**: Visit [Google AI Studio](https://aistudio.google.com/) and click **Get API key**.
* **XMCL Settings**:
  - **Endpoint**: `https://generativelanguage.googleapis.com/v1beta/openai/chat/completions`
  - **Model**: `gemini-2.5-flash` (or `gemini-1.5-pro`, `gemini-1.5-flash`)
  - **API Key**: Your Google AI Studio key (`AIzaSy...`)

---

## 2. OpenAI (ChatGPT)

Official models from OpenAI known for exceptional reasoning and log analysis accuracy.

* **Get API Key**: Visit your [OpenAI Platform API Keys](https://platform.openai.com/api-keys) dashboard and create a secret key.
* **XMCL Settings**:
  - **Endpoint**: `https://api.openai.com/v1/chat/completions`
  - **Model**: `gpt-4o-mini` (fast and cost-effective) or `gpt-4o`
  - **API Key**: Your OpenAI secret key (`sk-...`)

---

## 3. Anthropic Claude (via OpenRouter / LiteLLM Gateway)

Claude models excel at parsing complex Java crash dumps and identifying subtle mod conflicts. Connect Claude to XMCL using an OpenAI-compatible gateway like OpenRouter:

* **Get API Key**: Create an account on [OpenRouter](https://openrouter.ai/) and generate a key.
* **XMCL Settings**:
  - **Endpoint**: `https://openrouter.ai/api/v1/chat/completions`
  - **Model**: `anthropic/claude-3.5-sonnet` (or `anthropic/claude-3-haiku`)
  - **API Key**: Your OpenRouter key (`sk-or-...`)

---

## 4. Alibaba Qwen (Tongyi Qianwen / DashScope)

Alibaba's Qwen family offers high token generation speeds and strong code understanding:

* **Get API Key**: Register on the [Alibaba Cloud DashScope Console](https://dashscope.console.aliyun.com/).
* **XMCL Settings**:
  - **Endpoint**: `https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions`
  - **Model**: `qwen-plus`, `qwen-turbo`, or `qwen-max`
  - **API Key**: Your DashScope API key (`sk-...`)

---

## 5. Z.ai / Zhipu AI (GLM-4)

The GLM-4 family from Zhipu AI (BigModel open platform):

* **Get API Key**: Register on the [Zhipu AI BigModel Platform](https://open.bigmodel.cn/) and create an API key in your console.
* **XMCL Settings**:
  - **Endpoint**: `https://open.bigmodel.cn/api/paas/v4/chat/completions`
  - **Model**: `glm-4-flash` (free tier) or `glm-4-plus`
  - **API Key**: Your BigModel API key

---

Verification & Testing

1. Press `Ctrl + Shift + A` (`Cmd + Shift + A` on macOS) anywhere in XMCL to open the AI assistant drawer.
2. Ask any question:
   ```text
   What optimization mods do you recommend for Fabric 1.20.1?
   ```
3. If the model streams a response, your setup is complete!

---

Common Error Codes

* **`401 Unauthorized`**: Check whether your API key was copied with accidental leading/trailing spaces, or check your provider account balance.
* **`404 Not Found`**: Ensure the Endpoint URL ends with `/v1/chat/completions`.
* **`429 Too Many Requests`**: You have hit the rate limit or quota on your provider account.
