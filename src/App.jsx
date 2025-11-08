import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AboutCube from './components/AboutCube';
import CaseStudies from './components/CaseStudies';
import CTA from './components/CTA';

function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-500 to-indigo-500" />
          <div>
            <p className="text-white font-semibold">TechCube</p>
            <p className="text-slate-400 text-sm">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
        <div className="text-slate-400 text-sm">
          Built for scale — security, reliability, and performance first.
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-inter">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <AboutCube />
        <CaseStudies />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
