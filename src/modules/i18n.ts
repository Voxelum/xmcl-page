import { createI18n } from 'vue-i18n'
import type { UserModule } from '~/types'
import type { Locale } from 'vue-i18n'

// Import i18n resources
// https://vitejs.dev/guide/features.html#glob-import
//
// Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
const localesMap = Object.fromEntries(
  Object.entries(import.meta.glob('../../locales/*.yml'))
    .map(([path, loadLocale]) => [path.match(/([\w-]*)\.yml$/)?.[1], loadLocale]),
) as Record<Locale, () => Promise<{ default: Record<string, string> }>>

const messages = Object.fromEntries(
  Object.entries(
    import.meta.glob('../../locales/*.y(a)?ml', { eager: true }))
    .map(([key, value]) => {
      const yaml = key.endsWith('.yaml')
      return [key.slice(14, yaml ? -5 : -4), value.default]
    }),
)

export const availableLocales = Object.keys(localesMap)
const loadedLanguages: string[] = []

function setI18nLanguage(lang: Locale) {
  i18n.global.locale.value = lang as any
  if (typeof document !== 'undefined')
    document.querySelector('html')?.setAttribute('lang', lang)
  return lang
}
export async function loadLanguageAsync(lang: string): Promise<Locale> {
  // If the same language
  if (i18n.global.locale.value === lang)
    return setI18nLanguage(lang)

  // If the language was already loaded
  if (loadedLanguages.includes(lang))
    return setI18nLanguage(lang)

  // If the language hasn't been loaded yet
  const messages = await localesMap[lang]()
  i18n.global.setLocaleMessage(lang, messages.default)
  loadedLanguages.push(lang)
  return setI18nLanguage(lang)
}

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages,
})

export const install: UserModule = ({ app, isClient, initialState, router }) => {
  app.use(i18n)

  if (!isClient) {
    watch(i18n.global.locale, (locale) => {
      initialState.locale = locale
    })
  } else {
    watch(i18n.global.locale, (locale) => {
      const currentRoute = router.currentRoute
      if (currentRoute.value.fullPath === '/zh' && locale !== 'zh') {
        router.push(`/${locale}`)
      } else if (currentRoute.value.fullPath === '/ru' && locale !== 'ru') {
        router.push(`/${locale}`)
      } else if (currentRoute.value.fullPath === '/en' && locale !== 'en') {
        router.push(`/${locale}`)
      } else if (currentRoute.value.fullPath === '/') {
        router.push(`/${locale}`)
      }
      document.getElementsByTagName('html').item(0)?.setAttribute('lang', i18n.global.locale.value)
    })
  }
}
