"use client";

import React, { useState } from "react";

export default function Navbar() {
  const [activeNav, setActiveNav] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 font-sans shadow-md">
      {/* 1. Top Bar */}
      <div className="bg-[#0b5e54] text-white text-xs py-1.5 px-4 sm:px-8 flex justify-between items-center border-b border-[#0d7367]">
        <div className="flex gap-4 font-medium">
          <a href="#about" className="hover:underline">About</a>
          <a href="#terms" className="hover:underline">Terms & Conditions</a>
        </div>
        <div className="flex items-center gap-2">
          {/* Social Icons using SVG (No external library required) */}
          <a href="#" className="w-5 h-5 rounded-full bg-[#1877f2] flex items-center justify-center hover:opacity-90">
            <svg className="w-3 h-3 fill-current text-white" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="#" className="w-5 h-5 rounded-full bg-[#ff0000] flex items-center justify-center hover:opacity-90">
            <svg className="w-3 h-3 fill-current text-white" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
        </div>
      </div>

      {/* 2. Middle Header (Logo, Language & Search) */}
      <div className="bg-white py-3 px-4 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">नेपा</span>
            <span className="bg-blue-800 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">EN</span>
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
              Bhishma's <span className="text-[#0e8376]">Learning Hub</span>
            </h1>
            <p className="text-[11px] text-slate-500 font-medium">
              Enlight For All
            </p>
          </div>
        </div>

        {/* Search Input */}
        <div className="flex items-center w-full md:w-auto">
          <input
            type="text"
            placeholder="Search Keywords"
            className="bg-slate-100 text-slate-700 px-3 py-1.5 text-sm rounded-l border border-slate-300 focus:outline-none w-full md:w-64"
          />
          <button className="bg-[#0e8376] text-white p-2.5 rounded-r hover:bg-[#0b5e54] transition">
            <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          </button>
        </div>
      </div>

      {/* 3. Navigation Bar (With Blue Active Highlight) */}
      <nav className="bg-[#0e8376] text-white">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center text-sm font-semibold">
            <a
              href="#home"
              onClick={() => setActiveNav("home")}
              className={`px-5 py-3.5 transition duration-150 ${
                activeNav === "home" ? "bg-[#1d61d1] font-bold" : "hover:bg-[#0b5e54]"
              }`}
            >
              गृहपृष्ठ
            </a>

            <a
              href="#curriculum"
              onClick={() => setActiveNav("curriculum")}
              className={`px-5 py-3.5 transition duration-150 ${
                activeNav === "curriculum" ? "bg-[#1d61d1] font-bold" : "hover:bg-[#0b5e54]"
              }`}
            >
              पाठ्यक्रम
            </a>

            <a
              href="#questions"
              onClick={() => setActiveNav("questions")}
              className={`px-5 py-3.5 transition duration-150 ${
                activeNav === "questions" ? "bg-[#1d61d1] font-bold" : "hover:bg-[#0b5e54]"
              }`}
            >
              प्रश्नपत्र संकलन
            </a>

            <a
              href="#resources"
              onClick={() => setActiveNav("resources")}
              className={`px-5 py-3.5 transition duration-150 ${
                activeNav === "resources" ? "bg-[#1d61d1] font-bold" : "hover:bg-[#0b5e54]"
              }`}
            >
              ICT सामग्रीहरू
            </a>

            <a
              href="#publications"
              onClick={() => setActiveNav("publications")}
              className={`px-5 py-3.5 transition duration-150 ${
                activeNav === "publications" ? "bg-[#1d61d1] font-bold" : "hover:bg-[#0b5e54]"
              }`}
            >
              प्रकाशनहरू
            </a>

            <a
              href="#contact"
              onClick={() => setActiveNav("contact")}
              className={`px-5 py-3.5 transition duration-150 ${
                activeNav === "contact" ? "bg-[#1d61d1] font-bold" : "hover:bg-[#0b5e54]"
              }`}
            >
              सम्पर्क
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center py-2">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-1 text-white">
              <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0b5e54] border-t border-[#0d7367] flex flex-col text-sm font-semibold">
            <a href="#home" className="px-4 py-2.5 bg-[#1d61d1]">गृहपृष्ठ</a>
            <a href="#curriculum" className="px-4 py-2.5 hover:bg-[#0e8376]">पाठ्यक्रम</a>
            <a href="#questions" className="px-4 py-2.5 hover:bg-[#0e8376]">प्रश्नपत्र संकलन</a>
            <a href="#resources" className="px-4 py-2.5 hover:bg-[#0e8376]">ICT सामग्रीहरू</a>
            <a href="#publications" className="px-4 py-2.5 hover:bg-[#0e8376]">प्रकाशनहरू</a>
            <a href="#contact" className="px-4 py-2.5 hover:bg-[#0e8376]">सम्पर्क</a>
          </div>
        )}
      </nav>
    </header>
  );
}