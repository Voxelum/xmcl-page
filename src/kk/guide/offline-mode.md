# Лицензиясыз ойнау (Офлайн режим және балама тіркелгілер)

XMCL — ойыншылардың еркіндігін құрметтейтін ашық бастапқы коды бар лаунчер. Егер сізде қазір Minecraft Java Edition лицензиясы болмаса немесе Mojang серверлеріне қосылмай модпактарды офлайн сынап көргіңіз келсе, XMCL **Офлайн режимді** және қауымдастық скин желілерін толық қолдайды.

---

## ⚙️ 1. Әзірлеуші режимін қосу

Офлайн тіркелгілер мен скин серверлерін ашу үшін баптауларда **Әзірлеуші режимін** қосыңыз:

1. Сол жақ төменгі бұрыштағы **Баптаулар** (тісті доңғалақ) белгішесін басыңыз.
2. **«Әзірлеуші режимі»** опциясын тауып, **ҚОСЫҢЫЗ**:

   ![Әзірлеуші режимін қосу](/guidephoto/developer-mode.png)

Қосқаннан кейін Тіркелгі менеджерінде қосымша кіру нұсқалары пайда болады.

---

## 👥 2. Қолжетімді тіркелгі түрлері

<div style="display: flex; flex-direction: column; gap: 14px; margin: 24px 0;">

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🟢</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">Офлайн режим (Жергілікті тіркелгі)</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Аутентификация серверлеріне қосылмай жергілікті ойнау. Кез келген ойыншы атын енгізу жеткілікті. Жеке ойынға, локалдық мод тестілеуге, LAN ойындарына және <code>online-mode=false</code> қауымдастық серверлеріне өте ыңғайлы.
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🟡</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">LittleSkin</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Тегін скин мен плащтарды қолдайтын танымал қауымдастық сервері.  
      Сайт: <a href="https://littleskin.cn" target="_blank" rel="noopener noreferrer">https://littleskin.cn</a>
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🔵</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">Ely.by</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Бұлтты скин қоры мен HD плащтары бар халықаралық танымал аутентификация желісі.  
      Сайт: <a href="https://ely.by" target="_blank" rel="noopener noreferrer">https://ely.by</a>
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🌐</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">Жеке Authlib-Injector / Yggdrasil сервері</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      Стандартты Yggdrasil API URL арқылы кез келген жеке серверге қосылу.
    </p>
  </div>

</div>

---

## 🎮 3. Тіркелгі қосу және ауыстыру

1. Жоғарғы оң жақтағы белгішені басып, **Тіркелгі менеджерін** ашыңыз.
2. **«Тіркелгі қосу»** батырмасын басыңыз.
3. **Офлайн**, **LittleSkin**, **Ely.by** немесе **Жеке серверді** таңдаңыз.
4. Қажетті деректерді енгізіңіз.
5. Тіркелгіні **Белсенді** ету үшін оны басыңыз.

---

## 💡 4. Тіркелгі түрлерін салыстыру

| Мүмкіндік | Microsoft (Ресми) | Офлайн тіркелгі | LittleSkin / Ely.by |
| :--- | :--- | :--- | :--- |
| **Бағасы** | Ақылы лицензия | Тегін | Тегін |
| **Ресми серверлер (Hypixel т.б.)** | ✅ Иә | ❌ Жоқ | ❌ Жоқ |
| **Қауымдастық серверлері / LAN / P2P** | ✅ Иә | ✅ Иә (`online-mode=false`) | ✅ Иә |
| **Жеке ойын және модпактар** | ✅ Иә | ✅ Иә | ✅ Иә |
| **Өзіндік скин мен плащтар** | ✅ Ресми Mojang скині | ⚠️ Әдепкі скин | ✅ Желідегі скин мен плащтар |

---

## ❓ Жиі қойылатын сұрақтар

### Офлайн тіркелгімен Hypixel серверіне кіруге бола ма?
Жоқ. Ресми серверлер ойыншыны Mojang арқылы тексеруді талап етеді (`online-mode=true`), бұл үшін сатып алынған Java Edition лицензиясы қажет.

### Лицензиясыз достармен қалай ойнауға болады?
XMCL-дегі **P2P Multiplayer / LAN бөлісу** мүмкіндігін немесе `online-mode=false` серверлерін пайдалана аласыз.

👉 **[Microsoft-пен кіруде қиындық туындады ма? Ақаулықтарды жою нұсқаулығын қараңыз](./microsoft-login-issues)**
