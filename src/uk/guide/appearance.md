# Оформлення та кастомізація через CSS

Цей посібник розповідає про налаштування зовнішнього вигляду інтерфейсу XMCL: вбудовані палітри, режими тем, фонові ефекти та глибоку кастомізацію через вбудований редактор користувацьких CSS правил.

---

## 1. Вбудовані налаштування теми

Ви можете змінити базовий вигляд лаунчера, перейшовши у **Налаштування (іконка шестірні)** на бічній панелі -> вкладка **Оформлення**.

### Палітра кольорів та теми
XMCL дозволяє гнучко налаштовувати такі кольори:
- **Колір карток**: фоновий колір блоків інстансів, діалогових вікон та списків.
- **Колір панелі заголовка**: фон верхньої смуги перетягування вікна.
- **Колір бічної панелі**: фон лівого навігаційного меню.
- **Колір фону**: основне підкладкове тло вікна.
- **Основний колір акценту**: колір активних кнопок, індикаторів вибору, фокусу та посилань.
- **Колір помилки**: попереджувальні банери, помилки та критичні сповіщення.

Лаунчер має дві стандартні теми: **Світла** та **Темна**.

:::tip Незалежні профілі
Налаштування кольорів для світлого та темного режимів зберігаються окремо. Перемикання режиму автоматично завантажує відповідну конфігурацію.
:::

---

### Фонові ефекти та медіа
XMCL підтримує три варіанти фонового оформлення:

1. **Зображення**: Встановлення будь-якого малюнка (PNG, JPG, WEBP). Лаунчер зберігає копію файлу у своїй конфігураційній папці, тому видалення оригіналу на диску не пошкодить фон.
2. **Відео**: Локальний файл MP4/WEBM для живого анімованого фону.
   :::warning Залежність від шляху
   Лаунчер зберігає лише абсолютний шлях до відеофайлу. Якщо файл перемістити чи видалити, фон скинеться до стандартного кольору.
   :::
3. **Ефекти частинок**: Легкі геометричні анімації: падаючий сніг, мерехтіння зірок або інтерактивна сітка вузлів.

---

## 2. Розширене налаштування через Custom CSS

У нижній частині вкладки **Оформлення** розміщено редактор **Custom CSS**. Оскільки інтерфейс XMCL створено на базі **Vue 3** та **Vuetify 3**, ви можете перевизначити стилі будь-якого компонента глобально.

Щоб ваші правила гарантовано застосовувалися до компонентів Vuetify, використовуйте точні селектори та модифікатор `!important`.

### Шрифти та згладжування тексту
Налаштуйте чітке відображення тексту та сучасний шрифт на рівні кореня:
```css
html, body, #app, .v-application {
  font-family: -apple-system, BlinkMacSystemFont, "Space Grotesk", "Segoe UI", Roboto, sans-serif !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  text-rendering: optimizeLegibility !important;
}
```

---

## 3. Перевизначення колірних змінних Vuetify 3

Vuetify генерує прозорість через базові RGB-трійки (`R, G, B`). Ви можете змінити колірний простір лаунчера за допомогою таких змінних:

```css
.v-application,
.v-theme--dark,
.v-theme--light {
  --v-theme-background: 18, 18, 28;      /* Тло головного вікна */
  --v-theme-surface: 25, 25, 35;          /* Поверхня карток та меню */
  --v-theme-on-surface: 255, 255, 255;    /* Основний текст */
  --v-theme-primary: 0, 122, 255;         /* Акцентний колір вибору */
  --v-theme-on-primary: 255, 255, 255;    /* Текст на акцентних кнопках */
  --v-theme-error: 255, 59, 48;           /* Помилки та бейджі */
}
```

Щоб зробити фон сторінок повністю прозорим і показати користувацький малюнок чи відео:
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

## 4. Кастомізація фону через CSS

Крім звичайного вибору зображення в налаштуваннях, через CSS можна задати градієнтні накладки, ефект розмиття акрилу (Mica / Frosted Glass) та анімовані градієнти.

### 1. Шпалери високої роздільної здатності з темною накладкою
Дозволяє зберегти високу читабельність тексту та карток на яскравих шпалерах:

```css
body, #app, .v-application {
  background-image: 
    linear-gradient(180deg, rgba(16, 22, 18, 0.75) 0%, rgba(16, 22, 18, 0.92) 100%),
    url("https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=2560") !important;
  background-size: cover !important;
  background-position: center !important;
  background-attachment: fixed !important;
}
```

### 2. Живий анімований градієнт (Mesh Gradient)
Плавний динамічний фон без навантаження на систему відеофайлами:

