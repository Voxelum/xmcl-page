import { Button } from "@/components/ui/button";
import { Sun, Moon, MonitorPlay } from "@phosphor-icons/react";
import { useTranslation } from "@/contexts/TranslationContext";
import { useTheme } from "@/hooks/useTheme";
import { motion, AnimatePresence } from "framer-motion";

export const ThemeSelector = () => {
  const { t } = useTranslation();
  const { theme, themeMode, setTheme } = useTheme();
  
  const cycleTheme = () => {
    if (themeMode === 'light') setTheme('dark');
    else if (themeMode === 'dark') setTheme('system');
    else setTheme('light');
  };

  const getIcon = () => {
    if (themeMode === 'system') return MonitorPlay;
    return theme === 'dark' ? Moon : Sun;
  };

  const getColor = () => {
    if (themeMode === 'system') return 'text-blue-400 fill-blue-400/20';
    return theme === 'dark' ? 'text-indigo-300 fill-indigo-300/20' : 'text-amber-500 fill-amber-500/20';
  };

  const getGlow = () => {
    if (themeMode === 'system') return 'rgba(59, 130, 246, 0.4)';
    return theme === 'dark'
      ? 'rgba(99, 102, 241, 0.4)'
      : 'rgba(251, 191, 36, 0.4)';
  };

  const Icon = getIcon();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      className="relative"
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={cycleTheme}
        className="relative h-10 w-10 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors border border-transparent dark:border-white/5 shadow-sm"
        aria-label={`Theme: ${themeMode}`}
        title={`Current: ${themeMode} (Click to cycle)`}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-xl"
          style={{ background: getGlow() }}
          animate={{ opacity: theme === 'dark' ? 0.6 : 0.4 }}
          transition={{ duration: 0.5 }}
        />

        {/* Icon container */}
        <div className="relative z-10 flex items-center justify-center">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={themeMode}
              initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              <Icon className={`w-5 h-5 ${getColor()}`} />
            </motion.div>
          </AnimatePresence>
        </div>
      </Button>
    </motion.div>
  );
}
