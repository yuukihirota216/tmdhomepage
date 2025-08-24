import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー | 有限会社TMD（creationラボ）',
  description: '有限会社TMD（creationラボ）のプライバシーポリシー。個人情報の取り扱いに関する基本方針をご紹介します。',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="nexus-hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300">プライバシーポリシー</p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="nexus-section-padding">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Card className="shadow-lg mb-8">
              <CardHeader>
                <h2 className="text-2xl font-bold text-gray-900">基本方針</h2>
              </CardHeader>
              <CardContent className="prose max-w-none text-gray-700 leading-relaxed">
                <p>
                  有限会社TMD（以下、「当社」）は、生成AI技術の開発・研修・コンサルティング事業を通じて、
                  お客様の個人情報を適切に保護することを重要な責務と考えております。
                  以下に、当社のプライバシーポリシーを定めます。
                </p>
              </CardContent>
            </Card>
          </ScrollReveal>

          <div className="space-y-8">
            <ScrollReveal delay={0.1}>
              <Card className="shadow-lg">
                <CardHeader>
                  <h3 className="text-xl font-bold text-gray-900">1. 個人情報の定義</h3>
                </CardHeader>
                <CardContent className="text-gray-700 leading-relaxed">
                  <p>
                    本プライバシーポリシーにおいて「個人情報」とは、個人情報保護法に定める個人情報をいい、
                    生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により
                    特定の個人を識別することができるもの（他の情報と容易に照合することができ、
                    それにより特定の個人を識別することができることとなるものを含みます）をいいます。
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="shadow-lg">
                <CardHeader>
                  <h3 className="text-xl font-bold text-gray-900">2. 個人情報の収集方法</h3>
                </CardHeader>
                <CardContent className="text-gray-700 leading-relaxed space-y-4">
                  <p>当社は、以下の方法により個人情報を収集いたします：</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>お問い合わせフォームからの直接入力</li>
                    <li>サービス利用申込み時の情報提供</li>
                    <li>研修・セミナー参加時の登録情報</li>
                    <li>コンサルティング契約締結時の提供情報</li>
                    <li>名刺交換や営業活動における情報取得</li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Card className="shadow-lg">
                <CardHeader>
                  <h3 className="text-xl font-bold text-gray-900">3. 個人情報の利用目的</h3>
                </CardHeader>
                <CardContent className="text-gray-700 leading-relaxed space-y-4">
                  <p>当社は、収集した個人情報を以下の目的で利用いたします：</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>生成AI開発サービスの提供</li>
                    <li>AI研修・教育サービスの実施</li>
                    <li>DX・AIコンサルティングサービスの提供</li>
                    <li>お問い合わせへの対応・回答</li>
                    <li>サービス改善のための分析・調査</li>
                    <li>新サービス・セミナー等のご案内</li>
                    <li>契約書類の作成・管理</li>
                    <li>法的義務の履行</li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <Card className="shadow-lg">
                <CardHeader>
                  <h3 className="text-xl font-bold text-gray-900">4. 個人情報の第三者提供</h3>
                </CardHeader>
                <CardContent className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    当社は、以下の場合を除き、個人情報を第三者に提供いたしません：
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>本人の同意がある場合</li>
                    <li>法令に基づく場合</li>
                    <li>人の生命、身体又は財産の保護のために必要がある場合</li>
                    <li>公衆衛生の向上又は児童の健全な育成の推進のために特に必要がある場合</li>
                    <li>国の機関等が法令の定める事務を遂行することに対して協力する必要がある場合</li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <Card className="shadow-lg">
                <CardHeader>
                  <h3 className="text-xl font-bold text-gray-900">5. 個人情報の管理・保護</h3>
                </CardHeader>
                <CardContent className="text-gray-700 leading-relaxed space-y-4">
                  <p>当社は、個人情報を適切に管理・保護するため、以下の措置を講じます：</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>不正アクセス、紛失、破損、改ざん、漏洩等の防止策の実施</li>
                    <li>セキュリティシステムの維持・管理</li>
                    <li>従業員への適切な監督・教育</li>
                    <li>業務委託先への適切な監督</li>
                    <li>定期的なセキュリティ監査の実施</li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <Card className="shadow-lg">
                <CardHeader>
                  <h3 className="text-xl font-bold text-gray-900">6. 個人情報の開示・訂正・削除</h3>
                </CardHeader>
                <CardContent className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    ご本人から個人情報の開示、訂正、削除等の申し出があった場合、
                    本人確認を行った上で合理的な期間内に対応いたします。
                  </p>
                  <p>
                    個人情報に関するお問い合わせ・ご要望は、以下の連絡先までお願いいたします：
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold">個人情報お問い合わせ窓口</p>
                    <p>有限会社TMD（creationラボ）</p>
                    <p>〒560-0082 大阪府豊中市曽根東町6-5-2-304号室</p>
                    <p>お問い合わせフォーム：<a href="/contact" className="text-blue-600 hover:underline">/contact</a></p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.7}>
              <Card className="shadow-lg">
                <CardHeader>
                  <h3 className="text-xl font-bold text-gray-900">7. Cookieの使用について</h3>
                </CardHeader>
                <CardContent className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    当社ウェブサイトでは、サービス向上のためCookie及び類似技術を使用する場合があります。
                    これらの技術により収集される情報は、統計的な分析やサイト改善に使用され、
                    個人を特定するものではありません。
                  </p>
                  <p>
                    Cookie の使用を希望されない場合は、ブラウザの設定により無効にすることが可能です。
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.8}>
              <Card className="shadow-lg">
                <CardHeader>
                  <h3 className="text-xl font-bold text-gray-900">8. プライバシーポリシーの変更</h3>
                </CardHeader>
                <CardContent className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    当社は、法令の変更やサービス内容の変更等に応じて、
                    プライバシーポリシーを変更することがあります。
                    変更後のプライバシーポリシーは、当ウェブサイトに掲載した時点から効力を生じるものとします。
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.9}>
              <Card className="shadow-lg">
                <CardHeader>
                  <h3 className="text-xl font-bold text-gray-900">9. お問い合わせ</h3>
                </CardHeader>
                <CardContent className="text-gray-700 leading-relaxed space-y-4">
                  <p>
                    本プライバシーポリシーに関するご質問・ご意見等は、以下までお問い合わせください：
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold">有限会社TMD（creationラボ）</p>
                    <p>〒560-0082 大阪府豊中市曽根東町6-5-2-304号室</p>
                    <p>お問い合わせ：<a href="/contact" className="text-blue-600 hover:underline">お問い合わせフォーム</a></p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={1.0}>
              <div className="text-center mt-12 text-gray-600">
                <p className="text-lg font-semibold">制定日：2025年1月1日</p>
                <p className="mt-2">有限会社TMD（creationラボ）</p>
                <p>代表取締役　廣田 優希</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}