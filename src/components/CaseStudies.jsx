import { Briefcase, Star } from 'lucide-react';

const cases = [
  {
    logo: 'Apex Systems',
    title: 'Realtime analytics at petabyte scale',
    impact: '99.99% uptime • 3x faster insights • 42% cost reduction',
  },
  {
    logo: 'Nimbus Bank',
    title: 'Zero-trust modernization for core banking',
    impact: 'Passed PCI-DSS in 6 weeks • Reduced fraud by 28%',
  },
  {
    logo: 'Helix Health',
    title: 'HIPAA-compliant data mesh for AI',
    impact: 'Enabled 15 new models • Cut ETL time by 70%'
  },
];

export default function CaseStudies() {
  return (
    <section className="relative bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-start justify-between gap-6 flex-col sm:flex-row">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">
              <Briefcase className="h-4 w-4" />
              Proven outcomes
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">Case studies</h2>
          </div>
          <p className="max-w-xl text-slate-300">We deliver measurable impact across industries — from finance to healthcare to SaaS platforms.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <article key={c.title} className="group rounded-2xl border border-white/10 bg-slate-900/40 p-6 ring-1 ring-inset ring-white/5 hover:ring-cyan-500/30">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-300">{c.logo}</span>
                <Star className="h-4 w-4 text-yellow-400/80" />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{c.impact}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
