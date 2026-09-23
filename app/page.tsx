import HeroSection from '@/components/section/Hero/page';
import AboutSection from '@/components/section/About/page';
import ServicesSection from '@/components/section/Services/page';
import StatisticsSection from '@/components/section/Statistics/page';
import BlogSection from '@/components/section/Blog/page';
import rawData from '@/components/data/data.json';
import { SiteData } from '@/components/type';

const siteData = rawData as SiteData;

export default function Home() {
  const sections = siteData.categories.AutoRepair.templateComponents["template-1"].sections;

  return (
    <>
      <HeroSection data={sections.hero} />
      <AboutSection data={sections.about} />
      <ServicesSection data={sections.services} />
      <StatisticsSection data={sections.statistics} />
      <BlogSection data={sections.blog} />
    </>
  );
}
