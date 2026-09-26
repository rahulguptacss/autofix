import BreadcrumbSection from '@/components/section/Breadcrumb/page';
import ServiceDetailsSection from '../../../components/section/ServiceDetails/page';
import rawData from '@/components/data/data.json';
import { SiteData } from '@/components/type';
import { Metadata } from 'next';

const siteData = rawData as unknown as SiteData;
const templateData = siteData.categories.AutoRepair.templateComponents["template-1"];
const sectionsData = templateData.sections;
const baseServiceDetails = sectionsData.serviceDetails;
const otherServicesData = sectionsData.services.list;

export const metadata: Metadata = {
  title: "Service Detail - AutoFix",
  description: "Detailed information about our professional car repair services.",
};

export default async function ServiceDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  
  const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  
  // Find the specific service from the list based on slugified title
  const activeService = otherServicesData.find(s => slugify(s.title) === id) || otherServicesData[0];
  
  // Split title to style it properly (first part black, last word red)
  const titleParts = activeService.title.split(' ');
  const title1 = titleParts.length > 1 ? titleParts.slice(0, titleParts.length - 1).join(' ') : titleParts[0];
  const title2 = titleParts.length > 1 ? titleParts[titleParts.length - 1] : '';

  // Customize the template data with the specific service's information
  const customizedData = {
    ...baseServiceDetails,
    title1: title1,
    title2: title2,
    description: activeService.desc,
    mainImage: activeService.img || baseServiceDetails.mainImage,
    breadcrumb: {
      ...baseServiceDetails.breadcrumb,
      title: activeService.title,
      paths: [
        { label: "Home", href: "/" },
        { label: activeService.title }
      ]
    }
  };

  return (
    <>
      <BreadcrumbSection data={customizedData.breadcrumb} />
      <ServiceDetailsSection data={customizedData} otherServices={otherServicesData} />
    </>
  );
}
