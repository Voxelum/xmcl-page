import { motion, AnimatePresence } from 'framer-motion';
import { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslation } from '@/contexts/TranslationContext';
import { LanguageTrigger, LanguagePanel } from '@/components/LanguageSelector';
import { ThemeSelector } from '@/components/ThemeSelector';
import { X, List, House, FileText, BookOpen, GitBranch, WarningCircle, TestTube, Info, ArrowSquareOut } from '@phosphor-icons/react';
import { Link } from '@/components/Link';

const navItems = [
  { label: 'nav.home', href: '/', icon: House },
  { label: 'nav.blog', href: '/blog', icon: FileText },
  { label: 'nav.guide', href: '/guide', icon: BookOpen },
  { label: 'nav.changelog', href: '/changelog', icon: GitBranch },
  { label: 'nav.issues', href: '/issues', icon: WarningCircle },
  { label: 'nav.testing', href: '/testing', icon: TestTube },
  { label: 'nav.information', href: '/information', icon: Info },
];

const socialLinks = [
  {
    href: "https://discord.gg/W5XVwYY7GQ",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.086 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z"/></svg>
    )
  },
  {
    href: "https://kook.top/wM7X1f",
    color: "text-green-500",
    bg: "bg-green-500/10",
    icon: <ArrowSquareOut className="w-5 h-5" />
  },
  {
    href: "https://afdian.com/@ci010",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.013 7.15l-3.376 6.345h6.77L12.013 7.15zM24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-3.832.748l-4.103-8.89a.537.537 0 0 0-.486-.312h-7.14a.54.54 0 0 0-.5.334l-3.793 8.868a.54.54 0 0 0 .493.766h2.49l.643-1.39h8.336l.724 1.39h2.86a.54.54 0 0 0 .476-.766z"/></svg>
    )
  },
  {
    href: "https://ko-fi.com/ci010",
    color: "text-sky-500",
    bg: "bg-sky-500/10",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 3.722-2.671 3.722-2.671s2.111-2.905 2.927-4.245zM12.896 15.556h-7.39V6.02h7.39v9.536zm8.82-3.41s-1.464 2.47-3.834 1.956c0 0 .61-3.66 1.408-5.398 0 0 1.957.519 2.426 3.442zM7.226 8.524c-.219.006-.412.106-.525.275-.773 1.166.309 3.003 1.488 4.343.344.391.802.407 1.157.102 1.325-1.139 2.536-2.923 1.636-4.254-.109-.161-.295-.259-.507-.266-.466.012-.862.241-1.258.463-.39-.228-.79-.462-1.264-.474l-.727-.189z"/></svg>
    )
  },
];

export const StaggeredMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<'menu' | 'language'>('menu');
  const { t } = useTranslation();

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => {
      if (prev) setView('menu'); // reset view when closing
      return !prev;
    });
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    setView('menu');
  }, []);

  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setView('menu');
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: { duration: 0.2, ease: "easeInOut" }
    },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 350, damping: 25 }
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.03, duration: 0.2 }
    })
  };

  return (
    <div className="relative flex flex-col items-center" ref={menuRef}>
      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative z-50 flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-white/80 dark:bg-slate-900/80 border border-white/20 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:shadow-indigo-500/25 transition-all"
        onClick={toggleMenu}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-5 h-5" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <List className="w-5 h-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Backdrop for Mobile mostly, but serves as focus trap visual */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/5 dark:bg-black/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="absolute top-16 right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 w-[300px] z-50"
          >
            <div className="overflow-hidden rounded-3xl bg-white/85 dark:bg-slate-950/85 border border-white/40 dark:border-white/10 shadow-2xl ring-1 ring-black/5 dark:ring-white/5">
              
              <AnimatePresence mode="wait">
                {view === 'menu' ? (
                  /* =================== MAIN MENU VIEW =================== */
                  <motion.div
                    key="menu-view"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Navigation Items */}
                    <div className="p-2 flex flex-col gap-1 max-h-[50vh] overflow-y-auto custom-scrollbar">
                      {navItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                          <motion.div
                            key={index}
                            custom={index}
                            variants={itemVariants}
                          >
                            <Link
                              to={item.href}
                              onClick={closeMenu}
                              className="group flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white transition-all active:scale-[0.98]"
                            >
                              <Icon className="w-4 h-4 text-slate-400 group-hover:text-indigo-500 transition-colors" />
                              {t(item.label)}
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-slate-200 dark:bg-slate-700 mx-4 my-1" />

                    {/* Social Icons Grid */}
                    <div className="p-3">
                      <div className="grid grid-cols-4 gap-3">
                        {socialLinks.map((social, idx) => (
                          <motion.a
                            key={idx}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center justify-center aspect-square rounded-2xl ${social.bg} ${social.color} hover:brightness-110 hover:scale-105 active:scale-95 transition-all border border-transparent hover:border-white/20 shadow-sm`}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.15 + (idx * 0.05) }}
                          >
                            {social.icon}
                          </motion.a>
                        ))}
                      </div>
                    </div>

                    {/* Footer: Settings */}
                    <div className="bg-slate-50/50 dark:bg-slate-900/50 p-3 flex gap-2 border-t border-slate-200/50 dark:border-slate-800/50">
                       <div className="flex-1">
                          <LanguageTrigger onClick={() => setView('language')} />
                       </div>
                       <div>
                          <ThemeSelector />
                       </div>
                    </div>
                  </motion.div>

                ) : (
                  /* =================== LANGUAGE PANEL VIEW =================== */
                  <motion.div
                    key="language-view"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <LanguagePanel
                      onBack={() => setView('menu')}
                      onClose={closeMenu}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
