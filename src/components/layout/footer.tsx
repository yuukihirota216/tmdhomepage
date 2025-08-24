import Link from 'next/link';
import { companyInfo } from '@/data/company';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image 
                src="/logo.png" 
                alt="creationラボ" 
                width={160} 
                height={54}
                className="object-contain"
              />
            </div>
            <p className="text-gray-300 mb-4">
              {companyInfo.name}（{companyInfo.tradeName}）
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div>
                <div className="font-semibold text-gray-300">梅田オフィス</div>
                <div>{companyInfo.umedaOffice}</div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">サイトマップ</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-white transition-colors">
                ホーム
              </Link>
              <Link href="/company" className="block text-gray-300 hover:text-white transition-colors">
                企業情報
              </Link>
              <Link href="/services" className="block text-gray-300 hover:text-white transition-colors">
                サービス
              </Link>
              <Link href="/recruitment" className="block text-gray-300 hover:text-white transition-colors">
                採用情報
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors">
                お問い合わせ
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">事業内容</h3>
            <div className="space-y-2">
              {companyInfo.business.map((service, index) => (
                <div key={index} className="text-gray-300 text-sm">
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
            © 2025 {companyInfo.name}. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}