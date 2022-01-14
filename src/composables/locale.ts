import { defineStore } from "pinia";

export const useLocaleStore = defineStore('locale', () => {
    const locale = ref('en');
    return {
        locale
    }
})
