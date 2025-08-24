import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { companyInfo } from '@/data/company';
import Link from 'next/link';

export function AboutSection() {
  return (
    <section className="nexus-section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            ABOUT US
          </h2>
          <p className="text-xl text-gray-600">私たちについて</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong className="text-gray-900">{companyInfo.name}（屋号：{companyInfo.tradeName}）</strong>は、
                生成AI技術を中核としたイノベーション創出企業です。
              </p>
              <p>
                最新のAI技術と深い業界知識を組み合わせ、
                企業のデジタル変革と競争力強化を実現します。
              </p>
              <p>
                大阪を拠点に、全国の企業様にサービスを展開しています。
              </p>
            </div>
            
            <div className="mt-8">
              <Link href="/company">
                <Button className="nexus-button-primary">
                  詳しく見る
                </Button>
              </Link>
            </div>
          </div>

          {/* Visual */}
          <div>
            <Card className="bg-white shadow-lg border-0">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">会社名</h3>
                    <p className="text-gray-700">{companyInfo.name}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">屋号</h3>
                    <p className="text-gray-700">{companyInfo.tradeName}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">事業内容</h3>
                    <ul className="space-y-1">
                      {companyInfo.business.map((business, index) => (
                        <li key={index} className="text-gray-700 text-sm">
                          • {business}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">所在地</h3>
                    <div className="text-sm text-gray-700 space-y-2">
                      <div>
                        <span className="font-medium">梅田オフィス：</span>
                        <br />
                        {companyInfo.umedaOffice}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}