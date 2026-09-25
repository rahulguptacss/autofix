'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { WhyChooseUsData } from '@/components/type';

const getIcon = (iconName: string) => {
  const Icon = (LucideIcons as any)[iconName];
  return Icon ? <Icon size={24} /> : null;
};

export default function WhyChooseUsSection({ data }: { data: WhyChooseUsData }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current || !isDragging) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPos(percentage);
  }, [isDragging]);

  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section className="py-12 lg:py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Side: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-2 flex items-center gap-3 text-[12px] font-extrabold uppercase tracking-[0.08em] text-[#e62020]">
                <span className="h-[2px] w-12 bg-[#e62020]" />
                <span>{data.subtitle}</span>
                <span className="h-[2px] w-12 bg-[#e62020]" />
              </div>
              
              <h2 className="m-0 mb-4 text-[31px] font-extrabold leading-[1.08] tracking-[-1.3px] text-[#101b29] sm:text-[38px] lg:text-[45px]">
                {data.title_line1} <span className="text-[#e62020]">{data.title_highlight}</span>
              </h2>
              
              <p className="mb-8 max-w-[550px] text-[15px] leading-[1.6] text-[#697386]">
                {data.description}
              </p>
            </motion.div>

            <div className="mb-10 grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
              {data.features.map((feature, idx) => (
                <motion.div 
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                  className="group flex items-start gap-4"
                >
                  <div className="relative flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#fff0f0] text-[#e62020] transition-colors duration-300 group-hover:bg-[#e62020] group-hover:text-white">
                    <div className="absolute inset-[-4px] rounded-full border border-red-100 transition-colors duration-300 group-hover:border-[#e62020]/30" />
                    {getIcon(feature.icon)}
                  </div>
                  <div className="mt-1">
                    <h4 className="mb-1 text-[15px] font-extrabold text-[#101b29]">{feature.title}</h4>
                    <p className="max-w-[200px] text-[13px] leading-[1.4] text-[#697386]">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-10"
            >
              <button className="flex shrink-0 items-center gap-2 rounded-[6px] bg-[#e62020] px-7 py-3.5 text-[14px] font-extrabold text-white transition hover:bg-red-700">
                <span>{data.button_text}</span>
                <LucideIcons.ArrowRight size={18} strokeWidth={2.5} />
              </button>
              
              <div className="flex shrink-0 items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e62020] text-white">
                  <LucideIcons.PhoneCall size={18} fill="currentColor" />
                </div>
                <div>
                  <p className="m-0 text-[11px] font-medium text-[#697386]">{data.call_text || "Call Us Now"}</p>
                  <p className="m-0 text-[17px] font-extrabold tracking-wide text-[#101b29]">{data.phone}</p>
                </div>
              </div>
              
              {/* Decorative dots pattern */}
              <motion.div 
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-1/2 hidden -translate-y-1/2 lg:block"
              >
                <svg width="70" height="40" viewBox="0 0 70 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="dots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="2" fill="#ffcccc" />
                  </pattern>
                  <rect width="70" height="40" fill="url(#dots)" />
                </svg>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side: Before/After Slider */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full aspect-[4/3] rounded-[20px] overflow-visible"
          >
            <div 
              ref={containerRef}
              className="relative w-full h-full cursor-ew-resize select-none overflow-hidden rounded-[20px] shadow-2xl"
              onMouseMove={onMouseMove}
              onTouchMove={onTouchMove}
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
            >
              {/* After Image (Background) */}
              <div className="absolute inset-0 w-full h-full">
                <Image src={data.after_image} alt="After Repair" fill className="object-cover" draggable={false} />
                <div className="absolute right-5 top-5 z-10 rounded-[6px] border border-[#e62020] bg-[#e62020] px-5 py-2 text-[13px] font-bold text-white shadow-md">
                  After
                </div>
              </div>

              {/* Before Image (Foreground, Clipped) */}
              <div 
                className="absolute inset-0 z-10 h-full overflow-hidden" 
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <Image src={data.before_image} alt="Before Repair" fill className="object-cover" draggable={false} />
                <div className="absolute left-5 top-5 z-20 rounded-[6px] border border-white/30 bg-[#101b29]/60 px-5 py-2 text-[13px] font-bold text-white shadow-md backdrop-blur-sm">
                  Before
                </div>
              </div>

              {/* Slider Line & Handle */}
              <div 
                className="pointer-events-none absolute bottom-0 top-0 z-20 flex w-1 items-center justify-center bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                style={{ left: `calc(${sliderPos}% - 2px)` }}
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="-ml-[18px] flex h-[54px] w-[36px] cursor-pointer items-center justify-center rounded-full bg-white text-[#e62020] shadow-[0_0_15px_rgba(0,0,0,0.2)]"
                >
                  <LucideIcons.ChevronLeft size={20} strokeWidth={4} className="-mr-0.5" />
                  <LucideIcons.ChevronRight size={20} strokeWidth={4} className="-ml-0.5" />
                </motion.div>
              </div>
            </div>

            {/* Overlapping Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 30, x: '-50%' }}
              whileInView={{ opacity: 1, y: 0, x: '-50%' }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6, type: 'spring', bounce: 0.4 }}
              className="absolute -bottom-8 left-1/2 z-30 flex w-[90%] max-w-[360px] items-center justify-center rounded-[12px] bg-white px-6 py-5 shadow-[0_15px_40px_rgba(0,0,0,0.12)]"
            >
              {/* Left part */}
              <div className="flex items-center gap-3">
                <div className="text-[#e62020]">
                  <LucideIcons.CarFront size={32} strokeWidth={2.2} />
                </div>
                <p className="m-0 text-[14px] font-extrabold leading-tight text-[#101b29]">
                  {data.badge.text1} <br />
                  {data.badge.text2.toLowerCase() === 'with' ? 'with ' : `${data.badge.text2} `}
                  <span className="text-[#e62020]">{data.badge.text3}</span>
                </p>
              </div>

              {/* Separator */}
              <div className="mx-5 h-10 w-px bg-[#e4e7ec]" />

              {/* Right part */}
              <div className="flex flex-col items-center justify-center text-center">
                <span className="text-[26px] font-black leading-none text-[#e62020]">{data.badge.years}</span>
                <span className="mt-1 text-[10px] font-medium text-[#697386]">Years of Experience</span>
              </div>
            </motion.div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}
