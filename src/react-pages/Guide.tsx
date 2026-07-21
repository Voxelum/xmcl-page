import React, { useState, useMemo, useCallback, Suspense, lazy, useEffect } from "react";
import { useParams, useNavigate } from "@/hooks/useRouting";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MagnifyingGlass,
  BookOpen,
  Clock,
  User,
  ArrowRight,
  ArrowLeft,
  FunnelSimple,
  X,
  Star,
  Sparkle,
  GraduationCap,
} from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "@/contexts/TranslationContext";
import { motion, AnimatePresence } from "framer-motion";
import { AppShell } from "@/components/AppShell";
import { TranslateButton } from "@/components/TranslateButton";
import { useContentTranslation } from "@/hooks/useContentTranslation";
import { preprocessMarkdown } from "@/utils/markdownUtils";

const MarkdownRenderer = lazy(() =>
  import("@/components/MarkdownRenderer").then(m => ({ default: m.MarkdownRenderer }))
);

interface GuidePost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  tags: string[];
  slug: string;
  readTime?: string;
  difficulty?: string;
}

interface GuideConfig {
  posts: GuidePost[];
  featured: string[];
}

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}

const FloatingOrbs = React.memo(() => null);

// Скелетон только для сетки контента, без отступов для хедера
const GuideGridSkeleton = () => (
  <div className="animate-pulse">
    <div className="mb-10 h-12 w-full max-w-md rounded-xl bg-slate-200/50 dark:bg-slate-700/50" />
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="h-[320px] rounded-2xl bg-slate-200/50 dark:bg-slate-800/50" />
      ))}
    </div>
  </div>
);

const difficultyStyles: Record<string, { bg: string; text: string }> = {
  beginner: { bg: "bg-green-500/10 border border-green-500/20 text-green-400", text: "text-green-400" },
  intermediate: { bg: "bg-amber-500/10 border border-amber-500/20 text-amber-400", text: "text-amber-400" },
  advanced: { bg: "bg-red-500/10 border border-red-500/20 text-red-400", text: "text-red-400" },
};

