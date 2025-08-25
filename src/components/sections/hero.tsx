'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/animated-section';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden flex items-center">
      {/* Polygon Shift Geometric Pattern Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Polygon Grid - Hero Version */}
        {[...Array(18)].map((_, i) => {
          const row = Math.floor(i / 6);
          const col = i % 6;
          return (
            <motion.div
              key={`hero-polygon-${i}`}
              className="absolute"
              style={{
                left: `${col * 20 + 3}%`,
                top: `${row * 25 + 8}%`,
                width: `${50 + (i % 5) * 20}px`,
                height: `${50 + (i % 5) * 20}px`,
                clipPath: i % 10 === 0 ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : // Triangle
                         i % 10 === 1 ? 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' : // Octagon
                         i % 10 === 2 ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' : // Diamond
                         i % 10 === 3 ? 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' : // Hexagon
                         i % 10 === 4 ? 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 100%, 0% 100%)' : // Pentagon
                         i % 10 === 5 ? 'polygon(20% 0%, 80% 0%, 100% 60%, 50% 100%, 0% 60%)' : // Arrow
                         i % 10 === 6 ? 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)' : // Hexagon 2
                         i % 10 === 7 ? 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' : // Star
                         i % 10 === 8 ? 'polygon(40% 0%, 60% 0%, 100% 40%, 100% 60%, 60% 100%, 40% 100%, 0% 60%, 0% 40%)' : // Cross
                         'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)', // Heptagon
                background: `linear-gradient(135deg, rgba(${
                  i % 4 === 0 ? '59, 130, 246' : 
                  i % 4 === 1 ? '168, 85, 247' : 
                  i % 4 === 2 ? '34, 197, 94' : 
                  '236, 72, 153'
                }, ${0.15 + (i % 3) * 0.1}), rgba(${
                  i % 4 === 0 ? '59, 130, 246' : 
                  i % 4 === 1 ? '168, 85, 247' : 
                  i % 4 === 2 ? '34, 197, 94' : 
                  '236, 72, 153'
                }, ${0.08 + (i % 3) * 0.05}))`,
                border: `2px solid rgba(${
                  i % 4 === 0 ? '59, 130, 246' : 
                  i % 4 === 1 ? '168, 85, 247' : 
                  i % 4 === 2 ? '34, 197, 94' : 
                  '236, 72, 153'
                }, ${0.3 + (i % 3) * 0.1})`,
                filter: 'blur(0.5px)',
                boxShadow: `0 0 ${15 + (i % 3) * 5}px rgba(${
                  i % 4 === 0 ? '59, 130, 246' : 
                  i % 4 === 1 ? '168, 85, 247' : 
                  i % 4 === 2 ? '34, 197, 94' : 
                  '236, 72, 153'
                }, 0.2)`
              }}
              animate={{
                rotate: [0, i % 2 === 0 ? 360 : -360],
                scale: [1, 1.5, 0.8, 1.2, 1],
                opacity: [0.3, 0.8, 0.4, 0.6, 0.3],
                x: [0, Math.sin(i * Math.PI / 8) * 40, Math.cos(i * Math.PI / 6) * 30, 0],
                y: [0, Math.cos(i * Math.PI / 8) * 35, Math.sin(i * Math.PI / 6) * 25, 0]
              }}
              transition={{
                duration: 10 + (i % 8) * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2
              }}
            />
          );
        })}
        
        {/* Connecting Network Lines */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`hero-connection-${i}`}
            className="absolute"
            style={{
              width: `${80 + i * 20}px`,
              height: '2px',
              background: `linear-gradient(90deg, transparent, rgba(${
                i % 4 === 0 ? '59, 130, 246' : 
                i % 4 === 1 ? '168, 85, 247' : 
                i % 4 === 2 ? '34, 197, 94' : 
                '236, 72, 153'
              }, 0.4), transparent)`,
              left: `${3 + (i % 8) * 12}%`,
              top: `${10 + (i % 7) * 13}%`,
              transformOrigin: 'center',
              transform: `rotate(${i * 18}deg)`
            }}
            animate={{
              scaleX: [0, 1.5, 0],
              opacity: [0, 0.8, 0],
              rotate: [i * 18, (i * 18) + 180]
            }}
            transition={{
              duration: 4 + (i % 6),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
        
        {/* Dynamic Polygon Layers */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`hero-layer-${i}`}
            className="absolute"
            style={{
              left: `${8 + (i % 5) * 20}%`,
              top: `${15 + (i % 3) * 30}%`,
              width: `${40 + (i % 6) * 15}px`,
              height: `${40 + (i % 6) * 15}px`,
              clipPath: i % 8 === 0 ? 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' : // Star
                       i % 8 === 1 ? 'polygon(40% 0%, 60% 0%, 100% 40%, 100% 60%, 60% 100%, 40% 100%, 0% 60%, 0% 40%)' : // Cross
                       i % 8 === 2 ? 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)' : // Rounded Square
                       i % 8 === 3 ? 'polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)' : // Complex Star
                       i % 8 === 4 ? 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' : // Octagon
                       i % 8 === 5 ? 'polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)' : // Decagon
                       i % 8 === 6 ? 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' : // Octagon 2
                       'polygon(50% 0%, 90% 15%, 100% 50%, 90% 85%, 50% 100%, 10% 85%, 0% 50%, 10% 15%)', // Complex Octagon
              background: `linear-gradient(135deg, rgba(${
                i % 4 === 0 ? '59, 130, 246' : 
                i % 4 === 1 ? '168, 85, 247' : 
                i % 4 === 2 ? '34, 197, 94' : 
                '236, 72, 153'
              }, ${0.1 + (i % 3) * 0.05}), rgba(${
                i % 4 === 0 ? '59, 130, 246' : 
                i % 4 === 1 ? '168, 85, 247' : 
                i % 4 === 2 ? '34, 197, 94' : 
                '236, 72, 153'
              }, ${0.05 + (i % 3) * 0.03}))`,
              border: `1px solid rgba(${
                i % 4 === 0 ? '59, 130, 246' : 
                i % 4 === 1 ? '168, 85, 247' : 
                i % 4 === 2 ? '34, 197, 94' : 
                '236, 72, 153'
              }, 0.2)`,
              backdropFilter: 'blur(1px)'
            }}
            animate={{
              x: [0, Math.cos(i * Math.PI / 7) * 50, Math.sin(i * Math.PI / 5) * 35, 0],
              y: [0, Math.sin(i * Math.PI / 7) * 40, Math.cos(i * Math.PI / 5) * 30, 0],
              rotate: [0, i % 2 === 0 ? 360 : -360],
              scale: [1, 1.3, 0.9, 1]
            }}
            transition={{
              duration: 15 + (i % 7) * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8
            }}
          />
        ))}
        
        {/* Glowing Nodes */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`hero-node-${i}`}
            className="absolute"
            style={{
              left: `${12 + (i % 6) * 15}%`,
              top: `${18 + (i % 3) * 25}%`,
              width: `${8 + (i % 4) * 4}px`,
              height: `${8 + (i % 4) * 4}px`,
              background: `rgba(${
                i % 4 === 0 ? '59, 130, 246' : 
                i % 4 === 1 ? '168, 85, 247' : 
                i % 4 === 2 ? '34, 197, 94' : 
                '236, 72, 153'
              }, 0.6)`,
              borderRadius: '50%',
              boxShadow: `0 0 ${10 + (i % 3) * 5}px rgba(${
                i % 4 === 0 ? '59, 130, 246' : 
                i % 4 === 1 ? '168, 85, 247' : 
                i % 4 === 2 ? '34, 197, 94' : 
                '236, 72, 153'
              }, 0.4)`
            }}
            animate={{
              scale: [1, 3, 1],
              opacity: [0.4, 1, 0.4],
              x: [0, Math.sin(i * Math.PI / 9) * 70, Math.cos(i * Math.PI / 7) * 50, 0],
              y: [0, Math.cos(i * Math.PI / 9) * 55, Math.sin(i * Math.PI / 7) * 40, 0]
            }}
            transition={{
              duration: 7 + (i % 5) * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4
            }}
          />
        ))}
        
        {/* Floating Geometric Dust */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`hero-dust-${i}`}
            className="absolute"
            style={{
              left: `${3 + (i % 20) * 5}%`,
              top: `${5 + (i % 12) * 8}%`,
              width: `${3 + (i % 3) * 2}px`,
              height: `${3 + (i % 3) * 2}px`,
              background: `rgba(${
                i % 4 === 0 ? '59, 130, 246' : 
                i % 4 === 1 ? '168, 85, 247' : 
                i % 4 === 2 ? '34, 197, 94' : 
                '236, 72, 153'
              }, ${0.3 + (i % 2) * 0.2})`,
              borderRadius: i % 3 === 0 ? '50%' : '0%',
              transform: i % 4 === 0 ? 'rotate(45deg)' : 'none'
            }}
            animate={{
              y: [0, -20 - (i % 4) * 10, 0],
              x: [0, Math.sin(i * 0.3) * 15, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.5, 1],
              rotate: [0, i % 2 === 0 ? 180 : -180]
            }}
            transition={{
              duration: 8 + (i % 4) * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <AnimatedSection delay={0.2}>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              生成AIで、
              <br />
              貴社のビジネスの
              <br />
              <motion.span 
                className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent relative inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                可能性を無限に
                <motion.div
                  className="absolute -inset-2 bg-blue-500/10 rounded-lg blur-sm"
                  animate={{
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.span>
            </motion.h1>
          </AnimatedSection>
          
          <AnimatedSection delay={0.8}>
            <p className="text-xl md:text-2xl mb-12 text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
              creationラボは、生成AI技術を活用したソリューション開発から人材育成まで、
              <br className="hidden md:block" />
              企業のAI活用を包括的にサポートし、クリエイティビティを創造をするお手伝いを致します。
            </p>
          </AnimatedSection>

          <AnimatedSection delay={1.2}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link href="/contact">
                  <Button 
                    className="text-lg px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-none rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 font-semibold"
                  >
                    お問い合わせをする
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link href="/services">
                  <Button 
                    className="text-lg px-10 py-5 bg-transparent border-2 border-white/20 text-white hover:bg-white/10 hover:border-blue-400 rounded-full shadow-xl hover:shadow-white/10 transition-all duration-300 font-semibold backdrop-blur-sm"
                  >
                    サービスを見る
                  </Button>
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Scroll indicator */}
          <AnimatedSection delay={1.4}>
            <motion.div 
              className="mt-16 flex justify-center"
              animate={{
                y: [0, 10, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <motion.div 
                  className="w-1 h-3 bg-blue-400 rounded-full mt-2"
                  animate={{
                    y: [0, 12, 0],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}