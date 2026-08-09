<template>
  <div class="xmcl-privacy-page max-w-5xl mx-auto px-4 py-8 font-sans text-right" dir="rtl">
    <!-- Header Hero -->
    <div class="rounded-xl p-8 md:p-12 mb-10 text-center bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)]">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-[var(--xmcl-ink)] font-bold text-xs uppercase tracking-wider mb-6">
        <svg class="w-4 h-4 text-[var(--xmcl-orange)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        <span>سياسة الخصوصية (نظام حماية البيانات الشخصية PDPL)</span>
      </div>

      <h1 class="text-3xl md:text-5xl font-black text-[var(--xmcl-ink)] tracking-tight mb-4 leading-tight">
        سياسة خصوصية X Minecraft Launcher
      </h1>
      <p class="text-base md:text-lg text-[var(--xmcl-muted)] max-w-3xl mx-auto leading-relaxed font-medium mb-8">
        مشغل X Minecraft Launcher (XMCL) هو برنامج مفتوح المصدر (ترخيص MIT). تشرح هذه السياسة بكل شفافية كيفية معالجة وحماية البيانات الشخصية والتشخيصية وفقًا لأنظمة حماية البيانات الشخصية.
      </p>

      <!-- Key Badges -->
      <div class="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-[var(--xmcl-muted)]">
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-[var(--xmcl-ink)]">
          <svg class="w-3.5 h-3.5 text-[var(--xmcl-orange)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
          <span>ترخيص MIT | مفتوح المصدر</span>
        </span>
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-[var(--xmcl-ink)]">
          <svg class="w-3.5 h-3.5 text-[var(--xmcl-ink)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <span>توقيع برلمجي SignPath.io</span>
        </span>
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-[var(--xmcl-ink)]">
          <svg class="w-3.5 h-3.5 text-[var(--xmcl-ink)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
          </svg>
          <span>العمر 15+</span>
        </span>
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-[var(--xmcl-ink)]">
          <svg class="w-3.5 h-3.5 text-[var(--xmcl-ink)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span>إلغاء الموافقة (Opt-Out)</span>
        </span>
      </div>
    </div>

    <!-- Structured Sections -->
    <div class="space-y-8 mb-14">
      <div class="rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)]">
        <h2 class="text-xl font-bold text-[var(--xmcl-ink)] mb-3">1. المقدمة والنطاق</h2>
        <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
          تنطبق هذه السياسة على مشغل <a href="https://github.com/Voxelum/x-minecraft-launcher" target="_blank" rel="noopener noreferrer" class="underline hover:text-[var(--xmcl-orange)]">X Minecraft Launcher</a> المُطور من قِبل مجتمع <a href="https://github.com/Voxelum" target="_blank" rel="noopener noreferrer" class="underline hover:text-[var(--xmcl-orange)]">Voxelum</a>. كود المشغل مفتوح المصدر بنسبة 100%.
        </p>
      </div>

      <div class="rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)]">
        <h2 class="text-xl font-bold text-[var(--xmcl-ink)] mb-3">2. الأساس النظامي وفترة الاحتفاظ بالبيانات</h2>
        <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
          يتم معالجة البيانات التشخيصية لتحسين استقرار البرنامج وتصحيح الأخطاء. يتم الاحتفاظ ببيانات التشخيص في خوادم Microsoft Azure لمدة لا تتجاوز 90 يومًا، وتُحذف تلقائيًا بعد ذلك.
        </p>
      </div>

      <div class="rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)]">
        <h2 class="text-xl font-bold text-[var(--xmcl-ink)] mb-3">3. حقوق صاحب البيانات الشخصية</h2>
        <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed mb-3">
          يحق للمستخدم العلم بالبيانات المعالجة، طلب الوصول إليها، تصحيحها، أو التقدّم بطلب إتلافها، بالإضافة إلى سحب الموافقة على جمع البيانات عبر إيقاف خيار "القياس عن بُعد" في الإعدادات.
        </p>
      </div>

      <div class="rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)]">
        <h2 class="text-xl font-bold text-[var(--xmcl-ink)] mb-3">4. النقل الدولي للبيانات</h2>
        <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
          عند تفعيل خيار القياس عن بُعد، يتم نقل البيانات التشخيصية غير المعرّفة إلى خوادم Microsoft Azure في الولايات المتحدة الأمريكية مع تطبيق أعلى معايير التشفير.
        </p>
      </div>

      <div class="rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)] text-center">
        <h2 class="text-xl font-bold text-[var(--xmcl-ink)] mb-3">تدقيق الشيفرة البرمجية</h2>
        <p class="text-xs text-[var(--xmcl-muted)] mb-4">يمكنك الاطلاع والتحقق من الشفرة البرمجية بالكامل على منصة GitHub.</p>
        <a href="https://github.com/Voxelum/x-minecraft-launcher" target="_blank" rel="noopener noreferrer" class="px-5 py-2 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-xs font-semibold text-[var(--xmcl-ink)] no-underline">مستودع GitHub</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
