import { HeroSection } from '@/components/sections/hero';
import { NewsSection } from '@/components/sections/news';
import { ServicesSection } from '@/components/sections/services';
import { AboutSection } from '@/components/sections/about';
import { RecruitmentSection } from '@/components/sections/recruitment';

export default function Home() {
  return (
    <>
      <HeroSection />
      <NewsSection />
      <ServicesSection />
      <AboutSection />
      <RecruitmentSection />
    </>
  );
}
