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

            {/* 企業概要 */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">企業概要</h2>
              
              <Card className="shadow-2xl max-w-6xl mx-auto bg-gradient-to-br from-white to-gray-50 border-0">
                <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="text-center space-y-8">
                    {/* Badge */}
                    <div className="inline-block">
                      <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        About TMD
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="max-w-4xl mx-auto">
                      <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed text-left">
                        <p>
                          <strong className="text-gray-900">有限会社TMD（屋号：creationラボ）</strong>は、AI開発から研修まで一貫して提供する、課題解決型のDX推進パートナー企業です。
                        </p>
                        <p>
                          創業以来、多くの企業様のAI導入プロジェクトに携わり、製造業からサービス業まで幅広い業界でのシステム開発実績を積み重ねてきました。自社でAIソリューションを開発・実装してきた豊富な経験があるからこそ、机上の空論ではない<strong className="text-gray-900">「現場で本当に使えるAI活用法」</strong>を熟知しています。
                        </p>
                        <p>
                          私たちの最大の強みは、実際の開発現場で培った生きた知識を基にした<strong className="text-gray-900">「実践型AI研修」</strong>と、開発から運用まで伴走する<strong className="text-gray-900">「包括的なDX支援」</strong>です。研修だけでなく、実際のAIシステム開発も手掛けることで、理論と実装のギャップを埋め、企業様の課題解決を実現しています。
                        </p>
                        <p>
                          最新のAI技術を活用したカスタム開発、業務効率化ツールの構築、そして社員教育まで、ワンストップでお客様のデジタル変革を支援。大阪を拠点に、全国の企業様に対して、確かな技術力と豊富な実績に裏打ちされた価値を提供し続けています。
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap justify-center gap-3 mt-8">
        
                        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">DX支援</span>
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">企業研修</span>
                        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">AIシステム開発</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

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
                      <strong className="text-gray-900">AIの力で、すべての企業に<br />
                      実装可能なイノベーションを</strong><br />
                      技術と教育の両輪で企業の課題を解決し、<br />
                      日本のDXを現場から変革する
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
                        <h4 className="font-semibold text-gray-900 mb-1">1. 実装ファースト</h4>
                        <p className="text-sm text-gray-600">理論だけでなく、「使える形」にする</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">2. 現場主義</h4>
                        <p className="text-sm text-gray-600">机上の空論ではなく、現場の課題から始める</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">3. 伴走型支援</h4>
                        <p className="text-sm text-gray-600">導入して終わりではなく、定着まで責任を持つ</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">4. 技術×教育</h4>
                        <p className="text-sm text-gray-600">開発力と教育力の融合で、真の変革を実現する</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">5. 共創の精神</h4>
                        <p className="text-sm text-gray-600">クライアントと共に学び、共に成長する</p>
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