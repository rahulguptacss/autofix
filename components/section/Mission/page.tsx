"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MissionData, MissionFeature } from "@/components/type";
import { ShieldCheck, Users, Award, Target, CheckCircle, Star } from "lucide-react";

const QualityAwardIcon = ({ size, className }: { size: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Ribbons */}
    <path d="M7 18.5l-1.5 4.5 2.5-1.5 2.5 1.5 1-4" />
    <path d="M17 18.5l1.5 4.5-2.5-1.5-2.5 1.5-1-4" />
    {/* Rosette */}
    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" fill="#ffeceb" />
    {/* Star */}
    <path d="M12 7.5l1.2 2.5 2.8.4-2 2 .5 2.8-2.5-1.3-2.5 1.3.5-2.8-2-2 2.8-.4z" fill="currentColor" stroke="none" />
  </svg>
);

export default function MissionSection({ data }: { data: MissionData }) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck size={32} className="text-[#e62020]" />;
      case "Users":
        return <Users size={32} className="text-[#e62020]" />;
      case "Award":
        return <Award size={32} className="text-[#e62020]" />;
      case "Star":
        return <QualityAwardIcon size={34} className="text-[#e62020]" />;
      default:
        return <CheckCircle size={32} className="text-[#e62020]" />;
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-2">
              <div className="flex items-center">
                <span className="w-10 h-[2.5px] bg-[#e62020]"></span>
                <span className="w-2 h-2 border-t-[2.5px] border-r-[2.5px] border-[#e62020] transform rotate-45 -ml-1"></span>
              </div>
              <h4 className="text-[#e62020] font-bold text-[15px] uppercase tracking-wider">
                {data.subtitle}
              </h4>
            </div>

            <h2 className="text-[40px] md:text-[50px] font-black text-[#1a1f2c] leading-[1.1] mb-4 tracking-tight">
              <span className="text-[#e62020]">{data.title_highlight}</span>{" "}
              {data.title_line1.split(' ').slice(0, 3).join(' ')} <br className="hidden md:block" />
              {data.title_line1.split(' ').slice(3).join(' ')}
            </h2>

            <p className="text-gray-600 text-[15px] md:text-base mb-6 leading-relaxed">
              {data.description}
            </p>

            <div className="flex flex-col gap-6 sm:flex-row sm:gap-6 mt-2">
              {data.features.map((feature: MissionFeature, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex flex-row sm:flex-col items-center sm:items-start text-left flex-1 space-x-4 sm:space-x-0"
                >
                  <div className="w-[60px] h-[60px] sm:w-[75px] sm:h-[75px] flex items-center justify-center mb-0 sm:mb-5 relative shrink-0">
                    {/* Speech bubble blob background */}
                    <div className="absolute inset-0 bg-[#ffeceb] rounded-full"></div>
                    <div className="absolute bottom-1 right-2 w-4 h-4 sm:w-5 sm:h-5 bg-[#ffeceb] rounded-sm transform rotate-45"></div>
                    {/* The icon itself */}
                    <div className="relative z-10 scale-[0.8] sm:scale-100">
                      {getIcon(feature.icon)}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a1f2c] text-[16px] sm:text-[17px] mb-0.5 sm:mb-1 leading-tight">
                      {feature.title}
                    </h4>
                    <p className="text-[14px] sm:text-[15px] text-gray-500 font-medium">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Red Background Offset (Pill shape on the right edge) */}
            <div className="absolute top-[20%] -right-4 md:-right-6 w-12 h-[60%] bg-[#e62020] rounded-r-3xl -z-10"></div>
            
            {/* Main Image */}
            <div className="relative rounded-[20px] overflow-hidden h-[350px] md:h-[400px]">
              <Image
                src={data.image}
                alt="Mission"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.5 }}
              className="absolute -bottom-8 right-0 md:right-8 overflow-hidden rounded-r-[12px] shadow-xl"
            >
              <div className="bg-[#e62020] transform skew-x-[-12deg] -ml-6 pl-12 pr-8 py-5 flex items-center space-x-4">
                <div className="transform skew-x-[12deg] flex items-center space-x-4">
                  <Target size={42} className="text-white" strokeWidth={1.5} />
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-lg leading-tight">
                      {data.badge_text1}
                    </span>
                    <span className="text-white text-base font-medium leading-tight">
                      {data.badge_text2}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
