<template>
  <div class="xmcl-privacy-page max-w-5xl mx-auto px-4 py-8 font-sans">
    <!-- Header Hero -->
    <div class="rounded-xl p-8 md:p-12 mb-10 text-center bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)]">
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-[var(--xmcl-ink)] font-bold text-xs uppercase tracking-wider mb-6">
        <svg class="w-4 h-4 text-[var(--xmcl-orange)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        <span>プライバシーポリシー（個人情報保護法 APPI）</span>
      </div>

      <h1 class="text-3xl md:text-5xl font-black text-[var(--xmcl-ink)] tracking-tight mb-4 leading-tight">
        X Minecraft Launcher プライバシーポリシー
      </h1>
      <p class="text-base md:text-lg text-[var(--xmcl-muted)] max-w-3xl mx-auto leading-relaxed font-medium mb-8">
        X Minecraft Launcher (XMCL) はオープンソースソフトウェア（MITライセンス）です。本ポリシーは、日本の「個人情報の保護に関する法律（APPI）」に基づき、データの取り扱いについて透明性に説明します。
      </p>

      <!-- Key Badges -->
      <div class="flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-[var(--xmcl-muted)]">
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-[var(--xmcl-ink)]">
          <svg class="w-3.5 h-3.5 text-[var(--xmcl-orange)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
          <span>MIT License | オープンソース</span>
        </span>
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-[var(--xmcl-ink)]">
          <svg class="w-3.5 h-3.5 text-[var(--xmcl-ink)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <span>SignPath.io コード署名</span>
        </span>
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-[var(--xmcl-ink)]">
          <svg class="w-3.5 h-3.5 text-[var(--xmcl-ink)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span>オプトアウト対応（同意の撤回）</span>
        </span>
      </div>
    </div>

    <!-- Structured Sections -->
    <div class="space-y-8 mb-14">
      <!-- Section 1: Overview -->
      <div class="rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)]">
        <h2 class="text-xl font-bold text-[var(--xmcl-ink)] mb-3">1. 概要および適用範囲</h2>
        <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed mb-3">
          本ポリシーは <a href="https://github.com/Voxelum" target="_blank" rel="noopener noreferrer" class="underline hover:text-[var(--xmcl-orange)]">Voxelum</a> 開発コミュニティ（以下「当組織」）が提供する <a href="https://github.com/Voxelum/x-minecraft-launcher" target="_blank" rel="noopener noreferrer" class="underline hover:text-[var(--xmcl-orange)]">X Minecraft Launcher</a>（以下「ランチャー」）におけるデータ処理に適用されます。
        </p>
        <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
          当組織は、日本の「個人情報の保護に関する法律（APPI）」および関連ガイドラインを遵守し、利用者のプライバシー保護に努めます。
        </p>
      </div>

      <!-- Section 2: Data Categories & Retention -->
      <div class="rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)]">
        <h2 class="text-xl font-bold text-[var(--xmcl-ink)] mb-3">2. 取得する情報の項目・利用目的・保存期間</h2>
        <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed mb-4">
          テレメトリが有効な場合に取得される情報は仮名加工情報 / 仮名化データであり、製品の安定性向上およびバグ修正（APPI第17条の利用目的）にのみ使用されます。保存期間は Microsoft Azure にて最大90日間であり、期間経過後は自動的に消去されます。
        </p>
        <div class="space-y-3 text-xs text-[var(--xmcl-muted)]">
          <div class="p-4 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)]">
            <div class="font-bold text-[var(--xmcl-ink)] mb-2 text-sm">2.1 取得する技術診断データ項目：</div>
            <ul class="list-disc list-inside space-y-1">
              <li>Minecraft の起動・終了イベントおよびタイムスタンプ</li>
              <li>JVM 起動引数（※パスに OS ユーザー名が含まれる場合があります）</li>
              <li>ゲームセッションの合計時間</li>
              <li>使用された認証サービスの名称（Microsoft、Ely.by、Offline）</li>
              <li>ハードウェア識別用のデバイス ID（Device ID）</li>
              <li>クラッシュレポート（※テレメトリ有効時のみ自動送信）</li>
            </ul>
          </div>
          <div class="p-4 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)]">
            <div class="font-bold text-[var(--xmcl-ink)] mb-2 text-sm">2.2 取得しない情報：</div>
            <p>パスワード、認証トークン（※OS暗号化領域にのみローカル保存）、氏名、住所、電話番号、メールアドレス、ゲーム内保存データや Mod の中身。</p>
          </div>
        </div>
      </div>

      <!-- Section 3: Foreign Transfer (APPI Art 28 & APEC CBPR) -->
      <div class="rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)]">
        <h2 class="text-xl font-bold text-[var(--xmcl-ink)] mb-3">3. 外国にある第三者への提供（APPI第28条）</h2>
        <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed mb-3">
          テレメトリを有効にした場合、仮名化された診断データは米国にある Microsoft Azure Application Insights サーバへ送信されます。
        </p>
        <p class="text-xs text-[var(--xmcl-muted)] leading-relaxed">
          提供先である Microsoft は APEC CBPR システム認証および標準契約条項（SCC）に準拠した安全管理措置を講じています。利用者はランチャーの設定画面からいつでもテレメトリを無効化（オプトアウト）し、データ送信を停止できます。
        </p>
      </div>

      <!-- Section 4: Security Control Measures (APPI Art 20) -->
      <div class="rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)]">
        <h2 class="text-xl font-bold text-[var(--xmcl-ink)] mb-3">4. 安全管理措置（APPI第20条）</h2>
        <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
          当組織は、取り扱うデータの漏えい、滅失または毀損の防止のため、適切な組織的・技術的安全管理措置を講じています。ログイン認証トークンは OS 標準の暗号化ストレージ（Windows DPAPI、macOS Keychain、Linux Secret Service）にて保護されます。
        </p>
      </div>

      <!-- Section 5: Data Subject Rights (APPI Art 32-35) -->
      <div class="rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)]">
        <h2 class="text-xl font-bold text-[var(--xmcl-ink)] mb-3">5. 保有個人データの開示・訂正・利用停止等の請求（APPI第32条〜第35条）</h2>
        <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed mb-3">
          APPI第32条〜第35条に基づき、ユーザーは自己のデータに関する開示、訂正、追加、削除、利用停止および第三者提供の停止を請求できます。
        </p>
        <p class="text-xs text-[var(--xmcl-muted)] leading-relaxed">
          苦情およびお問い合わせは GitHub Issue または Discord コミュニティにて受け付けます。必要に応じて個人情報保護委員会（PPC）等へのご相談も可能です。
        </p>
      </div>

      <!-- Section 6: Minors -->
      <div class="rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)]">
        <h2 class="text-xl font-bold text-[var(--xmcl-ink)] mb-3">6. 未成年者の保護について</h2>
        <p class="text-sm text-[var(--xmcl-muted)] leading-relaxed">
          未成年者（18歳未満）の方が本ランチャーを利用される場合は、保護者（親権者）の方の同意を得た上でご利用ください。保護者の方からのデータ削除依頼には速やかに対応いたします。
        </p>
      </div>

      <!-- Verification Footer -->
      <div class="rounded-xl p-8 bg-[var(--xmcl-panel)] border border-[var(--xmcl-line)] text-center">
        <h2 class="text-xl font-bold text-[var(--xmcl-ink)] mb-3">ソースコードの検証</h2>
        <p class="text-xs text-[var(--xmcl-muted)] mb-4">透明性を保証するため、すべてのソースコードは公開されています。</p>
        <a href="https://github.com/Voxelum/x-minecraft-launcher" target="_blank" rel="noopener noreferrer" class="px-5 py-2 rounded-lg bg-[var(--xmcl-soft)] border border-[var(--xmcl-line)] text-xs font-semibold text-[var(--xmcl-ink)] no-underline">GitHub リポジトリ</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
