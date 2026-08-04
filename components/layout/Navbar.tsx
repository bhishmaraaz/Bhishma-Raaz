"use client";

import React, { useState, useEffect } from "react";
import { Facebook, Youtube, Twitter, Search, Menu, X } from "lucide-react";

export default function Navbar() {
  const [activeNav, setActiveNav] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 font-sans shadow-md">
      {/* 1. Top Bar (Dark Teal Header) */}
      <div className="bg-[#0b5e54] text-white text-xs py-1.5 px-4 sm:px-8 flex justify-between items-center border-b border-[#0d7367]">
        <div className="flex gap-4 font-medium">
          <a href="#about" className="hover:underline">About</a>
          <a href="#terms" className="hover:underline">Terms & Conditions</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center hover:opacity-90">
            <Facebook className="w-3 h-3 text-white" />
          </a>
          <a href="#" className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center hover:opacity-90">
            <Youtube className="w-3 h-3 text-white" />
          </a>
          <a href="#" className="w-5 h-5 rounded-full bg-sky-500 flex items-center justify-center hover:opacity-90">
            <Twitter className="w-3 h-3 text-white" />
          </a>
        </div>
      </div>

      {/* 2. Middle Header (Logo, Language, Search) */}
      <div className="bg-white py-3 px-4 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo & Info */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="bg-red-600 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">नेपा</span>
            <span className="bg-blue-800 text-white text-[10px] px-1.5 py-0.5 rounded font-bold">EN</span>
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
              Bhishma's <span className="text-[#0e8376]">Math Hub</span>
            </h1>
            <p className="text-[11px] text-slate-500 font-medium">
              १९ साउन २०८३, मंगलबार | Enlight For All
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center w-full md:w-auto">
          <input
            type="text"
            placeholder="Search Keywords"
            className="bg-slate-100 text-slate-700 px-3 py-1.5 text-sm rounded-l-md border border-slate-300 focus:outline-none w-full md:w-64"
          />
          <button className="bg-[#0e8376] text-white p-2 rounded-r-md hover:bg-[#0b5e54] transition">
            <Search className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 3. Main Navigation Bar (With Blue Active Highlight) */}
      <nav className="bg-[#0e8376] text-white">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center text-sm font-semibold">
            {/* Active Item: Blue Background */}
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
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
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