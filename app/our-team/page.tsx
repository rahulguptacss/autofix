import BreadcrumbSection from '@/components/section/Breadcrumb/page';
import OurTeamSection from '@/components/section/OurTeam/page';
import rawData from '@/components/data/data.json';
import { SiteData } from '@/components/type';
import { Metadata } from 'next';

const siteData = rawData as SiteData;
const templateData = siteData.categories.AutoRepair.templateComponents["template-1"];
const sectionsData = templateData.sections;
const pageData = templateData.pages.ourTeam!;

export const metadata: Metadata = {
  title: pageData.seo?.title || "Our Teams - AutoFix",
  description: pageData.seo?.description || "Meet our expert team of mechanics and service advisors.",
};

export default function OurTeamPage() {
  const breadcrumbData = pageData.breadcrumb;

  return (
    <>
      <BreadcrumbSection data={breadcrumbData} />
      <OurTeamSection data={sectionsData.ourTeam} />
    </>
  );
}
