import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getNewsPost, getAllNewsPosts, formatDate } from '@/lib/news';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getNewsPost(resolvedParams.slug);
  
  if (!post) {
    return {
      title: 'ニュースが見つかりません',
    };
  }

  return {
    title: `${post.title} | 有限会社TMD（creationラボ）`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  const posts = getAllNewsPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function NewsDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const post = getNewsPost(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="nexus-hero-gradient text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <time className="text-sm text-gray-300 font-mono">
              {formatDate(post.date)}
            </time>
            <Badge 
              className={`
                ${post.category === 'サービス' ? 'bg-blue-500' : ''}
                ${post.category === '事例' ? 'bg-green-500' : ''}
                ${post.category === 'メディア' ? 'bg-purple-500' : ''}
                text-white
              `}
            >
              {post.category}
            </Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="nexus-section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg border-0 mb-8">
            <CardContent className="p-8 lg:p-12">
              <div className="prose prose-xl max-w-none
                prose-headings:text-gray-900 
                prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-lg
                prose-a:text-blue-600 prose-a:font-semibold prose-a:underline prose-a:underline-offset-2
                hover:prose-a:text-blue-800 hover:prose-a:bg-blue-50 prose-a:px-1 prose-a:py-0.5 
                prose-a:rounded prose-a:transition-all prose-a:duration-200
                prose-strong:text-gray-900 prose-strong:font-bold
                prose-em:text-gray-600 prose-em:italic prose-em:font-medium
                prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:text-gray-800
                prose-ul:text-gray-700
                prose-blockquote:border-l-[#ffdf2b] prose-blockquote:text-gray-600 prose-blockquote:bg-yellow-50 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r
                prose-h1:text-4xl prose-h1:mb-8 prose-h1:font-bold prose-h1:border-b prose-h1:border-gray-200 prose-h1:pb-3
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:font-bold prose-h2:border-b prose-h2:border-gray-100 prose-h2:pb-2
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:font-semibold
                prose-div:text-lg prose-div:leading-relaxed prose-div:mb-6
                [&_u]:underline [&_u]:underline-offset-2 [&_u]:decoration-2 [&_u]:decoration-blue-400
                [&_del]:line-through [&_del]:text-gray-500
                [&_mark]:bg-yellow-200 [&_mark]:px-1 [&_mark]:py-0.5 [&_mark]:rounded
              ">
                <MDXRemote source={post.content} />
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center">
            <Link href="/news">
              <Button className="nexus-button-primary">
                ← ニュース一覧に戻る
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}