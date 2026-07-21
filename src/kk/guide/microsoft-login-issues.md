# Microsoft аккаунтына кіру және демо режимі нұсқаулығы

Бұл нұсқаулықта Microsoft аккаунтын XMCL-ге қалай қосу керектігі, аутентификация процесі қалай жұмыс істейтіні және **"failed to exchange Xbox token"** сияқты жүйеге кірудегі жиі кездесетін қателерді немесе **демо режимде (Demo Mode)** қалып қою мәселелерін қалай шешуге болатыны сипатталған.

---

## 🔑 1. Microsoft аккаунтын қалай қосуға болады

Ресми аккаунтыңыз арқылы Minecraft ойнау үшін жүйеге кіруіңіз керек:

1. Тіркелгі менеджерін ашу үшін жоғарғы оң жақ бұрыштағы профиліңізді/аватарыңызды (немесе **"Аккаунтты басқару"**) басыңыз:

   <video src="/guidephoto/My%20stuff.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

2. **"Аккаунт қосу"** түймесін басып, **Microsoft** таңдап, жүйеге кіруді жалғастырыңыз:

   <video src="/guidephoto/add%20account.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

> 💡 **Құрылғы коды арқылы кіру (Device Code):**  
> Егер құпия сөзіңізді лаунчер ішінде тергіңіз келмесе, **"Login by Device Code"** (Құрылғы коды арқылы кіру) опциясын белгілеңіз. XMCL бірегей кодты көрсетеді; веб-шолғышыңызда `microsoft.com/link` сілтемесіне өтіп, кодты енгізіп, кіруді растаңыз.

---

## 🔍 2. Аутентификация процесі қалай жұмыс істейді

Лицензияланған Minecraft нұсқасын іске қосу үшін лаунчер сіздің жеке басыңызды үш бөлек қауіпсіздік деңгейінде тексеруі керек:

<div style="display: flex; flex-direction: column; gap: 16px; margin: 24px 0; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-weight: 600; font-size: 1.1rem; color: var(--vp-c-text-1);">🔑 Аутентификация алмасуы (Handshake):</span>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: center; margin: 10px 0;">
    <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #3b82f6; font-size: 0.85rem;">1-ҚАДАМ</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Microsoft жүйесіне кіру</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Құпия сөзді тексереді</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold;">➔</div>
    <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #10b981; font-size: 0.85rem;">2-ҚАДАМ</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Xbox Live қызметтері</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Gamertag-ты алады</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold; color: #ef4444;">➔ ❌ Қате осында</div>
    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #ef4444; font-size: 0.85rem;">3-ҚАДАМ (Алмасу)</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Minecraft токені</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Лицензияны тексереді</div>
    </div>
  </div>
  <p style="font-size: 0.9rem; color: var(--vp-c-text-2); margin: 0; text-align: center; line-height: 1.6;">
    <strong>"failed to exchange Xbox token"</strong> қатесі 1-қадам мен 2-қадамның сәтті аяқталғанын, бірақ 3-қадамда Mojang аутентификация серверлері токенді алмасудан бас тартқанын білдіреді.
  </p>
</div>

---

## 🛠 3. Үш негізгі себеп және олардың шешімдері

### 1. Осы аккаунтта Minecraft лицензиясы жоқ

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #ef4444; font-weight: bold; font-size: 1.25rem;">
    🎮
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Себебі: Mojang серверлері сатып алынған ойынды таппады</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Бұл ең жиі кездесетін себеп. Сіз Microsoft аккаунтына сәтті кірдіңіз, бірақ Mojang лаунчерге бұл нақты аккаунттың Minecraft лицензиясына ие емес екенін хабарлайды.</p>
  </div>
</div>

