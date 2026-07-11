# Посібник з кастомних скінів (Ely.by / LittleSkin)

Цей посібник пояснює, чому кастомні скіни (від таких сервісів, як Ely.by або LittleSkin) можуть не відображатися за замовчуванням в XMCL порівняно з іншими лаунчерами, як працює система скінів у Minecraft Java, та як правильно її налаштувати.

---

## Як працює відображення скінів у Minecraft Java

Зазвичай Minecraft Java отримує ваш скін з офіційного сервера сесій Mojang. Процес виглядає наступним чином:

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 250" width="100%" style="max-width: 600px; font-family: system-ui, -apple-system, sans-serif; margin: 20px auto; display: block;">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#94a3b8"/>
    </marker>
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#1d4ed8" />
    </linearGradient>
    <linearGradient id="grayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4b5563" />
      <stop offset="100%" stop-color="#1f2937" />
    </linearGradient>
  </defs>

  <!-- Node 1: Client -->
  <rect x="200" y="10" width="200" height="40" rx="8" fill="url(#blueGrad)" />
  <text x="300" y="34" fill="#ffffff" font-size="14" font-weight="600" text-anchor="middle">Клієнт Minecraft</text>

  <!-- Arrow down to check -->
  <line x1="300" y1="50" x2="300" y2="80" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)" />

  <!-- Node 2: Check Decision -->
  <rect x="180" y="90" width="240" height="40" rx="8" fill="url(#grayGrad)" stroke="#4b5563" stroke-width="1" />
  <text x="300" y="114" fill="#f3f4f6" font-size="13" font-weight="500" text-anchor="middle">Чи активний кастомний Yggdrasil?</text>

  <!-- Branch Left: No -->
  <path d="M 240 130 L 140 180" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)" />
  <text x="170" y="152" fill="#ef4444" font-size="12" font-weight="600" text-anchor="middle">Ні</text>

  <!-- Branch Right: Yes -->
  <path d="M 360 130 L 460 180" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)" />
  <text x="430" y="152" fill="#10b981" font-size="12" font-weight="600" text-anchor="middle">Так</text>

  <!-- Node 3: Mojang (Left) -->
  <rect x="20" y="190" width="240" height="50" rx="8" fill="#1f2937" stroke="#374151" stroke-width="1.5" />
  <text x="140" y="210" fill="#f3f4f6" font-size="13" font-weight="600" text-anchor="middle">Сервер сесій Mojang</text>
  <text x="140" y="228" fill="#9ca3af" font-size="11" text-anchor="middle">textures.minecraft.net</text>

  <!-- Node 4: Custom (Right) -->
  <rect x="340" y="190" width="240" height="50" rx="8" fill="#1f2937" stroke="#10b981" stroke-width="1.5" />
  <text x="460" y="210" fill="#f3f4f6" font-size="13" font-weight="600" text-anchor="middle">Кастомний сервер скінів</text>
  <text x="460" y="228" fill="#10b981" font-size="11" font-weight="500" text-anchor="middle">Ely.by / LittleSkin</text>
</svg>

---

## Чому скіни не відображаються в XMCL за замовчуванням

В інших лаунчерах, таких як **Legacy Launcher** або **ElyPrism**:
* **Legacy Launcher** автоматично змінює внутрішній файл гри `authlib.jar` або запускає фоновий Java-агент. Він запитує скіни з Ely.by для будь-яких локальних (офлайн) акаунтів просто за ніком, обходячи перевірки безпеки.
* **ElyPrism** — це форк Prism Launcher, який заздалегідь налаштований спеціально для екосистеми Ely.by.

**XMCL** — це чистий лаунчер з відкритим вихідним кодом. Він **ніколи** не змінює файли вашої гри та не перенаправляє трафік на сторонні сервери скінів без вашого дозволу.

---

## Як налаштувати кастомні скіни в XMCL

Ви можете налаштувати кастомні скіни одним із двох способів нижче.

### Спосіб 1: Додавання стороннього акаунта (Рекомендовано)

Замість використання простого локального (офлайн) нікнейму, додайте свій офіційний акаунт Ely.by або LittleSkin у лаунчер. Це автоматично активує **Authlib-Injector**:

1. Натисніть на іконку **Акаунти** на бічній панелі лаунчера.
2. Натисніть **Додати акаунт**.
3. Оберіть **Ely.by** або **Yggdrasil** (для LittleSkin введіть адресу їхнього Yggdrasil API: `https://littleskin.cn/api/yggdrasil`).
4. Увійдіть за допомогою своїх облікових даних.
5. У налаштуваннях вашої збірки переконайтеся, що опція **«Вимкнути Authlib Injector»** вимкнена.

#### Як це працює зсередини
При запуску гри XMCL автоматично додає Java-агент `authlib-injector` з посиланням на кастомне API:

```cmd
java -javaagent:authlib-injector.jar=https://authserver.ely.by/api/ -jar ...
```

---

### Спосіб 2: Використання моду CustomSkinLoader

Якщо ви бажаєте грати під локальним (офлайн) нікнеймом, але хочете, щоб ваша гра завантажувала скіни з Ely.by або LittleSkin, вам потрібно встановити мод **CustomSkinLoader**.

1. Встановіть завантажувач модів (Forge, Fabric або Quilt) у вашій збірці.
2. Знайдіть та завантажте мод **CustomSkinLoader** через вкладку завантаження модів в XMCL.
3. Запустіть гру один раз. Вона створить конфігураційний файл за шляхом `minecraft/CustomSkinLoader/CustomSkinLoader.json`.
4. Відкрийте цей файл та налаштуйте сервери скінів:

```json
{
  "enable": true,
  "loadTypes": ["Mojang", "ElyBy", "LittleSkin"],
  "skinList": [
    { "type": "Mojang" },
    { "type": "Yggdrasil", "apiRoot": "https://authserver.ely.by/api/" },
    { "type": "Yggdrasil", "apiRoot": "https://littleskin.cn/api/yggdrasil/" }
  ]
}
```
5. CustomSkinLoader буде запитувати ці мережі скінів за вашим нікнеймом та відображатиме скіни для вас та всіх інших гравців, які налаштували цей мод!
