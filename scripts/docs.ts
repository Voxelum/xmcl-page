import { readFile, writeFile } from "fs/promises";
import { build } from "vitepress"

async function transformDocs() {
    const rootReadme = await readFile('docs/en/core/index.md', 'utf-8')
    let modRootReadme = rootReadme.replaceAll('/packages/', '')
        .replace('(/CONTRIBUTE.md)', '(CONTRIBUTE.md)')
    await writeFile('docs/en/core/index.md', modRootReadme, 'utf-8')
    await build('docs')
    await writeFile('docs/en/core/index.md', rootReadme, 'utf-8')
}

transformDocs()
