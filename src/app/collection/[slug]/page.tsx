// src/app/collection/[slug]/page.tsx

import React from 'react';
import { notFound } from 'next/navigation';
// Import Component ที่เราเพิ่งแยกออกไปเมื่อกี้
import ProductGroupSection from '../../../components/ProductGroupSection';
import { COLLECTIONS } from '../../../data/collectionsData'; // ตรวจสอบ path ให้ตรง

// กำหนด Type ของ Props ให้ถูกต้องสำหรับ Next.js 15
interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CollectionDynamicPage({ params }: PageProps) {
  // 1. ใช้ await เพื่อดึงค่าจาก params (นี่คือหัวใจสำคัญของ Next.js 15)
  const { slug } = await params;
  
  // 2. ดึงข้อมูล
  const data = COLLECTIONS[slug];

  // 3. ถ้าหาไม่เจอ ให้ไปหน้า 404
  if (!data) {
    return notFound();
  }

  return (
    <div className="bg-black min-h-screen text-white">
      
      {/* HERO SECTION */}
      <header className="relative min-h-[60vh] md:min-h-[75vh] flex items-center overflow-hidden pt-20">
        
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black z-10 pointer-events-none"></div>
             <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover opacity-60" />
        </div>
        
        <div className="container mx-auto px-8 lg:px-24 z-20 relative">
          <div className="max-w-2xl animate-[fadeInUp_1s_ease-out_forwards]">
            <div className="flex gap-1 h-1.5 w-28 mb-10">
              <div className="bg-[#6A6C5F] w-1/3"></div>
              <div className="bg-[#7B2715] w-1/3"></div>
              <div className="bg-[#B08038] w-1/3"></div>
            </div>
            
            <h1 className="text-5xl lg:text-8xl font-bold tracking-tight mb-6">
              <span style={{ color: data.themeColor }}>{data.title}</span><br />
              <span className="text-white text-3xl md:text-5xl font-light tracking-wide">{data.subtitle}</span>
            </h1>
            <p className="text-zinc-400 text-sm lg:text-base tracking-widest font-light uppercase max-w-lg leading-relaxed">
              {data.description}
            </p>
          </div>
        </div>
      </header>

      {/* MAIN PRODUCT AREA */}
      <main className="max-w-[1400px] mx-auto px-8 lg:px-24 pb-32 space-y-12">
        
        {/* เช็คว่ามีข้อมูลสินค้าไหม */}
        {data.productGroups && data.productGroups.length > 0 ? (
            data.productGroups.map((group, index) => (
                <ProductGroupSection key={index} group={group} themeColor={data.themeColor} />
            ))
        ) : (
            // กรณีไม่มีข้อมูลสินค้า (Coming Soon)
            <div className="py-20 text-center border-t border-white/5">
                <p className="text-zinc-500 tracking-widest uppercase">Products Coming Soon</p>
            </div>
        )}

      </main>
    </div>
  );
}