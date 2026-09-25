'use client';

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from 'react';
import { StatisticsData } from '@/components/type';
import { ClipboardList, CheckCircle, Handshake, Search, ThumbsUp, Sparkles, Award } from 'lucide-react';

// Count-up hook
function useCountUp(target: number, duration = 2000, inView = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, inView]);
  return count;
}

// Animated Stat Item
function AnimatedStat({ stat, idx }: { stat: { icon: string; value: string; label: string }; idx: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  // Parse number and suffix (e.g. "260+" → 260, "+")
  const match = stat.value.match(/(\d+)(.*)/);
  const numericValue = match ? parseInt(match[1]) : 0;
  const suffix = match ? match[2] : '';
  const count = useCountUp(numericValue, 2000, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: idx * 0.1 }}
      className="flex items-center space-x-3 sm:space-x-4"
    >
      {/* Dark Red Icon Box */}
      <div className="shrink-0 w-[64px] h-[64px] sm:w-[74px] sm:h-[74px] bg-[#66162a]/70 border border-[#e62020] rounded-tl-3xl rounded-br-3xl rounded-tr-sm rounded-bl-sm flex items-center justify-center shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e62020]/20 to-transparent" />
        <div className="relative z-10 text-white">
          <StatIcon name={stat.icon} />
        </div>
      </div>
      {/* Number + Label */}
      <div>
        <div className="text-[28px] sm:text-[34px] font-extrabold text-white leading-none">
          {count}{suffix}
        </div>
        <div className="text-gray-400 text-[12px] sm:text-[13px] font-medium mt-0.5">{stat.label}</div>
      </div>
    </motion.div>
  );
}

// Inline SVG icons matching the screenshot's style
const StatIcon = ({ name }: { name: string }) => {
  if (name === 'FileText') return (
    <div className="relative w-8 h-8 sm:w-10 sm:h-10">
      <ClipboardList strokeWidth={1.5} className="w-full h-full text-white" />
      <CheckCircle strokeWidth={2} className="w-4 h-4 sm:w-5 sm:h-5 text-white absolute -bottom-1 -right-1 bg-[#66162a] rounded-full" />
    </div>
  );
  if (name === 'Wrench') return (
    <div className="relative w-8 h-8 sm:w-10 sm:h-10 mt-1">
      <Handshake strokeWidth={1.5} className="w-full h-full text-white" />
      <Search strokeWidth={2} className="w-4 h-4 sm:w-5 sm:h-5 text-white absolute -top-1 -right-1" />
    </div>
  );
  if (name === 'CheckCircle2') return (
    <div className="relative w-8 h-8 sm:w-9 sm:h-9 mt-1">
      <ThumbsUp strokeWidth={1.5} className="w-full h-full text-white" />
      <Sparkles strokeWidth={1.5} className="w-4 h-4 sm:w-5 sm:h-5 text-white absolute -top-3 -left-3" />
      <Sparkles strokeWidth={1.5} className="w-3 h-3 sm:w-4 sm:h-4 text-white absolute -top-1 -right-2" />
    </div>
  );
  if (name === 'Activity') return (
    <Award strokeWidth={1.5} className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
  );
  return null;
};

export default function StatisticsSection({ data }: { data: StatisticsData }) {
  return (
    <section className="relative bg-[#0b1629] overflow-hidden py-12 lg:py-16">

      {/* Full-bleed dark background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={data.bg_image}
          alt="Background"
          fill
          className="object-cover opacity-25"
        />
        {/* Dark blue left-heavy overlay to match screenshot */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1629]/95 via-[#0b1629]/80 to-[#0b1629]/50" />
      </div>

      <div className="relative z-10">

        {/* Top Section: Title Left + Raised Image Right */}
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center text-center pb-4">

            {/* Subtitle + Title */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-2xl"
            >
              {/* Subtitle */}
              <div className="flex items-center justify-center space-x-2 text-[#e62020] font-bold tracking-[0.2em] uppercase text-[11px] mb-3">
                <span className="text-[14px]">✳</span>
                <span>{data.subtitle}</span>
              </div>

              {/* Title */}
              <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] font-bold text-white leading-[1.2]">
                {data.title_line1} {data.title_line2}
              </h2>
            </motion.div>

          </div>
        </div>

        {/* Bottom Stats Row - full width, slightly darker strip */}
        <div className="border-t border-white/10 mt-4">
          <div className="container mx-auto px-4 md:px-8 pt-10 lg:pt-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 md:gap-12 max-w-7xl mx-auto px-2 md:px-0">
              {data.list.map((stat, idx) => (
                <AnimatedStat key={idx} stat={stat} idx={idx} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
