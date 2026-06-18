import React, { useState, useMemo, useCallback, Suspense, lazy, useEffect } from "react";
import { useParams, useNavigate } from "@/hooks/useRouting";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  MagnifyingGlass,
  Calendar,
  User,
  ArrowRight,
  Sparkle,
  FileText,
  X,
  ArrowLeft,
  Clock,
  FunnelSimple,
  RssSimple,
} from "@phosphor-icons/react";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "@/contexts/TranslationContext";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import { motion, AnimatePresence } from "framer-motion";
import { AppShell } from "@/components/AppShell";
import { TranslateButton } from "@/components/TranslateButton";
import { useContentTranslation } from "@/hooks/useContentTranslation";
import { preprocessMarkdown } from "@/utils/markdownUtils";


const MarkdownRenderer = lazy(() =>
  import("@/components/MarkdownRenderer").then(m => ({ default: m.MarkdownRenderer }))
);

// --- UTILS ---
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}

// --- STATIC COMPONENTS ---

// 1. Background - GPU accelerated, Static
const FloatingOrbs = React.memo(() => null);

// 2. Header - PURE COMPONENT (Critical LCP)
// Removed all animations from text to ensure immediate paint
const BlogHeader = React.memo(() => {
  const { t } = useTranslation();
  return (
    <header className="relative border-b border-border bg-card py-10 md:py-16 contain-layout text-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 mb-4 bg-[#ea4c3c]/10 px-4 py-2 rounded-full text-[#ea4c3c] text-sm font-medium border border-[#ea4c3c]/20">
          <RssSimple className="h-4 w-4" />
          <span>Latest Updates</span>
        </div>

        <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl font-black text-foreground">
          {t("blog.title")}
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {t("blog.subtitle")}
        </p>
      </div>
    </header>
  );
});

// 3. Search Controls - Isolated to prevent header re-renders
const SearchControls = React.memo(({
  searchQuery,
  setSearchQuery,
  showFilters,
  setShowFilters,
  t
}: any) => (
  <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-card p-4 rounded-2xl border border-border contain-content">
    <div className="relative flex-1 max-w-md">
      <MagnifyingGlass className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
      <Input
        placeholder={t("blog.searchPlaceholder")}
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
      {t("blog.filterByCategory")}
    </Button>
  </div>
));

// 4. Skeleton
const BlogGridSkeleton = () => (
  <div className="animate-pulse">
    <div className="mb-10 h-12 w-full max-w-md rounded-xl bg-slate-200/50 dark:bg-slate-700/50" />
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="h-[350px] rounded-2xl bg-slate-200/50 dark:bg-slate-800/50" />
      ))}
    </div>
  </div>
);

