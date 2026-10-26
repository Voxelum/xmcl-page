# Підключення хмарних моделей ШІ (ChatGPT, Gemini, Claude, Qwen, Z.ai)

Вбудований у XMCL клієнт **AI Agent** використовує відкритий протокол **OpenAI Chat Completions API** (`/v1/chat/completions`). Завдяки цьому ви можете підключити власні API-ключі від будь-якого популярного хмарного провайдера штучного інтелекту.

---

Загальний порядок налаштування в XMCL

Для підключення будь-якої хмарної моделі:

1. Відкрийте XMCL і перейдіть у **Налаштування (Settings)** -> **Загальні (General)**.
2. Увімкніть тумблер **Режим розробника (Developer Mode)**.
3. Прокрутіть до розділу **AI Agent**.
4. Введіть відповідні **Endpoint**, **Model** та **API Key** згідно з інструкціями нижче.

::: tip Безпека ключів
Усі введені API ключі шифруються системними засобами вашої ОС (Windows DPAPI, macOS Keychain, Linux Secret Service). Лаунчер зберігає їх ізольовано, ніколи не додає до діагностичних звітів і надсилає запити виключно напряму до вказаного Endpoint.
:::

---

## 1. Google Gemini (Рекомендовано)

Google пропонує швидкі та розумні моделі Gemini з щедрим безкоштовним рівнем для розробників.

* **Де взяти API Key**: перейдіть у [Google AI Studio](https://aistudio.google.com/) та натисніть кнопку **Get API key**.
* **Параметри в XMCL**:
  - **Endpoint**: `https://generativelanguage.googleapis.com/v1beta/openai/chat/completions`
  - **Model**: `gemini-2.5-flash` (або `gemini-1.5-pro`, `gemini-1.5-flash`)
  - **API Key**: ваш ключ Google AI Studio (починається з `AIzaSy...`)

---

## 2. OpenAI (ChatGPT)

Офіційні моделі від OpenAI з високою точністю аналізу коду та логів.

* **Де взяти API Key**: перейдіть в особистий кабінет [OpenAI Platform API Keys](https://platform.openai.com/api-keys) та створіть секретний ключ.
* **Параметри в XMCL**:
  - **Endpoint**: `https://api.openai.com/v1/chat/completions`
  - **Model**: `gpt-4o-mini` (найшвидша та найвигідніша) або `gpt-4o`
  - **API Key**: ваш секретний ключ OpenAI (починається з `sk-...`)

---

## 3. Anthropic Claude (через шлюз OpenRouter / LiteLLM)

Моделі Claude від Anthropic демонструють чудові результати у виявленні помилок у логах. Оскільки нативний API Anthropic має інший формат, підключення здійснюється через OpenAI-сумісний шлюз, наприклад OpenRouter:

* **Де взяти API Key**: зареєструйтесь на [OpenRouter](https://openrouter.ai/) та створіть ключ у розділі Keys.
* **Параметри в XMCL**:
  - **Endpoint**: `https://openrouter.ai/api/v1/chat/completions`
  - **Model**: `anthropic/claude-3.5-sonnet` (або `anthropic/claude-3-haiku`)
  - **API Key**: ваш ключ OpenRouter (починається з `sk-or-...`)

---

## 4. Alibaba Qwen (Tongyi Qianwen / DashScope)

Сімейство моделей Qwen від Alibaba Cloud відоме відмінним розумінням технічного контексту та високою швидкістю генерації:

* **Де взяти API Key**: зареєструйтесь на платформі [Alibaba Cloud DashScope Console](https://dashscope.console.aliyun.com/).
* **Параметри в XMCL**:
  - **Endpoint**: `https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions`
  - **Model**: `qwen-plus`, `qwen-turbo` або `qwen-max`
  - **API Key**: ваш ключ DashScope (починається з `sk-...`)

---

## 5. Z.ai / Zhipu AI (GLM-4)

Популярні моделі сімейства GLM від Zhipu AI (платформа BigModel):

* **Де взяти API Key**: зареєструйтесь на платформі [Zhipu AI BigModel](https://open.bigmodel.cn/) та згенеруйте API key в особистому кабінеті.
* **Параметри в XMCL**:
  - **Endpoint**: `https://open.bigmodel.cn/api/paas/v4/chat/completions`
  - **Model**: `glm-4-flash` (безкоштовна версія) або `glm-4-plus`
  - **API Key**: ваш ключ платформи Zhipu

---

Як перевірити роботу після підключення

1. Натисніть гарячі клавіші `Ctrl + Shift + A` (або `Cmd + Shift + A` на macOS), щоб відкрити панель асистента.
2. Надішліть будь-яке запитання, наприклад:
   ```text
   Які моди для оптимізації ти рекомендуєш для Fabric 1.20.1?
   ```
3. Якщо модель надіслала відповідь — конфігурацію завершено успішно!

---

Помилки та їх вирішення

* **`401 Unauthorized`**: перевірте правильність API-ключа, баланс на акаунті провайдера та відсутність зайвих пробілів на початку чи в кінці рядка.
* **`404 Not Found`**: переконайтеся, що адреса в полі Endpoint повністю вказана разом із шляхом `/v1/chat/completions`.
* **`429 Too Many Requests`**: ви вичерпали безкоштовний або платний ліміт запитів у вашого провайдера.
