# Налаштування вигляду та посібник з користувацьких CSS

Цей посібник розповідає про те, як налаштувати інтерфейс XMCL, включаючи вбудовані колірні палітри, режими тем, фонові ефекти (зображення/відео/частинки) та розширену стилізацію за допомогою користувацьких правил CSS.

---

## 1. Вбудовані налаштування теми

Ви можете змінити базовий вигляд лаунчера, натиснувши на іконку **Налаштування** (шестірня) на лівій бічній панелі та перейшовши на вкладку **Вигляд**.

### Колірна палітра та теми
XMCL дозволяє налаштовувати такі колірні елементи окремо:
- **Колір картки**: фоновий колір модулів та діалогових вікон.
- **Колір верхньої панелі**: фон заголовка вікна/зони перетягування.
- **Колір бічної панелі**: фон лівої панелі навігації.
- **Фоновий колір**: основний фон вікна під усіма елементами.
- **Основний колір підсвічування**: колір для активних іконок, кілець фокусування, головних кнопок дій та посилань.
- **Колір помилки**: колір для попереджень, банерів помилок та індикаторів.

Лаунчер містить дві стандартні колірні схеми: **Світла тема** та **Темна тема**.

:::tip Розділені налаштування
Конфігурації кольорів для світлої та темної тем зберігаються незалежно. Перемикання між режимами автоматично завантажує вашу налаштовану палітру для конкретного режиму.
:::

---

### Фонові ефекти та медіа
Ви можете налаштувати головний фон лаунчера за допомогою трьох різних варіантів:

1. **Зображення**: Встановіть будь-яке зображення (PNG, JPG, WEBP) як фон. XMCL копіює та зберігає дані зображення у своїй директорії конфігурації, тому воно не зникне, якщо ви видалите оригінальний файл.
2. **Відео**: Використовуйте локальний відеофайл MP4/WEBM як анімований фон.
   :::warning Залежність від шляху
   Лаунчер зберігає лише абсолютний **шлях до файлу** фонового відео. Якщо ви перемістите, перейменуєте або видалите відеофайл, налаштування фону стане недійсним і повернеться до стандартного кольору.
   :::
3. **Ефекти частинок**: Увімкніть динамічну фонову анімацію, таку як летючі зірки, снігопад або павутина з частинок.

---

## 2. Розширена стилізація за допомогою користувацьких CSS

XMCL має вбудований редактор користувацьких CSS внизу вкладки налаштувань **Вигляд**. Оскільки інтерфейс користувача побудований на **Vue 3** та **Vuetify 3**, ви можете перевизначати стилі будь-яких елементів глобально.

Щоб ваші власні стилі правильно перевизначали стандартні стилі Vuetify, пишіть точні селектори та використовуйте `!important` при конфліктах з вбудованими правилами стилів Vuetify.

### Типографіка та згладжування
Оптимізуйте рендеринг тексту та встановіть чистий набір шрифтів на кореневому рівні:
```css
html, body, #app, .v-application {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  text-rendering: optimizeLegibility !important;
}
```

---

## 3. Перевизначення колірних токенів Vuetify 3

Vuetify визначає кольори як чисті RGB тріади (наприклад, `255, 255, 255`) у кореневих обгортках для розрахунку прозорості. Щоб змінити колірні змінні глобально, перевизначте їх у цих селекторах:

```css
.v-application,
.v-theme--dark,
.v-theme--light {
  --v-theme-background: 18, 18, 28;      /* Головний фон вікна */
  --v-theme-surface: 25, 25, 35;          /* Поверхня карток та діалогів */
  --v-theme-on-surface: 255, 255, 255;    /* Колір тексту тіла сторінки */
  --v-theme-primary: 0, 122, 255;         /* Акцентний колір виділення */
  --v-theme-on-primary: 255, 255, 255;    /* Колір тексту на акцентних кнопках */
  --v-theme-error: 255, 59, 48;           /* Банери та індикатори помилок */
}
```

Якщо ви хочете зробити фони стандартних сторінок прозорими, щоб ваше власне фонове зображення або відео було повністю видно:
```css
.v-main,
.v-main__wrap,
.v-container,
.v-layout,
.home-page,
.setting-page,
.multiplayer,
.absolute.z-0.h-full.w-full {
  background: transparent !important;
  background-color: transparent !important;
}
```

---

## 4. Довідник селекторів для основних компонентів

### 🖥️ Рядок заголовка / Системна панель
Заголовок вікна використовує клас `.v-system-bar`, який містить елементи керування вікном та тригери індикаторів.
- **Панель заголовка**: `.v-system-bar`
- **Кнопки керування (Згорнути/Розгорнути/Закрити)**: `.system-btn` або `.v-system-bar .system-btn`
- **Кнопка закриття**: `.system-btn--close`
- **Системні індикатори (Пошук, Завдання, Довідка)**: `.system-bar-badge`
- **Текст гарячих клавіш в індикаторі**: `.palette-hotkey`

