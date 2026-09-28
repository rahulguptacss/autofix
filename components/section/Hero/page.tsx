"use client";

import Image from "next/image";
import { Wrench, Settings, ShieldCheck, Clock, ArrowRight, Users, Star, Car } from 'lucide-react';
import { HeroData } from '@/components/type';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import { animate, useInView, motion } from 'framer-motion';

function AnimatedCounter({ text }: { text: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true });

  useEffect(() => {
    const match = text.match(/^([\d.]+)(.*)$/);
    if (match && inView) {
      const num = parseFloat(match[1]);
      const suffix = match[2];
      const controls = animate(0, num, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            const display = num % 1 === 0 ? Math.round(value) : value.toFixed(1);
            nodeRef.current.textContent = display + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [text, inView]);

  const match = text.match(/^([\d.]+)(.*)$/);
  if (!match) return <span>{text}</span>;

  return <span ref={nodeRef}>0{match[2]}</span>;
}

const getFeatureIcon = (idx: number, className?: string, size?: number) => {
  const props = { className, size };
  if (idx === 0) return <Wrench {...props} />;
  if (idx === 1) return <Settings {...props} />;
  if (idx === 2) return <ShieldCheck {...props} />;
  if (idx === 3) return <Clock {...props} />;
  return null;
};

const getStatIcon = (idx: number, className?: string, size?: number) => {
  const props = { className, size };
  if (idx === 0) return <Users {...props} />;
  if (idx === 1) return <Star {...props} />;
  if (idx === 2) return <Car {...props} />;
  return null;
};

export default function HeroSection({ data }: { data: HeroData }) {
  return (
    <section className="relative bg-[#0b121d] text-white min-h-[480px] flex items-start overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute top-0 left-0 w-full h-[350px] md:h-full z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={data.bg_image}
            alt="Mechanic working on car"
            fill
            className="object-cover object-[75%_top] md:object-center"
          />
        </motion.div>
        {/* Gradient overlay: dark on bottom/left, fading to top/right */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b121d] from-10% via-[#0b121d]/80 to-transparent md:hidden z-10" />
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#0b121d] from-35% via-[#0b121d]/80 to-transparent z-10" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-[190px] md:pt-16 lg:pt-20 pb-32 md:pb-24 lg:pb-24">
        <div className="max-w-2xl">
          {/* Tags */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center flex-wrap gap-y-1 gap-x-2 md:gap-x-0 mb-3 text-[9px] md:text-[11px] font-bold tracking-[0.25em] uppercase text-gray-300"
          >
            {data.tags.map((tag, index) => (
              <React.Fragment key={index}>
                <span>{tag}</span>
                {index < data.tags.length - 1 && <span className="w-1.5 h-1.5 rounded-full bg-[#e62020] md:mx-3" />}
              </React.Fragment>
            ))}
          </motion.div>
          
          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[38px] leading-[1.1] md:text-5xl lg:text-[60px] font-extrabold md:leading-none mb-3 md:mb-2"
          >
            <span className="md:hidden">{data.title_line1} {data.title_line2}</span>
            <span className="hidden md:inline">{data.title_line1}</span>
            <br className="hidden md:block" />
            <span className="hidden md:inline">{data.title_line2} </span>
            <span className="text-[#e62020] block md:inline">{data.title_highlight}</span>
          </motion.h1>
          
          {/* Red line */}
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-[#e62020] mb-3 md:mb-2"
          ></motion.div>
          
          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[14px] md:text-[16px] text-gray-300 mb-6 md:mb-5 max-w-lg leading-relaxed"
          >
            {data.description}
          </motion.p>

          {/* Features and Button Container */}
          <div className="flex flex-col md:flex-col md:items-start">
            {/* Button */}
            <Link href="/book-service" className="w-full md:w-auto order-1 md:order-2 mb-6 md:mb-0">
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-[#e62020] hover:bg-red-700 text-white font-semibold py-3.5 px-7 rounded-md flex items-center justify-center space-x-2 transition-colors w-full"
              >
                <span>{data.button_text || 'Book A Service'}</span>
                 <ArrowRight size={18} strokeWidth={2.5} />
              </motion.button>
            </Link>

            {/* Feature Boxes */}
            <div className="flex justify-between md:justify-start flex-wrap gap-1 sm:gap-2 md:gap-3 order-2 md:order-1 mb-0 md:mb-6 w-full md:w-auto">
              {data.features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                  className="flex flex-col items-center justify-center py-3 px-1 md:py-5 md:px-2 w-[23%] md:w-[115px] border border-gray-700/60 rounded-xl md:rounded-2xl bg-[#0b121d]/80 backdrop-blur-sm"
                >
                   <div className="md:hidden">{getFeatureIcon(idx, "text-[#e62020] mb-1.5", 22)}</div>
                   <div className="hidden md:block">{getFeatureIcon(idx, "text-[#e62020] mb-3", 26)}</div>
                   <span className="text-[9px] sm:text-[10px] md:text-[12px] font-medium text-center text-gray-200 leading-[1.2]">{feature.text1}<br/>{feature.text2}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Card overlapping the bottom right */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 md:left-auto w-full md:w-[85%] lg:w-[65%] xl:w-[55%] h-[100px] md:h-[120px] z-20 flex md:block"
      >
        {/* Mobile Background */}
        <div className="md:hidden absolute inset-0 bg-[#070b14] border-t border-gray-800"></div>

        {/* Desktop Red Background (Stripe layer) */}
        <div 
          className="hidden md:block absolute inset-0 bg-[#e62020]"
          style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)' }}
        ></div>
        
        {/* Desktop Dark Background */}
        <div 
          className="hidden md:block absolute inset-0 bg-[#0f1521]"
          style={{ clipPath: 'polygon(calc(10% + 6px) 0, 100% 0, 100% 100%, 6px 100%)' }}
        ></div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-around h-full w-full px-2 md:pl-[12%] md:pr-4 lg:pr-10">
          {data.stats.map((stat, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center text-center w-1/3 md:w-auto">
                <div className="md:hidden">{getStatIcon(idx, "text-white mb-1", 24)}</div>
                <div className="hidden md:block">{getStatIcon(idx, "text-white mb-2", 28)}</div>
                <div className="text-[16px] md:text-[22px] font-bold text-white leading-tight">
                  <AnimatedCounter text={stat.number} />
                </div>
                <div className="text-[10px] md:text-[12px] text-gray-400 mt-0.5 font-medium">{stat.text}</div>
              </div>
              {idx < data.stats.length - 1 && (
                <div className="w-px h-8 md:h-12 bg-gray-700"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
