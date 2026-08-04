"use client";

import React, { useState } from "react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("BS2AD");
  const [bsYear, setBsYear] = useState("2083");
  const [bsMonth, setBsMonth] = useState("Shrawan");
  const [bsDay, setBsDay] = useState("19");

  // Editable sample posts array - You can easily edit or add your posts here!
  const posts = [
    {
      id: 1,
      title: "Fx-Draw",
      date: "२०८३ साउन ९ गते, शनिबार",
      image: "/profile.jpg",
      badge: "VEER'S LEARNING HUB",
      description:
        "This is math drawing software that helps to make mathematics figures easily. Click here for download.",
      link: "#",
    },
    {
      id: 2,
      title: "Filmora 14",
      date: "२०८३ साउन ९ गते, शनिबार",
      image: "/profile.jpg",
      badge: "VEER'S LEARNING HUB",
      description:
        "This is Video editing software that makes perfect videos about everything. Click here for download.",
      link: "#",
    },
    {
      id: 3,
      title: "GeoGebra सम्बन्धी आधारभूत सिकाइ",
      date: "२०८३ असार ६ गते, शनिबार",
      image: "/profile.jpg",
      badge: "GeoGebra Tutorial",
      description:
        "हाम्रो GeoGebra प्याकेज मा तपाईंलाई हार्दिक स्वागत छ। गणितका जटिल सिद्धान्तहरूलाई सजिलै बुझ्न र दृश्य रूपमा प्रस्तुत गर्न सिक्नुहोस्।",
      link: "#",
    },
    {
      id: 4,
      title: "गुल्मी जिल्लाको रुरुक्षेत्र गाउँपालिकामा सञ्चालित ३ दिने तालिम सम्पन्न",
      date: "२०८३ असार २ गते, मंगलबार",
      image: "/profile.jpg",
      badge: "Training",
      description:
        "गणित, विज्ञान, सामाजिक र कम्प्युटर शिक्षकहरूका निमित्त क्षमता विकास तालिम सफलतापूर्वक सम्पन्न भएको छ।",
      link: "#",
    },
  ];

  return (
    <div className="bg-slate-100 min-h-screen text-slate-800 font-sans">
      
      {/* 1. TOP MINI HEADER BAR */}
      <div className="bg-blue-900 text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:underline">About</a>
            <a href="#terms" className="hover:underline">Terms & Conditions</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-xs">f</a>
            <a href="#" className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-xs">▶</a>
            <a href="#" className="w-6 h-6 rounded-full bg-sky-500 flex items-center justify-center text-xs">t</a>
            <a href="#" className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-xs">♪</a>
          </div>
        </div>
      </div>

      {/* 2. MAIN LOGO & BRAND HEADER */}
      <div className="bg-white py-4 px-4 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="bg-blue-100 text-blue-900 text-xs font-bold px-2 py-1 rounded border border-blue-300">नेपा</span>
              <span className="bg-slate-200 text-slate-700 text-xs font-bold px-2 py-1 rounded">EN</span>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900 tracking-tight">
                Bhishma's <span className="text-blue-700">Learning Hub</span>
              </h1>
              <p className="text-xs font-bold text-amber-600 tracking-wider">
                Enlight For All
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5">
                १९ साउन २०८३, मंगलबार
              </p>
            </div>
          </div>

          {/* Search Box */}
          <div className="flex items-center w-full md:w-80">
            <input
              type="text"
              placeholder="Search Keywords"
              className="w-full text-xs px-3 py-2 bg-slate-100 border border-slate-300 rounded-l focus:outline-none focus:border-blue-600"
            />
            <button className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 text-xs font-bold rounded-r transition">
              🔍
            </button>
          </div>

        </div>
      </div>

      {/* 3. MAIN BLUE NAVIGATION MENU */}
      <nav className="bg-blue-800 text-white text-xs font-bold shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center">
          <a href="#" className="bg-blue-900 px-4 py-3 border-r border-blue-700 hover:bg-blue-950">
            गृहपृष्ठ
          </a>
          <a href="#" className="px-4 py-3 border-r border-blue-700 hover:bg-blue-700">
            पाठ्यक्रम ▾
          </a>
          <a href="#" className="px-4 py-3 border-r border-blue-700 hover:bg-blue-700">
            प्रश्नपत्र संकलन ▾
          </a>
          <a href="#" className="px-4 py-3 border-r border-blue-700 hover:bg-blue-700">
            ICT सामग्रीहरू ▾
          </a>
          <a href="#" className="px-4 py-3 border-r border-blue-700 hover:bg-blue-700">
            प्रकाशनहरू ▾
          </a>
          <a href="#" className="px-4 py-3 border-r border-blue-700 hover:bg-blue-700">
            Premium Package ▾
          </a>
          <a href="#" className="px-4 py-3 border-r border-blue-700 hover:bg-blue-700">
            Training ▾
          </a>
          <a href="#" className="px-4 py-3 hover:bg-blue-700">
            सम्पर्क
          </a>
        </div>
      </nav>

      {/* 4. MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">

        {/* NOTICE TICKER BAR */}
        <div className="bg-white border border-slate-200 rounded shadow-sm flex items-center overflow-hidden">
          <div className="bg-blue-800 text-white font-bold text-xs px-4 py-2.5 uppercase tracking-wider shrink-0">
            NOTICE
          </div>
          <div className="px-4 py-2 text-xs text-slate-700 font-medium whitespace-nowrap overflow-hidden text-ellipsis w-full flex items-center gap-8 animate-pulse">
            <span>• समापन तथा प्रमाणपत्र बितरण कार्यक्रम</span>
            <span>• Fx-Draw</span>
            <span>• Filmora 14</span>
            <span>• GeoGebra सम्बन्धी आधारभूत सिकाइ</span>
          </div>
        </div>

        {/* MAIN GRID SECTION (8 COLS LEFT, 4 COLS RIGHT) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* LEFT CONTENT COLUMN (8 COLS) */}
          <div className="lg:col-span-8 space-y-6">

            {/* HERO BANNER SLIDER */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden relative">
              <div className="bg-slate-900 aspect-[16/9] relative flex items-center justify-center overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="Training Banner"
                  className="w-full h-full object-cover opacity-85"
                />
                <button className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-r hover:bg-black">
                  ◀
                </button>
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-l hover:bg-black">
                  ▶
                </button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                  <span className="w-2 h-2 rounded-full bg-white/60"></span>
                  <span className="w-2 h-2 rounded-full bg-white/60"></span>
                </div>
              </div>
            </div>

            {/* LATEST POSTS LIST */}
            <div className="space-y-4">
              <div className="bg-blue-800 text-white text-xs font-bold px-3 py-1.5 rounded-t w-fit">
                Latest Post
              </div>

              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 flex flex-col sm:flex-row gap-4 hover:shadow-md transition"
                >
                  <div className="sm:w-48 h-36 bg-blue-900 rounded overflow-hidden shrink-0 flex items-center justify-center text-white font-bold text-center p-2 relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-40"
                    />
                    <div className="relative z-10 border border-blue-400/50 p-2 rounded bg-blue-950/70">
                      <span className="text-[10px] text-blue-200 block uppercase">
                        {post.badge}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-base font-bold text-slate-800 hover:text-blue-700 transition cursor-pointer">
                        {post.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 mt-1">
                        🕒 {post.date}
                      </p>
                      <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                        {post.description}
                      </p>
                    </div>
                    <div className="mt-3 flex justify-end">
                      <a
                        href={post.link}
                        className="bg-blue-800 hover:bg-blue-900 text-white text-xs font-semibold px-3 py-1.5 rounded transition"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT SIDEBAR COLUMN (4 COLS) */}
          <div className="lg:col-span-4 space-y-6">

            {/* CONTACT CARD WIDGET */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4 text-center">
              <h4 className="font-bold text-slate-700 text-sm border-b pb-2 mb-3">Contact</h4>
              <div className="w-28 h-36 mx-auto overflow-hidden rounded border-2 border-blue-700 shadow-sm mb-2">
                <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-extrabold text-slate-800 text-base">Bhishma Raaz Dhamala</h3>
              <p className="text-xs text-slate-500 font-semibold">Secondary Math Teacher</p>
              
              <a
                href="https://wa.me/9779800000000"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center justify-center gap-2 w-full bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold py-2 rounded shadow transition"
              >
                📞 +977 9800000000
              </a>
            </div>

            {/* FOLLOW US SOCIAL WIDGET */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
              <div className="bg-blue-700 text-white text-xs font-bold p-1.5 rounded-t mb-3">
                Follow Us
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                <button className="bg-blue-800 text-white py-2 rounded hover:bg-blue-900">f Facebook</button>
                <button className="bg-sky-500 text-white py-2 rounded hover:bg-sky-600">t Twitter</button>
                <button className="bg-red-600 text-white py-2 rounded hover:bg-red-700">▶ YouTube</button>
                <button className="bg-black text-white py-2 rounded hover:bg-slate-800">♪ TikTok</button>
              </div>
            </div>

            {/* PAGE VIEW COUNTER WIDGET */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
              <div className="bg-blue-700 text-white text-xs font-bold p-1.5 rounded-t mb-3">
                Page View
              </div>
              <div className="flex justify-center gap-1">
                {["0", "0", "0", "2", "4", "7", "9"].map((num, i) => (
                  <span key={i} className="bg-blue-900 text-white font-extrabold text-sm px-2 py-1 rounded">
                    {num}
                  </span>
                ))}
              </div>
            </div>

            {/* NEPALI CALENDAR & DATE CONVERTER WIDGET */}
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-4">
              <div className="bg-blue-800 text-white text-xs font-bold p-2 rounded-t text-center">
                Nepali Date Converter
              </div>

              {/* Calendar Grid Header */}
              <div className="bg-blue-600 text-white text-xs font-bold p-2 flex justify-between items-center rounded-b mb-3">
                <span>साउन २०८३</span>
                <span className="text-[10px] bg-blue-800 px-2 py-0.5 rounded">Jul / Aug 2026</span>
              </div>

              {/* Converter Controls */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between border-b pb-1">
                  <button
                    onClick={() => setActiveTab("BS2AD")}
                    className={`font-bold px-2 py-1 rounded ${activeTab === "BS2AD" ? "bg-blue-800 text-white" : "text-slate-600"}`}
                  >
                    CONVERT BS TO AD
                  </button>
                  <button
                    onClick={() => setActiveTab("AD2BS")}
                    className={`font-bold px-2 py-1 rounded ${activeTab === "AD2BS" ? "bg-blue-800 text-white" : "text-slate-600"}`}
                  >
                    CONVERT AD TO BS
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="text-[10px] text-slate-500 block">Year</label>
                    <select
                      value={bsYear}
                      onChange={(e) => setBsYear(e.target.value)}
                      className="w-full border p-1 rounded text-xs bg-slate-50"
                    >
                      <option>2083</option>
                      <option>2082</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-500 block">Month</label>
                    <select
                      value={bsMonth}
                      onChange={(e) => setBsMonth(e.target.value)}
                      className="w-full border p-1 rounded text-xs bg-slate-50"
                    >
                      <option>Shrawan</option>
                      <option>Bhadra</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-500 block">Day</label>
                    <select
                      value={bsDay}
                      onChange={(e) => setBsDay(e.target.value)}
                      className="w-full border p-1 rounded text-xs bg-slate-50"
                    >
                      <option>19</option>
                      <option>20</option>
                    </select>
                  </div>
                </div>

                <button className="w-full bg-blue-800 hover:bg-blue-900 text-white text-xs font-bold py-1.5 rounded transition">
                  Convert
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* 5. FOOTER & LINKS SECTION */}
      <footer className="bg-blue-100 border-t border-slate-300 mt-10 pt-8 pb-6 text-slate-700 text-xs">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Maths Links */}
          <div className="space-y-3">
            <h3 className="font-extrabold text-blue-950 text-sm border-b border-slate-300 pb-1">
              Maths-related Websites
            </h3>
            <ul className="space-y-1.5 font-semibold text-slate-700">
              <li>🔹 <a href="#" className="hover:text-blue-700">GeoGebra</a></li>
              <li>🔹 <a href="#" className="hover:text-blue-700">Mathematics PolyPad</a></li>
              <li>🔹 <a href="#" className="hover:text-blue-700">Maths Pad (Construction Tools)</a></li>
              <li>🔹 <a href="#" className="hover:text-blue-700">Solve Anything</a></li>
              <li>🔹 <a href="#" className="hover:text-blue-700">DeltaMath</a></li>
              <li>🔹 <a href="#" className="hover:text-blue-700">Mathgpt (AI video generate)</a></li>
              <li>🔹 <a href="#" className="hover:text-blue-700">Kimi AI (Pdf to solve)</a></li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="font-extrabold text-blue-950 text-sm border-b border-slate-300 pb-1">
              Quick Links
            </h3>
            <ul className="space-y-1.5 font-semibold text-slate-700">
              <li>🔹 <a href="#" className="hover:text-blue-700">शिक्षा, विज्ञान तथा प्रविधि मन्त्रालय</a></li>
              <li>🔹 <a href="#" className="hover:text-blue-700">शिक्षा तथा मानव स्रोत विकास केन्द्र</a></li>
              <li>🔹 <a href="#" className="hover:text-blue-700">पाठ्यक्रम विकास केन्द्र</a></li>
              <li>🔹 <a href="#" className="hover:text-blue-700">राष्ट्रिय परीक्षा बोर्ड</a></li>
              <li>🔹 <a href="#" className="hover:text-blue-700">लोक सेवा आयोग</a></li>
              <li>🔹 <a href="#" className="hover:text-blue-700">शिक्षक सेवा आयोग</a></li>
              <li>🔹 <a href="#" className="hover:text-blue-700">Preeti to Unicode</a></li>
            </ul>
          </div>

          {/* Column 3: Feedback Form */}
          <div className="space-y-3">
            <div className="bg-blue-800 text-white text-xs font-bold px-3 py-1 rounded w-fit">
              प्रतिक्रिया दिनुहोस्
            </div>
            <div className="space-y-2 bg-white p-3 rounded border border-slate-200">
              <div>
                <label className="text-[11px] font-bold block mb-1">तपाईंको नाम *</label>
                <input type="text" className="w-full border p-1.5 rounded text-xs bg-slate-50" />
              </div>
              <div>
                <label className="text-[11px] font-bold block mb-1">तपाईंको प्रतिक्रिया *</label>
                <textarea rows={2} className="w-full border p-1.5 rounded text-xs bg-slate-50"></textarea>
              </div>
              <button className="bg-blue-800 hover:bg-blue-900 text-white text-xs font-bold px-4 py-1.5 rounded transition">
                प्रतिक्रिया दिनुहोस्
              </button>
            </div>
          </div>

        </div>

        {/* COPYRIGHT BAR */}
        <div className="max-w-7xl mx-auto px-4 mt-8 pt-4 border-t border-slate-300 text-center text-[11px] font-semibold text-slate-500">
          © 2026 - Bhishma Raaz Dhamala | All Rights Reserved.
        </div>
      </footer>

    </div>
  );
}