
import {
    defineConfig,
    presetUno,
    transformerDirectives,
    transformerVariantGroup,
} from 'unocss'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
    presets: [
        presetUno(),
        presetIcons({
            scale: 1.2,
            unit: 'em',
        }),
    ],
    transformers: [
        transformerVariantGroup(),
        transformerDirectives(),
    ],
    content: {
        pipeline: {
            // include: ['./.vitepress/theme/components/*.vue', './**/*.md'],
        },
    },
})