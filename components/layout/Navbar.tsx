export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-400">
          Bhishma Raaz
        </h1>

        <ul className="flex gap-6">
          <li>Home</li>
          <li>About</li>
          <li>Research</li>
          <li>Resources</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}