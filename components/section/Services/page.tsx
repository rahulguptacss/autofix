'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Wrench, CheckCircle2, Activity, Settings, ArrowRight, Snowflake, LifeBuoy, Battery } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ServicesData } from '@/components/type';
import { motion } from 'framer-motion';

const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const getIcon = (iconName: string, size?: number) => {
  switch (iconName) {
    case 'Wrench': return <Wrench size={size} />;
    case 'CheckCircle2': return <CheckCircle2 size={size} />;
    case 'Activity': return <Activity size={size} />;
    case 'Settings': return <Settings size={size} />;
    case 'Snowflake': return <Snowflake size={size} />;
    case 'LifeBuoy': return <LifeBuoy size={size} />;
    case 'Battery': return <Battery size={size} />;
    default: return <Wrench size={size} />;
  }
};

export default function ServicesSection({ data, layout = "slider" }: { data: ServicesData, layout?: "slider" | "grid" }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { align: 'start', slidesToScroll: 2 },
      '(min-width: 1024px)': { align: 'start', slidesToScroll: 3 },
      '(min-width: 1280px)': { align: 'start', slidesToScroll: 4 }
    }
  }, [Autoplay({ delay: 5000, stopOnInteraction: true })]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  // Grid Pagination Logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  
  // Duplicate data to simulate multiple pages since data.json only has 8 items
  const allGridItems = [...data.list, ...data.list.map(i => ({...i, id: String(Number(i.id)+8)})), ...data.list.map(i => ({...i, id: String(Number(i.id)+16)}))];
  const totalPages = Math.ceil(allGridItems.length / itemsPerPage);
  
  const currentGridItems = allGridItems.slice(
    (currentPage - 1) * itemsPerPage, 
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Optional: smooth scroll to top of section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="pt-12 lg:pt-16 pb-6 lg:pb-8 bg-[#f8f9fa] relative overflow-hidden">

      {/* Background Gear Outline */}
      <div className="absolute top-10 -left-20 opacity-5 pointer-events-none">
        <Settings size={300} />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 lg:mb-8">
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

        {layout === "slider" ? (
          <div className="relative mx-auto px-0 sm:px-10">
            {/* Left Arrow */}
            <button
              onClick={scrollPrev}
              className="hidden sm:flex absolute -left-2 top-[40%] -translate-y-1/2 z-20 w-11 h-11 bg-white rounded-full items-center justify-center shadow-lg border border-gray-100 text-[#e62020] hover:bg-[#e62020] hover:text-white transition-colors"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={scrollNext}
              className="hidden sm:flex absolute -right-2 top-[40%] -translate-y-1/2 z-20 w-11 h-11 bg-white rounded-full items-center justify-center shadow-lg border border-gray-100 text-[#e62020] hover:bg-[#e62020] hover:text-white transition-colors"
            >
              <ChevronRight size={22} />
            </button>

            {/* Embla Viewport */}
            <div className="overflow-hidden pb-8 pt-4" ref={emblaRef}>
              <div className="flex touch-pan-y -ml-3 md:-ml-4 lg:-ml-5">
                {data.list.map((s) => (
                  <div key={s.id} className="pl-3 md:pl-4 lg:pl-5 min-w-0 flex-[0_0_85%] sm:flex-[0_0_48%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%]">
                    {/* Card */}
                    <div className="bg-white rounded-[10px] shadow-[0_4px_30px_rgba(0,0,0,0.03)] overflow-visible group h-full flex flex-col relative hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300">
                      
                      {/* Image Container */}
                      <div className="relative h-[200px] w-full rounded-t-[10px] overflow-hidden">
                        <Image
                          src={s.img || "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=800&auto=format&fit=crop"}
                          alt={s.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />

                        {/* Red Badge */}
                        <div
                          className="absolute top-0 left-0 bg-[#e62020] text-white font-extrabold text-[20px] flex items-center justify-center w-[60px] h-[60px] z-10 rounded-tl-[10px]"
                          style={{ clipPath: 'polygon(0 0, 100% 0, 72% 100%, 0% 100%)' }}
                        >
                          <span className="-ml-1">{s.id}</span>
                        </div>
                      </div>

                      {/* Overlapping Red Icon Circle */}
                      <div className="absolute top-[172px] left-1/2 -translate-x-1/2 w-[58px] h-[58px] bg-[#e62020] rounded-full flex items-center justify-center border-[5px] border-white z-20 group-hover:-translate-y-1.5 transition-transform duration-300 shadow-sm">
                        <div className="text-white group-hover:scale-110 transition-transform duration-300">
                          {getIcon(s.icon, 22)}
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="pt-10 pb-5 px-4 text-center flex-grow flex flex-col items-center">
                        <h3 className="text-[17px] font-extrabold text-[#0b121d] mb-1 group-hover:text-[#e62020] transition-colors leading-tight">{s.title}</h3>
                        <p className="text-gray-500 text-[13px] leading-relaxed mb-3 flex-grow">{s.desc}</p>

                        <div className="w-full border-t border-gray-100 mb-3"></div>

                        <Link href={`/service-details/${slugify(s.title)}`} className="inline-flex items-center text-[#0b121d] font-bold text-[13px] group/link hover:text-[#e62020] transition-colors">
                          Read More
                          <ArrowRight size={15} className="ml-1.5 text-[#e62020] group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>

                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center items-center space-x-2.5 mt-2">
              {scrollSnaps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? 'bg-[#e62020] w-5 h-2.5'
                      : 'bg-gray-300 hover:bg-gray-400 w-2.5 h-2.5'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div>
            {/* Grid Area */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6 mb-8 lg:mb-10">
              {currentGridItems.map((s, idx) => (
                <motion.div 
                  key={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-[10px] shadow-[0_4px_30px_rgba(0,0,0,0.03)] group h-full flex flex-col relative hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-300"
                >
                  {/* Image Container */}
                  <div className="relative h-[220px] w-full rounded-t-[10px] overflow-hidden">
                    <Image
                      src={s.img || "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=800&auto=format&fit=crop"}
                      alt={s.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Red Badge */}
                    <div
                      className="absolute top-0 left-0 bg-[#e62020] text-white font-extrabold text-[20px] flex items-center justify-center w-[60px] h-[60px] z-20 rounded-tl-[10px]"
                      style={{ clipPath: 'polygon(0 0, 100% 0, 72% 100%, 0% 100%)' }}
                    >
                      <span className="-ml-1">{s.id}</span>
                    </div>
                  </div>

                  {/* Overlapping Red Icon Circle */}
                  <div className="absolute top-[182px] left-1/2 -translate-x-1/2 w-[70px] h-[70px] bg-[#e62020] rounded-full flex items-center justify-center border-[6px] border-white z-20 group-hover:-translate-y-1 transition-transform duration-300 shadow-sm">
                    <div className="text-white group-hover:scale-110 transition-transform duration-300">
                      {getIcon(s.icon, 26)}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="pt-10 pb-6 px-4 md:px-5 text-center flex-grow flex flex-col items-center">
                    <h3 className="text-[19px] font-extrabold text-[#0b121d] mb-1.5 group-hover:text-[#e62020] transition-colors">{s.title}</h3>
                    <p className="text-[#697386] text-[15px] leading-relaxed mb-4 flex-grow">{s.desc}</p>

                    <div className="w-full border-t border-gray-100 mb-4"></div>

                    <Link href={`/service-details/${slugify(s.title)}`} className="inline-flex items-center text-[#0b121d] font-bold text-[14px] group/link hover:text-[#e62020] transition-colors">
                      Read More
                      <ArrowRight size={16} className="ml-1.5 text-[#e62020] group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-1.5 md:gap-2">
                <button 
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="w-10 h-10 rounded-[6px] border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#e62020] hover:border-[#e62020] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={20} />
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                  <button 
                    key={num} 
                    onClick={() => handlePageChange(num)}
                    className={`w-10 h-10 rounded-[6px] flex items-center justify-center font-bold transition-colors ${
                      currentPage === num 
                        ? 'bg-[#e62020] text-white border-transparent' 
                        : 'border border-gray-200 text-[#0b121d] hover:text-[#e62020] hover:border-[#e62020]'
                    }`}
                  >
                    {num}
                  </button>
                ))}

                <button 
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 rounded-[6px] border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#e62020] hover:border-[#e62020] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
