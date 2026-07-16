# Кіраўніцтва па ўваходзе ў Microsoft і дэма-рэжыме

Гэтае кіраўніцтва тлумачыць, як дадаць свой акаўнт Microsoft у XMCL, як працуе працэс аўтарызацыі і як вырашыць распаўсюджаныя памылкі ўваходу, такія як **"failed to exchange Xbox token"** або праблема, калі акаўнт запускаецца толькі ў **дэма-рэжыме (Demo Mode)**.

---

## 🔑 1. Як дадаць акаўнт Microsoft

Каб гуляць у Minecraft з выкарыстаннем афіцыйнага акаўнта, трэба ўвайсці ў сістэму:

1. Націсніце на свой профіль/аватар (або **"Кіраванне акаўнтам"**) уверсе справа, каб адкрыць менеджэр акаўнтаў:

   <video src="/guidephoto/My%20stuff.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

2. Націсніце **"Дадаць акаўнт"**, абярыце **Microsoft** і прайдзіце аўтарызацыю:

   <video src="/guidephoto/add%20account.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

> 💡 **Уваход праз код прылады (Device Code):**  
> Калі вы не хочаце ўводзіць свой пароль непасрэдна ў лаўнчары, адзначце опцыю **"Login by Device Code"** (Уваход праз код прылады). XMCL пакажа код; вам трэба будзе перайсці на старонку `microsoft.com/link` у браўзеры, увайсці там і ўвесці код для пацверджання.

---

## 🔍 2. Як працуе працэс аўтарызацыі

Каб запусціць ліцэнзійную копію Minecraft, лаўнчар павінен пацвердзіць вашу асобу на трох розных узроўнях бяспекі:

<div style="display: flex; flex-direction: column; gap: 16px; margin: 24px 0; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-weight: 600; font-size: 1.1rem; color: var(--vp-c-text-1);">🔑 Сеткавы поціск рук (Handshake):</span>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: center; margin: 10px 0;">
    <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #3b82f6; font-size: 0.85rem;">КРОК 1</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Уваход Microsoft</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Праверка пароля</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold;">➔</div>
    <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #10b981; font-size: 0.85rem;">КРОК 2</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Службы Xbox Live</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Атрыманне Gamertag</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold; color: #ef4444;">➔ ❌ Памылка тут</div>
    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #ef4444; font-size: 0.85rem;">КРОК 3 (Абмен)</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Токен Minecraft</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Праверка ліцэнзіі</div>
    </div>
  </div>
  <p style="font-size: 0.9rem; color: var(--vp-c-text-2); margin: 0; text-align: center; line-height: 1.6;">
    Памылка <strong>"failed to exchange Xbox token"</strong> азначае, што Крок 1 і Крок 2 прайшлі паспяхова, але серверы аўтарызацыі Mojang адхілілі абмен токенамі на Кроку 3.
  </p>
</div>

---

## 🛠 3. Тры галоўныя прычыны і іх вырашэнне

### 1. Няма ліцэнзіі Minecraft на гэтым акаўнце

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #ef4444; font-weight: bold; font-size: 1.25rem;">
    🎮
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Прычына: Серверы Mojang не знайшлі набытую гульню</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Гэта самая частая прычына. Вы паспяхова ўвайшлі ў акаўнт Microsoft, але Mojang паведамляе лаўнчару, што гэты акаўнт не мае ліцэнзіі на Minecraft Java Edition.</p>
  </div>
</div>

