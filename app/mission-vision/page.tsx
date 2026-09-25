import BreadcrumbSection from '@/components/section/Breadcrumb/page';
import MissionSection from '@/components/section/Mission/page';
import VisionSection from '@/components/section/Vision/page';
import StatisticsSection from '@/components/section/Statistics/page';
import rawData from '@/components/data/data.json';
import { SiteData } from '@/components/type';
import { Metadata } from 'next';

const siteData = rawData as unknown as SiteData;
const templateData = siteData.categories.AutoRepair.templateComponents["template-1"];
const sectionsData = templateData.sections;
const pageData = templateData.pages.missionVision!;

export const metadata: Metadata = {
  title: pageData.seo?.title || "Mission & Vision - AutoFix",
  description: pageData.seo?.description || "Learn about AutoFix's mission and vision.",
};

export default function MissionVisionPage() {
  const breadcrumbData = pageData.breadcrumb;

  return (
    <>
      <BreadcrumbSection data={breadcrumbData} />
      <MissionSection data={sectionsData.mission} />
      <VisionSection data={sectionsData.vision} />
      <StatisticsSection data={sectionsData.statistics} />
    </>
  );
}
