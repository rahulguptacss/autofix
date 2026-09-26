import BreadcrumbSection from '@/components/section/Breadcrumb/page';
import PricingSection from '@/components/section/Pricing/page';
import rawData from '@/components/data/data.json';
import { SiteData } from '@/components/type';

const templateData = (rawData as unknown as SiteData).categories.AutoRepair.templateComponents['template-1'];

export const metadata = {
  title: templateData.pages.pricing?.seo.title || 'Price - AutoFix',
  description: templateData.pages.pricing?.seo.description || '',
  alternates: {
    canonical: templateData.pages.pricing?.seo.canonical,
  },
};

export default function PricePage() {
  const data = templateData;
  const pageData = data.pages.pricing;
  const sectionsData = data.sections;

  if (!pageData) {
    return <div>Page data not found</div>;
  }

  return (
    <main>
      {pageData.components.map((component, index) => {
        switch (component.component) {
          case 'PricingSection':
            return (
              <div key={index}>
                <BreadcrumbSection data={pageData.breadcrumb} />
                <PricingSection data={sectionsData.pricing} />
              </div>
            );
          default:
            return null;
        }
      })}
    </main>
  );
}
