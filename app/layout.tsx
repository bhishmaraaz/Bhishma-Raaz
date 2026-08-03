import "./globals.css";

export const metadata = {
  title: "Bhishma Raaz Dhamala | Secondary Math Teacher & Researcher",
  description:
    "Official website of Bhishma Raaz Dhamala - Secondary Level Mathematics Teacher, M.Ed. Researcher, and ICT Enthusiast based in Dudhauli, Nepal.",
  keywords: [
    "Bhishma Raaz",
    "Bhishma Raaz Dhamala",
    "Mathematics Teacher Nepal",
    "Saraswati Secondary School Dakaha",
    "M.Ed. Thesis Mathematics",
    "GeoGebra Nepal",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}