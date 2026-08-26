# Гра без ліцензії (Офлайн-режим та сторонні акаунти)

XMCL — це лаунчер із відкритим вихідним кодом, створений для поваги до свободи гравців. Якщо у вас наразі немає купленої офіційної ліцензії Minecraft Java Edition, або ви бажаєте протестувати збірку модів локально без підключення до серверів Mojang, XMCL надає повну підтримку **Офлайн-режиму** та популярних систем скінів.

---

## ⚙️ 1. Увімкнення режиму розробника

Для доступу до офлайн-акаунтів та сторонніх серверів скінів необхідно увімкнути **Режим розробника** в налаштуваннях XMCL:

1. Відкрийте **Налаштування** (іконка шестерні в лівій нижній панелі).
2. Знайдіть пункт **«Режим розробника»** і переведіть перемикач у положення **УВІМКНЕНО**:

   ![Увімкнення режиму розробника](/guidephoto/developer-mode.png)

Після увімкнення в Менеджері акаунтів стануть доступні додаткові типи облікових записів.

---

## 👥 2. Доступні типи облікових записів

<div style="display: flex; flex-direction: column; gap: 14px; margin: 24px 0;">

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🟢</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">Офлайн-режим (Локальний акаунт)</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Гра без підключення до серверів авторизації Mojang. Достатньо ввести будь-який бажаний нікнейм. Ідеально підходить для одиночної гри, локального тестування модпаків, а також гри через LAN або на серверах спільноти з налаштуванням <code>online-mode=false</code>.
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🟡</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">LittleSkin</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Безкоштовна система автентифікації та кастомних скінів. Дозволяє встановлювати персональні скіни та плащі, видимі іншим користувачам цієї системи.  
      Сайт: <a href="https://littleskin.cn" target="_blank" rel="noopener noreferrer">https://littleskin.cn</a>
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🔵</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">Ely.by</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Популярна глобальна мережа сторонньої автентифікації та скінів. Підтримує хмарні скіни, HD-плащі та інтеграцію з багатьма серверами спільноти.  
      Сайт: <a href="https://ely.by" target="_blank" rel="noopener noreferrer">https://ely.by</a>
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🌐</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">Власний сервер Authlib-Injector / Yggdrasil</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Підключення до будь-якого приватного сервера авторизації або сервера власного проєкту за стандартною Yggdrasil API URL-адресою.
    </p>
  </div>

</div>

---

## 🎮 3. Як додати та перемикати акаунти

1. Натисніть на іконку профілю у правому верхньому кутку, щоб відкрити **Менеджер акаунтів**.
2. Натисніть **«Додати акаунт»**.
3. Оберіть **Офлайн**, **LittleSkin**, **Ely.by** або **Власний сервер авторизації**.
4. Введіть ваш нікнейм або дані облікового запису.
5. Натисніть на доданий акаунт, щоб зробити його **Активним**.

---

## 💡 4. Порівняння типів облікових записів

| Можливість | Microsoft (Офіційний) | Офлайн-акаунт | LittleSkin / Ely.by |
| :--- | :--- | :--- | :--- |
| **Вартість** | Платна (Ліцензія Minecraft) | Безкоштовно | Безкоштовно |
| **Офіційні сервери (Hypixel тощо)** | ✅ Так | ❌ Ні | ❌ Ні |
| **Сервери спільноти / LAN / P2P** | ✅ Так | ✅ Так (`online-mode=false`) | ✅ Так |
| **Одиночна гра та модпаки** | ✅ Так | ✅ Так | ✅ Так |
| **Власні скіни та плащі** | ✅ Офіційні скіни Mojang | ⚠️ Стандартний скін | ✅ Мережеві скіни та плащі |

---

## ❓ Часті запитання

### Чи можу я зайти на Hypixel через Офлайн-акаунт?
Ні. Офіційні публічні сервери здійснюють обов'язкову перевірку через сервери Mojang (`online-mode=true`), для чого потрібна офіційна ліцензія Java Edition.

### Як грати з друзями без ліцензії?
Ви можете скористатися вбудованою функцією **P2P Multiplayer / LAN** в XMCL або підключитися до сервера спільноти з параметром `online-mode=false`.

👉 **[Виникли проблеми з офіційним входом Microsoft? Читайте наш гайд з вирішення проблем зі входом](./microsoft-login-issues)**