*Приклад: переміщення кнопок керування вікном ліворуч та стилізація під світлофор macOS за допомогою Flexbox:*
```css
.v-system-bar {
  flex-direction: row-reverse !important; /* Розташувати кнопки ліворуч */
  justify-content: space-between !important;
}
.v-system-bar > span[role="group"] {
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
}
/* Порядок кнопок: Закрити (3-я кнопка -> 1-а), Згорнути (1-а -> 2-а), Розгорнути (2-а -> 3-я) */
.v-system-bar .system-btn.system-btn--close { order: 1 !important; background: #ff5f56 !important; }
.v-system-bar .system-btn:nth-child(1) { order: 2 !important; background: #ffbd2e !important; }
.v-system-bar .system-btn:nth-child(2) { order: 3 !important; background: #27c93f !important; }
```

### 🎛️ Бічна панель навігації
Панель зліва слугує контейнером для ваших профілів, пошуку та налаштувань.
- **Основний контейнер бічної панелі**: `.sidebar` або `[data-testid="app-sidebar"]`
- **Контейнер списку елементів**: `.sidebar-notch__container`
- **Окремі кнопки бічної панелі**: `.sidebar-notch-item`
- **Активна кнопка навігації**: `.sidebar-notch-item.router-link-active` або `.sidebar-notch-item--active`
- **Кнопка «Назад»**: `.sidebar-back-btn` або `.system-bar-back-btn`

### 📦 Картки та діалоги
- **Контейнер картки**: `.v-card`
- **Заголовок картки / діалогу**: `.v-card-title`
- **Область вмісту картки**: `.v-card-text`
- **Контейнер нижніх кнопок дій**: `.v-card-actions`
- **Спливні діалогові вікна**: `.v-dialog`
- **Групові картки на сторінці налаштувань**: `.setting-page .v-card`

### 🔘 Кнопки
- **Глобальний клас кнопок**: `.v-btn`
- **Варіанти форми кнопок**: `.v-btn--variant-flat`, `.v-btn--variant-elevated`, `.v-btn--variant-tonal`, `.v-btn--variant-outlined`
- **Основні / Активні кнопки**: `.v-btn[color="primary"]`, `.v-btn.text-primary`, `[data-testid="login-submit"]`, `[data-testid="launch-button"]`
- **Активний стан (у перемикачах)**: `.v-btn.v-btn--active`, `.v-btn-toggle .v-btn--active`, `.v-btn[aria-pressed="true"]`
- **Вимкнені кнопки**: `.v-btn:disabled`, `.v-btn[disabled]`

### 📝 Текстові поля та випадаючі списки
- **Контейнер поля**: `.v-field`, `.v-text-field`, `textarea`
- **Підсвічування фокусу поля**: `.v-field--focused`, `.v-text-field:focus-within`
- **Випадаючий список варіантів**: `.v-list`
- **Окремі варіанти списку**: `.v-list-item`
- **Обраний варіант**: `.v-list-item--active`

---

## 5. Розширені трюки стилізації CSS

### 💧 Ефект матового скла (Glassmorphism)
Створення напівпрозорого ефекту матового скла з підсвічуванням верхньої та лівої граней картки:

```css
.v-card {
  /* Напівпрозорий фон з градієнтом відблиску */
  background: linear-gradient(135deg, 
                rgba(255, 255, 255, 0.16) 0%, 
                rgba(255, 255, 255, 0.07) 50%, 
                rgba(255, 255, 255, 0.0) 50.1%, 
                rgba(255, 255, 255, 0.03) 100%) !important;
  backdrop-filter: blur(25px) saturate(200%) contrast(90%) !important;
  -webkit-backdrop-filter: blur(25px) saturate(200%) contrast(90%) !important;
  
  /* Світлові відблиски на гранях */
  border: 1px solid rgba(255, 255, 255, 0.15) !important;
  border-top-color: rgba(255, 255, 255, 0.32) !important;
  border-left-color: rgba(255, 255, 255, 0.24) !important;
  
  /* Тінь та внутрішнє світіння */
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35), 
              inset 0 1px 1px rgba(255, 255, 255, 0.25) !important;
  border-radius: 16px !important;
}
```

### 🎨 Кастомізація вбудованих іконок (Впровадження SVG)
Ви можете замінювати іконки лаунчера безпосередньо в CSS, використовуючи закодовані SVG-зображення:

```css
/* 1. Очищення стандартних лігатур та визначення розмірів */
.sidebar-notch-item__icon,
.my-stuff-page .section-icon,
.badge-icon {
  font-size: 0 !important;
  width: 18px !important;
  height: 18px !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  display: inline-block !important;
}

/* 2. Впровадження SVG як фонового зображення */
/* Приклад: Власна іконка шестірні для кнопки Налаштувань */
[data-testid="nav-settings"] .sidebar-notch-item__icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3Cpath d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z'/%3E%3C/svg%3E") !important;
}
```

### 💾 Сучасні смуги прокрутки в стилі macOS
Стилізація смуг прокрутки під стиль macOS:
```css
::-webkit-scrollbar {
  width: 8px !important;
  height: 8px !important;
}
::-webkit-scrollbar-track {
  background: transparent !important;
}
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.22) !important;
  border-radius: 10px !important;
  border: 2px solid transparent !important;
  background-clip: padding-box !important;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.35) !important;
}
```
