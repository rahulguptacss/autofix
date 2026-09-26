import BreadcrumbSection from '@/components/section/Breadcrumb/page';
import ServicesSection from '@/components/section/Services/page';
import rawData from '@/components/data/data.json';
import { SiteData } from '@/components/type';
import { Metadata } from 'next';

const siteData = rawData as SiteData;
const templateData = siteData.categories.AutoRepair.templateComponents["template-1"];
const sectionsData = templateData.sections;

export const metadata: Metadata = {
  title: "Our Services - AutoFix",
  description: "From routine maintenance to advanced repairs, AutoFix provides complete car care solutions.",
};

export default function ServicesPage() {
  const breadcrumbData = {
    title: "Our Services",
    paths: [
      {
        label: "Home",
        href: "/"
      },
      {
        label: "Our Services"
      }
    ],
    bgImage: "/img/banner/breadcrumb.png"
  };

  return (
    <>
      <BreadcrumbSection data={breadcrumbData} />
      <ServicesSection data={sectionsData.services} layout="grid" />
    </>
  );
}
