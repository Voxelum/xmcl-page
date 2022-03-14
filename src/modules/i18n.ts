import { createI18n } from 'vue-i18n'
import type { UserModule } from '~/types'

// Import i18n resources
// https://vitejs.dev/guide/features.html#glob-import
//
// Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
const messages = Object.fromEntries(
  Object.entries(
    import.meta.globEager('../../locales/*.y(a)?ml'))
    .map(([key, value]) => {
      const yaml = key.endsWith('.yaml')
      return [key.slice(14, yaml ? -5 : -4), value.default]
    }),
)

export const install: UserModule = ({ app, isClient, initialState }) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages,
  })

  app.use(i18n)

  if (!isClient) {
    watch(i18n.global.locale, (locale) => {
      initialState.locale = locale
    })
  } else {
    watchEffect(() => {
      document.getElementsByTagName('html').item(0)?.setAttribute('lang', i18n.global.locale.value)
    })
  }
}
