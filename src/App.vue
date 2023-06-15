<template>
  <div class="h-full text-gray-200">
    <Bar />
    <router-view />
  </div>
</template>

<script lang="ts">
import "./assets/style.css"

function getNavigator() {
  try {
    return navigator
  } catch (e) {
    return undefined
  }
}

export default defineComponent({
  setup() {
    const { locale } = useI18n()

    const normalizeLocale = (locale?: string) => {
      if (!locale) {
        return 'en'
      }
      if (locale.startsWith('en')) {
        return 'en'
      }
      if (locale.startsWith('zh')) {
        return 'zh'
      }
      if (locale.startsWith('ru')) {
        return 'ru'
      }
      if (locale.startsWith('uk')) {
        return 'uk'
      }
      return 'en'
    }

    const localeCache = useLocalStorage('locale', normalizeLocale(getNavigator()?.language) ?? 'en')

    locale.value = localeCache.value

    watch(locale, (newLocale) => {
      localeCache.value = newLocale
    })
  }
});

</script>

<style>
#app {
  height: 100%;
}
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
