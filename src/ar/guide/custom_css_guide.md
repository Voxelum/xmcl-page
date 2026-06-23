# دليل مظهر الـ CSS المخصص للانشر

يوفر هذا الدليل دليلاً شاملاً حول كيفية تصميم وكتابة وتخصيص واجهة اللانشر باستخدام أوراق أنماط CSS المخصصة. وهو يوضح عناصر التخطيط الرئيسية، والمحددات المستهدفة، وتقنيات التنسيق المتقدمة (مثل المظهر الزجاجي، والتأثيرات اللامعة، واستبدال الأيقونات الأصلية) التي يمكنك استخدامها لبناء مظاهر مخصصة.

---

## 1. البنية الأساسية وحقن المظهر

تم بناء واجهة مستخدم اللانشر على **Vue 3** و **Vuetify 3**. يتم حقن الأنماط عالمياً عبر محرك CSS المخصص.

لضمان تجاوز ورقة الأنماط المخصصة لأنماط Vuetify الافتراضية بشكل صحيح، اكتب دائماً محددات CSS نظيفة واستخدم `!important` عند التنافس مع قواعد الأنماط المضمنة في Vuetify أو إعلانات الفئات ذات الخصوصية العالية.

### الخطوط وتنعيم النص
قم دائماً بتعيين الخط الافتراضي وتحسين عرض النص عند الجذر:
```css
html, body, #app, .v-application {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  text-rendering: optimizeLegibility !important;
}
```

---

## 2. تجاوز رموز ألوان Vuetify 3

يحدد Vuetify الألوان الأساسية كرموز RGB خام (مثل `255, 255, 255`) على حاويات التطبيق الجذرية لحساب الشفافية. لتغيير متغيرات الألوان عالمياً دون كسر المكونات، أعد تعريفها داخل هذه المحددات:

```css
.v-application,
.v-theme--dark,
.v-theme--light {
  --v-theme-background: 18, 18, 28;      /* خلفية التطبيق الجذرية */
  --v-theme-surface: 25, 25, 35;          /* أسطح البطاقات والحوارات */
  --v-theme-on-surface: 255, 255, 255;    /* لون النص الافتراضي */
  --v-theme-primary: 0, 122, 255;         /* اللون المميز (أزرق آبل، إلخ.) */
  --v-theme-on-primary: 255, 255, 255;    /* لون نص أزرار التمييز */
  --v-theme-error: 255, 59, 48;           /* لافتات وشارات الخطأ */
}
```

إذا كنت بحاجة إلى جعل الصفحات الافتراضية شفافة حتى تظهر خلفية سطح المكتب من خلالها:
```css
.v-main,
.v-main__wrap,
.v-container,
.v-layout,
.home-page,
.setting-page,
.multiplayer,
.absolute.z-0.h-full.w-full {
  background: transparent !important;
  background-color: transparent !important;
}
```

---

## 3. المكونات الرئيسية ومحددات CSS

### 🖥️ شريط العنوان / شريط النظام
يستخدم رأس النافذة `.v-system-bar` الذي يحتوي على عناصر التحكم في النافذة ومحفزات الشارات.
- **شريط العنوان**: `.v-system-bar`
- **أزرار التحكم (تصغير/تكبير/إغلاق)**: `.system-btn` أو `.v-system-bar .system-btn`
- **فئة زر الإغلاق المحددة**: `.system-btn--close`
- **شارات النظام (البحث، المهام، المساعدة)**: `.system-bar-badge`
- **نص مفتاح الاختصار داخل الشارة**: `.palette-hotkey`

*مثال: إعادة ترتيب عناصر التحكم في النافذة إلى اليسار وتنسيقها كإشارات مرور macOS باستخدام Flexbox:*
```css
.v-system-bar {
  flex-direction: row-reverse !important; /* وضع الأزرار على اليسار */
  justify-content: space-between !important;
}
.v-system-bar > span[role="group"] {
  display: flex !important;
  align-items: center !important;
  gap: 8px !important;
}
/* إعادة ترتيب الأزرار: إغلاق (الطفل الثالث -> الأول)، تصغير (الأول -> الثاني)، تكبير (الثاني -> الثالث) */
.v-system-bar .system-btn.system-btn--close { order: 1 !important; background: #ff5f56 !important; }
.v-system-bar .system-btn:nth-child(1) { order: 2 !important; background: #ffbd2e !important; }
.v-system-bar .system-btn:nth-child(2) { order: 3 !important; background: #27c93f !important; }
```

