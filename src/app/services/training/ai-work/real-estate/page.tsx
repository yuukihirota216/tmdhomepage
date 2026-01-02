import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '生成AI 業務活用研修（不動産業向け） | 有限会社TMD（creationラボ）',
  description: '不動産業界の業務に特化したAI活用研修を準備中です。物件提案、契約書作成、顧客対応など不動産業特有の課題を解決します。',
  openGraph: {
    title: '生成AI 業務活用研修（不動産業向け） | 有限会社TMD（creationラボ）',
    description: '不動産業界の業務に特化したAI活用研修を準備中です。物件提案、契約書作成、顧客対応など不動産業特有の課題を解決します。',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: 'https://tmd-creation-lab.com/services/training/ai-work/real-estate',
  },
};

const plannedTopics = [
  '物件提案・紹介文の自動生成',
  '顧客ヒアリング・ニーズ分析',
  '契約書・重要事項説明書の作成支援',
  'マーケット分析・価格査定の効率化'
];

export default function RealEstateTrainingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="nexus-hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-orange-500 text-white mb-4 text-lg px-4 py-2">
              Coming Soon
            </Badge>
            <Badge className="text-white mb-4 ml-2" style={{backgroundColor: '#142248'}}>
              不動産業特化
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              生成AI 業務活用研修（不動産業向け）
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              現在準備中です
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              不動産業界特有の業務課題に特化したAI活用研修を開発中です。
              物件提案、顧客対応、契約業務など、不動産業の実務に直結する内容を予定しています。
            </p>
            <Link href="/contact">
              <Button className="nexus-button-primary text-lg px-8 py-4">
                先行相談・公開時案内希望
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Planned Content Section */}
      <section className="nexus-section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              予定している研修テーマ
            </h2>
            <p className="text-xl text-gray-600">
              不動産業界の実務に特化した以下のようなテーマを検討中です
            </p>
          </div>

          <Card className="shadow-lg border-0">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {plannedTopics.map((topic, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-[#ffdf2b] mr-3 mt-1 text-lg">✓</span>
                    <span className="text-gray-700 text-lg">{topic}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-orange-50 rounded-lg">
                <p className="text-gray-700 text-center">
                  <strong>※ 詳細な内容は現在検討中です。</strong><br />
                  不動産業界のお客様のご意見を参考に、より実践的な研修内容を開発しています。
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Early Consultation Section */}
      <section className="nexus-section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            先行相談を承っています
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            不動産業向け研修の開発にあたり、業界の皆様のご意見をお聞かせください。
            お客様の具体的な課題やご要望を研修内容に反映させていただきます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="nexus-button-primary text-lg px-8 py-4">
                先行相談をする
              </Button>
            </Link>
            <Link href="/services/training/ai-work/general">
              <Button 
                className="text-lg px-8 py-4 bg-[#142248] text-white hover:bg-[#0f1b38] border-2 border-[#142248]"
              >
                汎用研修を見る
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Hub Section */}
      <section className="nexus-section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/services/training/ai-work">
            <Button 
              className="text-lg px-8 py-4 bg-gray-600 text-white hover:bg-gray-700"
            >
              ← 研修メニュー一覧に戻る
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
