import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="hero" className="relative h-[85vh] min-h-[560px] w-full overflow-hidden bg-slate-950">
      {/* Spline scene: Tech Cube as main focus */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.18),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/10 to-slate-950/90" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">
          <span className="inline-block h-2 w-2 rounded-full bg-cyan-400" />
          The Tech Cube Platform
        </div>
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 bg-clip-text text-transparent">
          Modular intelligence at the core of your stack
        </h1>
        <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-300">
          A secure, scalable foundation built around a dynamic 3D tech cube — orchestrating cloud, AI, and data services with precision.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
          <a href="#cta" className="inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-600 to-indigo-600 px-6 py-3 text-white font-medium shadow-lg shadow-blue-950/40 hover:from-cyan-500 hover:to-indigo-500">
            Launch your initiative
          </a>
          <a href="#features" className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-slate-200 hover:bg-white/10">
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
