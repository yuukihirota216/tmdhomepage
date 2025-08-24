'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/animated-section';
import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden flex items-center">
      {/* 3D Fluid Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main 3D blob */}
        <motion.div 
          className="absolute top-1/2 left-1/2 w-[800px] h-[600px] -translate-x-1/2 -translate-y-1/2"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.8) 0%, rgba(147, 51, 234, 0.6) 35%, rgba(239, 68, 68, 0.4) 70%, transparent 100%)',
            borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%',
            filter: 'blur(40px)'
          }}
          animate={{
            borderRadius: [
              '40% 60% 70% 30% / 40% 50% 60% 50%',
              '60% 40% 30% 70% / 50% 60% 40% 50%',
              '70% 30% 50% 50% / 30% 70% 50% 60%',
              '40% 60% 70% 30% / 40% 50% 60% 50%'
            ],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Secondary blobs */}
        <motion.div 
          className="absolute top-20 right-20 w-[400px] h-[300px]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(34, 197, 94, 0.6) 0%, rgba(59, 130, 246, 0.4) 50%, transparent 100%)',
            borderRadius: '60% 40% 50% 50% / 70% 30% 60% 40%',
            filter: 'blur(30px)'
          }}
          animate={{
            borderRadius: [
              '60% 40% 50% 50% / 70% 30% 60% 40%',
              '40% 60% 30% 70% / 50% 70% 40% 60%',
              '60% 40% 50% 50% / 70% 30% 60% 40%'
            ],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-32 left-20 w-[300px] h-[400px]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(168, 85, 247, 0.5) 0%, rgba(236, 72, 153, 0.3) 50%, transparent 100%)',
            borderRadius: '50% 50% 40% 60% / 30% 70% 70% 30%',
            filter: 'blur(35px)'
          }}
          animate={{
            borderRadius: [
              '50% 50% 40% 60% / 30% 70% 70% 30%',
              '40% 60% 60% 40% / 70% 30% 30% 70%',
              '50% 50% 40% 60% / 30% 70% 70% 30%'
            ],
            x: [0, -40, 0],
            y: [0, 20, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              background: `radial-gradient(circle, rgba(${i % 2 ? '59, 130, 246' : '168, 85, 247'}, 0.8) 0%, transparent 70%)`,
              left: `${15 + (i * 12)}%`,
              top: `${20 + (i % 4) * 20}%`,
              filter: 'blur(1px)'
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 4 + (i * 0.5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
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