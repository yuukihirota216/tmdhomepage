import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '生成AI 業務活用研修｜合計12時間 | 有限会社TMD（creationラボ）',
  description: '生成AIを「業務で使える力」に変える、実務直結の12時間。演習中心カリキュラムで業務に落とし込めるスキルと社内の活用型を作ります。',
  openGraph: {
    title: '生成AI 業務活用研修｜合計12時間 | 有限会社TMD（creationラボ）',
    description: '生成AIを「業務で使える力」に変える、実務直結の12時間。演習中心カリキュラムで業務に落とし込めるスキルと社内の活用型を作ります。',
    type: 'website',
  },
  alternates: {
    canonical: 'https://tmd-creation-lab.com/services/training/ai-work/general',
  },
};

const commonChallenges = [
  {
    title: '生成AIを触ってはいるが、業務に定着しない',
    description: '日常業務での具体的な活用方法がわからない'
  },
  {
    title: 'プロンプトが場当たりで、品質が安定しない',
    description: '再現性のあるプロンプト設計の方法がわからない'
  },
  {
    title: '資料作成やメール作成に時間がかかり、生産性が上がらない',
    description: '既存の業務フローにAIを組み込めていない'
  },
  {
    title: '定型作業が多く、人の手で回している業務が減らない',
    description: '自動化できる業務の特定と効率化手法が不明'
  },
  {
    title: '会計・経理など正確性が必要な領域で、使いどころが分からない',
    description: 'リスクを避けて安全に活用する方法が不明'
  },
  {
    title: 'クリエイティブ制作（文章・画像案・構成案）で、方向性が定まらない',
    description: '効率的なクリエイティブワークフローが確立できていない'
  }
];

const trainingGoals = [
  {
    title: 'プロンプト設計の基本スキル',
  },
  {
    title: 'グループウェアでのAI活用パターン',
  },
  {
    title: '定型業務の効率化テンプレ',
  },
  {
    title: '会計業務でのAI活用',
  },
  {
    title: 'クリエイティブ制作の時短ワークフロー',
  },
  {
    title: '総合演習で作る「自社の業務活用集」',
  }
];

const curriculum = [
  {
    session: '第1回',
    title: '生成AI基礎・プロンプト入門設計実践',
    content: [
      '生成AIの基本概念とビジネス活用の可能性',
      'プロンプト設計の基本原則と再現性の作り方',
      '実際の業務シーンでのプロンプト作成演習',
      '情報セキュリティと安全な使い方'
    ]
  },
  {
    session: '第2回',
    title: 'クラウド型グループウェアでの生成AI活用',
    content: [
      'グループウェアとAIツールの連携方法',
      'チームコラボレーションでのAI活用パターン',
      'プロジェクト管理やタスク管理での実践演習',
      '情報共有とナレッジ管理のベストプラクティス'
    ]
  },
  {
    session: '第3回',
    title: '定型業務のAI効率化',
    content: [
      '定型作業の特定と自動化ポイントの見つけ方',
      'テンプレート化とバッチ処理の実践',
      'メール作成、資料作成、データ整理の効率化',
      '品質管理とエラーチェックの仕組み作り'
    ]
  },
  {
    session: '第4回',
    title: '会計業務のAI効率化',
    content: [
      '会計・経理業務での安全なAI活用方法',
      '伝票作成、勘定科目の判定、経費精算の支援',
      'チェック観点とリスク管理の実践',
      '法令遵守と監査対応での注意点'
    ]
  },
  {
    session: '第5回',
    title: 'クリエイティブ作成におけるAI活用',
    content: [
      '文章作成（企画書、コピー、コンテンツ）の効率化',
      '画像・デザイン案の発想と叩き台作成',
      'ブレーンストーミングとアイデア発想の支援',
      'クリエイティブワークフローの構築'
    ]
  },
  {
    session: '第6回',
    title: '総合演習・実務定着ワークショップ',
    content: [
      '各参加者の業務に合わせた実践演習',
      '「自社の業務活用集」の作成とブラッシュアップ',
      '継続的な活用と定着のためのアクションプラン作成',
      '質疑応答と今後のサポート体制の説明'
    ]
  }
];

