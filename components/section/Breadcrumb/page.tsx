import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { BreadcrumbData } from '@/components/type';

export default function BreadcrumbSection({ data }: { data: BreadcrumbData }) {
  return (
    <section 
      className="relative w-full h-[240px] md:h-[320px] flex items-center bg-cover bg-right md:bg-top bg-no-repeat"
      style={{ backgroundImage: `url('${data.bgImage}')` }}
    >
      {/* Dark gradient overlay for text readability on the left */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white mb-4">
          {data.title}
        </h1>
        
        <nav className="flex items-center space-x-2 text-sm md:text-base font-semibold">
          {data.paths.map((path, index) => {
            const isLast = index === data.paths.length - 1;
            
            return (
              <React.Fragment key={index}>
                {path.href && !isLast ? (
                  <Link href={path.href} className="text-white hover:text-[#e62020] transition-colors">
                    {path.label}
                  </Link>
                ) : (
                  <span className="text-white">
                    {path.label}
                  </span>
                )}
                
                {!isLast && (
                  <span className="text-[#e62020] font-bold mx-1">{">"}</span>
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
