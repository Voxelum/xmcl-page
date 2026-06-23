# Посібник із користувацьких CSS тем лаунчера

Цей посібник є вичерпною інструкцією з розробки, написання та налаштування інтерфейсу лаунчера за допомогою користувацьких стилів CSS. Тут детально описано основні елементи макета, селектори та розширені методи стилізації (такі як ефект матового скла, світлові відблиски та заміна вбудованих іконок), які можна використовувати для створення унікальних тем.

---

## 1. Базова архітектура та впровадження теми

Інтерфейс користувача лаунчера побудований на **Vue 3** та **Vuetify 3**. Стилі впроваджуються глобально через рушій користувацького CSS.

Щоб ваші стилі правильно перевизначали стандартні стилі Vuetify, завжди пишіть чіткі селектори та використовуйте `!important`, якщо є конфлікти з вбудованими стилями Vuetify або оголошеннями класів із високою специфічністю.

### Типографіка та згладжування
Завжди встановлюйте стандартний набір шрифтів та оптимізуйте рендеринг тексту на кореневому рівні:
```css
html, body, #app, .v-application {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  text-rendering: optimizeLegibility !important;
}
```

---

## 2. Перевизначення колірних токенів Vuetify 3

Vuetify визначає основні кольори у вигляді простих RGB тріад (наприклад, `255, 255, 255`) у кореневих контейнерах програми для розрахунку прозорості. Щоб змінити колірні змінні глобально без порушення роботи компонентів, перевизначте їх у цих селекторах:

```css
.v-application,
.v-theme--dark,
.v-theme--light {
  --v-theme-background: 18, 18, 28;      /* Фоновий колір лаунчера */
  --v-theme-surface: 25, 25, 35;          /* Поверхня карток та діалогів */
  --v-theme-on-surface: 255, 255, 255;    /* Стандартний колір тексту */
  --v-theme-primary: 0, 122, 255;         /* Акцентний колір (Apple Blue тощо) */
  --v-theme-on-primary: 255, 255, 255;    /* Колір тексту на акцентних кнопках */
  --v-theme-error: 255, 59, 48;           /* Банери помилок та індикатори */
}
```

Якщо вам потрібно зробити стандартні сторінки прозорими, щоб було видно шпалери робочого столу:
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

## 3. Ключові компоненти та селектори CSS

### 🖥️ Рядок заголовка / Системна панель
Заголовок вікна використовує клас `.v-system-bar`, який містить елементи керування вікном та тригери індикаторів.
- **Панель заголовка**: `.v-system-bar`
- **Кнопки керування (Згорнути/Розгорнути/Закрити)**: `.system-btn` або `.v-system-bar .system-btn`
- **Клас кнопки закриття**: `.system-btn--close`
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

---

### 🎛️ Бічна панель навігації (Dock)
Панель зліва слугує контейнером для ваших профілів, ярлика пошуку та налаштувань.
- **Основний контейнер бічної панелі**: `.sidebar` або `[data-testid="app-sidebar"]`
- **Контейнер списку елементів**: `.sidebar-notch__container`
- **Окремі кнопки бічної панелі**: `.sidebar-notch-item`
- **Активна кнопка навігації**: `.sidebar-notch-item.router-link-active` або `.sidebar-notch-item--active`
- **Кнопка «Назад»**: `.sidebar-back-btn` або `.system-bar-back-btn`

---

### 📦 Вікна, картки та діалоги
Картки є модульними блоками для всіх функцій.
- **Контейнер картки**: `.v-card`
- **Заголовок картки / Заголовок діалогу**: `.v-card-title`
- **Область вмісту картки**: `.v-card-text`
- **Нижній контейнер кнопок дій картки**: `.v-card-actions`
- **Спливаючі діалогові вікна**: `.v-dialog`
- **Групи карток на сторінці налаштувань**: `.setting-page .v-card`

---

### 🔘 Кнопки
Кнопки мають різні стани (підняті, контурні, текстові).
- **Глобальний клас кнопок**: `.v-btn`
- **Варіанти форми кнопок**: `.v-btn--variant-flat`, `.v-btn--variant-elevated`, `.v-btn--variant-tonal`, `.v-btn--variant-outlined`
- **Основні кнопки дії**: `.v-btn[color="primary"]`, `.v-btn.text-primary`, `[data-testid="login-submit"]`, `[data-testid="launch-button"]`
- **Активний стан (у перемикачах)**: `.v-btn.v-btn--active`, `.v-btn-toggle .v-btn--active`, `.v-btn[aria-pressed="true"]`
- **Вимкнені кнопки**: `.v-btn:disabled`, `.v-btn[disabled]`
- **Текстові / Іконкові кнопки**: `.v-btn--variant-text`, `.v-btn--variant-plain`, `.v-btn--icon`

