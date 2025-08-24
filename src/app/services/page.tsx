import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { services } from '@/data/company';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'サービス一覧 | 有限会社TMD（creationラボ）',
  description: '生成AI開発事業、生成AI研修事業、AI/DXコンサルティング事業。最新AI技術でカスタムソリューションを開発し、企業のDX推進を支援します。',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="nexus-hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300">事業内容</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="nexus-section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              サービス一覧
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              生成AI技術を活用し、企業のデジタル変革を包括的にサポートします
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <Card key={service.id} className="shadow-lg border-0 overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center mb-6">
                      <div className="text-4xl mr-4">{service.icon}</div>
                      <div>
                        <p className="text-sm font-medium uppercase tracking-wide mb-1" style={{color: '#142248'}}>
                          {service.subtitle}
                        </p>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">主な特徴・強み</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="text-[#ffdf2b] mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link href={`/services/${service.id}`}>
                      <Button className="nexus-button-primary">
                        詳しく見る
                      </Button>
                    </Link>
                  </div>

                  {/* Visual/Services List */}
                  <div className={`bg-gray-50 p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <h4 className="font-bold text-gray-900 mb-6">提供サービス</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                      {service.services.map((serviceItem, idx) => (
                        <div key={idx} className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="text-sm font-medium text-gray-900">
                            {serviceItem}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="nexus-section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            お気軽にご相談ください
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            生成AIの活用について、どんな小さなことでもお気軽にご相談ください。
            専門スタッフが、お客様のご状況に最適なソリューションをご提案いたします。
          </p>
          <Link href="/contact">
            <Button className="nexus-button-primary text-lg px-8 py-4">
              お問い合わせをする
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}