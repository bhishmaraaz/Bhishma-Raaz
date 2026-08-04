"use client";

import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-800 text-white font-extrabold flex items-center justify-center text-lg shadow">
            B
          </div>
          <div>
            <h1 className="font-extrabold text-blue-900 text-base sm:text-lg leading-tight">
              Bhishma's <span className="text-blue-700">Learning Hub</span>
            </h1>
            <p className="text-[10px] text-slate-500 font-semibold tracking-wider">
              ENLIGHT FOR ALL
            </p>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-slate-700">
          <Link href="/" className="hover:text-blue-700 transition">
            गृहपृष्ठ (Home)
          </Link>
          <Link href="#resources" className="hover:text-blue-700 transition">
            ICT सामग्री
          </Link>
          <Link href="#geogebra" className="hover:text-blue-700 transition">
            GeoGebra
          </Link>
          <Link href="#notice" className="hover:text-blue-700 transition">
            सूचनाहरू
          </Link>
          <Link href="#contact" className="hover:text-blue-700 transition">
            सम्पर्क
          </Link>
        </nav>

        {/* Contact Button */}
        <a
          href="https://wa.me/9779800000000"
          target="_blank"
          rel="noreferrer"
          className="bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold px-4 py-2 rounded-md shadow transition"
        >
          WhatsApp
        </a>

      </div>
    </header>
  );
}