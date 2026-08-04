"use client";

import React from "react";
import Hero from "@/components/home/Hero";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="bg-slate-100 min-h-screen font-sans text-slate-800">
      
      {/* Top Hero Banner */}
      <Hero />

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">

        {/* 1. NOTICE TICKER */}
        <div className="bg-white border border-slate-200 rounded-md shadow-sm flex items-center overflow-hidden">
          <div className="bg-blue-800 text-white font-bold text-xs sm:text-sm px-4 py-2.5 uppercase tracking-wider shrink-0">
            NOTICE
          </div>
          <div className="px-4 py-2 text-xs sm:text-sm text-slate-700 font-medium whitespace-nowrap overflow-hidden text-ellipsis w-full flex items-center gap-6">
            <span>• GeoGebra सम्बन्धी आधारभूत सिकाइ कार्यशाला सञ्चालन हुने</span>
            <span>• Filmora 14 तथा ICT सामग्री उपयोग सम्बन्धी तालिम</span>
          </div>
        </div>

        {/* 2. MAIN GRID (8 Cols Left, 4 Cols Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* LEFT 8 COLS: Blog Posts & Content */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* Post 1 */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 flex flex-col sm:flex-row gap-4 hover:shadow-md transition">
              <div className="sm:w-48 h-36 bg-blue-900 rounded overflow-hidden shrink-0 flex items-center justify-center text-white text-center p-2">
                <div className="border border-blue-400/40 p-2 rounded w-full h-full flex flex-col justify-center items-center">
                  <span className="text-xs text-blue-200">BHISHMA'S</span>
                  <span className="text-sm font-bold text-white">LEARNING HUB</span>
                </div>
              </div>
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-base font-bold text-slate-800 hover:text-blue-700 transition">
                    Filmora 14 - भिडियो सम्पादन सिकाइ
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-1">🕒 २०८३ साउन ४ गते</p>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                    यो भिडियो सम्पादन सफ्टवेयर हो जसले शिक्षण सिकाइका लागि एकदमै उत्कृष्ट भिडियोहरू बनाउन मद्दत गर्दछ।
                  </p>
                </div>
                <div className="mt-3 flex justify-end">
                  <button className="bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold px-3 py-1.5 rounded">
                    Read more
                  </button>
                </div>
              </div>
            </div>

            {/* Post 2 */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 flex flex-col sm:flex-row gap-4 hover:shadow-md transition">
              <div className="sm:w-48 h-36 bg-blue-900 rounded overflow-hidden shrink-0 flex items-center justify-center text-white text-center p-2">
                <div className="border border-blue-400/40 p-2 rounded w-full h-full flex flex-col justify-center items-center">
                  <span className="text-xs text-blue-200">GeoGebra</span>
                  <span className="text-sm font-bold text-white">MATH TUTORIAL</span>
                </div>
              </div>
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-base font-bold text-slate-800 hover:text-blue-700 transition">
                    GeoGebra सम्बन्धी आधारभूत सिकाइ
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-1">🕒 २०८३ असार ९ गते</p>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                    GeoGebra प्रयोग गरेर गणितीय अवधारणा सजिलै बुझाउन सकिन्छ।
                  </p>
                </div>
                <div className="mt-3 flex justify-end">
                  <button className="bg-blue-700 hover:bg-blue-800 text-white text-xs font-semibold px-3 py-1.5 rounded">
                    Read more
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT 4 COLS: Sidebar Widgets */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Quick Links Card */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
              <h4 className="font-bold text-blue-900 border-b border-blue-100 pb-2 mb-3 text-xs uppercase tracking-wider">
                महत्त्वपूर्ण लिङ्कहरू
              </h4>
              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                <li className="hover:text-blue-700 cursor-pointer">▶ शिक्षक सेवा आयोग</li>
                <li className="hover:text-blue-700 cursor-pointer">▶ पाठ्यक्रम विकास केन्द्र</li>
                <li className="hover:text-blue-700 cursor-pointer">▶ GeoGebra Materials</li>
              </ul>
            </div>

          </div>

        </div>

      </main>

      {/* Footer Component */}
      <Footer />

    </div>
  );
}