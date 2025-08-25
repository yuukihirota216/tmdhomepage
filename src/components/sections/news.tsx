import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { HoverCard } from '@/components/animations/hover-card';
import { AnimatedGradient } from '@/components/effects/animated-gradient';
import { getAllNewsPosts, formatDate } from '@/lib/news';
import Link from 'next/link';

export function NewsSection() {
  const newsItems = getAllNewsPosts().slice(0, 3); // 最新3件のみ表示

  return (
    <section className="nexus-section-padding bg-gray-50 relative overflow-hidden">
      {/* Background gradient overlay */}
      <AnimatedGradient variant="section" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              NEWS & TOPICS
            </h2>
            <p className="text-xl text-gray-600">最新情報</p>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {newsItems.map((item, index) => (
            <ScrollReveal key={item.slug} delay={index * 0.1}>
              <Link href={`/news/${item.slug}`} className="block">
                <HoverCard intensity="medium">
                  <Card className="border-0 shadow-md backdrop-blur-sm bg-white/90 relative overflow-hidden">
                    <AnimatedGradient variant="card" />
                    <CardContent className="p-6 relative z-10">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-gray-500 font-mono">
                            {formatDate(item.date)}
                          </span>
                          {item.category && (
                            <Badge variant="secondary" className="bg-[#ffdf2b] text-black shadow-sm">
                              {item.category}
                            </Badge>
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 hover:text-[#142248] transition-colors">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </HoverCard>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="text-center mt-10">
            <Link 
              href="/news" 
              className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 hover:scale-105"
            >
              もっと見る
              <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}