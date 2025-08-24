import { CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/components/ui/animated-section';
import { AnimatedCard } from '@/components/ui/animated-card';
import { services } from '@/data/company';
import Link from 'next/link';
import Image from 'next/image';

export function ServicesSection() {
  return (
    <section className="nexus-section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              SERVICES
            </h2>
            <p className="text-xl text-gray-600">事業内容</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedCard key={service.id} delay={index * 0.1}>
              <div className="bg-white h-full rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-500 shadow-lg border border-gray-100 flex flex-col">
                <CardHeader className="text-center pb-4 flex-shrink-0">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {service.id === 'ai-development' ? (
                      <Image 
                        src="/ai-devlopment.png" 
                        alt="AI開発事業" 
                        width={180} 
                        height={180}
                        className="object-contain"
                      />
                    ) : service.id === 'ai-training' ? (
                      <Image 
                        src="/ai-traning.png" 
                        alt="AI研修事業" 
                        width={180} 
                        height={180}
                        className="object-contain"
                      />
                    ) : service.id === 'ai-consulting' ? (
                      <Image 
                        src="/ai-consulting.png" 
                        alt="AI/DXコンサルティング" 
                        width={180} 
                        height={180}
                        className="object-contain"
                      />
                    ) : (
                      <div className="text-6xl">{service.icon}</div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium uppercase tracking-wide" style={{color: '#142248'}}>
                      {service.subtitle}
                    </p>
                    <h3 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                </CardHeader>
                <CardContent className="text-center flex flex-col flex-grow px-6 pb-8">
                  <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <div className="mt-auto pt-4">
                    <Link href={`/services/${service.id}`}>
                      <Button 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-none rounded-full px-6 py-2 shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                      >
                        詳しく見る
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}