---

### 🎛️ الشريط الجانبي للملاحة (Dock)
يتصرف الشريط الجانبي على اليسار مثل درج يستضيف ملفات التعريف واختصار البحث والإعدادات.
- **حاوية الشريط الجانبي الرئيسية**: `.sidebar` أو `[data-testid="app-sidebar"]`
- **حاوية قائمة العناصر**: `.sidebar-notch__container`
- **أزرار الشريط الجانبي الفردية**: `.sidebar-notch-item`
- **زر الملاحة النشط**: `.sidebar-notch-item.router-link-active` أو `.sidebar-notch-item--active`
- **زر ملاحة الرجوع**: `.sidebar-back-btn` أو `.system-bar-back-btn`

---

### 📦 النوافذ والبطاقات والحوارات
تخدم البطاقات كصناديق نمطية لجميع الميزات.
- **حاوية البطاقة**: `.v-card`
- **رأس البطاقة / رأس الحوار**: `.v-card-title`
- **منطقة محتوى البطاقة**: `.v-card-text`
- **حاوية أزرار الإجراءات السفلية للبطاقة**: `.v-card-actions`
- **حوارات التراكب العائمة**: `.v-dialog`
- **بطاقات مجموعات صفحة الإعدادات**: `.setting-page .v-card`

---

### 🔘 الأزرار
توجد الأزرار في حالات مختلفة (مرتفعة، مخططة، نصية).
- **فئة الزر العالمية**: `.v-btn`
- **تنوعات أشكال الأزرار**: `.v-btn--variant-flat`, `.v-btn--variant-elevated`, `.v-btn--variant-tonal`, `.v-btn--variant-outlined`
- **أزرار الإجراءات الرئيسية**: `.v-btn[color="primary"]`, `.v-btn.text-primary`, `[data-testid="login-submit"]`, `[data-testid="launch-button"]`
- **الحالة النشطة (في المفاتيح)**: `.v-btn.v-btn--active`, `.v-btn-toggle .v-btn--active`, `.v-btn[aria-pressed="true"]`
- **الأزرار المعطلة**: `.v-btn:disabled`, `.v-btn[disabled]`
- **أزرار النص / الأيقونة**: `.v-btn--variant-text`, `.v-btn--variant-plain`, `.v-btn--icon`

---

### 📝 حقول النموذج والقوائم المنسدلة
استهداف المدخلات والاختيارات.
- **حاوية الحقل (المدخلات / النصوص الطويلة)**: `.v-field`, `.v-text-field`, `textarea`
- **إبراز حدود المدخلات المركزة**: `.v-field--focused`, `.v-text-field:focus-within`
- **صندوق قائمة الخيارات المنسدلة**: `.v-list`
- **خيارات القائمة المنسدلة الفردية**: `.v-list-item`
- **الخيار المحدد**: `.v-list-item--active`

---

### 🎚️ المفاتيح وصناديق الاختيار وأشرطة التمرير
- **مسار مفتاح التبديل**: `.v-switch__track`
- **مسار مفتاح التبديل النشط**: `.v-switch--selected .v-switch__track`
- **مقبض مفتاح التبديل الدائري**: `.v-switch__thumb`
- **إطار صندوق الاختيار (Checkbox)**: `.v-checkbox .v-selection-control__input`
- **صندوق الاختيار النشط المحدد**: `.v-checkbox .v-selection-control__input--selected`

---

### 📰 قسم صفحة "أشيائي" (Me Page) والشرائح
تحتوي صفحة "أشيائي" (أنا) على شريط الأخبار المتحرك وقوائم الشبكة.
- **حاوية شبكة صفحة "أشيائي"**: `.my-stuff-page`
- **رؤوس أقسام الصفحة**: `.my-stuff-page .section-title`, `.my-stuff-page .section-icon`
- **حاوية أخبار الشرائح**: `.news-carousel-wrapper` أو `.news-carousel`
- **حاوية الشريحة الفردية**: `.news-slide`
- **حاوية الصورة**: `.news-image-wrapper`, `.news-image`
- **تلاشي تظليل الصورة**: `.news-gradient`
- **منطقة نص بطاقة الأخبار**: `.news-info`
- **عناوين الأخبار**: `.news-title`
- **نص محتوى الخبر**: `.news-description`
- **رابط "قراءة المزيد"**: `.news-read-more` أو `.v-btn.news-read-more`

