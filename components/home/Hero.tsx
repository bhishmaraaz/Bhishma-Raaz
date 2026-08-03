"use client";

import React from "react";
import { ArrowRight, Download, BookOpen, Award, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Subtle Gradient Blurs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-teal-400 text-xs font-medium">
              <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
              Secondary Level Mathematics Educator & Researcher
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Empowering Minds Through <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400">
                Mathematics & Technology
              </span>
            </h1>

            {/* Description */}
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              नमस्कार! म **भीष्मराज धमला (Bhishma Raaz Dhamala)**। माध्यमिक तह गणित शिक्षक तथा M.Ed. शोधकर्ता। गणित शिक्षणलाई आधुनिक ICT, GeoGebra र व्यावहारिक प्रयोगमार्फत सरल र प्रभावकारी बनाउन क्रियाशील।
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-semibold shadow-lg shadow-blue-500/20 transition duration-200"
              >
                Contact Me <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#resources"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold transition duration-200"
              >
                Teaching Resources <Download className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Quick Stats / Highlights */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-blue-400 font-bold text-xl sm:text-2xl">
                  <BookOpen className="w-5 h-5" /> M.Ed.
                </div>
                <p className="text-xs text-slate-400">Math Education</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-teal-400 font-bold text-xl sm:text-2xl">
                  <Award className="w-5 h-5" /> ICT
                </div>
                <p className="text-xs text-slate-400">GeoGebra Trained</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-indigo-400 font-bold text-xl sm:text-2xl">
                  <CheckCircle2 className="w-5 h-5" /> Teacher
                </div>
                <p className="text-xs text-slate-400">Secondary Level</p>
              </div>
            </div>

          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl p-2 bg-gradient-to-b from-blue-500/20 via-slate-800 to-slate-900 border border-slate-800 shadow-2xl">
              <div className="w-full h-full rounded-xl overflow-hidden bg-slate-900 relative flex items-center justify-center">
                
                {/* Profile Image */}
                <img
                  src="/profile.jpg"
                  alt="Bhishma Raaz Dhamala"
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const next = target.nextElementSibling as HTMLElement | null;
                    if (next) {
                      next.classList.remove("hidden");
                      next.classList.add("flex");
                    }
                  }}
                />

                {/* Fallback Display if image is missing */}
                <div className="hidden absolute inset-0 bg-slate-900 flex-col items-center justify-center text-center p-6 space-y-3">
                  <div className="w-20 h-20 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center text-3xl font-extrabold border border-blue-500/30">
                    BR
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-200">Bhishma Raaz Dhamala</h3>
                    <p className="text-xs text-slate-400">Mathematics Educator</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}