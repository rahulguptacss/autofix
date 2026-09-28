import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { FaqData } from '@/components/type';
import FaqAccordion from './FaqAccordion';

const iconMap: Record<string, React.ElementType> = {
  Phone: Phone,
  Mail: Mail,
  MapPin: MapPin,
};

export default function FaqSection({ data }: { data: FaqData }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 items-start">
          
          {/* Sidebar */}
          <div className="w-full lg:w-[350px] flex-shrink-0 flex flex-col gap-8">
            
            {/* Assistance Card */}
            {/* Assistance Card */}
            <div className="bg-[#f4f8fb] rounded-[10px] p-8 md:p-10">
              <h2 className="text-[#082142] text-[32px] md:text-[40px] lg:text-[44px] font-black leading-[1.05] mb-4 tracking-[-1px]">
                {data.sidebar.title.split(' ')[0]} <br />
                <span className="text-[#e62020]">{data.sidebar.title.split(' ')[1]}</span>
              </h2>
              <p className="text-[#556070] text-[15px] leading-[1.6] mb-8 font-medium">
                {data.sidebar.description}
              </p>
              
              <div className="flex flex-col gap-7 mb-8">
                {data.sidebar.contacts.map((contact, idx) => {
                  const IconComponent = iconMap[contact.icon] || Phone;
                  return (
                    <div key={idx} className="flex gap-5 items-start">
                      <div className="w-[52px] h-[52px] bg-[#e62020] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <IconComponent size={22} className="text-white" strokeWidth={2.5} />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-[#082142] text-[16px] mb-0.5">
                          {contact.title}
                        </h4>
                        <div className="text-[#082142] font-extrabold text-[15px] mb-0.5">
                          {contact.detail}
                        </div>
                        {contact.subDetail && (
                          <div className="text-[#697386] text-[13.5px] font-medium leading-[1.4]">
                            {contact.subDetail}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-gray-300/50 pt-8 mb-8">
                <h3 className="font-black text-[#082142] text-[20px] mb-2 tracking-[-0.5px]">
                  {data.sidebar.extraHelp.title}
                </h3>
                <p className="text-[#556070] text-[15px] leading-[1.6] font-medium">
                  {data.sidebar.extraHelp.description}
                </p>
              </div>

              <Link href={data.sidebar.extraHelp.buttonLink} className="bg-[#e62020] hover:bg-[#082142] text-white p-2 pl-6 rounded-full font-bold transition-colors flex items-center justify-between gap-4 w-full group">
                <span className="flex-1 text-center text-[16px] tracking-wide">{data.sidebar.extraHelp.buttonText}</span>
                <div className="w-[42px] h-[42px] rounded-full bg-[#082142] flex items-center justify-center flex-shrink-0 group-hover:bg-[#e62020] transition-colors">
                  <ArrowRight size={20} strokeWidth={2.5} className="text-white" />
                </div>
              </Link>
            </div>

            {/* Bottom Image */}
            <div className="relative w-full h-[220px] rounded-[10px] overflow-hidden group">
              <Image 
                src={data.sidebar.bottomImage} 
                alt={`${data.sidebar.imageTextLine1 || ""} ${data.sidebar.imageTextLine2 || ""}`.trim()} 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-10 left-8 font-caveat text-[42px] text-white leading-[1.1] -rotate-[8deg] transform origin-bottom-left select-none">
                <div className="relative inline-block z-10">
                  <span className="block ml-4">{data.sidebar.imageTextLine1 || "Your Car"}</span>
                  <span className="block -mt-1">{data.sidebar.imageTextLine2 || "Our Priority"}</span>
                  <svg className="absolute -bottom-3 left-0 w-[110%] h-[20px] text-[#e62020] -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M2,18 Q40,-2 98,6" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="w-full lg:w-[calc(100%-398px)] flex-1 pt-2">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-8 md:mb-10">
              <div>
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <span className="w-8 h-[2px] bg-[#e62020]"></span>
                  <span className="text-[#0b121d] font-extrabold text-[12px] md:text-[13px] uppercase tracking-[1.5px]">
                    {data.content.tagline}
                  </span>
                </div>
                <h2 className="text-[36px] sm:text-[44px] md:text-[50px] lg:text-[60px] font-black leading-[1.1] md:leading-none tracking-tight">
                  <span className="text-[#082142]">{data.content.titleBlue}</span>
                  <span className="text-[#e62020]">{data.content.titleRed}</span>
                </h2>
              </div>
              
              <div className="text-left md:text-right mt-2 md:mt-0">
                <p className="text-[#0b121d] font-extrabold text-[13px] md:text-[14px] leading-[1.6] uppercase tracking-[0.5px]">
                  {data.content.rightText.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}<br className="hidden md:block" />
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>

            <FaqAccordion items={data.content.list} />

          </div>

        </div>
      </div>
    </section>
  );
}
