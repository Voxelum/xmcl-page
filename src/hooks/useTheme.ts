
import { useState, useEffect } from 'react';

export type ThemeMode = 'light' | 'dark' | 'system';
export type Theme = 'light' | 'dark';

const getSystemTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const getEffectiveTheme = (mode: ThemeMode): Theme => {
  if (mode === 'system') {
    return getSystemTheme();
  }
  return mode;
};

export const useTheme = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') return 'light';
    const savedMode = localStorage.getItem('theme') as ThemeMode;
    return savedMode || 'light';
  });

  const effectiveTheme = getEffectiveTheme(themeMode);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const root = document.documentElement;
    
    // Remove all theme classes
    root.classList.remove('light', 'dark');
    
    // Add current effective theme class
    root.classList.add(effectiveTheme);
    
    // Save the mode preference (not the effective theme)
    localStorage.setItem('theme', themeMode);
  }, [themeMode, effectiveTheme]);

  // Listen for system theme changes when in system mode
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (themeMode !== 'system') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const root = document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(getSystemTheme());
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [themeMode]);

  return { 
    theme: effectiveTheme, 
    themeMode, 
    setTheme: setThemeMode 
  };
};
