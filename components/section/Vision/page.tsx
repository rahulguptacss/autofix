"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { VisionData, VisionFeature } from "@/components/type";
import { TrendingUp, Shield, Leaf, CheckCircle } from "lucide-react";

export default function VisionSection({ data }: { data: VisionData }) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "TrendingUp":
        return <TrendingUp size={28} strokeWidth={3} className="text-[#e62020]" />;
      case "Shield":
        return <Shield size={26} fill="#e62020" className="text-white stroke-[#e62020]" />;
      case "Leaf":
        return <Leaf size={26} fill="#e62020" className="text-white stroke-[#e62020]" />;
      default:
        return <CheckCircle size={26} fill="#e62020" className="text-white stroke-[#e62020]" />;
    }
  };

  return (
    <section className="bg-gray-50 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative lg:w-[calc(100%+30vw+2rem)] lg:-ml-[30vw]"
          >
            {/* SVG Clip Path for the curve */}
            <svg width="0" height="0" className="absolute">
              <defs>
                <clipPath id="vision-curve" clipPathUnits="objectBoundingBox">
                  <path d="M 0,0 L 0.9,0 Q 1,0.5 0.9,1 L 0,1 Z" />
                </clipPath>
              </defs>
            </svg>

            {/* The image is curved on the right side */}
            <div 
              className="relative overflow-hidden h-[350px] md:h-[500px] rounded-[20px] lg:rounded-none lg:[clip-path:url(#vision-curve)] lg:[-webkit-clip-path:url(#vision-curve)]"
            >
              <Image
                src={data.image}
                alt="Vision"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>

          </motion.div>

          {/* Right Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
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

            <div className="flex flex-col gap-6 sm:flex-row sm:gap-4 mt-4">
              {data.features.map((feature: VisionFeature, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex flex-row items-center space-x-3 flex-1"
                >
                  <div className="min-w-[60px] h-[60px] flex items-center justify-center relative shrink-0">
                    {/* Speech bubble blob background */}
                    <div className="absolute inset-0 bg-[#ffeceb] rounded-full"></div>
                    <div className="absolute bottom-0 right-1 w-4 h-4 bg-[#ffeceb] rounded-sm transform rotate-45"></div>
                    {/* The icon itself */}
                    <div className="relative z-10">
                      {getIcon(feature.icon)}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-bold text-[#1a1f2c] text-[15px] mb-0.5 leading-tight">
                      {feature.title}
                    </h4>
                    <p className="text-[13px] text-gray-500 font-medium leading-tight">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
