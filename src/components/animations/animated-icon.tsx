'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedIconProps {
  children: ReactNode;
  animation?: 'bounce' | 'pulse' | 'spin' | 'float' | 'glow';
  className?: string;
  delay?: number;
}

export function AnimatedIcon({ 
  children, 
  animation = 'float', 
  className = '', 
  delay = 0 
}: AnimatedIconProps) {
  const animations = {
    bounce: {
      y: [0, -10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      },
    },
    pulse: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      },
    },
    spin: {
      rotate: 360,
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'linear',
        delay,
      },
    },
    float: {
      y: [0, -8, 0],
      x: [0, 2, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      },
    },
    glow: {
      boxShadow: [
        '0 0 10px rgba(255, 223, 43, 0.3)',
        '0 0 20px rgba(255, 223, 43, 0.6)',
        '0 0 10px rgba(255, 223, 43, 0.3)',
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      },
    },
  };

  return (
    <motion.div
      className={`inline-block ${className}`}
      animate={animations[animation]}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 }
      }}
    >
      {children}
    </motion.div>
  );
}