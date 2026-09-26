import React from 'react';
import Breadcrumb from '@/components/section/Breadcrumb/page';
import TestimonialsSection from '@/components/section/Testimonials/page';
import data from '@/components/data/data.json';
import { SiteData } from '@/components/type';

export default function TestimonialsPage() {
  const siteData = data as unknown as SiteData;
  const testimonialsData = siteData.categories.AutoRepair.templateComponents["template-1"].sections.testimonials;

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Breadcrumb data={testimonialsData.breadcrumb} />
      <TestimonialsSection data={testimonialsData} />
    </main>
  );
}
