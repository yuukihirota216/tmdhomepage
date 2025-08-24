'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface TooltipProps {
  content: string;
  children: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

export function Tooltip({ content, children, position = 'top', className = '' }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const positions = {
    top: {
      tooltip: '-top-2 left-1/2 -translate-x-1/2 -translate-y-full',
      arrow: 'top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-gray-800',
    },
    bottom: {
      tooltip: '-bottom-2 left-1/2 -translate-x-1/2 translate-y-full',
      arrow: 'bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-gray-800',
    },
    left: {
      tooltip: 'left-0 top-1/2 -translate-x-full -translate-y-1/2',
      arrow: 'left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-gray-800',
    },
    right: {
      tooltip: 'right-0 top-1/2 translate-x-full -translate-y-1/2',
      arrow: 'right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-gray-800',
    },
  };

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={`absolute z-50 ${positions[position].tooltip}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
          >
            <div className="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap max-w-xs">
              {content}
              <div
                className={`absolute w-0 h-0 border-4 ${positions[position].arrow}`}
                style={{ borderWidth: '4px' }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}