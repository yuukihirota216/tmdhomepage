import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { HoverCard } from '@/components/animations/hover-card';
import { AnimatedIcon } from '@/components/animations/animated-icon';
import { companyInfo } from '@/data/company';
import Image from 'next/image';
import Link from 'next/link';
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
                    <div className="space-y-6 text-gray-700 leading-relaxed text-left">
                      <div className="text-center mb-6">
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">人に寄り添うAIを、日本の現場へ。</h4>
                        <p className="font-semibold text-lg text-gray-800">代表取締役　廣田 優希</p>
                      </div>
                      <p>
                        技術は、人を急かすためにあるのか。それとも、人に寄り添うためにあるのか。生成AIの時代を迎えた今、私たちはこの問いを起点に事業を営んでいます。
                      </p>
                      <p>
                        これまでプライム市場上場企業や官公庁において、AI開発・DX推進プロジェクトに数多く携わってまいりました。最先端の現場に立ち会う中で確信したのは、AIの恩恵は大企業だけのものではないということです。
                      </p>
                      <p>
                        むしろ、限られた人手で多くの『人手不足』や『めんどくさい』を抱える中小・中堅企業の現場こそ、本来この力を最も必要としている場所だと、私は考えています。
                      </p>
                      <p>
                        私たちは、単なる技術提供者ではありません。産学連携で培ったアカデミックな知見と、大企業のDX現場で磨いた実践知を、お客様の言葉に翻訳する——これが TMDの役割です。最先端を探究し続けながら、決して大きく見せない「等身大のAI」を、お客様の現場にお届けします。
                      </p>
                      <p>
                        私たちが目指すのは、生産性の最大化だけではありません。アイディアと技術で現場の『めんどくさい』をなくし、その先に本質的な、人らしい時間を生み出すこと。創造的な仕事と向き合う時間、仲間と語らう時間、人として豊かに在れる時間——その時間を取り戻すことこそ、私たちの使命だと考えています。
                      </p>
                      <p className="font-semibold">
                        技術が人を急かすのではなく、人に寄り添う社会へ。私たちは、お客様、仲間、社会——すべてのステークホルダーへの感謝を忘れず、日本一泥臭い伴走者を目指して、お客様と共に歩んでまいります。
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
                      アイディアと技術で『めんどくさい』をなくし、<br />
                      本質的な人らしい時間を生み出す。
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
                      技術が人を急かすのではなく、<br />
                      人に寄り添う社会へ。
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
                    <h3 className="text-xl font-bold text-gray-900">バリュー</h3>
                    <div className="bg-[#ffdf2b] text-black px-3 py-1 rounded-md inline-block shadow-md">
                      <p className="text-sm font-semibold">VALUE</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700 mb-4 text-center">
                      『謙虚』『探究』『再現性』を大切に、<br />感謝を還元し続ける。
                    </p>
                    <p className="text-xs font-semibold text-gray-500 mb-3 text-center">行動指針</p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">1. 謙虚と感謝</h4>
                        <p className="text-sm text-gray-600">謙虚な気持ちを忘れず、全てのステークホルダーに感謝を還元し続ける</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">2. 探究と再現性</h4>
                        <p className="text-sm text-gray-600">アカデミックな知見も交えながら最先端の技術を探究し続けた上で等身大のAIを提供する</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">3. 泥臭い伴走</h4>
                        <p className="text-sm text-gray-600">日本一泥臭くを目指し、人の気持ちに寄り添った正直な伴走を通じて、お客様と共に歩む。</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </HoverCard>
            </ScrollReveal>
          {/* Our Philosophy Button */}
          <ScrollReveal delay={0.3}>
            <div className="text-center mt-12">
              <Link href="/company/philosophy">
                <span className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                  Our Philosophy
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </Link>
              <p className="text-gray-500 text-sm mt-3">— TMDの理念体系 —</p>
            </div>
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