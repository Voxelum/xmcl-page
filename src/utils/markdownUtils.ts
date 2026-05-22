/**
 * Strips YAML frontmatter from markdown content
 * Frontmatter is the metadata between --- markers at the start of the file
 */
export function stripFrontmatter(markdown: string): string {
  // Match frontmatter block: starts with ---, ends with ---
  const frontmatterRegex = /^---\n[\s\S]*?\n---\n/;
  return markdown.replace(frontmatterRegex, '');
}

/**
 * Converts GitHub-style ::: directives to HTML divs with appropriate classes
 * Supports: info, tip, warning, caution, important, note
 */
export function convertDirectives(markdown: string): string {
  const directiveRegex = /^:::(info|tip|warning|caution|important|note)\s*\n([\s\S]*?)\n:::/gm;
  
  return markdown.replace(directiveRegex, (match, type, content) => {
    const titles: Record<string, string> = {
      info: 'ℹ️ Info',
      tip: '💡 Tip',
      warning: '⚠️ Warning',
      caution: '🚫 Caution',
      important: '🔥 Important',
      note: '📝 Note',
    };

    const title = titles[type] || type;
    
    return `<div class="markdown-alert markdown-alert-${type}">
<p class="markdown-alert-title">${title}</p>
${content.trim()}
</div>`;
  });
}

/**
 * Preprocesses markdown content: strips frontmatter and converts directives
 */
export function preprocessMarkdown(markdown: string): string {
  const stripped = stripFrontmatter(markdown);
  return convertDirectives(stripped);
}
