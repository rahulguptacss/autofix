import React from 'react';
import Breadcrumb from '@/components/section/Breadcrumb/page';
import BlogPageSection from '@/components/section/BlogPage/page';
import data from '@/components/data/data.json';
import { SiteData } from '@/components/type';

export default function BlogPage() {
  const siteData = data as unknown as SiteData;
  const blogData = siteData.categories.AutoRepair.templateComponents["template-1"].sections.blog;

  return (
    <main className="min-h-screen bg-[#f4f7fc]">
      <Breadcrumb data={blogData.breadcrumb!} />
      <BlogPageSection data={blogData} />
    </main>
  );
}
