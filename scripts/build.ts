import { copyFile, readFile, writeFile } from "fs/promises";
import { join } from "path";
import { build } from "vitepress"

async function transformDocs() {
    let rootReadme: string | undefined
    try {
        rootReadme = await readFile('./src/en/core/index.md', 'utf-8')
        let modRootReadme = rootReadme.replaceAll('/packages/', '')
            .replace('(/CONTRIBUTE.md)', '(CONTRIBUTE.md)')
        await writeFile('./src/en/core/index.md', modRootReadme, 'utf-8')
    } catch {

    }

    await build('.')

    if (rootReadme) {
        await writeFile('./src/en/core/index.md', rootReadme, 'utf-8')
    }
    await copyFile(
        'staticwebapp.config.json',
        join('.vitepress', 'dist', 'staticwebapp.config.json'),
    )
}

transformDocs()
