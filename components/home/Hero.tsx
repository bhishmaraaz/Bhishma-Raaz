import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 items-center gap-12">

        {/* Left Side */}
        <div>
          <p className="text-blue-400 text-lg mb-3">
            👋 Welcome to my official website
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Bhishma <span className="text-blue-400">Raaz</span>
          </h1>

          <h2 className="mt-6 text-2xl text-gray-300">
            Mathematics Educator | Researcher | AI Enthusiast
          </h2>

          <p className="mt-8 text-lg text-gray-400 leading-8">
            Passionate about Mathematics Education, Educational Research,
            Artificial Intelligence, and Digital Learning. Dedicated to inspiring
            students through innovative teaching and technology.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-semibold transition">
              Explore My Work
            </button>

            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-full transition">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <Image
            src="/images/profile.jpg"
            alt="Bhishma Raaz"
            width={420}
            height={420}
            className="rounded-full border-4 border-blue-500 shadow-2xl"
            priority
          />
        </div>

      </div>
    </section>
  );
}