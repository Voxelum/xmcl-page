import React from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TranslationProvider } from "@/contexts/TranslationContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

const queryClient = new QueryClient();

interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * Wrapper component that provides all necessary React contexts for islands in Astro.
 * Use this to wrap React components that need access to QueryClient, Translations, etc.
 */
export function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <TranslationProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {children}
        </TooltipProvider>
      </TranslationProvider>
    </QueryClientProvider>
  );
}

export default Providers;
