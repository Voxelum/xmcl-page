import React from 'react';
import { usePageLocale } from "@/contexts/PageLocaleContext";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to?: string;
  href?: string;
  children: React.ReactNode;
}

/**
 * Universal Link component that works with both Vite (react-router) and Astro.
 * In Astro, we use regular anchor tags for navigation.
 */
export const Link: React.FC<LinkProps> = ({ to, href, children, ...props }) => {
  const locale = usePageLocale();
  const rawHref = to || href || '#';
  const finalHref = locale && rawHref.startsWith("/") &&
    !rawHref.startsWith(`/${locale}/`) &&
    !rawHref.startsWith("/api/") &&
    !rawHref.endsWith(".xml")
    ? `/${locale}${rawHref}`
    : rawHref;
  
  return (
    <a href={finalHref} {...props}>
      {children}
    </a>
  );
};

export default Link;
