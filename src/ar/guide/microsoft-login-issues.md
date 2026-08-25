# تسجيل الدخول عبر Microsoft والفرق بين Bedrock و Java وحل مشاكل الترخيص

يشرح هذا الدليل آلية المصادقة لحسابات Microsoft في XMCL، وأسباب ظهور أخطاء تسجيل الدخول (مثل **"failed to exchange Xbox token"** أو غير مشترى)، ولماذا قد تفتح اللعبة في **الوضع التجريبي (Demo Mode)**، والفرق الجوهري بين **Bedrock Edition (الهاتف والمنصات)** و **Java Edition (الكمبيوتر)**، وكيفية حل مشاكل الحساب.

---

## 🔑 1. تسجيل الدخول باستخدام حساب Microsoft

لتسجيل الدخول باستخدام ترخيص Minecraft الرسمي الخاص بك:

1. انقر على صورة ملفك الشخصي (أو **"إدارة الحساب"**) في الزاوية العلوية لفتح مدير الحسابات:

   <video src="/guidephoto/My%20stuff.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

2. انقر فوق **"إضافة حساب"**، واختر **Microsoft**، ثم أكمل تسجيل الدخول:

   <video src="/guidephoto/add%20account.mp4" controls autoplay loop muted playsinline style="border-radius: 8px; max-width: 100%; border: 1px solid var(--vp-c-divider); margin: 12px 0;"></video>

> 💡 **تسجيل الدخول برمز الجهاز (Device Code):**  
> إذا كنت تفضل عدم كتابة كلمة المرور داخل المشغل، حدد **"تسجيل الدخول برمز الجهاز"**. سيعرض XMCL رمزاً مكوناً من 8 أرقام؛ تفضل بزيارة [microsoft.com/link](https://microsoft.com/link) في متصفحك وأدخل الرمز للتأكيد.

---

## 🔍 2. خطوات التحقق الثلاثية لحسابات Microsoft

عند تسجيل الدخول، يتواصل المشغل عبر 3 مراحل تحقق متتالية:

<div style="display: flex; flex-direction: column; gap: 16px; margin: 24px 0; padding: 20px; border-radius: 12px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
  <div style="display: flex; align-items: center; gap: 8px;">
    <span style="font-weight: 600; font-size: 1.1rem; color: var(--vp-c-text-1);">🔑 مراحل التحقق الثلاث:</span>
  </div>
  <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: center; margin: 10px 0;">
    <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #3b82f6; font-size: 0.85rem;">الخطوة 1</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">مصادقة Microsoft</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">التحقق من البريد وكلمة المرور</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold;">➔</div>
    <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #10b981; font-size: 0.85rem;">الخطوة 2</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">خدمات Xbox Live</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">جلب الاسم المستعار Gamertag</div>
    </div>
    <div style="color: var(--vp-c-text-3); font-weight: bold; color: #ef4444;">➔ ❌ الفشل الشائع</div>
    <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 12px; border-radius: 8px; text-align: center; min-width: 150px;">
      <div style="font-weight: 600; color: #ef4444; font-size: 0.85rem;">الخطوة 3 (التبادل)</div>
      <div style="font-size: 0.9rem; margin-top: 4px; color: var(--vp-c-text-1);">ترخيص Mojang Java</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-3);">التحقق من ملكية اللعبة للكمبيوتر</div>
    </div>
  </div>
  <p style="font-size: 0.9rem; color: var(--vp-c-text-2); margin: 0; text-align: center; line-height: 1.6;">
    إذا فشلت الخطوة 3، سيعرض المشغل خطأ <strong>"failed to exchange Xbox token"</strong> أو ستفتح اللعبة في <strong>الوضع التجريبي (Demo Mode)</strong>. هذا يعني أن خوادم Mojang لم تعثر على ترخيص نشط لـ <strong>Minecraft: Java Edition</strong> على هذا الحساب.
  </p>
</div>

---

## 🛑 3. الخطأ الشائع: الفرق بين Bedrock Edition و Java Edition

**مشغل XMCL مخصص حصرياً لنسخة Minecraft: Java Edition (الكمبيوتر الشخصي Windows و macOS و Linux).**

يقوم العديد من المستخدمين بشراء اللعبة على الهواتف أو أجهزة الكونسول ثم يحاولون تسجيل الدخول في XMCL:

| منصة الشراء | النسخة المملوكة | هل يدعمها XMCL؟ | سبب المشكلة |
| :--- | :--- | :--- | :--- |
| 📱 **الهاتف / الجهاز اللوحي (iOS / Android)** | Bedrock Edition | ❌ لا | شراء الهاتف لا يمنح ترخيص نسخة Java للكمبيوتر. |
| 🎮 **منصة PlayStation 4 / 5** | Bedrock Edition | ❌ لا | الشراء من متجر PSN خاص بالكونسول فقط. |
| 🎮 **منصة Xbox One / Series X\|S** | Bedrock Edition | ❌ لا | شراء نسخة الكونسول لا ينتقل إلى كمبيوتر Java. |
| 🕹️ **جهاز Nintendo Switch** | Bedrock Edition | ❌ لا | الشراء من متجر Nintendo eShop مخصص لجهاز Switch. |
| 💻 **الكمبيوتر (حزمة Minecraft: Java & Bedrock)** | Java + Bedrock | ✅ **نعم** | مدعوم رسمياً بالكامل! |
| 🟢 **اشتراك PC Game Pass / Ultimate** | Java + Bedrock | ✅ **نعم** | مدعوم طوال فترة سريان الاشتراك. |

