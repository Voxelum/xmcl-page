import { useSyncExternalStore, useCallback, useState, useEffect } from 'react';

// Cache the location snapshot to avoid infinite loops
let cachedSnapshot = { pathname: '/', hash: '', search: '' };

function getSnapshot() {
  if (typeof window === 'undefined') {
    return cachedSnapshot;
  }
  
  const newSnapshot = {
    pathname: window.location.pathname,
    hash: window.location.hash,
    search: window.location.search,
  };
  
  // Only update cache if values actually changed
  if (
    cachedSnapshot.pathname !== newSnapshot.pathname ||
    cachedSnapshot.hash !== newSnapshot.hash ||
    cachedSnapshot.search !== newSnapshot.search
  ) {
    cachedSnapshot = newSnapshot;
  }
  
  return cachedSnapshot;
}

function getServerSnapshot() {
  return cachedSnapshot;
}

/**
 * Custom hook to get the current pathname, replacing react-router-dom's useLocation
 * Works with Astro's static pages by reading from window.location
 */
export function useLocation() {
  const subscribe = useCallback((callback: () => void) => {
    window.addEventListener('popstate', callback);
    window.addEventListener('hashchange', callback);
    return () => {
      window.removeEventListener('popstate', callback);
      window.removeEventListener('hashchange', callback);
    };
  }, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/**
 * Custom hook to navigate programmatically, replacing react-router-dom's useNavigate
 * Works with regular page navigation in Astro
 */
export function useNavigate() {
  const navigate = useCallback((to: string | { hash?: string; pathname?: string }) => {
    if (typeof to === 'string') {
      window.location.href = to;
    } else {
      if (to.pathname) {
        window.location.pathname = to.pathname;
      }
      if (to.hash) {
        window.location.hash = to.hash;
      }
    }
  }, []);

  return navigate;
}

/**
 * Custom hook to get URL parameters, replacing react-router-dom's useParams
 * Uses hash-based routing for Astro static sites (e.g., /blog#post-slug)
 */
export function useParams<T extends Record<string, string> = Record<string, string>>(): T {
  const [params, setParams] = useState<Record<string, string>>({});
  
  useEffect(() => {
    const updateParams = () => {
      const hash = window.location.hash;
      const newParams: Record<string, string> = {};
      
      if (hash && hash.length > 1) {
        newParams.id = hash.slice(1); // Remove the # character
      }
      
      setParams(newParams);
    };
    
    // Initial update
    updateParams();
    
    // Listen for hash changes
    window.addEventListener('hashchange', updateParams);
    return () => window.removeEventListener('hashchange', updateParams);
  }, []);
  
  return params as T;
}
