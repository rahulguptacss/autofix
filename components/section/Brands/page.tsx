'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { BrandsData } from '@/components/type';

export default function BrandsSection({ data }: { data: BrandsData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  
  const totalPages = Math.ceil(data.brandsList.length / itemsPerPage);
  
  // Calculate displayed items
  const paginatedBrands = data.brandsList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="py-8 md:py-12 bg-[#fafbfc]">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-3 text-[#e62020] font-bold tracking-[0.2em] uppercase text-[12px] md:text-[13px] mb-3"
          >
            <div className="flex items-center">
              <span className="w-10 md:w-12 h-[2px] bg-[#e62020]"></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#e62020] -ml-0.5"></span>
            </div>
            <span>{data.subtitle}</span>
            <div className="flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e62020] -mr-0.5"></span>
              <span className="w-10 md:w-12 h-[2px] bg-[#e62020]"></span>
            </div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[18px] sm:text-4xl md:text-5xl lg:text-[42px] font-extrabold mb-3 text-[#0b121d] leading-[1.1] whitespace-nowrap sm:whitespace-normal tracking-tight"
          >
            {data.title_line1} <span className="text-[#e62020]">{data.title_highlight}</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#697386] text-base md:text-lg max-w-2xl mx-auto"
          >
            {data.description}
          </motion.p>
        </div>

        {/* Brands Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5"
        >
          <AnimatePresence mode="popLayout">
            {paginatedBrands.map((brand, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2, delay: index * 0.02 }}
                key={brand.name}
                className="bg-white border border-[#edf1f5] shadow-sm rounded-[12px] px-6 py-4 flex flex-col items-center justify-center cursor-pointer hover:border-[#e62020] hover:shadow-[0_10px_30px_rgba(230,32,32,0.1)] transition-all duration-300 group"
              >
                <div className="w-[160px] h-[120px] relative mb-2 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center font-bold text-gray-200 opacity-50">
                    <span className="text-[12px]">{brand.name.slice(0, 3).toUpperCase()}</span>
                  </div>
                  <Image 
                    src={brand.logo} 
                    alt={brand.name} 
                    fill 
                    className="object-contain z-10"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
                <h4 className="text-[14px] md:text-[15px] font-bold text-[#0b121d] text-center transition-colors">
                  {brand.name}
                </h4>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results state */}
        {data.brandsList.length === 0 && (
          <div className="text-center py-20 text-gray-500 font-medium">
            No car brands found.
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-14 flex flex-col items-center"
          >
            <div className="flex items-center space-x-2 mb-3">
              <button 
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-10 h-10 rounded-[4px] border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#e62020] hover:border-[#e62020] transition-colors bg-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={18} />
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-[4px] flex items-center justify-center font-medium transition-colors ${
                    currentPage === page 
                      ? "bg-[#e62020] text-white font-bold border border-[#e62020]" 
                      : "border border-gray-200 text-[#0b121d] bg-white hover:text-[#e62020] hover:border-[#e62020]"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button 
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="w-10 h-10 rounded-[4px] border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#e62020] hover:border-[#e62020] transition-colors bg-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight size={18} />
              </button>
            </div>
            <p className="text-[13px] text-gray-500 font-medium">
              Showing {(currentPage - 1) * itemsPerPage + 1}-{Math.min(currentPage * itemsPerPage, data.brandsList.length)} of {data.brandsList.length} car brands
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
