import React from "react";
import { ArrowLeft, Calendar, User } from "@phosphor-icons/react";
import { AppShell } from "@/components/AppShell";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { preprocessMarkdown } from "@/utils/markdownUtils";
import { PageLocaleContext } from "@/contexts/PageLocaleContext";

interface StaticArticleProps {
  title: string;
  description: string;
  author: string;
  date: string;
  content: string;
  backHref: string;
  backLabel: string;
  initialLocale?: SupportedLocale;
}

function removeLeadingHeading(markdown: string) {
  return markdown.replace(/^\s*#\s+[^\n]*(?:\r?\n)?/, "");
}

export function StaticArticle({
  title,
  description,
  author,
  date,
  content,
  backHref,
  backLabel,
  initialLocale,
}: StaticArticleProps) {
  const markdown = removeLeadingHeading(preprocessMarkdown(content));

  const article = (
    <AppShell initialLocale={initialLocale}>
      <article className="mx-auto max-w-4xl px-4 py-28 text-foreground">
        <a
          href={backHref}
          className="mb-8 inline-flex items-center gap-2 font-medium text-primary hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          {backLabel}
        </a>

        <header className="mb-10 border-b border-border pb-8">
          <h1 className="mb-4 text-4xl font-black md:text-5xl">{title}</h1>
          <p className="mb-6 text-xl text-muted-foreground">{description}</p>
          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <User className="h-4 w-4 text-primary" />
              {author}
            </span>
            <time className="inline-flex items-center gap-2" dateTime={date}>
              <Calendar className="h-4 w-4 text-primary" />
              {date}
            </time>
          </div>
        </header>

        <MarkdownRenderer content={markdown} />
      </article>
    </AppShell>
  );

  return initialLocale ? (
    <PageLocaleContext.Provider value={initialLocale}>
      {article}
    </PageLocaleContext.Provider>
  ) : article;
}
