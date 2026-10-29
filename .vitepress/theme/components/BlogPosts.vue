<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData } from 'vitepress'
import usePosts from '../composables/usePosts'
import BlogPost from './BlogPost.vue'
import logo from '../../../public/logo.png'

const { allPosts: posts, currentLocale } = usePosts()
const { page } = useData()

const activeCategory = ref('All')

const isEn = computed(() => {
  const loc = (currentLocale?.value || 'en').toLowerCase()
  return loc === 'en' || loc.startsWith('en-')
})

const isUk = computed(() => {
  const loc = (currentLocale?.value || '').toLowerCase()
  return loc === 'uk' || loc.startsWith('uk-')
})

const isRu = computed(() => {
  const loc = (currentLocale?.value || '').toLowerCase()
  return loc === 'ru' || loc.startsWith('ru-')
})

interface BlogNoticeTranslation {
  badge: string
  title: string
  desc: string
  flag: 'uk' | 'en'
}

const blogNoticeMap: Record<string, BlogNoticeTranslation> = {
  ru: {
    badge: 'УКРАИНСКИЙ ЯЗЫК',
    title: 'Публикации блога выходят на украинском языке',
    desc: 'Все статьи, технические обзоры и релизы XMCL публикуются на украинском языке.',
    flag: 'uk'
  },
  de: {
    badge: 'ENGLISCH',
    title: 'Blogbeiträge werden auf Englisch veröffentlicht',
    desc: 'Technische Analysen zur Launcher-Architektur, P2P-Netzwerk-Updates und Versionshinweise sind auf Englisch verfasst.',
    flag: 'en'
  },
  fr: {
    badge: 'ANGLAIS',
    title: 'Les articles du blog sont publiés en anglais',
    desc: 'Les analyses approfondies de l\'architecture, les mises à jour P2P et les notes de version sont rédigées en anglais.',
    flag: 'en'
  },
  es: {
    badge: 'INGLÉS',
    title: 'Las publicaciones del blog se publican en inglés',
    desc: 'Los análisis técnicos de arquitectura, novedades de red P2P y notas de lanzamiento oficiales están escritos en inglés.',
    flag: 'en'
  },
  pl: {
    badge: 'ANGIELSKI',
    title: 'Wpisy na blogu są publikowane w języku angielskim',
    desc: 'Artykuły techniczne, analizy architektury oraz oficjalne informacje o wydaniach są tworzone w języku angielskim.',
    flag: 'en'
  },
  it: {
    badge: 'INGLESE',
    title: 'Gli articoli del blog sono pubblicati in inglese',
    desc: 'Gli approfondimenti sull\'architettura del launcher, gli aggiornamenti P2P e le note di rilascio sono redatti in inglese.',
    flag: 'en'
  },
  pt: {
    badge: 'INGLÊS',
    title: 'As publicações do blog são lançadas em inglês',
    desc: 'As análises de arquitetura do inicializador, novidades de rede P2P e notas de versão oficiais são escritas em inglês.',
    flag: 'en'
  },
  zh: {
    badge: '英文文章',
    title: '博客文章以英文发布',
    desc: '启动器架构深度解析、P2P 联机网络更新和官方发布日志均以英文撰写。',
    flag: 'en'
  },
  'zh-tw': {
    badge: '英文文章',
    title: '部落格文章以英文發布',
    desc: '啟動器架構深度解析、P2P 連線更新及官方版本說明皆以英文撰寫。',
    flag: 'en'
  },
  jp: {
    badge: '英語記事',
    title: 'ブログ記事は英語で公開されています',
    desc: 'ランチャーのアーキテクチャ解説、P2Pマルチプレイ更新、公式リリースノートは英語で執筆されています。',
    flag: 'en'
  },
  ko: {
    badge: '영어 포스트',
    title: '블로그 글은 영어로 발행됩니다',
    desc: '런처 아키텍처 심층 분석, P2P 멀티플레이 업데이트 및 공식 릴리스 정보는 영어로 작성됩니다.',
    flag: 'en'
  },
  tr: {
    badge: 'İNGİLİZCE',
    title: 'Blog yazıları İngilizce olarak yayınlanmaktadır',
    desc: 'Başlatıcı mimari incelemeleri, P2P ağ güncellemeleri ve resmi sürüm notları İngilizce olarak yazılmaktadır.',
    flag: 'en'
  },
  vi: {
    badge: 'TIẾNG ANH',
    title: 'Các bài viết blog được xuất bản bằng tiếng Anh',
    desc: 'Các bài phân tích kiến trúc trình khởi chạy, cập nhật mạng P2P và ghi chú phát hành được viết bằng tiếng Anh.',
    flag: 'en'
  },
  hi: {
    badge: 'अंग्रेजी',
    title: 'ब्लॉग पोस्ट अंग्रेजी में प्रकाशित किए जाते हैं',
    desc: 'लॉन्चर आर्किटेक्चर विश्लेषण, P2P नेटवर्क अपडेट और आधिकारिक रिलीज़ नोट्स अंग्रेजी में लिखे गए हैं।',
    flag: 'en'
  },
  bn: {
    badge: 'ইংরেজি',
    title: 'ব্লগ পোস্টগুলো ইংরেজিতে প্রকাশিত হয়',
    desc: 'লঞ্চার আর্কিটেকচার বিশ্লেষণ, পি২পি নেটওয়ার্ক আপডেট এবং অফিশিয়াল রিলিজ নোট ইংরেজিতে লিখিত।',
    flag: 'en'
  },
  jv: {
    badge: 'BASA INGGRIS',
    title: 'Tulisan blog diterbitake nganggo basa Inggris',
    desc: 'Cathetan arsitektur launcher, pembaruan jaringan P2P, lan rilis resmi ditulis nganggo basa Inggris.',
    flag: 'en'
  },
  lol: {
    badge: 'HOOMAN ENGLIZH',
    title: 'BLOG POSTZ R WRITTN IN ENGLIZH',
    desc: 'Deep divez, P2P multiplayr cat magic, n release notez r crafted in hooman English.',
    flag: 'en'
  },
  ar: {
    badge: 'الإنجليزية',
    title: 'تُنشر مقالات المدونة باللغة الإنجليزية',
    desc: 'تتم كتابة تحليلات بنية المشغل وتحديثات شبكة P2P وملاحظات الإصدار باللغة الإنجليزية.',
    flag: 'en'
  },
  kk: {
    badge: 'АҒЫЛШЫНША',
    title: 'Блог жазбалары ағылшын тілінде жарияланады',
    desc: 'Лаунчер архитектурасы, P2P желілік жаңартулары және ресми шығарылым жазбалары ағылшын тілінде жазылған.',
    flag: 'en'
  },
  be: {
    badge: 'АНГЛІЙСКАЯ',
    title: 'Публікацыі блога выходзяць на англійскай мове',
    desc: 'Тэхнічныя агляды архітэктуры, абнаўленні P2P-сетак і афіцыйныя нататкі рэлізаў пішуцца па-англійску.',
    flag: 'en'
  }
}

