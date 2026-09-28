'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  User, Phone, Mail, MapPin, 
  Car, LayoutGrid, Calendar, FileText,
  Wrench, Clock, Edit3, Send, Lock,
  ShieldCheck, Tag, Settings, ThumbsUp, Headphones, PhoneCall, MailOpen
} from 'lucide-react';
import { BookServiceData, FormField } from '@/components/type';

const getIcon = (iconName: string, size: number = 20, className: string = '', strokeWidth?: number) => {
  const props: Record<string, any> = { size, className };
  if (strokeWidth !== undefined) {
    props.strokeWidth = strokeWidth;
  }
  switch (iconName) {
    case 'ShieldCheck': return <ShieldCheck {...props} />;
    case 'Tag': return <Tag {...props} />;
    case 'Settings': return <Settings {...props} />;
    case 'ThumbsUp': return <ThumbsUp {...props} />;
    case 'Clock': return <Clock {...props} />;
    case 'Headphones': return <Headphones {...props} />;
    case 'User': return <User {...props} />;
    case 'Phone': return <Phone {...props} />;
    case 'Mail': return <Mail {...props} />;
    case 'MapPin': return <MapPin {...props} />;
    case 'Car': return <Car {...props} />;
    case 'LayoutGrid': return <LayoutGrid {...props} />;
    case 'Calendar': return <Calendar {...props} />;
    case 'FileText': return <FileText {...props} />;
    case 'Edit3': return <Edit3 {...props} />;
    default: return <Wrench {...props} />;
  }
};

