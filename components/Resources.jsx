"use client";
import React from "react";
import { Download, FileCode, Monitor, FileSpreadsheet, Check } from "lucide-react";

export default function Resources() {
  const resources = [
    {
      title: "GeoGebra Dynamic Materials",
      type: "Interactive Tool",
      description: "Geometry, Trigonometry र Vector का अवधारणा बुझ्न मद्दत गर्ने अन्तरक्रियात्मक Applets।",
      badge: "GeoGebra",
      icon: Monitor,
      color: "text-teal-400",
    },
    {
      title: "Secondary Math Notes & Question Papers",
      type: "PDF / Word Document",
      description: "कक्षा ९ र १० का लागि मोडल प्रश्नपत्र, समाधान र एकाइगत अभ्यास नोट्स।",
      badge: "Class 9-10",
      icon: FileCode,
      color: "text-blue-400",
    },
    {
      title: "SEE Ledger & Result Processing Tools",
      type: "Excel / Web Tool",
      description: "SEE समष्टिगत नतिजा विश्लेषण, ग्रेडिङ र लेजर प्रविष्टि सहज बनाउने टेम्प्लेट।",
      badge: "SEE Tools",
      icon: FileSpreadsheet,
      color: "text-emerald-400",
    },
  ];

  return (
    <section id="resources" className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Teaching & <span className="text-teal-400">Classroom Resources</span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            शिक्षक तथा विद्यार्थीहरूका लागि तयार पारिएका गणित नोट्स, GeoGebra सामाग्री र नतिजा विश्लेषण टुलहरू
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((res, idx) => {
            const Icon = res.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-slate-800 rounded-xl">
                    <Icon className={`w-6 h-6 ${res.color}`} />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                    {res.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-100 mb-2">{res.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  {res.description}
                </p>

                <button
                  onClick={() => alert("सामाग्री चाँडै उपलब्ध हुनेछ!")}
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-sm font-semibold py-2.5 rounded-xl transition duration-200"
                >
                  <Download className="w-4 h-4 text-teal-400" />
                  Access Resource
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}