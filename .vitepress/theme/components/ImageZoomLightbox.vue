<template>
  <Teleport to="body">
    <transition name="lightbox-fade">
      <div
        v-if="isOpen"
        class="lightbox-overlay"
        tabindex="0"
        role="dialog"
        aria-label="Image viewer"
        @click.self="close"
        @wheel.prevent="handleWheel"
        @keydown="handleKeydown"
      >
        <!-- Top Toolbar -->
        <div class="lightbox-toolbar">
          <span v-if="alt" class="lightbox-title">{{ alt }}</span>
          <div class="lightbox-controls">
            <button
              class="toolbar-btn"
              type="button"
              title="Zoom In (+)"
              @click.stop="zoomIn"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="11" y1="8" x2="11" y2="14"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
            </button>

            <span class="zoom-badge">{{ Math.round(scale * 100) }}%</span>

            <button
              class="toolbar-btn"
              type="button"
              title="Zoom Out (-)"
              @click.stop="zoomOut"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                <line x1="8" y1="11" x2="14" y2="11"></line>
              </svg>
            </button>

            <button
              class="toolbar-btn"
              type="button"
              title="Reset Zoom (0 / Double Click)"
              @click.stop="resetZoom"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path>
              </svg>
            </button>

            <div class="divider"></div>

            <button
              class="toolbar-btn close-btn"
              type="button"
              title="Close (Esc)"
              @click.stop="close"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        <!-- Image Container -->
        <div
          class="lightbox-stage"
          :class="{ dragging: isDragging }"
          @mousedown="startDrag"
          @mousemove="onDrag"
          @mouseup="stopDrag"
          @mouseleave="stopDrag"
          @touchstart="startTouch"
          @touchmove="onTouch"
          @touchend="stopTouch"
          @dblclick="toggleZoom"
        >
          <img
            :src="src"
            :alt="alt"
            class="lightbox-image"
            :style="{
              transform: `translate3d(${panX}px, ${panY}px, 0) scale(${scale})`,
              transition: isDragging ? 'none' : 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
            }"
            draggable="false"
          />
        </div>

        <!-- Bottom Caption -->
        <div v-if="alt" class="lightbox-caption">
          <span>{{ alt }}</span>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const isOpen = ref(false)
const src = ref('')
const alt = ref('')
const scale = ref(1.0)
const panX = ref(0)
const panY = ref(0)

const isDragging = ref(false)
const startX = ref(0)
const startY = ref(0)
const initialPanX = ref(0)
const initialPanY = ref(0)

const MIN_SCALE = 0.5
const MAX_SCALE = 5.0
const SCALE_STEP = 0.25

function openImage(imageSrc: string, imageAlt: string) {
  src.value = imageSrc
  alt.value = imageAlt
  scale.value = 1.0
  panX.value = 0
  panY.value = 0
  isOpen.value = true
  document.body.style.overflow = 'hidden'
}

function close() {
  isOpen.value = false
  document.body.style.overflow = ''
}

function zoomIn() {
  scale.value = Math.min(MAX_SCALE, Number((scale.value + SCALE_STEP).toFixed(2)))
}

function zoomOut() {
  scale.value = Math.max(MIN_SCALE, Number((scale.value - SCALE_STEP).toFixed(2)))
  if (scale.value <= 1.0) {
    panX.value = 0
    panY.value = 0
  }
}

function resetZoom() {
  scale.value = 1.0
  panX.value = 0
  panY.value = 0
}

function toggleZoom() {
  if (scale.value === 1.0) {
    scale.value = 2.0
  } else {
    resetZoom()
  }
}

function handleWheel(e: WheelEvent) {
  if (!isOpen.value) return
  if (e.deltaY < 0) {
    zoomIn()
  } else {
    zoomOut()
  }
}

function handleKeydown(e: KeyboardEvent) {
  if (!isOpen.value) return
  if (e.key === 'Escape') {
    close()
  } else if (e.key === '+' || e.key === '=') {
    zoomIn()
  } else if (e.key === '-' || e.key === '_') {
    zoomOut()
  } else if (e.key === '0' || e.key === 'r' || e.key === 'R') {
    resetZoom()
  } else if (e.key === 'ArrowLeft') {
    panX.value += 40
  } else if (e.key === 'ArrowRight') {
    panX.value -= 40
  } else if (e.key === 'ArrowUp') {
    panY.value += 40
  } else if (e.key === 'ArrowDown') {
    panY.value -= 40
  }
}

