# Налаштування ШІ

Цей посібник допоможе вам налаштувати та підключити вбудований **AI Agent** у XMCL.

Завдяки підтримці відкритого стандарту **OpenAI-сумісних API** (`/v1/chat/completions`), ви можете використовувати як стандартний безкоштовний сервіс **Agnes AI**, так і підключати будь-які інші провідні моделі: **DeepSeek**, **ChatGPT (OpenAI)**, **Claude (через OpenRouter)**, **Google Gemini**, **Groq**, або навіть **локальний ШІ без інтернету через Ollama чи LM Studio**.

---

## Можливості AI Agent у XMCL

Після підключення AI Agent ви зможете:

- 🔍 **Аналізувати краш-логи**: Асистент миттєво знайде несумісний мод або пошкоджений файл конфігурації.
- ⚙️ **Керувати модами через чат**: Увімкнення, вимкнення, оновлення чи пошук потрібних модифікацій.
- 🛠️ **Редагувати конфігураційні файли**: Допомога в налаштуванні параметрів складної збірки.
- 💡 **Отримувати швидкі підказки**: Інформація про крафти, сумісність завантажувачів (Forge/Fabric/NeoForge/Quilt) та налаштування сервера.

---

## Крок 1: Увімкніть секцію AI Agent у XMCL

1. Відкрийте **XMCL**.
2. Перейдіть у меню **Налаштування (Settings) -> Загальні (General)**.
3. Увімкніть перемикач **Режим розробника (Developer Mode)**.
4. Прокрутіть сторінку вниз до блоку **AI Agent**.

![Загальні налаштування XMCL з виділеними Developer Mode та секцією AI Agent](general-setting.webp)

---

## Варіант 1: Підключення безкоштовного Agnes AI (За замовчуванням)

::: tip Agnes AI повністю безкоштовний
Сервіс **Agnes AI** створено спеціально для XMCL і він є **повністю безкоштовним**. Для роботи потрібен лише безкоштовний API-ключ — жодної платіжної інформації чи банківських карток.
:::

1. Відкрийте консоль розробника **Agnes AI**.
2. Увійдіть або зареєструйтеся.
3. Натисніть **Create API Key** та скопіюйте згенерований ключ.
4. У XMCL у секції **AI Agent** вставте:
   - **API Key**: ваш скопійований ключ Agnes.
   - **Endpoint**: `https://apihub.agnes-ai.com/v1/chat/completions`
   - **Model**: залиште за замовчуванням або вкажіть запропоновану модель.

![Сторінка консолі Agnes AI, де створюється та копіюється API key](create-and-copy.webp)

---

## Варіант 2: Підключення інших моделей та провайдерів ШІ

Якщо ви бажаєте використовувати власні API-ключі інших сервісів або локальні мовні моделі на своєму ПК, просто вкажіть відповідний **Endpoint**, **Model** та **API Key** у формі налаштувань:

### Параметри популярних провайдерів

#### 1. DeepSeek (DeepSeek-V3 / DeepSeek-R1)
Відмінна якість аналізу коду, краш-логів та низька вартість:
- **Endpoint**: `https://api.deepseek.com/v1/chat/completions`
- **Model**: `deepseek-chat` *(для швидких відповідей)* або `deepseek-reasoner` *(R1 для глибокого аналізу)*
- **API Key**: отримати на [platform.deepseek.com](https://platform.deepseek.com/)

#### 2. OpenAI (GPT-4o / GPT-4o-mini)
Офіційні моделі від OpenAI:
- **Endpoint**: `https://api.openai.com/v1/chat/completions`
- **Model**: `gpt-4o-mini` *(швидка та економна)* або `gpt-4o`
- **API Key**: отримати на [platform.openai.com](https://platform.openai.com/)

#### 3. Groq (Надшвидкісний вивід Llama 3)
Миттєва генерація відповідей на чипах LPU:
- **Endpoint**: `https://api.groq.com/openai/v1/chat/completions`
- **Model**: `llama-3.3-70b-versatile` або `llama-3.1-8b-instant`
- **API Key**: отримати на [console.groq.com](https://console.groq.com/)

#### 4. OpenRouter (Claude 3.5 Sonnet / Gemini / Llama)
Універсальний доступ до моделей Anthropic, Google та Meta через єдиний ключ:
- **Endpoint**: `https://openrouter.ai/api/v1/chat/completions`
- **Model**: `anthropic/claude-3.5-sonnet` або `meta-llama/llama-3.3-70b-instruct`
- **API Key**: отримати на [openrouter.ai](https://openrouter.ai/)

#### 5. Google Gemini (Прямий OpenAI-сумісний API)
- **Endpoint**: `https://generativelanguage.googleapis.com/v1beta/openai/chat/completions`
- **Model**: `gemini-2.0-flash` або `gemini-1.5-flash`
- **API Key**: отримати на [aistudio.google.com](https://aistudio.google.com/)

#### 6. Локальний ШІ без інтернету (Ollama / LM Studio)
Повна конфіденційність без надсилання даних у мережу:

##### Через Ollama:
1. Завантажте [Ollama](https://ollama.com/) та запустіть модель у консолі: `ollama run qwen2.5-coder` (або `llama3.2`).
2. У XMCL встановіть:
   - **Endpoint**: `http://localhost:11434/v1/chat/completions`
   - **Model**: `qwen2.5-coder` *(або назва вашої моделі)*
   - **API Key**: `ollama` *(будь-який текст)*

::: tip CORS для Ollama
Якщо XMCL не отримує відповідь від Ollama, додайте змінну середовища `OLLAMA_ORIGINS="*"` перед запуском сервісу Ollama.
:::

##### Через LM Studio:
- **Endpoint**: `http://localhost:1234/v1/chat/completions`
- **Model**: назва завантаженої моделі у вкладці Local Server
- **API Key**: `lm-studio` *(будь-який текст)*

---

## Крок 3: Перевірка роботи та гарячі клавіші

1. Натисніть комбінацію клавіш <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>A</kbd> (або <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>A</kbd> на macOS), щоб відкрити вікно **AI Agent**.
2. Введіть тестовий запит, наприклад:
   ```text
   Покажи список моїх встановлених модів та перевір, чи немає конфліктів
   ```
3. Переконайтеся, що асистент відповів та розпізнав ваше поточне ігрове оточення.

---

## Вирішення можливих проблем

### ❌ Вікно Agent не відкривається
- Переконайтеся, що в **Settings -> General** увімкнено **Developer Mode**.
- Якщо ви щойно увімкнули Developer Mode, перезапустіть XMCL один раз.

### ❌ Помилка авторизації (401 Unauthorized / 403 Forbidden)
- Перевірте, чи не скопіювалися зайві пробіли або символи перенесення рядка разом із ключем.
- Переконайтеся, що на балансі обраного провайдера є кошти або не вичерпано ліміт безкоштовних запитів.

### ❌ Помилка з'єднання (Network Error / Timeout / Failed to fetch)
- Перевірте правильність написання URL у полі **Endpoint**. Він повинен закінчуватися на `/chat/completions` або бути коректним кореневим шляхом.
- Якщо ви використовуєте локальний Ollama або LM Studio, переконайтеся, що відповідна програма запущена у фоновому режимі.

---

## Безпека API-ключів

- Зберігайте свої API-ключі в таємниці та ставтеся до них як до паролів.
- Ніколи не публікуйте скріншоти налаштувань, де видно ваш ключ.
- У разі підозри на витік негайно видаліть ключ у кабінеті провайдера та згенеруйте новий.
