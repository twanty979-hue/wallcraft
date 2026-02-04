'use client';
import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLine, FaPhone } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 text-white">
      <div className="container mx-auto px-8 lg:px-24">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          
          {/* Column 1: Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-3xl font-bold tracking-widest text-[#B08038] uppercase mb-6 block">
              Wallcraft
            </Link>
            <p className="text-xs text-zinc-500 leading-relaxed font-light mb-6">
              Redefining architectural surfaces with a fusion of nature and innovation. 
              Crafting spaces that tell a story through texture and form.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-[#B08038] hover:text-white transition-all"><FaFacebookF size={12} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-[#B08038] hover:text-white transition-all"><FaInstagram size={12} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-[#B08038] hover:text-white transition-all"><FaLine size={12} /></a>
            </div>
          </div>

          {/* Column 2: Series */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-8">Series Collection</h4>
            <ul className="space-y-4 text-xs text-zinc-400 font-light tracking-wide">
              <li><Link href="/series/craft-stone" className="hover:text-[#B08038] transition-colors">Craft Stone Series</Link></li>
              <li><Link href="/series/luxe" className="hover:text-[#B08038] transition-colors">Luxe Series</Link></li>
              <li><Link href="/series/essential" className="hover:text-[#B08038] transition-colors">Essential Series</Link></li>
            </ul>
          </div>

          {/* Column 3: Technical Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-8">Technical Support</h4>
            <ul className="space-y-4 text-xs text-zinc-400 font-light tracking-wide">
              <li><Link href="/support/installation" className="hover:text-[#B08038] transition-colors">Installation Guide</Link></li>
              <li><Link href="/support/maintenance" className="hover:text-[#B08038] transition-colors">Care & Maintenance</Link></li>
              <li><Link href="/support/warranty" className="hover:text-[#B08038] transition-colors">Warranty & Policy</Link></li>
              <li><Link href="/studio-qa" className="hover:text-[#B08038] transition-colors">Studio Q&A</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-8">Contact Us</h4>
            <ul className="space-y-4 text-xs text-zinc-400 font-light tracking-wide">
              <li className="flex items-start gap-3">
                <span className="opacity-50 mt-1">📍</span>
                <span>123 Design District,<br />Bangkok, Thailand 10110</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone size={10} className="opacity-50" />
                <span>+66 2 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="opacity-50">@</span>
                <span>contact@wallcraft.th</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-zinc-600 uppercase tracking-wider">
            &copy; {new Date().getFullYear()} Wallcraft Thailand. All rights reserved.
          </p>
          <div className="flex gap-6 text-[10px] text-zinc-600 uppercase tracking-wider">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}