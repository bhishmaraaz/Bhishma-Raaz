import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      {/* आगामी Modules (About, Experience, Research, Resources) यहाँ थपिनेछन् */}
    </main>
  );
}