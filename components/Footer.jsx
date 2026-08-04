"use client";

import React, { useState } from "react";

export default function Footer() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("प्रतिक्रिया पठाउनुभएकोमा धन्यवाद!");
    setName("");
    setComment("");
  };

  return (
    <footer className="bg-slate-100 border-t border-slate-300 text-slate-800 font-sans pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Column 1: Logo & Maths Websites (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <div>
              <h2 className="text-xl font-extrabold text-blue-900 tracking-tight">
                Bhishma's <span className="text-blue-700">Learning Hub</span>
              </h2>
              <p className="text-xs text-slate-500 italic">Enlight For All</p>
            </div>

            <div className="text-xs text-slate-600 space-y-1">
              <p><span className="font-semibold">इ-मेल:</span> contact@bhishmaraaz.com.np</p>
              <p><span className="font-semibold">थप जानकारीको लागि:</span> +977 9800000000</p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 text-sm border-b-2 border-blue-600 pb-1 mb-3 inline-block">
                Maths-related Websites
              </h3>
              <ul className="space-y-2 text-xs font-medium text-slate-700">
                <li className="hover:text-blue-700 cursor-pointer flex items-center gap-1.5">
                  <span className="text-blue-600 font-bold">▶</span> GeoGebra
                </li>
                <li className="hover:text-blue-700 cursor-pointer flex items-center gap-1.5">
                  <span className="text-blue-600 font-bold">▶</span> Mathematics PolyPad
                </li>
                <li className="hover:text-blue-700 cursor-pointer flex items-center gap-1.5">
                  <span className="text-blue-600 font-bold">▶</span> Maths Pad (Construction Tools)
                </li>
                <li className="hover:text-blue-700 cursor-pointer flex items-center gap-1.5">
                  <span className="text-blue-600 font-bold">▶</span> Solve Anything
                </li>
                <li className="hover:text-blue-700 cursor-pointer flex items-center gap-1.5">
                  <span className="text-blue-600 font-bold">▶</span> DeltaMath
                </li>
                <li className="hover:text-blue-700 cursor-pointer flex items-center gap-1.5">
                  <span className="text-blue-600 font-bold">▶</span> Mathgpt (AI video generate)
                </li>
                <li className="hover:text-blue-700 cursor-pointer flex items-center gap-1.5">
                  <span className="text-blue-600 font-bold">▶</span> Notegpt (AI video generate)
                </li>
                <li className="hover:text-blue-700 cursor-pointer flex items-center gap-1.5">
                  <span className="text-blue-600 font-bold">▶</span> Decopy AI (Pdf/Image to solve)
                </li>
              </ul>
            </div>
          </div>

          {/* Column 2: Quick Links (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <div>
              <h3 className="font-bold text-slate-900 text-sm border-b-2 border-blue-600 pb-1 mb-3 inline-block">
                Quick Links
              </h3>
              <ul className="space-y-2 text-xs font-medium text-slate-700">
                <li className="hover:text-blue-700 cursor-pointer flex items-center gap-1.5">
                  <span className="text-blue-600 font-bold">▶</span> शिक्षा, विज्ञान तथा प्रविधि मन्त्रालय
                </li>
                <li className="hover:text-blue-700 cursor-pointer flex items-center gap-1.5">
                  <span className="text-blue-600 font-bold">▶</span> शिक्षा तथा मानव स्रोत विकास केन्द्र
                </li>
                <li className="hover:text-blue-700 cursor-pointer flex items-center gap-1.5">
                  <span className="text-blue-600 font-bold">▶</span> पाठ्यक्रम विकास केन्द्र
                </li>
                <li className="hover:text-blue-700 cursor-pointer flex items-center gap-1.5">
                  <span className="text-blue-600 font-bold">▶</span> राष्ट्रिय किताबखाना (शिक्षक)
                </li>
                <li className="hover:text-blue-700 cursor-pointer flex items-center gap-1.5">
                  <span className="text-blue-600 font-bold">▶</span> शैक्षिक गुणस्तर परीक्षण केन्द्र
                </li>
                <li className="hover:text-blue-700 cursor-pointer flex items-center gap-1.5">
                  <span className="text-blue-600 font-bold">▶</span> राष्ट्रिय परीक्षा बोर्ड
                </li>
                <li className="hover:text-blue-700 cursor-pointer flex items-center gap-1.5">
                  <span className="text-blue-600 font-bold">▶</span> माध्यमिक शिक्षा परीक्षा, कक्षा १०
                </li>
                <li className="hover:text-blue-700 cursor-pointer flex items-center gap-1.5">
                  <span className="text-blue-600 font-bold">▶</span> IEMIS Portal
                </li>
                <li className="hover:text-blue-700 cursor-pointer flex items-center gap-1.5">
                  <span className="text-blue-600 font-bold">▶</span> शिक्षक सेवा आयोग
                </li>
                <li className="hover:text-blue-700 cursor-pointer flex items-center gap-1.5">
                  <span className="text-blue-600 font-bold">▶</span> Preeti to Unicode
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Feedback Form & Comments (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            
            {/* Header Ribbon */}
            <div className="bg-blue-600 text-white font-bold text-xs px-3 py-2 rounded-t shadow-sm">
              प्रतिक्रिया दिनुहोस्
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-white p-4 rounded-b shadow-sm border border-slate-200 space-y-3">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  तपाईंको नाम <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-xs p-2 border border-slate-300 rounded focus:outline-none focus:border-blue-600 bg-slate-50"
                  placeholder="तपाईंको नाम लेख्नुहोस्"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  तपाईंको प्रतिक्रिया <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full text-xs p-2 border border-slate-300 rounded focus:outline-none focus:border-blue-600 bg-slate-50"
                  placeholder="यहाँ आफ्नो प्रतिक्रिया लेख्नुहोस्..."
                />
              </div>

              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold px-4 py-2 rounded transition shadow"
              >
                प्रतिक्रिया दिनुहोस्
              </button>
            </form>

            {/* Comment List Box */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold text-slate-800">प्रतिक्रियाहरू (१)</h4>
              
              <div className="bg-white p-3 rounded border border-slate-200 text-xs space-y-1 shadow-sm">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-[10px]">
                    U
                  </div>
                  <span className="font-bold text-slate-800">Uddhav Ayadi</span>
                </div>
                <p className="text-slate-600 pl-8">Best Platform for Teachers</p>
                <div className="text-[10px] text-slate-400 pl-8 flex items-center gap-3 pt-1">
                  <span>२०८३ साउन ९, २२:१९</span>
                  <button className="text-blue-600 hover:underline">Like</button>
                  <button className="text-blue-600 hover:underline">Reply</button>
                </div>
              </div>

              <button className="w-full bg-blue-800 hover:bg-blue-900 text-white text-xs font-bold py-2 rounded transition">
                थप प्रतिक्रियाहरू हेर्नुहोस्
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-900 text-white text-xs py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-slate-200">
          <p>Copyright © 2026 - Bhishma Raaz Dhamala</p>
          <p className="text-[11px] text-blue-300">Design & Developed for Educators</p>
        </div>
      </div>
    </footer>
  );
}