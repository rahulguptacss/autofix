import BreadcrumbSection from '@/components/section/Breadcrumb/page';
import WhyChooseUsSection from '@/components/section/WhyChooseUs/page';
import StatisticsSection from '@/components/section/Statistics/page';
import rawData from '@/components/data/data.json';
import { SiteData } from '@/components/type';
import { Metadata } from 'next';

const siteData = rawData as SiteData;
const templateData = siteData.categories.AutoRepair.templateComponents["template-1"];
const sectionsData = templateData.sections;
const pageData = templateData.pages.whyChooseUs!;

export const metadata: Metadata = {
  title: pageData.seo?.title || "Why Choose Us - AutoFix",
  description: pageData.seo?.description || "Find out why thousands of car owners trust AutoFix for their repair needs.",
};

export default function WhyChooseUsPage() {
  const breadcrumbData = pageData.breadcrumb;

  return (
    <>
      <BreadcrumbSection data={breadcrumbData} />
      <WhyChooseUsSection data={sectionsData.whyChooseUs} />
      <StatisticsSection data={sectionsData.statistics} />
    </>
  );
}
