import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '採用情報 | 有限会社TMD（creationラボ）',
  description: '一緒にAIの未来を創造しませんか？生成AI分野で新たな価値を創造する仲間を募集しています。AIエンジニア、フロントエンドエンジニア、講師など多様な職種で採用中。',
};

const jobListings = [
  {
    id: 'ai-engineer',
    title: 'AIエンジニア',
    type: '正社員・業務委託',
    description: '生成AI技術を活用したソリューション開発に携わっていただきます。',
    requirements: [
      'Python、JavaScript等のプログラミング経験',
      '機械学習・AI技術への興味',
      'チームでの開発経験',
      '新しい技術への学習意欲'
    ],
    preferred: [
      'LLM（大規模言語モデル）の活用経験',
      'クラウド（AWS/GCP/Azure）の使用経験',
      'フレームワーク（Next.js、React等）の知識'
    ]
  },
  {
    id: 'project-manager',
    title: 'プロジェクトマネージャー',
    type: '正社員・業務委託',
    description: 'AI導入プロジェクトの企画・管理・推進を行っていただきます。',
    requirements: [
      'プロジェクト管理の経験（3年以上）',
      'IT業界での業務経験',
      'クライアント折衝経験',
      'コミュニケーション能力'
    ],
    preferred: [
      'AI・DX関連プロジェクトの経験',
      'アジャイル開発の知識',
      '業界特化型ソリューションの知識'
    ]
  },
  {
    id: 'ai-trainer',
    title: 'AIトレーナー・講師',
    type: '正社員・業務委託',
    description: '企業向けAI研修の講師として、実践的な教育を提供していただきます。',
    requirements: [
      'AI・機械学習分野の知識',
      '研修・教育経験',
      'プレゼンテーション能力',
      '企業研修への興味'
    ],
    preferred: [
      '生成AI（ChatGPT等）の活用経験',
      'カリキュラム開発経験',
      '大手企業での研修実績'
    ]
  },
  {
    id: 'assistant',
    title: 'アシスタント',
    type: '正社員・パート・業務委託',
    description: '事務作業やプロジェクトサポート業務を担当していただきます。',
    requirements: [
      '基本的なPCスキル（Word、Excel等）',
      'コミュニケーション能力',
      '細かい作業への適性',
      '学習意欲'
    ],
    preferred: [
      'スタートアップでの経験',
      'AI分野への興味',
      '多様な業務への対応力'
    ]
  }
];

export default function RecruitmentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="nexus-hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Mission
            </h1>
            <p className="text-xl text-gray-300 mb-8">一緒にAIの未来を創造しませんか？</p>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-200 leading-relaxed">
                生成AI技術は、これからもさらに社会を大きく変える可能性を秘めています。
                creationラボでは、この技術を活用して新しい価値を創造し続ける仲間を求めています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="nexus-section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg border-0">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">採用メッセージ</h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  経験の有無を問わず、AIに対する興味と学習意欲、
                  そして何より「創造」への情熱を持った方を歓迎します。
                </p>
                <p>
                  私たちと一緒に、AIと人間が協働する
                  新しい未来を創り上げていきましょう。
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Job Listings */}
      <section className="nexus-section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              募集要項
            </h2>
            <p className="text-xl text-gray-600">現在募集中の職種</p>
          </div>

          <div className="space-y-8">
            {jobListings.map((job) => (
              <Card key={job.id} className="shadow-lg border-0">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="bg-[#ffdf2b] text-black">
                          {job.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {job.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">必須要件</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="text-gray-600 flex items-start">
                              <span className="text-[#ffdf2b] mr-2 mt-1">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">歓迎要件</h4>
                        <ul className="space-y-2">
                          {job.preferred.map((pref, index) => (
                            <li key={index} className="text-gray-600 flex items-start">
                              <span className="text-[#ffdf2b] mr-2 mt-1">•</span>
                              {pref}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Link href={`/contact?subject=採用について&position=${job.title}`}>
                        <Button className="w-full nexus-button-primary">
                          この職種に応募する
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="nexus-section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              求める人材
            </h2>
            <p className="text-xl text-gray-600">こんな方を求めています</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg border-0">
              <CardHeader>
                <h3 className="text-xl font-bold text-gray-900">学習意欲</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  AI技術への強い関心と継続的な学習意欲を持つ方
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-0">
              <CardHeader>
                <h3 className="text-xl font-bold text-gray-900">挑戦精神</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  新しい技術への挑戦を楽しめる方
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-0">
              <CardHeader>
                <h3 className="text-xl font-bold text-gray-900">チームワーク</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  チームワークを大切にできる方
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-0">
              <CardHeader>
                <h3 className="text-xl font-bold text-gray-900">課題解決</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  お客様の課題解決に真摯に取り組める方
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-0">
              <CardHeader>
                <h3 className="text-xl font-bold text-gray-900">成長志向</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  継続的な成長と改善を追求できる方
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-lg border-0">
              <CardHeader>
                <h3 className="text-xl font-bold text-gray-900">創造性</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  「創造」への情熱を持つ方
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Working Style */}
      <section className="nexus-section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              働き方・福利厚生
            </h2>
            <p className="text-xl text-gray-600">働きやすい環境を提供します</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <h3 className="text-xl font-bold text-gray-900">働き方</h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#ffdf2b] mr-2">•</span>
                    フレックスタイム制
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ffdf2b] mr-2">•</span>
                    リモートワーク可能
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ffdf2b] mr-2">•</span>
                    副業・業務委託も相談可
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ffdf2b] mr-2">•</span>
                    最新ツール・機器の提供
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0">
              <CardHeader>
                <h3 className="text-xl font-bold text-gray-900">成長支援</h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#ffdf2b] mr-2">•</span>
                    技術書籍購入支援
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ffdf2b] mr-2">•</span>
                    セミナー・勉強会参加支援
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ffdf2b] mr-2">•</span>
                    資格取得支援
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#ffdf2b] mr-2">•</span>
                    最新AI技術の学習機会
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="nexus-section-padding nexus-hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            一緒に働きませんか？
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            まずはお気軽にお話しましょう。
            カジュアル面談も大歓迎です。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?subject=採用について">
              <Button className="nexus-button-primary text-lg px-8 py-4">
                応募・お問い合わせ
              </Button>
            </Link>
            <Link href="/company">
              <Button 
                className="text-lg px-8 py-4 bg-[#142248] text-white hover:bg-[#0f1b38] border-2 border-[#142248]"
              >
                会社情報を見る
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}