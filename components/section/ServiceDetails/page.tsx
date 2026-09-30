'use client';

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Gauge, 
  Settings, 
  IndianRupee, 
  CheckCircle, 
  PhoneCall, 
  ArrowRight 
} from 'lucide-react';

const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'ShieldCheck': return <ShieldCheck size={28} className="text-[#e62020] group-hover:text-white transition-colors duration-300" />;
    case 'Gauge': return <Gauge size={28} className="text-[#e62020] group-hover:text-white transition-colors duration-300" />;
    case 'Settings': return <Settings size={28} className="text-[#e62020] group-hover:text-white transition-colors duration-300" />;
    case 'IndianRupee': return <IndianRupee size={28} className="text-[#e62020] group-hover:text-white transition-colors duration-300" />;
    default: return <Settings size={28} className="text-[#e62020] group-hover:text-white transition-colors duration-300" />;
  }
};

export default function ServiceDetailsSection({ data, otherServices }: { data: any, otherServices: any[] }) {
  return (
    <section className="py-10 md:py-16 bg-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Main Content (Left) */}
          <div className="lg:col-span-8">
            
            {/* Top Block: Image and Text Side-by-Side */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mb-16">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-[48%] h-[300px] md:h-[350px] lg:h-[400px] relative rounded-[10px] overflow-hidden"
              >
                <Image 
                  src={data.mainImage} 
                  alt={data.title1 + ' ' + data.title2} 
                  fill 
                  className="object-cover" 
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full lg:w-[52%] flex flex-col justify-center py-2"
              >
                <div className="flex items-center space-x-2 text-[#e62020] font-bold tracking-[0.1em] uppercase text-[14px] mb-3">
                  <ArrowRight size={16} strokeWidth={2.5} />
                  <span>{data.subtitle}</span>
                </div>
                
                <h2 className="text-[28px] md:text-4xl lg:text-[44px] font-extrabold text-[#0b121d] mb-4 tracking-tight leading-[1.2]">
                  {data.title1} <span className="text-[#e62020]">{data.title2}</span>
                </h2>
                
                <h4 className="text-lg md:text-[22px] font-medium text-[#4a5568] mb-6">
                  {data.quote}
                </h4>
                
                <p className="text-[#697386] text-[15px] md:text-[16px] leading-[1.8] mb-10">
                  {data.description}
                </p>
                
                <div className="flex items-start justify-between sm:justify-start sm:gap-6 md:gap-10">
                  {data.benefits.map((benefit: any, index: number) => (
                    <div key={index} className="flex flex-col items-center text-center group cursor-default">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#ffe8e8] flex items-center justify-center mb-3 group-hover:bg-[#e62020] transition-colors duration-300">
                        <div className="group-hover:text-white group-hover:scale-110 transition-all duration-300 flex items-center justify-center w-full h-full">
                          {getIcon(benefit.icon)}
                        </div>
                      </div>
                      <span className="text-[12px] md:text-[14px] font-bold text-[#1c2a40] leading-tight max-w-[80px]">
                        {benefit.title}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Service Overview */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-14"
            >
              <h3 className="text-2xl md:text-[28px] font-extrabold text-[#0b121d] mb-3">
                {data.overview.title}
              </h3>
              <div className="w-10 h-[3px] bg-[#e62020] mb-6"></div>
              <p className="text-[#697386] text-[15px] leading-relaxed">
                {data.overview.description}
              </p>
            </motion.div>

            {/* What's Included */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-[28px] font-extrabold text-[#0b121d] mb-3">
                {data.included.title}
              </h3>
              <div className="w-10 h-[3px] bg-[#e62020] mb-8"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <ul className="space-y-4">
                  {data.included.list.map((item: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3 group">
                      <CheckCircle className="text-[#e62020] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" size={20} />
                      <span className="text-[#697386] text-[15px] font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="relative h-[280px] rounded-[10px] overflow-hidden group">
                  <Image 
                    src={data.included.image} 
                    alt="Included Service" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute bottom-0 right-0 bg-[#e62020] text-white p-5 rounded-tl-[10px] max-w-[200px]">
                    <p className="font-extrabold text-[15px] leading-snug">
                      {data.included.badge.text1}<br/>{data.included.badge.text2}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
          </div>

          {/* Sidebar (Right) */}
          <div className="lg:col-span-4">
            <div className="space-y-8 lg:sticky lg:top-28">
              
              {/* Other Services List */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-[10px] overflow-hidden bg-white shadow-[0_0_20px_rgba(0,0,0,0.03)] border border-gray-100"
              >
                <div className="bg-[#f4f7fc] px-6 py-5">
                  <h3 className="text-xl md:text-[22px] font-extrabold text-[#0b121d]">
                    {data.sidebar.servicesTitle}
                  </h3>
                </div>
                
                <ul className="flex flex-col">
                  {otherServices.map((service, index) => (
                    <li key={index} className="border-b border-gray-100 last:border-b-0">
                      <Link 
                        href={`/service-details/${slugify(service.title)}`} 
                        className={`flex items-center justify-between p-3 px-5 hover:bg-gray-50 transition-colors group ${
                          slugify(service.title) === slugify(data.title1 + ' ' + (data.title2 || '')) ? 'bg-gray-50' : ''
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-[72px] h-[52px] rounded-[4px] relative overflow-hidden flex-shrink-0 shadow-sm border border-gray-200">
                            <Image src={service.img} alt={service.title} fill className="object-cover" />
                          </div>
                          <span className="font-bold text-[15px] text-[#0b121d]">
                            {service.title}
                          </span>
                        </div>
                        <ArrowRight size={18} className="text-[#e62020] group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                      </Link>
                    </li>
                  ))}
                </ul>
                
                <div className="border-t border-gray-100 p-5 flex justify-center">
                  <Link href="/services" className="flex items-center space-x-2 text-[#e62020] font-bold text-[15px] hover:text-[#0b121d] transition-colors group">
                    <span>View All Services</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                  </Link>
                </div>
              </motion.div>

              {/* Need Help Box */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#0b121d] rounded-[10px] p-8 relative overflow-hidden group flex flex-col"
              >
                {/* Background Image / Overlay */}
                <div 
                  className="absolute inset-0 z-0 opacity-25"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800&auto=format&fit=crop')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0b121d] via-[#0b121d]/90 to-[#0b121d]/40 z-0"></div>
                
                <div className="relative z-10 text-left">
                  <h3 className="text-white text-[24px] md:text-[28px] font-extrabold whitespace-pre-line leading-tight">
                    {data.sidebar.helpTitle}
                  </h3>
                  <div className="w-12 h-[2px] bg-[#e62020] mt-4 mb-8"></div>
                  
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#0b121d] flex-shrink-0">
                      <PhoneCall size={22} className="fill-current" />
                    </div>
                    <div className="text-left">
                      <p className="text-white font-bold text-[19px] leading-tight mb-1">{data.sidebar.phone}</p>
                      <p className="text-gray-200 text-[13px]">{data.sidebar.hours}</p>
                    </div>
                  </div>
                  
                  <Link href="/book-service" className="w-full">
                    <button className="w-full bg-[#e62020] text-white font-bold py-4 rounded-[6px] hover:bg-white hover:text-[#e62020] transition-colors duration-300 flex items-center justify-center space-x-2 group/btn">
                      <span>{data.sidebar.buttonText}</span>
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" strokeWidth={2.5} />
                    </button>
                  </Link>
                </div>
              </motion.div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
