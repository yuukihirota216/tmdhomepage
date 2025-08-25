import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function RecruitmentSection() {
  return (
    <section className="nexus-section-padding nexus-hero-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            RECRUITMENT
          </h2>
          <p className="text-xl text-gray-300">採用情報</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#ffdf2b]">
                一緒にAIの未来を創造しませんか？
              </h3>
              
              <div className="space-y-6 text-lg text-gray-200 leading-relaxed mb-8">
                <p>
                  creationラボでは、生成AI分野で新たな価値を創造する
                  仲間を募集しています。
                </p>
                <p>
                  エンジニア、デザイナー、マーケターなど、
                  多様な才能を求めています。
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="text-left">
                  <h4 className="font-bold text-[#ffdf2b] mb-3">募集職種</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• AIエンジニア</li>
                    <li>• フロントエンドエンジニア</li>
                    <li>• プロジェクトマネージャー</li>
                    <li>• AIトレーナー・講師</li>
                    <li>• アシスタント</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-[#ffdf2b] mb-3">求める人材</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• AI技術への強い関心</li>
                    <li>• 新しい技術への挑戦を楽しめる方</li>
                    <li>• チームワークを大切にできる方</li>
                    <li>• 継続的な成長を追求できる方</li>
                  </ul>
                </div>
              </div>

              <Link href="/recruitment">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-none rounded-full px-8 py-4 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 text-lg">
                  採用情報を見る
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}