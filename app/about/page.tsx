import BreadcrumbSection from '@/components/section/Breadcrumb/page';
import AboutSection from '@/components/section/About/page';
import StatisticsSection from '@/components/section/Statistics/page';
import OurProcessSection from '@/components/section/OurProcess/page';
import WhyChooseUsSection from '@/components/section/WhyChooseUs/page';
import rawData from '@/components/data/data.json';
import { SiteData } from '@/components/type';
import { Metadata } from 'next';

const siteData = rawData as SiteData;
const aboutPageData = siteData.categories.AutoRepair.templateComponents["template-1"].pages.about;
const sectionsData = siteData.categories.AutoRepair.templateComponents["template-1"].sections;

export const metadata: Metadata = {
  title: aboutPageData?.seo?.title || "About Us - AutoFix",
  description: aboutPageData?.seo?.description || "Learn more about our trusted car repair services.",
};

export default function AboutPage() {
  if (!aboutPageData) {
    return <div>Page data not found</div>;
  }

  return (
    <>
      <BreadcrumbSection data={aboutPageData.breadcrumb} />
      
      {/* 
        We map components exactly as specified in data.json components array
        Actually for simplicity and exact match with the screenshot, we can render them directly here 
        since we know the exact order.
      */}
      <AboutSection data={sectionsData.about} hideButton={true} />
      
      <StatisticsSection data={sectionsData.statistics} />
      <OurProcessSection data={sectionsData.process} />
      <WhyChooseUsSection data={sectionsData.whyChooseUs} hideButton={true} />
    </>
  );
}
