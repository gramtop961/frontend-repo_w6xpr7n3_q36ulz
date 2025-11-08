import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between rounded-b-xl bg-slate-950/70 backdrop-blur-md ring-1 ring-white/10">
          <div className="flex items-center gap-3 px-4">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-500 to-indigo-500" />
            <span className="text-white font-semibold tracking-tight">TechCube</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 px-4">
            <a className="text-sm text-slate-300 hover:text-white" href="#features">Solutions</a>
            <a className="text-sm text-slate-300 hover:text-white" href="#about">Why Cube</a>
            <a className="text-sm text-slate-300 hover:text-white" href="#cases">Case Studies</a>
            <a className="inline-flex items-center rounded-md bg-gradient-to-r from-cyan-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow hover:from-cyan-500 hover:to-indigo-500" href="#cta">Get Started</a>
          </nav>
          <button
            className="md:hidden mr-3 inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-white/5"
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
            <a className="block rounded-md bg-gradient-to-r from-cyan-600 to-indigo-600 px-3 py-2 text-white" href="#cta" onClick={() => setOpen(false)}>Get Started</a>
          </div>
        </div>
      )}
    </header>
  );
}
