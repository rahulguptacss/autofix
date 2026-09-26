'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TestimonialData } from '@/components/type';

export default function TestimonialsSection({ data }: { data: TestimonialData }) {
  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.items.length / ITEMS_PER_PAGE);

  const paginatedItems = data.items.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="pt-8 pb-10 bg-[#f4f7fc]">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
            className="text-[32px] md:text-[45px] font-bold text-[#0b121d] leading-[1.1] mb-5 tracking-tight"
          >
            {data.title_line1} <span className="text-[#e62020]">{data.title_highlight}</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#697386] text-[16px] leading-relaxed"
          >
            {data.description}
          </motion.p>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedItems.map((item, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={item.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-shadow duration-300"
            >
              {/* Top Image */}
              <div className="relative h-[220px] w-full">
                <Image 
                  src={item.carImage} 
                  alt={item.author} 
                  fill 
                  className="object-cover" 
                />
              </div>
              
              {/* Body */}
              <div className="px-6 pt-5 pb-6">
                
                {/* Top row: Left quote + stars + Right quote */}
                <div className="flex items-start justify-between mb-3">
                  {/* Left quote icon */}
                  <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 26V15.6C0 12.6667 0.6 9.93333 1.8 7.4C3 4.86667 4.86667 2.73333 7.4 1L9.8 3.8C7.93333 5.13333 6.53333 6.73333 5.6 8.6C4.66667 10.4667 4.2 12.5333 4.2 14.8H9.8V26H0ZM18 26V15.6C18 12.6667 18.6 9.93333 19.8 7.4C21 4.86667 22.8667 2.73333 25.4 1L27.8 3.8C25.9333 5.13333 24.5333 6.73333 23.6 8.6C22.6667 10.4667 22.2 12.5333 22.2 14.8H27.8V26H18Z" fill="#e62020"/>
                  </svg>

                  {/* Stars */}
                  <div className="flex gap-1 mt-1">
                    {[...Array(item.rating)].map((_, index) => (
                      <Star key={index} fill="#facc15" size={17} className="text-[#facc15]" />
                    ))}
                  </div>

                  {/* Right quote icon */}
                  <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="self-end opacity-20">
                    <path d="M0 26V15.6C0 12.6667 0.6 9.93333 1.8 7.4C3 4.86667 4.86667 2.73333 7.4 1L9.8 3.8C7.93333 5.13333 6.53333 6.73333 5.6 8.6C4.66667 10.4667 4.2 12.5333 4.2 14.8H9.8V26H0ZM18 26V15.6C18 12.6667 18.6 9.93333 19.8 7.4C21 4.86667 22.8667 2.73333 25.4 1L27.8 3.8C25.9333 5.13333 24.5333 6.73333 23.6 8.6C22.6667 10.4667 22.2 12.5333 22.2 14.8H27.8V26H18Z" fill="#e62020"/>
                  </svg>
                </div>
                
                {/* Quote text */}
                <p className="text-[#444d5e] text-[15px] leading-[1.8] mb-4">
                  {item.quote}
                </p>
                
                {/* Divider */}
                <div className="border-t border-gray-100 mb-4"></div>

                {/* Author row */}
                <div className="flex items-center gap-4">
                  <div className="relative w-[52px] h-[52px] rounded-full overflow-hidden shrink-0 border-2 border-gray-100 shadow-sm">
                    <Image src={item.avatar} alt={item.author} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0b121d] text-[16px] leading-tight">{item.author}</h4>
                    <p className="text-[#697386] text-[13px] mt-1 flex items-center gap-1.5">
                      <span>{item.location}</span>
                      <span className="text-gray-300 font-light">|</span>
                      <span>{item.carModel}</span>
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-14">
          <button 
            onClick={() => goToPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="w-10 h-10 rounded-xl border border-[#e2e8f0] flex items-center justify-center text-[#64748b] hover:text-[#e62020] hover:border-[#e62020] hover:bg-red-50 transition-colors bg-white disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={18} strokeWidth={2.5} />
          </button>
          
          {[...Array(totalPages)].map((_, i) => {
            const page = i + 1;
            return (
              <button 
                key={page}
                onClick={() => goToPage(page)}
                className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-[15px] transition-all ${
                  currentPage === page 
                    ? 'bg-[#e62020] text-white border border-[#e62020]' 
                    : 'bg-white border border-[#e2e8f0] text-[#64748b] hover:bg-gray-50 hover:text-[#0b121d]'
                }`}
              >
                {page}
              </button>
            );
          })}
          
          <button 
            onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="w-10 h-10 rounded-xl border border-[#e2e8f0] flex items-center justify-center text-[#64748b] hover:text-[#e62020] hover:border-[#e62020] hover:bg-red-50 transition-colors bg-white disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronRight size={18} strokeWidth={2.5} />
          </button>
        </div>

      </div>
    </section>
  );
}
