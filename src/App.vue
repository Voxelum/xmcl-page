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

    const localeCache = useLocalStorage('locale', getNavigator()?.language ?? '')

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
