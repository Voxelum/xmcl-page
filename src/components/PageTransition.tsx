import { motion } from 'framer-motion';
import React, { type ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
  className?: string;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.95,
    filter: 'blur(8px)',
    rotateX: 5
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    rotateX: 0,
    transitionEnd: {
      filter: 'none',
      transform: 'none'
    }
  },
  out: {
    opacity: 0,
    y: -30,
    scale: 1.05,
    filter: 'blur(8px)',
    rotateX: -5
  }
};

const pageTransition = {
  type: 'spring' as const,
  stiffness: 260,
  damping: 20,
  filter: { 
    type: "tween",
    ease: "linear",
    duration: 0.3
  }
};

export const PageTransition = ({ children, className }: PageTransitionProps) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={`${className} relative`}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="absolute inset-0 bg-purple-500/10 rounded-lg blur-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.4 }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
