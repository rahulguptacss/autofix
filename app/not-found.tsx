'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <section className="py-10 md:py-12 bg-white relative overflow-hidden flex items-center min-h-[calc(100vh-200px)]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Left Content */}
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-3 md:mb-4">
              <span className="w-10 h-[2.5px] bg-[#e62020]"></span>
              <span className="text-[#e62020] font-extrabold text-[14px] md:text-[15px] uppercase tracking-[3px]">OOPS!</span>
            </div>
            
            <h1 className="text-[100px] sm:text-[120px] md:text-[140px] lg:text-[170px] font-black leading-none text-[#1a1a1a] tracking-tighter mb-2 md:mb-3">
              404
            </h1>
            
            <h2 className="text-[32px] sm:text-[36px] lg:text-[44px] font-black text-[#1a1a1a] leading-[1.1] mb-4 md:mb-5">
              Page <span className="text-[#e62020]">Not Found</span>
            </h2>
            
            <p className="text-[#556070] text-[15px] md:text-[17px] leading-[1.6] font-medium mb-6 md:mb-8 max-w-[500px]">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/" className="w-full sm:w-auto">
                <button className="w-full bg-[#e62020] hover:bg-[#082142] text-white px-6 sm:px-8 py-3 md:py-3.5 rounded-[8px] font-bold transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_4px_14px_rgba(230,32,32,0.25)] hover:shadow-[0_6px_20px_rgba(8,33,66,0.3)] hover:-translate-y-1">
                  <Home size={18} />
                  <span className="text-[14px] md:text-[15px]">Go to Homepage</span>
                </button>
              </Link>
              <button 
                onClick={() => window.history.back()}
                className="w-full sm:w-auto bg-white hover:bg-gray-50 text-[#082142] border-[2px] border-gray-200 hover:border-[#082142] px-6 sm:px-8 py-3 md:py-3.5 rounded-[8px] font-bold transition-all duration-300 flex items-center justify-center gap-3 shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                <ArrowLeft size={18} />
                <span className="text-[14px] md:text-[15px]">Go Back</span>
              </button>
            </div>
          </motion.div>
          
          {/* Right Image */}
          <motion.div 
            className="w-full lg:w-1/2 relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
             <div className="relative w-full aspect-[4/3] max-w-[400px] lg:max-w-[500px]">
                <Image 
                  src="/img/notfound.png"
                  alt="404 Mechanic"
                  fill
                  className="object-contain"
                  priority
                />
             </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
