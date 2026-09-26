import BreadcrumbSection from '@/components/section/Breadcrumb/page';
import BookServiceSection from '@/components/section/BookService/page';
import rawData from '@/components/data/data.json';
import { SiteData } from '@/components/type';

const templateData = (rawData as unknown as SiteData).categories.AutoRepair.templateComponents['template-1'];

export const metadata = {
  title: templateData.pages.bookService?.seo?.title || 'Book A Service - AutoFix',
  description: templateData.pages.bookService?.seo?.description || '',
  alternates: {
    canonical: templateData.pages.bookService?.seo?.canonical,
  },
};

export default function BookServicePage() {
  const data = templateData;
  const pageData = data.pages.bookService;
  const sectionsData = data.sections;

  if (!pageData) {
    return <div>Page data not found</div>;
  }

  return (
    <main>
      {pageData.components.map((component, index) => {
        switch (component.component) {
          case 'BookServiceSection':
            return (
              <div key={index}>
                <BreadcrumbSection data={pageData.breadcrumb} />
                <BookServiceSection data={sectionsData.bookService} />
              </div>
            );
          default:
            return null;
        }
      })}
    </main>
  );
}
