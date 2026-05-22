import React, { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";
import { TranslationProvider } from "@/contexts/TranslationContext";

/**
 * App entry — fixed and cleaned:
 * - No duplicate exports or stray lines.
 * - Pages and non-critical UI are lazy-loaded to reduce initial bundle size.
 * - Simple Suspense fallbacks to avoid blocking first paint.
 */

// Lazy-loaded page components (assumed default exports)
const Index = lazy(() => import("./react-pages/Index"));
const Download = lazy(() => import("./react-pages/Download"));
const Blog = lazy(() => import("./react-pages/Blog"));
const Guide = lazy(() => import("./react-pages/Guide"));
const ModernChangelog = lazy(() => import("./react-pages/ModernChangelog"));
const ModernIssues = lazy(() => import("./react-pages/ModernIssues"));
const Testing = lazy(() => import("./react-pages/Testing"));
const Information = lazy(() => import("./react-pages/Information"));
const NotFound = lazy(() => import("./react-pages/NotFound"));

// Lazy-load named-export components by mapping to default
const StaggeredMenu = lazy(() =>
  import("./components/StaggeredMenu").then((m) => ({
    default: m.StaggeredMenu,
  })),
);
const Footer = lazy(() =>
  import("./components/Footer").then((m) => ({ default: m.Footer })),
);

// Small, lightweight fallback used while lazy chunks load
const Fallback: React.FC<{ message?: string }> = ({ message = "Loading…" }) => (
  <div
    role="status"
    aria-live="polite"
    className="min-h-[56px] flex items-center justify-center p-4 text-sm text-muted-foreground"
  >
    {message}
  </div>
);

const queryClient = new QueryClient();

const AppContent: React.FC = () => {
  // Keep theme hook synchronous and inexpensive
  useTheme();

  // Function to handle download click from footer
  const handleDownloadClick = () => {
    // Navigate to download page
    window.location.href = "/download";
  };

  return (
    <BrowserRouter>
      <TranslationProvider>
        <div className="min-h-screen bg-background text-foreground">
          <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 border-b border-border/40">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
              <Suspense fallback={<Fallback message="Loading menu…" />}>
                <StaggeredMenu />
              </Suspense>
            </div>
          </header>

          <main className="pt-16">
            <Suspense fallback={<Fallback message="Loading page…" />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/download" element={<Download />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<Blog />} />
                <Route path="/guide" element={<Guide />} />
                <Route path="/guide/:id" element={<Guide />} />
                <Route path="/changelog" element={<ModernChangelog />} />
                <Route path="/issues" element={<ModernIssues />} />
                <Route path="/testing" element={<Testing />} />
                <Route path="/information" element={<Information />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>

          <Suspense fallback={<Fallback message="Loading footer…" />}>
            <Footer onDownloadClick={handleDownloadClick} />
          </Suspense>
        </div>
      </TranslationProvider>
    </BrowserRouter>
  );
};

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppContent />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
