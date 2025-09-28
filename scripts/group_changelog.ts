import { readdir, readdirSync, readFileSync, unlinkSync, writeFileSync } from "fs";
import { join } from "path";

export function groupChangelogs(locale = 'en') {
    const root = join('src', locale, 'changelogs')
    const files = readdirSync(root).filter(f => !f.endsWith('x.md'))
    // Group changelog by semver minor version
    const groups: Record<string, string[]> = {}
    for (const file of files) {
        if (file.endsWith('.md') && !file.startsWith('index')) {
            const version = file.slice(0, -3)
            const [major, minor] = version.split('.')
            if (major && minor) {
                const key = `${major}.${minor}`
                if (!groups[key]) {
                    groups[key] = []
                }
                groups[key].push(version)
            }
        }
    }

    // except the latest minor versions
    const latestMinorVersions = new Set<string>()
    const sortedKeys = Object.keys(groups).sort((a, b) => {
        const [aMajor, aMinor] = a.split('.').map(v => parseInt(v))
        const [bMajor, bMinor] = b.split('.').map(v => parseInt(v))
        if (aMajor !== bMajor) {
            return bMajor - aMajor
        }
        return bMinor - aMinor
    })
    for (const key of sortedKeys) {
        if (latestMinorVersions.size < 1) { // Keep the latest 1 minor versions
            latestMinorVersions.add(key)
        }
    }

    for (const key of Object.keys(groups)) {
        if (latestMinorVersions.has(key)) {
            delete groups[key]
        }
    }

    // Merge each group into a single file
    for (const key of Object.keys(groups)) {
        const versions = groups[key].sort((a, b) => {
            const [aMajor, aMinor, aPatch] = a.split('.').map(v => parseInt(v))
            const [bMajor, bMinor, bPatch] = b.split('.').map(v => parseInt(v))
            if (aMajor !== bMajor) {
                return bMajor - aMajor
            }
            if (aMinor !== bMinor) {
                return bMinor - aMinor
            }
            return bPatch - aPatch
        })
        let header = ''
        let content = ``
        for (const version of versions) {
            const fileContent = readFileSync(join(root, version + '.md'), 'utf-8')
            let lines = fileContent.split('\n')
            const index = lines.findIndex(l => l.startsWith('## '))
            if (index !== -1) {
                if (header === '') {
                    header = lines.slice(0, index).join('\n').trim()
                }
                lines = lines.slice(index)
            }
            content += lines.join('\n') + '\n\n'
        }
        console.log(header)
        content = header + '\n' + content.trim() + '\n'
        writeFileSync(join(root, `${key}.x.md`), content, 'utf-8')
        // delete old files
        for (const version of versions) {
            unlinkSync(join(root, version + '.md'))
        }
        console.log(`Grouped changelogs for ${key}.x: ${versions.join(', ')}`)
    }
}

groupChangelogs('en')
groupChangelogs('zh')
groupChangelogs('fr')
groupChangelogs('ko')