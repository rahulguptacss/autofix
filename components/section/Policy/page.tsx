'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface PolicyProps {
  data: {
    tagline: string;
    title: string;
    titleRed: string;
    description: string;
    list: {
      id: string;
      title: string;
      description: string;
    }[];
  };
}

export default function PolicySection({ data }: PolicyProps) {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#f8f9fa] relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Content */}
          <motion.div 
            className="w-full lg:w-[68%]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="bg-white rounded-[10px] p-6 sm:p-8 md:p-10 shadow-[0_5px_30px_rgba(0,0,0,0.03)] border border-gray-100">
              
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-[#e62020]"></span>
                <span className="text-[#e62020] font-extrabold text-[12px] md:text-[13px] uppercase tracking-[1.5px]">{data.tagline}</span>
              </motion.div>
              
              <motion.h2 variants={fadeInUp} className="text-[32px] sm:text-[38px] md:text-[44px] font-black leading-[1.1] mb-5 tracking-tight text-[#082142]">
                {data.title} <span className="text-[#e62020]">{data.titleRed}</span>
              </motion.h2>
              
              <motion.p variants={fadeInUp} className="text-[#556070] text-[15px] md:text-[16px] leading-[1.7] mb-10 font-medium">
                {data.description}
              </motion.p>
              
              <motion.div variants={staggerContainer} className="flex flex-col gap-4 md:gap-5">
                {data.list.map((item, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInUp} 
                    whileHover={{ x: 6 }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start pb-4 md:pb-5 border-b border-gray-100 last:border-0 last:pb-0 group cursor-pointer"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#082142] flex items-center justify-center flex-shrink-0 group-hover:bg-[#e62020] transition-colors duration-300 shadow-md mt-1">
                      <span className="text-white font-bold text-[18px] md:text-[20px]">{item.id}</span>
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#082142] text-[18px] md:text-[20px] mb-1.5 group-hover:text-[#e62020] transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-[#556070] text-[14px] md:text-[15px] leading-[1.6] font-medium">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
            </div>
          </motion.div>
          
          {/* Right Sidebar */}
          <motion.div 
            className="w-full lg:w-[32%] flex flex-col gap-6 lg:gap-8 lg:sticky lg:top-28 lg:self-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Need Help Card */}
            <motion.div 
              variants={fadeInUp} 
              whileHover={{ y: -6 }}
              className="bg-[#f4f8fb] rounded-[10px] p-6 sm:p-8 text-center border border-gray-100/50 shadow-sm relative overflow-hidden group transition-all duration-300 hover:shadow-md"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#e62020]/5 rounded-bl-[100px] -z-0 transition-transform group-hover:scale-110 duration-500"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#082142]/5 rounded-tr-[80px] -z-0 transition-transform group-hover:scale-110 duration-500"></div>
              
              <div className="w-16 h-16 rounded-full bg-[#e62020] flex items-center justify-center mx-auto mb-5 relative z-10 shadow-[0_5px_15px_rgba(230,32,32,0.3)]">
                <FileText className="text-white" size={28} />
              </div>
              <h3 className="text-[24px] font-black text-[#082142] mb-3 relative z-10">Need Help?</h3>
              <p className="text-[#556070] font-medium text-[15px] mb-6 relative z-10 leading-[1.6]">
                If you have any questions about our {data.tagline.toLowerCase()}, feel free to contact our support team.
              </p>
              <Link href="/contact" className="inline-block relative z-10 w-full">
                <button className="w-full bg-[#e62020] hover:bg-[#082142] text-white py-3.5 rounded-[8px] font-bold transition-all duration-300 flex items-center justify-center gap-3 group/btn shadow-md hover:shadow-lg">
                  <span>Contact Us</span>
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
            
            {/* Image Card */}
            <motion.div 
              variants={fadeInUp}
              whileHover={{ y: -6 }}
              className="rounded-[16px] overflow-hidden bg-[#061626] shadow-xl flex flex-col group transition-all duration-300 hover:shadow-2xl"
            >
              <div className="relative h-[260px] sm:h-[320px] lg:h-[380px] w-full overflow-hidden">
                <Image 
                  src="/img/policy.png" 
                  alt="Support" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="bg-[#061626] p-7 sm:p-8 relative z-10 -mt-6 rounded-t-[24px]">
                <div className="flex items-center gap-5 sm:gap-6">
                  <div className="w-[64px] h-[64px] sm:w-[72px] sm:h-[72px] flex-shrink-0 rounded-full border-[2.5px] border-white flex items-center justify-center">
                    <ShieldCheck size={32} className="text-white" strokeWidth={2} />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-white text-[20px] sm:text-[24px] font-bold leading-[1.2] mb-3">
                      Your Trust<br/>Our Commitment
                    </h3>
                    <div className="w-12 h-[3px] bg-[#e62020] mb-3"></div>
                    <p className="text-white/90 text-[13px] sm:text-[14px] font-medium">
                      Quality Service. Transparent Policies.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
