import React from 'react';
import Breadcrumb from '@/components/section/Breadcrumb/page';
import PolicySection from '@/components/section/Policy/page';
import data from '@/components/data/data.json';

export default function PrivacyPolicyPage() {
  // @ts-ignore
  const pageData = data.categories.AutoRepair.templateComponents['template-1'].pages.privacyPolicy;
  
  return (
    <>
      <Breadcrumb data={pageData.breadcrumb} />
      <PolicySection data={pageData.content} />
    </>
  );
}