// 5. Post Card
const PostCard = React.memo(({ post, featured, onClick, index }: {
  post: any;
  featured: boolean;
  onClick: () => void;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{ duration: 0.3 }}
      className="h-full" // Ensure height consistency
    >
      <Card
        onClick={onClick}
        className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-[#ea4c3c] hover:-translate-y-2 h-full flex flex-col"
      >
        {featured && (
          <div className="absolute -right-12 -top-12 h-24 w-24 pointer-events-none">
            <div className="absolute bottom-6 right-6">
              <Badge className="bg-[#ea4c3c] text-white shadow-lg border-0">
                <Sparkle className="mr-1 h-3 w-3 animate-pulse" />
                Featured
              </Badge>
            </div>
          </div>
        )}

        <div className="relative z-10 flex flex-col h-full">
          <h3 className="mb-3 text-xl font-bold text-foreground transition-colors group-hover:text-[#ea4c3c]">
            {post.title}
          </h3>

          <p className="mb-4 text-sm text-muted-foreground line-clamp-2 flex-grow">
            {post.excerpt}
          </p>

          <div className="mt-auto">
            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags?.slice(0, 3).map((tag: string) => (
                <Badge
                  key={tag}
                  variant="secondary"
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
                  <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                  {new Date(post.date).toLocaleDateString()}
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

// 6. Detail View
const PostDetail = ({ post, content, onBack }: { post: any; content: string; onBack: () => void; }) => {
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

      <article className="rounded-3xl bg-card p-8 md:p-12 border border-border">
        <header className="mb-10 border-b border-border pb-8">
          <h1 className="mb-6 text-4xl md:text-5xl font-black text-foreground">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2 bg-background border border-border px-3 py-1.5 rounded-full">
              <User className="h-4 w-4 text-[#ea4c3c]" />
              {post.author}
            </span>
            <span className="flex items-center gap-2 bg-background border border-border px-3 py-1.5 rounded-full">
              <Calendar className="h-4 w-4 text-[#ea4c3c]" />
              {new Date(post.date).toLocaleDateString()}
            </span>
            <span className="flex items-center gap-2 bg-background border border-border px-3 py-1.5 rounded-full">
              <Clock className="h-4 w-4 text-[#ea4c3c]" />
              {Math.ceil((content?.length || 0) / 1000)} min read
            </span>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags?.map((tag: string) => (
              <Badge key={tag} className="bg-[#ea4c3c] text-white border-0">
                {tag}
              </Badge>
            ))}
          </div>
        </header>
        <Suspense fallback={<div className="h-64 animate-pulse bg-background rounded-xl border border-border" />}>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <MarkdownRenderer content={displayContent || ""} />
          </div>
        </Suspense>
      </article>
    </div>
  );
};


// --- MAIN COMPONENT ---
const BlogContent = ({ initialSlug }: { initialSlug?: string }) => {
  const { t } = useTranslation();
  const { id: hashId } = useParams();
  const id = initialSlug || hashId;
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 300);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Data fetching
  const { posts, categories: rawCategories, featured, isLoading, fetchPostContent } = useBlogPosts();

  // Dynamically extract categories from posts tags
  const categories = useMemo(() => {
    const tagsSet = new Set<string>();
    posts.forEach((post) => {
      post.tags?.forEach((tag) => {
        if (tag) tagsSet.add(tag);
      });
    });
    return Array.from(tagsSet);
  }, [posts]);

  const { data: postContent } = useQuery({
    queryKey: ["blog-post", id],
    queryFn: () => fetchPostContent(id!),
    enabled: !!id,
    staleTime: 10 * 60 * 1000,
  });

  // Filtering Logic
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

  const selectedPost = useMemo(() => posts.find((p) => p.slug === id), [posts, id]);

  const toggleTag = useCallback((tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }, []);

  // Detail View Render
  if (id && selectedPost) {
    return (
      <div className="relative min-h-screen bg-background py-8">
        <FloatingOrbs />
        <div className="container relative z-10 mx-auto px-4">
          <PostDetail post={selectedPost} content={postContent || ""} onBack={() => { window.location.hash = ''; }} />
        </div>
      </div>
    );
  }

  // List View Render
  return (
    <div className="relative min-h-screen bg-background">
      <FloatingOrbs />

      {/* LCP OPTIMIZATION:
         BlogHeader is isolated and memoized.
         No conditions. No animations. Pure rendering.
      */}
      <BlogHeader />

      <div className="container relative z-10 mx-auto px-4 py-10 text-foreground">
        {isLoading ? (
           <BlogGridSkeleton />
        ) : (
          <>
            <SearchControls
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              showFilters={showFilters}
              setShowFilters={setShowFilters}
              t={t}
            />

            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-8 overflow-hidden contain-content"
                >
                  <div className="flex flex-wrap gap-2 rounded-xl bg-card p-5 border border-border">
                    {categories.map((tag: string) => (
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
                      <Button variant="ghost" size="sm" onClick={() => setSelectedTags([])} className="text-[#ea4c3c] hover:text-[#d63e2c] hover:bg-accent">
                        <X className="mr-1 h-3 w-3" /> Clear all
                      </Button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* content-visibility: auto helps browser lazy-render off-screen content */}
            <div style={{ contentVisibility: 'auto' }}>
              {filteredPosts.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredPosts.map((post, index) => (
                    <PostCard
                      key={post.slug || post.id}
                      post={post}
                      featured={featured.includes(post.id)}
                      onClick={() => window.location.hash = post.slug}
                      index={index}
                    />
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center contain-content">
                  <FileText className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
                  <h3 className="text-xl font-bold text-muted-foreground mb-2">
                     {t("blog.noPostsFound")}
                  </h3>
                  <Button variant="link" onClick={() => { setSearchQuery(""); setSelectedTags([]); }} className="text-[#ea4c3c] hover:text-[#d63e2c] p-0">
                    {t("common.clearFilters")}
                  </Button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default function Blog({ initialSlug }: { initialSlug?: string }) {
  return (
    <AppShell>
      <BlogContent initialSlug={initialSlug} />
    </AppShell>
  );
}
