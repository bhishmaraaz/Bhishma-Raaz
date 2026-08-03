"use client";
import React from "react";
import { Briefcase, GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export default function ExperienceEducation() {
  const experiences = [
    {
      title: "Secondary Level Mathematics Teacher",
      organization: "Saraswati Secondary School",
      location: "Dakaha, Dudhauli Municipality-4, Nepal",
      period: "2026 - Present",
      description:
        "गहन गणित शिक्षण, ई-स्कूल व्यवस्थापन, विद्यालय सुधार योजना (SIP) निर्माण तथा व्यवस्थापन, र भर्ना अभियान सञ्चालन।",
      highlights: [
        "School Improvement Plan (SIP) व्यवस्थापन",
        "eSchool प्रणालीमा विद्यार्थी विवरण प्रविष्टि र व्यवस्थापन",
        "Maths & ICT integration in secondary classroom",
      ],
    },
    {
      title: "Information Officer & Math Teacher",
      organization: "Namuna Secondary School",
      location: "Ladavir, Nepal",
      period: "2024 - 2025",
      description:
        "सूचना अधिकारीको रूपमा विद्यालय सूचना व्यवस्थापन र माध्यमिक तहमा गणित अध्यापन।",
      highlights: [
        "सूचना अधिकारी (Information Officer) को भूमिका सम्पादन",
        "विद्यालय सुधार योजना (SIP) तर्जुमा",
        "GeoGebra र डिजिटल सिकाइ सामग्रीको प्रयोग",
      ],
    },
  ];

  const education = [
    {
      degree: "Master of Education (M.Ed.) in Mathematics",
      institution: "Tribhuvan University",
      period: "Completed / Research Ongoing",
      details:
        "गणित शिक्षाशास्त्र, अनुसन्धान (Thesis), र आधुनिक शिक्षण विधिमा विशेषज्ञता।",
      achievement: "M.Ed. Thesis Research in Mathematics Education",
    },
    {
      degree: "Bachelor of Education (B.Ed.) in Mathematics",
      institution: "Tribhuvan University",
      period: "Completed",
      details: "माध्यमिक तहको गणित पाठ्यक्रम, शिक्षण रणनीति र मूल्याङ्कन पद्धतिको अध्ययन।",
      achievement: "Major Mathematics Education",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-blue-400">Experience</span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            मेरो शिक्षण यात्रा, शैक्षिक पृष्ठभूमि र विद्यालय विकासमा सम्पादन गरिएका भूमिकाहरू
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-600/20 text-blue-400 rounded-xl border border-blue-500/30">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-100">Teaching Experience</h3>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-slate-800">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-10 group">
                  <div className="absolute left-2.5 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900 group-hover:scale-125 transition duration-200" />
                  
                  <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition duration-200">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <h4 className="text-xl font-bold text-slate-100">{exp.title}</h4>
                    <div className="flex items-center gap-2 text-sm text-slate-400 mt-1 mb-3">
                      <span className="font-medium text-teal-400">{exp.organization}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-xs">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="text-xs text-slate-400 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-teal-600/20 text-teal-400 rounded-xl border border-teal-500/30">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-100">Academic Education</h3>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 before:w-0.5 before:bg-slate-800">
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-10 group">
                  <div className="absolute left-2.5 top-1.5 -translate-x-1/2 w-4 h-4 rounded-full bg-teal-500 border-4 border-slate-900 group-hover:scale-125 transition duration-200" />
                  
                  <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition duration-200">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-teal-500/10 text-teal-400 border border-teal-500/20 mb-3">
                      <Calendar className="w-3.5 h-3.5" />
                      {edu.period}
                    </span>
                    <h4 className="text-xl font-bold text-slate-100">{edu.degree}</h4>
                    <p className="text-sm font-medium text-slate-400 mt-1 mb-3">
                      {edu.institution}
                    </p>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {edu.details}
                    </p>
                    <div className="inline-flex items-center gap-2 text-xs text-amber-300 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20">
                      <Award className="w-4 h-4" />
                      {edu.achievement}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}