---

### 📝 Текстові поля та випадаючі списки
Стилізація полів введення та вибору.
- **Контейнер поля (Поля введення / Текстові області)**: `.v-field`, `.v-text-field`, `textarea`
- **Підсвічування рамки активного поля**: `.v-field--focused`, `.v-text-field:focus-within`
- **Випадаючий список**: `.v-list`
- **Окремі пункти випадаючого списку**: `.v-list-item`
- **Вибраний пункт**: `.v-list-item--active`

---

### 🎚️ Перемикачі, прапорці та повзунки
- **Доріжка перемикача**: `.v-switch__track`
- **Доріжка активного перемикача**: `.v-switch--selected .v-switch__track`
- **Повзунок перемикача**: `.v-switch__thumb`
- **Рамка прапорця (Checkbox)**: `.v-checkbox .v-selection-control__input`
- **Активний вибраний прапорець**: `.v-checkbox .v-selection-control__input--selected`

---

### 📰 Карусель новин та розділи сторінки «Я»
Сторінка «Мої файли» (Я) містить карусель новин та списки сітки.
- **Контейнер сторінки «Я»**: `.my-stuff-page`
- **Заголовки розділів сторінки**: `.my-stuff-page .section-title`, `.my-stuff-page .section-icon`
- **Контейнер каруселі новин**: `.news-carousel-wrapper` або `.news-carousel`
- **Обгортка слайда**: `.news-slide`
- **Контейнер зображення**: `.news-image-wrapper`, `.news-image`
- **Градієнтне затінення зображення**: `.news-gradient`
- **Текстова область картки новин**: `.news-info`
- **Заголовки новин**: `.news-title`
- **Опис новин**: `.news-description`
- **Посилання «Докладніше»**: `.news-read-more` або `.v-btn.news-read-more`

---

## 4. Просунуті трюки CSS-стилізації

### 💧 Ефект матового скла (Glassmorphism з глянцем)
Створення напівпрозорого фону в стилі macOS:
1. Збільште прозорість фону (`rgba`) та насиченість.
2. Використовуйте `backdrop-filter: blur(...)` для розмиття вмісту під склом.
3. Додайте діагональний градієнт, щоб імітувати глянсове відбиття світла.
4. Створіть чіткі світлі рамки на верхній та лівій гранях.

```css
.v-card {
  /* Глянсовий відблиск */
  background: linear-gradient(135deg, 
                rgba(255, 255, 255, 0.16) 0%, 
                rgba(255, 255, 255, 0.07) 50%, 
                rgba(255, 255, 255, 0.0) 50.1%, 
                rgba(255, 255, 255, 0.03) 100%) !important;
  backdrop-filter: blur(25px) saturate(200%) contrast(90%) !important;
  -webkit-backdrop-filter: blur(25px) saturate(200%) contrast(90%) !important;
  
  /* Контурні світлові рамки */
  border: 1px solid rgba(255, 255, 255, 0.15) !important;
  border-top-color: rgba(255, 255, 255, 0.32) !important;
  border-left-color: rgba(255, 255, 255, 0.24) !important;
  
  /* Тінь та внутрішнє світіння */
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35), 
              inset 0 1px 1px rgba(255, 255, 255, 0.25) !important;
  border-radius: 16px !important;
}
```

---

### 🎨 Кастомізація іконок (впровадження SVG)
Лаунчер відображає іконки за допомогою шрифтів Material Design. Ви можете замінити будь-яку іконку через CSS без зміни шаблонів Vue, приховавши оригінальний текст і додавши фонове зображення SVG:

1. **Очищення тексту іконки**: встановіть для `.v-icon` або вашого класу `font-size: 0 !important`.
2. **Встановлення розміру**: задайте явні значення `width` та `height`.
3. **Впровадження вектора**: додайте закодований SVG як `background-image`.

```css
/* 1. Глобальне скидання для замінених іконок */
.sidebar-notch-item__icon,
.my-stuff-page .section-icon,
.badge-icon {
  font-size: 0 !important; /* Приховати оригінальні літери іконки */
  width: 18px !important;
  height: 18px !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  display: inline-block !important;
}

/* 2. Впровадження цільових SVG */
/* Шестірня налаштувань */
[data-testid="nav-settings"] .sidebar-notch-item__icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3Cpath d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z'/%3E%3C/svg%3E") !important;
}

/* Трикутник магазину додатків */
[data-testid="nav-store"] .sidebar-notch-item__icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2.5' stroke-linecap='round'%3E%3Cpath d='M12 4v16M5 16l14-8M5 8l14 8'/%3E%3C/svg%3E") !important;
}
```

---

### 💾 Сучасні смуги прокручування macOS
Стилізація доріжки та бігунка смуги прокручування:
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
