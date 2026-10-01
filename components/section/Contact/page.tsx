'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  MapPin, Phone, Mail, Globe, User, MessageSquare, PenLine, 
  ArrowRight, Zap, Users, ShieldCheck, Clock, HeadphonesIcon
} from 'lucide-react';import { ContactData, FormField } from '@/components/type';

export default function ContactSection({ data }: { data: ContactData }) {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <>
      {/* Contact Info Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">
            
            {/* Left Info */}
            <motion.div 
              className="w-full lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-[#e62020]"></span>
                <span className="text-[#0b121d] font-extrabold text-[12px] md:text-[13px] uppercase tracking-[1.5px]">CONTACT INFORMATION</span>
              </motion.div>
              
              <motion.h2 variants={fadeInUp} className="text-[32px] sm:text-[40px] md:text-[50px] font-black leading-[1.1] mb-3 tracking-tight">
                <span className="text-[#082142]">Let&apos;s </span>
                <span className="text-[#e62020]">Talk</span>
              </motion.h2>
              
              <motion.p variants={fadeInUp} className="text-[#556070] text-[15px] md:text-[16px] leading-[1.7] mb-8 md:mb-10 lg:pr-10 font-medium">
                Have a question, need a repair, or want to know more about our services? 
                Get in touch with us using the details below or fill out the contact form. 
                We&apos;ll get back to you as soon as possible.
              </motion.p>
              
                <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                {/* Location */}
                <motion.div variants={fadeInUp} className="border border-gray-200/80 rounded-[10px] px-4 py-4 flex items-center gap-4 bg-white hover:border-[#e62020]/30 transition-colors hover:shadow-md cursor-pointer group">
                  <div className="w-[60px] h-[60px] md:w-[64px] md:h-[64px] bg-[#e62020] rounded-full flex items-center justify-center flex-shrink-0 border-[6px] border-[#e62020]/15 group-hover:scale-110 transition-transform duration-300">
                    <MapPin size={22} className="text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#082142] text-[15px] mb-1">Our Location</h4>
                    <p className="text-[#556070] text-[13px] md:text-[14px] font-medium leading-[1.5]">
                      {data.contact_info.address.split(',').map((line, i) => (
                        <React.Fragment key={i}>
                          {line.trim()}{i < data.contact_info.address.split(',').length - 1 && ','}
                          {i === 0 && <br/>}
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </motion.div>
                
                {/* Call Us */}
                <motion.div variants={fadeInUp} className="border border-gray-200/80 rounded-[10px] px-4 py-4 flex items-center gap-4 bg-white hover:border-[#e62020]/30 transition-colors hover:shadow-md cursor-pointer group">
                  <div className="w-[60px] h-[60px] md:w-[64px] md:h-[64px] bg-[#e62020] rounded-full flex items-center justify-center flex-shrink-0 border-[6px] border-[#e62020]/15 group-hover:scale-110 transition-transform duration-300">
                    <Phone size={22} className="text-white fill-white" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#082142] text-[15px] mb-1">Call Us</h4>
                    <p className="text-[#556070] text-[13px] md:text-[14px] font-medium leading-[1.5]">
                      {data.contact_info.phone}
                    </p>
                  </div>
                </motion.div>
                
                {/* Email Us */}
                <motion.div variants={fadeInUp} className="border border-gray-200/80 rounded-[10px] px-4 py-4 flex items-center gap-4 bg-white hover:border-[#e62020]/30 transition-colors hover:shadow-md cursor-pointer group">
                  <div className="w-[60px] h-[60px] md:w-[64px] md:h-[64px] bg-[#e62020] rounded-full flex items-center justify-center flex-shrink-0 border-[6px] border-[#e62020]/15 group-hover:scale-110 transition-transform duration-300">
                    <Mail size={22} className="text-white fill-white" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#082142] text-[15px] mb-1">Email Us</h4>
                    <p className="text-[#556070] text-[13px] md:text-[14px] font-medium leading-[1.5]">
                      {data.contact_info.email}
                    </p>
                  </div>
                </motion.div>
                
                {/* Website */}
                <motion.div variants={fadeInUp} className="border border-gray-200/80 rounded-[10px] px-4 py-4 flex items-center gap-4 bg-white hover:border-[#e62020]/30 transition-colors hover:shadow-md cursor-pointer group">
                  <div className="w-[60px] h-[60px] md:w-[64px] md:h-[64px] bg-[#e62020] rounded-full flex items-center justify-center flex-shrink-0 border-[6px] border-[#e62020]/15 group-hover:scale-110 transition-transform duration-300">
                    <Globe size={22} className="text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-[#082142] text-[15px] mb-1">Working Hours</h4>
                    <p className="text-[#556070] text-[13px] md:text-[14px] font-medium leading-[1.5]">
                      {data.contact_info.working_hours}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Map */}
            <motion.div 
              className="w-full lg:w-1/2 h-[280px] sm:h-[350px] md:h-[450px] rounded-[10px] overflow-hidden border border-gray-100 shadow-lg relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.183948633718!2d-73.98773192346914!3d40.75797863479427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1714400000000!5m2!1sen!2sus" 
                className="w-full h-full border-0" 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-16 md:pb-24 bg-white relative">
        <div className="container mx-auto px-4 max-w-7xl">
          <motion.div 
            className="flex flex-col lg:flex-row rounded-[10px] overflow-hidden shadow-[0_15px_60px_rgba(0,0,0,0.06)] bg-white border border-gray-100/50"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            
            {/* Left Form */}
            <div className="w-full lg:w-[65%] bg-[#f4f8fb] p-6 sm:p-8 md:p-12 relative overflow-hidden">
              <div className="relative z-10">
                <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-[2px] bg-[#e62020]"></span>
                  <span className="text-[#0b121d] font-extrabold text-[12px] md:text-[13px] uppercase tracking-[1.5px]">{data.form.subtitle}</span>
                </motion.div>
                
                <motion.h2 variants={fadeInUp} className="text-[28px] sm:text-[36px] md:text-[44px] font-black leading-[1.1] mb-3 tracking-[-1px]">
                  <span className="text-[#082142]">{data.form.title_line1}</span>
                  <span className="text-[#e62020]">{data.form.title_highlight}</span>
                </motion.h2>
                
                <motion.p variants={fadeInUp} className="text-[#556070] text-[14px] md:text-[15px] mb-8 font-medium">
                  {data.form.description}
                </motion.p>

                <motion.form variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  {data.form.fields.map((field: FormField, idx: number) => {
                    const IconComponent = field.icon === 'User' ? User : field.icon === 'Mail' ? Mail : field.icon === 'Phone' ? Phone : field.icon === 'MessageSquare' ? MessageSquare : field.icon === 'PenLine' ? PenLine : User;
                    return (
                      <motion.div key={idx} variants={fadeInUp} className={`relative group ${field.type === 'textarea' ? 'col-span-1 md:col-span-2' : ''}`}>
                        {field.type === 'textarea' ? (
                          <textarea placeholder={field.placeholder} rows={4} className="w-full bg-white text-[#556070] text-[14px] md:text-[15px] font-medium rounded-[8px] py-3.5 md:py-4 pl-12 pr-4 outline-none border border-gray-200 focus:border-[#e62020] focus:shadow-sm transition-all resize-none"></textarea>
                        ) : (
                          <input type={field.type === 'number' ? 'number' : field.type} placeholder={field.placeholder} onInput={field.type === 'number' ? (e) => { e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, ''); } : undefined} className={`w-full bg-white text-[#556070] text-[14px] md:text-[15px] font-medium rounded-[8px] py-3.5 md:py-4 pl-12 pr-4 outline-none border border-gray-200 focus:border-[#e62020] focus:shadow-sm transition-all ${field.type === 'number' ? '[&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' : ''}`} />
                        )}
                        <IconComponent className={`absolute left-4 ${field.type === 'textarea' ? 'top-4 md:top-5' : 'top-1/2 -translate-y-1/2'} text-[#082142] opacity-60 group-focus-within:opacity-100 group-focus-within:text-[#e62020] transition-colors`} size={18} />
                      </motion.div>
                    );
                  })}

                  <motion.div variants={fadeInUp} className="col-span-1 md:col-span-2 mt-2 md:mt-4">
                    <button type="submit" className="bg-[#e62020] hover:bg-[#082142] text-white py-1.5 md:py-2 pl-6 md:pl-8 pr-1.5 md:pr-2 rounded-full font-bold transition-all duration-300 flex items-center justify-between gap-4 md:gap-6 w-max group shadow-lg hover:shadow-xl hover:-translate-y-1">
                      <span className="text-[15px] md:text-[16px] tracking-wide">{data.form.submitText}</span>
                      <div className="w-[38px] h-[38px] md:w-[46px] md:h-[46px] rounded-full bg-[#082142] flex items-center justify-center flex-shrink-0 group-hover:bg-[#e62020] transition-colors">
                        <ArrowRight size={18} strokeWidth={2.5} className="text-white group-hover:translate-x-1 transition-transform" />
                      </div>
                    </button>
                  </motion.div>
                </motion.form>
              </div>
            </div>

            {/* Right Side: Why Contact Us */}
            <div className="w-full lg:w-[35%] bg-[#082142] p-6 sm:p-8 md:p-12 relative overflow-hidden">
              <HeadphonesIcon size={250} className="absolute -top-10 -right-10 text-white/[0.03]" strokeWidth={1} />
              
              <div className="relative z-10">
                <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-[2px] bg-[#e62020]"></span>
                  <span className="text-white font-extrabold text-[12px] md:text-[13px] uppercase tracking-[1.5px]">WHY CONTACT US?</span>
                </motion.div>
                
                <motion.h2 variants={fadeInUp} className="text-[28px] sm:text-[32px] md:text-[36px] font-black text-white leading-[1.1] mb-8 md:mb-10 tracking-[-1px]">
                  We&apos;re Always <br/> Here <span className="text-[#e62020]">for You</span>
                </motion.h2>
                
                <motion.div variants={staggerContainer} className="flex flex-col gap-5 md:gap-6">
                  {/* Item 1 */}
                  <motion.div variants={fadeInUp} className="flex gap-4 items-start group">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#e62020] transition-colors duration-300">
                      <Zap size={20} className="text-[#e62020] fill-[#e62020] group-hover:text-white group-hover:fill-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-[15px] md:text-[16px] mb-1">Quick Response</h4>
                      <p className="text-white/70 text-[13px] md:text-[14px] font-medium leading-[1.5]">We respond as soon as possible</p>
                    </div>
                  </motion.div>
                  {/* Item 2 */}
                  <motion.div variants={fadeInUp} className="flex gap-4 items-start group">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#e62020] transition-colors duration-300">
                      <Users size={20} className="text-[#e62020] fill-[#e62020] group-hover:text-white group-hover:fill-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-[15px] md:text-[16px] mb-1">Expert Support</h4>
                      <p className="text-white/70 text-[13px] md:text-[14px] font-medium leading-[1.5]">Get advice from our experts</p>
                    </div>
                  </motion.div>
                  {/* Item 3 */}
                  <motion.div variants={fadeInUp} className="flex gap-4 items-start group">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#e62020] transition-colors duration-300">
                      <ShieldCheck size={20} className="text-[#e62020] group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-[15px] md:text-[16px] mb-1">Reliable Service</h4>
                      <p className="text-white/70 text-[13px] md:text-[14px] font-medium leading-[1.5]">Your satisfaction is our priority</p>
                    </div>
                  </motion.div>
                  {/* Item 4 */}
                  <motion.div variants={fadeInUp} className="flex gap-4 items-start group">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#e62020] transition-colors duration-300">
                      <Clock size={20} className="text-[#e62020] fill-[#e62020] group-hover:text-white group-hover:fill-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-[15px] md:text-[16px] mb-1">Flexible Timing</h4>
                      <p className="text-white/70 text-[13px] md:text-[14px] font-medium leading-[1.5]">We&apos;re available at your convenience</p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Divider Line */}
                <motion.div variants={fadeInUp} className="w-full h-[1px] bg-white/20 mt-8 mb-6 md:mt-10 md:mb-8"></motion.div>

                {/* Bottom Emergency Contact */}
                <motion.div variants={fadeInUp} className="flex items-center gap-4 md:gap-5 group cursor-pointer">
                  <div className="w-[46px] h-[46px] md:w-[52px] md:h-[52px] bg-[#e62020] rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(230,32,32,0.4)]">
                    <Phone size={22} className="text-white fill-white" />
                  </div>
                  <div>
                    <div className="text-white text-[12px] md:text-[13.5px] font-medium opacity-90 mb-0.5 md:mb-1">Need Immediate Help?</div>
                    <div className="text-white text-[20px] md:text-[24px] font-black leading-none tracking-tight">{data.contact_info.phone}</div>
                  </div>
                </motion.div>
              </div>
            </div>
            
          </motion.div>
        </div>
      </section>
    </>
  );
}
