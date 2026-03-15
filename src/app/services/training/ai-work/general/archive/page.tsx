import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '生成AI 業務活用研修｜合計12時間 | 有限会社TMD（creationラボ）',
  description: '生成AIを「業務で使える力」に変える、実務直結の12時間。演習中心の全6回カリキュラムで業務に落とし込めるスキルを習得します。',
  openGraph: {
    title: '生成AI 業務活用研修｜合計12時間 | 有限会社TMD（creationラボ）',
    description: '生成AIを「業務で使える力」に変える、実務直結の12時間。演習中心の全6回カリキュラムで業務に落とし込めるスキルを習得します。',
    type: 'website',
  },
  alternates: {
    canonical: 'https://tmd-creation-lab.com/services/training/ai-work/general/archive',
  },
};

const curriculum = [
  {
    session: '第1回',
    duration: '120分',
    title: '生成AI基礎・プロンプト入門設計実践',
  },
  {
    session: '第2回',
    duration: '120分',
    title: 'クラウド型グループウェアでの生成AI活用',
  },
  {
    session: '第3回',
    duration: '120分',
    title: '定型業務のAI効率化',
  },
  {
    session: '第4回',
    duration: '120分',
    title: '会計業務のAI効率化',
  },
  {
    session: '第5回',
    duration: '120分',
    title: 'クリエイティブ作成におけるAI活用',
  },
  {
    session: '第6回',
    duration: '120分',
    title: '総合演習・実務定着ワークショップ',
  }
];

export default function GeneralTrainingArchivePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="nexus-hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-amber-500 text-white mb-4 text-sm px-4 py-1">
              過去の研修パッケージ
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              生成AI 業務活用研修｜合計12時間
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              生成AIを「業務で使える力」に変える、実務直結の12時間。
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-8">
              本研修は、生成AIの基礎から実務での活用定着までを、合計12時間（全6回）の演習中心カリキュラムで習得するプログラムです。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="nexus-button-primary text-lg px-8 py-4">
                  お問い合わせ・相談する
                </Button>
              </Link>
              <Link href="/services/training/ai-work">
                <Button
                  className="text-lg px-8 py-4 bg-[#142248] text-white hover:bg-[#0f1b38] border-2 border-[#142248]"
                >
                  他の研修メニューを見る
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="nexus-section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              カリキュラム
            </h2>
            <p className="text-xl text-gray-600">全6回・各120分</p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {curriculum.map((session, index) => (
              <Card key={index} className="shadow-sm border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Badge className="text-white shrink-0" style={{backgroundColor: '#142248'}}>
                      {session.session}
                    </Badge>
                    <span className="text-sm text-gray-500 shrink-0">{session.duration}</span>
                    <h3 className="text-lg font-bold text-gray-900">
                      {session.title}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Details Section */}
      <section className="nexus-section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg border-0">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">実施詳細</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">形式：</span>
                      <span className="text-gray-600">実地研修orオンライン</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">時間：</span>
                      <span className="text-gray-600">合計12時間（全6回×各120分）</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">参加人数：</span>
                      <span className="text-gray-600">推奨 5～20名（それ以上は要相談）</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">料金・準備</h3>
                  <div className="space-y-3">
                    <div className="bg-[#ffdf2b] text-black px-4 py-2 rounded-lg text-sm">
                      <span className="font-bold">1名 400,000円（2名～）</span>
                      <span className="text-sm ml-2">（税込）</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium text-gray-700">事前準備：</span>
                      <p className="text-gray-600 mt-1">PC、ネット環境、使用するクラウドツール（貴社環境に合わせます）</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="nexus-section-padding nexus-hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            お問い合わせ
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            生成AIを"使える"状態まで最短で引き上げたい企業様は、お気軽にご相談ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="nexus-button-primary text-lg px-8 py-4">
                お問い合わせ・相談する
              </Button>
            </Link>
            <Link href="/services/training/ai-work">
              <Button
                className="text-lg px-8 py-4 bg-[#142248] text-white hover:bg-[#0f1b38] border-2 border-[#142248]"
              >
                他の研修メニューを見る
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
