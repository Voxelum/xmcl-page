<script lang="ts" setup>
import { useEventListener } from '@vueuse/core'
import { ref, watch } from 'vue'
import VPLocalSearchBox from './VPLocalSearchBox.vue'
import { isSearchModalOpen, closeSearchModal } from '../composables/useSearchModal'

const showSearch = ref(false)

watch(isSearchModalOpen, (val) => {
  if (showSearch.value !== val) {
    showSearch.value = val
  }
})

watch(showSearch, (val) => {
  if (isSearchModalOpen.value !== val) {
    if (val) {
      isSearchModalOpen.value = true
    } else {
      closeSearchModal()
    }
  }
})

useEventListener('keydown', (event: KeyboardEvent) => {
  const isCtrlOrMeta = event.ctrlKey || event.metaKey
  const isKeyK =
    event.code === 'KeyK' ||
    event.key.toLowerCase() === 'k' ||
    event.key.toLowerCase() === 'л'

  if (isCtrlOrMeta && isKeyK) {
    event.preventDefault()
    showSearch.value = true
    return
  }

  if (event.key === '/' && !isEditingContent(event)) {
    event.preventDefault()
    showSearch.value = true
  }
})

function isEditingContent(event: KeyboardEvent): boolean {
  const element = event.target as HTMLElement
  const tagName = element.tagName

  return (
    element.isContentEditable ||
    tagName === 'INPUT' ||
    tagName === 'SELECT' ||
    tagName === 'TEXTAREA'
  )
}
</script>

<template>
  <div class="VPNavBarSearch">
    <!-- Do not show search button in the top navbar menu. Modal is triggered via Guide tools or keyboard shortcuts -->
    <VPLocalSearchBox
      v-if="showSearch"
      @close="showSearch = false"
    />
  </div>
</template>

<style scoped>
.VPNavBarSearch {
  display: contents;
}
</style>
