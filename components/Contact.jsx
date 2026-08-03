"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            शैक्षिक सहकार्य, गणित शिक्षण, अनुसन्धान वा कुनै पनि जिज्ञासाका लागि सम्पर्क गर्नुहोस्
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl space-y-6">
              <h3 className="text-2xl font-bold text-slate-100">Contact Information</h3>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl border border-blue-500/20">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Location / School</p>
                  <p className="text-sm font-semibold text-slate-200 mt-1">
                    Saraswati Secondary School
                  </p>
                  <p className="text-xs text-slate-400">Dakaha, Dudhauli Municipality-4, Nepal</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-500/10 text-teal-400 rounded-xl border border-teal-500/20">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Email Address</p>
                  <p className="text-sm font-semibold text-slate-200 mt-1">
                    bhishmaraazdhamala@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl border border-purple-500/20">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400">Role</p>
                  <p className="text-sm font-semibold text-slate-200 mt-1">
                    Secondary Mathematics Teacher & Researcher
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-slate-900 border border-slate-800 p-8 rounded-2xl space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    तपाईंको नाम (Full Name)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="उदा: राम शर्मा"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    इमेल ठेगाना (Email)
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  विषय (Subject)
                </label>
                <input
                  type="text"
                  required
                  placeholder="उदा: शिक्षण सामाग्री सम्बन्धी"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  सन्देश (Message)
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="तपाईंको सन्देश यहाँ लेख्नुहोस्..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>

              {submitted && (
                <div className="flex items-center gap-2 text-teal-400 bg-teal-500/10 border border-teal-500/20 p-3 rounded-xl text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  तपाईंको सन्देश सफलतापूर्वक पठाइयो! धन्यवाद।
                </div>
              )}

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-semibold py-3.5 rounded-xl shadow-lg transition duration-200"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}