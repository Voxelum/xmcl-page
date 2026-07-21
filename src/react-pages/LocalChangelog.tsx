import React, { useMemo, useState } from "react";
import { Calendar, MagnifyingGlass, Sparkle } from "@phosphor-icons/react";
import { AppShell } from "@/components/AppShell";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { PageTransition } from "@/components/PageTransition";
import { useTranslation } from "@/hooks/useTranslation";
import type { ChangelogEntry } from "@/utils/changelogUtils";

interface LocalChangelogProps {
  entries: ChangelogEntry[];
}

function LocalChangelogContent({ entries }: LocalChangelogProps) {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");
  const changelogs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return entries;

    return entries.filter((entry) => (
      entry.version.toLowerCase().includes(normalizedQuery) ||
      entry.content.toLowerCase().includes(normalizedQuery)
    ));
  }, [entries, query]);

  return (
    <PageTransition>
      <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
        <main className="container relative z-10 mx-auto px-4 pb-32">
          <header className="mx-auto max-w-4xl pb-12 pt-24 text-center md:pt-32">
            <div className="mb-6 inline-flex items-center rounded-full border border-border bg-card px-4 py-1.5 font-semibold text-primary shadow-sm">
              <Sparkle className="mr-2 h-3.5 w-3.5 fill-current" />
              What's New
            </div>
            <h1 className="mb-6 text-4xl font-black tracking-tight text-foreground md:text-6xl">
              {t("changelog.title", "Changelog")}
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {t("changelog.subtitle", "Track every update, improvement, and fix.")}
            </p>
          </header>

          <div className="mx-auto mb-10 max-w-4xl">
            <label className="relative block">
              <MagnifyingGlass className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search changelogs..."
                className="h-11 w-full rounded-xl border border-border bg-card pl-10 pr-4 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </label>
          </div>

          <div className="mx-auto max-w-4xl space-y-5">
            {changelogs.map((entry) => (
              <article key={entry.version} className="rounded-2xl border border-border bg-card p-5 shadow-sm md:p-7">
                <div className="mb-6 flex flex-wrap items-center gap-3 border-b border-border pb-5">
                  <h2 className="text-2xl font-bold text-foreground">{entry.version}</h2>
                  {entry.date && (
                    <time className="inline-flex items-center gap-1.5 text-sm text-muted-foreground" dateTime={entry.date}>
                      <Calendar className="h-4 w-4" />
                      {entry.date}
                    </time>
                  )}
                </div>
                <MarkdownRenderer content={entry.content} />
              </article>
            ))}

            {changelogs.length === 0 && (
              <p className="py-16 text-center text-muted-foreground">No changelogs found.</p>
            )}
          </div>
        </main>
      </div>
    </PageTransition>
  );
}

export default function LocalChangelog({ entries }: LocalChangelogProps) {
  return (
    <AppShell>
      <LocalChangelogContent entries={entries} />
    </AppShell>
  );
}
