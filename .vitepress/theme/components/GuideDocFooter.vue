<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { lang, page, frontmatter } = useData()

const isDoc = computed(() => {
  const p = page.value.filePath || ''
  if (frontmatter.value.layout === 'home') return false
  return p.includes('guide/') || p.includes('core/') || p.includes('protocol/')
})

const currentLang = computed(() => (lang.value || 'en').toLowerCase())
const isUk = computed(() => currentLang.value.startsWith('uk'))
const isRu = computed(() => currentLang.value.startsWith('ru'))

const t = computed(() => {
  if (isUk.value) {
    return {
      docsErrorTitle: 'Помітили помилку в документації?',
      docsErrorDesc: 'Усі посібники та статті відкриті для редагування спільнотою. Ви можете запропонувати виправлення або додати новий матеріал:',
      docsRepoBtn: 'GitHub (xmcl-page)',
      communityTitle: 'Не знайшли відповіді або гра не працює?',
      communityDesc: 'Якщо документація не допомогла вирішити проблему, зверніться до спільноти або повідомте розробників про баг:',
      discordBtn: 'Discord спільнота',
      issuesBtn: 'GitHub Issues (Лаунчер)',
      redditBtn: 'r/XMCL на Reddit',
    }
  }
  if (isRu.value) {
    return {
      docsErrorTitle: 'Заметили ошибку в документации?',
      docsErrorDesc: 'Все руководства открыты для редактирования сообществом. Вы можете предложить исправление или дополнение в нашем репозитории:',
      docsRepoBtn: 'GitHub (xmcl-page)',
      communityTitle: 'Не нашли ответа или игра не работает?',
      communityDesc: 'Если руководство не помогло решить проблему, обратитесь к сообществу или сообщите об ошибке лаунчера:',
      discordBtn: 'Discord сообщество',
      issuesBtn: 'GitHub Issues (Лаунчер)',
      redditBtn: 'r/XMCL на Reddit',
    }
  }
  return {
    docsErrorTitle: 'Found an error in the docs?',
    docsErrorDesc: 'All guides and articles are open source. You can suggest an edit, report a typo, or contribute directly on GitHub:',
    docsRepoBtn: 'GitHub (xmcl-page)',
    communityTitle: 'Didn’t find an answer or need help?',
    communityDesc: 'If the documentation did not solve your issue, ask the community or report a bug to the developers:',
    discordBtn: 'Discord Community',
    issuesBtn: 'GitHub Issues (Launcher)',
    redditBtn: 'r/XMCL on Reddit',
  }
})
</script>

