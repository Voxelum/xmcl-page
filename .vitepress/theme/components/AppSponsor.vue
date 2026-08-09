<template>
  <div class="xmcl-sponsor-page max-w-5xl mx-auto px-4 py-8 font-sans">
    <!-- Hero Banner -->
    <div class="rounded-xl p-8 md:p-12 mb-10 text-center bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)]">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-[var(--xmcl-ink)] font-bold text-xs uppercase tracking-wider mb-6">
        <svg class="w-4 h-4 text-[var(--xmcl-orange)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
        <span>{{ t.kicker }}</span>
      </div>

      <h1 class="text-3xl md:text-5xl font-black text-[var(--xmcl-ink)] tracking-tight mb-4 leading-tight">
        {{ t.title }}
      </h1>
      <p class="text-base md:text-lg text-[var(--xmcl-muted)] max-w-2xl mx-auto leading-relaxed font-medium mb-8">
        {{ t.subtitle }}
      </p>

      <div class="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-[var(--xmcl-muted)]">
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-[var(--xmcl-ink)]">
          <svg class="w-3.5 h-3.5 text-[var(--xmcl-orange)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
          100% Open Source
        </span>
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-[var(--xmcl-ink)]">
          <svg class="w-3.5 h-3.5 text-[var(--xmcl-ink)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          ci010 & Voxelum Team
        </span>
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-[var(--xmcl-ink)]">
          <svg class="w-3.5 h-3.5 text-[var(--xmcl-ink)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
          P2P & CDN Infrastructure
        </span>
      </div>
    </div>

    <!-- Donation Platforms Grid (Smart Geo-Ordering) -->
    <div class="mb-14">
      <h2 class="text-2xl font-extrabold text-[var(--xmcl-ink)] text-center mb-8 flex items-center justify-center gap-2.5">
        <svg class="w-6 h-6 text-[var(--xmcl-orange)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
        <span>{{ t.platformsTitle }}</span>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- International Users: Ko-fi FIRST -->
        <template v-if="!isChineseLocale">
          <!-- Ko-fi (Primary Card) -->
          <a 
            href="https://ko-fi.com/ci010" 
            target="_blank" 
            rel="noopener noreferrer"
            class="group relative overflow-hidden rounded-xl p-8 bg-[var(--xmcl-panel)] border-2 border-[var(--xmcl-lime)] hover:border-[var(--xmcl-ink)] transition-all duration-200 no-underline flex flex-col justify-between"
          >
            <div class="absolute top-4 right-4">
              <span class="px-2.5 py-1 rounded bg-[var(--xmcl-lime)] text-[#17211f] font-bold text-[10px] uppercase tracking-wider">
                {{ t.recommendedBadge }}
              </span>
            </div>

            <div>
              <div class="w-14 h-14 rounded-xl bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] flex items-center justify-center text-[var(--xmcl-ink)] mb-6 group-hover:bg-[var(--xmcl-line)] transition-colors">
                <svg class="w-8 h-8 text-[var(--xmcl-ink)]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.351 2.715c-2.7 0-4.986.025-6.83.26C2.078 3.285 0 5.154 0 8.61c0 3.506.182 6.13 1.585 8.493c1.584 2.701 4.233 4.182 7.662 4.182h.83c4.209 0 6.494-2.234 7.637-4a9.5 9.5 0 0 0 1.091-2.338C21.792 14.688 24 12.22 24 9.208v-.415c0-3.247-2.13-5.507-5.792-5.87c-1.558-.156-2.65-.208-6.857-.208m0 1.947c4.208 0 5.09.052 6.571.182c2.624.311 4.13 1.584 4.13 4v.39c0 2.156-1.792 3.844-3.87 3.844h-.935l-.156.649c-.208 1.013-.597 1.818-1.039 2.546c-.909 1.428-2.545 3.064-5.922 3.064h-.805c-2.571 0-4.831-.883-6.078-3.195c-1.09-2-1.298-4.155-1.298-7.506c0-2.181.857-3.402 3.012-3.714c1.533-.233 3.559-.26 6.39-.26m6.547 2.287c-.416 0-.65.234-.65.546v2.935c0 .311.234.545.65.545c1.324 0 2.051-.754 2.051-2s-.727-2.026-2.052-2.026m-10.39.182c-1.818 0-3.013 1.48-3.013 3.142c0 1.533.858 2.857 1.949 3.897c.727.701 1.87 1.429 2.649 1.896a1.47 1.47 0 0 0 1.507 0c.78-.467 1.922-1.195 2.623-1.896c1.117-1.039 1.974-2.364 1.974-3.897c0-1.662-1.247-3.142-3.039-3.142c-1.065 0-1.792.545-2.338 1.298c-.493-.753-1.246-1.298-2.312-1.298"/>
                </svg>
              </div>

              <h3 class="text-xl font-bold text-[var(--xmcl-ink)] mb-2">
                Ko-fi (International Donate)
              </h3>
              <p class="text-[var(--xmcl-muted)] text-sm leading-relaxed mb-6">
                {{ t.kofiDesc }}
              </p>
            </div>

            <div class="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[var(--xmcl-lime)] text-[#17211f] font-bold text-sm border border-[#17211f] hover:bg-[#d8ff7b] transition-all">
              <span>{{ t.kofiBtn }}</span>
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </div>
          </a>

          <!-- Afdian Card -->
          <a 
            href="https://afdian.net/@ci010" 
            target="_blank" 
            rel="noopener noreferrer"
            class="group relative overflow-hidden rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)] hover:border-[var(--xmcl-ink)] transition-all duration-200 no-underline flex flex-col justify-between"
          >
            <div>
              <div class="w-14 h-14 rounded-xl bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] flex items-center justify-center text-[var(--xmcl-ink)] mb-6 group-hover:bg-[var(--xmcl-line)] transition-colors">
                <svg class="w-8 h-8 text-[var(--xmcl-ink)]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 14.234a.567.567 0 1 0 0 1.134a.567.567 0 0 0 0-1.134m5.351 1.705a.567.567 0 1 0 0 1.135a.567.567 0 0 0 0-1.135m8.401 1.436c-.189.095-.461.1-.713.013c-.169-.06-.352-.116-.534-.172c-.339-.104-.904-.276-1.011-.407a.533.533 0 1 0-.853.643c.059.08.139.146.22.209c-.816 1.131-4.398 3.382-9.464 2.273c-2.283-.5-3.819-1.413-4.444-2.639c-.451-.885-.348-1.797-.133-2.293c.62-1.29 5.097-4.261 7.955-5.943a.537.537 0 0 0 .188-.733c-.149-.254-.49-.356-.73-.189c-.231.135-1.015.601-2.015 1.236c-.338-.227-.923-.508-1.86-.6c-1.486-.148-4.92-.805-6.029-1.275C2.535 7.162.731 6.27 1.131 5.267c.092-.234.527-.613 1.47-.974a8.5 8.5 0 0 1 1.995-.492l-.212.103c-.642.312-1.343.662-1.813 1.075c-.034-.022-.07-.044-.094-.069a.527.527 0 0 0-.754-.017a.533.533 0 0 0-.017.756c.19.2.471.35.829.465l.039.014c1.245.383 3.458.336 6.578.211c1.345-.052 2.615-.102 3.674-.082c3.512.07 6.152 1.469 8.07 4.279c1.178 1.725.753 3.426.079 4.903a1.4 1.4 0 0 1-.231-.222a.54.54 0 0 0-.75-.085a.535.535 0 0 0-.086.751c.109.137.665.778 1.355.724l.037-.002c.021-.003.042.001.064-.003c.472-.086.768-.063 1.045.111c.367.232.547.37.511.485c-.021.073-.076.125-.168.177M8.19 11.418l-.315.231a1.6 1.6 0 0 1-.243-.32c.123-.038.33.007.558.089m14.733 4.356a1.9 1.9 0 0 0-.81-.27c.632-1.544 1.034-3.565-.336-5.572c-2.096-3.072-5.101-4.668-8.93-4.744c-1.091-.022-2.377.029-3.737.083c-1.58.063-3.683.145-5.112.027c.285-.155.588-.304.851-.431c1.006-.49 1.797-.872 1.535-1.548c-.137-.396-.547-.603-1.219-.618C3.748 2.669.688 3.489.138 4.872c-.31.779-.361 2.282 2.775 3.61c1.29.548 4.934 1.216 6.341 1.355c.397.039.701.119.931.205a75 75 0 0 0-.986.664c-.577-.329-1.521-.718-2.226-.237a.94.94 0 0 0-.435.768c-.01.385.224.763.486 1.066c-1.038.83-1.877 1.634-2.175 2.253c-.332.762-.467 2.008.153 3.224c.786 1.544 2.524 2.62 5.166 3.199c3.454.755 6.437.075 8.411-.966c1.099-.579 1.878-1.27 2.257-1.887l.356.113c.169.051.338.103.496.159c.522.181 1.1.157 1.545-.068l.025-.013c.336-.177.577-.46.683-.803c.285-.922-.528-1.432-1.018-1.74"/>
                </svg>
              </div>

              <h3 class="text-xl font-bold text-[var(--xmcl-ink)] mb-2">
                Afdian / 爱发电
              </h3>
              <p class="text-[var(--xmcl-muted)] text-sm leading-relaxed mb-6">
                {{ t.afdianDesc }}
              </p>
            </div>

            <div class="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[var(--xmcl-soft)] hover:bg-[var(--xmcl-line)] text-[var(--xmcl-ink)] font-bold text-sm border border-[var(--xmcl-line)] transition-all">
              <span>{{ t.afdianBtn }}</span>
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </div>
          </a>
        </template>

        <!-- Chinese Users: Afdian FIRST -->
        <template v-else>
          <!-- Afdian (Primary Card for Chinese region) -->
          <a 
            href="https://afdian.net/@ci010" 
            target="_blank" 
            rel="noopener noreferrer"
            class="group relative overflow-hidden rounded-xl p-8 bg-[var(--xmcl-panel)] border-2 border-[var(--xmcl-lime)] hover:border-[var(--xmcl-ink)] transition-all duration-200 no-underline flex flex-col justify-between"
          >
            <div class="absolute top-4 right-4">
              <span class="px-2.5 py-1 rounded bg-[var(--xmcl-lime)] text-[#17211f] font-bold text-[10px] uppercase tracking-wider">
                {{ t.recommendedBadge }}
              </span>
            </div>

            <div>
              <div class="w-14 h-14 rounded-xl bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] flex items-center justify-center text-[var(--xmcl-ink)] mb-6 group-hover:bg-[var(--xmcl-line)] transition-colors">
                <svg class="w-8 h-8 text-[var(--xmcl-ink)]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 14.234a.567.567 0 1 0 0 1.134a.567.567 0 0 0 0-1.134m5.351 1.705a.567.567 0 1 0 0 1.135a.567.567 0 0 0 0-1.135m8.401 1.436c-.189.095-.461.1-.713.013c-.169-.06-.352-.116-.534-.172c-.339-.104-.904-.276-1.011-.407a.533.533 0 1 0-.853.643c.059.08.139.146.22.209c-.816 1.131-4.398 3.382-9.464 2.273c-2.283-.5-3.819-1.413-4.444-2.639c-.451-.885-.348-1.797-.133-2.293c.62-1.29 5.097-4.261 7.955-5.943a.537.537 0 0 0 .188-.733c-.149-.254-.49-.356-.73-.189c-.231.135-1.015.601-2.015 1.236c-.338-.227-.923-.508-1.86-.6c-1.486-.148-4.92-.805-6.029-1.275C2.535 7.162.731 6.27 1.131 5.267c.092-.234.527-.613 1.47-.974a8.5 8.5 0 0 1 1.995-.492l-.212.103c-.642.312-1.343.662-1.813 1.075c-.034-.022-.07-.044-.094-.069a.527.527 0 0 0-.754-.017a.533.533 0 0 0-.017.756c.19.2.471.35.829.465l.039.014c1.245.383 3.458.336 6.578.211c1.345-.052 2.615-.102 3.674-.082c3.512.07 6.152 1.469 8.07 4.279c1.178 1.725.753 3.426.079 4.903a1.4 1.4 0 0 1-.231-.222a.54.54 0 0 0-.75-.085a.535.535 0 0 0-.086.751c.109.137.665.778 1.355.724l.037-.002c.021-.003.042.001.064-.003c.472-.086.768-.063 1.045.111c.367.232.547.37.511.485c-.021.073-.076.125-.168.177M8.19 11.418l-.315.231a1.6 1.6 0 0 1-.243-.32c.123-.038.33.007.558.089m14.733 4.356a1.9 1.9 0 0 0-.81-.27c.632-1.544 1.034-3.565-.336-5.572c-2.096-3.072-5.101-4.668-8.93-4.744c-1.091-.022-2.377.029-3.737.083c-1.58.063-3.683.145-5.112.027c.285-.155.588-.304.851-.431c1.006-.49 1.797-.872 1.535-1.548c-.137-.396-.547-.603-1.219-.618C3.748 2.669.688 3.489.138 4.872c-.31.779-.361 2.282 2.775 3.61c1.29.548 4.934 1.216 6.341 1.355c.397.039.701.119.931.205a75 75 0 0 0-.986.664c-.577-.329-1.521-.718-2.226-.237a.94.94 0 0 0-.435.768c-.01.385.224.763.486 1.066c-1.038.83-1.877 1.634-2.175 2.253c-.332.762-.467 2.008.153 3.224c.786 1.544 2.524 2.62 5.166 3.199c3.454.755 6.437.075 8.411-.966c1.099-.579 1.878-1.27 2.257-1.887l.356.113c.169.051.338.103.496.159c.522.181 1.1.157 1.545-.068l.025-.013c.336-.177.577-.46.683-.803c.285-.922-.528-1.432-1.018-1.74"/>
                </svg>
              </div>

              <h3 class="text-xl font-bold text-[var(--xmcl-ink)] mb-2">
                Afdian / 爱发电
              </h3>
              <p class="text-[var(--xmcl-muted)] text-sm leading-relaxed mb-6">
                {{ t.afdianDesc }}
              </p>
            </div>

            <div class="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[var(--xmcl-lime)] text-[#17211f] font-bold text-sm border border-[#17211f] hover:bg-[#d8ff7b] transition-all">
              <span>{{ t.afdianBtn }}</span>
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </div>
          </a>

          <!-- Ko-fi Card -->
          <a 
            href="https://ko-fi.com/ci010" 
            target="_blank" 
            rel="noopener noreferrer"
            class="group relative overflow-hidden rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)] hover:border-[var(--xmcl-ink)] transition-all duration-200 no-underline flex flex-col justify-between"
          >
            <div>
              <div class="w-14 h-14 rounded-xl bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] flex items-center justify-center text-[var(--xmcl-ink)] mb-6 group-hover:bg-[var(--xmcl-line)] transition-colors">
                <svg class="w-8 h-8 text-[var(--xmcl-ink)]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.351 2.715c-2.7 0-4.986.025-6.83.26C2.078 3.285 0 5.154 0 8.61c0 3.506.182 6.13 1.585 8.493c1.584 2.701 4.233 4.182 7.662 4.182h.83c4.209 0 6.494-2.234 7.637-4a9.5 9.5 0 0 0 1.091-2.338C21.792 14.688 24 12.22 24 9.208v-.415c0-3.247-2.13-5.507-5.792-5.87c-1.558-.156-2.65-.208-6.857-.208m0 1.947c4.208 0 5.09.052 6.571.182c2.624.311 4.13 1.584 4.13 4v.39c0 2.156-1.792 3.844-3.87 3.844h-.935l-.156.649c-.208 1.013-.597 1.818-1.039 2.546c-.909 1.428-2.545 3.064-5.922 3.064h-.805c-2.571 0-4.831-.883-6.078-3.195c-1.09-2-1.298-4.155-1.298-7.506c0-2.181.857-3.402 3.012-3.714c1.533-.233 3.559-.26 6.39-.26m6.547 2.287c-.416 0-.65.234-.65.546v2.935c0 .311.234.545.65.545c1.324 0 2.051-.754 2.051-2s-.727-2.026-2.052-2.026m-10.39.182c-1.818 0-3.013 1.48-3.013 3.142c0 1.533.858 2.857 1.949 3.897c.727.701 1.87 1.429 2.649 1.896a1.47 1.47 0 0 0 1.507 0c.78-.467 1.922-1.195 2.623-1.896c1.117-1.039 1.974-2.364 1.974-3.897c0-1.662-1.247-3.142-3.039-3.142c-1.065 0-1.792.545-2.338 1.298c-.493-.753-1.246-1.298-2.312-1.298"/>
                </svg>
              </div>

              <h3 class="text-xl font-bold text-[var(--xmcl-ink)] mb-2">
                Ko-fi (International Support)
              </h3>
              <p class="text-[var(--xmcl-muted)] text-sm leading-relaxed mb-6">
                {{ t.kofiDesc }}
              </p>
            </div>

            <div class="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[var(--xmcl-soft)] hover:bg-[var(--xmcl-line)] text-[var(--xmcl-ink)] font-bold text-sm border border-[var(--xmcl-line)] transition-all">
              <span>{{ t.kofiBtn }}</span>
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </div>
          </a>
        </template>
      </div>
    </div>

    <!-- Why Support Grid -->
    <div class="mb-14 rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)]">
      <h2 class="text-2xl font-extrabold text-[var(--xmcl-ink)] mb-8 text-center">
        {{ t.whyTitle }}
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 rounded-xl bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)]">
          <div class="w-12 h-12 rounded-lg bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)] flex items-center justify-center text-[var(--xmcl-ink)] mb-4">
            <svg class="w-6 h-6 text-[var(--xmcl-orange)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
              <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
              <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
              <line x1="12" y1="20" x2="12.01" y2="20" stroke-width="3"></line>
            </svg>
          </div>
          <h3 class="text-base font-bold text-[var(--xmcl-ink)] mb-2">{{ t.whyP2pTitle }}</h3>
          <p class="text-xs text-[var(--xmcl-muted)] leading-relaxed">{{ t.whyP2pDesc }}</p>
        </div>

        <div class="p-6 rounded-xl bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)]">
          <div class="w-12 h-12 rounded-lg bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)] flex items-center justify-center text-[var(--xmcl-ink)] mb-4">
            <svg class="w-6 h-6 text-[var(--xmcl-orange)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
              <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z"></path>
              <path d="M9 12l-5 5"></path>
              <path d="M12 15l5 5"></path>
            </svg>
          </div>
          <h3 class="text-base font-bold text-[var(--xmcl-ink)] mb-2">{{ t.whyCdnTitle }}</h3>
          <p class="text-xs text-[var(--xmcl-muted)] leading-relaxed">{{ t.whyCdnDesc }}</p>
        </div>

        <div class="p-6 rounded-xl bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)]">
          <div class="w-12 h-12 rounded-lg bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)] flex items-center justify-center text-[var(--xmcl-ink)] mb-4">
            <svg class="w-6 h-6 text-[var(--xmcl-orange)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
          </div>
          <h3 class="text-base font-bold text-[var(--xmcl-ink)] mb-2">{{ t.whyDevTitle }}</h3>
          <p class="text-xs text-[var(--xmcl-muted)] leading-relaxed">{{ t.whyDevDesc }}</p>
        </div>
      </div>
    </div>

    <!-- Non-financial Support -->
    <div class="rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)] text-center">
      <h2 class="text-xl font-bold text-[var(--xmcl-ink)] mb-3">
        {{ t.otherWaysTitle }}
      </h2>
      <p class="text-[var(--xmcl-muted)] text-sm max-w-xl mx-auto mb-6 leading-relaxed">
        {{ t.otherWaysDesc }}
      </p>

      <div class="flex flex-wrap items-center justify-center gap-4">
        <a 
          href="https://github.com/Voxelum/x-minecraft-launcher" 
          target="_blank" 
          rel="noopener noreferrer"
          class="px-5 py-2.5 rounded-lg bg-[var(--xmcl-soft)] hover:bg-[var(--xmcl-line)] text-[var(--xmcl-ink)] font-semibold text-xs border border-[var(--xmcl-line)] transition-colors no-underline inline-flex items-center gap-2"
        >
          <svg class="w-4 h-4 text-[var(--xmcl-orange)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <span>Star on GitHub</span>
        </a>
        <a 
          href="https://discord.gg/W5XVwYY7GQ" 
          target="_blank" 
          rel="noopener noreferrer"
          class="px-5 py-2.5 rounded-lg bg-[var(--xmcl-soft)] hover:bg-[var(--xmcl-line)] text-[var(--xmcl-ink)] font-semibold text-xs border border-[var(--xmcl-line)] transition-colors no-underline inline-flex items-center gap-2"
        >
          <svg class="w-4 h-4 text-[var(--xmcl-ink)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Join Discord</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { lang } = useData()

