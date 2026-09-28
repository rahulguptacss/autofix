"use client";

import Image from "next/image";
import { Check, ArrowRight, Star } from 'lucide-react';
import { AboutData } from '@/components/type';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const CircularProgress = ({ percentage, children }: { percentage: number, children: React.ReactNode }) => {
  const radius = 35;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-[85px] h-[85px] flex items-center justify-center group cursor-pointer">
      {/* Background circle */}
      <svg className="absolute top-0 left-0 w-full h-full transform -rotate-90">
        <circle
          cx="42.5"
          cy="42.5"
          r={radius}
          stroke="#1e293b"
          strokeWidth="6"
          fill="transparent"
        />
        {/* Progress circle */}
        <motion.circle
          cx="42.5"
          cy="42.5"
          r={radius}
          stroke="#e62020"
          strokeWidth="6"
          fill="transparent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: strokeDashoffset }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          strokeLinecap="round"
        />
      </svg>
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="relative z-10 font-extrabold text-[22px] text-[#0b121d] group-hover:scale-110 transition-transform"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default function AboutSection({ data, hideButton = false }: { data: AboutData, hideButton?: boolean }) {
  return (
    <section className="py-12 lg:py-16 bg-white overflow-hidden relative">
      {/* Optional Tire background image for the right side */}
      <div className="absolute right-[-10%] bottom-[-5%] w-[500px] h-[500px] opacity-[0.04] pointer-events-none z-0">
         <Image src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=600&auto=format&fit=crop" alt="Background Texture" fill className="object-cover rounded-full" style={{ mixBlendMode: 'multiply' }} />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-2 sm:gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Images Grid */}
          <div className="w-full lg:w-1/2 relative min-h-[420px] sm:min-h-[550px] lg:min-h-[650px] flex items-start lg:items-center justify-center lg:justify-start pt-4 lg:pt-0">
             {/* Red Vertical Pills */}
             <div className="absolute top-[20%] left-0 w-2 h-20 sm:w-2.5 sm:h-24 bg-[#e62020] rounded-full"></div>
             <div className="absolute top-[10%] left-3 sm:left-4 w-2 h-32 sm:w-2.5 sm:h-40 bg-[#e62020] rounded-full"></div>
             
             {/* Main Image */}
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="relative ml-8 sm:ml-12 lg:ml-12 mb-16 sm:mb-24 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden w-[90%] lg:w-[85%] h-[350px] sm:h-[400px] lg:h-[500px] shadow-sm"
             >
               <Image
                 src={data.image1}
                 alt="Mechanic fixing car"
                 fill
                 className="object-cover"
               />
             </motion.div>
             
             {/* Small Image */}
             <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="absolute bottom-[15px] sm:bottom-[20px] lg:bottom-16 left-6 sm:left-8 lg:left-0 w-[35%] sm:w-[220px] h-[160px] sm:h-[280px] rounded-[1rem] sm:rounded-[1.5rem] border-[6px] sm:border-[12px] border-white overflow-hidden shadow-2xl z-10"
             >
               <Image
                 src={data.image2}
                 alt="Engine details"
                 fill
                 className="object-cover"
               />
             </motion.div>
             
             {/* Experience Box */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.4 }}
               className="absolute bottom-[15px] sm:bottom-[20px] lg:bottom-0 right-0 sm:right-4 lg:right-[-20px] w-[55%] sm:w-[280px] lg:w-[300px] bg-[#e62020] rounded-xl sm:rounded-2xl flex items-center p-2.5 sm:p-4 text-white space-x-2 sm:space-x-4 shadow-2xl z-20 cursor-pointer hover:-translate-y-2 transition-transform duration-300"
             >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-inner">
                   {/* Play Triangle */}
                   <div className="w-0 h-0 border-t-[5px] sm:border-t-[6px] border-t-transparent border-l-[8px] sm:border-l-[10px] border-l-black border-b-[5px] sm:border-b-[6px] border-b-transparent ml-1"></div>
                </div>
                <div className="flex items-end space-x-1 sm:space-x-2">
                   <span className="text-[28px] sm:text-[36px] font-extrabold leading-[0.9] tracking-tight">{data.experience.years}</span>
                   <span className="text-[10px] sm:text-[12px] font-semibold leading-[1.2] mb-0.5">{data.experience.text1}<br/>{data.experience.text2}</span>
                </div>
             </motion.div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-1/2 mt-0 sm:mt-2 lg:mt-0 relative z-10">
             
             {/* Subtitle */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="flex items-center space-x-3 mb-5"
             >
                <div className="flex items-center">
                   <div className="w-8 h-[2px] bg-[#e62020]"></div>
                   <div className="w-1.5 h-1.5 rounded-full bg-[#e62020] -ml-0.5"></div>
                </div>
                <span className="text-[#e62020] font-bold tracking-[0.2em] uppercase text-[12px]">{data.subtitle}</span>
                <div className="flex items-center">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#e62020] -mr-0.5"></div>
                   <div className="w-8 h-[2px] bg-[#e62020]"></div>
                </div>
             </motion.div>
             
             {/* Title */}
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.1 }}
               className="text-[36px] md:text-5xl lg:text-[54px] font-extrabold mb-6 text-[#0b121d] leading-[1.1]"
             >
               {data.title_line1}<br/>{data.title_line2} <span className="text-[#e62020]">{data.title_highlight}</span>
             </motion.h2>
             
             {/* Description */}
             <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="text-gray-600 mb-6 leading-relaxed text-[15px] md:text-[16px]"
             >
               {data.description}
             </motion.p>
             
             {/* Stats Rings */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.3 }}
               className="flex flex-row justify-around sm:justify-start flex-wrap gap-6 sm:gap-12 mb-10"
             >
                {data.stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-center space-y-1.5 sm:space-y-0 sm:space-x-4">
                    <CircularProgress percentage={parseInt(stat.value)}>{stat.value}</CircularProgress>
                    <div className="font-bold text-[14px] sm:text-[15px] leading-tight text-[#0b121d] text-center sm:text-left max-w-[90px] mt-1 sm:mt-0">
                      {stat.text1}<br/>{stat.text2}
                    </div>
                  </div>
                ))}
             </motion.div>

             {/* Points & CEO Card Area */}
             <div className="relative mb-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="grid grid-cols-1 gap-y-3"
                >
                  {data.points.map((point, idx) => (
                    <div key={idx} className="flex items-center space-x-3 text-gray-700 font-semibold">
                      <div className="w-[22px] h-[22px] rounded-full bg-[#e62020] flex items-center justify-center shrink-0">
                         <Check size={14} strokeWidth={3.5} className="text-white" />
                      </div>
                      <span className="text-[14.5px]">{point}</span>
                    </div>
                  ))}
                </motion.div>
                
                {/* CEO Card */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-8 lg:mt-0 lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 bg-[#f4f4f4] rounded-xl p-4 pr-10 flex items-center space-x-4 shadow-sm z-10 w-fit"
                >
                  <div className="w-14 h-14 rounded-full overflow-hidden border-[3px] border-[#e62020] shrink-0">
                    <Image src={data.ceo.image} width={60} height={60} alt={data.ceo.name} className="object-cover w-full h-full"/>
                  </div>
                  <div>
                    <div className="font-bold text-[#0b121d] text-[16px]">{data.ceo.name}</div>
                    <div className="text-gray-500 text-[13px]">{data.ceo.role}</div>
                  </div>
                </motion.div>
             </div>

             {/* Bottom Action Area */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.5 }}
               className="flex flex-row flex-nowrap items-center justify-between border-t border-gray-200 pt-8 gap-2 w-full"
             >
                {!hideButton && (
                  <Link href="/about" className="shrink-0">
                    <button className="bg-[#e62020] hover:bg-red-700 text-white font-bold py-2 sm:py-2.5 pl-3 sm:pl-5 pr-1 sm:pr-2 rounded-full flex items-center justify-between space-x-2 sm:space-x-5 transition-colors group w-full">
                      <span className="text-[10px] sm:text-[12px] tracking-wide whitespace-nowrap uppercase">{data.button_text || 'ABOUT MORE'}</span>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black rounded-full flex items-center justify-center group-hover:bg-gray-800 transition-colors shrink-0">
                         <ArrowRight size={12} strokeWidth={2.5} className="text-white sm:w-3.5 sm:h-3.5" />
                      </div>
                    </button>
                  </Link>
                )}
                
                <div className="flex items-center space-x-2 sm:space-x-4 shrink-0">
                  <div className="flex -space-x-2 sm:-space-x-3">
                    <Image src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow-sm object-cover" alt="Review 1"/>
                    <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow-sm object-cover" alt="Review 2"/>
                    <Image src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=150&auto=format&fit=crop" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white shadow-sm object-cover" alt="Review 3"/>
                  </div>
                  <div>
                    <div className="flex space-x-0.5 sm:space-x-1 text-[#e62020]">
                       {[1,2,3,4,5].map(i => <Star key={i} size={11} className="sm:w-[13px] sm:h-[13px]" fill="currentColor" />)}
                    </div>
                    <div className="text-[10px] sm:text-[13px] font-semibold text-gray-700 mt-0.5 sm:mt-1 whitespace-nowrap">4.9 (2.5k+ Reviews)</div>
                  </div>
                </div>
             </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
