'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Settings, 
  Car, 
  Wrench,
  Quote,
  Award,
  ShieldCheck,
  FileText
} from 'lucide-react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';

interface TeamDetailsProps {
  member?: {
    id: string;
    name: string;
    role: string;
    image: string;
  };
}

export default function TeamDetailsSection({ member }: TeamDetailsProps) {
  const name = member?.name || "Amit Kumar";
  const firstName = name.split(' ')[0];
  const role = member?.role || "Senior Mechanic";
  const image = member?.image || "/img/team/2.png";

  return (
    <section className="py-12 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Row 1: 3 Columns Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 lg:mb-20">
          
          {/* Column 1: Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 relative rounded-[10px] overflow-hidden group aspect-[3/4] lg:aspect-auto h-[400px] lg:h-[600px] bg-[#e8edf2]"
          >
            <Image 
              src={image} 
              alt={name}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
            {/* Experience Badge */}
            <div className="absolute bottom-5 left-5 bg-[#e62020] text-white p-4 rounded-[6px] shadow-lg z-10 max-w-[150px] group-hover:-translate-y-2 transition-transform duration-500">
              <div className="text-3xl font-extrabold leading-none mb-1">10+</div>
              <div className="text-[13px] font-medium leading-tight">Years of Experience</div>
            </div>
          </motion.div>

          {/* Column 2: Personal Details */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-4 flex flex-col justify-center"
          >
            <div className="flex items-center space-x-3 text-[#e62020] font-bold tracking-[0.15em] uppercase text-[12px] mb-3">
              <span className="w-8 h-[2px] bg-[#e62020]"></span>
              <span>{role.toUpperCase()}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b121d] mb-2">{name}</h2>
            <p className="text-[#697386] font-medium text-[16px] mb-6">{role}</p>
            
            <p className="text-[#697386] text-[15px] leading-relaxed mb-8">
              {name} is a highly skilled and dedicated professional with over 10 years of experience. Specializing in their respective field, {firstName} ensures every car receives the best care and service.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-4 group cursor-default">
                <div className="w-10 h-10 rounded-full bg-[#e62020] text-white flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#cc1b1b] transition-all duration-300 shadow-sm">
                  <Phone size={18} />
                </div>
                <span className="text-[#0b121d] font-bold text-[15px] group-hover:text-[#e62020] transition-colors duration-300">+1 0000000000</span>
              </li>
              <li className="flex items-center gap-4 group cursor-default">
                <div className="w-10 h-10 rounded-full bg-[#e62020] text-white flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#cc1b1b] transition-all duration-300 shadow-sm">
                  <Mail size={18} />
                </div>
                <span className="text-[#0b121d] font-bold text-[15px] group-hover:text-[#e62020] transition-colors duration-300">amit.kumar@autofix.in</span>
              </li>
              <li className="flex items-center gap-4 group cursor-default">
                <div className="w-10 h-10 rounded-full bg-[#e62020] text-white flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#cc1b1b] transition-all duration-300 shadow-sm">
                  <MapPin size={18} />
                </div>
                <span className="text-[#0b121d] font-bold text-[15px] group-hover:text-[#e62020] transition-colors duration-300">Delhi, India</span>
              </li>
              <li className="flex items-center gap-4 group cursor-default">
                <div className="w-10 h-10 rounded-full bg-[#e62020] text-white flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#cc1b1b] transition-all duration-300 shadow-sm">
                  <Clock size={18} />
                </div>
                <span className="text-[#0b121d] font-bold text-[15px] group-hover:text-[#e62020] transition-colors duration-300">Mon - Sat : 9:00 AM - 6:00 PM</span>
              </li>
            </ul>

            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-[#f8f9fa] border border-gray-200 text-[#0b121d] flex items-center justify-center hover:bg-[#e62020] hover:text-white hover:border-[#e62020] hover:-translate-y-1 transition-all duration-300 shadow-sm">
                <FaFacebookF size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#f8f9fa] border border-gray-200 text-[#0b121d] flex items-center justify-center hover:bg-[#e62020] hover:text-white hover:border-[#e62020] hover:-translate-y-1 transition-all duration-300 shadow-sm">
                <FaLinkedinIn size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#f8f9fa] border border-gray-200 text-[#0b121d] flex items-center justify-center hover:bg-[#e62020] hover:text-white hover:border-[#e62020] hover:-translate-y-1 transition-all duration-300 shadow-sm">
                <FaInstagram size={18} />
              </a>
            </div>
          </motion.div>

          {/* Column 3: Skills Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="bg-[#f8f9fa] rounded-[10px] p-5 lg:p-8">
              
              <div className="space-y-6 mb-8">
                <div className="flex gap-4 group cursor-default">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm text-[#e62020] flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform duration-300">
                    <Settings size={22} />
                  </div>
                  <div>
                    <h4 className="text-[17px] font-extrabold text-[#0b121d] mb-1 group-hover:text-[#e62020] transition-colors duration-300">Engine Diagnostics</h4>
                    <p className="text-[#697386] text-[14px]">Expert in identifying and solving complex issues</p>
                  </div>
                </div>
                <div className="flex gap-4 group cursor-default">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm text-[#e62020] flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform duration-300">
                    <Car size={22} />
                  </div>
                  <div>
                    <h4 className="text-[17px] font-extrabold text-[#0b121d] mb-1 group-hover:text-[#e62020] transition-colors duration-300">Vehicle Maintenance</h4>
                    <p className="text-[#697386] text-[14px]">Ensures smooth and safe performance</p>
                  </div>
                </div>
                <div className="flex gap-4 group cursor-default">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm text-[#e62020] flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform duration-300">
                    <Wrench size={22} />
                  </div>
                  <div>
                    <h4 className="text-[17px] font-extrabold text-[#0b121d] mb-1 group-hover:text-[#e62020] transition-colors duration-300">Customer Satisfaction</h4>
                    <p className="text-[#697386] text-[14px]">Committed to quality service and trust</p>
                  </div>
                </div>
              </div>

              <h4 className="text-xl font-extrabold text-[#0b121d] mb-6">Skills & Expertise</h4>
              
              <div className="space-y-5">
                {[
                  { name: 'Engine Repair', percent: 95 },
                  { name: 'Electrical Systems', percent: 90 },
                  { name: 'Brake Systems', percent: 88 },
                  { name: 'AC Repair', percent: 85 },
                  { name: 'Diagnostic Tools', percent: 92 },
                ].map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-[15px] font-bold text-[#0b121d]">{skill.name}</span>
                      <span className="text-[15px] font-bold text-[#0b121d]">{skill.percent}%</span>
                    </div>
                    <div className="w-full bg-[#e8edf2] h-[6px] rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="bg-[#e62020] h-full rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        </div>

        {/* Row 2: About & Image */}
        <div className="border border-gray-100 rounded-[10px] p-5 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-20 shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0b121d] mb-3">
              About <span className="text-[#e62020]">{name}</span>
            </h2>
            <div className="w-12 h-[3px] bg-[#e62020] mb-6"></div>
            
            <p className="text-[#697386] text-[16px] leading-relaxed mb-6">
              {firstName} has a deep passion for automobiles and takes pride in delivering high-quality service to every customer. His attention to detail and problem-solving skills make him a valuable part of the AutoFix team.
            </p>
            <p className="text-[#697386] text-[16px] leading-relaxed mb-8">
              He continuously upgrades his skills with the latest automotive technologies to provide accurate diagnostics and reliable repairs. {firstName} believes in honest service, clear communication, and building long-term relationships with customers.
            </p>

            <div className="bg-[#f8f9fa] p-5 lg:p-8 rounded-[10px] flex gap-4 lg:gap-5">
              <div className="text-[#e62020] text-[50px] md:text-[70px] font-serif font-extrabold leading-[0.5] mt-4 tracking-tighter">
                “
              </div>
              <div>
                <p className="text-[#697386] text-[17px] font-medium italic leading-relaxed mb-3">
                  &quot;My goal is to keep every vehicle in top condition and every customer on the road with confidence.&quot;
                </p>
                <p className="text-[#0b121d] font-extrabold text-[16px]">- {name}</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] lg:h-[500px] rounded-[10px] overflow-hidden group"
          >
            <Image 
              src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=800&auto=format&fit=crop" 
              alt={`${firstName} working on engine`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>

        {/* Row 3: Experience & Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-gray-100 rounded-[10px] p-5 md:p-8 lg:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.02)]"
          >
            <h3 className="text-2xl md:text-[28px] font-extrabold text-[#0b121d] mb-3">Experience</h3>
            <div className="w-10 h-[3px] bg-[#e62020] mb-8"></div>
            
            <div className="relative pl-8 border-l-[2px] border-gray-200 space-y-6">
              
              <div className="relative group cursor-default">
                <div className="absolute -left-[39px] top-1.5 w-3.5 h-3.5 bg-[#e62020] rounded-full shadow-[0_0_0_4px_white] group-hover:scale-150 transition-transform duration-300"></div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 mb-2">
                  <span className="text-[#0b121d] font-bold text-[15px] min-w-[110px] mt-0.5">2020 - Present</span>
                  <div>
                    <h4 className="text-[17px] font-extrabold text-[#0b121d]">Senior Mechanic</h4>
                    <p className="text-[#697386] font-medium text-[14px]">AutoFix, Delhi</p>
                    <p className="text-[#697386] text-[15px] leading-relaxed mt-1">Handling advanced diagnostics, engine repair, and team support.</p>
                  </div>
                </div>
              </div>
              
              <div className="relative group cursor-default">
                <div className="absolute -left-[39px] top-1.5 w-3.5 h-3.5 bg-[#e62020] rounded-full shadow-[0_0_0_4px_white] group-hover:scale-150 transition-transform duration-300"></div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 mb-2">
                  <span className="text-[#0b121d] font-bold text-[15px] min-w-[110px] mt-0.5">2016 - 2020</span>
                  <div>
                    <h4 className="text-[17px] font-extrabold text-[#0b121d]">Automotive Technician</h4>
                    <p className="text-[#697386] font-medium text-[14px]">Speed Auto Care, Noida</p>
                    <p className="text-[#697386] text-[15px] leading-relaxed mt-1">Worked on engine, brake, and electrical systems.</p>
                  </div>
                </div>
              </div>

              <div className="relative group cursor-default">
                <div className="absolute -left-[39px] top-1.5 w-3.5 h-3.5 bg-[#e62020] rounded-full shadow-[0_0_0_4px_white] group-hover:scale-150 transition-transform duration-300"></div>
                <div className="flex flex-col md:flex-row gap-2 md:gap-4 mb-2">
                  <span className="text-[#0b121d] font-bold text-[15px] min-w-[110px] mt-0.5">2013 - 2016</span>
                  <div>
                    <h4 className="text-[17px] font-extrabold text-[#0b121d]">Junior Mechanic</h4>
                    <p className="text-[#697386] font-medium text-[14px]">Car Service Hub, Delhi</p>
                    <p className="text-[#697386] text-[15px] leading-relaxed mt-1">Assisted in vehicle maintenance and repairs.</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-gray-100 rounded-[10px] p-5 md:p-8 lg:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.02)]"
          >
            <h3 className="text-2xl md:text-[28px] font-extrabold text-[#0b121d] mb-3">Certifications</h3>
            <div className="w-10 h-[3px] bg-[#e62020] mb-8"></div>
            
            <div className="space-y-6">
              
              <div className="flex gap-6 items-center group cursor-default">
                <div className="w-[64px] h-[64px] rounded-full bg-[#fce8e8] text-[#e62020] flex items-center justify-center shrink-0 border-[6px] border-[#fff5f5] group-hover:bg-[#e62020] group-hover:text-white group-hover:border-[#fce8e8] transition-all duration-500">
                  <Award size={26} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="text-[17px] font-extrabold text-[#0b121d] mb-1">Automotive Service Excellence (ASE)</h4>
                  <p className="text-[#697386] text-[15px]">Certified Professional</p>
                </div>
              </div>

              <div className="flex gap-6 items-center group cursor-default">
                <div className="w-[64px] h-[64px] rounded-full bg-[#fce8e8] text-[#e62020] flex items-center justify-center shrink-0 border-[6px] border-[#fff5f5] group-hover:bg-[#e62020] group-hover:text-white group-hover:border-[#fce8e8] transition-all duration-500">
                  <ShieldCheck size={26} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="text-[17px] font-extrabold text-[#0b121d] mb-1">Advanced Diagnostics Training</h4>
                  <p className="text-[#697386] text-[15px]">Bosch Automotive</p>
                </div>
              </div>

              <div className="flex gap-6 items-center group cursor-default">
                <div className="w-[64px] h-[64px] rounded-full bg-[#fce8e8] text-[#e62020] flex items-center justify-center shrink-0 border-[6px] border-[#fff5f5] group-hover:bg-[#e62020] group-hover:text-white group-hover:border-[#fce8e8] transition-all duration-500">
                  <FileText size={26} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="text-[17px] font-extrabold text-[#0b121d] mb-1">Engine Repair Specialist</h4>
                  <p className="text-[#697386] text-[15px]">Maruti Suzuki Service Training</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
