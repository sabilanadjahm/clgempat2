"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-4 fixed top-0 w-full shadow-xl z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <div className="text-2xl font-bold">📖 Skripsi Online</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg font-semibold">
          {["Bab1", "Bab2", "Bab3", "Bab4", "Bab5"].map((bab) => (
            <li key={bab} className="hover:text-yellow-300 cursor-pointer" onClick={() => scrollToSection(bab)}>
              {bab}
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-indigo-900 text-white py-3">
          <ul className="flex flex-col items-center space-y-3">
            {["Bab1", "Bab2", "Bab3", "Bab4", "Bab5"].map((bab) => (
              <li key={bab} className="hover:text-yellow-300 cursor-pointer" onClick={() => scrollToSection(bab)}>
                {bab}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
