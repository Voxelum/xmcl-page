export function useLocaledPage(val: string) {
    const { locale } = useI18n()
    locale.value = val
    const { push, currentRoute } = useRouter()
    watch(locale, (newLocale, oldValue) => {
        console.log(`push ${currentRoute.value.path.replace(oldValue, newLocale)}`)
        console.log({ ...currentRoute.value, path: currentRoute.value.path.replace(oldValue, newLocale) })
        push({ path: currentRoute.value.path.replace(oldValue, newLocale) })
    })
}
