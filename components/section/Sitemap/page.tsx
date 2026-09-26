'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Home, Settings, Image as ImageIcon, Info, PhoneCall, Users, Car, FileText, ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface SitemapSectionProps {
  data: {
    tagline: string;
    title: string;
    titleRed: string;
    description: string;
    sections: {
      icon: string;
      title: string;
      links: { label: string; url: string }[];
    }[];
  };
}

const IconMap: Record<string, React.ElementType> = {
  Home,
  Settings,
  Image: ImageIcon,
  Info,
  PhoneCall,
  Users,
  Car,
  FileText
};

export default function SitemapSection({ data }: SitemapSectionProps) {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header - Styled like Our Blog */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-12 h-[2px] bg-[#e62020]"></span>
            <span className="text-[#e62020] font-extrabold text-[14px] md:text-[16px] uppercase tracking-[3px]">{data.tagline}</span>
            <span className="w-12 h-[2px] bg-[#e62020]"></span>
          </div>
          <h2 className="text-[36px] sm:text-[42px] md:text-[48px] font-black leading-tight text-[#082142] mb-5 tracking-tight">
            {data.title} <span className="text-[#e62020]">{data.titleRed}</span>
          </h2>
          <p className="text-[#556070] text-[16px] md:text-[18px] leading-[1.7] font-medium max-w-3xl mx-auto">
            {data.description}
          </p>
        </motion.div>

        {/* Sitemap Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {data.sections.map((section, idx) => {
            const IconComponent = IconMap[section.icon] || FileText;
            
            return (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                className="bg-white rounded-[10px] overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col group transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] hover:-translate-y-1"
              >
                {/* Card Header */}
                <div className="bg-[#082142] px-6 py-5 flex items-center gap-4">
                  <IconComponent size={24} className="text-white shrink-0" strokeWidth={1.5} />
                  <h3 className="text-white text-[18px] md:text-[20px] font-bold tracking-wide">
                    {section.title}
                  </h3>
                </div>
                
                {/* Links */}
                <div className="flex flex-col p-2">
                  {section.links.map((link, linkIdx) => (
                    <Link href={link.url} key={linkIdx} className="block">
                      <div className="flex items-center justify-between py-3.5 px-4 hover:bg-[#f8f9fa] border-b border-gray-100 last:border-0 transition-colors duration-300 group/link">
                        <span className="text-[#556070] font-medium text-[15px] group-hover/link:text-[#e62020] transition-colors duration-300">
                          {link.label}
                        </span>
                        <ChevronRight size={16} className="text-[#e62020] group-hover/link:translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
      </div>
    </section>
  );
}
