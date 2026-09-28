import React from 'react';
import Breadcrumb from '@/components/section/Breadcrumb/page';
import FaqSection from '../../components/section/Faq/page';
import data from '@/components/data/data.json';
import { FaqData, SiteData } from '@/components/type';

export default function FaqPage() {
  const siteData = data as unknown as SiteData;
  const faqPageData = siteData.categories.AutoRepair.templateComponents['template-1'].pages.faq;
  const faqData = siteData.categories.AutoRepair.templateComponents['template-1'].sections.faq as FaqData;

  return (
    <>
      {faqPageData?.breadcrumb && (
        <Breadcrumb 
          data={faqPageData.breadcrumb}
        />
      )}
      <FaqSection data={faqData} />
    </>
  );
}
