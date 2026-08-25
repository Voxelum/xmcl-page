# Гульня без ліцэнзіі (Афлайн-рэжым і альтэрнатыўныя акаўнты)

XMCL — гэта лаўнчар з адкрытым зыходным кодам, створаны для павагі да свабоды гульцоў. Калі ў вас няма набытай афіцыйнай ліцэнзіі Minecraft Java Edition ці вы хочаце пратэставаць модпак без падключэння да сервераў Mojang, XMCL забяспечвае поўную падтрымку **Афлайн-рэжыму** і сістэм скінаў.

---

## ⚙️ 1. Уключэнне рэжыму распрацоўшчыка

Для доступу да афлайн-акаўнтаў і іншых сэрвісаў уключыце **Рэжым распрацоўшчыка** ў наладах:

1. Адкрыйце **Налады** (значок шасцярэнькі ўнізе злева).
2. Знайдзіце пункт **«Рэжым распрацоўшчыка»** і **ЎКЛЮЧЫЦЕ** яго:

   ![Уключэнне рэжыму распрацоўшчыка](/guidephoto/developer-mode.png)

Пасля ўключэння ў Менеджары акаўнтаў з'явяцца дадатковыя варыянты ўваходу.

---

## 👥 2. Даступныя тыпы акаўнтаў

<div style="display: flex; flex-direction: column; gap: 14px; margin: 24px 0;">

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🟢</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">Афлайн-рэжым (Лакальны акаўнт)</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Гульня без падключэння да сервераў аўтарызацыі. Дастаткова ўвесці любы жаданы нікнейм. Выдатна падыходзіць для адзіночнай гульні, тэсціравання модпакаў, LAN-гульняў і сервераў супольнасці з <code>online-mode=false</code>.
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🟡</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">LittleSkin</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Бясплатны сервер аўтэнтыфікацыі і скінаў з падтрымкай карыстальніцкіх плашчоў.  
      Сайт: <a href="https://littleskin.cn" target="_blank" rel="noopener noreferrer">https://littleskin.cn</a>
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🔵</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">Ely.by</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Папулярная міжнародная сетка скінаў і аўтарызацыі з воблачным каталогам і HD-плашчамі.  
      Сайт: <a href="https://ely.by" target="_blank" rel="noopener noreferrer">https://ely.by</a>
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🌐</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">Уласны сервер Authlib-Injector / Yggdrasil</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Падключэнне да любога прыватнага сервера па стандартным Yggdrasil API URL.
    </p>
  </div>

</div>

---

## 🎮 3. Даданне і пераключэнне акаўнтаў

1. Націсніце на значок профілю ўверсе справа, каб адкрыць **Менеджар акаўнтаў**.
2. Націсніце **«Дадаць акаўнт»**.
3. Абярыце **Афлайн**, **LittleSkin**, **Ely.by** або **Уласны сервер**.
4. Увядзіце нікнейм або ўліковыя даныя.
5. Націсніце на акаўнт, каб зрабіць яго **Актыўным**.

---

## 💡 4. Параўнанне тыпаў акаўнтаў

| Магчымасць | Microsoft (Афіцыйны) | Афлайн-акаўнт | LittleSkin / Ely.by |
| :--- | :--- | :--- | :--- |
| **Кошт** | Платная ліцэнзія | Бясплатна | Бясплатна |
| **Афіцыйныя серверы (Hypixel і інш.)** | ✅ Так | ❌ Не | ❌ Не |
| **Серверы супольнасці / LAN / P2P** | ✅ Так | ✅ Так (`online-mode=false`) | ✅ Так |
| **Адзіночная гульня і модпакі** | ✅ Так | ✅ Так | ✅ Так |
| **Свае скіны і плашчы** | ✅ Афіцыйныя скіны Mojang | ⚠️ Стандартны скін | ✅ Скіны і плашчы сеткі |

---

## ❓ Частыя пытанні

### Ці магу я зайсці на Hypixel праз Афлайн-акаўнт?
Не. Афіцыйныя камерцыйныя серверы правяраюць ліцэнзію непасрэдна ў Mojang (`online-mode=true`), для чаго патрэбны платны акаўнт Microsoft з Java Edition.

### Як гуляць з сябрамі без афіцыйнай ліцэнзіі?
Скарыстайцеся ўбудаванай функцыяй **P2P Multiplayer / LAN** у XMCL або далучайцеся да сервераў з `online-mode=false`.

👉 **[Узніклі пытанні па ўваходзе Microsoft? Чытайце кіраўніцтва па выпраўленні памылак](./microsoft-login-issues)**
