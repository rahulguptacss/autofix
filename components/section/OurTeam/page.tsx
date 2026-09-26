'use client';

import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { OurTeamData } from '@/components/type';
import { motion } from 'framer-motion';

export default function OurTeamSection({ data }: { data: OurTeamData }) {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil((data.members?.length || 0) / itemsPerPage);

  const currentMembers = data.members?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  ) || [];

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="py-12 lg:py-16 bg-[#f8f9fa] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header (Same as latest services) */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
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
            className="text-[26px] sm:text-4xl md:text-5xl lg:text-[42px] font-extrabold mb-4 text-[#0b121d] leading-[1.1]"
          >
            {data.title_line1} <span className="text-[#e62020]">{data.title_highlight}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-[14px] md:text-[15px] max-w-2xl mx-auto leading-relaxed"
          >
            {data.description}
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {currentMembers.map((member, idx) => (
            <motion.div
              key={`${member.id}-${currentPage}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx, duration: 0.5 }}
              className="bg-white rounded-[10px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] group relative"
            >
              <Link href={`/team-details/${member.name.toLowerCase().replace(/\s+/g, '-')}`} className="block">
                <div className="relative aspect-square w-full bg-[#e8edf2] overflow-hidden">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5 relative border-t-2 border-transparent group-hover:border-[#e62020] transition-colors duration-300">
                  <h4 className="text-[17px] font-extrabold text-[#101b29] mb-1">{member.name}</h4>
                  <p className="text-[#697386] text-[13px] font-medium">{member.role}</p>
                </div>
              </Link>
              
              {/* Share Button (overlapping) */}
              <button className="absolute bottom-[60px] right-5 h-[36px] w-[36px] bg-[#e62020] text-white flex items-center justify-center rounded-[6px] shadow-lg hover:bg-red-700 transition-colors z-10 opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 duration-300">
                <Share2 size={16} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-14 flex justify-center items-center gap-2">
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`h-10 w-10 flex items-center justify-center rounded-md border ${currentPage === 1 ? 'border-gray-100 text-gray-300 cursor-not-allowed' : 'border-gray-200 text-gray-600 hover:border-[#e62020] hover:text-[#e62020]'} bg-white transition-colors`}
            >
              <ChevronLeft size={18} />
            </button>
            
            {Array.from({ length: totalPages }).map((_, i) => {
              const pageNum = i + 1;
              const isActive = currentPage === pageNum;
              return (
                <button 
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`h-10 w-10 flex items-center justify-center rounded-md font-bold text-[14px] transition-colors ${
                    isActive 
                      ? 'bg-[#e62020] text-white border border-[#e62020]' 
                      : 'bg-white border border-gray-200 text-gray-600 hover:border-[#e62020] hover:text-[#e62020]'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
            
            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`h-10 w-10 flex items-center justify-center rounded-md border ${currentPage === totalPages ? 'border-gray-100 text-gray-300 cursor-not-allowed' : 'border-gray-200 text-gray-600 hover:border-[#e62020] hover:text-[#e62020]'} bg-white transition-colors`}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
