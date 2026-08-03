import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExperienceEducation from "@/components/ExperienceEducation";
import Skills from "@/components/Skills";
import Research from "@/components/Research";
import Resources from "@/components/Resources";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <ExperienceEducation />
      <Skills />
      <Research />
      <Resources />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}