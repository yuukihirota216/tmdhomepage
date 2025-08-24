import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { newsItems } from '@/data/company';
import Link from 'next/link';

export function NewsSection() {
  return (
    <section className="nexus-section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            NEWS & TOPICS
          </h2>
          <p className="text-xl text-gray-600">最新情報</p>
        </div>

        <div className="space-y-6">
          {newsItems.map((item) => (
            <Card key={item.id} className="nexus-card-hover border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500 font-mono">
                      {item.date}
                    </span>
                    {item.category && (
                      <Badge variant="secondary" className="bg-[#ffdf2b] text-black">
                        {item.category}
                      </Badge>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 hover:text-[#333] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link 
            href="/news" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            もっと見る
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}