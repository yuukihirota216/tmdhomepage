'use client';

import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';

export function PartnershipSection() {
  return (
    <section id="partnership" className="pt-20 pb-12 bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              自治体・地域団体との連携
            </h2>
            <p className="text-lg text-slate-400 mb-4 font-medium">
              Partnership with Government and Regional Organizations
            </p>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-6 font-bold">
              官民連携と地域パートナーシップを基盤に、持続的な地域経済の発展に貢献
            </p>
            <p className="text-lg text-slate-200 max-w-4xl mx-auto leading-relaxed mb-6">
              有限会社TMDは、自治体との官民連携、ならびに地域団体（商工会・NPO法人等）との協働を通じて、地域に根差したAI活用支援を展開しています。行政と民間、さらに地域コミュニティを結ぶパートナーとして、持続的な成長と社会的価値の創出を目指しています。
            </p>
            <Link href="/partnership">
              <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-none rounded-full px-8 py-3 font-semibold shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                詳細を見る
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}