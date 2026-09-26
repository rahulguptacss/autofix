'use client';

import React, { useState } from 'react';
import { FaqItem } from '@/components/type';
import { Plus, Minus, ChevronDown } from 'lucide-react';

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openId, setOpenId] = useState<number | null>(1); // Default first item open

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => {
        const isOpen = openId === item.id;
        
        return (
          <div 
            key={item.id} 
            className="rounded-[10px] overflow-hidden bg-[#f4f7fc] transition-all duration-300"
          >
            <button
              onClick={() => toggleAccordion(item.id)}
              className="w-full flex items-center justify-between py-3 px-5 md:py-4 md:px-6 text-left transition-colors duration-300"
            >
              <div className="flex items-center gap-4">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-[#e62020] transition-colors duration-300"
                >
                  {isOpen ? (
                    <Minus size={20} className="text-white" />
                  ) : (
                    <Plus size={20} className="text-white" />
                  )}
                </div>
                <h4 className="font-extrabold text-[#082142] text-[16px] md:text-[18px]">
                  {item.question}
                </h4>
              </div>
              <ChevronDown 
                size={20} 
                className={`text-[#082142] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
              />
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-5 md:p-6 pt-0 text-[#697386] text-[15px] leading-[1.8] pl-[76px]">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
