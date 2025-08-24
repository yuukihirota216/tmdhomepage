import { Card, CardContent } from '@/components/ui/card';
import { ContactForm } from '@/components/ui/contact-form';
import { companyInfo } from '@/data/company';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お問い合わせ | 有限会社TMD（creationラボ）',
  description: '生成AIの活用について、どんな小さなことでもお気軽にご相談ください。専門スタッフが、お客様のご状況に最適なソリューションをご提案いたします。',
};

interface ContactPageProps {
  searchParams: Promise<{
    subject?: string;
    position?: string;
  }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="nexus-hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300">お問い合わせ</p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="nexus-section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              まずはお話をお聞かせください
            </h2>
            <p className="text-xl text-gray-600">
              専門スタッフが、お客様のご状況に最適なソリューションをご提案いたします。
            </p>
          </div>

          <ContactForm 
            initialSubject={params.subject}
            initialPosition={params.position}
          />
        </div>
      </section>

      {/* Contact Information */}
      <section className="nexus-section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              CONTACT INFORMATION
            </h2>
            <p className="text-xl text-gray-600">連絡先情報</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Office Locations */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">オフィス所在地</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">本社</h4>
                    <p className="text-gray-700">
                      {companyInfo.headquarters}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">梅田オフィス</h4>
                    <p className="text-gray-700">
                      {companyInfo.umedaOffice}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Information */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">対応について</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">対応時間</h4>
                    <p className="text-gray-700">
                      お問い合わせいただいたご連絡には、
                      営業日24時間以内にご返信いたします。
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">初回相談</h4>
                    <p className="text-gray-700">
                      初回のご相談は無料で承っております。
                      お気軽にお問い合わせください。
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">対応エリア</h4>
                    <p className="text-gray-700">
                      大阪を拠点に、全国の企業様に
                      サービスを提供しております。
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="nexus-section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              よくある質問
            </h2>
            <p className="text-xl text-gray-600">
              お問い合わせ前にご確認ください
            </p>
          </div>

          <div className="space-y-6">
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Q. 相談は無料ですか？
                </h3>
                <p className="text-gray-600">
                  A. はい、初回のご相談は無料で承っております。
                  お客様の課題やご要望をお聞きした上で、最適なソリューションをご提案いたします。
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Q. どのような業界に対応していますか？
                </h3>
                <p className="text-gray-600">
                  A. 製造業、小売業、金融業、IT業界など、幅広い業界のお客様にサービスを提供しております。
                  業界特有の課題に合わせたソリューションをご提案いたします。
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Q. 小規模な会社でも対応してもらえますか？
                </h3>
                <p className="text-gray-600">
                  A. はい、企業規模に関わらず対応いたします。
                  小規模な企業様には、予算に応じたスモールスタートでの導入もご提案しております。
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Q. オンラインでの打ち合わせは可能ですか？
                </h3>
                <p className="text-gray-600">
                  A. はい、Zoom、Teams等を使用したオンライン打ち合わせに対応しております。
                  全国どこからでもお気軽にご相談ください。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}