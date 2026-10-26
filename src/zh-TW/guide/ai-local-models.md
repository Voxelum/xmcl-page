# Connecting Local AI Models (Ollama, LM Studio)

<!-- xmcl-auto-fallback -->
::: info 本章節暫無繁體中文翻譯
目前內容以英文顯示。如果您願意協助翻譯或改進文件，歡迎造訪 [xmcl-page GitHub 倉庫](https://github.com/voxelum/xmcl-page) 提交 PR。
:::

XMCL lets you connect **locally running LLMs** executing directly on your own computer's GPU or CPU. This provides:
* **Absolute Privacy**: Zero telemetry, prompts, or Minecraft crash dumps leave your local network.
* **100% Free**: No recurring subscriptions, token metering, or quota exhaustion.
* **Offline Capability**: The assistant functions even when your internet connection is down.

---

Option 1: Ollama (Recommended & Simplest)

[Ollama](https://ollama.com/) is the leading open-source tool for running local AI models across Windows, macOS, and Linux.

### Step 1. Install Ollama and pull a model

1. Download and run the installer from [ollama.com](https://ollama.com/).
2. Open a terminal and download your desired model:
   ```bash
   # Lightweight model for standard laptops (~4 GB RAM):
   ollama run llama3.2

   # Excellent model for code, mods, and reasoning (~8 GB VRAM / RAM):
   ollama run qwen2.5:7b
   ```
3. Ensure the Ollama background daemon is running (indicated by the llama icon in your system tray).

### Step 2. Configure XMCL

1. Open XMCL -> **Settings** -> **General**.
2. Toggle on **Developer Mode**.
3. In the **AI Agent** section, enter:
   - **Endpoint**: `http://localhost:11434/v1/chat/completions`
   - **Model**: `llama3.2` (or `qwen2.5:7b`, matching your pulled Ollama model tag).
   - **API Key**: Enter any placeholder string like `ollama` (Ollama ignores authorization, but XMCL expects a non-empty field).

---

Option 2: LM Studio

[LM Studio](https://lmstudio.ai/) is an intuitive desktop app for discovering, downloading, and hosting quantized GGUF models locally.

### Step 1. Start the local server in LM Studio

1. Download the app from [lmstudio.ai](https://lmstudio.ai/).
2. Search and download a model (e.g. `Qwen2.5-7B-Instruct` or `Llama-3.2-3B-Instruct`).
3. Click the **Developer / Local Server** tab on the left sidebar.
4. Select your downloaded model from the top dropdown.
5. Click **Start Server** (defaults to port `1234`).

### Step 2. Configure XMCL

1. In XMCL **Settings** -> **General** -> **AI Agent**, configure:
   - **Endpoint**: `http://localhost:1234/v1/chat/completions`
   - **Model**: Copy the model identifier displayed in LM Studio.
   - **API Key**: `lm-studio` (or any string).

---

Hardware Sizing & Recommended Models

Local inference speed depends heavily on your GPU VRAM or system RAM:

| Model Size | Recommended Hardware | Best Models for Minecraft Tasks |
| :--- | :--- | :--- |
| **1B – 3B Parameters** | Any modern laptop, 6–8 GB RAM | `llama3.2:1b`, `llama3.2:3b`, `qwen2.5:3b` |
| **7B – 8B Parameters** | GPU with 6–8 GB VRAM (RTX 3060/4060) or 16 GB RAM | `qwen2.5:7b`, `llama3.1:8b`, `mistral:7b` |
| **14B+ Parameters** | Dedicated GPU with 12–16+ GB VRAM | `qwen2.5:14b`, `deepseek-coder-v2` |

::: tip Best Model for Crash Logs
The `qwen2.5` model series (especially `qwen2.5:7b`) exhibits the highest accuracy when parsing Java crash stack traces, identifying missing dependencies, and suggesting mod resolutions among compact open-weights models.
:::

---

Troubleshooting Local Setups

* **`Connection Refused (ECONNREFUSED)`**: The local inference daemon is not active. Verify that Ollama or LM Studio's server is running in the background before querying.
* **Slow Responses / High Latency**: The model is too large for your GPU memory and is spilling layers onto the CPU. Switch to a smaller parameter model (like `llama3.2:3b`) or a 4-bit quantized version (`q4_k_m`).
* **`Model not found`**: Double check the model tag spelling in XMCL settings against your running server.
