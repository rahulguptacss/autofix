'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Wrench, CheckCircle2, Activity, Settings, ArrowRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ServicesData } from '@/components/type';
import { motion } from 'framer-motion';

const getIcon = (iconName: string, size?: number) => {
  switch (iconName) {
    case 'Wrench': return <Wrench size={size} />;
    case 'CheckCircle2': return <CheckCircle2 size={size} />;
    case 'Activity': return <Activity size={size} />;
    case 'Settings': return <Settings size={size} />;
    default: return null;
  }
};

export default function ServicesSection({ data }: { data: ServicesData }) {
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

  return (
    <section className="py-12 lg:py-16 bg-[#f8f9fa] relative overflow-hidden">

      {/* Background Gear Outline */}
      <div className="absolute top-10 -left-20 opacity-5 pointer-events-none">
        <Settings size={300} />
      </div>

      <div className="container mx-auto px-2 md:px-4 relative z-10">

        {/* Header */}
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
            className="text-[26px] sm:text-4xl md:text-5xl lg:text-[42px] font-extrabold mb-2 text-[#0b121d] leading-[1.1]"
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

        {/* Slider Area */}
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
          <div className="overflow-hidden pb-6 pt-2" ref={emblaRef}>
            <div className="flex touch-pan-y -ml-4">
              {data.list.map((s) => (
                <div key={s.id} className="pl-4 min-w-0 flex-[0_0_85%] sm:flex-[0_0_48%] lg:flex-[0_0_33.333%] xl:flex-[0_0_25%]">

                  {/* Card */}
                  <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.08)] overflow-visible group h-full flex flex-col relative hover:shadow-[0_8px_32px_rgba(0,0,0,0.13)] transition-shadow duration-300">

                    {/* Image Container */}
                    <div className="relative h-[200px] w-full rounded-t-2xl overflow-hidden">
                      <Image
                        src={s.img}
                        alt={s.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Red Badge — angled polygon top-left */}
                      <div
                        className="absolute top-0 left-0 bg-[#e62020] text-white font-extrabold text-[20px] flex items-center justify-center w-[70px] h-[60px] z-10 rounded-tl-2xl"
                        style={{ clipPath: 'polygon(0 0, 100% 0, 72% 100%, 0% 100%)' }}
                      >
                        <span className="-ml-2">{s.id}</span>
                      </div>
                    </div>

                    {/* Overlapping Red Icon Circle — sits on card border between image and content */}
                    <div className="absolute top-[172px] left-1/2 -translate-x-1/2 w-[58px] h-[58px] bg-[#e62020] rounded-full flex items-center justify-center border-[5px] border-white z-20 group-hover:-translate-y-1.5 transition-transform duration-300 shadow-md">
                      <div className="text-white">
                        {getIcon(s.icon, 22)}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="pt-12 pb-6 px-5 text-center flex-grow flex flex-col items-center">
                      <h3 className="text-[17px] font-extrabold text-[#0b121d] mb-2 group-hover:text-[#e62020] transition-colors leading-tight">{s.title}</h3>
                      <p className="text-gray-500 text-[13px] leading-relaxed mb-4 flex-grow">{s.desc}</p>

                      {/* Divider */}
                      <div className="w-full border-t border-gray-100 mb-4"></div>

                      <Link href="#" className="inline-flex items-center text-[#0b121d] font-bold text-[13px] group/link hover:text-[#e62020] transition-colors">
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
      </div>
    </section>
  );
}
