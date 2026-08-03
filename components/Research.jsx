"use client";
import React from "react";
import { BookOpen, FileText, Presentation, Award, ExternalLink } from "lucide-react";

export default function Research() {
  const researchItems = [
    {
      title: "M.Ed. Thesis Research in Mathematics Education",
      category: "Thesis Work",
      description:
        "गणित शिक्षणमा आधुनिक विधि, समस्या समाधान शैली र माध्यमिक तहका विद्यार्थीहरूमा गणितीय अवधारणाको विकास सम्बन्धी अध्ययन।",
      status: "In Progress / Thesis Work",
      icon: BookOpen,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      title: "Teaching Mathematics to Visually Impaired Students",
      category: "Orientation & Action Research",
      description:
        "दृष्टिविहीन विद्यार्थीहरूलाई गणित अध्यापन गराउने व्यावहारिक रणनीति, विशेष सिकाइ सामग्री र प्रविधिको प्रयोग सम्बन्धी अनुभव र अध्ययन (Janata Ma Vi Gauridada).",
      status: "Orientation & Practice",
      icon: Presentation,
      color: "text-teal-400",
      bg: "bg-teal-500/10",
    },
    {
      title: "ICT Integration in Secondary Mathematics Pedagogy",
      category: "Paper & Presentation",
      description:
        "GeoGebra र सिकाइ चौतारी (Sikais Chautari) जस्ता डिजिटल प्लेटफर्महरू प्रयोग गरी माध्यमिक तहको गणित शिक्षणलाई थप प्रभावकारी बनाउने विधि।",
      status: "Published Paper / Seminar",
      icon: FileText,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
  ];

  return (
    <section id="research" className="py-20 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 rounded-full text-xs font-semibold text-blue-400 mb-3">
            <Award className="w-4 h-4" /> Academic & Action Research
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Research & <span className="text-blue-400">Publications</span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            गणित शिक्षाको अभिवृद्धि, समावेशी शिक्षण र ICT प्रयोगमा गरिएका अनुसन्धान तथा प्रस्तुतिहरू
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {researchItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`p-3 rounded-xl ${item.bg} ${item.color}`}>
                      <Icon className="w-6 h-6" />
                    </span>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="text-teal-400 font-medium">{item.status}</span>
                  <span className="flex items-center gap-1 hover:text-white cursor-pointer transition">
                    Details <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}