'use client';

import { MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram, FaCarSide } from 'react-icons/fa';
import Link from 'next/link';
import { FooterData } from '@/components/type';
import { motion } from 'framer-motion';
import Image from 'next/image';

const getSocialIcon = (iconName: string, size: number) => {
  switch (iconName) {
    case 'FaFacebook': return <FaFacebook size={size} />;
    case 'FaTwitter': return <FaTwitter size={size} />;
    case 'FaLinkedin': return <FaLinkedin size={size} />;
    case 'FaYoutube': return <FaYoutube size={size} />;
    case 'FaInstagram': return <FaInstagram size={size} />;
    default: return null;
  }
};

export default function Footer({ data }: { data: FooterData }) {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="relative bg-[#0b121d] text-gray-400 pt-12 pb-0 border-t-0 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/img/banner/footerbg.png" 
          alt="Footer Background" 
          fill 
          className="object-cover opacity-20 pointer-events-none" 
        />
        {/* Subtle gradient to fade image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b121d] via-[#0b121d]/50 to-transparent pointer-events-none" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 mb-6"
        >
          {/* Column 1: About */}
          <motion.div variants={fadeInUp} className="py-6 lg:py-0 lg:pr-8 border-b lg:border-b-0 lg:border-r border-gray-800/60 lg:col-span-3">
            <div className="mb-6 -ml-2">
              <Image src="/img/logo/white-logo.png" alt="AutoFix Logo" width={250} height={70} className="object-contain" />
            </div>
            <p className="text-[14px] md:text-[15px] mb-8 leading-relaxed text-gray-400 pr-2">
              {data.about.desc}
            </p>
            <div className="flex space-x-4">
              {data.about.socials.map((social, idx) => (
                <a key={idx} href={social.href} className="w-[42px] h-[42px] rounded-full border border-gray-600 bg-transparent flex items-center justify-center hover:bg-[#e62020] hover:border-[#e62020] hover:text-white transition-all duration-300 text-gray-400 group">
                  <div className="group-hover:scale-110 transition-transform">
                    {getSocialIcon(social.icon, 18)}
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div variants={fadeInUp} className="py-6 lg:py-0 lg:px-10 border-b lg:border-b-0 lg:border-r border-gray-800/60 lg:col-span-2">
            <h3 className="text-[19px] font-bold text-white mb-3">Quick Links</h3>
            <div className="w-6 h-[2px] bg-[#e62020] mb-5"></div>
            <ul className="space-y-3">
              {data.quick_links.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="hover:text-white transition-colors flex items-center text-[15px] text-gray-400 group">
                    <ChevronRight size={16} className="text-[#e62020] mr-3 group-hover:translate-x-1 transition-transform stroke-[4px]" /> 
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Our Services */}
          <motion.div variants={fadeInUp} className="py-6 lg:py-0 lg:px-8 border-b md:border-b-0 lg:border-r border-gray-800/60 lg:col-span-3">
            <h3 className="text-[19px] font-bold text-white mb-3">Our Services</h3>
            <div className="w-6 h-[2px] bg-[#e62020] mb-5"></div>
            <ul className="space-y-3">
              {data.services.map((service, idx) => (
                <li key={idx}>
                  <Link href={service.href} className="hover:text-white transition-colors flex items-center text-[15px] text-gray-400 group">
                    <ChevronRight size={16} className="text-[#e62020] mr-3 group-hover:translate-x-1 transition-transform stroke-[4px]" /> 
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact Information */}
          <motion.div variants={fadeInUp} className="py-6 lg:py-0 lg:pl-10 lg:col-span-4">
            <h3 className="text-[19px] font-bold text-white mb-3">Contact Information</h3>
            <div className="w-6 h-[2px] bg-[#e62020] mb-5"></div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full border-[1.5px] border-[#e62020] flex items-center justify-center text-[#e62020] mr-4 shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div className="text-[14px] leading-relaxed pt-0.5">
                  <span className="block text-gray-400">{data.contact.address_line1},</span>
                  <span className="block text-gray-400">{data.contact.address_line2}</span>
                </div>
              </li>
              <li className="flex items-center">
                <div className="w-10 h-10 rounded-full border-[1.5px] border-[#e62020] flex items-center justify-center text-[#e62020] mr-4 shrink-0">
                  <Phone size={18} />
                </div>
                <div className="text-[14px] text-gray-400">
                  {data.contact.phone}
                </div>
              </li>
              <li className="flex items-center">
                <div className="w-10 h-10 rounded-full border-[1.5px] border-[#e62020] flex items-center justify-center text-[#e62020] mr-4 shrink-0">
                  <Mail size={18} />
                </div>
                <div className="text-[14px] text-gray-400">
                  {data.contact.email}
                </div>
              </li>
            </ul>
            
            <div className="h-[1px] bg-gray-800/80 w-full my-4"></div>
            
            <div className="flex items-start">
              <div className="w-10 h-10 rounded-full border-[1.5px] border-[#e62020] flex items-center justify-center text-[#e62020] mr-4 shrink-0 mt-0.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2v10l5.5-5.5"/><path d="M12 12l-5.5-5.5"/></svg>
              </div>
              <div className="text-[13px]">
                <h4 className="font-bold text-white mb-1.5 text-[15px]">Working Hours</h4>
                {data.contact.working_hours.map((line, idx) => {
                  const parts = line.split(': ');
                  return (
                    <p key={idx} className="text-gray-400 mb-1">
                      {parts[0]}: {parts[1] === 'Closed' ? <span className="text-[#e62020]">{parts[1]}</span> : parts[1]}
                    </p>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/80 py-4 flex flex-col md:flex-row justify-between items-center text-[13px] text-gray-500">
          <p className="mb-4 md:mb-0 text-center md:text-left">
            {data.copyright.split('Lestow').map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <Link href="#" className="text-white hover:text-[#e62020] transition-colors font-semibold">
                    Lestow
                  </Link>
                )}
              </span>
            ))}
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:gap-x-6 md:gap-y-0">
            {data.bottom_links.map((link, idx) => (
              <Link key={idx} href={link.href} className="hover:text-white transition-colors text-center">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
