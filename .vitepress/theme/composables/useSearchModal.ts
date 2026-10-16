import { ref } from 'vue'

export const isSearchModalOpen = ref(false)

export function openSearchModal() {
  isSearchModalOpen.value = true
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new KeyboardEvent('keydown', {
        key: 'k',
        code: 'KeyK',
        ctrlKey: true,
        bubbles: true,
      }),
    )
  }
}

export function closeSearchModal() {
  isSearchModalOpen.value = false
}
