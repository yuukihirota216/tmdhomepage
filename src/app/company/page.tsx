import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { HoverCard } from '@/components/animations/hover-card';
import { AnimatedIcon } from '@/components/animations/animated-icon';
import { companyInfo } from '@/data/company';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '企業情報 | 有限会社TMD（creationラボ）',
  description: '有限会社TMD（creationラボ）の企業概要、代表メッセージ、企業理念をご紹介。生成AI技術で社会のイノベーション創出に貢献します。',
};

export default function CompanyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="nexus-hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Company Overview
            </h1>
            <p className="text-xl text-gray-300">企業概要</p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="nexus-section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">

            {/* 代表メッセージ */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">代表メッセージ</h2>
              <Card className="shadow-lg max-w-6xl mx-auto">
                <CardHeader>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Message from CEO</h3>
                    <p className="text-gray-600">代表メッセージ</p>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="flex justify-center">
                      <Image 
                        src="/ceo.jpg" 
                        alt="代表取締役" 
                        width={450} 
                        height={563}
                        className="object-cover rounded-lg shadow-lg"
                      />
                    </div>
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                      <div className="text-center mb-6">
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">AIの力で、すべての企業に革新を</h4>
                        <p className="font-semibold text-lg text-gray-800">代表取締役　廣田 優希</p>
                      </div>
                      <p>
                        生成AIは、私たちの働き方とビジネスの在り方を根本から変革する、まさに時代の転換点となる技術です。
                      </p>
                      <p>
                        私はこれまで、数々の東証一部上場企業や官公庁において、AI開発やDX推進プロジェクトを手がけ、最先端技術がもたらす変革の現場に立ち会ってまいりました。その経験を通じて確信したことは、この革新的な技術の恩恵は、大企業だけのものではないということです。
                      </p>
                      <p>
                        日本経済を支える中小・中堅企業の皆様にこそ、生成AIの力を届けたい。そして、それぞれの企業が持つ独自の強みと掛け合わせることで、新たな価値創造を実現していただきたい。この想いが、私たちの事業の原点です。
                      </p>
                      <p>
                        私たちは、単なる技術提供者ではありません。提携企業との産学連携ネットワークを最大限に活用し、最新の研究成果と実践的なビジネスノウハウを融合させることで、お客様企業の内製化支援から開発コンサルティングまで、包括的なサポートを提供いたします。
                      </p>
                      <p>
                        目指すのは、お客様の生産性を最大化し、競争力を飛躍的に向上させること。そして、AIと人が協働する新しい働き方を通じて、より創造的で価値ある仕事に集中できる環境を実現することです。
                      </p>
                      <p>
                        生成AIという革新的な技術を、すべての企業の成長エンジンへ。
                      </p>
                      <p className="font-semibold">
                        私たちは、お客様と共に歩み、共に成長するパートナーとして、全力でサポートさせていただきます。
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="nexus-section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              企業理念・ビジョン
            </h2>
            <p className="text-xl text-gray-600">Mission, Vision & Values</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <ScrollReveal delay={0}>
              <HoverCard intensity="medium">
                <Card className="shadow-lg border-0 h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="mb-4 flex justify-center">
                      <AnimatedIcon animation="float" delay={0}>
                        <Image 
                          src="/mission.png" 
                          alt="ミッション" 
                          width={360} 
                          height={360}
                          className="object-contain"
                        />
                      </AnimatedIcon>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">ミッション</h3>
                    <div className="bg-[#ffdf2b] text-black px-3 py-1 rounded-md inline-block shadow-md">
                      <p className="text-sm font-semibold">MISSION</p>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-700 leading-relaxed">
                      生成AI技術を通じて、企業の創造性と生産性を向上させ、
                      社会全体のイノベーション創出に貢献する
                    </p>
                  </CardContent>
                </Card>
              </HoverCard>
            </ScrollReveal>

            {/* Vision */}
            <ScrollReveal delay={0.1}>
              <HoverCard intensity="medium">
                <Card className="shadow-lg border-0 h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="mb-4 flex justify-center">
                      <AnimatedIcon animation="float" delay={0.5}>
                        <Image 
                          src="/vission.png" 
                          alt="ビジョン" 
                          width={360} 
                          height={360}
                          className="object-contain"
                        />
                      </AnimatedIcon>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">ビジョン</h3>
                    <div className="bg-[#ffdf2b] text-black px-3 py-1 rounded-md inline-block shadow-md">
                      <p className="text-sm font-semibold">VISION</p>
                    </div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-700 leading-relaxed">
                      AIと人間が協働する未来を実現し、
                      すべての企業がAIの恩恵を享受できる社会を創造する
                    </p>
                  </CardContent>
                </Card>
              </HoverCard>
            </ScrollReveal>

            {/* Values */}
            <ScrollReveal delay={0.2}>
              <HoverCard intensity="medium">
                <Card className="shadow-lg border-0 h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="mb-4 flex justify-center">
                      <AnimatedIcon animation="float" delay={1}>
                        <Image 
                          src="/values.png" 
                          alt="価値観" 
                          width={360} 
                          height={360}
                          className="object-contain"
                        />
                      </AnimatedIcon>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">価値観</h3>
                    <div className="bg-[#ffdf2b] text-black px-3 py-1 rounded-md inline-block shadow-md">
                      <p className="text-sm font-semibold">VALUES</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">INNOVATION - 革新性</h4>
                        <p className="text-sm text-gray-600">常に最新技術を追求し、新しい価値を創造します</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">COLLABORATION - 協働</h4>
                        <p className="text-sm text-gray-600">お客様とのパートナーシップを重視し、共に成長します</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">QUALITY - 品質</h4>
                        <p className="text-sm text-gray-600">高品質なサービス提供で、お客様の信頼にお応えします</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">GROWTH - 成長</h4>
                        <p className="text-sm text-gray-600">個人と組織の継続的な学習と成長を大切にします</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </HoverCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 企業情報 */}
      <section className="nexus-section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">企業情報</h2>
            <Card className="shadow-lg max-w-6xl mx-auto">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="font-semibold text-gray-700">会社名</div>
                    <div className="md:col-span-2 text-gray-900">{companyInfo.name}</div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="font-semibold text-gray-700">屋号</div>
                    <div className="md:col-span-2 text-gray-900">{companyInfo.tradeName}</div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="font-semibold text-gray-700">本社</div>
                    <div className="md:col-span-2 text-gray-900">{companyInfo.headquarters}</div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="font-semibold text-gray-700">梅田オフィス</div>
                    <div className="md:col-span-2 text-gray-900">{companyInfo.umedaOffice}</div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="font-semibold text-gray-700">事業内容</div>
                    <div className="md:col-span-2">
                      <ul className="space-y-1">
                        {companyInfo.business.map((business, index) => (
                          <li key={index} className="text-gray-900">
                            • {business}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}