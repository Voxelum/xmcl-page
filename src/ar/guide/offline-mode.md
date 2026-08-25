# اللعب بدون ترخيص (الوضع غير المتصل والحسابات البديلة)

يعد XMCL مشغلاً مفتوح المصدر تم تصميمه لاحترام حرية اللاعبين. إذا كنت لا تمتلك ترخيصاً مدفوعاً لـ Minecraft Java Edition حالياً، أو ترغب في تجربة حزم المودات بدون اتصال بخوادم Mojang، فإن XMCL يوفر دعماً كاملاً لـ **الوضع غير المتصل (Offline Mode)** وشبكات السكنات المجتمعية.

---

## ⚙️ 1. تفعيل وضع المطور

للوصول إلى الحسابات غير المتصلة وخوادم السكنات الخارجية، قم بتفعيل **وضع المطور** في الإعدادات:

1. افتح **الإعدادات** (أيقونة الترس في أسفل الشريط الجانبي).
2. ابحث عن خيار **"وضع المطور"** وقم بـ **تفعيله**:

   ![تفعيل وضع المطور](/guidephoto/developer-mode.png)

بعد التفعيل، ستظهر خيارات تسجيل دخول إضافية في مدير الحسابات.

---

## 👥 2. أنواع الحسابات المتاحة

<div style="display: flex; flex-direction: column; gap: 14px; margin: 24px 0;">

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🟢</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">الوضع غير المتصل (حساب محلي)</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      العب محلياً دون الحاجة للاتصال بخوادم المصادقة. ما عليك سوى إدخال أي اسم مستخدم. مثالي للعب الفردي، واختبار حزم المودات، واللعب الجماعي عبر LAN أو خوادم المجتمع المضبوطة على <code>online-mode=false</code>.
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🟡</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">LittleSkin</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      خادم مجاني ومشهور لتوثيق وتخصيص السكنات والكيبات.  
      الموقع: <a href="https://littleskin.cn" target="_blank" rel="noopener noreferrer">https://littleskin.cn</a>
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🔵</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">Ely.by</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      شبكة عالمية شهيرة للسكنات والكيبات عالية الدقة متوافقة مع العديد من خوادم المجتمع.  
      الموقع: <a href="https://ely.by" target="_blank" rel="noopener noreferrer">https://ely.by</a>
    </p>
  </div>

  <div style="padding: 18px 20px; border-radius: 10px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider);">
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
      <span style="font-size: 1.25rem;">🌐</span>
      <strong style="font-size: 1.05rem; color: var(--vp-c-text-1);">خادم Authlib-Injector / Yggdrasil مخصص</strong>
    </div>
    <p style="margin: 0; color: var(--vp-c-text-2); font-size: 0.95rem; line-height: 1.6;">
      الاتصال بأي خادم توثيق خاص عبر رابط API متوافق مع معايير Yggdrasil.
    </p>
  </div>

</div>

---

## 🎮 3. إضافة الحسابات والتبديل بينها

1. انقر على أيقونة ملفك الشخصي لفتح **مدير الحسابات**.
2. انقر فوق **"إضافة حساب"**.
3. اختر **غير متصل**، **LittleSkin**، **Ely.by**، أو **خادم مخصص**.
4. أدخل اسم المستخدم أو بيانات الاعتماد.
5. انقر فوق الحساب لجعله **نشطاً**.

---

## 💡 4. مقارنة بين أنواع الحسابات

| الميزة | حساب Microsoft (الرسمي) | حساب غير متصل (Offline) | LittleSkin / Ely.by |
| :--- | :--- | :--- | :--- |
| **التكلفة** | مدفوع (ترخيص رسمي) | مجاني | مجاني |
| **الخوادم الرسمية (Hypixel وغيرها)** | ✅ نعم | ❌ لا | ❌ لا |
| **خوادم المجتمع / LAN / P2P** | ✅ نعم | ✅ نعم (`online-mode=false`) | ✅ نعم |
| **اللعب الفردي وحزم المودات** | ✅ نعم | ✅ نعم | ✅ نعم |
| **السكنات والكيبات المخصصة** | ✅ سكنات Mojang الرسمية | ⚠️ السكن الافتراضي | ✅ سكنات وكيبات الشبكة |

---

## ❓ الأسئلة الشائعة

### هل يمكنني الدخول إلى خوادم مثل Hypixel بحساب غير متصل؟
لا. تتحقق الخوادم العامة الرسمية من هوية اللاعب مباشرة لدى Mojang (`online-mode=true`)، وهو ما يتطلب حساب Microsoft مرخصاً للعبة Java.

### كيف يمكنني اللعب مع الأصدقاء بدون ترخيص رسمي؟
يمكنك استخدام ميزة **P2P Multiplayer / مشاركة LAN** المدمجة في XMCL أو الانضمام إلى خادم مجتمعي مع تعطيل التحقق الرسمي `online-mode=false`.

👉 **[هل تواجه مشاكل في تسجيل دخول Microsoft؟ اطلع على دليل حل المشاكل](./microsoft-login-issues)**
