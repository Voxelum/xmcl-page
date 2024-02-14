import { onMounted, provide, ref } from "vue"

export function useGFW() {
    const inGFW = ref(false)
    onMounted(() => {
        const img = new Image()
        img.onload = () => inGFW.value = false
        img.onerror = () => inGFW.value = false

        img.src = 'https://www.google.com'

        setTimeout(() => {
            inGFW.value = true
            img.src = ''
            img.remove()
        }, 1500)
    })
    provide('gfw', inGFW)
    return inGFW
}