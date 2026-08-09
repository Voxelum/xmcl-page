<template>
  <div class="xmcl-privacy-page max-w-5xl mx-auto px-4 py-8 font-sans">
    <!-- Header Hero -->
    <div class="rounded-xl p-8 md:p-12 mb-10 text-center bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)]">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-[var(--xmcl-ink)] font-bold text-xs uppercase tracking-wider mb-6">
        <svg class="w-4 h-4 text-[var(--xmcl-orange)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        <span>Політика Конфіденційності (ЗУ № 2297-VI)</span>
      </div>

      <h1 class="text-3xl md:text-5xl font-black text-[var(--xmcl-ink)] tracking-tight mb-4 leading-tight">
        Політика Конфіденційності X Minecraft Launcher
      </h1>
      <p class="text-base md:text-lg text-[var(--xmcl-muted)] max-w-3xl mx-auto leading-relaxed font-medium mb-8">
        X Minecraft Launcher (XMCL) -- програмне забезпечення з відкритим вихідним кодом (MIT License). Цей документ регулює обробку персональних та технічних даних відповідно до Закону України "Про захист персональних даних" (№ 2297-VI) та міжнародних норм.
      </p>

      <!-- Key Badges -->
      <div class="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-[var(--xmcl-muted)]">
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-[var(--xmcl-ink)]">
          <svg class="w-3.5 h-3.5 text-[var(--xmcl-orange)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
          <span>MIT License | Open Source</span>
        </span>
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-[var(--xmcl-ink)]">
          <svg class="w-3.5 h-3.5 text-[var(--xmcl-ink)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <span>SignPath.io Code Signed</span>
        </span>
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-[var(--xmcl-ink)]">
          <svg class="w-3.5 h-3.5 text-[var(--xmcl-ink)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
          </svg>
          <span>Вік 16+</span>
        </span>
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-[var(--xmcl-ink)]">
          <svg class="w-3.5 h-3.5 text-[var(--xmcl-ink)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span>Відкликання згоди (ст. 8 ЗУ № 2297-VI)</span>
        </span>
      </div>
    </div>

    <!-- 10 Main Structured Sections -->
    <div class="space-y-8 mb-14">
      <!-- Section 1: Introduction -->
      <div class="rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)]">
        <div class="flex items-start gap-4 mb-4">
          <div class="w-12 h-12 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] flex items-center justify-center text-[var(--xmcl-orange)] shrink-0">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
          </div>
          <div class="space-y-3">
            <h2 class="text-xl font-bold text-[var(--xmcl-ink)]">
              1. Вступ та сфера застосування
            </h2>
            <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
              Цей документ є єдиним юридично обов'язковим документом, що регулює збір, обробку, зберігання та транскордонну передачу даних під час використання <a href="https://github.com/Voxelum/x-minecraft-launcher" target="_blank" rel="noopener noreferrer" class="underline hover:text-[var(--xmcl-orange)] transition-colors">X Minecraft Launcher</a> ("Лаунчер"), розробленого спільнотою розробників <a href="https://github.com/Voxelum" target="_blank" rel="noopener noreferrer" class="underline hover:text-[var(--xmcl-orange)] transition-colors">Voxelum</a> ("Організація"). Політика розроблена у відповідності до Закону України від 01.06.2010 № 2297-VI "Про захист персональних даних".
            </p>
            <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
              Лаунчер є 100% програмним забезпеченням з відкритим вихідним кодом, опублікованим під ліцензією MIT у репозиторії <a href="https://github.com/Voxelum/x-minecraft-launcher" target="_blank" rel="noopener noreferrer" class="underline hover:text-[var(--xmcl-orange)] transition-colors">github.com/Voxelum/x-minecraft-launcher</a>. Використання Лаунчера здійснюється за умови ознайомлення з цією Політикою. При увімкненні телеметрії користувач надає згоду на обробку діагностичних метрик. Якщо ви не згодні, ви маєте право вимкнути телеметрію в налаштуваннях або припинити використання Лаунчера.
            </p>
          </div>
        </div>
      </div>

      <!-- Section 2: Legal Basis -->
      <div class="rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)]">
        <div class="flex items-start gap-4 mb-4">
          <div class="w-12 h-12 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] flex items-center justify-center text-[var(--xmcl-orange)] shrink-0">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <div class="space-y-3">
            <h2 class="text-xl font-bold text-[var(--xmcl-ink)]">
              2. Правова основа обробки даних (ст. 6 ЗУ № 2297-VI)
            </h2>
            <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
              Обробка технічних даних здійснюється на підставі згоди суб'єкта персональних даних (ч. 1 ст. 6 ЗУ № 2297-VI), вираженої через увімкнення опції телеметрії, а також для виконання правочину / угоди користувача (ч. 1 ст. 6 ЗУ № 2297-VI). Ідентифікатор пристрою (device ID) та аргументи запуску JVM кваліфікуються як псевдонімізовані технічні дані, оскільки не дозволяють ідентифікувати особу без додаткової інформації. Строки зберігання: телеметричні дані зберігаються в Azure Application Insights протягом 90 днів з моменту збору, після чого автоматично видаляються. Звіти про збої зберігаються до 90 днів для проведення технічного аналізу.
            </p>
          </div>
        </div>
      </div>

      <!-- Section 3: Collection and Use -->
      <div class="rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)]">
        <div class="flex items-start gap-4 mb-6">
          <div class="w-12 h-12 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] flex items-center justify-center text-[var(--xmcl-orange)] shrink-0">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
          </div>
          <div class="space-y-1">
            <h2 class="text-xl font-bold text-[var(--xmcl-ink)]">
              3. Збір та використання інформації
            </h2>
            <p class="text-xs text-[var(--xmcl-muted)]">
              Організація збирає виключно технічні діагностичні метрики для забезпечення стабільності гри та покращення якості продукту. Нижче наведено вичерпний перелік усіх категорій даних.
            </p>
          </div>
        </div>

        <div class="space-y-6 pl-0 md:pl-16">
          <div class="p-4 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] space-y-2">
            <h3 class="text-sm font-bold text-[var(--xmcl-ink)]">
              3.1. Інформація про використання
            </h3>
            <p class="text-xs text-[var(--xmcl-muted)] leading-relaxed">
              При увімкненій опції телеметрії Лаунчер може передавати наступні технічні події:
            </p>
            <ul class="list-disc list-inside text-xs text-[var(--xmcl-muted)] space-y-1">
              <li>Подія запуску гри Minecraft</li>
              <li>Час (timestamp) запуску гри Minecraft</li>
              <li>Подія виходу користувача з Лаунчера</li>
            </ul>
          </div>

          <div class="p-4 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] space-y-2">
            <h3 class="text-sm font-bold text-[var(--xmcl-ink)]">
              3.2. Додаткова діагностична інформація
            </h3>
            <p class="text-xs text-[var(--xmcl-muted)] leading-relaxed">
              Окрім базових подій використання, Лаунчер також може передавати:
            </p>
            <ul class="list-disc list-inside text-xs text-[var(--xmcl-muted)] space-y-1">
              <li>Аргументи запуску Minecraft (параметри JVM) -- увага: ці дані можуть містити шляхи файлової системи, що включають ім'я користувача ОС (псевдонімізовані дані)</li>
              <li>Загальну тривалість ігрової сесії</li>
              <li>Назву служби авторизації, яку використовує користувач (Microsoft, Ely.by або Offline)</li>
            </ul>
          </div>

          <div class="p-4 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] space-y-2">
            <h3 class="text-sm font-bold text-[var(--xmcl-ink)]">
              3.3. Ідентифікація пристрою (Device ID)
            </h3>
            <p class="text-xs text-[var(--xmcl-muted)] leading-relaxed">
              Лаунчер генерує унікальний ідентифікатор пристрою (device ID) для кожного комп'ютера. Згідно зі ст. 2 ЗУ № 2297-VI, цей ідентифікатор є псевдонімізованими технічними даними і використовується виключно для дедуплікації телеметрії. Організація не пов'язує цей ідентифікатор з обліковими записами, іменами чи іншими прямими персональними даними.
            </p>
          </div>

          <div class="p-4 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] space-y-2">
            <h3 class="text-sm font-bold text-[var(--xmcl-ink)]">
              3.4. Звіти про помилки (crash reports)
            </h3>
            <p class="text-xs text-[var(--xmcl-muted)] leading-relaxed">
              Для покращення стабільності Лаунчер може надсилати звіти про збої та виключення. Звіти про збої надсилаються виключно при увімкненій користувачем опції телеметрії. Ці звіти містять stack trace, версію ОС та апаратні характеристики без персональних даних.
            </p>
          </div>

          <div class="p-4 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] space-y-2">
            <h3 class="text-sm font-bold text-[var(--xmcl-ink)]">
              3.5. Дані, що НЕ збираються
            </h3>
            <p class="text-xs text-[var(--xmcl-muted)] leading-relaxed">
              Лаунчер не збирає і не передає наступну інформацію:
            </p>
            <ul class="list-disc list-inside text-xs text-[var(--xmcl-muted)] space-y-1">
              <li>Паролі, токени доступу та облікові дані (зберігаються виключно локально на пристрої у зашифрованному вигляді)</li>
              <li>Персональні дані (ПІБ, адреси проживання, номери телефонів)</li>
              <li>Ідентифікатори Microsoft Store, Mojang або Xbox</li>
              <li>Вміст файлів, модів, текстур або світів гравця</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Section 4: Data Subject Rights -->
      <div class="rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)]">
        <div class="flex items-start gap-4 mb-4">
          <div class="w-12 h-12 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] flex items-center justify-center text-[var(--xmcl-orange)] shrink-0">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
              <line x1="12" y1="2" x2="12" y2="12" />
            </svg>
          </div>
          <div class="space-y-3">
            <h2 class="text-xl font-bold text-[var(--xmcl-ink)]">
              4. Права суб'єкта персональних даних та відкликання згоди (ст. 8 ЗУ № 2297-VI)
            </h2>
            <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
              Відповідно до ч. 2 ст. 8 Закону України "Про захист персональних даних", ви маєте право в будь-який момент відкликати згоду на обробку телеметрії. Для цього відкрийте Налаштування Лаунчера та вимкніть опцію телеметрії. Після вимкнення передача діагностичних даних повністю припиняється, що не впливає на функціональність Лаунчера. Запити на доступ до даних задовольняються протягом 30 календарних днів (ст. 14 ЗУ № 2297-VI). Вам гарантуються наступні права:
            </p>
            <div class="p-4 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-xs text-[var(--xmcl-muted)] space-y-2">
              <div class="font-bold text-[var(--xmcl-ink)]">Права суб'єкта персональних даних згідно зі ст. 8 Закону України № 2297-VI:</div>
              <ul class="list-disc list-inside space-y-1">
                <li>Знати про джерела збирання, місцезнаходження своїх даних та мету їх обробки (ч. 2 ст. 8 ЗУ № 2297-VI).</li>
                <li>Отримувати інформацію про умови надання доступу та доступ до своїх даних протягом 30 днів (ч. 2 ст. 8 ЗУ № 2297-VI).</li>
                <li>Пред'являти вмотивовану вимогу щодо зміни або знищення своїх персональних даних (ч. 2 ст. 8 ЗУ № 2297-VI).</li>
                <li>Відкликати згоду на обробку персональних даних шляхом вимкнення телеметрії (ч. 2 ст. 8 ЗУ № 2297-VI).</li>
                <li>Звертатися зі скаргами на обробку своїх даних до Уповноваженого Верховної Ради України з прав людини або до суду (ч. 2 ст. 8 ЗУ № 2297-VI).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 5: Data Sharing -->
      <div class="rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)]">
        <div class="flex items-start gap-4 mb-4">
          <div class="w-12 h-12 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] flex items-center justify-center text-[var(--xmcl-ink)] shrink-0">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
          </div>
          <div class="space-y-3">
            <h2 class="text-xl font-bold text-[var(--xmcl-ink)]">
              5. Обмін даними та розкриття інформації
            </h2>
            <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
              Організація може розкривати псевдонімізовані діагностичні дані у наступних чітко визначених випадках:
            </p>
            <ul class="list-disc list-inside text-xs text-[var(--xmcl-muted)] space-y-1">
              <li>Передача псевдонімізованих метрик на сервери Microsoft Azure Application Insights при увімкненій телеметрії для технічного аналізу стабільності ПО.</li>
              <li>За обов'язковим запитом правоохоронних органів або судових інстанцій відповідно до чинного законодавства.</li>
              <li>Для захисту прав, майна або безпеки Організації, користувачів Лаунчера або третіх осіб від реальної загрози.</li>
              <li>Організація категорично не продає, не здає в оренду та не передає зібрані дані рекламодавцям, брокерам даних або комерційним третім сторонам.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Section 6: Third-Party Services -->
      <div class="rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)]">
        <div class="flex items-start gap-4 mb-4">
          <div class="w-12 h-12 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] flex items-center justify-center text-[var(--xmcl-ink)] shrink-0">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>
          <div class="space-y-3">
            <h2 class="text-xl font-bold text-[var(--xmcl-ink)]">
              6. Послуги третіх сторін та транскордонна передача даних (ст. 29 ЗУ № 2297-VI)
            </h2>
            <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
              Лаунчер взаємодіє зі сторонніми сервісами. Інформуємо про порядок транскордонної передачі псевдонімізованих даних згідно зі ст. 29 ЗУ № 2297-VI:
            </p>
            <div class="pt-2 space-y-2">
              <div class="p-3 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-xs text-[var(--xmcl-muted)]">
                <div class="font-bold text-[var(--xmcl-ink)] mb-1">Microsoft Azure Application Insights</div>
                <div>Сервіс збору псевдонімізованої телеметрії та звітів про збої. При увімкненій телеметрії здійснюється транскордонна передача даних на сервери Microsoft Azure під захистом угод про обробку даних.</div>
              </div>
              <div class="p-3 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-xs text-[var(--xmcl-muted)]">
                <div class="font-bold text-[var(--xmcl-ink)] mb-1">Microsoft OAuth 2.0</div>
                <div>Протокол авторизації для облікових записів Minecraft/Microsoft. Підтримується авторизація через Ely.by та режим Offline. Токени зберігаються локально на пристрої у зашифрованому вигляді засобами ОС.</div>
              </div>
              <div class="p-3 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-xs text-[var(--xmcl-muted)]">
                <div class="font-bold text-[var(--xmcl-ink)] mb-1">Modrinth API / CurseForge API / Mojang CDN</div>
                <div>Прямі HTTP-запити до Modrinth, CurseForge та Mojang CDN для завантаження модів та файлів гри. IP-адреса може оброблятися цими сервісами згідно з їхніми політиками.</div>
              </div>
              <div class="p-3 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-xs text-[var(--xmcl-muted)]">
                <div class="font-bold text-[var(--xmcl-ink)] mb-1">SignPath.io (SignPath Foundation)</div>
                <div>Цифровий підпис виконуваних файлів Лаунчера здійснюється за спонсорської підтримки SignPath Foundation. SignPath не отримує доступу до даних користувачів.</div>
              </div>
            </div>
            <p class="text-xs text-[var(--xmcl-muted)] leading-relaxed pt-2">
              Повідомлення про транскордонну передачу (ст. 29 ЗУ № 2297-VI): при увімкненій телеметрії псевдонімізовані технічні метрики передаються на сервери Microsoft.
            </p>
          </div>
        </div>
      </div>

      <!-- Section 7: Security -->
      <div class="rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)]">
        <div class="flex items-start gap-4 mb-4">
          <div class="w-12 h-12 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] flex items-center justify-center text-[var(--xmcl-orange)] shrink-0">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <div class="space-y-3">
            <h2 class="text-xl font-bold text-[var(--xmcl-ink)]">
              7. Захист персональних даних
            </h2>
            <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
              Організація вживає необхідних технічних і організаційних заходів для захисту вашої інформації від несанкційного доступу, втрати або незаконної обробки. Збереження токенів авторизації захищено системними засобами шифрування ОС:
            </p>
            <div class="p-4 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-xs text-[var(--xmcl-muted)] space-y-2">
              <div class="font-bold text-[var(--xmcl-ink)]">Механізми захисту облікових даних та токенів:</div>
              <ul class="list-disc list-inside space-y-1">
                <li><strong>Windows:</strong> Data Protection API (DPAPI).</li>
                <li><strong>macOS:</strong> macOS Keychain Services.</li>
                <li><strong>Linux:</strong> Secret Service API / Keyring.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Section 8: Children's Privacy -->
      <div class="rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)]">
        <div class="flex items-start gap-4 mb-4">
          <div class="w-12 h-12 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] flex items-center justify-center text-[var(--xmcl-orange)] shrink-0">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <div class="space-y-3">
            <h2 class="text-xl font-bold text-[var(--xmcl-ink)]">
              8. Конфіденційність дітей (Вік 16+)
            </h2>
            <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
              Згода на обробку персональних даних у цифровому середовищі відповідно до Цивільного кодексу України та норм захисту прав дітей надається особами, які досягли 16 років. До досягнення 16 років згода має надаватися батьками або законними представниками. Організація свідомо не збирає дані дітей віком до 16 років без згоди батьків. За запитом батьків дані будуть видалені протягом 10 робочих днів.
            </p>
          </div>
        </div>
      </div>

      <!-- Section 9: Changes -->
      <div class="rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)]">
        <div class="flex items-start gap-4 mb-4">
          <div class="w-12 h-12 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] flex items-center justify-center text-[var(--xmcl-ink)] shrink-0">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </div>
          <div class="space-y-3">
            <h2 class="text-xl font-bold text-[var(--xmcl-ink)]">
              9. Зміни до цієї Політики Конфіденційності
            </h2>
            <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
              Організація залишає за собою право оновлювати цей документ. Про суттєві зміни користувачі будуть повідомлені через оновлення на цій сторінці з зазначенням дати останнього оновлення. Дата останнього оновлення: серпень 2026 року.
            </p>
          </div>
        </div>
      </div>

      <!-- Section 10: Contact Us -->
      <div class="rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)]">
        <div class="flex items-start gap-4 mb-4">
          <div class="w-12 h-12 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] flex items-center justify-center text-[var(--xmcl-orange)] shrink-0">
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <div class="space-y-3">
            <h2 class="text-xl font-bold text-[var(--xmcl-ink)]">
              10. Зв'яжіться з нами та захист прав
            </h2>
            <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
              З питань реалізації прав суб'єкта персональних даних (ст. 8 ЗУ № 2297-VI), відкликання згоди або направлення скарг звертайтеся за офіційними каналами (також ви маєте право звернутися до Уповноваженого Верховної Ради України з прав людини):
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <a 
                href="https://github.com/Voxelum/x-minecraft-launcher/issues" 
                target="_blank" 
                rel="noopener noreferrer"
                class="p-4 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] hover:border-[var(--xmcl-orange)] transition-colors no-underline block"
              >
                <div class="font-bold text-[var(--xmcl-ink)] text-sm mb-1">GitHub Issue Tracker</div>
                <div class="text-xs text-[var(--xmcl-muted)]">Для офіційних запитів на відкликання згоди, видалення даних або реалізацію прав за ЗУ № 2297-VI.</div>
              </a>
              <a 
                href="https://discord.gg/W5Jx66g" 
                target="_blank" 
                rel="noopener noreferrer"
                class="p-4 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] hover:border-[var(--xmcl-orange)] transition-colors no-underline block"
              >
                <div class="font-bold text-[var(--xmcl-ink)] text-sm mb-1">XMCL Discord</div>
                <div class="text-xs text-[var(--xmcl-muted)]">Для прямого зв'язку з основною командою розробників XMCL.</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Verification Footer -->
    <div class="rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)] text-center">
      <h2 class="text-xl font-bold text-[var(--xmcl-ink)] mb-3">
        Аудит та Верифікація Вихідного Коду
      </h2>
      <p class="text-[var(--xmcl-muted)] text-sm max-w-xl mx-auto mb-6 leading-relaxed">
        Весь вихідний код Лаунчера доступний для публічного аудиту. Ви можете самостійно перевірити, які саме дані збираються та як вони обробляються.
      </p>

      <div class="flex flex-wrap items-center justify-center gap-4">
        <a 
          href="https://github.com/Voxelum/x-minecraft-launcher" 
          target="_blank" 
          rel="noopener noreferrer"
          class="px-5 py-2.5 rounded-lg bg-[var(--xmcl-soft)] hover:bg-[var(--xmcl-line)] text-[var(--xmcl-ink)] font-semibold text-xs border border-[var(--xmcl-line)] transition-colors no-underline inline-flex items-center gap-2"
        >
          <svg class="w-4 h-4 text-[var(--xmcl-orange)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
          <span>GitHub Repository</span>
        </a>
        <a 
          href="https://signpath.org/" 
          target="_blank" 
          rel="noopener noreferrer"
          class="px-5 py-2.5 rounded-lg bg-[var(--xmcl-soft)] hover:bg-[var(--xmcl-line)] text-[var(--xmcl-ink)] font-semibold text-xs border border-[var(--xmcl-line)] transition-colors no-underline inline-flex items-center gap-2"
        >
          <svg class="w-4 h-4 text-[var(--xmcl-ink)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <span>SignPath Foundation</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
