'use client'; // ไฟล์นี้ใช้ Client Side ได้เต็มที่

import React, { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { ProductGroup } from '@/data/collectionsData';

export default function ProductGroupSection({ group, themeColor }: { group: ProductGroup; themeColor: string }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  if (!group.variants || group.variants.length === 0) return null;

  const activeVariant = group.variants[activeIdx];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="product-card py-12 md:py-20 border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* รูปใหญ่ด้านซ้าย */}
        <div className="texture-preview-container bg-zinc-900 rounded-sm shadow-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[600px] relative group">
          <img 
            src={activeVariant.image} 
            alt={activeVariant.name}
            className="w-full h-full object-cover transition-all duration-500 ease-in-out transform scale-100 group-hover:scale-110"
          />
        </div>

        {/* ข้อมูลด้านขวา */}
        <div className="flex flex-col h-full py-4 lg:py-8">
          <div className="mb-12">
            <p className="text-[10px] tracking-[0.5em] uppercase mb-4 opacity-70" style={{ color: themeColor }}>
              {group.subtitle || "Signature Texture"}
            </p>
            <h2 className="text-3xl lg:text-4xl text-white font-medium uppercase tracking-[0.2em] mb-10">
              {group.title}
            </h2>

            <div className="product-details flex flex-col space-y-8">
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-3">ITEM Code</h4>
                <p className="text-base font-semibold tracking-wider" style={{ color: themeColor }}>
                    {group.code}
                </p>
              </div>

              <div>
                <h4 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-3">Dimensions</h4>
                <div className="text-xs text-white/60 leading-relaxed tracking-wider whitespace-pre-line">
                  {activeVariant.size}
                </div>
              </div>
              
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-3">Selected Shade</h4>
                <p className="text-white text-sm tracking-widest">{activeVariant.name}</p>
              </div>
            </div>
          </div>

          <div className="mt-auto">
            <h4 className="text-[9px] uppercase tracking-[0.5em] text-zinc-600 mb-6">Available Variants</h4>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => scroll('left')}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 text-white/50 hover:bg-white/10 hover:text-white transition-all"
              >
                <FaChevronLeft size={12} />
              </button>

              <div 
                ref={scrollRef}
                className="flex space-x-4 overflow-x-auto py-2 px-1 no-scrollbar w-full max-w-[400px]"
                style={{ scrollBehavior: 'smooth' }}
              >
                {group.variants.map((variant, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 border transition-all duration-300 ${
                      i === activeIdx 
                        ? 'opacity-100 scale-105' 
                        : 'border-transparent opacity-40 hover:opacity-100'
                    }`}
                    style={{ borderColor: i === activeIdx ? themeColor : 'transparent' }}
                  >
                    <img 
                      src={variant.image} 
                      className="w-full h-full object-cover" 
                      alt={variant.name} 
                    />
                  </button>
                ))}
              </div>

              <button 
                onClick={() => scroll('right')}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 text-white/50 hover:bg-white/10 hover:text-white transition-all"
              >
                <FaChevronRight size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}