<template>
  <div v-if="isDoc" class="guide-doc-footer-wrap">
    <div class="guide-doc-footer-grid">
      <!-- Edit & Contribute Box -->
      <div class="guide-footer-card card-docs">
        <div class="card-kicker-row">
          <span class="card-kicker">DOCS // CONTRIBUTION</span>
          <span class="card-tag">PULL REQUESTS</span>
        </div>
        <h3 class="card-heading">{{ t.docsErrorTitle }}</h3>
        <p class="card-description">{{ t.docsErrorDesc }}</p>
        <div class="card-actions">
          <a
            href="https://github.com/voxelum/xmcl-page"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-btn btn-primary"
          >
            <svg class="btn-svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>{{ t.docsRepoBtn }}</span>
            <span class="btn-arrow" aria-hidden="true">+</span>
          </a>
        </div>
      </div>

      <!-- Help & Community Box -->
      <div class="guide-footer-card card-community">
        <div class="card-kicker-row">
          <span class="card-kicker">SUPPORT // REALTIME</span>
          <span class="card-tag">COMMUNITY</span>
        </div>
        <h3 class="card-heading">{{ t.communityTitle }}</h3>
        <p class="card-description">{{ t.communityDesc }}</p>
        <div class="card-actions community-actions">
          <a
            href="https://discord.gg/W5XVwYY7GQ"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-btn btn-discord"
          >
            <svg class="btn-svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.894.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            <span>{{ t.discordBtn }}</span>
          </a>
          <a
            href="https://github.com/voxelum/x-minecraft-launcher/issues"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-btn btn-issues"
          >
            <svg class="btn-svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>{{ t.issuesBtn }}</span>
          </a>
          <a
            href="https://www.reddit.com/r/XMCL/"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-btn btn-reddit"
          >
            <svg class="btn-svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.85-1.64-6.29-1.72l1.3-4.14 4.15.9c.02.94.78 1.7 1.74 1.7 1.02 0 1.85-.83 1.85-1.85S20.5 3 19.48 3c-.76 0-1.42.47-1.7 1.12l-4.58-1c-.2-.04-.42.06-.49.26l-1.5 4.77C8.75 8.24 6.5 8.87 4.83 9.87 4.25 9.1 3.32 8.6 2.25 8.6c-1.65 0-3 1.35-3 3 0 1.12.63 2.1 1.56 2.6-.08.4-.12.82-.12 1.25 0 3.6 4.38 6.5 9.75 6.5s9.75-2.9 9.75-6.5c0-.43-.04-.85-.12-1.25.93-.5 1.56-1.48 1.56-2.6zm-18.66 3c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zm11.3 4.5c-1.68 1.68-4.88 1.68-6.56 0-.08-.08-.08-.22 0-.3l.45-.45c.08-.08.22-.08.3 0 1.2 1.2 3.86 1.2 5.06 0 .08-.08.22-.08.3 0l.45.45c.08.08.08.22 0 .3zm.44-3c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
            </svg>
            <span>{{ t.redditBtn }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.guide-doc-footer-wrap {
  margin-top: 48px;
  padding-top: 32px;
  border-top: 1px solid var(--vp-c-divider, #d8ded7);
  font-family: 'Space Grotesk', -apple-system, sans-serif;
}

:global(html.dark) .guide-doc-footer-wrap {
  border-top-color: var(--vp-c-divider, #334139);
}

.guide-doc-footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 768px) {
  .guide-doc-footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.guide-footer-card {
  background: var(--vp-c-bg-elv, #ffffff);
  border: 1px solid var(--vp-c-divider, #d8ded7);
  box-shadow: 4px 4px 0px var(--vp-c-divider, #17211f);
  padding: 20px 22px;
  display: flex;
  flex-direction: column;
}

:global(html.dark) .guide-footer-card {
  background: #1b241f !important;
  border-color: #334139 !important;
  box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.5);
}

.card-docs {
  border-left: 3px solid #c9f85a;
}

.card-community {
  border-left: 3px solid #ff8060;
}

.card-kicker-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.12em;
}

.card-docs .card-kicker {
  color: #5d9624;
}

:global(html.dark) .card-docs .card-kicker {
  color: #c9f85a;
}

.card-community .card-kicker {
  color: #e45e42;
}

:global(html.dark) .card-community .card-kicker {
  color: #ff8060;
}

.card-tag {
  color: var(--vp-c-text-3, #8e9c94);
}

.card-heading {
  font-size: 17px;
  font-weight: 800;
  line-height: 1.25;
  margin: 0 0 8px;
  color: var(--vp-c-text-1, #17211f);
  letter-spacing: -0.02em;
}

:global(html.dark) .card-heading {
  color: #edf3ed !important;
}

.card-description {
  font-size: 13px;
  line-height: 1.55;
  color: var(--vp-c-text-2, #64706c);
  margin: 0 0 18px;
  flex: 1 1 auto;
}

:global(html.dark) .card-description {
  color: #9aa9a1 !important;
}

.card-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.community-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.footer-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border: 1px solid var(--vp-c-divider, #17211f);
  background: var(--vp-c-bg, #f4f5ef);
  color: var(--vp-c-text-1, #17211f);
  text-decoration: none !important;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  transition: all 140ms ease;
}

:global(html.dark) .footer-btn {
  background: #151d18 !important;
  color: #edf3ed !important;
  border-color: #334139 !important;
}

.footer-btn:hover {
  background: #c9f85a !important;
  color: #17211f !important;
  border-color: #c9f85a !important;
  transform: translate(-2px, -2px);
  box-shadow: 3px 3px 0px var(--vp-c-text-1, #17211f);
}

.btn-primary:hover {
  background: #c9f85a !important;
  color: #17211f !important;
}

.btn-discord:hover {
  background: #5865F2 !important;
  color: #ffffff !important;
  border-color: #5865F2 !important;
}

.btn-reddit:hover {
  background: #FF4500 !important;
  color: #ffffff !important;
  border-color: #FF4500 !important;
}

.btn-svg {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}

.btn-arrow {
  font-weight: 900;
  margin-left: 2px;
}
</style>
