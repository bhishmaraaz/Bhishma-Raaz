"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="bg-white border-b border-slate-200 pt-36 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 rounded-xl p-6 sm:p-10 text-white shadow-lg flex flex-col md:flex-row items-center gap-8">
          
          {/* Profile Image Column */}
          <div className="shrink-0">
            <div className="w-36 h-44 sm:w-44 sm:h-52 rounded-lg border-4 border-white/20 overflow-hidden shadow-md bg-blue-950 relative">
              <img
                src="/profile.jpg"
                alt="Bhishma Raaz Dhamala"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                }}
              />
            </div>
          </div>

          {/* Bio Text Column */}
          <div className="space-y-3 text-center md:text-left flex-1">
            <span className="bg-blue-600/60 text-blue-100 text-xs font-semibold px-3 py-1 rounded-full border border-blue-400/30">
              माध्यमिक तह गणित शिक्षक तथा M.Ed. शोधकर्ता
            </span>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              भीष्मराज धमला (Bhishma Raaz Dhamala)
            </h1>

            <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-3xl">
              नमस्कार! गणित शिक्षणलाई आधुनिक ICT, GeoGebra, AI Simulations र व्यावहारिक प्रयोगमार्फत सरल र प्रभावकारी बनाउन क्रियाशील।
            </p>

            <div className="pt-2 flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="#resources"
                className="bg-white text-blue-900 hover:bg-blue-50 text-xs font-bold px-4 py-2.5 rounded shadow transition"
              >
                ICT सामग्रीहरू
              </a>
              <a
                href="#contact"
                className="bg-blue-700 hover:bg-blue-600 border border-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded shadow transition"
              >
                सम्पर्क गर्नुहोस्
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}