import React from 'react';
import { Metadata } from 'next';
import rawData from "@/components/data/data.json";
import { SiteData } from "@/components/type";
import BreadcrumbSection from '@/components/section/Breadcrumb/page';
import SitemapSection from '@/components/section/Sitemap/page';

export const metadata: Metadata = {
  title: "Sitemap | AutoFix",
  description: "Quick access to all important pages on AutoFix.",
};

const siteData = rawData as unknown as SiteData;
const sitemapData = siteData.categories.AutoRepair.templateComponents["template-1"].pages.sitemap;

export default function SitemapPage() {
  if (!sitemapData) return null;

  return (
    <>
      <BreadcrumbSection data={sitemapData.breadcrumb} />
      <SitemapSection data={sitemapData.content} />
    </>
  );
}
