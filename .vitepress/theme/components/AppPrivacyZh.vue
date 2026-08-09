<template>
  <div class="xmcl-privacy-page max-w-5xl mx-auto px-4 py-8 font-sans">
    <!-- Header Hero -->
    <div class="rounded-xl p-8 md:p-12 mb-10 text-center bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)]">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-[var(--xmcl-ink)] font-bold text-xs uppercase tracking-wider mb-6">
        <svg class="w-4 h-4 text-[var(--xmcl-orange)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        <span>个人信息保护政策（PIPL）</span>
      </div>

      <h1 class="text-3xl md:text-5xl font-black text-[var(--xmcl-ink)] tracking-tight mb-4 leading-tight">
        X Minecraft Launcher 个人信息保护政策
      </h1>
      <p class="text-base md:text-lg text-[var(--xmcl-muted)] max-w-3xl mx-auto leading-relaxed font-medium mb-8">
        X Minecraft Launcher (XMCL) 为开源软件（MIT 许可证）。本政策依据《中华人民共和国个人信息保护法》（PIPL）及相关法律法规制定，公开透明地说明我们如何处理、保护您的个人信息与诊断数据。
      </p>

      <!-- Key Badges -->
      <div class="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-[var(--xmcl-muted)]">
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-[var(--xmcl-ink)]">
          <svg class="w-3.5 h-3.5 text-[var(--xmcl-orange)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
          <span>MIT License | 开源软件</span>
        </span>
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-[var(--xmcl-ink)]">
          <svg class="w-3.5 h-3.5 text-[var(--xmcl-ink)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <span>SignPath.io 数字签名</span>
        </span>
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-[var(--xmcl-ink)]">
          <svg class="w-3.5 h-3.5 text-[var(--xmcl-ink)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
          </svg>
          <span>年龄 14+</span>
        </span>
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-[var(--xmcl-ink)]">
          <svg class="w-3.5 h-3.5 text-[var(--xmcl-ink)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span>单独同意与撤回（PIPL 第 15、39 条）</span>
        </span>
      </div>
    </div>

    <!-- 10 Structured Sections -->
    <div class="space-y-8 mb-14">
      <!-- Section 1: Scope -->
      <div class="rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)]">
        <h2 class="text-xl font-bold text-[var(--xmcl-ink)] mb-3">1. 引言与适用范围</h2>
        <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed mb-3">
          本政策适用于由 <a href="https://github.com/Voxelum" target="_blank" rel="noopener noreferrer" class="underline hover:text-[var(--xmcl-orange)]">Voxelum 开源团队</a>（“组织”）维护的 <a href="https://github.com/Voxelum/x-minecraft-launcher" target="_blank" rel="noopener noreferrer" class="underline hover:text-[var(--xmcl-orange)]">X Minecraft Launcher</a>（下称“启动器”）。启动器代码 100% 开源并在 MIT 许可下公开发布。
        </p>
        <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
          依据《中华人民共和国个人信息保护法》（PIPL），我们遵循合法、正当、必要和诚信原则处理数据。在启动器设置中主动开启遥测选项，即表示您就遥测数据的处理及跨境传输给予明确的知情同意。
        </p>
      </div>

      <!-- Section 2: Legal Basis -->
      <div class="rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)]">
        <h2 class="text-xl font-bold text-[var(--xmcl-ink)] mb-3">2. 数据处理的法律依据与保存期限</h2>
        <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
          依据 PIPL 第 13 条第一款第（一）项（个人同意）及第（二）项（履行服务协议所必需），组织处理必要的诊断技术数据。设备标识符（Device ID）与 JVM 启动参数属于去标识化/假名化数据。遥测数据在微软 Azure Application Insights 中保存最多 90 天，到期后自动永久删除（PIPL 第 19 条）。
        </p>
      </div>

      <!-- Section 3: Data Categories -->
      <div class="rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)]">
        <h2 class="text-xl font-bold text-[var(--xmcl-ink)] mb-3">3. 收集的数据类别与不收集的声明</h2>
        <div class="space-y-4 text-xs text-[var(--xmcl-muted)]">
          <div class="p-4 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)]">
            <div class="font-bold text-[var(--xmcl-ink)] mb-2 text-sm">3.1 基础使用信息及诊断指标（仅在开启遥测时传输）：</div>
            <ul class="list-disc list-inside space-y-1">
              <li>Minecraft 启动事件、启动时间戳及退出事件；</li>
              <li>JVM 启动参数（警告：路径可能包含系统用户名，属于去标识化数据）；</li>
              <li>游戏会话总时长；</li>
              <li>所使用的身份验证服务名称（Microsoft、Ely.by 或 Offline）；</li>
              <li>设备识别码（Device ID，用于去重计算）。</li>
            </ul>
          </div>

          <div class="p-4 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)]">
            <div class="font-bold text-[var(--xmcl-ink)] mb-2 text-sm">3.2 崩溃报告（Crash Reports）：</div>
            <p>崩溃报告仅在您主动开启遥测时自动发送，包含堆栈轨迹（Stack trace）、操作系统版本及硬件参数，绝不包含私密个人数据。</p>
          </div>

          <div class="p-4 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)]">
            <div class="font-bold text-[var(--xmcl-ink)] mb-2 text-sm">3.3 绝不收集的数据：</div>
            <ul class="list-disc list-inside space-y-1">
              <li>密码、访问 Token（仅使用系统加密机制本地存储）；</li>
              <li>真实姓名、身份证号、手机号、电子邮件；</li>
              <li>Microsoft Store、Mojang 或 Xbox 个人账号标识；</li>
              <li>用户文件内容、Mod、材质包或游戏存档。</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Section 4: Data Rights -->
      <div class="rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)]">
        <h2 class="text-xl font-bold text-[var(--xmcl-ink)] mb-3">4. 个人信息主体权利与撤回同意（PIPL 第 15、44-47 条）</h2>
        <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed mb-3">
          您随时有权撤回同意。在启动器设置中关闭“遥测”开关后，所有诊断数据传输立即完全终止，不影响启动器任何核心功能。
        </p>
        <div class="p-4 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-xs text-[var(--xmcl-muted)] space-y-2">
          <div class="font-bold text-[var(--xmcl-ink)]">根据 PIPL 第 44-47 条，您享有以下权利（请求将在 15 个工作日内答复）：</div>
          <ul class="list-disc list-inside space-y-1">
            <li>知情权与决定权（第 44 条）；</li>
            <li>查阅、复制权（第 45 条）；</li>
            <li>更正、补充权（第 46 条）；</li>
            <li>删除权（第 47 条）。</li>
          </ul>
        </div>
      </div>

      <!-- Section 5: Cross-Border Data Transfer -->
      <div class="rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)]">
        <h2 class="text-xl font-bold text-[var(--xmcl-ink)] mb-3">5. 跨境提供个人信息单独同意说明（PIPL 第 38、39 条）</h2>
        <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed mb-3">
          当您在设置中开启遥测选项时，即代表您给予<strong>单独同意</strong>，允许将去标识化的技术诊断指标跨境传输至微软 Azure Application Insights（位于美国）服务器进行处理。
        </p>
        <p class="text-xs text-[var(--xmcl-muted)] leading-relaxed">
          传输过程符合 PIPL 第 38 条安全标准及标准合同条款（SCC），并全程使用 TLS 高强度加密。组织绝不出售、出租或向商业广告商提供任何数据。
        </p>
      </div>

      <!-- Section 6: Children Protection -->
      <div class="rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)]">
        <h2 class="text-xl font-bold text-[var(--xmcl-ink)] mb-3">6. 未成年人个人信息保护（PIPL 第 31 条，14 周岁）</h2>
        <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
          根据 PIPL 第 31 条，不满 14 周岁的未成年人个人信息属于敏感个人信息。启动器面向 14 周岁及以上用户。不满 14 周岁的未成年人须获得监护人明确同意。若监护人发现未成年人未经同意提供数据，联系我们后将在 10 个工作日内予以删除。
        </p>
      </div>

      <!-- Section 7: Contact Channels -->
      <div class="rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)]">
        <h2 class="text-xl font-bold text-[var(--xmcl-ink)] mb-3">7. 联系方式与权利响应渠道（PIPL 第 50 条）</h2>
        <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed mb-4">
          为保障中国大陆用户的快捷沟通，您可通过以下无障碍渠道提交个人信息权利请求：
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a 
            href="https://github.com/Voxelum/x-minecraft-launcher/issues" 
            target="_blank" 
            rel="noopener noreferrer"
            class="p-4 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] hover:border-[var(--xmcl-orange)] transition-colors no-underline block"
          >
            <div class="font-bold text-[var(--xmcl-ink)] text-sm mb-1">GitHub Issue 提交渠道</div>
            <div class="text-xs text-[var(--xmcl-muted)]">官方 Issue 反馈，用于提交删除、查阅与行使 PIPL 权利请求。</div>
          </a>
          <a 
            href="https://discord.gg/W5Jx66g" 
            target="_blank" 
            rel="noopener noreferrer"
            class="p-4 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] hover:border-[var(--xmcl-orange)] transition-colors no-underline block"
          >
            <div class="font-bold text-[var(--xmcl-ink)] text-sm mb-1">XMCL 社区频道</div>
            <div class="text-xs text-[var(--xmcl-muted)]">开发者直接沟通社区（需网络直连）。</div>
          </a>
        </div>
      </div>

      <!-- Verification Footer -->
      <div class="rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)] text-center">
        <h2 class="text-xl font-bold text-[var(--xmcl-ink)] mb-3">源代码公开审查</h2>
        <p class="text-xs text-[var(--xmcl-muted)] mb-4">启动器代码完全开源，您可在 GitHub 上自由审查遥测逻辑与数据安全。</p>
        <a href="https://github.com/Voxelum/x-minecraft-launcher" target="_blank" rel="noopener noreferrer" class="px-5 py-2 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-xs font-semibold text-[var(--xmcl-ink)] no-underline">GitHub 仓库</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
