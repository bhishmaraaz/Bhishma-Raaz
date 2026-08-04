"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar"; // वा तपाईंको Navbar Component को नाम
import Footer from "@/components/Footer";

export default function HomePage() {
  const [selectedYear, setSelectedYear] = useState("2083");
  const [selectedMonth, setSelectedMonth] = useState("Shrawan");

  return (
    <div className="bg-slate-100 min-h-screen text-slate-800 font-sans">
      
      {/* 1. TOP NAVBAR / HEADER */}
      <Navbar />

      {/* 2. MAIN CONTAINER WITH EXACT TOP PADDING */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-10 space-y-5">

        {/* NOTICE TICKER BAR */}
        <div className="bg-white border border-slate-200 rounded-md shadow-sm flex items-center overflow-hidden">
          <div className="bg-blue-800 text-white font-bold text-xs sm:text-sm px-4 py-2.5 uppercase tracking-wider shrink-0">
            NOTICE
          </div>
          <div className="px-4 py-2 text-xs sm:text-sm text-slate-700 font-medium whitespace-nowrap overflow-hidden text-ellipsis w-full flex items-center gap-6 animate-pulse">
            <span>• GeoGebra सम्बन्धी आधारभूत सिकाइ कार्यशाला सञ्चालन हुने</span>
            <span>• Filmora 14 तथा ICT सामग्री उपयोग सम्बन्धी तालिम</span>
            <span>• माध्यमिक तह गणित नतिजा विश्लेषण टुल अद्यावधिक गरिएको छ</span>
          </div>
        </div>

        {/* MAIN CONTENT GRID (8 Cols Left, 4 Cols Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* LEFT SECTION (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">

            {/* Featured Banner / Carousel */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden relative group">
              <div className="bg-slate-900 aspect-[16/9] relative flex items-center justify-center overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="GeoGebra & AI Training"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 sm:p-6 text-white">
                  <span className="bg-blue-600 text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded w-fit mb-2">
                    GeoGebra & AI Training
                  </span>
                  <h2 className="text-base sm:text-xl font-bold leading-snug">
                    GeoGebra, AI Simulation and Mathigon in Mathematics Teaching
                  </h2>
                </div>
              </div>
            </div>

            {/* Post Cards */}
            <div className="space-y-4">

              {/* Card 1 */}
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 flex flex-col sm:flex-row gap-4 hover:shadow-md transition">
                <div className="sm:w-48 h-36 bg-blue-900 rounded-md overflow-hidden shrink-0 flex items-center justify-center text-white font-bold text-center p-2">
                  <div className="border border-blue-400/40 p-3 rounded w-full h-full flex flex-col justify-center items-center">
                    <span className="text-xs text-blue-200">BHISHMA'S</span>
                    <span className="text-sm font-extrabold text-white">LEARNING HUB</span>
                  </div>
                </div>
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-base font-bold text-slate-800 hover:text-blue-700 transition cursor-pointer">
                      Filmora 14 - भिडियो सम्पादन सिकाइ
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-1">
                      🕒 २०८३ साउन ४ गते, आइतबार
                    </p>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                      यो भिडियो सम्पादन सफ्टवेयर हो जसले शिक्षण सिकाइका लागि उत्कृष्ट भिडियोहरू बनाउन मद्दत गर्दछ।
                    </p>
                  </div>
                  <div className="mt-3 flex justify-end">
                    <button className="bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold px-3 py-1.5 rounded transition">
                      Read more
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 flex flex-col sm:flex-row gap-4 hover:shadow-md transition">
                <div className="sm:w-48 h-36 bg-blue-900 rounded-md overflow-hidden shrink-0 flex items-center justify-center text-white font-bold text-center p-2">
                  <div className="border border-blue-400/40 p-3 rounded w-full h-full flex flex-col justify-center items-center">
                    <span className="text-xs text-blue-200">GeoGebra</span>
                    <span className="text-sm font-extrabold text-white">MATH TUTORIAL</span>
                  </div>
                </div>
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-base font-bold text-slate-800 hover:text-blue-700 transition cursor-pointer">
                      GeoGebra सम्बन्धी आधारभूत सिकाइ
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-1">
                      🕒 २०८३ असार ९ गते, शनिबार
                    </p>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                      हामी GeoGebra प्रयोग गरेर गणितीय अवधारणा सजिलै बुझाउन सक्छौँ।
                    </p>
                  </div>
                  <div className="mt-3 flex justify-end">
                    <button className="bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold px-3 py-1.5 rounded transition">
                      Read more
                    </button>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT SIDEBAR (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">

            {/* Profile Contact */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-5 text-center">
              <h4 className="font-bold text-slate-700 text-xs border-b pb-2 mb-4 uppercase tracking-wider">Contact</h4>
              <div className="w-32 h-40 mx-auto overflow-hidden rounded border-2 border-blue-600 shadow-sm mb-3">
                <img src="/profile.jpg" alt="Bhishma Raaz Dhamala" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-extrabold text-slate-800 text-base">Bhishma Raaz Dhamala</h3>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Secondary Math Teacher</p>
              
              <a
                href="https://wa.me/9779800000000"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2 rounded shadow transition"
              >
                <span>💬</span> WhatsApp Contact
              </a>
            </div>

            {/* Date Converter */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
              <div className="bg-blue-800 text-white text-xs font-bold p-2 text-center rounded mb-3">
                Nepali Date Converter
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <label className="text-slate-500 block mb-1">Year</label>
                  <select className="w-full border p-1.5 rounded bg-slate-50">
                    <option>2083</option>
                    <option>2082</option>
                  </select>
                </div>
                <div>
                  <label className="text-slate-500 block mb-1">Month</label>
                  <select className="w-full border p-1.5 rounded bg-slate-50">
                    <option>Shrawan</option>
                    <option>Bhadra</option>
                  </select>
                </div>
              </div>
              <button className="w-full bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold py-1.5 rounded mt-3 transition">
                Convert
              </button>
            </div>

          </div>

        </div>

      </main>

      {/* 3. FOOTER */}
      <Footer />

    </div>
  );
}