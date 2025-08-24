'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

import type { TargetAndTransition } from 'framer-motion';

interface AnimatedCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  whileHover?: TargetAndTransition;
}

export function AnimatedCard({ 
  children, 
  delay = 0, 
  className,
  whileHover = { y: -8, scale: 1.02 }
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={whileHover}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className={className}
    >
      <Card className="nexus-card-hover border-0 shadow-lg h-full">
        {children}
      </Card>
    </motion.div>
  );
}