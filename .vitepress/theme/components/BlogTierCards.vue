<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { site, lang } = useData()

const isUk = computed(() => lang.value === 'uk' || (typeof window !== 'undefined' && window.location.pathname.includes('/uk/')))

const plans = computed(() => {
  if (isUk.value) {
    return [
      {
        id: 'home',
        name: 'Together Home',
        eyebrow: 'Локальний ПК',
        price: '$2.99',
        period: '/ міс',
        subPrice: 'Для прямої гри з друзями',
        features: [
          { icon: '🌐', text: '20 GB швидкісного релею' },
          { icon: '⚡', text: '300+ локацій Cloudflare' },
          { icon: '🤖', text: 'AI-помічник для краш-логів' },
          { icon: '💻', text: 'Хостинг на власному ПК' }
        ],
        btnText: 'Дізнатися більше →',
        recommended: false
      },
      {
        id: 'camp',
        name: 'Together Camp',
        eyebrow: '2–4 Гравці',
        price: '$4',
        period: '/ міс',
        subPrice: '+ $0.06 / година гри',
        features: [
          { icon: '💾', text: '4 GiB RAM · 2/4 vCPU' },
          { icon: '🗄️', text: '32 GiB швидкого NVMe' },
          { icon: '⏸️', text: 'Пауза в 1 клік (без переплат)' },
          { icon: '🤖', text: 'AI-помічник включено' }
        ],
        btnText: 'Вибрати Camp →',
        recommended: false
      },
      {
        id: 'lodge',
        name: 'Together Lodge',
        eyebrow: 'Рекомендовано · 4–6 Гравців',
        price: '$6',
        period: '/ міс',
        subPrice: '+ $0.09 / година гри',
        features: [
          { icon: '🚀', text: '6 GiB RAM · 3/6 vCPU' },
          { icon: '🗄️', text: '48 GiB швидкого NVMe' },
          { icon: '🎮', text: 'Для важких збірок і шейдерів' },
          { icon: '🤖', text: 'AI-помічник включено' }
        ],
        btnText: 'Вибрати Lodge →',
        recommended: true
      },
      {
        id: 'village',
        name: 'Together Village',
        eyebrow: '6–10 Гравців',
        price: '$8',
        period: '/ міс',
        subPrice: '+ $0.12 / година гри',
        features: [
          { icon: '🏰', text: '8 GiB RAM · 4/8 vCPU' },
          { icon: '🗄️', text: '64 GiB швидкого NVMe' },
          { icon: '⚡', text: 'Максимальна продуктивність' },
          { icon: '🤖', text: 'AI-помічник включено' }
        ],
        btnText: 'Вибрати Village →',
        recommended: false
      }
    ]
  }

  return [
    {
      id: 'home',
      name: 'Together Home',
      eyebrow: 'Friend-Hosted PC',
      price: '$2.99',
      period: '/ month',
      subPrice: 'Relay-assisted P2P multiplayer',
      features: [
        { icon: '🌐', text: '20 GB high-speed relay' },
        { icon: '⚡', text: '300+ global edge locations' },
        { icon: '🤖', text: 'Complimentary AI Copilot' },
        { icon: '💻', text: 'Runs on your own computer' }
      ],
      btnText: 'Learn More →',
      recommended: false
    },
    {
      id: 'camp',
      name: 'Together Camp',
      eyebrow: '2–4 Players',
      price: '$4',
      period: '/ month',
      subPrice: '+ $0.06 / running hour',
      features: [
        { icon: '💾', text: '4 GiB RAM · 2/4 vCPU' },
        { icon: '🗄️', text: '32 GiB persistent NVMe' },
        { icon: '⏸️', text: 'Instant pause · zero idle cost' },
        { icon: '🤖', text: 'Complimentary AI Copilot' }
      ],
      btnText: 'Choose Camp →',
      recommended: false
    },
    {
      id: 'lodge',
      name: 'Together Lodge',
      eyebrow: 'Recommended · 4–6 Players',
      price: '$6',
      period: '/ month',
      subPrice: '+ $0.09 / running hour',
      features: [
        { icon: '🚀', text: '6 GiB RAM · 3/6 vCPU' },
        { icon: '🗄️', text: '48 GiB persistent NVMe' },
        { icon: '🎮', text: 'Tuned for heavy modpacks' },
        { icon: '🤖', text: 'Complimentary AI Copilot' }
      ],
      btnText: 'Choose Lodge →',
      recommended: true
    },
    {
      id: 'village',
      name: 'Together Village',
      eyebrow: '6–10 Players',
      price: '$8',
      period: '/ month',
      subPrice: '+ $0.12 / running hour',
      features: [
        { icon: '🏰', text: '8 GiB RAM · 4/8 vCPU' },
        { icon: '🗄️', text: '64 GiB persistent NVMe' },
        { icon: '⚡', text: 'Expansive modpack capacity' },
        { icon: '🤖', text: 'Complimentary AI Copilot' }
      ],
      btnText: 'Choose Village →',
      recommended: false
    }
  ]
})

const togetherUrl = computed(() => `${site.value.base}${isUk.value ? 'uk' : 'en'}/together/`)
</script>

