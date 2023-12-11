import { writeFileSync } from "fs";

if (process.env.PROD && process.env.VITE_GITHUB_TOKEN) {
    writeFileSync('./.env', `VITE_GITHUB_TOKEN=${process.env.VITE_GITHUB_TOKEN}`)
}