const currentLang = computed(() => lang.value || 'en')

const isChineseLocale = computed(() => {
  return currentLang.value === 'zh' || currentLang.value === 'zh-TW'
})

const i18nDict: Record<string, Record<string, string>> = {
  uk: {
    kicker: 'Донати & Підтримка (Donate)',
    title: 'Підтримати автора та команду XMCL',
    subtitle: 'XMCL — це 100% безкоштовний відкритий проєкт, створений розробником ci010 та спільнотою Voxelum. Ваші донати покривають серверні витрати та надихають на розвиток!',
    platformsTitle: 'Платформи для Донатів (Donate)',
    recommendedBadge: 'Рекомендовано для вашого регіону',
    kofiDesc: 'Швидкий та зручний донат через PayPal, Apple Pay, Google Pay або картки Visa / Mastercard.',
    kofiBtn: 'Донат через Ko-fi',
    afdianDesc: 'Платформа підтримки авторів (Alipay / WeChat Pay).',
    afdianBtn: 'Донат через Afdian',
    whyTitle: 'На що йдуть ваші донати?',
    whyP2pTitle: 'P2P Сигнальні сервери',
    whyP2pDesc: 'Сервери WebRTC кімнат для безкоштовної мережевої гри без порт-форвардингу.',
    whyCdnTitle: 'Швидкі CDN-дзеркала',
    whyCdnDesc: 'Високошвидкісні дзеркала завантаження версій Minecraft, модів та асетів.',
    whyDevTitle: 'Постійний розвиток',
    whyDevDesc: 'Розробка нових можливостей, виправлення помилок та підтримка нових версій гри.',
    otherWaysTitle: 'Інші способи допомогти проєкту',
    otherWaysDesc: 'Невже немає можливості задонатити? Поставте зірочку на GitHub або поділіться лаунчером із друзями!',
  },
  en: {
    kicker: 'Donate & Support',
    title: 'Donate to the XMCL Author & Team',
    subtitle: 'XMCL is a 100% free open-source project created by ci010 and the Voxelum community. Your donations cover infrastructure costs and fuel continuous development!',
    platformsTitle: 'Donation Platforms',
    recommendedBadge: 'Recommended for International',
    kofiDesc: 'Donate easily with PayPal, Apple Pay, Google Pay, or Credit Card.',
    kofiBtn: 'Donate via Ko-fi',
    afdianDesc: 'Sponsorship platform supporting developers (Alipay / WeChat Pay).',
    afdianBtn: 'Donate via Afdian',
    whyTitle: 'Where Do Your Donations Go?',
    whyP2pTitle: 'P2P Signaling Servers',
    whyP2pDesc: 'WebRTC multiplayer rooms & STUN/TURN servers for free P2P gaming.',
    whyCdnTitle: 'High-Speed CDN Mirrors',
    whyCdnDesc: 'Bandwidth for fast downloads of Minecraft versions, assets, and mod loaders.',
    whyDevTitle: 'Continuous Development',
    whyDevDesc: 'Building new features, bug fixes, and supporting new Minecraft releases.',
    otherWaysTitle: 'Other Ways to Help',
    otherWaysDesc: "Cannot donate financially? You can star our GitHub repository or share XMCL with your friends!",
  },
  zh: {
    kicker: '捐赠与支持 (Donate)',
    title: '捐赠与支持 XMCL 作者及团队',
    subtitle: 'XMCL 是由 ci010 及 Voxelum 社区共同打造的 100% 免费开源项目。您的捐赠将用于支付服务器基础设施费用，并激励作者持续开发！',
    platformsTitle: '捐赠渠道',
    recommendedBadge: '推荐平台 (微信/支付宝)',
    kofiDesc: '使用 PayPal 或国际信用卡提供单次或每月捐赠。',
    kofiBtn: '通过 Ko-fi 捐赠',
    afdianDesc: '支持微信支付和支付宝的创作者捐赠平台。',
    afdianBtn: '通过爱发电捐赠',
    whyTitle: '捐赠资金将用于何处？',
    whyP2pTitle: 'P2P 联机信令服务器',
    whyP2pDesc: '支持玩家免费 P2P 联机的 WebRTC 节点及 STUN/TURN 服务器。',
    whyCdnTitle: '高速 CDN 镜像节点',
    whyCdnDesc: '保障游戏版本、资源包及 Mod 加载器的极速下载体验。',
    whyDevTitle: '持续开发与迭代',
    whyDevDesc: '开发全新功能、修复 Bug 并适配最新版 Minecraft。',
    otherWaysTitle: '其他支持方式',
    otherWaysDesc: '即使暂时无法资金支持，您也可以在 GitHub 上点个 Star 或分享给朋友！',
  }
}

const t = computed(() => {
  return i18nDict[currentLang.value] || i18nDict['en']
})
</script>
