<template>
  <div class="xmcl-privacy-page max-w-5xl mx-auto px-4 py-8 font-sans">
    <!-- Header Hero -->
    <div class="rounded-xl p-8 md:p-12 mb-10 text-center bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)]">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-[var(--xmcl-ink)] font-bold text-xs uppercase tracking-wider mb-6">
        <svg class="w-4 h-4 text-[var(--xmcl-orange)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        <span>Политика Конфиденциальности (ФЗ-152)</span>
      </div>

      <h1 class="text-3xl md:text-5xl font-black text-[var(--xmcl-ink)] tracking-tight mb-4 leading-tight">
        Политика Конфиденциальности X Minecraft Launcher
      </h1>
      <p class="text-base md:text-lg text-[var(--xmcl-muted)] max-w-3xl mx-auto leading-relaxed font-medium mb-8">
        X Minecraft Launcher (XMCL) -- программное обеспечение с открытым исходным кодом (MIT License). Настоящий документ регулирует обработку персональных и технических данных в соответствии с Федеральным законом РФ № 152-ФЗ "О персональных данных".
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
          <span>Возраст 14+</span>
        </span>
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-[var(--xmcl-ink)]">
          <svg class="w-3.5 h-3.5 text-[var(--xmcl-ink)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span>Отзыв согласия (ст. 9 ФЗ-152)</span>
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
              1. Введение и область применения
            </h2>
            <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
              Настоящий документ является единственным юридически обязывающим документом, регулирующим сбор, обработку, хранение и трансграничную передачу данных при использовании <a href="https://github.com/Voxelum/x-minecraft-launcher" target="_blank" rel="noopener noreferrer" class="underline hover:text-[var(--xmcl-orange)] transition-colors">X Minecraft Launcher</a> ("Лаунчер"), разработанного сообществом <a href="https://github.com/Voxelum" target="_blank" rel="noopener noreferrer" class="underline hover:text-[var(--xmcl-orange)] transition-colors">Voxelum</a> ("Организация"). Документ разработан в строгом соответствии с требованиями Федерального закона РФ от 27.07.2006 № 152-ФЗ "О персональных данных".
            </p>
            <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
              Лаунчер является 100% программным обеспечением с открытым исходным кодом, опубликованным по лицензии MIT в репозитории <a href="https://github.com/Voxelum/x-minecraft-launcher" target="_blank" rel="noopener noreferrer" class="underline hover:text-[var(--xmcl-orange)] transition-colors">github.com/Voxelum/x-minecraft-launcher</a>. Использование Лаунчера осуществляется при условии ознакомления с настоящей Политикой. При включении опции телеметрии пользователь выражает согласие на обработку метрик. Если вы не согласны с условиями обработки данных, вы вправе отключить телеметрию в настройках или прекратить использование Лаунчера.
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
              2. Правовые основания обработки данных (ст. 6 ФЗ-152)
            </h2>
            <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
              Обработка технической информации осуществляется на основании пункта 5 части 1 статьи 6 Федерального закона № 152-ФЗ (исполнение пользовательского соглашения), а обработка опциональных метрик телеметрии -- на основании согласия субъекта (п. 1 ч. 1 ст. 6 ФЗ-152), выражаемого включением соответствующей опции в настройках. Согласно ст. 3 ФЗ-152, идентификатор устройства (device ID) и аргументы запуска JVM являются псевдонимизированными (обезличенными) персональными данными, поскольку не позволяют напрямую определить конкретное физическое лицо без использования дополнительной информации. Сроки хранения данных: метрические данные хранятся в Azure Application Insights в течение 90 дней с момента сбора, после чего автоматически уничтожаются (ст. 21 ФЗ-152). Отчеты о сбоях хранятся не более 90 дней для технического анализа.
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
              3. Состав и цели обработки собираемой информации
            </h2>
            <p class="text-xs text-[var(--xmcl-muted)]">
              Организация обрабатывает исключительно технические метрики, необходимые для обеспечения работы Лаунчера и устранения сбоев. Ниже приведен исчерпывающий перечень категорий данных.
            </p>
          </div>
        </div>

        <div class="space-y-6 pl-0 md:pl-16">
          <div class="p-4 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] space-y-2">
            <h3 class="text-sm font-bold text-[var(--xmcl-ink)]">
              3.1. Техническая информация об использовании
            </h3>
            <p class="text-xs text-[var(--xmcl-muted)] leading-relaxed">
              При включенной опции телеметрии Лаунчер может передавать следующие технические события:
            </p>
            <ul class="list-disc list-inside text-xs text-[var(--xmcl-muted)] space-y-1">
              <li>Событие запуска игрового клиента Minecraft</li>
              <li>Точная метка времени (timestamp) запуска игры</li>
              <li>Событие завершения работы и выхода из Лаунчера</li>
            </ul>
          </div>

          <div class="p-4 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] space-y-2">
            <h3 class="text-sm font-bold text-[var(--xmcl-ink)]">
              3.2. Дополнительные диагностические метрики
            </h3>
            <p class="text-xs text-[var(--xmcl-muted)] leading-relaxed">
              Для анализа совместимости с оборудованием и Java-средой Лаунчер может передавать:
            </p>
            <ul class="list-disc list-inside text-xs text-[var(--xmcl-muted)] space-y-1">
              <li>Аргументы запуска JVM (параметры виртуальной машины Java) -- предупреждение: технические пути системных папок могут содержать имя учетной записи ОС (псевдонимизированные данные)</li>
              <li>Общую продолжительность игровой сессии</li>
              <li>Наименование выбранного сервиса авторизации (Microsoft, Ely.by или Offline)</li>
            </ul>
          </div>

          <div class="p-4 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] space-y-2">
            <h3 class="text-sm font-bold text-[var(--xmcl-ink)]">
              3.3. Идентификация оборудования (Device ID)
            </h3>
            <p class="text-xs text-[var(--xmcl-muted)] leading-relaxed">
              Лаунчер формирует уникальный технический идентификатор устройства (device ID). В соответствии с 152-ФЗ, данный идентификатор относится к псевдонимизированным техническим данным и используется исключительно для устранения дублирования метрик. Организация не связывает этот код с ФИО, адресами электронной почты или иными прямыми идентификаторами личности.
            </p>
          </div>

          <div class="p-4 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] space-y-2">
            <h3 class="text-sm font-bold text-[var(--xmcl-ink)]">
              3.4. Отчеты об ошибках и сбоях (Crash reports)
            </h3>
            <p class="text-xs text-[var(--xmcl-muted)] leading-relaxed">
              При возникновении критических ошибок Лаунчер автоматизировано формирует отчет, содержащий стек вызовов (stack trace), версию ОС и технические параметры оборудования. Отчеты об ошибках отправляются исключительно при включенной пользователем опции телеметрии.
            </p>
          </div>

          <div class="p-4 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] space-y-2">
            <h3 class="text-sm font-bold text-[var(--xmcl-ink)]">
              3.5. Данные, не подлежащие сбору и обработке
            </h3>
            <p class="text-xs text-[var(--xmcl-muted)] leading-relaxed">
              Организация категорически НЕ собирает и НЕ обрабатывает следующие данные:
            </p>
            <ul class="list-disc list-inside text-xs text-[var(--xmcl-muted)] space-y-1">
              <li>Пароли, токены доступа и учетные данные (хранятся строго локально на устройстве в зашифрованном виде)</li>
              <li>Персональные данные (ФИО, адрес проживания, номер телефона, паспортные данные)</li>
              <li>Идентификаторы аккаунтов Microsoft Store, Mojang или Xbox</li>
              <li>Содержимое пользовательских файлов, модов, миров и ресурсов Minecraft</li>
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
              4. Права субъекта персональных данных и отзыв согласия (ст. 9, 14 ФЗ-152)
            </h2>
            <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
              В соответствии с частью 2 статьи 9 Федерального закона № 152-ФЗ "О персональных данных", вы имеете безусловное право в любой момент отозвать свое согласие на обработку телеметрии. Для этого откройте Настройки Лаунчера и отключите переключатель телеметрии. После отключения передача диагностических данных полностью прекращается, что не влияет на функционал Лаунчера. Ответы на письменные обращения и запросы субъектов персональных данных направляются в течение 10 рабочих дней с момента получения (ст. 14 ч. 1 ФЗ-152, с возможностью продления не более чем на 5 рабочих дней при направлении мотивированного уведомления). Вам гарантируются следующие права:
            </p>
            <div class="p-4 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-xs text-[var(--xmcl-muted)] space-y-2">
              <div class="font-bold text-[var(--xmcl-ink)]">Права субъекта данных по 152-ФЗ (ст. 14 ФЗ-152):</div>
              <ul class="list-disc list-inside space-y-1">
                <li>Право на получение информации об обработке данных (ч. 7 ст. 14 ФЗ-152): доступ к сведениям о категориях, целях и способах обработки.</li>
                <li>Право на уточнение персональных данных (ч. 1 ст. 14 ФЗ-152): требование исправления неточных или устаревших сведений.</li>
                <li>Право на блокирование и уничтожение данных (ч. 1 ст. 14, ст. 21 ФЗ-152): требование полного удаления обработанных метрик.</li>
                <li>Право на отзыв согласия (ч. 2 ст. 9 ФЗ-152): прекращение обработки метрик путем выключения телеметрии в настройках.</li>
                <li>Право на обжалование действий или бездействия (ст. 17 ФЗ-152): обращение в Роскомнадзор или в судебные органы.</li>
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
              5. Передача данных третьим лицам и ограничения
            </h2>
            <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
              Организация передает псевдонимизированные технические метрики третьим лицам исключительно в следующих случаях:
            </p>
            <ul class="list-disc list-inside text-xs text-[var(--xmcl-muted)] space-y-1">
              <li>Передача псевдонимизированных метрик на серверы Microsoft Azure Application Insights (США) при включенной телеметрии для технического анализа стабильности ПО.</li>
              <li>По обязательному запросу правоохранительных или судебных органов в порядке, предусмотренном действующим законодательством.</li>
              <li>Для защиты прав, имущества и безопасности Организации и пользователей при наличии прямой законной угрозы.</li>
              <li>Организация категорически не продает, не передает и не предоставляет доступ к данным рекламным сетям, брокерам данных или коммерческим компаниям.</li>
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
              6. Сторонние сервисы и трансграничная передача данных (ст. 12 ФЗ-152)
            </h2>
            <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
              При работе Лаунчер взаимодействует со сторонними сервисами. Настоящим информируем о порядке трансграничной передачи псевдонимизированных данных (ст. 12 ФЗ-152):
            </p>
            <div class="pt-2 space-y-2">
              <div class="p-3 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-xs text-[var(--xmcl-muted)]">
                <div class="font-bold text-[var(--xmcl-ink)] mb-1">Microsoft Azure Application Insights</div>
                <div>Сервис сбора псевдонимизированной телеметрии и отчетов об ошибках. Серверы расположены в США. При включенной пользователем телеметрии осуществляется трансграничная передача псевдонимизированных технических данных в соответствии со ст. 12 ФЗ-152 и Microsoft Privacy Statement.</div>
              </div>
              <div class="p-3 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-xs text-[var(--xmcl-muted)]">
                <div class="font-bold text-[var(--xmcl-ink)] mb-1">Microsoft OAuth 2.0</div>
                <div>Протокол авторизации аккаунтов Minecraft/Microsoft. Поддерживается также авторизация через Ely.by и режим Offline. Авторизационные токены хранятся строго локально на устройстве пользователя утилитами шифрования ОС.</div>
              </div>
              <div class="p-3 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-xs text-[var(--xmcl-muted)]">
                <div class="font-bold text-[var(--xmcl-ink)] mb-1">Modrinth API / CurseForge API / Mojang CDN</div>
                <div>Прямые HTTP-запросы к API Modrinth, CurseForge и CDN Mojang для скачивания модов и файлов игры. IP-адрес может обрабатываться данными сервисами в соответствии с их собственными политиками конфиденциальности.</div>
              </div>
              <div class="p-3 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-xs text-[var(--xmcl-muted)]">
                <div class="font-bold text-[var(--xmcl-ink)] mb-1">SignPath.io (SignPath Foundation)</div>
                <div>Цифровая подпись дистрибутивов осуществляется SignPath Foundation. Сервис не получает доступа к данным пользователей.</div>
              </div>
            </div>
            <p class="text-xs text-[var(--xmcl-muted)] leading-relaxed pt-2">
              Уведомление о трансграничной передаче (ст. 12 ФЗ-152): при включенной телеметрии псевдонимизированные технические метрики передаются на серверы Microsoft в Соединенных Штатах Америки.
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
              7. Обеспечение безопасности и защиты данных (ст. 19 ФЗ-152)
            </h2>
            <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
              Организация принимает необходимые правовые, организационные и технические меры для защиты данных от несанкционированного или случайного доступа, уничтожения, изменения, блокирования, копирования и распространения в соответствии со ст. 19 ФЗ-152. Сохранение токенов авторизации на устройстве пользователя защищено системными средствами шифрования:
            </p>
            <div class="p-4 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-xs text-[var(--xmcl-muted)] space-y-2">
              <div class="font-bold text-[var(--xmcl-ink)]">Системные механизмы защиты учетных записей:</div>
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
              8. Защита прав несовершеннолетних пользователей (ст. 9 ФЗ-152)
            </h2>
            <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
              Самостоятельное согласие на обработку данных в соответствии с законодательством РФ предоставляется лицами, достигшими возраста 14 лет. До достижения 14 лет согласие на обработку данных должно быть предоставлено законными представителями (родителями, опекунами). Организация сознательно не осуществляет сбор персональных данных несовершеннолетних до 14 лет без согласия родителя/опекуна. В случае выявления факта предоставления данных ребенком младше 14 лет без согласия родителя, мы удалим любую связанную информацию в течение 10 рабочих дней с момента получения обращения.
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
              9. Порядок изменения Политики Конфиденциальности
            </h2>
            <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
              Организация оставляет за собой право вносить изменения в настоящую Политику Конфиденциальности. При внесении изменений на этой странице публикуется обновленный текст с указанием даты редакции. Продолжение использования Лаунчера после размещения новой редакции означает согласие пользователя с условиями. Дата последней редакции: август 2026 года.
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
              10. Обращения пользователей и контакты
            </h2>
            <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
              По вопросу реализации прав субъекта персональных данных (ст. 14 ФЗ-152), отзыва согласия, удаления данных или направления запросов вы можете связаться с нами по официальным каналам (срок ответа -- не более 10 рабочих дней):
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <a 
                href="https://github.com/Voxelum/x-minecraft-launcher/issues" 
                target="_blank" 
                rel="noopener noreferrer"
                class="p-4 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] hover:border-[var(--xmcl-orange)] transition-colors no-underline block"
              >
                <div class="font-bold text-[var(--xmcl-ink)] text-sm mb-1">GitHub Issue Tracker</div>
                <div class="text-xs text-[var(--xmcl-muted)]">Для официальных запросов на отзыв согласия, удаление данных, реализацию прав субъекта по ФЗ-152 или сообщений об уязвимостях.</div>
              </a>
              <a 
                href="https://discord.gg/W5Jx66g" 
                target="_blank" 
                rel="noopener noreferrer"
                class="p-4 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] hover:border-[var(--xmcl-orange)] transition-colors no-underline block"
              >
                <div class="font-bold text-[var(--xmcl-ink)] text-sm mb-1">XMCL Discord</div>
                <div class="text-xs text-[var(--xmcl-muted)]">Для прямой связи с командой разработчиков XMCL.</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Verification Footer -->
    <div class="rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)] text-center">
      <h2 class="text-xl font-bold text-[var(--xmcl-ink)] mb-3">
        Аудит и Верификация Исходного Кода
      </h2>
      <p class="text-[var(--xmcl-muted)] text-sm max-w-xl mx-auto mb-6 leading-relaxed">
        Исходный код Лаунчера полностью открыт. Вы можете лично проверить механизмы обработки и отсутствия скрытого сбора информации в репозитории на GitHub.
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
