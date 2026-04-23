"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 backdrop-blur-md bg-[var(--bg-base)]/80 border-b border-[var(--bg-surface)]">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false); }} className="text-lg md:text-xl font-medium tracking-tight text-[var(--brand-secondary)] shrink-0 hover:opacity-80 transition-opacity cursor-pointer">
          sushant<span className="text-[var(--brand-primary)]">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm font-medium hover:text-[var(--brand-primary)] transition-colors">About</a>
          <a href="#experience" className="text-sm font-medium hover:text-[var(--brand-primary)] transition-colors">Experience</a>
          <a href="#projects" className="text-sm font-medium hover:text-[var(--brand-primary)] transition-colors">Projects</a>
          <a href="#connect" className="text-sm font-medium hover:text-[var(--brand-primary)] transition-colors">Connect</a>
          <a href="/SushantSingh_Resume.pdf" target="_blank" rel="noreferrer" className="text-sm font-medium text-[var(--brand-secondary)] hover:opacity-80 transition-opacity">Résumé</a>
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-[var(--text-base)] focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-[var(--bg-surface)] pt-4 flex flex-col gap-4 max-w-6xl mx-auto">
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-sm font-medium hover:text-[var(--brand-primary)] transition-colors">About</a>
          <a href="#experience" onClick={() => setMenuOpen(false)} className="text-sm font-medium hover:text-[var(--brand-primary)] transition-colors">Experience</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="text-sm font-medium hover:text-[var(--brand-primary)] transition-colors">Projects</a>
          <a href="#connect" onClick={() => setMenuOpen(false)} className="text-sm font-medium hover:text-[var(--brand-primary)] transition-colors">Connect</a>
          <a href="/SushantSingh_Resume.pdf" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)} className="text-sm font-medium text-[var(--brand-secondary)] hover:opacity-80 transition-opacity">Résumé</a>
        </div>
      )}
    </nav>
  );
}
