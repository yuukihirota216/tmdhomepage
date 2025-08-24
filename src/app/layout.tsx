import type { Metadata } from "next";
import { Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StructuredData } from "@/components/seo/structured-data";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "有限会社TMD（creationラボ） | 生成AI専門企業",
  description: "有限会社TMD（creationラボ）は大阪を拠点とする生成AI専門企業です。AI開発・研修・AI/DXコンサルティングで企業のデジタル変革を支援します。",
  keywords: "有限会社TMD,TMD,creationラボ,生成AI,AI開発,AI研修,DXコンサルティング,大阪,豊中,廣田優希",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "有限会社TMD（creationラボ） | 生成AI専門企業",
    description: "有限会社TMD（creationラボ）は大阪を拠点とする生成AI専門企業です。AI開発・研修・AI/DXコンサルティングで企業のデジタル変革を支援します。",
    type: "website",
    locale: "ja_JP",
    siteName: "有限会社TMD（creationラボ）",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://tmd-creation-lab.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <StructuredData type="Organization" />
      </head>
      <body className={`${notoSansJP.variable} ${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
