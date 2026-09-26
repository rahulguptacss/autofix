import BreadcrumbSection from '@/components/section/Breadcrumb/page';
import BrandsSection from '@/components/section/Brands/page';
import rawData from '@/components/data/data.json';
import { SiteData } from '@/components/type';
import { Metadata } from 'next';

const siteData = rawData as SiteData;
const templateData = siteData.categories.AutoRepair.templateComponents["template-1"];
const pageData = templateData.pages.brands;
const brandsData = templateData.sections.brands;

export const metadata: Metadata = {
  title: pageData?.seo?.title || "Our Brands - AutoFix",
  description: pageData?.seo?.description || "All car brands we service and repair.",
  alternates: {
    canonical: pageData?.seo?.canonical,
  },
};

export default function BrandsPage() {
  if (!pageData || !brandsData) {
    return <div className="py-20 text-center text-2xl font-bold">Data not found</div>;
  }

  return (
    <>
      <BreadcrumbSection data={pageData.breadcrumb} />
      <BrandsSection data={brandsData} />
    </>
  );
}
