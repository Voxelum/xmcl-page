import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Link } from '@/components/Link';
import { House, FileText, BookOpen, GitBranch, WarningCircle, TestTube, Info } from '@phosphor-icons/react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const MacOSDock = () => {
  const { t } = useTranslation();
  const mouseX = useMotionValue(Infinity);

  const navItems = [
      { label: 'nav.home', href: '/', icon: House },
      { label: 'nav.blog', href: '/blog', icon: FileText },
      { label: 'nav.guide', href: '/guide', icon: BookOpen },
      { label: 'nav.changelog', href: '/changelog', icon: GitBranch },
      { label: 'nav.issues', href: '/issues', icon: WarningCircle },
      { label: 'nav.testing', href: '/testing', icon: TestTube },
      { label: 'nav.information', href: '/information', icon: Info },
    ];

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-end gap-4 h-16 px-4 pb-3 mx-auto rounded-2xl bg-white/20 dark:bg-black/20 border border-white/20 shadow-2xl"
      >
        {navItems.map((item, index) => (
          <DockIcon key={index} mouseX={mouseX} item={item} t={t} />
        ))}
      </motion.div>
    </div>
  );
};

function DockIcon({ mouseX, item, t }: { mouseX: MotionValue; item: any; t: any }) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const Icon = item.icon;

  return (
    <Link to={item.href}>
        <Tooltip>
            <TooltipTrigger asChild>
                <motion.div
                    ref={ref}
                    style={{ width, willChange: 'width' }}
                    className="aspect-square rounded-full bg-slate-800/80 border border-slate-700/50 flex items-center justify-center relative hover:bg-slate-700/80 transition-colors group"
                >
                    <Icon className="w-1/2 h-1/2 text-slate-200 group-hover:text-white" />
                </motion.div>
            </TooltipTrigger>
            <TooltipContent side="top">
                <p>{t(item.label)}</p>
            </TooltipContent>
        </Tooltip>
    </Link>
  );
}
