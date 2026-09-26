import React from 'react';
import Breadcrumb from '@/components/section/Breadcrumb/page';
import PolicySection from '@/components/section/Policy/page';
import data from '@/components/data/data.json';

export default function TermsConditionsPage() {
  // @ts-ignore
  const pageData = data.categories.AutoRepair.templateComponents['template-1'].pages.termsConditions;
  
  return (
    <>
      <Breadcrumb data={pageData.breadcrumb} />
      <PolicySection data={pageData.content} />
    </>
  );
}
