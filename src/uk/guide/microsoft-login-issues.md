# Помилки входу Microsoft (failed to exchange Xbox token)

Цей посібник допоможе вам детально розібратися, чому виникає помилка **"failed to exchange Xbox token"** при спробі авторизуватися через обліковий запис Microsoft в XMCL, та як швидко вирішити цю проблему.

---

## 🔍 Як влаштований процес входу?

Для запуску ліцензійної версії Minecraft лаунчер повинен підтвердити вашу особу на трьох різних рівнях безпеки:

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
    Помилка <strong>"failed to exchange Xbox token"</strong> означає, що Крок 1 та Крок 2 пройшли успішно, але на Кроці 3 сервери авторизації Mojang відхилили обмін токенів.
  </p>
</div>

---

## 🛠 Три головні причини та їх вирішення

### 1. Відсутність ліцензії Minecraft на цьому обліковому записі

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #ef4444; font-weight: bold; font-size: 1.25rem;">
    🎮
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Причина: Сервер Mojang не знайшов куплену гру</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Найпоширеніша ситуація: ви успішно увійшли у свій поштовий ящик Microsoft, але сервери Mojang повідомляють лаунчеру, що цей обліковий запис не володіє офіційною ліцензією Minecraft Java Edition.</p>
  </div>
</div>

#### Як вирішити:
* **Перевірте покупку:** Зайдіть на [офіційний сайт Minecraft.net](https://www.minecraft.net/) під своїм акаунтом Microsoft і перевірте статус профілю. Переконайтеся, що ви бачите кнопку завантаження ліцензійної версії, а не пропозицію придбати гру.
* **Перевірте статус Game Pass:** Якщо ви граєте через передплату **Xbox Game Pass**, переконайтеся, що передплата не закінчилася і ви використовуєте саме той акаунт Microsoft, який підключено до передплати.
* **Перевірте пошту:** Переконайтеся, що ви не переплутали акаунти (наприклад, увійшли через робочу або навчальну пошту замість особистої, на яку куплено гру).

---

### 2. Не створено ігровий профіль Xbox Live

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #f59e0b; font-weight: bold; font-size: 1.25rem;">
    👤
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Причина: Обліковий запис Microsoft не активовано в системі Xbox</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Ви створили пошту Microsoft, але ні разу не запускали сервіси Xbox. Сервери авторизації не можуть згенерувати ігровий токен, оскільки у вас відсутній унікальний ідентифікатор гравця (Gamertag).</p>
  </div>
</div>

#### Як вирішити:
1. Перейдіть на офіційний сайт [Xbox.com](https://www.xbox.com/).
2. Натисніть **Увійти** у верхньому правому кутку.
3. Якщо з'явиться вікно з пропозицією створити профіль, **прийміть угоду та створіть Gamertag** (унікальний ігровий нікнейм).
4. Зачекайте 1-2 хвилини, щоб сервери оновили дані, запустіть лаунчер XMCL та спробуйте повторити вхід.

---

### 3. Мережеві блокування та проблеми з провайдером

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(139, 92, 246, 0.05); border: 1px solid rgba(139, 92, 246, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(139, 92, 246, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #8b5cf6; font-weight: bold; font-size: 1.25rem;">
    🌐
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Причина: Заблоковані сервери авторизації Mojang чи Microsoft</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Через регіональні обмеження, брандмауери або некоректні налаштування DNS ваш комп'ютер не може з'єднатися з адресою `api.minecraftservices.com` або серверами Xbox Live.</p>
  </div>
</div>

#### Як вирішити:
* **Використовуйте VPN:** Увімкніть VPN перед спробою входу. Це допоможе обійти блокування провайдера або маршрутизації до серверів авторизації.
* **Налаштуйте проксі безпосередньо в XMCL:**
  1. Відкрийте **Налаштування** (іконка шестірні внизу лівого меню).
  2. Перейдіть до вкладки **«Налаштування мережі»**.
  3. Введіть адресу свого робочого проксі-сервера (підтримуються протоколи HTTP, HTTPS та SOCKS5).
* **Скиньте налаштування файлу hosts**:
  Перевірте, чи немає у вашому системному файлі `hosts` (`C:\Windows\System32\drivers\etc\hosts`) рядків, які примусово перенаправляють запити до доменів `mojang.com` чи `minecraftservices.com`. Якщо вони є — видаліть їх.

---

## 📋 Коротка діагностична таблиця

| Ознака помилки | Вірогідна причина | Перша дія для вирішення |
| :--- | :--- | :--- |
| Помилка одразу при введенні пошти/пароля | Неправильні дані або блокування Microsoft | Скинути пароль на сайті Microsoft.com |
| Помилка **"failed to exchange Xbox token"** | Відсутність ліцензії / Немає профілю Xbox | Створити Gamertag на Xbox.com або перевірити покупку |
| Помилка **"Failed to connect to server"** | Мережеве блокування / Проблема з DNS | Увімкнути VPN або налаштувати проксі в XMCL |
