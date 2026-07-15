# دليل تسجيل الدخول إلى حساب Microsoft ووضع العرض التجريبي

يوضح هذا الدليل كيفية إضافة حساب Microsoft الخاص بك إلى XMCL، وكيفية عمل عملية المصادقة، وكيفية حل أخطاء تسجيل الدخول الشائعة مثل **"failed to exchange Xbox token"** أو التوقف في **وضع العرض التجريبي (Demo Mode)**.

---

## 🔑 1. كيفية إضافة حساب Microsoft

لتلعب ماينكرافت باستخدام حسابك الرسمي، يجب عليك تسجيل الدخول:

1. انقر فوق ملفك الشخصي/الصورة الرمزية (أو **"إدارة الحساب"**) في الجزء العلوي الأيمن لفتح مدير الحساب:

   <video src="/guidephoto/My%20stuff.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

2. انقر فوق **"إضافة حساب"**، واختر **Microsoft**، ثم تابع عملية تسجيل الدخول:

   <video src="/guidephoto/add%20account.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

> 💡 **تسجيل الدخول عبر رمز الجهاز (Device Code):**  
> إذا كنت لا ترغب في كتابة كلمة المرور الخاصة بك داخل اللانشر، فحدد خيار **"تسجيل الدخول عبر رمز الجهاز"** (Login by Device Code). سيعرض XMCL رمزًا فريدًا؛ ما عليك سوى زيارة الرابط `microsoft.com/link` في متصفح الويب الخاص بك، وإدخال الرمز، وتأكيد تسجيل الدخول.

---

## 🔍 2. كيف تعمل عملية المصادقة

لتشغيل نسخة مرخصة من ماينكرافت، يجب على اللانشر التحقق من هويتك عبر ثلاث طبقات أمان منفصلة:

<div style="display: flex; flex-direction: column; gap: 16px; margin: 24px 0; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-weight: 600; font-size: 1.1rem; color: var(--vp-c-text-1);">🔑 مصافحة المصادقة (Handshake):</span>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: center; margin: 10px 0;">
    <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #3b82f6; font-size: 0.85rem;">الخطوة 1</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">تسجيل دخول Microsoft</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">التحقق من كلمة المرور</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold;">➔</div>
    <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #10b981; font-size: 0.85rem;">الخطوة 2</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">خدمات Xbox Live</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">جلب الـ Gamertag</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold; color: #ef4444;">➔ ❌ فشل هنا</div>
    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #ef4444; font-size: 0.85rem;">الخطوة 3 (التبادل)</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">رمز ماينكرافت المميز</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">التحقق من الرخصة</div>
    </div>
  </div>
  <p style="font-size: 0.9rem; color: var(--vp-c-text-2); margin: 0; text-align: center; line-height: 1.6;">
    الخطأ <strong>"failed to exchange Xbox token"</strong> يعني أن الخطوتين 1 و 2 قد تمتا بنجاح، ولكن خوادم مصادقة Mojang رفضت عملية تبادل الرمز المميز في الخطوة 3.
  </p>
</div>

---

## 🛠 3. ثلاثة أسباب رئيسية وحلولها

### 1. لا توجد رخصة ماينكرافت على هذا الحساب

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #ef4444; font-weight: bold; font-size: 1.25rem;">
    🎮
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">السبب: لم تعثر خوادم Mojang على اللعبة المشتراة</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">هذا هو السبب الأكثر شيوعًا. لقد قمت بتسجيل الدخول بنجاح إلى حساب Microsoft، ولكن Mojang تخبر اللانشر أن هذا الحساب المحدد لا يمتلك ترخيصًا للعبة ماينكرافت.</p>
  </div>
</div>

