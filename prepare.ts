import { writeFileSync, existsSync, mkdirSync, readdirSync } from "fs";
import { resolve, join } from "path";
import { execSync } from "child_process";
import { ensureGuideFallbacks } from "./.vitepress/guideFallbacks";

// 1. Setup .env file
const envPath = resolve('.env');
if (process.env.PROD && process.env.VITE_GITHUB_TOKEN) {
    writeFileSync(envPath, `VITE_GITHUB_TOKEN=${process.env.VITE_GITHUB_TOKEN}`);
    console.log(envPath, 'Write .env file successfully!');
} else {
    console.log(envPath, 'No need to write .env file.', !!process.env.PROD, !!process.env.VITE_GITHUB_TOKEN);
}

// 2. Clone core docs if missing
const corePath = resolve('src/en/core/sidebar.json');
if (!existsSync(corePath)) {
    try {
        console.log('Cloning minecraft-launcher-core-node gh-pages into src/en/core...');
        execSync('git clone --branch gh-pages --depth 1 https://github.com/voxelum/minecraft-launcher-core-node src/en/core', { stdio: 'inherit' });
    } catch (e) {
        console.error('Failed to clone core docs:', e);
    }
}

// 3. Automated Guide Fallbacks with Localized Notice Banner
ensureGuideFallbacks();
console.log('Automated guide fallbacks generated successfully.');

// 4. Pre-create dist directories for concurrent static rendering
try {
    const srcDir = resolve('src');
    const locales = readdirSync(srcDir, { withFileTypes: true })
        .filter(d => d.isDirectory() && d.name !== 'assets')
        .map(d => d.name);
    for (const loc of locales) {
        for (const sub of ['guide', 'protocol', 'blog', 'changelogs', 'core']) {
            mkdirSync(resolve('.vitepress', 'dist', loc, sub), { recursive: true });
        }
    }
} catch (e) {
    console.error('Dist directory pre-creation error:', e);
}
