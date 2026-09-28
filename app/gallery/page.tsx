import React from 'react';
import Breadcrumb from '@/components/section/Breadcrumb/page';
import GallerySection from '@/components/section/Gallery/page';
import data from '@/components/data/data.json';
import { SiteData } from '@/components/type';

export default function GalleryPage() {
  const siteData = data as unknown as SiteData;
  const galleryPageData = siteData.categories.AutoRepair.templateComponents["template-1"].pages.gallery;
  const galleryData = siteData.categories.AutoRepair.templateComponents["template-1"].sections.gallery;

  return (
    <main className="min-h-screen bg-white">
      {galleryPageData?.breadcrumb && (
        <Breadcrumb data={galleryPageData.breadcrumb} />
      )}
      
      <GallerySection data={galleryData} />
    </main>
  );
}
