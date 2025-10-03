import { StructuredData } from '@/components/seo/structured-data';

export default function PartnershipPage() {
  return (
    <>
      <StructuredData
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: '自治体・地域団体との連携',
          description: '地域の中堅・中小企業のAI活用を推進',
          url: '/partnership',
          isPartOf: {
            '@type': 'WebSite',
            name: 'TMDコーポレート',
            url: '/',
          },
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Page Header */}
        <div className="page-header relative pt-24 pb-16">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="page-title text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              自治体・地域団体との連携
              <span className="page-title-en block text-lg md:text-xl text-slate-300 mt-3 font-normal">
                Partnership with Local Governments and Regional Organizations
              </span>
            </h1>
            <p className="page-subtitle text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto">
              地域の中堅・中小企業のAI活用を推進
            </p>
          </div>
        </div>

        {/* Intro Section */}
        <section className="intro-section py-16 bg-white/5 backdrop-blur-sm">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="intro-content max-w-4xl mx-auto text-center">
              <p className="text-lg md:text-xl text-slate-200 mb-6 leading-relaxed">
                有限会社TMDは、全国の自治体様・商工会議所様等の地域振興団体様と連携し、<br />
                地域の中堅・中小企業のAI活用を支援しています。
              </p>
              <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
                職員向けの内部研修から、会員企業向けの公開セミナーまで、<br />
                実践的なAI活用ノウハウをお届けし、地域経済の活性化に貢献しています。
              </p>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="results-section py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-3xl md:text-4xl font-bold text-center text-white mb-16">
              セミナー・講演実績
            </h2>

            {/* 実績1 */}
            <div className="result-card bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 hover:bg-white/15 transition-all duration-300">
              <div className="result-header flex flex-wrap items-center gap-4 mb-6">
                <span className="result-date bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
                  2025年9月26日
                </span>
                <span className="result-badge bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium">
                  会員企業向け
                </span>
              </div>
              <h3 className="result-title text-2xl font-bold text-white mb-6">
                八興会様　製造業向けAI活用セミナー
              </h3>
              
              <div className="detail-item flex flex-wrap items-center gap-4 mb-8">
                <span className="detail-label text-slate-300 font-medium">テーマ</span>
                <span className="detail-value text-white">製造業向けAI活用セミナー</span>
              </div>
              
              <div className="result-content">
                <h4 className="text-xl font-semibold text-white mb-4">講演内容</h4>
                <p className="text-slate-200 mb-4 leading-relaxed">
                  このセミナーでは、まず生成AI（Generative AI）の最新動向を俯瞰的に解説し、その技術革新や市場トレンドを押さえました。続いて、製造業界に特化した生成AIの活用事例を多数紹介し、品質管理、工程最適化、予知保全などの現場での応用可能性を具体的に示しました。
                </p>
                <p className="text-slate-200 mb-4 leading-relaxed">
                  さらに、生成AIを導入する際の注意点やリスク管理についても言及し、誤用・過信による落とし穴を回避するためのガイドラインを提供しました。続けて、実際の業務データを使ったデモンストレーションを行い、参加者の現場に即した活用イメージを共有しました。
                </p>
                <p className="text-slate-200 leading-relaxed">
                  最後に、生成AI活用を成功させるための戦略（ロードマップ設計、フェーズ分け、体制整備など）を構築する方向性を提示し、参加者には自社での応用に向けたアクションプランを持ち帰っていただく構成としました。
                </p>
              </div>
            </div>

            {/* 実績2 */}
            <div className="result-card bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 hover:bg-white/15 transition-all duration-300">
              <div className="result-header flex flex-wrap items-center gap-4 mb-6">
                <span className="result-date bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium">
                  2024年12月24日
                </span>
                <span className="result-badge bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium">
                  会員企業向け
                </span>
              </div>
              
              {/* 豊中商工会議所ロゴとリンク */}
              <div className="partner-info flex items-center gap-6 mb-6">
                <div className="partner-details flex-1">
                  <h3 className="result-title text-2xl font-bold text-white mb-2">
                    豊中商工会議所様 会員企業向け AI活用実践セミナー
                  </h3>
                  <a 
                    href="https://www.ooaana.or.jp/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-blue-200 text-sm font-medium underline transition-colors duration-200"
                  >
                    豊中商工会議所 公式サイト →
                  </a>
                </div>
                <div className="partner-logo bg-white rounded-lg p-4 shadow-lg flex-shrink-0">
                  <img 
                    src="/toyonaka-chamber-logo.png" 
                    alt="豊中商工会議所" 
                    className="h-18 w-auto object-contain"
                  />
                </div>
              </div>
              
              <div className="detail-item flex flex-wrap items-center gap-4 mb-8">
                <span className="detail-label text-slate-300 font-medium">テーマ</span>
                <span className="detail-value text-white">AI活用実践セミナー</span>
              </div>

              <div className="result-content">
                <h4 className="text-xl font-semibold text-white mb-4">講演内容</h4>
                <p className="text-slate-200 mb-4 leading-relaxed">
                  本セミナーでは、中小企業におけるAI活用の現状を整理し、生成AIや業務効率化の観点からその意義と可能性をお伝えしました。次に、製造・小売・サービス業など、業種別の具体的なAI導入事例を紹介し、自社に応用するためのヒントを提示しました。
                </p>
                <p className="text-slate-200 leading-relaxed">
                  続いて、実践に不可欠な「プロンプトエンジニアリング」の基本をわかりやすく解説し、実際の業務シナリオを用いたAI活用のデモンストレーションを交えて理解を深めていただきました。最後には、参加者同士で意見交換を行うグループディスカッションを行い、講義内容を自社の課題に即して消化する機会を提供しました。
                </p>
              </div>
            </div>
            
            <p className="results-note text-center text-slate-300 text-lg">
              ※その他多数の官公庁様や地域団体を支援させていただいております。
            </p>
          </div>
        </section>

        {/* Concept Section */}
        <section className="concept-section py-20 bg-white/5 backdrop-blur-sm">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-heading text-3xl md:text-4xl font-bold text-center text-white mb-16">
              私たちが大切にしていること
            </h2>
            
            <div className="concept-content max-w-6xl mx-auto">
              <div className="concept-text mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                  中堅・中小企業こそ、AIの恩恵を受けるべきです
                </h3>
                <p className="text-lg text-slate-200 mb-6 leading-relaxed text-center">
                  大企業のような潤沢なリソースがなくても、<br />
                  適切にAIを取り入れれば、生産性や業務品質を飛躍的に高められます。
                </p>
                <p className="text-lg text-slate-200 mb-6 leading-relaxed text-center">
                  TMDは、地域の中堅・中小企業や自治体に対して、<br />
                  実務で使える形に落とし込んだAI導入・運用を、<br />
                  現場目線で伴走する支援を大切にしています。
                </p>
                <p className="text-lg text-slate-200 leading-relaxed text-center">
                  私たちは、<strong className="text-white">挑戦を楽しみ、次の一歩を踏み出そうとする組織</strong>をサポートし、<br />
                  まずは小さな実証から始め、成果を確認しながら拡張を進めるアプローチを共に歩みます。<br />
                  その先には、助成金活用支援、PoC開発や業務受託（BPO）への展開もあります。
                </p>
              </div>
              
              <div className="concept-features bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h4 className="text-xl font-semibold text-white mb-6 text-center">支援の特徴</h4>
                <ul className="feature-list space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="check-icon text-green-400 text-xl">✓</span>
                    <span className="text-slate-200">大手企業で培った実装ノウハウを地域企業向けに最適化</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="check-icon text-green-400 text-xl">✓</span>
                    <span className="text-slate-200">「実証 → 拡張」型の段階導入モデル</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="check-icon text-green-400 text-xl">✓</span>
                    <span className="text-slate-200">現場と経営をつなぐ設計・調整支援</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="check-icon text-green-400 text-xl">✓</span>
                    <span className="text-slate-200">多業界での成功事例と再現性のある方法論</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="check-icon text-green-400 text-xl">✓</span>
                    <span className="text-slate-200">定着支援・内製化までを視野に入れたフォロー体制</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export const metadata = {
  title: '自治体・地域団体との連携 | TMDコーポレート',
  description: '地域の中堅・中小企業のAI活用を推進。全国の自治体様・商工会議所様等の地域振興団体様と連携し、実践的なAI活用ノウハウをお届けします。',
  openGraph: {
    title: '自治体・地域団体との連携 | TMDコーポレート',
    description: '地域の中堅・中小企業のAI活用を推進',
    url: '/partnership',
    siteName: 'TMDコーポレート',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'TMDコーポレート',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '自治体・地域団体との連携 | TMDコーポレート',
    description: '地域の中堅・中小企業のAI活用を推進',
    images: ['/logo.png'],
  },
};