import { useData } from "vitepress"
import { watch } from "vue"
import { useI18n } from "vue-i18n"

export function useI18nSync() {
    const { locale, messages } = useI18n()
    const { lang } = useData()

    watch(lang, (l) => {
        console.log(l)
        const shortenLocale = l.split('-')?.[0] ?? 'en'
        const realLocale = messages.value[l] ? l :
            messages.value[shortenLocale]
                ? shortenLocale
                : 'en'
        locale.value = realLocale
    }, { immediate: true })
}
