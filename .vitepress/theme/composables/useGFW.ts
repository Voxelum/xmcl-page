import { onMounted, provide, ref } from "vue"

export function useGFW() {
    const inGFW = ref(false)
    onMounted(() => {
        new Promise<boolean>((resolve) => {
            const img = new Image()
            img.onload = () => resolve(false)
            img.onerror = () => resolve(true)
            
            img.src = 'https://www.youtube.com/favicon.ico'
            
            setTimeout(() => {
                resolve(true)
                img.src = ''
                img.remove()
            }, 1500)
        }).then((result) => {
            inGFW.value = result
        })
    })
    provide('gfw', inGFW)
    return inGFW
}