#### Як гэта выправіць:
* **Праверце набыццё:** Увайдзіце з вашым акаўнтам Microsoft на сайце [Minecraft.net](https://www.minecraft.net/). Пераканайцеся, што вы бачыце кнопку спампоўвання гульні, а не прапанову купіць яе.
* **Праверце стан Game Pass:** Калі вы гуляеце праз **Xbox Game Pass**, пераканайцеся, што ваша падпіска актыўная і вы ўваходзіце менавіта з тым акаўнтам Microsoft, які звязаны з падпіскай.
* **Праверце пошту:** Пераканайцеся, што вы не ўвайшлі з іншай поштай (напрыклад, рабочай ці вучэбнай) замест асабістай, на якую куплялі гульню.

---

### 2. Акаўнт не мае профілю Xbox (Адсутнічае Gamertag)

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #f59e0b; font-weight: bold; font-size: 1.25rem;">
    👾
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Прычына: Акаўнт Microsoft не настроены для гульняў</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Вашаму акаўнту Microsoft патрэбны звязаны профіль Xbox Live для атрымання токенаў гульні. Калі вы набылі гульню нядаўна або ніколі не запускалі яе раней, гэты профіль яшчэ не створаны, што прыводзіць да запуску ў **дэма-рэжыме**.</p>
  </div>
</div>

#### Як гэта выправіць:
1. Перайдзіце на афіцыйны сайт [Xbox.com](https://www.xbox.com/).
2. Увайдзіце з дадзенымі вашага акаўнта Microsoft.
3. Калі з'явіцца прапанова, стварыце бясплатны профіль Xbox Live (абярыце Gamertag і аватар).
4. Пасля стварэння профілю перазапусціце XMCL і паспрабуйце ўвайсці зноў.

---

### 3. Памылкі сеткі або заблакаваныя злучэнні

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(59, 130, 246, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #3b82f6; font-weight: bold; font-size: 1.25rem;">
    🌐
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Прычына: Праблемы з DNS або рэгіянальныя сеткавыя блакіроўкі</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">У некаторых рэгіёнах ці ў асобных інтэрнэт-праўдараў доступ да сервераў аўтарызацыі Xbox Live ці Mojang можа блакавацца або працаваць са збоямі.</p>
  </div>
</div>

#### Як гэта выправіць:
* **Выкарыстоўвайце VPN:** Калі злучэнне ў вашай сетцы блакуецца, выкарыстоўвайце VPN для праходжання працэсу аўтарызацыі Microsoft.
* **Змяніце DNS:** Выкарыстоўвайце хуткія публічныя DNS (напрыклад, Google DNS: `8.8.8.8` і `8.8.4.4` або Cloudflare DNS: `1.1.1.1`).
* **Паспрабуйце пазней:** Серверы Microsoft могуць быць часова перагружаныя. Пачакайце некалькі хвілін і паспрабуйце зноў.

---

## 🚪 4. Офлайн-рэжым і альтэрнатыўныя варыянты ўваходу (Гульня без акаўнта Microsoft)

Калі ў вас няма ліцэнзійнага акаўнта Microsoft, вы хочаце гуляць без інтэрнэту або на прыватным лакальным серверы, XMCL прапануе іншыя метады ўваходу.

### Варыянт А: Лакальная гульня / Офлайн (Рэжым распрацоўшчыка)

**Рэжым распрацоўшчыка** (Developer Mode) дазваляе гуляць лакальна без пароля пад любым імем карыстальніка.

1. Адкрыйце менеджэр акаўнтаў уверсе справа.
2. Націснуць **"Дадаць акаўнт"** (Add Account).
3. Абярыце варыянт **Распрацоўшчык** (Developer) са спісу:

   <img src="/guidephoto/developer-mode.png" style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

4. Увядзіце жаданае імя гульца і пацвердзіце.
5. Цяпер вы можаце запускаць гульню. **Заўвага:** У офлайн-рэжыме вы можаце гуляць толькі на серверах з адключанай праверкай ліцэнзіі (`online-mode=false` у наладках сервера), а ваш персанаж будзе мець стандартны скін.

---

### Варыянт Б: Альтэрнатыўныя сістэмы скінаў (Yggdrasil API)

Калі вы хочаце гуляць з уласным скінам на прыватных серверах, XMCL падтрымлівае іншыя сэрвісы аўтарызацыі, такія як **LittleSkin**, **Ely.by** або іншыя кастомныя серверы Yggdrasil.

1. У менеджэры акаўнтаў націсніце **Дадаць акаўнт**.
2. Выберыце патрабаваную платформу (напрыклад, **LittleSkin** або **Yggdrasil** для ўводу адраса кастомнага API).
3. Увядзіце дадзеныя ўваходу ад гэтага сэрвісу:

   <img src="/guidephoto/reg-account.png" style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

4. Лаўнчар аўтаматычна загрузіць ваш скін і налады профілю з выбранай платформы.