function startDrag(e: MouseEvent) {
  if (e.button !== 0) return
  isDragging.value = true
  startX.value = e.clientX
  startY.value = e.clientY
  initialPanX.value = panX.value
  initialPanY.value = panY.value
}

function onDrag(e: MouseEvent) {
  if (!isDragging.value) return
  const dx = e.clientX - startX.value
  const dy = e.clientY - startY.value
  panX.value = initialPanX.value + dx
  panY.value = initialPanY.value + dy
}

function stopDrag() {
  isDragging.value = false
}

function startTouch(e: TouchEvent) {
  if (e.touches.length === 1) {
    isDragging.value = true
    startX.value = e.touches[0].clientX
    startY.value = e.touches[0].clientY
    initialPanX.value = panX.value
    initialPanY.value = panY.value
  }
}

function onTouch(e: TouchEvent) {
  if (!isDragging.value || e.touches.length !== 1) return
  const dx = e.touches[0].clientX - startX.value
  const dy = e.touches[0].clientY - startY.value
  panX.value = initialPanX.value + dx
  panY.value = initialPanY.value + dy
}

function stopTouch() {
  isDragging.value = false
}

function handleGlobalClick(e: MouseEvent) {
  const target = e.target as HTMLElement
  if (target && target.tagName === 'IMG') {
    const img = target as HTMLImageElement

    // Exclude logo, avatars, or small icon images if needed
    if (img.classList.contains('no-zoom') || img.closest('.nav-bar') || img.closest('.account-menu')) {
      return
    }

    // Allow markdown documentation images, guide pictures, feature pictures, etc.
    const isDocImg = img.closest('.vp-doc') || img.closest('main') || img.closest('.content') || img.closest('.feature-card') || img.closest('.scene-landing') || img.naturalWidth > 150
    if (isDocImg) {
      e.preventDefault()
      e.stopPropagation()
      openImage(img.currentSrc || img.src, img.alt || img.title || '')
    }
  }
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('click', handleGlobalClick, true)
    window.addEventListener('keydown', handleKeydown)
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('click', handleGlobalClick, true)
    window.removeEventListener('keydown', handleKeydown)
  }
})
</script>

<style scoped>
.lightbox-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(10, 15, 13, 0.88);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: none;
  user-select: none;
}

.lightbox-toolbar {
  position: absolute;
  top: 16px;
  left: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10000;
  pointer-events: none;
}

.lightbox-title {
  color: rgba(255, 255, 255, 0.85);
  font-size: 0.875rem;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 40%;
  background: rgba(0, 0, 0, 0.4);
  padding: 6px 14px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  pointer-events: auto;
}

.lightbox-controls {
  display: flex;
  align-items: center;
  gap: 6px;
  background: rgba(18, 26, 23, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 30px;
  padding: 5px 10px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(12px);
  pointer-events: auto;
}

.toolbar-btn {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
}

.toolbar-btn:hover {
  background: rgba(16, 185, 129, 0.2);
  color: var(--vp-c-brand-1, #10b981);
  transform: scale(1.08);
}

.close-btn:hover {
  background: rgba(239, 68, 68, 0.25);
  color: #ef4444;
}

.zoom-badge {
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.75rem;
  font-weight: 600;
  min-width: 42px;
  text-align: center;
}

.divider {
  width: 1px;
  height: 18px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 4px;
}

.lightbox-stage {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
  overflow: hidden;
  position: relative;
}

.lightbox-stage.dragging {
  cursor: grabbing;
}

.lightbox-image {
  max-width: 90vw;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);
  transform-origin: center center;
  will-change: transform;
}

.lightbox-caption {
  position: absolute;
  bottom: 20px;
  background: rgba(18, 26, 23, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  padding: 8px 18px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.85rem;
  max-width: 80%;
  text-align: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(12px);
  pointer-events: none;
}

/* Transitions */
.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.2s ease;
}

.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}
</style>