<template>
  <div class="blog-plans-matrix">
    <div class="matrix-grid">
      <article
        v-for="plan in plans"
        :key="plan.id"
        class="matrix-card"
        :class="{ 'is-recommended': plan.recommended }"
      >
        <!-- Top Badge -->
        <div class="card-eyebrow-wrap">
          <span class="card-eyebrow">{{ plan.eyebrow }}</span>
          <span v-if="plan.recommended" class="recommended-badge">POPULAR</span>
        </div>

        <!-- Title -->
        <h3 class="card-title">{{ plan.name }}</h3>

        <!-- Pricing Block -->
        <div class="card-price-box">
          <div class="main-price">
            <span class="price-val">{{ plan.price }}</span>
            <span class="price-period">{{ plan.period }}</span>
          </div>
          <div class="sub-price">{{ plan.subPrice }}</div>
        </div>

        <!-- Features List -->
        <ul class="features-list">
          <li v-for="(feat, idx) in plan.features" :key="idx" class="feature-row">
            <span class="feature-icon">{{ feat.icon }}</span>
            <span class="feature-text">{{ feat.text }}</span>
          </li>
        </ul>

        <!-- CTA Link -->
        <a :href="togetherUrl" class="card-cta-btn">
          {{ plan.btnText }}
        </a>
      </article>
    </div>
  </div>
</template>

<style scoped>
.blog-plans-matrix {
  margin: 32px 0 40px;
  width: 100%;
}

.matrix-grid {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.matrix-card {
  --card-bg: var(--xmcl-panel, #ffffff);
  --card-border: var(--xmcl-line, #d8ded7);
  --card-ink: var(--xmcl-ink, #17211f);
  --card-muted: var(--xmcl-muted, #64706c);
  --card-orange: var(--xmcl-orange, #e45e42);
  --card-lime: var(--xmcl-lime, #c9f85a);
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 22px 20px;
  position: relative;
  transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
}

.matrix-card:hover {
  border-color: var(--card-ink);
  box-shadow: 0 10px 24px -10px color-mix(in srgb, var(--card-ink) 14%, transparent);
  transform: translateY(-3px);
}

.matrix-card.is-recommended {
  background: color-mix(in srgb, var(--card-bg) 96%, var(--card-lime));
  border-color: var(--card-orange);
  box-shadow: 0 0 0 1px var(--card-orange);
}

html.dark .matrix-card.is-recommended {
  background: color-mix(in srgb, #1b241f 94%, #c9f85a);
  border-color: var(--card-lime);
  box-shadow: 0 0 0 1px var(--card-lime);
}

.card-eyebrow-wrap {
  align-items: center;
  display: flex;
  font-size: 10.5px;
  font-weight: 800;
  gap: 6px;
  justify-content: space-between;
  letter-spacing: 0.08em;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.card-eyebrow {
  color: var(--card-muted);
}

.recommended-badge {
  background: var(--card-orange);
  border-radius: 999px;
  color: #ffffff;
  font-size: 9.5px;
  padding: 2px 7px;
}

html.dark .recommended-badge {
  background: var(--card-lime);
  color: #17211f;
}

.card-title {
  border: 0 !important;
  color: var(--card-ink) !important;
  font-size: 17px !important;
  font-weight: 800 !important;
  letter-spacing: -0.02em;
  line-height: 1.2 !important;
  margin: 0 0 12px !important;
  padding: 0 !important;
}

.card-price-box {
  background: var(--xmcl-soft, #e9ece4);
  border: 1px solid var(--card-border);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 18px;
  padding: 12px 14px;
}

html.dark .card-price-box {
  background: #151d18;
}

.main-price {
  align-items: baseline;
  display: flex;
  gap: 4px;
}

.price-val {
  color: var(--card-ink);
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1;
}

.price-period {
  color: var(--card-muted);
  font-size: 12px;
  font-weight: 600;
}

.sub-price {
  color: var(--card-orange);
  font-size: 11.5px;
  font-weight: 700;
}

html.dark .sub-price {
  color: var(--card-lime);
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none !important;
  margin: 0 0 20px !important;
  padding: 0 !important;
}

.feature-row {
  align-items: center;
  color: var(--card-muted) !important;
  display: flex;
  font-size: 12.5px !important;
  gap: 8px;
  line-height: 1.4 !important;
  margin: 0 !important;
}

.feature-icon {
  font-size: 14px;
  line-height: 1;
}

.feature-text {
  color: var(--card-ink);
  font-weight: 600;
}

.card-cta-btn {
  align-items: center;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 6px;
  color: var(--card-ink) !important;
  display: inline-flex;
  font-size: 12.5px;
  font-weight: 700;
  justify-content: center;
  margin-top: auto;
  padding: 8px 12px;
  text-decoration: none !important;
  transition: all 150ms ease;
}

.card-cta-btn:hover {
  background: var(--card-ink);
  border-color: var(--card-ink);
  color: #ffffff !important;
}

.is-recommended .card-cta-btn {
  background: var(--card-orange);
  border-color: var(--card-orange);
  color: #ffffff !important;
}

.is-recommended .card-cta-btn:hover {
  background: #17211f;
  border-color: #17211f;
}

html.dark .is-recommended .card-cta-btn {
  background: var(--card-lime);
  border-color: var(--card-lime);
  color: #17211f !important;
}

html.dark .is-recommended .card-cta-btn:hover {
  background: #ffffff;
  border-color: #ffffff;
  color: #17211f !important;
}

@media (max-width: 1024px) {
  .matrix-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 580px) {
  .matrix-grid {
    grid-template-columns: 1fr;
  }
}
</style>
