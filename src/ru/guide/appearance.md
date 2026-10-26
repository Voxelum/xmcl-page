# Руководство по внешнему виду и Custom CSS

В этом руководстве описано, как настроить графический интерфейс XMCL, включая встроенные цветовые палитры, эффекты фона, а также продвинутую стилизацию элементов через встроенный редактор Custom CSS.

---

## 1. Встроенные параметры оформления

Базовый внешний вид лаунчера можно настроить в разделе **Настройки** (значок шестеренки на панели слева) -> вкладка **Оформление**.

### Цветовая палитра и темы
XMCL позволяет независимо настраивать ключевые элементы интерфейса:
- **Цвет карточек**: фон карточек модов, настроек и диалоговых окон.
- **Цвет верхней панели**: фон заголовка окна и области перетаскивания.
- **Цвет боковой панели**: фон левой панели навигации.
- **Цвет фона**: базовый фоновый цвет всего окна.
- **Цвет акцента**: цвет активных иконок, кнопок действий, индикаторов фокуса и ссылок.
- **Цвет ошибки**: цвет предупреждений, бейджей и системных ошибок.

Лаунчер поставляется с двумя встроенными режимами: **Светлая тема** и **Темная тема**.

:::tip Независимые настройки
Цветовые схемы для Светлой и Темной тем хранятся раздельно. При переключении темы лаунчер моментально загрузит сохраненную конфигурацию для соответствующего режима.
:::

---

### Эффекты фона и медиа
Фон главного окна можно задать тремя способами:

1. **Изображение**: загрузка любых картинок (PNG, JPG, WEBP). XMCL сохраняет копию файла внутри каталога данных лаунчера, поэтому фон продолжит работать, даже если исходный файл будет перемещен или удален.
2. **Видео**: локальный видеофайл в формате MP4 или WEBM в качестве живого видеофона.
   :::warning Зависимость от пути
   Лаунчер сохраняет только **абсолютный путь** к видеофайлу. Если переместить, переименовать или удалить видео, фон вернется к цвету темы по умолчанию.
   :::
3. **Эффекты частиц**: встроенные динамические частицы (падающий снег, летающие звезды или интерактивные созвездия).

---

## 2. Продвинутая настройка через Custom CSS

В нижней части вкладки **Оформление** находится встроенный редактор **Custom CSS**. Поскольку графический интерфейс XMCL построен на связке **Vue 3** и компонентов библиотеки **Vuetify 3**, вы можете глобально переопределить стили любых элементов лаунчера.

Для гарантированного применения стилей поверх встроенных правил Vuetify используйте точные селекторы и директиву `!important`.

### Шрифты и сглаживание
Улучшение рендеринга текста и задание современного стека шрифтов:
```css
html, body, #app, .v-application {
  font-family: -apple-system, BlinkMacSystemFont, "Space Grotesk", "Segoe UI", Roboto, sans-serif !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  text-rendering: optimizeLegibility !important;
}
```

---

## 3. Переопределение цветовых токенов Vuetify 3

Vuetify задает цвета в формате RGB-триплетов (например, `255, 255, 255`) для вычисления прозрачности. Чтобы переопределить цвета глобально, задайте их в переменных темы:

```css
.v-application,
.v-theme--dark,
.v-theme--light {
  --v-theme-background: 18, 18, 28;      /* Основной фон окна */
  --v-theme-surface: 25, 25, 35;          /* Карточки и модальные окна */
  --v-theme-on-surface: 255, 255, 255;    /* Основной цвет текста */
  --v-theme-primary: 0, 122, 255;         /* Акцентный цвет (выделение) */
  --v-theme-on-primary: 255, 255, 255;    /* Текст на акцентных кнопках */
  --v-theme-error: 255, 59, 48;           /* Цвет ошибок */
}
```

Чтобы сделать фоны контейнеров полностью прозрачными для видимости кастомного фона:
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

## 4. Настройка фона через CSS

Помимо базовой опции выбора обоев в меню, через CSS можно настроить темные градиентные маски для контрастности, живые анимированные сетки и эффекты размытого стекла (Aero / Mica).

### 1. Обои с затемняющим градиентом
Для комфортного чтения текста на светлых обоях наложите полупрозрачный градиент поверх фонового изображения:

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

### 2. Анимированный градиент (Mesh Gradient)
Плавный живой градиент без нагрузки на систему от видеофайлов:

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

### 3. Эффект матового стекла (Acrylic / Backdrop Filter)
Современный стиль с глубоким размытием заднего плана:

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

## 5. Кастомные иконки и маски SVG

Вы можете подменять или перекрашивать стандартные иконки без редактирования исходников лаунчера.

### 1. Динамическая иконка через CSS Mask
С помощью `mask-image` векторная иконка наследует текущий цвет темы:

```css
.v-btn--icon .v-icon--custom-logo {
  display: inline-block !important;
  width: 24px !important;
  height: 24px !important;
  background-color: currentColor !important;
  -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Cpath d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'/%3E%3C/svg%3E") no-repeat center !important;
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'%3E%3Cpath d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'/%3E%3C/svg%3E") no-repeat center !important;
  -webkit-mask-size: contain !important;
  mask-size: contain !important;
}
```

---

## 6. Плавные анимации и эффекты переходов

### 1. Плавный подъем карточек при наведении
Добавляет интерактивности спискам модов и инстансов:

```css
.v-card {
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.25s ease !important;
  will-change: transform, box-shadow;
}

.v-card:hover {
  transform: translateY(-3px) scale(1.008) !important;
  border-color: rgba(30, 215, 96, 0.45) !important;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.45), 0 0 16px rgba(30, 215, 96, 0.2) !important;
}
```

### 2. Плавное появление окон и диалогов
```css
@keyframes modalSlideUp {
  from {
    opacity: 0;
    transform: translateY(16px) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.v-dialog > .v-overlay__content > .v-card {
  animation: modalSlideUp 0.24s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
}
```

### 3. Неоновое свечение кнопки запуска (Launch Button)
```css
.v-btn--variant-elevated.bg-primary {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
  box-shadow: 0 0 12px rgba(30, 215, 96, 0.3) !important;
}

.v-btn--variant-elevated.bg-primary:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 0 24px rgba(30, 215, 96, 0.65), 0 0 8px #1ed760 !important;
}
```

---

## 7. Тонкие полосы прокрутки (Scrollbars)

Стандартные широкие полосы прокрутки можно заменить на стильные минималистичные:

```css
::-webkit-scrollbar {
  width: 6px !important;
  height: 6px !important;
}

::-webkit-scrollbar-track {
  background: transparent !important;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.18) !important;
  border-radius: 9999px !important;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(30, 215, 96, 0.55) !important;
}
```
