"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 transition-all duration-300 border-b ${
      scrolled
        ? "bg-[#030712]/90 border-white/10 backdrop-blur-xl"
        : "bg-transparent border-transparent"
    }`}>

      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 font-bold text-lg">
        <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xs font-mono font-bold">
          CSI
        </div>
        <span className="font-bold text-white">CSI <span className="text-cyan-400">Chapter</span></span>
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-1 list-none">
        {["Events", "Projects", "Team", "Blog"].map((item) => (
          <li key={item}>
            <Link href={`#${item.toLowerCase()}`} className="px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all">
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="hidden md:flex items-center gap-3">
        <Link href="#" className="px-4 py-2 rounded-lg border border-white/10 text-sm text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all">
          Sign in
        </Link>
        <Link href="#join" className="px-4 py-2 rounded-lg bg-cyan-500 text-black text-sm font-bold hover:bg-cyan-400 transition-all">
          Join us →
        </Link>
      </div>

      {/* Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-1"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`block w-5 h-0.5 bg-slate-400 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-5 h-0.5 bg-slate-400 transition-all ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-5 h-0.5 bg-slate-400 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#030712]/95 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col gap-2 md:hidden">
          {["Events", "Projects", "Team", "Blog"].map((item) => (
            <Link key={item} href={`#${item.toLowerCase()}`} className="px-4 py-3 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all"
              onClick={() => setMenuOpen(false)}>
              {item}
            </Link>
          ))}
          <div className="flex gap-2 mt-2">
            <Link href="#" className="flex-1 text-center px-4 py-2 rounded-lg border border-white/10 text-sm text-slate-400">Sign in</Link>
            <Link href="#join" className="flex-1 text-center px-4 py-2 rounded-lg bg-cyan-500 text-black text-sm font-bold">Join us →</Link>
          </div>
        </div>
      )}
    </nav>
  );
}