import { readFile, writeFile } from "fs/promises";
import { build } from "vitepress"

async function transformDocs() {
    let rootReadme: string | undefined
    try {
        rootReadme = await readFile('docs/en/core/index.md', 'utf-8')
        let modRootReadme = rootReadme.replaceAll('/packages/', '')
        .replace('(/CONTRIBUTE.md)', '(CONTRIBUTE.md)')
        await writeFile('docs/en/core/index.md', modRootReadme, 'utf-8')
    } catch {

    }

    await build('docs')

    if (rootReadme) {
        await writeFile('docs/en/core/index.md', rootReadme, 'utf-8')
    }
}

transformDocs()
