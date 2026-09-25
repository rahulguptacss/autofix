"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { FaCar } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { HeaderData, NavLink } from '@/components/type';

export default function Header({ data }: { data: HeaderData }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
        <Link href="/" className="relative z-10 flex items-center pl-4 md:pl-8 h-full">
          {/* Mobile Logo */}
          <Image src="/img/logo/logo.png" alt="AutoFix Logo" width={150} height={42} className="object-contain xl:hidden" />
          {/* Desktop Logo */}
          <Image src="/img/logo/white-logo.png" alt="AutoFix Logo" width={180} height={50} className="object-contain hidden xl:block" />
        </Link>
      </div>

      {/* Navigation Links (Desktop) */}
      <div className="hidden xl:flex items-center space-x-8 font-semibold text-[15px]">
        {data.links.map((link) => (
          <DesktopNavItem key={link.name} link={link} pathname={pathname || ''} />
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
                <MobileNavItem key={link.name} link={link} pathname={pathname || ''} setIsMobileMenuOpen={setIsMobileMenuOpen} />
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

function DesktopNavItem({ link, pathname }: { link: NavLink, pathname: string }) {
  const [isHovered, setIsHovered] = useState(false);
  const isActive = pathname === link.href;

  return (
    <div 
      className="relative flex items-center h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={link.href}
        className={`flex items-center relative py-2 transition-colors ${
          isActive || isHovered ? 'text-[#e62020]' : 'text-[#1a1f2c]'
        }`}
      >
        {link.name}
        {link.hasDropdown && (
          <motion.div
            animate={{ rotate: isHovered ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={16} className="ml-1" />
          </motion.div>
        )}
        
        {/* Active underline */}
        {isActive && (
          <motion.span 
            layoutId="activeTab"
            className="absolute -bottom-2 left-0 w-6 h-0.5 bg-[#e62020]"
          ></motion.span>
        )}

        {/* Hover underline */}
        {!isActive && (
          <motion.span 
            initial={{ width: 0 }}
            animate={{ width: isHovered ? 24 : 0 }}
            className="absolute -bottom-2 left-0 h-0.5 bg-[#e62020]"
          ></motion.span>
        )}
      </Link>

      {/* Dropdown Menu */}
      {link.hasDropdown && link.dropdownLinks && (
        <AnimatePresence>
          {isHovered && (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-[100%] left-0 mt-6 w-48 bg-white shadow-[0_10px_25px_rgba(0,0,0,0.1)] border-t-[3px] border-[#e62020] z-50"
            >
              <div className="py-2">
                {link.dropdownLinks.map((ddLink) => (
                  <Link 
                    key={ddLink.name} 
                    href={ddLink.href}
                    className="block px-5 py-2.5 text-[14px] text-[#1a1f2c] hover:text-[#e62020] hover:bg-gray-50 transition-colors"
                  >
                    {ddLink.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

function MobileNavItem({ link, pathname, setIsMobileMenuOpen }: { link: NavLink, pathname: string, setIsMobileMenuOpen: (val: boolean) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const isActive = pathname === link.href;

  const handleToggle = (e: React.MouseEvent) => {
    if (link.hasDropdown) {
      e.preventDefault();
      setIsOpen(!isOpen);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div key={link.name}>
      <Link
        href={link.href}
        onClick={handleToggle}
        className={`flex items-center justify-between font-semibold text-[15px] pb-2 border-b border-gray-50 ${
          isActive ? 'text-[#e62020]' : 'text-[#1a1f2c]'
        }`}
      >
        {link.name}
        {link.hasDropdown && (
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
            <ChevronDown size={16} />
          </motion.div>
        )}
      </Link>
      <AnimatePresence>
        {link.hasDropdown && link.dropdownLinks && isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pl-4 mt-2 flex flex-col space-y-2 mb-2">
              {link.dropdownLinks.map(ddLink => (
                <Link 
                  key={ddLink.name} 
                  href={ddLink.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[14px] text-gray-600 pb-2 border-b border-gray-50 last:border-0"
                >
                  {ddLink.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
