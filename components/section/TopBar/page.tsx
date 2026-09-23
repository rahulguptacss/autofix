"use client";

import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { TopBarData } from '@/components/type';

const getSocialIcon = (iconName: string, size: number) => {
  switch (iconName) {
    case 'FaFacebook': return <FaFacebook size={size} />;
    case 'FaTwitter': return <FaTwitter size={size} />;
    case 'FaInstagram': return <FaInstagram size={size} />;
    case 'FaLinkedin': return <FaLinkedin size={size} />;
    case 'FaYoutube': return <FaYoutube size={size} />;
    default: return <FaFacebook size={size} />;
  }
};

export default function TopBar({ data }: { data: TopBarData }) {
  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1a1f2c] text-gray-300 flex items-center justify-between text-[13px] font-medium h-10 border-b border-gray-800"
    >
      <div className="flex items-center space-x-6 pl-4 md:pl-10">
        <div className="flex items-center space-x-2">
          <MapPin size={16} className="text-[#e62020]" />
          <span className="hidden sm:inline">{data.address}</span>
          <span className="sm:hidden">{data.address.split(',')[0]}</span>
        </div>
        <span className="text-gray-600 hidden md:block">|</span>
        <div className="flex items-center space-x-2 hidden md:flex">
          <Phone size={16} className="text-[#e62020]" />
          <span>{data.phone}</span>
        </div>
        <span className="text-gray-600 hidden lg:block">|</span>
        <div className="flex items-center space-x-2 hidden lg:flex">
          <Mail size={16} className="text-[#e62020]" />
          <span>{data.email}</span>
        </div>
      </div>
      <div className="flex items-center h-full">
        <div className="flex items-center space-x-4 pr-6">
          <span className="text-white hidden sm:inline">{data.social_title} :</span>
          <div className="flex items-center space-x-3 text-white">
            {data.socials.map((social, idx) => (
              <a key={idx} href={social.href} className="hover:text-[#e62020] transition-colors">
                {getSocialIcon(social.icon, 16)}
              </a>
            ))}
          </div>
        </div>
        <div 
          className="bg-[#e62020] h-full flex items-center pl-10 pr-10 text-white font-medium hidden md:flex"
          style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
        >
          <Clock size={16} className="mr-2" />
          <span>{data.working_hours}</span>
        </div>
      </div>
    </motion.div>
  );
}
