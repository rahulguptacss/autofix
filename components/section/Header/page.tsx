"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { FaCar } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { HeaderData } from '@/components/type';

export default function Header({ data }: { data: HeaderData }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-white flex justify-between items-stretch h-[80px] shadow-sm sticky top-0 z-50"
    >
      
      {/* Logo Area */}
      <div className="relative h-full flex w-[200px] sm:w-[250px] md:w-[280px] lg:w-[300px]">
        {/* Desktop Red Background (Stripe layer) */}
        <div 
          className="hidden xl:block absolute inset-0 bg-[#e62020]"
          style={{ clipPath: 'polygon(0 0, 100% 0, calc(100% - 40px) 100%, 0% 100%)' }}
        ></div>
        
        {/* Desktop Dark Background */}
        <div 
          className="hidden xl:block absolute inset-0 bg-[#1a1f2c]"
          style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, calc(100% - 60px) 100%, 0% 100%)' }}
        ></div>

        {/* Content */}
        <div className="relative z-10 flex items-center pl-4 md:pl-8 h-full">
          {/* Mobile Logo */}
          <Image src="/img/logo/logo.png" alt="AutoFix Logo" width={150} height={42} className="object-contain xl:hidden" />
          {/* Desktop Logo */}
          <Image src="/img/logo/white-logo.png" alt="AutoFix Logo" width={180} height={50} className="object-contain hidden xl:block" />
        </div>
      </div>

      {/* Navigation Links (Desktop) */}
      <div className="hidden xl:flex items-center space-x-8 font-semibold text-[15px]">
        {data.links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`group flex items-center relative py-2 transition-colors ${
              link.active ? 'text-[#e62020]' : 'text-[#1a1f2c] hover:text-[#e62020]'
            }`}
          >
            {link.name}
            {link.hasDropdown && (
              <ChevronDown size={16} className="ml-1" />
            )}
            
            {/* Active underline */}
            {link.active && (
              <motion.span 
                layoutId="activeTab"
                className="absolute bottom-0 left-0 w-6 h-0.5 bg-[#e62020]"
              ></motion.span>
            )}

            {/* Hover underline */}
            {!link.active && (
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e62020] transition-all duration-300 ease-out group-hover:w-6"></span>
            )}
          </Link>
        ))}
      </div>

      {/* Right Action Area */}
      <div className="flex items-center pr-4 md:pr-8 space-x-4">
        {/* Action Button */}
        <div className="flex items-center">
          <Link 
            href="#" 
            className="bg-[#e62020] hover:bg-red-700 flex items-center justify-center py-2 px-3 md:py-[14px] md:px-5 text-white font-semibold transition-colors skew-x-[-22deg] shadow-md"
          >
            <div className="skew-x-[22deg] flex items-center">
              <FaCar size={18} className="mr-2 md:mr-3 md:text-[24px]" />
              <span className="text-[13px] md:text-[16px] whitespace-nowrap">{data.button_text}</span>
            </div>
          </Link>
        </div>
        
        {/* Mobile menu toggle button */}
        <div className="flex xl:hidden items-center z-50">
           <button 
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             className="text-[#e62020] hover:text-red-700 transition-colors"
           >
             {isMobileMenuOpen ? <X size={32} strokeWidth={2.5} /> : <Menu size={32} strokeWidth={2.5} />}
           </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-[80px] left-0 right-0 bg-white shadow-lg border-t border-gray-100 overflow-hidden xl:hidden"
          >
            <div className="flex flex-col py-4 px-6 space-y-4">
              {data.links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between font-semibold text-[15px] pb-2 border-b border-gray-50 ${
                    link.active ? 'text-[#e62020]' : 'text-[#1a1f2c]'
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown size={16} />}
                </Link>
              ))}
              <Link 
                href="#" 
                className="bg-[#e62020] flex items-center justify-center py-3 px-5 text-white font-semibold rounded-md mt-4 shadow-sm"
              >
                <FaCar size={20} className="mr-2" />
                <span>{data.button_text}</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
}
