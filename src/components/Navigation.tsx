
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from '@/components/Link';
import { List, X } from '@phosphor-icons/react';
import { motion } from 'framer-motion';
import { LanguageSelector } from './LanguageSelector';
import { ThemeSelector } from './ThemeSelector';
import { NavItems } from './navigation/NavItems';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999] bg-white/95 dark:bg-slate-900/95 border-b border-slate-200/60 dark:border-slate-700/50 shadow-lg transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 overflow-hidden">
              <img
                src="/PhotoXMCL/logo.png"
                alt="X Minecraft Launcher Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-lg sm:text-2xl font-bold text-blue-600">
              X Minecraft Launcher
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavItems />
            <div className="flex items-center gap-3">
              <ThemeSelector />
              <LanguageSelector />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeSelector />
            <LanguageSelector />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-300"
            >
              {isOpen ? <X className="w-5 h-5" /> : <List className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            className="md:hidden border-t border-slate-200 dark:border-slate-700 py-4 bg-white/95 dark:bg-slate-900/95"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-2 px-2 pb-4">
              <NavItems 
                className="text-base font-medium transition-colors duration-300 px-4 py-3 rounded-xl hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 active:bg-slate-200 dark:active:bg-slate-700"
                onItemClick={() => setIsOpen(false)}
              />
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
