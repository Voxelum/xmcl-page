# Проблеми входу Microsoft, демо-режим та ліцензія

Цей посібник допоможе вам розібратися, як увійти у свій обліковий запис Microsoft в XMCL, що робити при виникненні помилки **"failed to exchange Xbox token"**, чому Minecraft може запускатися в **демо-режимі** та як грати без ліцензії за допомогою альтернативних методів входу.

---

## 🔑 1. Авторизація через обліковий запис Microsoft

Щоб увійти та грати з вашою офіційною ліцензією Minecraft, виконайте такі кроки:

1. Натисніть на свій профіль/аватар (або кнопку **"Керування обліковими записами"**) у верхньому правому кутку, щоб відкрити менеджер акаунтів:

   <video src="/guidephoto/My%20stuff.mp4" autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

2. Натисніть **"Додати акаунт"**, виберіть **Microsoft** та виконайте вхід:

   <video src="/guidephoto/add%20account.mp4" autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

> 💡 **Вхід за допомогою коду пристрою (Device Code):**  
> Якщо ви не хочете вводити пароль безпосередньо в лаунчері, позначте пункт **"Login by Device Code"** (Вхід за кодом). XMCL покаже унікальний код. Перейдіть на сторінку `microsoft.com/link` у браузері, введіть цей код і підтвердіть авторизацію.

---

## 🔍 2. Як влаштований процес авторизації Microsoft

При спробі авторизуватися лаунчер перевіряє ваші дані на трьох етапах безпеки:

<div style="display: flex; flex-direction: column; gap: 16px; margin: 24px 0; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-weight: 600; font-size: 1.1rem; color: var(--vp-c-text-1);">🔑 Етапи авторизації:</span>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: center; margin: 10px 0;">
    <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #3b82f6; font-size: 0.85rem;">КРОК 1</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Вхід в Microsoft</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Перевірка пароля</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold;">➔</div>
    <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #10b981; font-size: 0.85rem;">КРОК 2</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Сервіси Xbox Live</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Отримання Gamertag</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold; color: #ef4444;">➔ ❌ Збій тут</div>
    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #ef4444; font-size: 0.85rem;">КРОК 3 (Обмін)</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Токен Minecraft</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Перевірка ліцензії</div>
    </div>
  </div>
  <p style="font-size: 0.9rem; color: var(--vp-c-text-2); margin: 0; text-align: center; line-height: 1.6;">
    Якщо Крок 3 завершується невдачею, лаунчер видасть помилку <strong>"failed to exchange Xbox token"</strong>, або гра запуститься в <strong>демо-режимі</strong>. Обидва варіанти означають, що сервери авторизації Mojang не змогли підтвердити наявність ліцензії Minecraft на вашому обліковому записі Microsoft.
  </p>
</div>

---

## 🛠 3. Вирішення помилок входу Microsoft та демо-режиму

Якщо ви придбали гру, але бачите помилку входу або демо-екран:

### Причина А: Відсутність ліцензії Minecraft на цьому акаунті Microsoft

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #ef4444; font-weight: bold; font-size: 1.25rem;">
    🎮
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Сервер Mojang не знайшов куплену гру</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Це найпоширеніша проблема. Вхід в акаунт Microsoft відбувся успішно, але Mojang повідомляє, що цей конкретний акаунт не має ліцензії Minecraft Java Edition.</p>
  </div>
</div>

#### Як вирішити:
* **Перевірте покупку:** Зайдіть на [офіційний сайт Minecraft.net](https://www.minecraft.net/) під вашим акаунтом Microsoft і переконайтеся, що ви бачите кнопку завантаження ліцензійної версії, а не пропозицію купити гру знову.
* **Перевірте статус Game Pass:** Якщо ви граєте через передплату **Xbox Game Pass**, переконайтеся, що передплата активна і ви увійшли під тим самим акаунтом Microsoft, на який її оформлено.
* **Перевірте пошту:** Переконайтеся, що ви увійшли під потрібним особистим акаунтом, а не робочою чи навчальною поштою, де гра не купувалася.

---

### Причина Б: Не активовано ігровий профіль Xbox Live

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #f59e0b; font-weight: bold; font-size: 1.25rem;">
    👤
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Обліковий запис Microsoft не активовано в Xbox Live</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Ви створили пошту Microsoft, але жодного разу не користувалися ігровими сервісами Xbox. Лаунчер не може отримати токен, оскільки у профілю немає імені гравця (Gamertag).</p>
  </div>
</div>

#### Як вирішити:
1. Перейдіть на офіційний сайт [Xbox.com](https://www.xbox.com/).
2. Натисніть кнопку **Увійти** (Sign In) у верхньому правому кутку.
3. Якщо система запропонує створити ігровий профіль Xbox, **погодьтеся та виберіть свій Gamertag** (ігрове ім'я).
4. Зачекайте 1-2 хвилини для синхронізації та повторіть спробу входу в лаунчері.

---

### Причина В: Мережеві блокування та проблеми з провайдером

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(139, 92, 246, 0.05); border: 1px solid rgba(139, 92, 246, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(139, 92, 246, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #8b5cf6; font-weight: bold; font-size: 1.25rem;">
    🌐
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Заблоковано підключення до серверів Mojang чи Microsoft</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Через мережеві обмеження провайдера, локальний брандмауер чи пошкоджені налаштування DNS комп'ютер не може підключитися до `api.minecraftservices.com` або серверів Xbox Live.</p>
  </div>
</div>

#### Як вирішити:
* **Використовуйте VPN:** Увімкніть стабільний VPN перед входом в акаунт. Це допоможе обійти блокування провайдера чи маршрутизації.
* **Налаштуйте проксі безпосередньо в XMCL:**
  1. Відкрийте **Налаштування** (іконка шестірні ліворуч на панелі).
  2. Перейдіть до вкладки **«Налаштування мережі»**.
  3. Введіть адресу свого робочого проксі (підтримуються протоколи HTTP, HTTPS та SOCKS5).
* **Скиньте налаштування файлу hosts:** Переконайтеся, що файл hosts вашої системи не містить правил перенаправлення для доменів `mojang.com` чи `minecraftservices.com`.

---

## 🆓 4. Гра без ліцензії (Альтернативні методи входу)

Якщо у вас немає купленої ліцензії Minecraft, ви все одно можете грати. Лаунчер XMCL підтримує **Режим розробника**, який відкриває локальний офлайн-вхід та сторонні сервіси авторизації.

### Як увімкнути режим розробника:
1. Перейдіть до **Налаштувань** (іконка шестірні на бічній панелі ліворуч).
2. Знайдіть пункт **"Режим розробника"** та увімкніть його:

   ![Увімкнення режиму розробника](/guidephoto/developer-mode.png)

Після увімкнення в меню додавання облікового запису з'являться додаткові опції:

### 🟢 Офлайн режим (Offline)
- Гра **локально** без підключення до серверів Mojang.
- Просто вкажіть будь-яке ігрове ім'я (нікнейм) та грайте в одиночному режимі чи на локальних серверах.

### 🟡 Littleskin
- Безкоштовна система скінів та облікових записів спільноти.
- Дозволяє використовувати власні скіни без придбання ліцензійної гри.
- Вебсайт: [https://littleskin.cn](https://littleskin.cn)

### 🔵 Ely.by
- Популярний альтернативний сервіс авторизації та скінів.
- Дозволяє встановлювати власні скіни, плащі та сумісний із багатьма серверами спільноти.
- Вебсайт: [https://ely.by](https://ely.by)
