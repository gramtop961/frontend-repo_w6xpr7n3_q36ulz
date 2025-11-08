import { Layers, Cpu, ShieldCheck, Server } from 'lucide-react';

const pillars = [
  {
    icon: Layers,
    title: 'Modular by design',
    desc: 'Composable services snap into the cube core — add capabilities without rewrites.'
  },
  {
    icon: Cpu,
    title: 'Intelligent orchestration',
    desc: 'Policies and AI-driven routing optimize cost, performance, and reliability.'
  },
  {
    icon: ShieldCheck,
    title: 'Security-first',
    desc: 'Zero-trust, encryption everywhere, and continuous compliance gates.'
  },
  {
    icon: Server,
    title: 'Cloud-native backbone',
    desc: 'Observability, IaC, and autoscaling across providers with the same interface.'
  }
];

export default function AboutCube() {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-950 py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Why the Tech Cube?</h2>
            <p className="mt-4 text-slate-300">
              The cube is our architectural metaphor: a resilient, modular core where each face represents a capability — compute, data, security, delivery, intelligence, and experience. Together, they form a balanced, scalable system.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {pillars.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-slate-900/40 p-5 ring-1 ring-inset ring-white/5">
                  <div className="mb-3 inline-flex rounded-xl bg-gradient-to-br from-cyan-600/20 to-indigo-600/20 p-3 ring-1 ring-white/10">
                    <Icon className="h-6 w-6 text-cyan-300" />
                  </div>
                  <h3 className="text-white font-semibold">{title}</h3>
                  <p className="mt-1 text-sm text-slate-300">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute -inset-10 -z-0 rounded-3xl bg-gradient-to-tr from-cyan-600/20 to-purple-600/20 blur-2xl" />
            <div className="relative z-10 aspect-square w-full rounded-3xl border border-white/10 bg-slate-900/40 p-8">
              <div className="flex h-full items-center justify-center">
                <div className="grid grid-cols-3 grid-rows-3 gap-2 w-full max-w-sm">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div key={i} className="aspect-square rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 ring-1 ring-white/10">
                      <div className="h-full w-full rounded-lg bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.12),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.12),transparent_40%)]" />
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-4 text-center text-sm text-slate-400">A visual of the cube’s modular grid — each block a scalable service.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
