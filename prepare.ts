import { writeFileSync } from "fs";
import { resolve } from "path";

const path = resolve('.env')
if (process.env.PROD && process.env.VITE_GITHUB_TOKEN) {
    writeFileSync(path, `VITE_GITHUB_TOKEN=${process.env.VITE_GITHUB_TOKEN}`)
    console.log(path, 'Write .env file successfully!')
} else {
    console.log(path, 'No need to write .env file.', !!process.env.PROD, !!process.env.VITE_GITHUB_TOKEN)
}