const GuideCard = React.memo(({ post, featured, onClick, index }: {
  post: GuidePost;
  featured: boolean;
  onClick: () => void;
  index: number;
}) => {
  const diffStyle = difficultyStyles[post.difficulty || ""] || { bg: "bg-slate-400", text: "text-foreground" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{ duration: 0.3 }}
    >
      <Card
        onClick={onClick}
        className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-[#ea4c3c] hover:-translate-y-2 h-full flex flex-col"
      >
        <div className="relative z-10 flex flex-col h-full">
          <div className="mb-4 flex items-center justify-between">
            {featured && (
              <Badge className="bg-[#ea4c3c] text-white shadow-lg border-0">
                <Star className="mr-1 h-3 w-3 fill-current" />
                Featured
              </Badge>
            )}
            {post.difficulty && (
              <Badge className={`${diffStyle.bg} border-0`}>
                {post.difficulty}
              </Badge>
            )}
          </div>

          <h3 className="mb-3 text-xl font-bold text-foreground transition-colors group-hover:text-[#ea4c3c]">
            <a
              href={`/guide/${post.slug}/`}
              onClick={(event) => event.stopPropagation()}
            >
              {post.title}
            </a>
          </h3>

          <p className="mb-4 text-sm text-muted-foreground line-clamp-2 flex-grow">
            {post.excerpt}
          </p>

          <div className="mt-auto">
            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags?.slice(0, 3).map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="bg-[#ea4c3c]/10 text-[#ea4c3c] border border-[#ea4c3c]/20"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <User className="h-3.5 w-3.5 text-muted-foreground" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                  {post.readTime || "5 min"}
                </span>
              </div>
              <div className="flex items-center gap-1 text-[#ea4c3c] font-medium group-hover:translate-x-1 transition-transform">
                Read
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
});
GuideCard.displayName = "GuideCard";

const GuideDetail = ({ post, content, onBack }: {
  post: GuidePost;
  content: string;
  onBack: () => void;
}) => {
  const { translate, isTranslating, translatedContent, error, isTranslated, currentLanguage, resetTranslation } = useContentTranslation();
  const displayContent = isTranslated && translatedContent ? translatedContent : content;

  return (
    <div className="mx-auto max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <Button
          variant="ghost"
          onClick={onBack}
          className="group text-foreground hover:text-[#ea4c3c] hover:bg-accent"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back
        </Button>

        <TranslateButton
          onTranslate={(lang) => translate(content, lang)}
          isTranslating={isTranslating}
          isTranslated={isTranslated}
          currentLanguage={currentLanguage}
          onReset={resetTranslation}
          error={error}
        />
      </div>

      <article className="rounded-3xl bg-card p-6 md:p-12 border border-border">
        <header className="mb-10 border-b border-border pb-8">
          <h1 className="mb-6 text-4xl md:text-5xl font-black text-foreground">
            {post.title}
          </h1>
          {/* ... badges ... */}
        </header>

        <Suspense fallback={<div className="h-64 animate-pulse bg-background rounded-xl border border-border" />}>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <MarkdownRenderer content={displayContent} />
          </div>
        </Suspense>
      </article>
    </div>
  );
};

const GuideContent = ({
  initialSlug,
  initialConfig,
}: {
  initialSlug?: string;
  initialConfig?: GuideConfig;
}) => {
  const { t } = useTranslation();
  const { id: hashId } = useParams();
  const id = initialSlug || hashId;

  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 300);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const { data: config, isLoading } = useQuery({
    queryKey: ["guides-config"],
    initialData: initialConfig,
    queryFn: async () => {
      const response = await fetch("/guides.json");
      if (!response.ok) throw new Error("Failed to fetch guides");
      return response.json();
    },
    staleTime: 5 * 60 * 1000,
  });

  const { data: guideContent } = useQuery({
    queryKey: ["guide-content", id],
    queryFn: async () => {
      const response = await fetch(`/guide/${id}.md`);
      if (!response.ok) return "# Guide not found";
      const rawContent = await response.text();
      return preprocessMarkdown(rawContent);
    },
    enabled: !!id,
    staleTime: 30 * 60 * 1000,
  });

  const posts: GuidePost[] = config?.posts || [];
  const categories = useMemo(() => {
    const tagsSet = new Set<string>();
    posts.forEach((post) => {
      post.tags?.forEach((tag) => {
        if (tag) tagsSet.add(tag);
      });
    });
    return Array.from(tagsSet);
  }, [posts]);
  const featured: string[] = config?.featured || [];

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch = !debouncedSearch ||
        post.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(debouncedSearch.toLowerCase());
      const matchesTags = selectedTags.length === 0 ||
        selectedTags.some((tag) => post.tags?.includes(tag));
      return matchesSearch && matchesTags;
    });
  }, [posts, debouncedSearch, selectedTags]);

  const selectedPost = useMemo(() =>
    posts.find((p) => p.slug === id), [posts, id]
  );

  const toggleTag = useCallback((tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }, []);

  // Если открыт детальный пост - рендерим его
  if (id && selectedPost && guideContent) {
    return (
      <div className="relative min-h-screen bg-background py-8">
        <FloatingOrbs />
        <div className="container relative z-10 mx-auto px-4">
          <GuideDetail
            post={selectedPost}
            content={guideContent}
            onBack={() => { window.location.hash = ''; }}
          />
        </div>
      </div>
    );
  }

  // Основной список
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <FloatingOrbs />

      {/* --- LCP OPTIMIZATION --- */}
      {/* Хедер рендерится ВСЕГДА, даже если isLoading=true. */}
      {/* Это позволяет тексту (subtitle) появиться мгновенно. */}
      <header className="relative border-b border-border bg-card py-10 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6 inline-flex items-center justify-center animate-in fade-in zoom-in duration-500">
            <div className="rounded-2xl bg-[#ea4c3c] p-4 shadow-lg shadow-[#ea4c3c]/10">
              <GraduationCap className="h-10 w-10 text-white" />
            </div>
          </div>

          <div className="mb-4 inline-flex items-center gap-2 bg-[#ea4c3c]/10 px-4 py-2 rounded-full text-[#ea4c3c] text-sm font-medium border border-[#ea4c3c]/20">
            <Sparkle className="h-4 w-4" />
            Learn & Discover
          </div>

          <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-black text-foreground">
            {t("guide.title")}
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("guide.subtitle")}
          </p>
        </div>
      </header>

      <div className="container relative z-10 mx-auto px-4 py-10">
        {isLoading ? (
          // Скелетон теперь показывается только вместо списка, а не вместо всей страницы
          <GuideGridSkeleton />
        ) : (
          <>
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-card p-4 rounded-2xl border border-border">
              <div className="relative flex-1 max-w-md">
                <MagnifyingGlass className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder={t("guide.searchPlaceholder")}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 rounded-xl border border-border bg-background text-foreground focus-visible:ring-[#ea4c3c] shadow-sm"
                />
              </div>

              <Button
                variant={showFilters ? "default" : "outline"}
                onClick={() => setShowFilters(!showFilters)}
                className={`rounded-xl h-12 transition-all ${showFilters ? "bg-[#ea4c3c] text-white border-0 hover:bg-[#d63e2c]" : "border-border text-foreground hover:bg-[#ea4c3c] hover:border-[#ea4c3c] hover:text-white"}`}
              >
                <FunnelSimple className="mr-2 h-4 w-4" />
                Filter by tag
              </Button>
            </div>

            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-8 overflow-hidden"
                >
                  <div className="flex flex-wrap gap-2 rounded-xl bg-card p-5 border border-border">
                    {categories.map((tag) => (
                      <Button
                        key={tag}
                        variant={selectedTags.includes(tag) ? "default" : "outline"}
                        size="sm"
                        onClick={() => toggleTag(tag)}
                        className={`rounded-full transition-all ${selectedTags.includes(tag) ? "bg-[#ea4c3c] text-white border-0 hover:bg-[#d63e2c]" : "border-border text-foreground hover:bg-[#ea4c3c] hover:border-[#ea4c3c] hover:text-white"}`}
                      >
                        {tag}
                      </Button>
                    ))}
                    {selectedTags.length > 0 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedTags([])}
                        className="text-[#ea4c3c] hover:text-[#d63e2c] hover:bg-accent"
                      >
                        <X className="mr-1 h-3 w-3" />
                        Clear all
                      </Button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {filteredPosts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post, index) => (
                  <GuideCard
                    key={post.slug || post.id}
                    post={post}
                    featured={featured.includes(post.slug) || featured.includes(post.id)}
                    onClick={() => window.location.hash = post.slug}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <BookOpen className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
                <h3 className="text-xl font-bold text-muted-foreground mb-2">
                  {t("guide.noGuidesFound")}
                </h3>
                <Button
                  variant="link"
                  onClick={() => { setSearchQuery(""); setSelectedTags([]); }}
                  className="text-[#ea4c3c] hover:text-[#d63e2c] p-0"
                >
                  {t("common.clearFilters")}
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default function Guide({
  initialSlug,
  initialConfig,
}: {
  initialSlug?: string;
  initialConfig?: GuideConfig;
}) {
  return (
    <AppShell>
      <GuideContent initialSlug={initialSlug} initialConfig={initialConfig} />
    </AppShell>
  );
}
