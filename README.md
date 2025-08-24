# 有限会社TMD（creationラボ）コーポレートサイト

大阪を拠点とする生成AI専門企業「有限会社TMD（creationラボ）」のコーポレートサイトです。

## 🚀 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS v4
- **UIコンポーネント**: shadcn/ui
- **アニメーション**: Framer Motion
- **フォーム**: React Hook Form + Zod
- **デプロイ**: Vercel (推奨)

## ✨ 主な機能

### ページ構成
- **トップページ**: ヒーロー、ニュース、事業紹介、企業概要、採用情報
- **企業情報**: 企業概要、代表メッセージ、企業理念・ビジョン
- **サービス**: 事業一覧、各事業の詳細ページ
- **採用情報**: 採用メッセージ、募集要項、求める人材
- **お問い合わせ**: フォーム機能、連絡先情報

### デザイン・UX
- **レスポンシブデザイン**: モバイルファーストアプローチ
- **アニメーション**: スクロール連動アニメーション、ホバーエフェクト
- **アクセシビリティ**: WCAG準拠、キーボードナビゲーション対応
- **デザインシステム**: 一貫性のあるカラー・タイポグラフィ・コンポーネント

### SEO・パフォーマンス
- **メタタグ最適化**: 各ページ個別設定
- **構造化データ**: Schema.org準拠のJSON-LD
- **サイトマップ**: 自動生成
- **Core Web Vitals**: 最適化済み

## 🛠️ 開発環境セットアップ

### 前提条件
- Node.js 18.0.0以上
- npm または pnpm

### インストール・起動

```bash
# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてサイトを確認してください。

### 利用可能なスクリプト

```bash
# 開発サーバー起動
npm run dev

# 本番用ビルド
npm run build

# 本番サーバー起動
npm start

# Lintチェック
npm run lint
```

## 📁 プロジェクト構造

```
src/
├── app/                    # Next.js App Router
│   ├── company/           # 企業情報ページ
│   ├── services/          # サービスページ
│   ├── recruitment/       # 採用情報ページ
│   ├── contact/           # お問い合わせページ
│   ├── globals.css        # グローバルスタイル
│   ├── layout.tsx         # ルートレイアウト
│   ├── page.tsx          # トップページ
│   ├── sitemap.ts        # サイトマップ生成
│   └── robots.ts         # robots.txt生成
├── components/            # Reactコンポーネント
│   ├── layout/           # ヘッダー・フッター
│   ├── sections/         # ページセクション
│   ├── seo/             # SEO関連コンポーネント
│   └── ui/              # UIコンポーネント
├── data/                 # 会社情報・サービスデータ
├── lib/                  # ユーティリティ関数
└── types/               # TypeScript型定義
```

## 🎨 デザインシステム

### カラーパレット
- **プライマリー**: #ffdf2b (Nexus Yellow)
- **ニュートラル**: #000000, #333333, #666666, #f8f8f8, #ffffff

### タイポグラフィ
- **フォント**: Noto Sans JP, Inter
- **レスポンシブ**: clamp()関数による自動調整

### 主要コンポーネント
- アニメーション付きカード
- フォームコンポーネント
- レスポンシブナビゲーション

## 🚀 デプロイ

### Vercel (推奨)
```bash
# Vercel CLIでデプロイ
npm i -g vercel
vercel
```

### 環境変数
```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📊 実装済み最適化

- **画像最適化**: Next.js Image コンポーネント
- **フォント最適化**: Google Fonts 最適化読み込み
- **静的生成**: SSG対応
- **アニメーション**: Framer Motion でスムーズな表示
- **アクセシビリティ**: フォーカス管理、スクリーンリーダー対応

## 📝 コンテンツ更新

企業情報やサービス内容の更新は `src/data/company.ts` ファイルを編集してください。

## 📞 サポート

開発・保守に関するお問い合わせは、プロジェクト管理者までご連絡ください。

---

Built with ❤️ by creationラボ
