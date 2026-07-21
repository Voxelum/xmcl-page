
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from '@/components/Link';
import { List, X } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { LanguagePanel, LanguageTrigger } from './LanguageSelector';
import { ThemeSelector } from './ThemeSelector';
import { NavItems } from './navigation/NavItems';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-card border-b border-border shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shadow group-hover:shadow-md transition-all duration-300 transform group-hover:scale-105 overflow-hidden">
              <img
                src="/PhotoXMCL/logo.png"
                alt="X Minecraft Launcher Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="hidden min-[1000px]:inline text-2xl font-bold text-foreground group-hover:text-[#ea4c3c] transition-colors duration-300">
              X Minecraft Launcher
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavItems />
            <div className="flex items-center gap-3">
              <ThemeSelector />
              <div className="relative">
                <LanguageTrigger onClick={() => setIsLanguageOpen((open) => !open)} />
                {isLanguageOpen && (
                  <div className="absolute right-0 top-12 z-50 w-[300px] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
                    <LanguagePanel
                      onBack={() => setIsLanguageOpen(false)}
                      onClose={() => setIsLanguageOpen(false)}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeSelector />
            <LanguageTrigger onClick={() => setIsLanguageOpen((open) => !open)} />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-300"
            >
              {isOpen ? <X className="w-5 h-5" /> : <List className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            className="md:hidden border-t border-border py-4 bg-card"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-2 px-2 pb-4">
              <NavItems 
                className="text-base font-medium transition-colors duration-300 px-4 py-3 rounded-xl hover:text-[#ea4c3c] hover:bg-black/5 dark:hover:bg-white/5 active:bg-black/10 dark:active:bg-white/10"
                onItemClick={() => setIsOpen(false)}
              />
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
