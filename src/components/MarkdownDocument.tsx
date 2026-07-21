import React from "react";
import { AppShell } from "@/components/AppShell";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { PageLocaleContext } from "@/contexts/PageLocaleContext";
import { preprocessMarkdown } from "@/utils/markdownUtils";

interface MarkdownDocumentProps {
  content: string;
  initialLocale: SupportedLocale;
}

export function MarkdownDocument({ content, initialLocale }: MarkdownDocumentProps) {
  return (
    <PageLocaleContext.Provider value={initialLocale}>
      <AppShell initialLocale={initialLocale}>
        <article className="mx-auto max-w-4xl px-4 py-28 text-foreground">
          <MarkdownRenderer content={preprocessMarkdown(content)} />
        </article>
      </AppShell>
    </PageLocaleContext.Provider>
  );
}
