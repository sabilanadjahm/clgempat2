"use client";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import StickyHeader from "./components/StickyHeader";
import Bab1 from "./bab/Bab1";
import Bab2 from "./bab/Bab2";
import Bab3 from "./bab/Bab3";
import Bab4 from "./bab/Bab4";
import Bab5 from "./bab/Bab5";

export default function Home() {
  const [activeBab, setActiveBab] = useState("Bab 1");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".bab-section");
      let currentBab = "Bab 1"; // Default ke Bab 1

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) {
          currentBab = section.getAttribute("data-title");
        }
      });

      setActiveBab(currentBab);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <StickyHeader title={activeBab} />

      <div className="pt-24 space-y-10">
        <Bab1 />
        <Bab2 />
        <Bab3 />
        <Bab4 />
        <Bab5 />
      </div>
    </div>
  );
}
