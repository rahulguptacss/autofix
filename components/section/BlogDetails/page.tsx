'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Phone, ArrowRight, Quote } from 'lucide-react';
import { BlogItem, BlogDetailsData } from '@/components/type';

export default function BlogDetailsSection({ 
  blog, 
  recentPosts,
  sidebar
}: { 
  blog: BlogItem;
  recentPosts: BlogItem[];
  sidebar?: BlogDetailsData['sidebar'];
}) {
  return (
    <section className="py-16 bg-[#f4f7fc]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row gap-8">
          
          {/* Sidebar */}
          <div className="w-full lg:w-[350px] flex-shrink-0 flex flex-col gap-8">
            
            {/* Recent Posts */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-6 h-[2px] bg-[#e62020]"></span>
                <h3 className="text-[22px] font-extrabold text-[#0b121d]">{sidebar?.recentPostsTitle || "Recent Posts"}</h3>
              </div>
              
              <div className="bg-white rounded-[10px] shadow-[0_5px_30px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col">
                {recentPosts.slice(0, 5).map((post, index) => {
                  const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                  return (
                  <Link 
                    href={`/blog-details/${slugify(post.title)}`} 
                    key={post.id} 
                    className={`flex gap-[18px] group p-6 ${index !== Math.min(recentPosts.length, 5) - 1 ? 'border-b border-gray-100' : ''}`}
                  >
                    <div className="w-[100px] h-[75px] flex-shrink-0 rounded-[6px] overflow-hidden relative">
                      <Image 
                        src={post.img} 
                        alt={post.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="font-extrabold text-[#0b121d] text-[15px] leading-[1.3] group-hover:text-[#e62020] transition-colors line-clamp-3">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2 text-[#697386] text-[13px] mt-2.5 font-medium">
                        <Calendar size={14} className="text-[#e62020] stroke-[2.5]" />
                        <span>{post.dateFull}</span>
                      </div>
                    </div>
                  </Link>
                  );
                })}
              </div>
            </div>

            {/* Assistance Box */}
            {sidebar?.assistanceBox && (
              <div className="relative bg-[#0b121d] rounded-xl p-8 overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `url('${sidebar.assistanceBox.bgImage}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-[#e62020] rounded-full flex items-center justify-center mb-6">
                    <Phone size={24} className="text-white fill-white" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-3">{sidebar.assistanceBox.title}</h3>
                  <p className="text-gray-300 text-sm mb-8 leading-relaxed">
                    {sidebar.assistanceBox.desc}
                  </p>
                  
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-[#e62020] rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone size={18} className="text-white fill-white" />
                    </div>
                    <div>
                      <div className="text-gray-300 text-[13px]">{sidebar.assistanceBox.callText}</div>
                      <div className="text-white font-extrabold text-xl">{sidebar.assistanceBox.phone}</div>
                    </div>
                  </div>

                  <Link href={sidebar.assistanceBox.buttonLink} className="bg-[#e62020] hover:bg-white hover:text-[#e62020] text-white px-6 py-3 rounded-full font-bold transition-colors flex items-center justify-center gap-2 w-max">
                    {sidebar.assistanceBox.buttonText} <ArrowRight size={18} strokeWidth={2.5} />
                  </Link>
                </div>
              </div>
            )}

          </div>

          {/* Main Content */}
          <div className="w-full lg:w-[calc(100%-382px)]">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
              
              {/* Main Image */}
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px]">
                <Image 
                  src={blog.img} 
                  alt={blog.title} 
                  fill 
                  className="object-cover"
                />
                <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-[#e62020] text-white w-[70px] h-[70px] rounded-lg flex flex-col items-center justify-center border-2 border-white text-center px-1">
                  <span className="text-2xl font-black leading-none">{blog.date}</span>
                  <span className="text-[10px] font-bold uppercase mt-1 leading-tight">{blog.month}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 md:p-8">

                <h1 className="text-[26px] sm:text-[32px] md:text-[38px] font-extrabold text-[#0b121d] leading-[1.2] tracking-tight mb-5">
                  {blog.title}
                </h1>

                {blog.intro && (
                  <p className="text-[#697386] text-[15px] leading-[1.7] mb-8">
                    {blog.intro}
                  </p>
                )}
                
                <div className="w-full h-px bg-gray-100 mt-8 mb-4"></div>

                {blog.contentSections?.map((section, idx) => (
                  <React.Fragment key={idx}>
                    <div className="mb-8">
                      {section.title && (
                        <h3 className="text-[22px] font-extrabold text-[#0b121d] mb-4">
                          {section.title}
                        </h3>
                      )}
                      
                      <div className={`flex flex-col md:flex-row gap-6 md:gap-10 items-center ${section.imagePosition === 'left' ? 'md:flex-row-reverse' : ''}`}>
                        <p className="text-[#697386] text-[15px] leading-[1.8] flex-1">
                          {section.paragraph}
                        </p>
                        
                        {section.image && (
                          <div className="w-full md:w-[310px] h-[220px] md:h-[175px] flex-shrink-0 relative rounded-[8px] overflow-hidden">
                            <Image 
                              src={section.image} 
                              alt={section.title || 'Blog detail image'} 
                              fill 
                              className="object-cover"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {idx === 0 && blog.quote && (
                      <div className="bg-[#fcebeb] rounded-[10px] p-6 md:p-8 my-10 flex gap-4 md:gap-6 items-start">
                        <Quote size={40} className="text-[#e62020] flex-shrink-0 fill-[#e62020] -mt-2" />
                        <div className="w-full">
                          <p className="text-[17px] md:text-[19px] text-[#0b121d] italic leading-[1.6] mb-5 font-serif font-medium">
                            "{blog.quote.text}"
                          </p>
                          <div className="flex items-center gap-3 justify-end">
                            <span className="w-8 h-[2px] bg-[#e62020]"></span>
                            <span className="font-extrabold text-[#0b121d] text-[15px]">{blog.quote.author}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
                
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
