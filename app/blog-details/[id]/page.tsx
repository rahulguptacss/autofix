import React from 'react';
import Breadcrumb from '@/components/section/Breadcrumb/page';
import data from '@/components/data/data.json';
import BlogDetailsSection from '@/components/section/BlogDetails/page';
import { notFound } from 'next/navigation';
import { BlogDetailsData } from '@/components/type';

export default async function BlogDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const templateComponents = data.categories.AutoRepair.templateComponents;
  const blogData = templateComponents['template-1'].sections.blog;
  const blogDetailsData = templateComponents['template-1'].sections.blogDetails as BlogDetailsData;

  const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  
  const blogItem = blogData.list.find((item) => slugify(item.title) === resolvedParams.id || item.id.toString() === resolvedParams.id);

  if (!blogItem) {
    notFound();
  }

  return (
    <>
      {blogDetailsData.breadcrumb && (
        <Breadcrumb 
          data={{
            ...blogDetailsData.breadcrumb,
            title: blogDetailsData.breadcrumb.title,
            paths: [
              { label: 'Home', href: '/' },
              { label: 'Blogs', href: '/blog' },
              { label: blogItem.title }
            ]
          }} 
        />
      )}
      <BlogDetailsSection 
        blog={blogItem as any} 
        recentPosts={blogData.list as any}
        sidebar={blogDetailsData.sidebar}
      />
    </>
  );
}
