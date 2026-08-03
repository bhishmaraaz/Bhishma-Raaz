import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExperienceEducation from "@/components/ExperienceEducation";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <ExperienceEducation />
      <Skills />
      {/* Module 3 (Research, Teaching Resources, Gallery) अर्को चरणमा थपिनेछ */}
    </main>
  );
}