> ⚠️ **تنبيه هام:**  
> إذا كنت قد اشتريت Minecraft فقط على **الهاتف** أو **PlayStation** أو **Xbox** أو **Switch**، فإن خوادم Mojang ستؤكد أن حسابك **لا يمتلك نسخة Java Edition**.  
> للعب نسخة Java الرسمية على الكمبيوتر، يجب شراء حزمة **"Minecraft: Java & Bedrock Edition for PC"** من موقع [Minecraft.net](https://www.minecraft.net/) أو الحصول على اشتراك نشط في **PC Game Pass**.

---

## 🛠 4. استكشاف أخطاء تسجيل الدخول وحلها

### السبب أ: عدم وجود ترخيص Java Edition على هذا الحساب

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(239, 68, 68, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #ef4444; font-weight: bold; font-size: 1.25rem;">
    🎮
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">Mojang لا تعثر على ترخيص للكمبيوتر</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">تم توثيق الحساب بنجاح، لكن قاعدة بيانات Mojang لا تحتوي على أي سجل شراء لنسخة Java Edition.</p>
  </div>
</div>

#### خطوات التحقق والحل:
* **التحقق من موقع Minecraft.net:** سجل الدخول إلى [Minecraft.net](https://www.minecraft.net/). إذا ظهر زر "اشترِ الآن" بدلاً من اسم ملفك الشخصي، فإن هذا الحساب لا يملك اللعبة.
* **سجل الطلبات:** تفضل بزيارة [account.microsoft.com/billing/orders](https://account.microsoft.com/billing/orders) للتأكد من تفاصيل الشراء.
* **التحقق من البريد الإلكتروني:** تأكد من عدم استخدام بريد إلكتروني مدرسي أو للعمل بدلاً من حسابك الشخصي الأساسي.
* **حالة Game Pass:** تأكد من أن اشتراكك سارٍ ويتضمن الكمبيوتر (PC Game Pass أو Ultimate).

---

### السبب ب: عدم إنشاء ملف شخصي لـ Xbox Live

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(245, 158, 11, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #f59e0b; font-weight: bold; font-size: 1.25rem;">
    👤
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">الحساب يفتقر إلى Gamertag</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">الحسابات الجديدة غالباً لا تحتوي على ملف Xbox Live نشط، مما يمنع إنشاء رمز المصادقة.</p>
  </div>
</div>

#### الحل:
1. افتح موقع [Xbox.com](https://www.xbox.com/).
2. انقر على **تسجيل الدخول** في الأعلى.
3. وافق على الشروط وأنشئ **Gamertag** (اسم اللاعب).
4. انتظر دقيقة واحدة ثم أعد المحاولة في XMCL.

---

### السبب ج: قيود الشبكة وحجب خوادم التوثيق

<div style="display: flex; gap: 16px; align-items: flex-start; padding: 20px; border-radius: 12px; background: rgba(139, 92, 246, 0.05); border: 1px solid rgba(139, 92, 246, 0.2); margin: 20px 0;">
  <div style="flex-shrink: 0; background: rgba(139, 92, 246, 0.1); padding: 8px; border-radius: 8px; display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; color: #8b5cf6; font-weight: bold; font-size: 1.25rem;">
    🌐
  </div>
  <div>
    <h4 style="margin-top: 0 !important; font-size: 1.1rem; font-weight: 600; color: var(--vp-c-text-1);">تعذر الاتصال بخوادم Mojang أو Xbox</h4>
    <p style="color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.5; margin-bottom: 0;">تمنع قيود مزود الإنترنت أو الجدار الناري الاتصال بالنطاق <code>api.minecraftservices.com</code>.</p>
  </div>
</div>

#### الحل:
* **استخدام VPN:** اتصل بشبكة VPN موثوقة قبل تسجيل الدخول.
* **إعداد البروكسي في XMCL:** في **الإعدادات** -> **إعدادات الشبكة**، أدخل بيانات الخادم الوكيل (HTTP/HTTPS/SOCKS5).
* **فحص ملف hosts:** تأكد من عدم وجود توجيهات قديمة لنطاق `mojang.com` في ملف hosts بالنظام.

---

## 🎮 هل لا تمتلك ترخيصاً مدفوعاً؟

إذا كنت لا تمتلك ترخيصاً رسمياً حالياً، يمكنك اللعب باستخدام **الوضع غير المتصل (Offline Mode)** أو خوادم السكنات البديلة.

👉 **[الدليل الكامل: اللعب بدون ترخيص (الوضع غير المتصل والحسابات البديلة)](./offline-mode)**
