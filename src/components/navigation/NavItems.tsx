import React from 'react';
import { Link } from '@/components/Link';
import { useLocation } from '@/hooks/useRouting';
import { useTranslation } from '@/hooks/useTranslation';

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

  const navItems: NavItem[] = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.blog'), path: '/blog' },
    { name: t('nav.guide'), path: '/guide' },
    { name: t('nav.changelog'), path: '/changelog' },
    { name: t('nav.issues'), path: '/issues' },
    { name: t('nav.testing'), path: '/testing' }
  ];

  const baseClassName = "relative text-sm font-medium transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400";
  const activeClassName = "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100";

  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`${baseClassName} ${activeClassName} ${className} ${
            (location.pathname === item.path || 
             (location.pathname.endsWith('/') ? location.pathname.slice(0, -1) : location.pathname) === item.path)
              ? 'text-blue-600 dark:text-blue-400 after:scale-x-100'
              : 'text-slate-700 dark:text-slate-300'
          }`}
          onClick={onItemClick}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};

export { NavItems };