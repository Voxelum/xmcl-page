import { useEffect } from "react";
import { AppShell } from '@/components/AppShell';

/**
 * NotFound component - simplified version without hooks that require context
 * to work during Astro SSR where React context is not available
 */
const NotFoundContent = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.error(
        "404 Error: User attempted to access non-existent route:",
        window.location.pathname
      );
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-slate-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">404</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default function NotFound() {
  return (
    <AppShell>
      <NotFoundContent />
    </AppShell>
  );
}
