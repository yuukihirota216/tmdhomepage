import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '生成AI 業務活用研修｜合計14時間 | 有限会社TMD（creationラボ）',
  description: '生成AIを「業務で使える力」に変える、実務直結の14時間。7テーマの演習中心カリキュラムで業務に落とし込めるスキルと社内の活用型を作ります。',
  openGraph: {
    title: '生成AI 業務活用研修｜合計14時間 | 有限会社TMD（creationラボ）',
    description: '生成AIを「業務で使える力」に変える、実務直結の14時間。7テーマの演習中心カリキュラムで業務に落とし込めるスキルと社内の活用型を作ります。',
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
  { title: 'プロンプト設計の基本スキル' },
  { title: 'グループウェアでのAI活用パターン' },
  { title: '定型業務の効率化テンプレ' },
  { title: '会計業務での安全な使い方' },
  { title: 'クリエイティブ制作の時短ワークフロー' },
  { title: '総合演習で作る「自社の業務活用集」' }
];

const curriculum = [
  {
    session: '第1回',
    duration: '120分',
    title: '生成AI基礎・プロンプト入門設計実践',
    goals: [
      '生成AIの基本原理の理解',
      '効果的なプロンプト設計の習得',
      'チャット型生成AIツールの基本操作と活用方法の習得',
      '第2回以降の実務応用に向けた土台づくり',
    ]
  },
  {
    session: '第2回',
    duration: '120分',
    title: 'クラウド型グループウェアでの生成AI活用①',
    goals: [
      'AIを活用したメール作成・返信の効率化',
      'ドキュメント作成・編集における生成AI活用',
      '文書要約・校正スキルの習得',
      '会議議事録の効率的な作成方法',
    ]
  },
  {
    session: '第3回',
    duration: '120分',
    title: 'クラウド型グループウェアでの生成AI活用②',
    goals: [
      '表計算ソフト活用の基礎固め',
      'ファイル共有機能での効果的な情報管理と検索',
      'AI研究ツールを活用した組織ナレッジの整理・活用',
      'チーム内の情報共有・コラボレーションの改善',
    ]
  },
  {
    session: '第4回',
    duration: '120分',
    title: '定型業務のAI効率化',
    goals: [
      '定型書類・フォーム作成の時間短縮',
      '名簿・台帳管理の正確性向上',
      '共有データの整理・標準化',
      '属人化していた定型業務の可視化・効率化',
    ]
  },
  {
    session: '第5回',
    duration: '120分',
    title: '会計業務のAI効率化',
    goals: [
      'レシート・領収書入力作業の大幅な時間短縮',
      '仕訳作業の効率化と入力ミス削減',
      '毎月の定型処理（入出金管理）の標準化',
      '経理業務の属人化解消',
    ]
  },
  {
    session: '第6回',
    duration: '120分',
    title: 'クリエイティブ作成におけるAI活用',
    goals: [
      'キャッチコピー・文章作成の時間短縮と品質向上',
      'ターゲット・媒体に合わせた表現力の習得',
      '画像生成AI・デザインツールを活用した制作スキル',
      '各種クリエイティブの統一感とブランディング強化',
    ]
  },
  {
    session: '第7回',
    duration: '120分',
    title: '総合演習・実務定着ワークショップ',
    goals: [
      '全6回の学習内容の整理と定着',
      '業務課題とAI活用ポイントの明確化',
      '実務で使えるAI活用計画の策定',
      '継続的な改善サイクルの構築',
    ]
  }
];

const implementationDetails = {
  format: '実地研修orオンライン',
  duration: '合計14時間（全7回×各120分）',
  participants: '推奨 5～20名（それ以上は要相談）',
  preparation: 'PC、ネット環境、使用するクラウドツール（貴社環境に合わせます）',
  price: '1名 400,000円（3名～）',
  priceNote: '税込'
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
              生成AI 業務活用研修｜合計14時間
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              生成AIを「業務で使える力」に変える、実務直結の14時間。
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-6" dangerouslySetInnerHTML={{
              __html: `本研修は、生成AIの基礎から実務での活用定着までを、合計14時間（全7回）の演習中心カリキュラムで習得します。<br />
              日々の資料作成、定型業務、グループウェア運用、会計業務、クリエイティブ制作まで——"現場で使う"ことを前提に、業務に落とし込めるスキルと社内の活用型を作ります。`
            }} />
            <div className="mb-8">
              <div className="bg-[#ffdf2b] text-black px-6 py-3 rounded-lg inline-block mb-4">
                <span className="text-lg font-bold">料金：1名 400,000円（3名～・税込）</span>
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
                  <h3 className="text-lg font-bold text-gray-900 text-center">
                    {goal.title}
                  </h3>
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
            <p className="text-xl text-gray-600">全7回・各120分</p>
          </div>

          <div className="space-y-6">
            {curriculum.map((session, index) => (
              <Card key={index} className="shadow-lg border-0">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex items-center gap-3 md:w-32 shrink-0">
                      <Badge className="text-white" style={{backgroundColor: '#142248'}}>
                        {session.session}
                      </Badge>
                      <span className="text-sm text-gray-500">{session.duration}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {session.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {session.goals.map((goal, goalIndex) => (
                          <span key={goalIndex} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                            {goal}
                          </span>
                        ))}
                      </div>
                    </div>
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

      {/* Company Information Section */}
      <section className="nexus-section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              企業情報
            </h2>
          </div>

          <Card className="shadow-lg border-0">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">会社名</h3>
                  <p className="text-gray-700 mb-6">有限会社TMD</p>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">本社</h3>
                  <p className="text-gray-700">
                    大阪府豊中市曽根東町6-5-2-304号室
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">梅田オフィス</h3>
                  <p className="text-gray-700">
                    〒530-0011<br />
                    大阪市北区大深町6番38号<br />
                    グラングリーン大阪 北館JAMBASE6階JAM-DESK
                  </p>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
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
          <p className="text-gray-400 text-sm">
            <Link href="/services/training/ai-work/general/archive" className="underline hover:text-gray-300">
              過去の研修パッケージ（合計12時間）はこちら
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
