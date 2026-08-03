"use client";
import React from "react";
import { GraduationCap, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-blue-500" />
            <span className="font-bold text-lg text-white">Bhishma Raaz Dhamala</span>
          </div>

          <p className="text-xs text-center md:text-left text-slate-500 flex items-center gap-1">
            © {new Date().getFullYear()} Bhishma Raaz. Designed with{" "}
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" /> for Excellence in Education.
          </p>

          <div className="flex space-x-6 text-xs text-slate-400">
            <a href="#home" className="hover:text-white transition">Home</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#research" className="hover:text-white transition">Research</a>
            <a href="#resources" className="hover:text-white transition">Resources</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>

        </div>
      </div>
    </footer>
  );
}