```css
@keyframes meshShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

body, #app, .v-application {
  background: linear-gradient(-45deg, #0d1310, #16241c, #102a24, #0b1c18) !important;
  background-size: 400% 400% !important;
  animation: meshShift 20s ease infinite !important;
}
```

### 3. Ефект матового скла (Backdrop Filter / Mica)
Робить картки та панелі напівпрозорими з розмиттям фону:

```css
.v-card, .v-sheet:not(.v-toolbar) {
  background: rgba(27, 36, 31, 0.65) !important;
  backdrop-filter: blur(20px) saturate(160%) !important;
  -webkit-backdrop-filter: blur(20px) saturate(160%) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35) !important;
}
```

---

## 5. Власні іконки та SVG маски

Ви можете легко замінити стандартні іконки інтерфейсу на власні SVG малюнки через CSS.

### 1. Динамічні іконки через CSS Mask (автоматичний колір теми)
Завдяки `mask-image` іконка забарвлюється в активний акцентний колір теми лаунчера:

```css
/* Заміна іконки налаштувань на власний контурний SVG */
[data-testid="nav-settings"] .v-icon,
[data-testid="nav-settings"] .sidebar-notch-item__icon {
  background-color: var(--xmcl-lime, #c9f85a) !important;
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3Cpath d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z'/%3E%3C/svg%3E") !important;
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3Cpath d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z'/%3E%3C/svg%3E") !important;
  -webkit-mask-size: contain !important;
  mask-size: contain !important;
  -webkit-mask-repeat: no-repeat !important;
  mask-repeat: no-repeat !important;
  -webkit-mask-position: center !important;
  mask-position: center !important;
  font-size: 0 !important; /* Приховуємо стандартний символ шрифтової іконки */
  width: 22px !important;
  height: 22px !important;
}
```

### 2. Власна кольорова іконка PNG/SVG
Якщо іконка має кілька фіксованих кольорів, використовуйте пряме підключення фонового малюнка:

```css
.sidebar-notch-item--active .v-icon {
  background-image: url("https://your-domain.com/custom-icon.png") !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  font-size: 0 !important;
  width: 24px !important;
  height: 24px !important;
}
```

---

## 6. Анімації, переходи та мікровзаємодія

Додайте інтерфейсу плавності та сучасної кінематики.

### 1. Підйом та світіння карток при наведенні (Hover Effect)
Плавний тактильний відгук для блоків інстансів та модів:

```css
.v-card {
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), 
              box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.25s ease !important;
}

.v-card:hover {
  transform: translateY(-4px) !important;
  border-color: rgba(201, 248, 90, 0.45) !important;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.35), 
              0 0 15px rgba(201, 248, 90, 0.15) !important;
}
```

### 2. Мікроанімація кнопок та інтерактивний спалах
Кнопки реагують на наведення та клік із фізичною пружністю:

```css
.v-btn {
  transition: transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), 
              box-shadow 0.18s ease, 
              filter 0.18s ease !important;
}

.v-btn:hover {
  transform: translateY(-1.5px) scale(1.02) !important;
  filter: brightness(1.08) !important;
}

.v-btn:active {
  transform: translateY(0.5px) scale(0.98) !important;
  filter: brightness(0.95) !important;
}

/* Пульсуюче неонове світіння кнопки запуску */
[data-testid="launch-button"] {
  position: relative !important;
  overflow: hidden !important;
}

[data-testid="launch-button"]::after {
  content: '' !important;
  position: absolute !important;
  inset: 0 !important;
  border-radius: inherit !important;
  box-shadow: 0 0 20px rgba(201, 248, 90, 0.6) !important;
  opacity: 0 !important;
  transition: opacity 0.3s ease !important;
}

[data-testid="launch-button"]:hover::after {
  opacity: 1 !important;
}
```

### 3. Плавна поява діалогових вікон (Fade & Scale)
Вікна відкриваються плавно без різкого стрибка:

```css
@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.v-dialog > .v-overlay__content {
  animation: modalSlideIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
}
```

### 4. Тонкі заокруглені скролбари в стилі macOS
Заміна стандартних смуг прокручування на акуратні напівпрозорі повзунки:

```css
::-webkit-scrollbar {
  width: 7px !important;
  height: 7px !important;
}
::-webkit-scrollbar-track {
  background: transparent !important;
}
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.18) !important;
  border-radius: 999px !important;
  border: 1px solid transparent !important;
  background-clip: padding-box !important;
  transition: background 0.2s ease !important;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(201, 248, 90, 0.45) !important;
}
```
