import React, { useState, useMemo, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MagnifyingGlass, Clock, User, ArrowRight, FunnelSimple, X, Star } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/contexts/TranslationContext";

export interface GuidePost {
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

interface GuideBrowserProps {
  posts: GuidePost[];
  categories: string[];
  featuredIds: string[];
}

const difficultyStyles: Record<string, { bg: string; text: string }> = {
  beginner: { bg: "from-green-400 to-emerald-500", text: "text-white" },
  intermediate: { bg: "from-yellow-400 to-orange-500", text: "text-white" },
  advanced: { bg: "from-red-400 to-pink-500", text: "text-white" },
};

export const GuideBrowser = ({ posts, categories, featuredIds }: GuideBrowserProps) => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch = !searchQuery ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTags = selectedTags.length === 0 ||
        selectedTags.some((tag) => post.tags?.includes(tag));
      return matchesSearch && matchesTags;
    });
  }, [posts, searchQuery, selectedTags]);

  const toggleTag = useCallback((tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }, []);

  return (
    <div>
      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-white/60 dark:bg-slate-800/60 p-4 rounded-2xl border border-white/20 dark:border-white/10"
      >
        <div className="relative flex-1 max-w-md">
          <MagnifyingGlass className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <Input
            placeholder={t("guide.searchPlaceholder", "Search guides...")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-12 rounded-xl border-0 bg-white dark:bg-slate-700 shadow-sm"
          />
        </div>

        <Button
          variant={showFilters ? "default" : "outline"}
          onClick={() => setShowFilters(!showFilters)}
          className={`rounded-xl h-12 ${showFilters ? "bg-emerald-600 hover:bg-emerald-700" : ""}`}
        >
          <FunnelSimple className="mr-2 h-4 w-4" />
          {t("guide.filterByTags", "Filter by tag")}
        </Button>
      </motion.div>

      {/* Tags filter */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-8 overflow-hidden"
          >
            <div className="flex flex-wrap gap-2 rounded-xl bg-white/60 dark:bg-slate-800/60 p-5 border border-white/20 dark:border-white/10">
              {categories.map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleTag(tag)}
                  className={`rounded-full ${selectedTags.includes(tag) ? "bg-emerald-500 border-0" : ""}`}
                >
                  {tag}
                </Button>
              ))}
              {selectedTags.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedTags([])}
                  className="text-red-500 hover:text-red-600"
                >
                  <X className="mr-1 h-3 w-3" />
                  {t("guide.clear", "Clear all")}
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Guides Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <GuideCard
              key={post.slug || post.id}
              post={post}
              featured={featuredIds.includes(post.slug) || featuredIds.includes(post.id)}
              index={index}
              readMoreText={t("guide.readMore", "Read")}
            />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <h3 className="text-xl font-bold text-slate-600 dark:text-slate-400 mb-2">
            {t("guide.noGuidesFound", "No guides found")}
          </h3>
          <Button
            variant="link"
            onClick={() => { setSearchQuery(""); setSelectedTags([]); }}
            className="text-emerald-600"
          >
            {t("guide.clearFilters", "Clear filters")}
          </Button>
        </div>
      )}
    </div>
  );
};

const GuideCard = ({ post, featured, index, readMoreText }: { post: GuidePost; featured: boolean; index: number; readMoreText: string }) => {
  const diffStyle = difficultyStyles[post.difficulty || ""] || { bg: "from-slate-400 to-slate-500", text: "text-white" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <a href={`/guide/${post.slug}`} className="block h-full">
        <Card className="group relative h-full cursor-pointer overflow-hidden rounded-2xl border-0 bg-white/80 p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 dark:bg-slate-800/80">
          <div className="absolute inset-0 bg-emerald-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border-2 border-emerald-500/20" />

          <div className="relative z-10 flex flex-col h-full">
            <div className="mb-4 flex items-center justify-between">
              {featured && (
                <Badge className="bg-amber-400 text-white shadow-lg border-0">
                  <Star className="mr-1 h-3 w-3 fill-current" />
                  Featured
                </Badge>
              )}
              {post.difficulty && (
                <Badge className={`bg-amber-400 ${diffStyle.text} border-0 ml-auto`}>
                  {post.difficulty}
                </Badge>
              )}
            </div>

            <h3 className="mb-3 text-xl font-bold text-slate-900 transition-colors group-hover:text-emerald-600 dark:text-white">
              {post.title}
            </h3>

            <p className="mb-4 text-sm text-slate-600 line-clamp-2 dark:text-slate-400 flex-grow">
              {post.excerpt}
            </p>

            <div className="mb-4 flex flex-wrap gap-2">
              {post.tags?.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="border-emerald-200 text-emerald-700 dark:border-emerald-700 dark:text-emerald-400">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mt-auto">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <User className="h-3.5 w-3.5" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime || "5 min"}
                </span>
              </div>
              <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium group-hover:translate-x-1 transition-transform">
                {readMoreText}
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </Card>
      </a>
    </motion.div>
  );
};