---

## 4. حيل تنسيق CSS المتقدمة

### 💧 الزجاج السائل (المظهر الزجاجي اللامع)
لتصميم خلفية "الزجاج السائل" شبه الشفافة على غرار macOS:
1. قم بزيادة شفافية الخلفية (`rgba`) والتشبع.
2. استخدم `backdrop-filter: blur(...)` لتشويش المحتوى خلف الزجاج.
3. ارسم تدرجاً قطرياً لتقليد انعكاس الضوء اللامع.
4. ارسم حدوداً ضوئية حادة على الحواف العلوية واليسرى.

```css
.v-card {
  /* انعكاس اللمعان */
  background: linear-gradient(135deg, 
                rgba(255, 255, 255, 0.16) 0%, 
                rgba(255, 255, 255, 0.07) 50%, 
                rgba(255, 255, 255, 0.0) 50.1%, 
                rgba(255, 255, 255, 0.03) 100%) !important;
  backdrop-filter: blur(25px) saturate(200%) contrast(90%) !important;
  -webkit-backdrop-filter: blur(25px) saturate(200%) contrast(90%) !important;
  
  /* إبراز الحدود اللامعة */
  border: 1px solid rgba(255, 255, 255, 0.15) !important;
  border-top-color: rgba(255, 255, 255, 0.32) !important;
  border-left-color: rgba(255, 255, 255, 0.24) !important;
  
  /* ظل السقوط والتوهج الداخلي */
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35), 
              inset 0 1px 1px rgba(255, 255, 255, 0.25) !important;
  border-radius: 16px !important;
}
```

---

### 🎨 تخصيص الأيقونات الأصلية (حقن SVG)
يعرض اللانشر الأيقونات باستخدام خطوط أيقونات Material Design. يمكنك استبدال أي أيقونة محلياً عبر CSS دون تعديل قوالب Vue عن طريق إخفاء نص الخط الأصلي وتطبيق صورة خلفية SVG:

1. **مسح خط الأيقونة الأصلي**: استهدف `.v-icon` أو فئتك واضبط `font-size: 0 !important`.
2. **تطبيق الأبعاد**: امنح عناصر الأيقونة عرضاً وارتفاعاً صريحين (`width` و `height`).
3. **حقن ملف الفيكتور**: قم بتعيين رمز SVG المفرود كـ `background-image`.

```css
/* 1. إعادة تعيين عالمية للأيقونات المستبدلة */
.sidebar-notch-item__icon,
.my-stuff-page .section-icon,
.badge-icon {
  font-size: 0 !important; /* إخفاء خط الخط الأصلي */
  width: 18px !important;
  height: 18px !important;
  background-size: contain !important;
  background-repeat: no-repeat !important;
  background-position: center !important;
  display: inline-block !important;
}

/* 2. حقن ملفات SVG المستهدفة */
/* ترس إعدادات التفضيلات */
[data-testid="nav-settings"] .sidebar-notch-item__icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3Cpath d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z'/%3E%3C/svg%3E") !important;
}

/* مثلثات متجر التطبيقات */
[data-testid="nav-store"] .sidebar-notch-item__icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2.5' stroke-linecap='round'%3E%3Cpath d='M12 4v16M5 16l14-8M5 8l14 8'/%3E%3C/svg%3E") !important;
}
```

---

### 💾 أشرطة التمرير الحديثة لـ macOS
تنسيق مسار شريط التمرير الافتراضي ومقبض التمرير:
```css
::-webkit-scrollbar {
  width: 8px !important;
  height: 8px !important;
}
::-webkit-scrollbar-track {
  background: transparent !important;
}
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.22) !important;
  border-radius: 10px !important;
  border: 2px solid transparent !important;
  background-clip: padding-box !important;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.35) !important;
}
```