#### Шешу жолы:
* **Сатып алуды тексеру:** [Minecraft.net](https://www.minecraft.net/) сайтына өтіп, Microsoft аккаунтыңызбен кіріңіз. Ойынды сатып алу ұсынысының орнына жүктеу батырмасын көріп тұрғаныңызды тексеріңіз.
* **Game Pass күйін тексеру:** Егер сіз **Xbox Game Pass** арқылы ойнасаңыз, жазылымыңыздың белсенді екенін және белсенді жазылымы бар нақты Microsoft аккаунтымен кіргеніңізді тексеріңіз.
* **Электрондық поштаны қайта тексеру:** Сатып алу жасалған жеке аккаунттың орнына басқа Microsoft аккаунтымен (мысалы, мектеп немесе жұмыс поштасы) кірмегеніңізге көз жеткізіңіз.

---

### 2. Аккаунтта Xbox профилі жоқ (Gamertag жоқ)

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #f59e0b; font-weight: bold; font-size: 1.25rem;">
    👾
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Себебі: Microsoft аккаунты ойын ойнауға реттелмеген</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Minecraft токендерін алу үшін Microsoft аккаунтыңызға байланыстырылған белсенді Xbox Live профилі қажет. Егер сіз Minecraft-ты жақында сатып алсаңыз немесе ойынды бұрын ешқашан іске қоспаған болсаңыз, бұл профиль әлі жасалмаған болуы мүмкін, бұл сізді **демо режимде** қалдырады.</p>
  </div>
</div>

#### Шешу жолы:
1. Ресми [Xbox.com](https://www.xbox.com/) сайтына өтіңіз.
2. Microsoft аккаунтыңыздың деректерімен кіріңіз.
3. Ұсынылған жағдайда тегін Xbox Live профилін жасаңыз (Gamertag пен аватарды таңдау арқылы).
4. Профиль жасалғаннан кейін XMCL лаунчерін қайта іске қосып, қайта кіріп көріңіз.

---

### 3. Желілік қателер немесе блокталған қосылымдар

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(59, 130, 246, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #3b82f6; font-weight: bold; font-size: 1.25rem;">
    🌐
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Себебі: DNS мәселелері немесе аймақтық желілік шектеулер</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Кейбір аймақтарда немесе шектеулері бар интернет провайдерлерінде Xbox Live немесе Mojang аутентификация серверлеріне қосылу блокталған немесе бұзылған болуы мүмкін.</p>
  </div>
</div>

#### Шешу жолы:
* **VPN пайдаланыңыз:** Егер сіз интернет шектеулері бар елде болсаңыз, Microsoft аутентификация процесін аяқтау үшін VPN пайдаланыңыз.
* **DNS серверлерін өзгертіңіз:** Жүйеңіздің DNS параметрлерін қоғамдық және жылдам серверлерге ауыстырыңыз (мысалы, Google DNS: `8.8.8.8` және `8.8.4.4` немесе Cloudflare DNS: `1.1.1.1`).
* **Кейінірек қайталап көріңіз:** Microsoft аутентификация серверлерінде уақытша жүктеме көп болуы мүмкін. Бірнеше минут күтіп, әрекетті қайталаңыз.

---

## 🚪 4. Офлайн режимі және балама кіру опциялары (Microsoft аккаунтынсыз ойнау)

Егер сізде ресми Microsoft аккаунты болмаса немесе желісіз ойнағыңыз келсе не жеке/жергілікті серверді пайдалансаңыз, XMCL жүйеге кірудің балама әдістерін ұсынады.

### А опциясы: Жергілікті ойнау / Офлайн (Әзірлеуші режимі)

**Әзірлеуші режимі** (Developer Mode) кез келген таңдалған лақап атпен құпия сөзсіз офлайн ойнауға мүмкіндік береді.

1. Жоғарғы оң жақ бұрыштағы аккаунт менеджерін ашыңыз.
2. **"Аккаунт қосу"** (Add Account) түймесін басыңыз.
3. Тізімнен **Әзірлеуші** (Developer) опциясын таңдаңыз:

   <img src="/guidephoto/developer-mode.png" style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

4. Қалаған пайдаланушы атын енгізіп, растаңыз.
5. Енді ойынды іске қосуға болады. **Ескерту:** Офлайн тіркелгі ресми тексеру өшірілген (яғни сервер конфигурациясында `online-mode=false` орнатылған) серверлерге ғана кіруге мүмкіндік береді, сонымен қатар сіздің кейіпкеріңіз Minecraft-тың әдепкі терісін (скинін) пайдаланады.

---

### Б опциясы: Жеке терілер платформалары (Yggdrasil API)

Егер сіз жеке серверлерде өзіңіздің теңшелген теріңізбен (скиніңізбен) ойнағыңыз келсе, XMCL **LittleSkin**, **Ely.by** немесе басқа жеке Yggdrasil серверлері сияқты баламалы аутентификация қызметтерін қолдайды.

1. Аккаунт менеджерінде **"Аккаунт қосу"** батырмасын басыңыз.
2. Қажетті платформаны таңдаңыз (мысалы, **LittleSkin** немесе жеке API сілтемесін енгізу үшін **Yggdrasil**).
3. Осы қызметпен байланысты кіру деректерін енгізіңіз:

   <img src="/guidephoto/reg-account.png" style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

4. Лаунчер сіздің теріңіз бен профиль деректеріңізді осы платформадан автоматты түрде жүктейді.
