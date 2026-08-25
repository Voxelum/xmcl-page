# Microsoft кіру, Bedrock және Java айырмашылығы мен лицензия мәселелерін шешу

Бұл нұсқаулықта XMCL-дегі Microsoft тіркелгісінің аутентификациясы қалай жұмыс істейтіні, неліктен кіру қателері (**"failed to exchange Xbox token"** немесе сатып алынбаған) шығатыны, ойын не себепті **Демо режимінде (Demo Mode)** іске қосылуы мүмкін екені, **Bedrock Edition (телефон/консольдер)** мен **Java Edition (ДК)** арасындағы маңызды айырмашылық және тіркелгі мәселелерін шешу жолдары түсіндіріледі.

---

## 🔑 1. Microsoft тіркелгісімен кіру

Ресми Minecraft лицензиясымен кіру үшін келесі қадамдарды орындаңыз:

1. Тіркелгі менеджерін ашу үшін жоғарғы оң жақтағы аватарыңызды (немесе **«Тіркелгілерді басқару»**) басыңыз:

   <video src="/guidephoto/My%20stuff.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

2. **«Тіркелгі қосу»** батырмасын басып, **Microsoft** таңдап, кіруді орындаңыз:

   <video src="/guidephoto/add%20account.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

> 💡 **Құрылғы кодымен кіру (Device Code):**  
> Лаунчер ішінде құпия сөзді енгізгіңіз келмесе, **«Құрылғы кодымен кіру»** құсбелгісін қойыңыз. XMCL 8 таңбалы кодты көрсетеді; браузерде [microsoft.com/link](https://microsoft.com/link) сілтемесіне өтіп, кодты енгізіп, растаңыз.

---

## 🔍 2. Microsoft үш сатылы тексеру жүйесі

Кіру кезінде лаунчер үш бөлек тексеру кезеңінен өтеді:

<div style="display: flex; flex-direction: column; gap: 16px; margin: 24px 0; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-weight: 600; font-size: 1.1rem; color: var(--vp-c-text-1);">🔑 3 сатылы тексеру реті:</span>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: center; margin: 10px 0;">
    <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #3b82f6; font-size: 0.85rem;">1-ҚАДАМ</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Microsoft OAuth</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Email және құпия сөзді тексеру</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold;">➔</div>
    <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #10b981; font-size: 0.85rem;">2-ҚАДАМ</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Xbox Live қызметтері</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">Xbox Gamertag алу</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold; color: #ef4444;">➔ ❌ Негізгі қате орны</div>
    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #ef4444; font-size: 0.85rem;">3-ҚАДАМ (Алмасу)</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">Mojang Java лицензиясы</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">ДК Java бар-жоғын тексеру</div>
    </div>
  </div>
  <p style="font-size: 0.9rem; color: var(--vp-c-text-2); margin: 0; text-align: center; line-height: 1.6;">
    Егер 3-қадам сәтсіз аяқталса, лаунчер <strong>"failed to exchange Xbox token"</strong> қатесін береді немесе ойын <strong>Демо режимінде</strong> ашылады. Бұл Mojang серверлері бұл Microsoft тіркелгісінен белсенді <strong>Minecraft: Java Edition</strong> лицензиясын таба алмағанын білдіреді.
  </p>
</div>

---

## 🛑 3. Ең жиі кездесетін қате түсінік: Bedrock пен Java айырмашылығы

**XMCL — тек Minecraft: Java Edition (Windows, macOS және Linux ДК) үшін арналған лаунчер.**

Көптеген ойыншылар ойынды смартфонда немесе консольдерде сатып алып, кейін XMCL-ге кіруге тырысады:

| Сатып алынған платформа | Иеленген басылым | XMCL-мен үйлесімді ме? | Себебі |
| :--- | :--- | :--- | :--- |
| 📱 **Телефон / Планшет (iOS / Android)** | Bedrock Edition | ❌ Жоқ | Мобильді нұсқа ДК-дегі Java басылымын бермейді. |
| 🎮 **PlayStation 4 / 5 консолі** | Bedrock Edition | ❌ Жоқ | PSN сатып алуы тек консольге жарамды. |
| 🎮 **Xbox One / Series X\|S консолі** | Bedrock Edition | ❌ Жоқ | Консольдік нұсқа ДК Java-ға ауыспайды. |
| 🕹️ **Nintendo Switch** | Bedrock Edition | ❌ Жоқ | Nintendo eShop сатып алуы тек Switch-ке арналған. |
| 💻 **ДК (Minecraft: Java & Bedrock жинағы)** | Java + Bedrock | ✅ **Иә** | Толық ресми қолдау! |
| 🟢 **PC Game Pass / Ultimate жазылымы** | Java + Bedrock | ✅ **Иә** | Жазылым мерзімінде қолдау көрсетіледі. |

> ⚠️ **Маңызды:**  
> Егер сіз Minecraft-ты тек **смартфонда**, **PlayStation**, **Xbox консолінде** немесе **Switch-те** сатып алған болсаңыз, Mojang бұл тіркелгіде **Java Edition жоқ** деп жауап береді.  
> ДК-де ресми Java Edition ойнау үшін [Minecraft.net](https://www.minecraft.net/) сайтынан **"Minecraft: Java & Bedrock Edition for PC"** жинағын сатып алу немесе **PC Game Pass** жазылымы қажет.

---

## 🛠 4. Кіру ақауларын шешу жолдары

### А себебі: Бұл тіркелгіде Java Edition лицензиясы жоқ

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #ef4444; font-weight: bold; font-size: 1.25rem;">
    🎮
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Mojang ДК сатып алуын таппады</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Microsoft тіркелгісі сәтті расталды, бірақ Mojang базасында Java Edition сатып алу жазбасы жоқ.</p>
  </div>
</div>

#### Тексеру және түзету:
* **Minecraft.net сайтында тексеру:** [Minecraft.net](https://www.minecraft.net/) сайтына кіріп, профильде ойын аты тұр ма, әлде «Қазір сатып алу» батырмасы шығып тұр ма, соны тексеріңіз.
* **Тапсырыстар тарихы:** [account.microsoft.com/billing/orders](https://account.microsoft.com/billing/orders) сілтемесіне өтіп, сатып алынған өнімді тексеріңіз.
* **Email тексеру:** Ойын сатып алынбаған мектеп немесе жұмыс поштасымен кіріп тұрмағаныңызға көз жеткізіңіз.
* **Game Pass күйі:** Жазылымыңыз белсенді екенін және ДК-ге жарамды екенін тексеріңіз.

---

### Б себебі: Xbox Live профилі (Gamertag) жасалмаған

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #f59e0b; font-weight: bold; font-size: 1.25rem;">
    👤
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Тіркелгіде Xbox Gamertag жоқ</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Жаңа жасалған Microsoft тіркелгілерінде Xbox профилі іске қосылмаған болуы мүмкін.</p>
  </div>
</div>

#### Шешімі:
1. Браузерде [Xbox.com](https://www.xbox.com/) сайтын ашыңыз.
2. Жоғарғы оң жақтағы **Кіру** батырмасын басыңыз.
3. Шарттарды қабылдап, **Gamertag** (ойын лақап атын) жасаңыз.
4. 1–2 минут күтіп, XMCL-ге қайта кіріп көріңіз.

---

### В себебі: Желі мен DNS бұғатталуы

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(139, 92, 246, 0.05); border: 1px solid rgba(139, 92, 246, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(139, 92, 246, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #8b5cf6; font-weight: bold; font-size: 1.25rem;">
    🌐
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Mojang / Xbox серверлерімен байланыс бұғатталған</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">Брандмауэр немесе провайдер DNS ақаулары <code>api.minecraftservices.com</code> байланысын тежейді.</p>
  </div>
</div>

#### Шешімі:
* **VPN пайдалану:** Кіру алдында тұрақты VPN қосыңыз.
* **XMCL ішінде прокси баптау:** **Баптаулар** -> **Желі баптаулары** бөлімінде проксиді (HTTP/HTTPS/SOCKS5) енгізіңіз.
* **hosts файлын тексеру:** Жүйелік hosts файлында `mojang.com` бағыттаулары жоқ екеніне көз жеткізіңіз.

---

## 🎮 Ресми лицензияңыз жоқ па?

Егер сізде әзірге ресми лицензия болмаса, **Офлайн режим** немесе қауымдастық скин жүйелері арқылы ойнауға болады.

👉 **[Толық нұсқаулық: Лицензиясыз ойнау (Офлайн режим және балама тіркелгілер)](./offline-mode)**
