import { useState, useEffect } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors ${scrolled ? 'bg-slate-950/70 backdrop-blur-md' : 'bg-transparent'}`}>
      {/* Bottom gradient bar similar to premium game sites */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-cyan-500/40 via-blue-500/40 to-purple-500/40" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-b-xl ring-1 ring-white/10/0">
          <a href="#hero" className="flex items-center gap-3 px-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60 rounded-md">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-500 to-indigo-600 shadow-inner shadow-cyan-400/30" />
            <span className="text-white font-semibold tracking-tight">TechCube</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 px-2">
            <a className="text-sm text-slate-300 hover:text-white transition-colors" href="#features">Solutions</a>
            <a className="text-sm text-slate-300 hover:text-white transition-colors" href="#about">Why Cube</a>
            <a className="text-sm text-slate-300 hover:text-white transition-colors" href="#cases">Case Studies</a>
            <a className="text-sm text-slate-300 hover:text-white transition-colors" href="#cta">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3 pr-2">
            <a href="#cta" className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:bg-white/10 transition-colors">Explore</a>
            <a href="#cta" className="inline-flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:from-cyan-500 hover:to-indigo-500 transition-colors">Get Started</a>
          </div>

          <button
            className="md:hidden mr-1 inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-white/5"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-2 space-y-2 rounded-xl bg-slate-950/80 p-4 backdrop-blur-md ring-1 ring-white/10">
            <a className="block rounded-md px-3 py-2 text-slate-200 hover:bg-white/5" href="#features" onClick={() => setOpen(false)}>Solutions</a>
            <a className="block rounded-md px-3 py-2 text-slate-200 hover:bg-white/5" href="#about" onClick={() => setOpen(false)}>Why Cube</a>
            <a className="block rounded-md px-3 py-2 text-slate-200 hover:bg-white/5" href="#cases" onClick={() => setOpen(false)}>Case Studies</a>
            <a className="block rounded-md px-3 py-2 text-slate-200 hover:bg-white/5" href="#cta" onClick={() => setOpen(false)}>Contact</a>
            <div className="flex gap-2 pt-2">
              <a href="#cta" className="flex-1 inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:bg-white/10">Explore</a>
              <a href="#cta" className="flex-1 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-600 to-indigo-600 px-3 py-2 text-sm font-medium text-white">Get Started</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
