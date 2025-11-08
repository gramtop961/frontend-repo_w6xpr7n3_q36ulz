import { Rocket, ShieldCheck, Cloud, Cpu } from 'lucide-react';

const items = [
  {
    icon: Rocket,
    title: 'Product Engineering',
    desc: 'Design, build, and scale mission-critical products with clean architectures and rapid iteration.',
  },
  { icon: ShieldCheck, title: 'Security by Design', desc: 'Zero-trust patterns, threat modeling, and continuous review built into every layer.' },
  { icon: Cloud, title: 'Cloud & DevOps', desc: 'Infrastructure as code, observability, and cost-optimized deployments across clouds.' },
  { icon: Cpu, title: 'AI & Data', desc: 'From data pipelines to applied AI. Unlock insights and automation responsibly.' },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.08),transparent_60%)]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Enterprise-grade solutions</h2>
          <p className="mt-4 text-slate-300">We partner with teams to deliver dependable systems with measurable outcomes.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-slate-900/40 p-6 ring-1 ring-inset ring-white/5 hover:ring-cyan-500/30">
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-cyan-600/20 to-indigo-600/20 p-3 ring-1 ring-white/10">
                <Icon className="h-6 w-6 text-cyan-300" />
              </div>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
