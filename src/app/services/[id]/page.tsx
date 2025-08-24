import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { services } from '@/data/company';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const service = services.find((s) => s.id === resolvedParams.id);
  
  if (!service) {
    return {
      title: 'サービスが見つかりません',
    };
  }

  return {
    title: `${service.title} | 有限会社TMD（creationラボ）`,
    description: service.description,
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const service = services.find((s) => s.id === resolvedParams.id);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="nexus-hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6">{service.icon}</div>
            <Badge className="text-white mb-4" style={{backgroundColor: '#142248'}}>
              {service.subtitle}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="nexus-section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">特徴・強み</h2>
              <div className="space-y-6">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-[#ffdf2b] rounded-full p-2 mr-4 mt-1">
                      <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700 leading-relaxed">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">提供サービス</h2>
              <div className="grid grid-cols-1 gap-4">
                {service.services.map((serviceItem, index) => (
                  <Card key={index} className="border-l-4 border-l-[#ffdf2b] shadow-sm">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {serviceItem}
                      </h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="nexus-section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              サービスの流れ
            </h2>
            <p className="text-xl text-gray-600">
              お客様のニーズに合わせて最適なアプローチを提案します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg border-0">
              <CardHeader>
                <div className="w-16 h-16 bg-[#ffdf2b] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">ヒアリング・分析</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  お客様の現状課題、目標、要件を詳しくヒアリングし、
                  最適なソリューションを検討します。
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-0">
              <CardHeader>
                <div className="w-16 h-16 bg-[#ffdf2b] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">設計・提案</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  分析結果に基づき、具体的なソリューション設計と
                  実装計画をご提案いたします。
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-0">
              <CardHeader>
                <div className="w-16 h-16 bg-[#ffdf2b] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-black">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">実装・サポート</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  段階的に実装を進め、導入後も継続的な
                  サポートと改善を行います。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="nexus-section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              よくある質問
            </h2>
            <p className="text-xl text-gray-600">
              お客様からよくいただくご質問にお答えします
            </p>
          </div>

          <div className="space-y-6">
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Q. 導入までにどのくらいの期間が必要ですか？
                </h3>
                <p className="text-gray-600">
                  A. プロジェクトの規模や複雑さによって異なりますが、
                  小規模なものであれば2-4週間、大規模なシステム開発の場合は2-6ヶ月程度が目安となります。
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Q. 料金体系はどのようになっていますか？
                </h3>
                <p className="text-gray-600">
                  A. プロジェクトの内容や規模に応じて個別にお見積りいたします。
                  まずはお気軽にご相談ください。初回相談は無料で承っております。
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Q. 導入後のサポートはどのような内容ですか？
                </h3>
                <p className="text-gray-600">
                  A. 技術的なサポート、システムの改善提案、追加機能の開発、
                  ユーザートレーニングなど、継続的なサポートを提供いたします。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="nexus-section-padding nexus-hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {service.title}についてご相談ください
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            専門スタッフが、お客様のご状況に最適なソリューションをご提案いたします。
            まずはお気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="nexus-button-primary text-lg px-8 py-4">
                お問い合わせをする
              </Button>
            </Link>
            <Link href="/services">
              <Button 
                className="text-lg px-8 py-4 bg-[#142248] text-white hover:bg-[#0f1b38] border-2 border-[#142248]"
              >
                他のサービスを見る
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}