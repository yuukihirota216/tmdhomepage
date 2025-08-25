import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllNewsPosts, formatDate } from '@/lib/news';

export const metadata: Metadata = {
  title: 'ニュース | 有限会社TMD（creationラボ）',
  description: '有限会社TMD（creationラボ）の最新ニュース、サービス情報、導入事例をご紹介します。',
};

export default function NewsPage() {
  const posts = getAllNewsPosts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="nexus-hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              News
            </h1>
            <p className="text-xl text-gray-300">最新情報</p>
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="nexus-section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-[#142248] transition-colors group"
            >
              <svg 
                className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              TOPページに戻る
            </Link>
          </div>
          <div className="space-y-8">
            {posts.map((post) => (
              <Card key={post.slug} className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <time className="text-sm text-gray-500 font-mono">
                        {formatDate(post.date)}
                      </time>
                      <Badge 
                        variant="secondary" 
                        className={`
                          ${post.category === 'サービス' ? 'bg-blue-100 text-blue-800' : ''}
                          ${post.category === '事例' ? 'bg-green-100 text-green-800' : ''}
                          ${post.category === 'メディア' ? 'bg-purple-100 text-purple-800' : ''}
                        `}
                      >
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Link href={`/news/${post.slug}`} className="block group">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#142248] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="mt-4">
                      <span className="text-[#142248] font-semibold group-hover:underline">
                        続きを読む →
                      </span>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">まだニュースがありません</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}