'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  intensity?: 'light' | 'medium' | 'strong';
}

export function HoverCard({ children, className = '', intensity = 'medium' }: HoverCardProps) {
  const getIntensity = () => {
    switch (intensity) {
      case 'light':
        return { scale: 1.02, y: -2, rotateX: 2 };
      case 'medium':
        return { scale: 1.05, y: -5, rotateX: 5 };
      case 'strong':
        return { scale: 1.08, y: -10, rotateX: 8 };
      default:
        return { scale: 1.05, y: -5, rotateX: 5 };
    }
  };

  const hoverEffect = getIntensity();

  return (
    <motion.div
      className={`${className} cursor-pointer`}
      style={{ transformStyle: 'preserve-3d' }}
      whileHover={{
        ...hoverEffect,
        transition: { duration: 0.3, ease: "easeOut" as const }
      }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-full h-full"
        whileHover={{
          boxShadow: '0 20px 40px rgba(0,0,0,0.1), 0 10px 20px rgba(0,0,0,0.05)',
          transition: { duration: 0.3 }
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}