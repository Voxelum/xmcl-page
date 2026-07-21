import fs from "node:fs";
import path from "node:path";
import { getSourceLocale } from "../lib/locales";

export interface MarkdownDocument {
  slug: string;
  title: string;
  content: string;
}

const excludedDirectories = new Set(["blog", "changelogs", "guide"]);
const conflictingRoutes = new Set(["privacy"]);

function walkMarkdownFiles(directory: string, root: string): MarkdownDocument[] {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      return excludedDirectories.has(entry.name) ? [] : walkMarkdownFiles(filePath, root);
    }

    if (!entry.isFile() || !entry.name.endsWith(".md")) {
      return [];
    }

    const relativePath = path.relative(root, filePath).replace(/\\/g, "/");
    if (relativePath === "index.md") return [];

    const slug = relativePath
      .replace(/\.md$/, "")
      .replace(/\/index$/, "");
    if (conflictingRoutes.has(slug)) return [];

    const source = fs.readFileSync(filePath, "utf8");
    const frontmatter = source.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/);
    const content = source.slice(frontmatter?.[0].length ?? 0).trim();
    const title = content.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? slug.split("/").at(-1) ?? slug;

    return [{ slug, title, content }];
  });
}

export function getMarkdownDocuments(locale: string): MarkdownDocument[] {
  const sourceLocale = getSourceLocale(locale);
  const directory = path.join(process.cwd(), "src", sourceLocale);

  if (!fs.existsSync(directory)) {
    return locale === "en" ? [] : getMarkdownDocuments("en");
  }

  return walkMarkdownFiles(directory, directory);
}