const CustomSelect = ({ field }: { field: FormField }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState('');
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <input type="hidden" name={field.name} value={selected} />
      <div 
        className={`w-full pl-11 pr-10 py-3 bg-white border ${isOpen ? 'border-[#e62020] ring-1 ring-[#e62020]' : 'border-[#edf1f5]'} rounded-[8px] text-[15px] ${selected ? 'text-[#0b121d]' : 'text-[#697386]'} cursor-pointer transition-colors flex items-center justify-between`}
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
      >
        <span className="truncate">{selected || field.placeholder || 'Select Option'}</span>
        <svg className={`w-4 h-4 text-[#0b121d] transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </div>
      
      {isOpen && (
        <div className="absolute z-20 w-full mt-2 bg-white border border-[#edf1f5] rounded-[8px] shadow-xl max-h-60 overflow-y-auto py-2">
          {field.options?.map((opt, i) => (
            <div 
              key={i} 
              className={`px-4 py-2.5 text-[15px] cursor-pointer transition-colors flex items-center justify-between ${selected === opt.label ? 'bg-[#e62020]/5 text-[#e62020] font-bold' : 'text-[#556070] hover:bg-[#fafbfc] hover:text-[#0b121d]'}`}
              onClick={() => {
                setSelected(opt.label);
                setIsOpen(false);
              }}
            >
              <span>{opt.label}</span>
              {selected === opt.label && <svg className="w-4 h-4 text-[#e62020]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const renderField = (field: FormField) => {
  return (
    <div key={field.name} className={`relative ${field.fullWidth ? 'col-span-full mb-8' : ''}`}>
      <label className="block text-[14px] font-bold text-[#0b121d] mb-2">
        {field.label} {field.required && <span className="text-[#e62020]">*</span>}
        {field.optionalText && <span className="text-[#697386] font-normal pl-1">{field.optionalText}</span>}
      </label>
      <div className="relative">
        <div className={`absolute ${field.type === 'textarea' ? 'top-4' : 'inset-y-0'} left-0 pl-4 flex items-center pointer-events-none`}>
          {getIcon(field.icon, 18, "text-[#0b121d]")}
        </div>
        
        {field.type === 'select' ? (
          <CustomSelect field={field} />
        ) : field.type === 'textarea' ? (
          <textarea rows={4} placeholder={field.placeholder} className="w-full pl-11 pr-4 py-3 bg-white border border-[#edf1f5] rounded-[8px] text-[15px] focus:outline-none focus:border-[#e62020] focus:ring-1 focus:ring-[#e62020] transition-colors resize-none"></textarea>
        ) : (
          <input 
            type={(() => {
              const name = (field.name || '').toLowerCase();
              const label = (field.label || '').toLowerCase();
              if (field.type === 'tel' || name.includes('phone') || label.includes('phone')) return 'number';
              if (field.type === 'date' || name.includes('date') || label.includes('date')) return 'date';
              if (field.type === 'time' || name.includes('time') || label.includes('time')) return 'time';
              return field.type || 'text';
            })()} 
            placeholder={field.placeholder} 
            onInput={(e) => { 
              const name = (field.name || '').toLowerCase();
              const label = (field.label || '').toLowerCase();
              if (field.type === 'tel' || field.type === 'number' || name.includes('phone') || label.includes('phone')) {
                e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, ''); 
              }
            }} 
            className="w-full pl-11 pr-4 py-3 bg-white border border-[#edf1f5] rounded-[8px] text-[15px] focus:outline-none focus:border-[#e62020] focus:ring-1 focus:ring-[#e62020] transition-colors [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
          />
        )}
      </div>
    </div>
  );
};

export default function BookServiceSection({ data }: { data: BookServiceData }) {
  return (
    <section className="py-16 bg-[#fafbfc]">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-12">
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
            {data.title_line1} <span className="text-[#e62020]">{data.title_highlight}</span> {data.title_line2}
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

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Form Section */}
          <div className="w-full lg:w-[60%]">
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-8 bg-white px-5 sm:px-6 md:px-7 py-6 sm:py-8 md:py-10 rounded-[16px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#f1f5f9]"
              onSubmit={(e) => e.preventDefault()}
            >
              
              {/* Step 1 */}
              <div>
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-10 h-10 rounded-full bg-[#e62020] text-white flex items-center justify-center font-bold text-lg shadow-sm shrink-0">
                    {data.form.step1.number}
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-[#0b121d]">{data.form.step1.title}</h3>
                    <p className="text-[#697386] text-[14px]">{data.form.step1.desc}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {data.form.step1.fields.map(renderField)}
                </div>
              </div>

              {/* Step 2 */}
              <div className="pt-8 border-t border-[#edf1f5]">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-10 h-10 rounded-full bg-[#e62020] text-white flex items-center justify-center font-bold text-lg shadow-sm shrink-0">
                    {data.form.step2.number}
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-[#0b121d]">{data.form.step2.title}</h3>
                    <p className="text-[#697386] text-[14px]">{data.form.step2.desc}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {data.form.step2.fields.map(renderField)}
                </div>
              </div>

              {/* Step 3 */}
              <div className="pt-8 border-t border-[#edf1f5]">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-10 h-10 rounded-full bg-[#e62020] text-white flex items-center justify-center font-bold text-lg shadow-sm shrink-0">
                    {data.form.step3.number}
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-[#0b121d]">{data.form.step3.title}</h3>
                    <p className="text-[#697386] text-[14px]">{data.form.step3.desc}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 mb-6">
                  {data.form.step3.fields.filter(f => !f.fullWidth).map(renderField)}
                </div>

                {data.form.step3.fields.filter(f => f.fullWidth).map(renderField)}

                <div>
                  <button type="submit" className="w-full bg-[#e62020] hover:bg-[#d01b1b] text-white py-4 rounded-[8px] font-bold text-[16px] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(230,32,32,0.3)]">
                    <Send size={18} className="mr-2 -mt-0.5" /> {data.form.submitText} <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </button>
                  <div className="mt-4 flex items-center justify-center text-[#697386] text-[13px]">
                    <Lock size={14} className="mr-1.5" />
                    {data.form.securityText}
                  </div>
                </div>

              </div>

            </motion.form>
          </div>

          {/* Right Sidebar Section */}
          <div className="w-full lg:w-[40%]">
            
            {/* Image Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative w-full h-[420px] rounded-[16px] overflow-hidden mb-8 shadow-md"
            >
              <Image src={data.sidebar.imageCard.image} alt="Service" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/10"></div>
              
              {/* Red Diagonal Overlay */}
              <div 
                className="absolute bottom-0 right-0 w-full h-[80%] bg-gradient-to-br from-[#cc1a1a] to-[#a00b0b]"
                style={{ clipPath: 'polygon(100% 30%, 100% 100%, 15% 100%)' }}
              ></div>
              
              <div className="absolute bottom-8 right-8 text-right flex flex-col items-end justify-end z-10">
                <div className="mb-3">
                  <div className="flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-12 h-12 drop-shadow-md">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                    </svg>
                  </div>
                </div>
                <div className="text-white font-bold text-[16px] sm:text-[18px] leading-snug drop-shadow-md">
                  {data.sidebar.imageCard.text2.split('\n').map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-[#f1f7fd] rounded-[16px] p-8 mb-8"
            >
              <h3 className="text-[22px] font-extrabold text-[#051c41] mb-6 tracking-tight">{data.sidebar.features.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-7">
                {data.sidebar.features.list.map((feature, i) => (
                  <div key={i} className="flex items-start space-x-3 group cursor-pointer">
                    <div className="text-[#051c41] flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 group-hover:scale-110 group-hover:text-[#e62020]">
                      {getIcon(feature.icon, 30, "", 2.5)}
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-[#051c41] mb-1 leading-snug">{feature.title}</h4>
                      <p className="text-[13px] text-[#556987] leading-snug">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="relative w-full rounded-[16px] overflow-hidden shadow-lg bg-[#071630]"
            >
              <Image src="/img/about/bookbottom.png" alt="Contact" fill className="object-cover opacity-50 mix-blend-luminosity" />
              <div className="absolute inset-0 bg-[#071630]/80"></div>
              
              <div className="relative px-8 py-10 lg:px-10 lg:py-12 min-h-[280px] flex flex-col justify-center">
                <div className="flex items-center mb-8 group cursor-pointer">
                  <div className="w-[60px] h-[60px] rounded-full bg-[#e62020] text-white flex items-center justify-center shrink-0 mr-5 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <PhoneCall size={28} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-[18px] leading-tight mb-1">{data.sidebar.contactBox.phoneTitle}</p>
                    <p className="text-white/80 text-[14px] mb-1">{data.sidebar.contactBox.phoneSub}</p>
                    <p className="text-white text-[24px] lg:text-[28px] font-extrabold tracking-tight">{data.sidebar.contactBox.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center group cursor-pointer">
                  <div className="w-[60px] h-[60px] rounded-full bg-[#e62020] text-white flex items-center justify-center shrink-0 mr-5 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                    <Mail size={28} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-[18px] leading-tight mb-1.5">{data.sidebar.contactBox.emailTitle}</p>
                    <p className="text-white font-semibold text-[16px] lg:text-[18px]">{data.sidebar.contactBox.email}</p>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
