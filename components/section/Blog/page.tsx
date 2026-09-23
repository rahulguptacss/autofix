'use client';

import Image from "next/image";
import Link from 'next/link';
import { Wrench, Calendar, ArrowRight } from 'lucide-react';
import { BlogData } from '@/components/type';
import { motion } from 'framer-motion';

export default function BlogSection({ data }: { data: BlogData }) {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6">
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
            className="text-gray-500 text-[14px] md:text-[15px] max-w-2xl mx-auto leading-relaxed"
          >
            {data.description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-4 mb-12">
          {data.list.map(blog => (
            <div key={blog.id} className="bg-white rounded-3xl p-4 sm:p-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.18)] transition-all duration-300 group border border-gray-50">
               
               <div className="relative mb-8">
                 {/* Image Container */}
                 <div className="relative h-[240px] w-full rounded-2xl overflow-hidden">
                   <Image src={blog.img} alt={blog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                   
                   {/* Top Left Date Badge */}
                   <div className="absolute top-4 left-4 bg-[#e62020] border-[3px] border-white text-white text-center py-1.5 px-3.5 rounded-xl shadow-md flex flex-col items-center">
                      <span className="text-[26px] font-black leading-none mb-0.5">{blog.date}</span>
                      <span className="text-[12px] font-bold">{blog.month}</span>
                   </div>
                 </div>

                 {/* Bottom Tag Badge (Overlapping) */}
                 <div className="absolute -bottom-4 left-6 bg-[#e62020] border-[3px] border-white text-white text-[13px] font-bold px-4 py-2 rounded-full flex items-center space-x-1.5 shadow-md z-10">
                   <Wrench size={16} />
                   <span>{blog.tag}</span>
                 </div>
               </div>

               <div className="px-2">
                 <h3 className="text-[22px] font-extrabold text-[#0b121d] mb-3 group-hover:text-[#e62020] transition-colors leading-snug">{blog.title}</h3>
                 <p className="text-gray-500 text-[15px] mb-4 line-clamp-3 leading-relaxed">{blog.desc}</p>
                 
                 {/* Bottom Row */}
                 <div className="flex items-center justify-between pt-1">
                    <div className="flex items-center space-x-3">
                      <div className="relative w-[48px] h-[48px] rounded-full border-[2px] border-[#e62020] p-0.5">
                        <div className="relative w-full h-full rounded-full overflow-hidden">
                          <Image src={blog.authorImg} fill alt={blog.author} className="object-cover" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-[#0b121d] text-[15px] leading-tight">{blog.author}</div>
                        <div className="text-gray-500 text-[13px] mt-0.5">
                          {blog.dateFull}
                        </div>
                      </div>
                    </div>
                    
                    <Link href="#" className="group/link text-[#0b121d] hover:text-[#e62020] transition-colors font-extrabold flex flex-col text-[15px]">
                      <div className="flex items-center">
                        Read More <ArrowRight size={18} className="ml-1 text-[#e62020] group-hover/link:translate-x-1 transition-transform" strokeWidth={2.5} />
                      </div>
                      <span className="w-8 h-[2px] bg-[#e62020] mt-1.5 transition-all group-hover/link:w-full"></span>
                    </Link>
                 </div>
               </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button className="bg-primary hover:bg-red-700 text-white font-bold py-3 px-8 rounded flex items-center space-x-2 transition-colors mx-auto">
            <span>{data.button_text || 'View All Blog'}</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
