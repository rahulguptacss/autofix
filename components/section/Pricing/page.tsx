'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Activity, Battery, Snowflake, Wrench, CheckCircle2 } from 'lucide-react';
import { PricingData } from '@/components/type';

const getIcon = (iconName: string, size: number = 20) => {
  switch (iconName) {
    case 'Activity': return <Activity size={size} />;
    case 'Battery': return <Battery size={size} />;
    case 'Snowflake': return <Snowflake size={size} />;
    case 'Wrench': return <Wrench size={size} />;
    case 'CheckCircle2': return <CheckCircle2 size={size} />;
    default: return <Wrench size={size} />;
  }
};

export default function PricingSection({ data }: { data: PricingData }) {
  return (
    <section className="py-10 md:py-16 bg-[#fafbfc]">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-5">
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
            className="text-[18px] sm:text-4xl md:text-5xl lg:text-[42px] font-extrabold mb-4 text-[#0b121d] leading-[1.1] tracking-tight"
          >
            {data.title_line1} <span className="text-[#e62020]">{data.title_highlight}</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#697386] text-base md:text-lg max-w-2xl mx-auto"
          >
            {data.description}
          </motion.p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.pricingList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-[20px] border border-[#edf1f5] p-2 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 group flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-[200px] w-full">
                <div className="absolute inset-0 rounded-[16px] overflow-hidden">
                  <Image 
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Overlapping Icon */}
                <div className="absolute -bottom-6 left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#ff0000]">
                  {getIcon(item.iconName, 32)}
                </div>
              </div>

              {/* Content Box */}
              <div className="pt-8 px-4 pb-4 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-[18px] font-bold text-[#0b121d] mb-1.5">{item.title}</h3>
                  <p className="text-[#697386] text-[15px] leading-snug pr-2">
                    {item.description}
                  </p>
                </div>
                
                <div className="mt-6">
                  <p className="text-[14px] text-[#697386] mb-0.5">{data.starting_at_text || "Starting at"}</p>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-[32px] font-extrabold text-[#ff0000] tracking-tight leading-none">{item.price}</span>
                    <span className="text-[14px] text-[#697386] font-medium">{data.onwards_text || "Onwards"}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
