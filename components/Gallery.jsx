"use client";
import React from "react";
import { Image as ImageIcon, Sparkles } from "lucide-react";

export default function Gallery() {
  const galleryItems = [
    {
      title: "Saraswati Ma Vi Farewell Program",
      category: "School Events",
      date: "Chaitra 2082",
      desc: "कक्षा १२ का विद्यार्थीहरूका लागि आयोजित बिदाइ तथा शुभकामना कार्यक्रम।",
    },
    {
      title: "School Admission Campaign Banners",
      category: "Design & Media",
      date: "2083",
      desc: "आकर्षक भर्ना अभियान ब्यानर र मर्मस्पर्शी मौलिक लोक लयको भर्ना गीत रचना।",
    },
    {
      title: "Science & Math Exhibition",
      category: "Academic",
      date: "Exhibition Day",
      desc: "विद्यार्थीहरूद्वारा निर्मित गणितीय मोडल र प्रयोगात्मक प्रदर्शनी।",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            School Activities & <span className="text-purple-400">Creative Gallery</span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            विद्यालयका गतिविधि, सांस्कृतिक/शैक्षिक कार्यक्रम तथा रचनात्मक डिजाइनहरू
          </p>
        </div>

        {/* Gallery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="group bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition duration-300"
            >
              {/* Image Placeholder */}
              <div className="w-full h-48 bg-slate-800 flex flex-col items-center justify-center relative overflow-hidden group-hover:scale-105 transition duration-300">
                <ImageIcon className="w-12 h-12 text-slate-600 mb-2" />
                <span className="text-xs text-slate-500">Event Photo / Banner Design</span>
                <span className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-semibold text-purple-300 border border-purple-500/30">
                  {item.category}
                </span>
              </div>

              <div className="p-6">
                <span className="text-xs text-teal-400 font-medium mb-1 block">{item.date}</span>
                <h3 className="text-lg font-bold text-slate-100 mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}