const currentNotice = computed<BlogNoticeTranslation>(() => {
  const loc = (currentLocale?.value || '').toLowerCase()
  return blogNoticeMap[loc] || blogNoticeMap[loc.split('-')[0]] || blogNoticeMap.de
})

const categories = computed(() => {
  const cats = new Set<string>()
  cats.add('All')
  posts.value.forEach(p => {
    if (p.category) cats.add(p.category)
    else if (p.data?.category) cats.add(p.data.category)
  })
  return Array.from(cats)
})

const filteredPosts = computed(() => {
  if (activeCategory.value === 'All') {
    return posts.value
  }
  return posts.value.filter(p => {
    const cat = p.category || p.data?.category || 'Article'
    return cat.toLowerCase() === activeCategory.value.toLowerCase()
  })
})

const featuredPost = computed(() => {
  return filteredPosts.value[0]
})

const remainingPosts = computed(() => {
  return filteredPosts.value.slice(1)
})
</script>

<template>
  <div class="blog-shell">
    <!-- Hero Banner -->
    <section class="blog-hero">
      <div class="blog-hero-grid" aria-hidden="true"></div>
      <div class="blog-hero-copy">
        <div class="blog-kicker">
          <img :src="logo" alt="" width="24" height="24" />
          <span>XMCL Engineering & Community Journal</span>
        </div>
        <h1>{{ page?.title || 'XMCL Journal' }}</h1>
        <p>{{ page?.description || 'Deep dives into launcher architecture, P2P networking, security updates, and community guides.' }}</p>
        <div class="blog-hero-meta">
          <span>{{ posts.length }} Dispatches</span>
          <span class="blog-meta-dot"></span>
          <span>By XMCL Core Team</span>
          <span class="blog-meta-dot"></span>
          <span>Open Source</span>
        </div>
      </div>
      <div class="blog-hero-note">
        <span class="blog-note-label">BUILD · PLAY · CONNECT</span>
        <strong>Engineering notes, release deep-dives, and multiplayer infrastructure.</strong>

        <!-- Side Box for Ukrainian locale -->
        <div v-if="isUk" class="blog-side-lang-box">
          <div class="side-lang-badge">
            <span class="side-lang-flags">🇺🇦 🇬🇧</span>
            <span>ДВОМОВНІ МАТЕРІАЛИ</span>
          </div>
          <strong class="side-lang-title">Українсько-англійські пости</strong>
          <p class="side-lang-desc">
            Частина публікацій виходить українською мовою, а решта статей та релізів — в оригіналі англійською.
          </p>
        </div>

        <a href="https://github.com/Voxelum/x-minecraft-launcher" target="_blank" rel="noopener" class="blog-hero-cta">
          Star on GitHub ↗
        </a>
      </div>
    </section>

    <!-- Blog Feed Section -->
    <section class="blog-feed">
      <!-- Full-width Language Notice Banner: shown on other languages, hidden on en and uk -->
      <div
        v-if="!isEn && !isUk && currentNotice"
        class="blog-lang-notice"
        :class="currentNotice.flag === 'uk' ? 'notice-uk-style' : 'notice-en-style'"
      >
        <div class="notice-badge">
          <!-- Flag SVG: Ukraine flag if uk, UK flag if en -->
          <svg v-if="currentNotice.flag === 'uk'" class="notice-flag" viewBox="0 0 640 480" width="18" height="13" aria-hidden="true">
            <path fill="#0057b7" d="M0 0h640v240H0z"/>
            <path fill="#ffd700" d="M0 240h640v240H0z"/>
          </svg>
          <svg v-else class="notice-flag" viewBox="0 0 640 480" width="18" height="13" aria-hidden="true">
            <path fill="#012169" d="M0 0h640v480H0z"/>
            <path fill="#fff" d="m75 0 245 180L565 0h75v60L435 240l205 180v60h-75L320 300 75 480H0v-60l205-180L0 60V0h75z"/>
            <path fill="#c8102e" d="m424 288 216 156v36L380 288h44zm-208-96L0 36V0l260 192h-44zm260 0L640 48V0L396 192h80zM0 444l216-156h44L20 480H0v-36z"/>
            <path fill="#fff" d="M240 0h160v480H240zM0 160h640v160H0z"/>
            <path fill="#c8102e" d="M272 0h96v480h-96zM0 192h640v96H0z"/>
          </svg>
          <span>{{ currentNotice.badge }}</span>
        </div>

        <div class="notice-body">
          <strong class="notice-title">{{ currentNotice.title }}</strong>
          <p class="notice-desc">{{ currentNotice.desc }}</p>
        </div>
      </div>

      <!-- Category Filter Bar -->
      <div class="filter-bar">
        <div class="filter-tabs" role="tablist">
          <button
            v-for="cat in categories"
            :key="cat"
            type="button"
            class="filter-pill"
            :class="{ active: activeCategory === cat }"
            @click="activeCategory = cat"
          >
            {{ cat }}
            <span v-if="cat === 'All'" class="filter-count">{{ posts.length }}</span>
          </button>
        </div>

        <!-- Optional subtle indicator on UK locale next to filter tabs -->
        <div v-if="isUk" class="filter-side-badge">
          <span class="filter-badge-flags">🇺🇦 🇬🇧</span>
          <span>Статті українською та англійською</span>
        </div>
      </div>

      <!-- Feed Grid -->
      <div v-if="filteredPosts.length > 0" class="blog-grid">
        <!-- Spotlight Featured Post if on All -->
        <BlogPost
          v-if="featuredPost"
          :post="featuredPost"
          :featured="activeCategory === 'All' && remainingPosts.length > 0"
        />

        <!-- Remaining Posts -->
        <BlogPost
          v-for="post in remainingPosts"
          :key="`${post.locale}-${post.href}`"
          :post="post"
        />
      </div>

      <!-- Empty State -->
      <div v-else class="empty-feed">
        <p>No dispatches found under "{{ activeCategory }}".</p>
        <button type="button" class="reset-filter-btn" @click="activeCategory = 'All'">
          View all dispatches
        </button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.blog-shell {
  --blog-ink: var(--xmcl-ink, #17211f);
  --blog-muted: var(--xmcl-muted, #64706c);
  --blog-paper: var(--xmcl-paper, #f4f5ef);
  --blog-panel: var(--xmcl-panel, #ffffff);
  --blog-soft: var(--xmcl-soft, #e9ece4);
  --blog-line: var(--xmcl-line, #d8ded7);
  --blog-lime: var(--xmcl-lime, #c9f85a);
  --blog-orange: var(--xmcl-orange, #e45e42);
  background: var(--blog-paper);
  color: var(--blog-ink);
  font-family: 'Space Grotesk', 'Avenir Next', 'Segoe UI', sans-serif;
  margin: 0 auto;
  max-width: 1440px;
}

.blog-hero {
  align-items: end;
  background: var(--blog-paper);
  border-bottom: 1px solid var(--blog-line);
  display: grid;
  gap: 48px;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 0.42fr);
  min-height: 380px;
  overflow: hidden;
  padding: 72px clamp(24px, 7vw, 112px) 56px;
  position: relative;
}

.blog-hero-grid {
  background-image: linear-gradient(to right, color-mix(in srgb, var(--blog-ink) 7%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--blog-ink) 7%, transparent) 1px, transparent 1px);
  background-size: 56px 56px;
  inset: 0;
  mask-image: linear-gradient(to bottom, black, transparent 92%);
  pointer-events: none;
  position: absolute;
}

.blog-hero-copy, .blog-hero-note { position: relative; z-index: 1; }
.blog-hero-copy { max-width: 760px; }
.blog-kicker { align-items: center; color: var(--blog-muted); display: flex; font-size: 11px; font-weight: 700; gap: 10px; letter-spacing: 0.12em; text-transform: uppercase; }
.blog-kicker img { height: 24px; object-fit: contain; width: 24px; }
.blog-hero h1 { font-size: clamp(44px, 6vw, 82px); font-weight: 800; letter-spacing: -0.05em; line-height: 0.98; margin: 20px 0 16px; max-width: 780px; }
.blog-hero-copy > p { color: var(--blog-muted); font-size: clamp(16px, 2vw, 19px); line-height: 1.6; margin: 0; max-width: 650px; }
.blog-hero-meta { align-items: center; color: var(--blog-orange); display: flex; font-size: 12px; font-weight: 700; gap: 12px; margin-top: 24px; text-transform: uppercase; }
.blog-meta-dot { background: var(--blog-orange); border-radius: 50%; height: 5px; width: 5px; }

.blog-hero-note { align-self: end; border-left: 1px solid var(--blog-line); display: flex; flex-direction: column; gap: 14px; padding: 12px 0 4px 28px; }
.blog-note-label { color: var(--blog-orange); font-size: 10px; font-weight: 700; letter-spacing: 0.1em; }
.blog-hero-note strong { font-size: 19px; letter-spacing: -0.02em; line-height: 1.3; max-width: 280px; }

/* Side Window for Ukrainian Locale */
.blog-side-lang-box {
  background: color-mix(in srgb, #0057b7 6%, var(--blog-panel));
  border: 1px solid color-mix(in srgb, #0057b7 30%, var(--blog-line));
  border-left: 3px solid #0057b7;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 6px 0 4px;
  padding: 12px 14px;
}

html.dark .blog-side-lang-box {
  background: color-mix(in srgb, #0057b7 14%, var(--blog-panel));
  border-color: color-mix(in srgb, #0057b7 45%, var(--blog-line));
  border-left: 3px solid #3a88fe;
}

.side-lang-badge {
  align-items: center;
  color: #0057b7;
  display: flex;
  font-size: 10px;
  font-weight: 800;
  gap: 6px;
  letter-spacing: 0.08em;
}

html.dark .side-lang-badge {
  color: #60a5fa;
}

.side-lang-flags {
  font-size: 13px;
}

.side-lang-title {
  color: var(--blog-ink);
  font-size: 13.5px;
  font-weight: 700;
  line-height: 1.3;
}

.side-lang-desc {
  color: var(--blog-muted);
  font-size: 12px;
  line-height: 1.5;
  margin: 0;
}

.blog-hero-cta {
  align-items: center;
  color: var(--blog-ink);
  display: inline-flex;
  font-size: 13px;
  font-weight: 700;
  gap: 4px;
  margin-top: 4px;
  text-decoration: none;
}
.blog-hero-cta:hover { color: var(--blog-orange); }

/* Feed Section */
.blog-feed { padding: 48px clamp(24px, 7vw, 112px) 120px; }

/* Language Notice Banner */
.blog-lang-notice {
  align-items: flex-start;
  background: var(--blog-panel);
  border: 1px solid var(--blog-line);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 28px;
  padding: 16px 22px;
  position: relative;
  transition: border-color 0.2s ease, background 0.2s ease;
}

@media (min-width: 700px) {
  .blog-lang-notice {
    align-items: center;
    flex-direction: row;
    gap: 18px;
  }
}

.blog-lang-notice.notice-uk-style {
  border-left: 4px solid #0057b7;
  background: color-mix(in srgb, #0057b7 4%, var(--blog-panel));
}

.blog-lang-notice.notice-en-style {
  border-left: 4px solid var(--blog-lime);
  background: color-mix(in srgb, var(--blog-lime) 4%, var(--blog-panel));
}

.notice-badge {
  align-items: center;
  background: var(--blog-soft);
  border: 1px solid var(--blog-line);
  border-radius: 999px;
  color: var(--blog-ink);
  display: inline-flex;
  font-size: 11px;
  font-weight: 800;
  gap: 8px;
  letter-spacing: 0.06em;
  padding: 5px 12px;
  white-space: nowrap;
}

.notice-flag {
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
}

.notice-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 3px;
}

.notice-title {
  color: var(--blog-ink);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.notice-desc {
  color: var(--blog-muted);
  font-size: 13px;
  line-height: 1.5;
  margin: 0;
}

.filter-bar {
  align-items: center;
  border-bottom: 1px solid var(--blog-line);
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  margin-bottom: 36px;
  padding-bottom: 20px;
}

.filter-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.filter-pill {
  align-items: center;
  background: var(--blog-panel);
  border: 1px solid var(--blog-line);
  border-radius: 999px;
  color: var(--blog-muted);
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 13px;
  font-weight: 700;
  gap: 8px;
  padding: 8px 18px;
  transition: all 150ms ease;
}

.filter-pill:hover {
  border-color: var(--blog-ink);
  color: var(--blog-ink);
}

.filter-pill.active {
  background: var(--blog-ink);
  border-color: var(--blog-ink);
  color: var(--blog-paper);
}

.filter-count {
  background: color-mix(in srgb, var(--blog-paper) 20%, transparent);
  border-radius: 999px;
  font-size: 11px;
  padding: 1px 6px;
}

.filter-side-badge {
  align-items: center;
  background: var(--blog-panel);
  border: 1px solid var(--blog-line);
  border-radius: 999px;
  color: var(--blog-muted);
  display: inline-flex;
  font-size: 12px;
  font-weight: 600;
  gap: 8px;
  padding: 6px 14px;
}

.filter-badge-flags {
  font-size: 13px;
}

.blog-grid {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.empty-feed {
  align-items: center;
  background: var(--blog-panel);
  border: 1px dashed var(--blog-line);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 64px 20px;
  text-align: center;
}

.reset-filter-btn {
  background: var(--blog-ink);
  border: 0;
  border-radius: 6px;
  color: var(--blog-paper);
  cursor: pointer;
  font-family: inherit;
  font-size: 13px;
  font-weight: 700;
  padding: 8px 18px;
}

/* Dark Mode Overrides */
html.dark .blog-shell {
  --blog-ink: #edf3ed;
  --blog-muted: #9aa9a1;
  --blog-paper: #101612;
  --blog-panel: #1b241f;
  --blog-soft: #151d18;
  --blog-line: #334139;
  --blog-lime: #c9f85a;
  --blog-orange: #ff8060;
}

html.dark .blog-lang-notice.notice-uk-style {
  background: color-mix(in srgb, #0057b7 12%, var(--blog-panel));
  border-color: color-mix(in srgb, #0057b7 40%, var(--blog-line));
  border-left: 4px solid #3a88fe;
}

html.dark .blog-lang-notice.notice-en-style {
  background: color-mix(in srgb, var(--blog-lime) 8%, var(--blog-panel));
  border-color: color-mix(in srgb, var(--blog-lime) 30%, var(--blog-line));
  border-left: 4px solid var(--blog-lime);
}

html.dark .filter-side-badge {
  background: var(--blog-soft);
  border-color: color-mix(in srgb, #0057b7 35%, var(--blog-line));
  color: var(--blog-ink);
}

html.dark .blog-hero-meta,
html.dark .blog-note-label {
  color: var(--blog-lime);
}

html.dark .blog-meta-dot {
  background: var(--blog-lime);
}

html.dark .filter-pill.active {
  background: var(--blog-lime);
  border-color: var(--blog-lime);
  color: #17211f;
}

@media (max-width: 800px) {
  .blog-hero { align-items: start; grid-template-columns: 1fr; min-height: auto; padding-top: 52px; }
  .blog-hero-note { border-left: 0; border-top: 1px solid var(--blog-line); padding: 20px 0 0; }
  .filter-bar { flex-direction: column; align-items: flex-start; }
  .blog-grid { grid-template-columns: 1fr; }
}

@media (max-width: 560px) {
  .blog-hero { padding: 40px 20px 40px; }
  .blog-hero h1 { font-size: 46px; }
  .blog-feed { padding: 36px 20px 60px; }
}
</style>
