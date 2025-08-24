'use client';

import { motion } from 'framer-motion';

interface AnimatedGradientProps {
  className?: string;
  variant?: 'hero' | 'section' | 'card';
}

export function AnimatedGradient({ className = '', variant = 'hero' }: AnimatedGradientProps) {
  const gradientVariants = {
    hero: {
      background: [
        'linear-gradient(45deg, #142248 0%, #1e3a5f 25%, #2a4d76 50%, #1e3a5f 75%, #142248 100%)',
        'linear-gradient(225deg, #142248 0%, #2a4d76 25%, #1e3a5f 50%, #142248 75%, #1e3a5f 100%)',
        'linear-gradient(45deg, #1e3a5f 0%, #142248 25%, #2a4d76 50%, #142248 75%, #1e3a5f 100%)',
      ],
    },
    section: {
      background: [
        'linear-gradient(135deg, rgba(255,223,43,0.1) 0%, rgba(20,34,72,0.05) 50%, rgba(255,223,43,0.1) 100%)',
        'linear-gradient(225deg, rgba(20,34,72,0.05) 0%, rgba(255,223,43,0.1) 50%, rgba(20,34,72,0.05) 100%)',
        'linear-gradient(135deg, rgba(255,223,43,0.1) 0%, rgba(20,34,72,0.05) 50%, rgba(255,223,43,0.1) 100%)',
      ],
    },
    card: {
      background: [
        'linear-gradient(135deg, rgba(255,223,43,0.02) 0%, rgba(20,34,72,0.02) 100%)',
        'linear-gradient(225deg, rgba(20,34,72,0.02) 0%, rgba(255,223,43,0.02) 100%)',
        'linear-gradient(135deg, rgba(255,223,43,0.02) 0%, rgba(20,34,72,0.02) 100%)',
      ],
    },
  };

  return (
    <motion.div
      className={`absolute inset-0 ${className}`}
      animate={gradientVariants[variant]}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'linear',
      }}
      style={{
        backgroundSize: '400% 400%',
      }}
    />
  );
}