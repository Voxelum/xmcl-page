# Праблемы з уваходам праз Microsoft, Bedrock vs Java і ліцэнзіяй

Гэты даведнік тлумачыць, як працуе аўтарызацыя Microsoft у XMCL, чаму ўзнікаюць памылкі ўваходу (напрыклад, **"failed to exchange Xbox token"** або не набыта), чаму гульня можа запускацца ў **Дэма-рэжыме (Demo Mode)**, прынцыповую розніцу паміж **Bedrock Edition (тэлефон/кансолі)** і **Java Edition (ПК)**, а таксама спосабы вырашэння праблем з уліковым запісам.

---

## 🔑 1. Уваход праз уліковы запіс Microsoft

Каб увайсці з афіцыйнай ліцэнзіяй Minecraft:

1. Націсніце на свой аватар (або **«Кіраванне ўліковымі запісамі»**) у правым верхнім куце лаўнчара:

   <video src="/guidephoto/My%20stuff.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

2. Націсніце **«Дадаць уліковы запіс»**, абярыце **Microsoft** і выканайце ўваход:

   <video src="/guidephoto/add%20account.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

> 💡 **Уваход праз код прылады (Device Code):**  
> Калі вы не жадаеце ўводзіць пароль у лаўнчары, адзначце **«Уваход па кодзе прылады»**. XMCL згенеруе 8-значны код; адкрыйце [microsoft.com/link](https://microsoft.com/link) у браўзеры і пацвердзіце ўваход.

---

## 🔍 2. Трохузроўневы працэс праверкі Microsoft

Падчас уваходу лаўнчар праходзіць праз тры паслядоўныя этапы:

<div style="display: flex; flex-direction: column; gap: 16px; margin: 24px 0; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-weight: 600; font-size: 1.1rem; color: var(--vp-c-text-1);">🔑 3 крокі праверкі ліцэнзіі:</span>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: center; margin: 10px 0;">
    <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #3b82f6; font-size: 0.85rem;">КРОК 1</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Microsoft OAuth</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Праверка лагіна і пароля</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold;">➔</div>
    <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #10b981; font-size: 0.85rem;">КРОК 2</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Сэрвісы Xbox Live</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Атрыманне Xbox Gamertag</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold; color: #ef4444;">➔ ❌ Частая памылка</div>
    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #ef4444; font-size: 0.85rem;">КРОК 3 (Абмен)</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Ліцэнзія Mojang Java</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Праверка пакупкі на ПК</div>
    </div>
  </div>
  <p style="font-size: 0.9rem; color: var(--vp-c-text-2); margin: 0; text-align: center; line-height: 1.6;">
    Калі Крок 3 завяршаецца памылкай, лаўнчар паведамляе <strong>"failed to exchange Xbox token"</strong> або гульня адкрываецца ў <strong>Дэма-рэжыме</strong>. Гэта значыць, што Mojang не знайшоў ліцэнзіі <strong>Minecraft: Java Edition</strong> на гэтым уліковым запісе.
  </p>
</div>

---

## 🛑 3. Галоўная памылка: Bedrock Edition супраць Java Edition

**XMCL прызначаны выключна для Minecraft: Java Edition (ПК пад кіраваннем Windows, macOS і Linux).**

Часта гульцы купляюць гульню на іншай платформе і сутыкаюцца з памылкай уваходу:

| Дзе набыты Minecraft | Купленае выданне | Сумяшчальна з XMCL? | Тлумачэнне |
| :--- | :--- | :--- | :--- |
| 📱 **Тэлефон / Планшэт (iOS / Android)** | Bedrock Edition | ❌ Не | Мабільная версія не дае ліцэнзіі на ПК Java Edition. |
| 🎮 **Кансоль PlayStation 4 / 5** | Bedrock Edition | ❌ Не | Пакупка ў PSN дзейнічае толькі на кансолі. |
| 🎮 **Кансоль Xbox One / Series X\|S** | Bedrock Edition | ❌ Не | Пакупка для кансолі не пераносіцца на ПК Java. |
| 🕹️ **Nintendo Switch** | Bedrock Edition | ❌ Не | Пакупка ў Nintendo eShop прызначана толькі для Switch. |
| 💻 **ПК (Комплект Minecraft: Java & Bedrock)** | Java + Bedrock | ✅ **Так** | Поўная афіцыйная падтрымка! |
| 🟢 **Падпіска PC Game Pass / Ultimate** | Java + Bedrock | ✅ **Так** | Падтрымліваецца на час дзеяння падпіскі. |

> ⚠️ **Важна:**  
> Калі вы куплялі Minecraft толькі на **смартфоне**, **PlayStation**, **Xbox** або **Switch**, серверам Mojang вядома, што на вашым уліковым запісе **няма Java Edition**.  
> Каб гуляць у афіцыйную Java Edition на ПК, неабходна набыць камплект **«Minecraft: Java & Bedrock Edition for PC»** на [Minecraft.net](https://www.minecraft.net/) або аформіць **PC Game Pass**.

---

## 🛠 4. Вырашэнне праблем з уваходам

### Прычына А: Няма ліцэнзіі Java Edition на гэтым акаўнце

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #ef4444; font-weight: bold; font-size: 1.25rem;">
    🎮
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Mojang не бачыць купленай версіі для ПК</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Уліковы запіс Microsoft пацверджаны, але ў базе Mojang няма запісу аб набыцці Java Edition.</p>
  </div>
</div>

#### Як выправіць:
* **Праверце на Minecraft.net:** Увайдзіце на [Minecraft.net](https://www.minecraft.net/). Калі замест нікнейма адлюстроўваецца кнопка «Купіць зараз», на гэтым акаўнце няма гульні.
* **Гісторыя заказаў:** Праверце пакупкі на [account.microsoft.com/billing/orders](https://account.microsoft.com/billing/orders).
* **Праверка пошты:** Пераканайцеся, што вы не ўваходзіце праз працоўную або школьную пошту.
* **Статус Game Pass:** Праверце, ці актыўная падпіска і ці ўключае яна ПК.

---

### Прычына Б: Адсутнічае профіль Xbox Live

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #f59e0b; font-weight: bold; font-size: 1.25rem;">
    👤
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">На акаўнце няма Xbox Gamertag</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">На новых акаўнтах Microsoft часта адсутнічае створаны профіль Xbox Live.</p>
  </div>
</div>

#### Вырашэнне:
1. Адкрыйце [Xbox.com](https://www.xbox.com/).
2. Націсніце **Увайсці** ўверсе справа.
3. Прыміце ўмовы і прыдумайце **Gamertag**.
4. Пачакайце 1–2 хвіліны і паўтарыце ўваход у XMCL.

---

### Прычына В: Сеткавыя абмежаванні і DNS

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(139, 92, 246, 0.05); border: 1px solid rgba(139, 92, 246, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(139, 92, 246, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #8b5cf6; font-weight: bold; font-size: 1.25rem;">
    🌐
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Блакаванне сувязі з серварамі Mojang / Xbox</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Брандмаўэр або памылкі DNS перашкаджаюць злучэнню з <code>api.minecraftservices.com</code>.</p>
  </div>
</div>

#### Вырашэнне:
* **Выкарыстоўвайце VPN:** Падключыце надзейны VPN перад уваходам.
* **Наладзьце проксі ў XMCL:** У **Наладах** -> **Налады сеткі** ўвядзіце адрас проксі (HTTP/HTTPS/SOCKS5).
* **Праверце файл hosts:** Пераканайцеся, што ў файле hosts няма старых запісаў для `mojang.com`.

---

## 🎮 Няма афіцыйнай ліцэнзіі?

Калі ў вас пакуль няма ліцэнзіі, вы можаце гуляць праз **Афлайн-рэжым** або іншыя сістэмы скінаў.

👉 **[Поўны даведнік: Гульня без ліцэнзіі (Афлайн-рэжым і альтэрнатыўныя акаўнты)](./offline-mode)**
