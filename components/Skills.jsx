"use client";
import React from "react";
import { Code, Monitor, BookOpen, CheckCircle2, Cpu } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Teaching & Pedagogy",
      icon: BookOpen,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      skills: [
        "Secondary Level Mathematics",
        "Inclusive Math Teaching (Visually Impaired)",
        "Lesson Planning & Practical Pedagogy",
        "Student Evaluation & SEE Result Analysis",
      ],
    },
    {
      title: "Educational Technology (EdTech)",
      icon: Monitor,
      color: "text-teal-400",
      bg: "bg-teal-500/10",
      skills: [
        "GeoGebra Interactive Visualizations",
        "Sikais Chautari (सिकाइ चौतारी) Integration",
        "eSchool Data & Student Ledgers",
        "Secondary Math TPD Training",
      ],
    },
    {
      title: "AI, Design & Tech Tools",
      icon: Cpu,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      skills: [
        "AI Prompt Engineering for Education",
        "Photoshop & Graphic Design (PSD)",
        "School Banners & Admission Campaigns",
        "Web & Digital Content Creation",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="text-teal-400">Skills & Expertise</span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            गणित शिक्षण, शैक्षिक प्रविधि (ICT) र आधुनिक AI/डिजाइन टुलहरूमा दक्षता
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${cat.bg} flex items-center justify-center mb-6`}>
                  <Icon className={`w-6 h-6 ${cat.color}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-100 mb-6">{cat.title}</h3>
                
                <ul className="space-y-3.5">
                  {cat.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}