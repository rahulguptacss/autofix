'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, PlayCircle, Play, X } from 'lucide-react';
import { GalleryData } from '@/components/type';

export default function GallerySection({ data }: { data: GalleryData }) {
  const [activeTab, setActiveTab] = useState<'photo' | 'video'>('photo');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-10 pb-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-10">
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
            {data.title_line1} <span className="text-[#e62020]">{data.title_highlight}</span>
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

        {/* Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center items-center space-x-4 mb-8"
        >
          <button 
            onClick={() => setActiveTab('photo')}
            className={`${activeTab === 'photo' ? 'bg-[#e62020] text-white shadow-lg shadow-red-500/20' : 'bg-[#f1f5f9] text-[#0b121d] hover:bg-[#e2e8f0]'} px-5 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 whitespace-nowrap text-sm sm:text-base`}
          >
            <ImageIcon size={18} />
            {data.photoTabLabel}
          </button>
          <button 
            onClick={() => setActiveTab('video')}
            className={`${activeTab === 'video' ? 'bg-[#e62020] text-white shadow-lg shadow-red-500/20' : 'bg-[#f1f5f9] text-[#0b121d] hover:bg-[#e2e8f0]'} px-5 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 whitespace-nowrap text-sm sm:text-base`}
          >
            <PlayCircle size={18} />
            {data.videoTabLabel}
          </button>
        </motion.div>

        {/* Photo Gallery Section */}
        {activeTab === 'photo' && (
          <div id="photo-gallery" className="scroll-mt-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-3 mb-8"
          >
            <span className="w-8 h-[2px] bg-[#e62020]"></span>
            <h3 className="text-[28px] font-bold text-[#0b121d] tracking-tight">{data.photosTitle}</h3>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {data.photos.map((photo, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="group bg-white rounded-[16px] overflow-hidden shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                <div 
                  className="relative h-[240px] overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(photo.image)}
                >
                  <Image src={photo.image} alt={photo.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 p-3 rounded-full text-[#0b121d] shadow-lg">
                      <ImageIcon size={24} />
                    </div>
                  </div>
                </div>
                <div className="relative z-10 -mt-5 bg-[#f4f7fc] rounded-t-[20px] p-5">
                  <h4 className="font-bold text-[18px] text-[#051c41] group-hover:text-[#e62020] transition-colors">{photo.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        )}

        {/* Video Gallery Section */}
        {activeTab === 'video' && (
          <div id="video-gallery" className="scroll-mt-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-3 mb-8"
          >
            <span className="w-8 h-[2px] bg-[#e62020]"></span>
            <h3 className="text-[28px] font-bold text-[#0b121d] tracking-tight">{data.videosTitle}</h3>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {data.videos.map((video, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="group bg-white rounded-[16px] overflow-hidden shadow-sm hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
              >
                <div 
                  className="relative h-[220px] overflow-hidden cursor-pointer"
                  onClick={() => setSelectedVideo(video.videoUrl !== '#' ? video.videoUrl : 'https://assets.mixkit.co/videos/preview/mixkit-mechanic-working-on-a-car-engine-33423-large.mp4')}
                >
                  <Image src={video.image} alt={video.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-[60px] h-[60px] rounded-full border-2 border-white/80 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#e62020] group-hover:border-[#e62020]">
                      <Play fill="currentColor" className="ml-1" size={24} />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-[#0b121d]/80 backdrop-blur-sm text-white text-[12px] font-bold px-2.5 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-[17px] text-[#0b121d] group-hover:text-[#e62020] transition-colors mb-1.5">{video.title}</h4>
                  <p className="text-[14px] text-[#697386] line-clamp-2 leading-relaxed">{video.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        )}

      </div>

      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-[#e62020] transition-colors z-10"
            >
              <X size={36} />
            </button>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-5xl h-[85vh]"
            >
              <Image src={selectedImage} alt="Gallery view" fill className="object-contain" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedVideo && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute top-6 right-6 text-white hover:text-[#e62020] transition-colors z-10"
            >
              <X size={36} />
            </button>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl flex items-center justify-center"
            >
              {selectedVideo.includes('youtube.com') || selectedVideo.includes('youtu.be') ? (
                <iframe
                  src={selectedVideo}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <video 
                  src={selectedVideo} 
                  controls 
                  autoPlay 
                  className="w-full h-full object-contain"
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
