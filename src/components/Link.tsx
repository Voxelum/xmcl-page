import React from 'react';

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
  const finalHref = to || href || '#';
  
  return (
    <a href={finalHref} {...props}>
      {children}
    </a>
  );
};

export default Link;
