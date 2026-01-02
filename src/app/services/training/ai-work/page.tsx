import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '生成AI 業務活用研修（業種別） | 有限会社TMD（creationラボ）',
  description: '業務に直結する生成AI活用を、演習中心で定着まで支援。業種別に特化した実践的な研修プログラムをご提供します。',
  openGraph: {
    title: '生成AI 業務活用研修（業種別） | 有限会社TMD（creationラボ）',
    description: '業務に直結する生成AI活用を、演習中心で定着まで支援。業種別に特化した実践的な研修プログラムをご提供します。',
    type: 'website',
  },
  alternates: {
    canonical: 'https://tmd-creation-lab.com/services/training/ai-work',
  },
};

const trainingPrograms = [
  {
    id: 'general',
    title: '汎用研修',
    subtitle: '全職種対応',
    description: '全職種で使える"業務の型"を作り、定着まで支援',
    status: 'available',
    href: '/services/training/ai-work/general'
  },
  {
    id: 'construction',
    title: '建設業向け研修',
    subtitle: '建設業特化',
    description: '建設業界の業務に特化したAI活用研修',
    status: 'coming-soon',
    href: '/services/training/ai-work/construction'
  },
  {
    id: 'real-estate',
    title: '不動産業向け研修',
    subtitle: '不動産業特化',
    description: '不動産業界の業務に特化したAI活用研修',
    status: 'coming-soon',
    href: '/services/training/ai-work/real-estate'
  },
  {
    id: 'professional',
    title: '士業向け研修',
    subtitle: '士業特化',
    description: '士業の業務に特化したAI活用研修',
    status: 'coming-soon',
    href: '/services/training/ai-work/professional'
  }
];

const benefits = [
  {
    title: '業務テンプレート',
    description: '実際の業務で使える生成AIテンプレート集'
  },
  {
    title: 'プロンプト集',
    description: '職種別に最適化されたプロンプトライブラリ'
  },
  {
    title: '社内ルール雛形',
    description: 'AI活用のための社内ガイドライン雛形'
  },
  {
    title: '定着の進め方',
    description: '組織全体でAI活用を定着させる具体的な手法'
  }
];

const processSteps = [
  {
    step: 1,
    title: 'ヒアリング',
    description: '現状の業務課題と目標を詳しくお聞きし、最適な研修プランを検討します。'
  },
  {
    step: 2,
    title: '提案',
    description: '研修プログラムの内容をご説明し、実施計画をご提案します。'
  },
  {
    step: 3,
    title: '研修実施',
    description: 'ハンズオン形式で実践的な研修を実施し、実際の業務で使えるスキルを習得します。'
  },
  {
    step: 4,
    title: '定着支援',
    description: '研修後も継続的にサポートし、組織全体でのAI活用定着を支援します。'
  }
];

const faqs = [
  {
    question: '対象者はどのような方ですか？',
    answer: 'AI初心者から中級者まで、幅広い層を対象としています。職種や階層に応じてカリキュラムをカスタマイズいたします。'
  },
  {
    question: '必要な環境はありますか？',
    answer: 'インターネット接続可能なPC・タブレットがあれば受講可能です。特別なソフトウェアのインストールは不要です。'
  },
  {
    question: '社内情報の取り扱いはどうなりますか？',
    answer: '厳格な秘密保持契約を締結し、お客様の機密情報は適切に保護いたします。研修で使用するデータも事前にご相談の上決定します。'
  },
  {
    question: 'オンライン研修は可能ですか？',
    answer: 'はい、オンライン・対面・ハイブリッド形式での実施が可能です。お客様のご要望に合わせて最適な形式をご提案いたします。'
  },
  {
    question: '料金はどのように決まりますか？',
    answer: '研修内容、参加人数、実施期間等に応じて個別にお見積りいたします。まずはお気軽にご相談ください。'
  }
];

export default function AIWorkTrainingHubPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="nexus-hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              生成AI 業務活用研修
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              業務に直結する生成AI活用を、演習中心で定着まで支援
            </p>
            <Link href="/contact">
              <Button className="nexus-button-primary text-lg px-8 py-4">
                お問い合わせ
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="nexus-section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              研修で得られること
            </h2>
            <p className="text-xl text-gray-600">
              実際の業務で活用できる具体的な成果物をお持ち帰りいただけます
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="nexus-section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              業種別研修メニュー
            </h2>
            <p className="text-xl text-gray-600">
              お客様の業種に特化した実践的な研修プログラムをご提供します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingPrograms.map((program) => (
              <Card key={program.id} className="shadow-lg border-0 hover:shadow-xl transition-shadow relative">
                {program.status === 'coming-soon' && (
                  <Badge className="absolute top-4 right-4 bg-orange-500 text-white">
                    Coming Soon
                  </Badge>
                )}
                <CardContent className="p-6 text-center">
                  <Badge className="text-white mb-3" style={{backgroundColor: '#142248'}}>
                    {program.subtitle}
                  </Badge>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {program.description}
                  </p>
                  <Link href={program.href}>
                    <Button 
                      className={`w-full ${
                        program.status === 'available' 
                          ? 'nexus-button-primary' 
                          : 'bg-gray-400 text-white hover:bg-gray-500'
                      }`}
                    >
                      {program.status === 'available' ? '詳細を見る' : '準備中'}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="nexus-section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              実施フロー
            </h2>
            <p className="text-xl text-gray-600">
              お客様のニーズに合わせて最適なアプローチを提案します
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center shadow-lg border-0">
                <CardHeader>
                  <div className="w-16 h-16 bg-[#ffdf2b] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-black">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="nexus-section-padding bg-gray-50">
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
            {faqs.map((faq, index) => (
              <Card key={index} className="shadow-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Q. {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    A. {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="nexus-section-padding nexus-hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            生成AI業務活用研修についてご相談ください
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
