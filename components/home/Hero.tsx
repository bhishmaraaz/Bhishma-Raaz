"use client";
import React from "react";
import { Download, BookOpen, Mail, Award, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-950 text-white overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-3 py-1.5 rounded-full text-xs font-medium text-blue-400">
              <CheckCircle className="w-4 h-4 text-teal-400" />
              Secondary Level Mathematics Teacher & Researcher
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Empowering Education Through{" "}
              <span className="bg-gradient-to-r from-blue-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                Mathematics & ICT
              </span>
            </h1>

            <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              नमस्ते! म <strong>Bhishma Raaz</strong>। गणित शिक्षण, M.Ed. अनुसन्धान र सूचना तथा प्रविधि (ICT) को प्रयोगद्वारा शिक्षा क्षेत्रलाई थप प्रभावकारी बनाउन क्रियाशील छु।
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg transition duration-200 transform hover:-translate-y-0.5"
              >
                <Mail className="w-5 h-5" />
                Contact Me
              </a>

              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold px-6 py-3.5 rounded-xl transition duration-200"
              >
                <Download className="w-5 h-5 text-teal-400" />
                Download CV
              </a>
            </div>

            {/* Highlights Bar */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <p className="text-2xl font-bold text-white">10+</p>
                <p className="text-xs text-slate-400">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-teal-400">M.Ed.</p>
                <p className="text-xs text-slate-400">Mathematics Thesis</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-400">ICT</p>
                <p className="text-xs text-slate-400">Integrated Teaching</p>
              </div>
            </div>
          </div>

          {/* Right Profile Card / Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 p-6 rounded-3xl shadow-2xl">
              
              {/* Profile Image Box */}
              <div className="w-full h-80 bg-slate-800 rounded-2xl overflow-hidden relative border border-slate-700 flex items-center justify-center">
                <img
                  src="/profile.jpg"
                  alt="Bhishma Raaz"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback Display */}
                <div className="hidden flex-col items-center justify-center text-slate-500">
                  <BookOpen className="w-16 h-16 mb-2 text-slate-600" />
                  <span className="text-sm">Place profile.jpg in /public</span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="mt-6 flex items-center justify-between bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                  <div>
                    <p className="text-xs text-slate-400">Current Role</p>
                    <p className="text-sm font-semibold text-slate-200">Secondary Math Teacher</p>
                  </div>
                </div>
                <Award className="w-5 h-5 text-amber-400" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}