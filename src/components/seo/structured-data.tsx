import { companyInfo } from '@/data/company';

interface StructuredDataProps {
  type?: 'Organization' | 'LocalBusiness' | 'Service';
  serviceName?: string;
  serviceDescription?: string;
}

export function StructuredData({ 
  type = 'Organization', 
  serviceName,
  serviceDescription 
}: StructuredDataProps) {
  const baseUrl = 'https://tmd-creation-lab.com';

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: companyInfo.name,
    alternateName: companyInfo.tradeName,
    url: baseUrl,
    logo: `${baseUrl}/logo.png`, // ロゴファイルを追加する場合
    description: '有限会社TMD（creationラボ）は大阪を拠点とする生成AI専門企業。AI開発・研修・AI/DXコンサルティングで企業のデジタル変革を支援',
    address: {
      '@type': 'PostalAddress',
      addressLocality: '大阪市北区',
      addressRegion: '大阪府',
      postalCode: '530-0011',
      streetAddress: '大深町6番38号 グラングリーン大阪 北館JAMBASE6階JAM-DESK',
      addressCountry: 'JP'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: `${baseUrl}/contact`
    },
    sameAs: [
      // SNSアカウントがある場合は追加
    ],
    foundingDate: '2020', // 実際の設立年に変更
    numberOfEmployees: '1-10',
    industry: 'Technology',
    keywords: ['有限会社TMD', 'TMD', 'creationラボ', '生成AI', 'AI開発', 'AI研修', 'DXコンサルティング', '大阪', '豊中', '廣田優希'],
    offers: companyInfo.business.map((business) => ({
      '@type': 'Service',
      name: business,
      description: business,
      provider: companyInfo.name
    }))
  };

  const localBusinessData = {
    ...organizationData,
    '@type': 'LocalBusiness',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 34.7052, // 実際の座標に変更
      longitude: 135.4953
    },
    openingHours: 'Mo-Fr 09:00-18:00' // 実際の営業時間に変更
  };

  const serviceData = serviceName && serviceDescription ? {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    provider: {
      '@type': 'Organization',
      name: companyInfo.name,
      url: baseUrl
    },
    areaServed: {
      '@type': 'Country',
      name: 'Japan'
    },
    serviceType: serviceName
  } : null;

  let structuredData;
  switch (type) {
    case 'LocalBusiness':
      structuredData = localBusinessData;
      break;
    case 'Service':
      structuredData = serviceData;
      break;
    default:
      structuredData = organizationData;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  );
}