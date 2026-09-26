import React from 'react';
import Breadcrumb from '@/components/section/Breadcrumb/page';
import FaqSection from '../../components/section/Faq/page';
import data from '@/components/data/data.json';
import { FaqData } from '@/components/type';

export default function FaqPage() {
  const faqData = data.categories.AutoRepair.templateComponents['template-1'].sections.faq as FaqData;

  return (
    <>
      {faqData.breadcrumb && (
        <Breadcrumb 
          data={faqData.breadcrumb}
        />
      )}
      <FaqSection data={faqData} />
    </>
  );
}
