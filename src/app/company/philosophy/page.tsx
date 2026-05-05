import { ScrollReveal } from '@/components/animations/scroll-reveal';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Philosophy | 有限会社TMD（creationラボ）',
  description: '流行に踊らず、技術の真ん中に、いつも人を置く。有限会社TMD（creationラボ）の理念体系をご紹介します。',
};

export default function PhilosophyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="nexus-hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Philosophy
            </h1>
            <p className="text-xl text-gray-300">TMDの理念体系</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="nexus-section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Epigraph */}
          <ScrollReveal delay={0}>
            <div className="text-center mb-20">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed mb-4">
                流行に踊らず、技術の真ん中に、いつも人を置く。
              </h2>
              <p className="text-gray-500 text-lg">— TMDの理念体系 —</p>
            </div>
          </ScrollReveal>

          {/* Section 1 */}
          <ScrollReveal delay={0.1}>
            <div className="mb-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-blue-600 pl-4">
                私たちが、ここに立ち続ける理由
              </h3>
              <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
                <p>
                  時代は、いつも何かを儲け話に変えていきます。昨日まで別の商売をしていた人たちが、今日は最先端のAIを語り、明日はまた別の何かを語る——<br />
                  そんな時代の流れが、確かにあります。流行が変わるたびに看板を架け替え、専門性の蓄積もないまま新しい商材を売り歩く。技術への誠実さも、業界への責任も、置き去りにしたまま。
                </p>
                <p>
                  誤解しないでいただきたいのは、私たちは儲けることを否定しているわけではありません。<br />
                  専門性を持って真摯に技術と向き合い、その能力で正当に成果を上げている事業者の方々を、私たちは深く尊敬しています。<br />
                  健全なビジネスが、健全な利益を生む——それは当然のことです。私たちが距離を置きたいのは、それがないまま、流行を渡り歩く姿勢に対してです。
                </p>
                <p className="font-semibold text-gray-900">
                  私たちは、別の道を選びました。
                </p>
                <p>
                  一つの志を、長く深く掘り続けること。AI技術の真価を、流行のバズワードや派手な提案の中ではなく、現場で動き、人に役立ち続ける仕組みの中に求めること。中小・中堅企業の経営者たちが、安心して長く付き合える伴走者であること。
                </p>
                <p>
                  それが、<strong className="text-gray-900">流行に踊らず、技術の真ん中に、いつも人を置く</strong>——という、私たちの宣言の意味です。
                </p>
                <div className="bg-gray-50 rounded-xl p-6 mt-8 border-l-4 border-purple-500">
                  <p className="text-gray-800 font-medium">
                    中堅、中小企業の現場が、流行を渡り歩く者たちに振り回されない。<br />
                    その当たり前を守ることが、TMDの原点です。
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Section 2 */}
          <ScrollReveal delay={0.1}>
            <div className="mb-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-blue-600 pl-4">
                大企業から、中小企業へ
              </h3>
              <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
                <p>
                  代表である私自身は、これまで通信、製造、商社、官公庁といった、日本を代表する大企業や行政機関において、最先端のAI開発・DX推進プロジェクトに携わってまいりました。役員会議室で、最新の技術論を交わす日々——それは間違いなく刺激的な時間でした。
                </p>
                <p>
                  しかし同時に、別の現場も見てきました。日本の中小企業の現場です。<br />
                  そこには、AIの恩恵から取り残されたまま、限られた人手で「めんどくさい」を抱え続ける経営者と職人たちがいました。
                </p>
                <p>
                  彼らは派手な変革も、最先端の技術論も求めていません。ただ、現場の手間が一つ減ること、本来やりたかった仕事に向き合う時間が一時間でも戻ること——それを、ずっと待っていました。
                </p>
                <div className="bg-gray-50 rounded-xl p-6 mt-4 border-l-4 border-purple-500">
                  <p className="text-gray-800 font-medium">
                    最先端の技術は、大企業のためだけにあるのではない。むしろ、限られた人手で多くを抱える中小企業の現場こそ、本来この力を最も必要としている場所だ。そして、その場所こそ、最も誠実な伴走者を必要としている——この想いが、TMDのすべての判断の基準です。
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Section 3 */}
          <ScrollReveal delay={0.1}>
            <div className="mb-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-blue-600 pl-4">
                私たちが大切にする「能力」という言葉
              </h3>
              <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
                <p>
                  私たちが事業を営むうえで、何度も自分自身に問いかける言葉があります。<br />
                  <strong className="text-gray-900">それは、能力に裏打ちされた仕事か。</strong>
                </p>
                <p>
                  専門性は、本物か。技術への理解は、自分の中にあるか。お客様から踏み込んだ質問が来たとき、自分の言葉で答えられるか。営業の成果は、人脈ではなく、能力に支えられているか。
                </p>
                <p>
                  近年、AI業界に限らず、ビジネスのあらゆる場面で「営業力」「実績」「ネットワーク」といった言葉が、本来の意味から少しずつズレて使われるようになっています。本来は能力を指していたはずの言葉が、人脈や顔の広さや権威を指す言葉に変わっていく。
                </p>
                <p className="font-semibold text-gray-900">
                  私たちは、その流れに与しません。
                </p>
                <p>
                  <strong className="text-gray-900">能力は、本人の中に蓄積される実体です。</strong>人脈は失われることがあり、権威は時代と共に色褪せます。けれど、研鑽を重ねて得た能力は、どんな環境にあっても自分自身の中に残り、お客様への価値として届けることができます。
                </p>
                <div className="bg-gray-50 rounded-xl p-6 mt-4 border-l-4 border-purple-500">
                  <p className="text-gray-800 font-medium">
                    真に持続的な伴走者でいるためには、能力という土台を磨き続けるしかない——私たちはそう信じています。
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Section 4 */}
          <ScrollReveal delay={0.1}>
            <div className="mb-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-blue-600 pl-4">
                持ち上げられる時代だからこそ、頭を垂れる
              </h3>
              <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
                <p>
                  AIの時代になって、私たちは時に過分な評価をいただくことがあります。「TMDさんはすごい」「最先端を知っている」——そんな言葉をかけていただくたびに、私たちは静かに自分自身に言い聞かせます。
                </p>
                <p className="text-xl font-semibold text-gray-900 text-center my-8">
                  すごいのはAIであって、私たちではない。
                </p>
                <p>
                  私たちは、AIという素晴らしい技術が生まれた時代に、たまたまそれを扱う仕事に就いているにすぎません。私たち自身が偉いわけでも、特別な才能を持っているわけでもない。ただ、AIの恩恵を中小企業のお客様に届ける翻訳者として、日々学び、日々現場に立っているだけです。
                </p>
                <p>
                  だから私たちは、<strong className="text-gray-900">『謙虚』を最も大切な姿勢として掲げます。</strong><br />
                  それは、お客様に対する低姿勢の態度というより、自分自身への戒めです。AIに過剰な権威を仮託しないこと。技術の手柄を自分の手柄と勘違いしないこと。持ち上げられる時代だからこそ、頭を垂れて、研鑽を続けること。
                </p>
                <div className="bg-gray-50 rounded-xl p-6 mt-4 border-l-4 border-purple-500">
                  <p className="text-gray-800 font-medium">
                    謙虚さは、研鑽の同義語だと、私たちは考えています。
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Section 5 */}
          <ScrollReveal delay={0.1}>
            <div className="mb-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-blue-600 pl-4">
                探究を続け、現場に根づくまで離れない
              </h3>
              <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
                <p>
                  最先端のAIは、日々進化します。私たちは学び続けます。アカデミックな知見と、大企業のDX現場で磨いた実践知を、両方携えながら。
                </p>
                <p>
                  けれどそれは、技術を誇るためではありません。お客様の言葉に翻訳して届けるためにこそ、私たちは探究を続けます。一回限りの華やかな成功よりも、誰もが扱える「等身大のAI」を。属人的な魔法ではなく、現場に根づく仕組みを。
                </p>
                <div className="bg-gray-50 rounded-xl p-6 mt-4 border-l-4 border-purple-500">
                  <p className="text-gray-800 font-medium">
                    派手さよりも、確かさ——それが私たちの選ぶ道です。
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Section 6 */}
          <ScrollReveal delay={0.1}>
            <div className="mb-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-blue-600 pl-4">
                これからも、この場所に立ち続ける
              </h3>
              <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
                <p>
                  私たちが目指すのは、効率化のさらに先にある時間です。アイディアと技術で『めんどくさい』をなくし、本質的な人らしい時間——創造的な仕事と向き合う時間、仲間と語らう時間、人として豊かに在れる時間——を、現場に取り戻すこと。
                </p>
                <p>
                  そしてその先に見ている未来は、ひとつ。技術が人を急かすのではなく、人に寄り添う社会。AIが派手な主役として君臨するのではなく、現場に静かに溶け込み、人の営みをそっと支える。そんな技術の在り方を、日本の中小企業から広げていきたい。
                </p>
                <div className="bg-gray-50 rounded-xl p-8 mt-8 space-y-4">
                  <p className="text-gray-800 font-medium leading-relaxed">
                    時代がどれほど急いでも、私たちは敢えて急ぎません。<br />
                    誰がどれほど派手に踊っても、私たちは敢えて踊りません。<br />
                    持ち上げられても、頭は下げ続けます。<br />
                    流行が移ろっても、私たちはこの場所を動きません。
                  </p>
                  <p className="text-gray-700">
                    ただ、お客様一社一社の現場と向き合い、共に歩んでまいります。すべてのステークホルダーへの感謝を忘れず、得たものを次へと循環させながら。
                  </p>
                  <p className="text-gray-900 font-semibold text-lg">
                    中小企業の現場が、流行に振り回されない世界をつくる。<br />
                    そして、技術の真ん中に、いつも人を置き続ける。<br />
                    それが、TMDという会社が、これからもTMDであり続けるための約束です。
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Section 7 - Company Name */}
          <ScrollReveal delay={0.1}>
            <div className="mb-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 border-l-4 border-blue-600 pl-4">
                社名に込めた、私たちの覚悟
              </h3>
              <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
                <p>
                  最後に、私たちの会社の正式名称について、お話しさせてください。
                </p>
                <p>
                  有限会社TMD——「TMD」とは、<strong className="text-gray-900">「Today is My Day」</strong>の略です。「今日は、自分自身の日である」——これが、私たちが創業時に社名に込めた宣言です。
                </p>
                <p>
                  流行に踊らされず、他者の権威に依存せず、自分自身の能力と意志で、今日という日を生きる。それが、私たちの覚悟です。
                </p>
                <p>
                  そして、その覚悟は、お客様への約束でもあります。中小企業の経営者が、職人が、現場で働く一人ひとりが、本来の「自分の日」を取り戻せる世界をつくる。
                </p>
                <p className="font-semibold text-gray-900">
                  お客様のTMDを実現するために、私たちのTMDがある。
                </p>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 mt-8 border border-blue-100">
                  <p className="text-gray-800 font-medium leading-relaxed text-center">
                    流行に踊らず、技術の真ん中に、いつも人を置く——<br />
                    その先に私たちが見ているのは、<br />
                    <span className="text-lg font-bold text-gray-900">誰もが「今日は私の日だ」と胸を張って言える社会です。</span>
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Signature */}
          <ScrollReveal delay={0.1}>
            <div className="text-right mb-16">
              <p className="text-lg text-gray-700">有限会社TMD</p>
              <p className="text-xl font-bold text-gray-900 mt-1">代表取締役　廣田 優希</p>
            </div>
          </ScrollReveal>

          {/* Back Link */}
          <div className="text-center pb-8">
            <Link href="/company">
              <span className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m12 19-7-7 7-7" />
                  <path d="M19 12H5" />
                </svg>
                企業情報に戻る
              </span>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