#### كيفية الإصلاح:
* **التحقق من الشراء:** قم بتسجيل الدخول باستخدام حساب Microsoft الخاص بك على موقع [Minecraft.net](https://www.minecraft.net/). تحقق مما إذا كنت ترى خيار التنزيل بدلاً من مطالبة لشراء اللعبة.
* **التحقق من حالة Game Pass:** إذا كنت تلعب عبر **Xbox Game Pass**، فتأكد من أن اشتراكك نشط وأنك تسجل الدخول باستخدام حساب Microsoft الدقيق المرتبط بالاشتراك النشط.
* **التحقق المزدوج من البريد الإلكتروني:** تأكد من أنك لا تسجل الدخول باستخدام حساب Microsoft آخر (مثل بريد إلكتروني مدرسي أو عمل) بدلاً من الحساب الشخصي الذي تم الشراء من خلاله.

---

### 2. لا يمتلك الحساب ملف تعريف Xbox (الـ Gamertag مفقود)

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #f59e0b; font-weight: bold; font-size: 1.25rem;">
    👾
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">السبب: حساب Microsoft غير مهيأ للألعاب بعد</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">يحتاج حساب Microsoft الخاص بك إلى ملف تعريف Xbox Live مرتبط لجلب رموز ماينكرافت. إذا قمت بشراء ماينكرافت مؤخرًا أو لم تشغل اللعبة من قبل مطلقًا، فقد لا يكون هذا الملف التعريفي قد تم إنشاؤه بعد، مما يؤدي إلى تشغيل اللعبة في **وضع العرض التجريبي**.</p>
  </div>
</div>

#### كيفية الإصلاح:
1. انتقل إلى الموقع الرسمي [Xbox.com](https://www.xbox.com/).
2. قم بتسجيل الدخول باستخدام تفاصيل حساب Microsoft الخاص بك.
3. إذا طُلب منك ذلك، قم بإنشاء ملف تعريف Xbox Live مجاني (عبر تحديد Gamertag والصورة الرمزية الخاصة بك).
4. بمجرد إنشاء الملف التعريفي، قم بإعادة تشغيل XMCL وحاول تسجيل الدخول مجددًا.

---

### 3. أخطاء الشبكة أو الاتصالات المحظورة

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(59, 130, 246, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #3b82f6; font-weight: bold; font-size: 1.25rem;">
    🌐
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">السبب: مشاكل الـ DNS أو القيود الشبكية الإقليمية</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">في مناطق معينة أو مع بعض مزودي خدمة الإنترنت المقيدين، قد يتم حظر أو تعطيل الاتصال بخوادم مصادقة Xbox Live أو Mojang.</p>
  </div>
</div>

#### كيفية الإصلاح:
* **استخدم شبكة افتراضية خاصة (VPN):** إذا كنت في منطقة تطبق قيودًا على الإنترنت، فاستخدم VPN لإكمال عملية مصادقة Microsoft بنجاح.
* **تغيير خوادم الـ DNS:** قم بتغيير خوادم الـ DNS الخاصة بنظامك إلى خوادم عامة وسريعة (مثل Google DNS: `8.8.8.8` و `8.8.4.4` أو Cloudflare DNS: `1.1.1.1`).
* **أعد المحاولة لاحقًا:** قد تواجه خوادم Microsoft ضغطًا مؤقتًا. انتظر بضع دقائق وحاول مرة أخرى.

---

## 🚪 4. وضع الأوفلاين وخيارات تسجيل الدخول البديلة (اللعب بدون حساب Microsoft)

إذا كنت لا تملك حساب Microsoft رسميًا، أو ترغب في اللعب دون اتصال بالإنترنت على خادم محلي خاص بك، فإن XMCL يوفر طرق تسجيل دخول بديلة.

### الخيار أ: اللعب المحلي / بدون اتصال بالإنترنت (وضع المطور)

يسمح لك **وضع المطور** (Developer Mode) باللعب محليًا دون اتصال بالإنترنت باستخدام أي اسم مستخدم تريده ودون كلمة مرور.

1. افتح مدير الحساب في الجزء العلوي الأيمن.
2. انقر فوق **"إضافة حساب"** (Add Account).
3. اختر خيار **مطور** (Developer) من القائمة المتاحة:

   <img src="/guidephoto/developer-mode.png" style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

4. أدخل أي اسم مستخدم ترغب فيه وأكد الخطوة.
5. يمكنك الآن تشغيل اللعبة. **ملاحظة:** يسمح حساب الأوفلاين بالدخول فقط إلى الخوادم التي تم تعطيل التحقق الرسمي بها (أي `online-mode=false` في ملف إعدادات الخادم)، وستستخدم شخصيتك المظهر الافتراضي للعبة (Steve/Alex).

---

### الخيار ب: خوادم المظاهر الخارجية (Yggdrasil API)

إذا كنت ترغب في اللعب بمظهرك المخصص (Skin) على خوادم خاصة، فإن XMCL يدعم خدمات مصادقة بديلة مثل **LittleSkin** أو **Ely.by** أو أي خوادم Yggdrasil مخصصة.

1. في مدير الحساب، انقر فوق **"إضافة حساب"**.
2. اختر المنصة التي تريدها (مثال: **LittleSkin** أو **Yggdrasil** لكتابة عنوان API مخصص).
3. أدخل تفاصيل تسجيل الدخول الخاصة بك المرتبطة بهذه الخدمة:

   <img src="/guidephoto/reg-account.png" style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;" />

4. سيقوم اللانشر تلقائيًا بجلب مظهرك وتفاصيل ملفك التعريفي مباشرة من هذه المنصة.
