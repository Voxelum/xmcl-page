# Проблеми зі входом через Microsoft, Bedrock vs Java та ліцензією

Цей гайд пояснює, як працює авторизація Microsoft в XMCL, чому виникають помилки входу (наприклад, **"failed to exchange Xbox token"** або **"Not Purchased"**), чому гра може запускатися в **Демо-режимі (Demo Mode)**, принципову різницю між **Bedrock Edition (телефон/консолі)** та **Java Edition (ПК)**, та як вирішити проблеми з обліковим записом.

---

## 🔑 1. Вхід через обліковий запис Microsoft

Щоб увійти з офіційною ліцензією Minecraft, виконайте такі кроки:

1. Натисніть на аватар свого профілю (або **«Керування акаунтами»**) у правому верхньому кутку лаунчера:

   <video src="/guidephoto/My%20stuff.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

2. Натисніть **«Додати акаунт»**, оберіть **Microsoft** і здійсніть вхід:

   <video src="/guidephoto/add%20account.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

> 💡 **Вхід через код пристрою (Device Code):**  
> Якщо ви не хочете вводити пароль всередині лаунчера, поставте галочку **«Вхід за кодом пристрою»**. XMCL покаже 8-значний код; перейдіть за адресою [microsoft.com/link](https://microsoft.com/link) у браузері, введіть код та підтвердьте вхід.

---

## 🔍 2. Як працює трирівнева авторизація Microsoft

Під час входу лаунчер проходить через три послідовні етапи перевірки:

<div style="display: flex; flex-direction: column; gap: 16px; margin: 24px 0; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-weight: 600; font-size: 1.1rem; color: var(--vp-c-text-1);">🔑 3 кроки перевірки ліцензії:</span>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: center; margin: 10px 0;">
    <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #3b82f6; font-size: 0.85rem;">КРОК 1</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Microsoft OAuth</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Перевірка логіна та пароля</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold;">➔</div>
    <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #10b981; font-size: 0.85rem;">КРОК 2</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Сервіси Xbox Live</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Отримання Xbox Gamertag</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold; color: #ef4444;">➔ ❌ Збій тут</div>
    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #ef4444; font-size: 0.85rem;">КРОК 3 (Обмін)</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Ліцензія Mojang Java</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Перевірка гри на ПК</div>
    </div>
  </div>
  <p style="font-size: 0.9rem; color: var(--vp-c-text-2); margin: 0; text-align: center; line-height: 1.6;">
    Якщо Крок 3 завершується збоєм, лаунчер покаже <strong>"failed to exchange Xbox token"</strong> або гра запуститься в <strong>Демо-режимі (Demo Mode)</strong>. Це означає, що сервери Mojang не знайшли активної ліцензії <strong>Minecraft: Java Edition</strong> на цьому акаунті Microsoft.
  </p>
</div>

---

## 🛑 3. Головна плутанина: Bedrock Edition vs. Java Edition

**XMCL — це лаунчер виключно для Minecraft: Java Edition (ПК під керуванням Windows, macOS та Linux).**

Найчастіша причина помилок входу — покупка гри на іншій платформі:

| Де ви придбали Minecraft | Куплене видання | Чи сумісно з XMCL? | Чому виникає помилка |
| :--- | :--- | :--- | :--- |
| 📱 **Телефон / Планшет (iOS / Android / Google Play)** | Bedrock Edition | ❌ Ні | Мобільна покупка не дає ліцензію на Java Edition для ПК. |
| 🎮 **Консоль PlayStation 4 / 5** | Bedrock Edition | ❌ Ні | Ліцензія прив'язана лише до PSN консолі. |
| 🎮 **Консоль Xbox One / Series X\|S** | Bedrock Edition | ❌ Ні | Окрема покупка для консолі Xbox не відкриває Java на ПК. |
| 🕹️ **Nintendo Switch** | Bedrock Edition | ❌ Ні | Покупка в Nintendo eShop діє лише на Switch. |
| 💻 **ПК (Комплект Minecraft: Java & Bedrock)** | Java + Bedrock | ✅ **Так** | Повністю підтримується! |
| 🟢 **Підписка PC Game Pass / Ultimate** | Java + Bedrock | ✅ **Так** | Підтримується, доки активна підписка. |

> ⚠️ **Важливо:**  
> Якщо ви купували Minecraft лише на **смартфоні**, **консолі PlayStation**, **Xbox** або **Nintendo Switch**, сервери Mojang повідомлять, що ваш обліковий запис Microsoft **не має ліцензії Java Edition**.  
> Щоб грати в офіційну Java Edition на ПК, потрібно придбати бандл **"Minecraft: Java & Bedrock Edition for PC"** на сайті [Minecraft.net](https://www.minecraft.net/) або мати активну підписку **PC Game Pass / Xbox Game Pass Ultimate**.

---

## 🛠 4. Вирішення поширених проблем зі входом

### Причина А: На цьому акаунті немає ліцензії Java Edition

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #ef4444; font-weight: bold; font-size: 1.25rem;">
    🎮
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Mojang не бачить придбаної ПК-версії</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Ви успішно увійшли в обліковий запис Microsoft, але сервери Mojang повідомляють про відсутність купленої Java Edition.</p>
  </div>
</div>

#### Як перевірити та виправити:
* **Перевірка на Minecraft.net:** Увійдіть на сайт [Minecraft.net](https://www.minecraft.net/) під вашим акаунтом Microsoft. Якщо замість нікнейму вам пропонують "Купити зараз" (Buy Now) — на цьому акаунті немає гри.
* **Перевірка історії замовлень:** Перейдіть на [account.microsoft.com/billing/orders](https://account.microsoft.com/billing/orders) та переконайтеся, яке саме видання ви купували.
* **Перевірка електронної пошти:** Переконайтеся, що ви не входите через робочу, шкільну або іншу додаткову пошту замість основного особистого акаунта.
* **Статус Game Pass:** Якщо ви граєте за передплатою, перевірте, чи вона активна і чи включає ПК (PC Game Pass або Ultimate, а не базовий консольний Game Pass Core).

---

### Причина Б: Відсутній або неактивований профіль Xbox Live

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #f59e0b; font-weight: bold; font-size: 1.25rem;">
    👤
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">У Microsoft акаунта немає тегу гравця Xbox (Gamertag)</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Якщо акаунт створено нещодавно або на ньому ніколи не запускали ігри Xbox Live, сервери авторизації не можуть згенерувати токен без Gamertag.</p>
  </div>
</div>

#### Як виправити:
1. Відкрийте офіційний сайт [Xbox.com](https://www.xbox.com/).
2. Натисніть **Увійти** у верхньому правому кутку.
3. Погодьтеся з умовами та створіть свій **Gamertag** (ігровий нікнейм).
4. Зачекайте 1–2 хвилини для синхронізації та повторіть вхід в XMCL.

---

### Причина В: Блокування мережі, провайдера чи DNS

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(139, 92, 246, 0.05); border: 1px solid rgba(139, 92, 246, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(139, 92, 246, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #8b5cf6; font-weight: bold; font-size: 1.25rem;">
    🌐
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Блокування підключення до серверів Mojang / Xbox</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Через мережеві обмеження або збої DNS ПК не може з'єднатися з <code>api.minecraftservices.com</code> або <code>user.auth.xboxlive.com</code>.</p>
  </div>
</div>

#### Як виправити:
* **Використовуйте VPN:** Увімкніть стабільний VPN перед спробою входу.
* **Налаштуйте проксі в XMCL:**
  1. Відкрийте **Налаштування** (іконка шестерні внизу зліва).
  2. Перейдіть до розділу **Налаштування мережі**.
  3. Введіть адресу вашого проксі (підтримуються HTTP, HTTPS, SOCKS5).
* **Перевірте файл hosts:** Переконайтеся, що у системному файлі `hosts` немає записів, що блокують або перенаправляють домени `mojang.com`, `minecraft.net` або `xboxlive.com`.

---

### Причина Г: Батьківський контроль та налаштування конфіденційності Xbox

Якщо ваш акаунт зареєстровано як дитячий у сімейній групі Microsoft Family Safety:
1. Батьківський акаунт повинен перейти на [account.xbox.com/settings](https://account.xbox.com/settings).
2. У розділі **Безпека Xbox та Windows 10 в Інтернеті** дозволити параметри:
   - *«Ви можете грати з користувачами за межами Xbox Live»* -> **Дозволити**.
   - *«Ви можете приєднуватися до багатокористувацьких ігор»* -> **Дозволити**.

---

## 🎮 Немає ліцензії Java Edition?

Якщо у вас наразі немає купленої ліцензії, ви все одно можете грати локально або на сервері спільноти через **Офлайн-режим** та сторонні системи скінів.

👉 **[Ознайомтеся з окремим гайдом: Гра без ліцензії (Офлайн-режим та власні скіни)](./offline-mode)**