const implementationDetails = {
  format: 'オンライン',
  duration: '合計12時間',
  participants: '推奨 5～20名（それ以上は要相談）',
  preparation: 'PC、ネット環境、使用するクラウドツール（貴社環境に合わせます）',
  price: '1名 400,000円（2名～）',
  priceNote: '税別'
};

const faqs = [
  {
    question: '生成AI初心者でも参加できますか？',
    answer: 'はい。第1回で基礎とプロンプト設計から始めるため、初心者でも問題ありません。'
  },
  {
    question: 'どんな職種が向いていますか？',
    answer: '営業、企画、管理職、総務、経理など、幅広い職種が対象です。汎用カリキュラムとして設計しています。'
  },
  {
    question: '情報漏洩が不安です。',
    answer: '研修内で「情報管理・入力禁止事項・確認観点」も扱い、業務で安全に使うためのルール整備も支援します。'
  }
];

export default function GeneralTrainingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="nexus-hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              生成AI 業務活用研修｜合計12時間
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              生成AIを「業務で使える力」に変える、実務直結の12時間。
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-6" dangerouslySetInnerHTML={{
              __html: `本研修は、生成AIの基礎から実務での活用定着までを、合計12時間の演習中心カリキュラムで習得します。<br />
              日々の資料作成、定型業務、グループウェア運用、会計業務、クリエイティブ制作まで——"現場で使う"ことを前提に、業務に落とし込めるスキルと社内の活用型を作ります。`
            }} />
            <div className="mb-8">
              <div className="bg-[#ffdf2b] text-black px-6 py-3 rounded-lg inline-block mb-4">
                <span className="text-lg font-bold">料金：1名 400,000円（税別）</span>
              </div>
              <p className="text-gray-300">
                対象：全業種・全部門（営業／バックオフィス／企画／管理職など）
              </p>
            </div>
            <Link href="/contact">
              <Button className="nexus-button-primary text-lg px-8 py-4">
                お問い合わせ・相談する
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Common Challenges Section */}
      <section className="nexus-section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              この研修で解決できること（よくある課題）
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commonChallenges.map((challenge, index) => (
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-600">
                    {challenge.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Goals Section */}
      <section className="nexus-section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              研修で得られる成果（ゴール）
            </h2>
            <p className="text-xl text-gray-600">
              本研修では、知識の習得だけでなく、業務で使い続けるための「型」を持ち帰れます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingGoals.map((goal, index) => (
              <Card key={index} className="shadow-lg border-0 hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {goal.title}
                  </h3>
                  <p className="text-gray-600">
                    {goal.description}
                  </p>
                </CardContent>
              </Card>
            ))}
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
          </div>

          <div className="space-y-8">
            {curriculum.map((session, index) => (
              <Card key={index} className="shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Badge className="text-white mr-4" style={{backgroundColor: '#142248'}}>
                      {session.session}
                    </Badge>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {session.title}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {session.content.map((item, idx) => (
                      <div key={idx} className="flex items-start">
                        <span className="text-[#ffdf2b] mr-2 mt-1">✓</span>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Details Section */}
      <section className="nexus-section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              実施形式
            </h2>
          </div>

          <Card className="shadow-lg border-0 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">実施詳細</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">形式：</span>
                      <span className="text-gray-600">{implementationDetails.format}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">時間：</span>
                      <span className="text-gray-600">{implementationDetails.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">参加人数：</span>
                      <span className="text-gray-600">{implementationDetails.participants}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">料金・準備</h3>
                  <div className="space-y-3">
                    <div className="bg-[#ffdf2b] text-black px-4 py-2 rounded-lg">
                      <span className="font-bold">{implementationDetails.price}</span>
                      <span className="text-sm ml-2">（{implementationDetails.priceNote}）</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">事前準備：</span>
                      <p className="text-gray-600 mt-1">{implementationDetails.preparation}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Link href="/contact">
              <Button className="nexus-button-primary text-lg px-8 py-4">
                お問い合わせ・相談する
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="nexus-section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              よくある質問（FAQ）
            </h2>
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
            お問い合わせ（CTA）
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