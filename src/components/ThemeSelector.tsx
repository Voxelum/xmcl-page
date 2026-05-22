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
    if (themeMode === 'system') return 'text-slate-400';
    return theme === 'dark' ? 'text-[#ea4c3c]' : 'text-amber-500';
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
        className="relative h-10 w-10 rounded-xl bg-card hover:bg-accent text-foreground transition-colors border border-border shadow-none"
        aria-label={`Theme: ${themeMode}`}
        title={`Current: ${themeMode} (Click to cycle)`}
      >
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
