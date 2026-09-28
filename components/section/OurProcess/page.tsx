'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import Link from 'next/link';
import { ProcessData } from '@/components/type';

const getIcon = (name: string, size = 22) => {
  const Icon = (LucideIcons as any)[name];
  return Icon ? <Icon size={size} strokeWidth={2.2} /> : null;
};

export default function OurProcessSection({ data }: { data: ProcessData }) {
  return (
    <section className="relative overflow-hidden bg-[#f8f9fa] py-12 lg:py-16">
      {/* Put /our-process-section-bg.png in /public */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-bottom bg-no-repeat"
        style={{
          backgroundImage: `url('${data.bg_image}')`,
          backgroundSize: 'cover',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-[760px] text-center"
        >
          <div className="mb-1.5 flex items-center justify-center gap-3 text-[12px] font-extrabold uppercase tracking-[0.08em] text-[#e62020]">
            <span className="h-[2px] w-12 bg-[#e62020]" />
            <span>{data.subtitle}</span>
            <span className="h-[2px] w-12 bg-[#e62020]" />
          </div>

          <h2 className="m-0 text-[31px] font-extrabold leading-[1.08] tracking-[-1.3px] text-[#101b29] sm:text-[38px] lg:text-[43px]">
            {data.title_line1}{' '}
            <span className="text-[#e62020]">{data.title_highlight}</span>
          </h2>

          <p className="mx-auto mt-2 max-w-[680px] text-[14px] leading-[1.35] text-[#697386]">
            {data.description}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-7 lg:mt-8">
          {/* Road */}
          <svg
            className="pointer-events-none absolute left-[-3%] top-[64px] z-0 hidden h-[185px] w-[106%] lg:block"
            viewBox="0 0 1200 200"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              d="M0 100 C120 195 185 10 300 100 S450 190 550 100 S700 10 800 100 S950 190 1050 100 S1150 20 1200 80"
              fill="none"
              stroke="#111b28"
              strokeWidth="48"
              strokeLinecap="round"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              d="M0 100 C120 195 185 10 300 100 S450 190 550 100 S700 10 800 100 S950 190 1050 100 S1150 20 1200 80"
              fill="none"
              stroke="#273241"
              strokeWidth="42"
              strokeLinecap="round"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.5, delay: 0.2, ease: 'easeInOut' }}
              d="M0 100 C120 195 185 10 300 100 S450 190 550 100 S700 10 800 100 S950 190 1050 100 S1150 20 1200 80"
              fill="none"
              stroke="#fff"
              strokeWidth="3"
              strokeDasharray="14 15"
              strokeLinecap="round"
            />
          </svg>



          <div className="relative z-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
            {data.steps.map((step, index) => {
              const isEven = index % 2 === 0; // step 1, 3, 5 are even index

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  className={`relative pt-[85px] drop-shadow-[0_10px_25px_rgba(15,23,42,0.12)] ${!isEven ? 'lg:mt-[75px]' : ''}`}
                >
                  {/* Card (z-10, background) */}
                  <div className="relative z-10 flex min-h-[220px] flex-col items-center rounded-[32px] bg-white px-5 pb-8 pt-[125px] text-center">
                    <h3 className="text-[18px] font-black leading-[1.2] text-[#101b29]">
                      {step.title_line1}
                      {step.title_line2 && <><br />{step.title_line2}</>}
                    </h3>
                    <div className="mx-auto my-4 h-[3px] w-10 rounded-full bg-[#e62020]" />
                    <p className="mx-auto max-w-[210px] text-[13.5px] leading-[1.5] text-[#687386]">
                      {step.desc}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="absolute left-1/2 top-0 z-20 h-[170px] w-[170px] -translate-x-1/2 overflow-hidden rounded-full border-[8px] border-white bg-white">
                    <Image
                      src={step.image}
                      alt={step.title_line1}
                      fill
                      sizes="170px"
                      className="object-cover"
                    />
                  </div>

                  {/* Number */}
                  <div
                    className={`absolute left-[calc(50%-60px)] top-[25px] z-30 flex h-[54px] w-[54px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-[22px] font-black ${isEven
                      ? 'bg-[#e62020] text-white'
                      : 'bg-[#101b29] text-white'
                      }`}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className={`absolute left-1/2 top-[140px] z-30 flex h-[60px] w-[60px] -translate-x-1/2 items-center justify-center rounded-full border-[5px] border-white ${isEven
                      ? 'bg-[#e62020] text-white'
                      : 'bg-[#101b29] text-white'
                      }`}
                  >
                    {getIcon(step.icon, 26)}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA + features */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mt-8 lg:mt-9"
        >
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-8">
            <div className="relative w-full max-w-[545px]">
              <span className="absolute -left-4 top-1/2 z-0 hidden h-[66px] w-8 -translate-y-1/2 -skew-x-[24deg] rounded-md bg-[#e62020] lg:block" />
              <span className="absolute -right-4 top-1/2 z-0 hidden h-[66px] w-8 -translate-y-1/2 -skew-x-[24deg] rounded-md bg-[#e62020] lg:block" />

              <div className="relative z-10 flex min-h-[64px] items-center rounded-[9px] bg-[#0e1825] px-4 py-3 shadow-[0_8px_22px_rgba(0,0,0,.12)] sm:px-7">
                <div className="flex min-w-0 flex-1 items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e62020] text-white">
                    <LucideIcons.PhoneCall size={20} fill="currentColor" />
                  </div>
                  <div>
                    <p className="m-0 text-[10px] font-medium uppercase text-[#9ca5b1]">{data.call_to_action.call_text || "Call Us Now"}</p>
                    <p className="m-0 text-[16px] font-extrabold tracking-wide text-white sm:text-[17px]">
                      {data.call_to_action.phone}
                    </p>
                  </div>
                </div>

                <div className="mx-4 hidden h-9 w-px bg-[#66707d] sm:block" />

                <Link href="/contact" className="shrink-0">
                  <button className="flex w-full items-center gap-2 rounded-[6px] bg-[#e62020] px-5 py-3 text-[13px] font-extrabold text-white transition hover:bg-red-700">
                    <span>{data.call_to_action.button_text}</span>
                    <LucideIcons.ArrowRight size={18} strokeWidth={2.5} />
                  </button>
                </Link>
              </div>
            </div>

            <div className="grid w-full grid-cols-2 gap-5 sm:grid-cols-4 lg:flex-1 lg:justify-between lg:gap-4">
              {data.bottom_features.map((feature, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="mb-1.5 text-[#101b29]">
                    {getIcon(feature.icon, 25)}
                  </div>
                  <span className="h-[2px] w-5 bg-[#e62020]" />
                  <p className="mt-1.5 text-[9px] font-extrabold uppercase leading-[1.15] tracking-[.04em] text-[#273241] sm:text-[10px]">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
