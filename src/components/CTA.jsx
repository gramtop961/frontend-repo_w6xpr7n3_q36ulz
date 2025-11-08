export default function CTA() {
  return (
    <section id="cta" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-600/20 via-indigo-600/20 to-purple-600/20 p-8 sm:p-12 ring-1 ring-white/10">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Ready to build with the Tech Cube?</h3>
            <p className="mt-3 text-slate-300">Share your goals and we’ll design a blueprint tailored to your roadmap.</p>
            <form className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <input className="col-span-1 rounded-lg border border-white/10 bg-slate-900/60 px-4 py-3 text-slate-200 placeholder-slate-400 outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Your name" />
              <input type="email" className="col-span-1 rounded-lg border border-white/10 bg-slate-900/60 px-4 py-3 text-slate-200 placeholder-slate-400 outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Work email" />
              <button type="submit" className="col-span-1 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-600 to-indigo-600 px-6 py-3 font-medium text-white shadow hover:from-cyan-500 hover:to-indigo-500">
                Request consult
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
