'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { companyInfo } from '@/data/company';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section className="nexus-section-padding bg-gray-50 relative overflow-hidden">
      {/* Polygon Shift Geometric Pattern Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Polygon Grid - Expanded */}
        {[...Array(24)].map((_, i) => {
          const row = Math.floor(i / 6);
          const col = i % 6;
          return (
            <motion.div
              key={`polygon-${i}`}
              className="absolute"
              style={{
                left: `${col * 16 + 2}%`,
                top: `${row * 20 + 5}%`,
                width: `${45 + (i % 4) * 15}px`,
                height: `${45 + (i % 4) * 15}px`,
                clipPath: i % 8 === 0 ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : // Triangle
                         i % 8 === 1 ? 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' : // Octagon
                         i % 8 === 2 ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' : // Diamond
                         i % 8 === 3 ? 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' : // Hexagon
                         i % 8 === 4 ? 'polygon(0% 0%, 100% 0%, 100% 75%, 75% 100%, 0% 100%)' : // Pentagon
                         i % 8 === 5 ? 'polygon(20% 0%, 80% 0%, 100% 60%, 50% 100%, 0% 60%)' : // Arrow
                         i % 8 === 6 ? 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)' : // Hexagon 2
                         'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)', // Heptagon
                background: `rgba(107, 114, 128, ${0.04 + (i % 4) * 0.03})`,
                border: `1px solid rgba(107, 114, 128, ${0.08 + (i % 4) * 0.05})`,
                filter: 'blur(0.3px)'
              }}
              animate={{
                rotate: [0, i % 2 === 0 ? 360 : -360],
                scale: [1, 1.3, 0.7, 1],
                opacity: [0.2, 0.7, 0.3, 0.2]
              }}
              transition={{
                duration: 12 + (i % 7) * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3
              }}
            />
          );
        })}
        
        {/* Connecting Lines Network - Enhanced */}
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={`connection-${i}`}
            className="absolute"
            style={{
              width: `${60 + i * 15}px`,
              height: '1px',
              background: `linear-gradient(90deg, transparent, rgba(107, 114, 128, ${0.15 + (i % 3) * 0.1}), transparent)`,
              left: `${5 + (i % 8) * 12}%`,
              top: `${15 + (i % 6) * 15}%`,
              transformOrigin: 'center',
              transform: `rotate(${i * 22.5}deg)`
            }}
            animate={{
              scaleX: [0, 1.2, 0],
              opacity: [0, 0.7, 0],
              rotate: [i * 22.5, (i * 22.5) + 180]
            }}
            transition={{
              duration: 3 + (i % 5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4
            }}
          />
        ))}
        
        {/* Additional Micro Polygons */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`micro-${i}`}
            className="absolute"
            style={{
              left: `${8 + (i % 10) * 9}%`,
              top: `${12 + (i % 8) * 12}%`,
              width: `${15 + (i % 3) * 8}px`,
              height: `${15 + (i % 3) * 8}px`,
              clipPath: i % 4 === 0 ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : // Small Triangle
                       i % 4 === 1 ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' : // Small Diamond
                       i % 4 === 2 ? 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' : // Small Hexagon
                       'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', // Square
              background: `rgba(107, 114, 128, ${0.06 + (i % 2) * 0.04})`,
              border: `0.5px solid rgba(107, 114, 128, 0.12)`,
              filter: 'blur(0.2px)'
            }}
            animate={{
              rotate: [0, i % 2 === 0 ? 180 : -180],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 8 + (i % 4) * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          />
        ))}
        
        {/* Shifting Polygon Layers - Expanded */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`layer-${i}`}
            className="absolute"
            style={{
              left: `${10 + (i % 4) * 22}%`,
              top: `${20 + (i % 3) * 25}%`,
              width: `${35 + (i % 5) * 10}px`,
              height: `${35 + (i % 5) * 10}px`,
              clipPath: i % 6 === 0 ? 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' : // Star
                       i % 6 === 1 ? 'polygon(40% 0%, 60% 0%, 100% 40%, 100% 60%, 60% 100%, 40% 100%, 0% 60%, 0% 40%)' : // Cross
                       i % 6 === 2 ? 'polygon(25% 0%, 75% 0%, 100% 25%, 100% 75%, 75% 100%, 25% 100%, 0% 75%, 0% 25%)' : // Rounded Square
                       i % 6 === 3 ? 'polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)' : // Complex Star
                       i % 6 === 4 ? 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' : // Octagon
                       'polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)', // Decagon
              background: `rgba(107, 114, 128, ${0.03 + (i % 3) * 0.02})`,
              border: `1px solid rgba(107, 114, 128, ${0.06 + (i % 3) * 0.03})`,
              backdropFilter: 'blur(0.8px)'
            }}
            animate={{
              x: [0, Math.cos(i * Math.PI / 6) * 40, Math.sin(i * Math.PI / 4) * 25, 0],
              y: [0, Math.sin(i * Math.PI / 6) * 35, Math.cos(i * Math.PI / 4) * 30, 0],
              rotate: [0, i % 2 === 0 ? 360 : -360],
              scale: [1, 1.2, 0.9, 1]
            }}
            transition={{
              duration: 18 + (i % 6) * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.2
            }}
          />
        ))}
        
        {/* Morphing Geometric Nodes - Enhanced */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`node-${i}`}
            className="absolute"
            style={{
              left: `${15 + (i % 6) * 14}%`,
              top: `${20 + (i % 4) * 20}%`,
              width: `${6 + (i % 3) * 4}px`,
              height: `${6 + (i % 3) * 4}px`,
              background: `rgba(107, 114, 128, ${0.3 + (i % 3) * 0.1})`,
              borderRadius: '50%',
              boxShadow: `0 0 ${4 + (i % 3) * 3}px rgba(107, 114, 128, 0.25)`
            }}
            animate={{
              scale: [1, 2.5, 1],
              opacity: [0.3, 0.8, 0.3],
              x: [0, Math.sin(i * Math.PI / 6) * 60, Math.cos(i * Math.PI / 4) * 40, 0],
              y: [0, Math.cos(i * Math.PI / 6) * 45, Math.sin(i * Math.PI / 4) * 35, 0]
            }}
            transition={{
              duration: 5 + (i % 4) * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6
            }}
          />
        ))}
        
        {/* Floating Geometric Dust */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`dust-${i}`}
            className="absolute"
            style={{
              left: `${5 + (i % 15) * 6}%`,
              top: `${8 + (i % 10) * 10}%`,
              width: `${2 + (i % 2) * 2}px`,
              height: `${2 + (i % 2) * 2}px`,
              background: `rgba(107, 114, 128, ${0.15 + (i % 2) * 0.1})`,
              borderRadius: i % 3 === 0 ? '50%' : '0%',
              transform: i % 4 === 0 ? 'rotate(45deg)' : 'none'
            }}
            animate={{
              y: [0, -15 - (i % 3) * 10, 0],
              x: [0, Math.sin(i * 0.5) * 10, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.3, 1],
              rotate: [0, i % 2 === 0 ? 180 : -180]
            }}
            transition={{
              duration: 6 + (i % 3) * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            ABOUT US
          </h2>
          <p className="text-xl text-gray-600">私たちについて</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong className="text-gray-900">{companyInfo.name}（屋号：{companyInfo.tradeName}）</strong>は、AI開発から研修まで一貫して提供する、課題解決型のDX推進パートナー企業です。
              </p>
              <p>
                <strong className="text-gray-900">大企業から中堅、中小企業まで多くの開発実績と導入支援の経験</strong>を基に、<strong className="text-gray-900">「現場で本当に使えるAI」</strong>の開発と、<strong className="text-gray-900">実践的な企業研修</strong>を提供しています。
              </p>
              <p>
                開発も研修も手掛けるからこそ、理論と実装のギャップを埋め、お客様の確実なDX推進を実現します。
              </p>
              <p>
                大阪を拠点に、全国の企業様のデジタル変革を支援しています。
              </p>
            </div>
            
            <div className="mt-8">
              <Link href="/company">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-none rounded-full px-6 py-2 shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                  詳しく見る
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div>
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                {/* Hero Image */}
                <div className="mb-6">
                  <Image
                    src="/about-hero.jpg"
                    alt="TMD - AI-Powered Innovation Company"
                    width={240}
                    height={250}
                    className="rounded-2xl shadow-lg object-cover w-full h-[180px] sm:h-[220px] md:h-[250px]"
                    priority
                  />
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">会社名</h3>
                    <p className="text-gray-700">{companyInfo.name}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">屋号</h3>
                    <p className="text-gray-700">{companyInfo.tradeName}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">事業内容</h3>
                    <ul className="space-y-1">
                      {companyInfo.business.map((business, index) => (
                        <li key={index} className="text-gray-700 text-sm">
                          • {business}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">所在地</h3>
                    <div className="text-sm text-gray-700 space-y-2">
                      <div>
                        <span className="font-medium">梅田オフィス：</span>
                        <br />
                        {companyInfo.umedaOffice}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}