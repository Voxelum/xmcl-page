import { useData } from "vitepress"
import { watch } from "vue"
import { useI18n } from "vue-i18n"

export function useI18nSync() {
    const { locale, messages } = useI18n()
    const { lang } = useData()

    watch(lang, (l) => {
        const currentLocale = l.split('-')?.[0] ?? 'en'
        if (messages.value[currentLocale]) {
            locale.value = currentLocale
        }
    }, { immediate: true })
}
