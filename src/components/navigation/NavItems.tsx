import React from 'react';
import { Link } from '@/components/Link';
import { useLocation } from '@/hooks/useRouting';
import { useTranslation } from '@/hooks/useTranslation';
import { usePageLocale } from '@/contexts/PageLocaleContext';

interface NavItem {
  name: string;
  path: string;
}

interface NavItemsProps {
  className?: string;
  onItemClick?: () => void;
}

const NavItems: React.FC<NavItemsProps> = ({ className = '', onItemClick }) => {
  const location = useLocation();
  const { t } = useTranslation();
  const locale = usePageLocale();

  const navItems: NavItem[] = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.blog'), path: '/blog' },
    { name: t('nav.guide'), path: '/guide' },
    { name: t('nav.changelog'), path: '/changelog' },
    { name: t('nav.issues'), path: '/issues' },
    { name: t('nav.testing'), path: '/testing' }
  ];

  const baseClassName = "relative text-sm font-medium transition-all duration-300 hover:text-[#ea4c3c] dark:hover:text-[#ea4c3c]";
  const activeClassName = "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#ea4c3c] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100";

  return (
    <>
      {navItems.map((item) => (
        (() => {
          const path = locale ? `/${locale}${item.path}` : item.path;

          return (
            <Link
              key={item.path}
              to={path}
              className={`${baseClassName} ${activeClassName} ${className} ${
               (location.pathname === path ||
                (location.pathname.endsWith('/') ? location.pathname.slice(0, -1) : location.pathname) === path)
              ? 'text-[#ea4c3c] after:scale-x-100'
              : 'text-slate-600 hover:text-[#ea4c3c] dark:text-slate-300 dark:hover:text-white'
              }`}
              onClick={onItemClick}
            >
              {item.name}
            </Link>
          );
        })()
      ))}
    </>
  );
};

export { NavItems };