'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ProgressBarProps {
  label: string;
  percentage: number;
  color?: string;
  className?: string;
  showPercentage?: boolean;
}

export function ProgressBar({ 
  label, 
  percentage, 
  color = '#ffdf2b', 
  className = '',
  showPercentage = true 
}: ProgressBarProps) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        {showPercentage && (
          <motion.span
            className="text-sm font-semibold text-gray-900"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {percentage}%
          </motion.span>
        )}
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <motion.div
          className="h-full rounded-full relative"
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)`,
            }}
            animate={{
              x: [-100, 200],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}