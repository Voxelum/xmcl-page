<template>
  <div class="xmcl-privacy-page max-w-5xl mx-auto px-4 py-8 font-sans">
    <!-- Header Hero -->
    <div class="rounded-xl p-8 md:p-12 mb-10 text-center bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)]">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-[var(--xmcl-ink)] font-bold text-xs uppercase tracking-wider mb-6">
        <svg class="w-4 h-4 text-[var(--xmcl-orange)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        <span>Terms of Privacy</span>
      </div>

      <h1 class="text-3xl md:text-5xl font-black text-[var(--xmcl-ink)] tracking-tight mb-4 leading-tight">
        X Minecraft Launcher Terms of Privacy
      </h1>
      <p class="text-base md:text-lg text-[var(--xmcl-muted)] max-w-3xl mx-auto leading-relaxed font-medium mb-8">
        X Minecraft Launcher (XMCL) is open-source software (MIT License). This document transparently describes what data is collected, how it is processed, where it is transmitted, and how you can opt out.
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
          <span>Age 13+</span>
        </span>
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-[var(--xmcl-ink)]">
          <svg class="w-3.5 h-3.5 text-[var(--xmcl-ink)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span>Opt-Out Telemetry</span>
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
              1. Introduction and Scope
            </h2>
            <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
              This document is the sole legally binding document governing the collection, use, storage, and transfer of data during your use of <a href="https://github.com/Voxelum/x-minecraft-launcher" target="_blank" rel="noopener noreferrer" class="underline hover:text-[var(--xmcl-orange)] transition-colors">X Minecraft Launcher</a> ("Launcher"), developed by the <a href="https://github.com/Voxelum" target="_blank" rel="noopener noreferrer" class="underline hover:text-[var(--xmcl-orange)] transition-colors">Voxelum Developer Community</a> ("Organization").
            </p>
            <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
              The Launcher is 100% open-source software published under the MIT License at <a href="https://github.com/Voxelum/x-minecraft-launcher" target="_blank" rel="noopener noreferrer" class="underline hover:text-[var(--xmcl-orange)] transition-colors">github.com/Voxelum/x-minecraft-launcher</a>. By continuing to use the Launcher after reviewing this document, you accept the terms set forth herein. If you do not agree, you have the right to discontinue use of the Launcher.
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
              2. Legal Basis for Data Processing
            </h2>
            <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
              Diagnostic data processing is carried out on the basis of the Organization's legitimate interest (Article 6(1)(f) GDPR) -- ensuring stability, fixing bugs, and improving Launcher quality. Under GDPR (Recital 26), the device identifier (device ID) and JVM arguments may qualify as pseudonymized data (not fully anonymous), as the device ID is an online identifier and JVM arguments may contain file system paths that include the OS username. The Organization acknowledges this classification and provides users with the ability to fully opt out of telemetry (see Section 4). Retention periods: telemetry data is retained in Azure Application Insights for 90 days from the time of collection, after which it is automatically deleted. Crash reports are retained for up to 90 days for stability analysis. The Organization does not retain telemetry data longer than necessary for the stated purposes (GDPR Article 13(2)(a)).
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
              3. Collection and Use of Information
            </h2>
            <p class="text-xs text-[var(--xmcl-muted)]">
              The Launcher collects diagnostic data to ensure stability and improve product quality. Below is an exhaustive list of all data categories collected.
            </p>
          </div>
        </div>

        <div class="space-y-6 pl-0 md:pl-16">
          <div class="p-4 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] space-y-2">
            <h3 class="text-sm font-bold text-[var(--xmcl-ink)]">
              3.1. Usage Information
            </h3>
            <p class="text-xs text-[var(--xmcl-muted)] leading-relaxed">
              Upon launch, the Launcher may transmit the following information to telemetry servers:
            </p>
            <ul class="list-disc list-inside text-xs text-[var(--xmcl-muted)] space-y-1">
              <li>Minecraft game launch event</li>
              <li>Minecraft game launch timestamp</li>
              <li>User exit event from the Launcher</li>
            </ul>
          </div>

          <div class="p-4 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] space-y-2">
            <h3 class="text-sm font-bold text-[var(--xmcl-ink)]">
              3.2. Additional Diagnostic Information
            </h3>
            <p class="text-xs text-[var(--xmcl-muted)] leading-relaxed">
              In addition to basic usage events, the Launcher may also transmit:
            </p>
            <ul class="list-disc list-inside text-xs text-[var(--xmcl-muted)] space-y-1">
              <li>Minecraft launch arguments (JVM parameters) -- note: this data may contain file system paths that include the OS username</li>
              <li>Total game session duration</li>
              <li>Name of the authentication service used (Microsoft, Ely.by, or Offline)</li>
            </ul>
          </div>

          <div class="p-4 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] space-y-2">
            <h3 class="text-sm font-bold text-[var(--xmcl-ink)]">
              3.3. Device Identification
            </h3>
            <p class="text-xs text-[var(--xmcl-muted)] leading-relaxed">
              The Launcher generates a unique device identifier (device ID) for each machine. Under GDPR (Recital 26) and CCPA, this identifier qualifies as an online identifier and therefore constitutes pseudonymized data. It is used exclusively for telemetry deduplication (distinguishing hardware devices). The Organization does not link this identifier to accounts, names, or other direct personal identifiers.
            </p>
          </div>

          <div class="p-4 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] space-y-2">
            <h3 class="text-sm font-bold text-[var(--xmcl-ink)]">
              3.4. Error Reports (Crash Reports)
            </h3>
            <p class="text-xs text-[var(--xmcl-muted)] leading-relaxed">
              To improve stability, the Launcher may automatically send crash and exception reports. These reports may contain stack traces, OS version, and hardware characteristics. The Organization filters out non-essential errors to prevent excessive data collection.
            </p>
          </div>

          <div class="p-4 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] space-y-2">
            <h3 class="text-sm font-bold text-[var(--xmcl-ink)]">
              3.5. Data NOT Collected
            </h3>
            <p class="text-xs text-[var(--xmcl-muted)] leading-relaxed">
              The Launcher does not collect or transmit the following information:
            </p>
            <ul class="list-disc list-inside text-xs text-[var(--xmcl-muted)] space-y-1">
              <li>Passwords, access tokens, and credentials (stored exclusively locally on the device in encrypted form)</li>
              <li>Email addresses, first and last names, phone numbers</li>
              <li>Microsoft Store, Mojang, or Xbox identifiers</li>
              <li>Contents of files, mods, textures, or player worlds</li>
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
              4. Telemetry Opt-Out and Data Subject Rights
            </h2>
            <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
              You have the right to completely opt out of telemetry data collection. To do so, open the Launcher Settings and disable the telemetry option. Once disabled, no diagnostic data will be transmitted to external servers. Disabling telemetry does not affect Launcher functionality. Under GDPR and CCPA, you are also granted additional rights regarding your data:
            </p>
            <div class="p-4 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-xs text-[var(--xmcl-muted)] space-y-2">
              <div class="font-bold text-[var(--xmcl-ink)]">Your Data Subject Rights (GDPR Articles 15-21, CCPA):</div>
              <ul class="list-disc list-inside space-y-1">
                <li>Right of access (Article 15 GDPR): you have the right to request what data about you is stored.</li>
                <li>Right to rectification (Article 16 GDPR): you have the right to request correction of inaccurate data.</li>
                <li>Right to erasure (Article 17 GDPR, 'right to be forgotten'): you have the right to request deletion of your data.</li>
                <li>Right to data portability (Article 20 GDPR): you have the right to receive your data in a structured, machine-readable format.</li>
                <li>Right to object (Article 21 GDPR): you have the right to object to processing of your data based on legitimate interest.</li>
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
              5. Data Sharing and Disclosure
            </h2>
            <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
              The Organization may disclose collected diagnostic data in the following clearly defined cases:
            </p>
            <ul class="list-disc list-inside text-xs text-[var(--xmcl-muted)] space-y-1">
              <li>Transmission to Microsoft Azure Application Insights servers (USA) for telemetry processing and analysis -- this transfer is governed by the Microsoft Privacy Statement.</li>
              <li>Upon mandatory request from law enforcement or judicial authorities in accordance with applicable law of the relevant jurisdiction.</li>
              <li>To protect the rights, property, or safety of the Organization, Launcher users, or third parties from a genuine threat.</li>
              <li>The Organization does not sell, rent, or transfer collected data to advertisers, data brokers, or any commercial third parties.</li>
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
              6. Third-Party Services and International Data Transfer
            </h2>
            <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
              The Launcher interacts with the following third-party services. Each has its own privacy policy, which we recommend reviewing:
            </p>
            <div class="pt-2 space-y-2">
              <div class="p-3 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-xs text-[var(--xmcl-muted)]">
                <div class="font-bold text-[var(--xmcl-ink)] mb-1">Microsoft Azure Application Insights</div>
                <div>Platform for pseudonymized telemetry collection and crash reporting. Data is processed on Microsoft servers in the USA. Governed by the Microsoft Privacy Statement. Processing of EU residents' data is conducted under EU Standard Contractual Clauses.</div>
              </div>
              <div class="p-3 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-xs text-[var(--xmcl-muted)]">
                <div class="font-bold text-[var(--xmcl-ink)] mb-1">Microsoft OAuth 2.0</div>
                <div>Standard authorization protocol for Minecraft/Microsoft accounts. The Launcher also supports authentication via Ely.by and Offline mode. Authorization tokens are stored locally on the device, encrypted by OS-level mechanisms.</div>
              </div>
              <div class="p-3 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-xs text-[var(--xmcl-muted)]">
                <div class="font-bold text-[var(--xmcl-ink)] mb-1">Modrinth API / CurseForge API / Mojang CDN</div>
                <div>Direct HTTP requests to Modrinth, CurseForge, and Mojang CDN for downloading mods, metadata, and game files. The user's IP address may be processed by these services according to their policies.</div>
              </div>
              <div class="p-3 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-xs text-[var(--xmcl-muted)]">
                <div class="font-bold text-[var(--xmcl-ink)] mb-1">SignPath.io (SignPath Foundation)</div>
                <div>Code signing of Launcher executables is sponsored by SignPath Foundation. SignPath does not receive access to user data.</div>
              </div>
            </div>
            <p class="text-xs text-[var(--xmcl-muted)] leading-relaxed pt-2">
              Note: telemetry data is transmitted to servers located in the United States of America. For users in the EU/EEA, this constitutes international data transfer outside the European Union.
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
              7. Data Security
            </h2>
            <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
              The Organization takes reasonable technical and organizational measures to protect your information from unauthorized access, use, or disclosure. Credentials and authorization tokens are stored in the operating system's encrypted storage:
            </p>
            <div class="p-4 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-xs text-[var(--xmcl-muted)] space-y-2">
              <div class="font-bold text-[var(--xmcl-ink)]">Credential and Token Security Mechanisms:</div>
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
              8. Children's Privacy
            </h2>
            <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
              The Launcher is intended for use exclusively by individuals aged 13 and older. The Organization does not knowingly collect personal data from children under 13. If you are a parent/guardian and discover that a child under 13 is using the Launcher, please contact us immediately. In accordance with COPPA (USA) and Article 8 GDPR (EU), we will delete any associated data within 30 days of receiving a verified request.
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
              9. Changes to These Privacy Terms
            </h2>
            <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
              The Organization reserves the right to update this document. Users will be notified of material changes through updates on this page with the date of last update indicated. Continued use of the Launcher after publication of changes constitutes acceptance of the updated terms. Last updated: August 2026.
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
              10. Contact Us
            </h2>
            <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
              If you have questions, data deletion requests, complaints, or concerns regarding these Terms of Privacy, contact us through official channels:
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <a 
                href="https://github.com/Voxelum/x-minecraft-launcher/issues" 
                target="_blank" 
                rel="noopener noreferrer"
                class="p-4 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] hover:border-[var(--xmcl-orange)] transition-colors no-underline block"
              >
                <div class="font-bold text-[var(--xmcl-ink)] text-sm mb-1">GitHub Issue Tracker</div>
                <div class="text-xs text-[var(--xmcl-muted)]">For data deletion requests, security vulnerability reports, or official complaints.</div>
              </a>
              <a 
                href="https://discord.gg/W5Jx66g" 
                target="_blank" 
                rel="noopener noreferrer"
                class="p-4 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] hover:border-[var(--xmcl-orange)] transition-colors no-underline block"
              >
                <div class="font-bold text-[var(--xmcl-ink)] text-sm mb-1">XMCL Discord</div>
                <div class="text-xs text-[var(--xmcl-muted)]">For direct contact with the core XMCL development team.</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Verification Footer -->
    <div class="rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)] text-center">
      <h2 class="text-xl font-bold text-[var(--xmcl-ink)] mb-3">
        Audit Source Code
      </h2>
      <p class="text-[var(--xmcl-muted)] text-sm max-w-xl mx-auto mb-6 leading-relaxed">
        The full Launcher source code is available for public audit. You can independently verify exactly what data is collected and how it is processed.
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
