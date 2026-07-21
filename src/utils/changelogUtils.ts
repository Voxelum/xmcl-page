import fs from "node:fs";
import path from "node:path";
import { load } from "js-yaml";

export interface ChangelogEntry {
  version: string;
  date?: string;
  content: string;
}

function compareVersions(a: string, b: string) {
  const parse = (version: string) => version.split(".").map((part) => (
    part === "x" ? -1 : Number.parseInt(part, 10) || 0
  ));
  const aParts = parse(a);
  const bParts = parse(b);

  for (let index = 0; index < Math.max(aParts.length, bParts.length); index += 1) {
    const difference = (bParts[index] ?? 0) - (aParts[index] ?? 0);
    if (difference !== 0) return difference;
  }

  return 0;
}

function readLocaleChangelogs(locale: string): ChangelogEntry[] {
  const directory = path.join(process.cwd(), "src", locale, "changelogs");

  if (!fs.existsSync(directory)) return [];

  return fs.readdirSync(directory)
    .filter((file) => file.endsWith(".md") && !file.startsWith("."))
    .map((file) => {
      const source = fs.readFileSync(path.join(directory, file), "utf8");
      const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
      const metadata = frontmatter ? load(frontmatter[1]) as Record<string, unknown> : {};

      return {
        version: typeof metadata.version === "string" ? metadata.version : file.slice(0, -3),
        date: typeof metadata.date === "string" ? metadata.date : undefined,
        content: source.slice(frontmatter?.[0].length ?? 0).trim(),
      };
    })
    .sort((a, b) => compareVersions(a.version, b.version));
}

export function getChangelogs(locale: string): ChangelogEntry[] {
  const localizedChangelogs = readLocaleChangelogs(locale);
  return localizedChangelogs.length > 0 ? localizedChangelogs : readLocaleChangelogs("en");
}
