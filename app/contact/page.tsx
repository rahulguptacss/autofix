import React from 'react';
import Breadcrumb from '@/components/section/Breadcrumb/page';
import ContactSection from '@/components/section/Contact/page';
import data from '@/components/data/data.json';
import { ContactData } from '@/components/type';

export default function ContactPage() {
  const contactData = data.categories.AutoRepair.templateComponents['template-1'].sections.contact as unknown as ContactData;
  
  const breadcrumb = {
    title: "Contact Us",
    paths: [
      { label: "Home", href: "/" },
      { label: "Contact Us" }
    ],
    bgImage: "/img/banner/breadcrumb.png"
  };

  return (
    <>
      <Breadcrumb data={breadcrumb} />
      <ContactSection data={contactData} />
    </>
  );
}
