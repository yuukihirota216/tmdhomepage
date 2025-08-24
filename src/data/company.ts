import { CompanyInfo, NewsItem, ServiceItem } from '@/types';

export const companyInfo: CompanyInfo = {
  name: '有限会社TMD',
  tradeName: 'creationラボ',
  established: '2020年', // 要確認
  headquarters: '大阪府豊中市曽根東町6-5-2-304号室',
  umedaOffice: '〒530-0011 大阪市北区大深町6番38号 グラングリーン大阪 北館JAMBASE6階JAM-DESK',
  business: [
    '生成AI開発事業',
    '生成AI研修事業',
    'AI/DXコンサルティング事業'
  ]
};

export const newsItems: NewsItem[] = [
  {
    id: '1',
    date: '2025.06.25',
    title: '企業研修向け「生成AI活用プログラム」の提供開始について',
    category: 'サービス'
  },
  {
    id: '2',
    date: '2025.06.20',
    title: '大阪市内スタートアップ企業にAI導入支援を実施',
    category: '事例'
  },
  {
    id: '3',
    date: '2025.03.14',
    title: '豊中商工会議所様より当社廣田への取材記事が掲載されました',
    category: 'メディア'
  }
];

export const services: ServiceItem[] = [
  {
    id: 'ai-development',
    title: '生成AI開発事業',
    subtitle: 'AI Solution Development',
    description: 'AIと共に、限界を超えていく。私たちは、人工知能の無限の可能性を追求し、ビジネスと社会の変革を推進します。',
    features: [
      '最新AI技術の迅速なキャッチアップと実装',
      '業界特化型のカスタマイズ開発',
      'セキュリティとプライバシーを重視した設計',
      '導入後の継続的なサポートと改善',
      'ROI重視の実用的なソリューション設計'
    ],
    services: [
      'AIチャットボット開発',
      '文書自動生成システム',
      '画像・動画生成ツール',
      'データ分析・予測システム',
      '業務自動化ツール',
      'AI API統合・連携'
    ],
    icon: ''
  },
  {
    id: 'ai-training',
    title: '生成AI研修事業',
    subtitle: 'AI Training & Education',
    description: '生成AIのプロ集団が業務直結型で支援。企業の生産性向上を目指し、従業員のAIリテラシー向上と実践的なAI活用スキルの習得をサポートします。',
    features: [
      '実務直結の実践的カリキュラム',
      '職種・階層別のオーダーメイド研修',
      'ハンズオン形式での体験学習',
      '継続的なフォローアップサポート',
      '成果測定と改善サイクル'
    ],
    services: [
      'AI基礎リテラシー研修',
      'ChatGPT活用実践研修',
      'プロンプトエンジニアリング研修',
      '業務効率化AI活用研修',
      'マネジメント層向けAI戦略研修',
      '技術者向けAI開発研修'
    ],
    icon: ''
  },
  {
    id: 'ai-consulting',
    title: 'AI/DXコンサルティング',
    subtitle: 'AI/DX Consulting',
    description: '企業のAI導入戦略から実装まで、経営層の視点でデジタル変革を包括的にサポートします。',
    features: [
      '経営戦略とAI技術の橋渡し',
      '業界特性を考慮したカスタマイズ戦略',
      'ROI重視の段階的導入アプローチ',
      '組織変革とチェンジマネジメント支援',
      '継続的なモニタリングと最適化',
      '最新AI技術トレンドの迅速な提供'
    ],
    services: [
      'AI導入戦略策定',
      'DX推進ロードマップ作成',
      'AI人材育成計画策定',
      'プロジェクト推進支援',
      '継続的なAI顧問サービス'
    ],
    icon: ''
  }
];