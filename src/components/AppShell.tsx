import React from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TranslationProvider } from "@/contexts/TranslationContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { StaggeredMenu } from "@/components/StaggeredMenu";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useOS } from '@/hooks/useOS';
import { useTheme } from '@/hooks/useTheme';
import { MacOSDock } from '@/components/MacOSDock';
import { usePageLocale } from "@/contexts/PageLocaleContext";

const queryClient = new QueryClient();

interface AppShellProps {
  children: React.ReactNode;
  initialLocale?: SupportedLocale;
}

/**
 * AppShell wrapper component that provides all necessary React contexts.
 * This component wraps the entire page content including header and footer.
 */
export function AppShell({ children, initialLocale }: AppShellProps) {
  const os = useOS();
  const pageLocale = usePageLocale();
  const resolvedLocale = initialLocale ?? pageLocale;

  // Initialize theme on app load
  useTheme();

  const handleDownloadClick = React.useCallback(() => {
    window.location.href = pageLocale
      ? `/${pageLocale}/download/`
      : '/download/';
  }, [pageLocale]);

  const isDesktopStyle = os === 'macos' || os === 'linux';

  return (
    <QueryClientProvider client={queryClient}>
      <TranslationProvider initialLocale={resolvedLocale}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
            <div className="min-h-screen bg-background text-foreground">
              {!isDesktopStyle && (
                <>
                  <div className="hidden md:block">
                    <Navigation />
                  </div>
                  <div className="fixed top-6 left-1/2 z-50 -translate-x-1/2 md:hidden">
                    <StaggeredMenu />
                  </div>
                </>
              )}

              <main className={!isDesktopStyle ? "md:pt-20" : undefined}>
                {children}
              </main>

              {isDesktopStyle && <MacOSDock />}

              <Footer onDownloadClick={handleDownloadClick} />
            </div>
        </TooltipProvider>
      </TranslationProvider>
    </QueryClientProvider>
  );
}

export default AppShell;
