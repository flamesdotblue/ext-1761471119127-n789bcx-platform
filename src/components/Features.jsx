import { Rocket, Sparkles, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Fast by default',
    desc: 'Vite + React + Tailwind deliver instant feedback and production-grade performance.',
  },
  {
    icon: Sparkles,
    title: 'Polished UI',
    desc: 'Thoughtful defaults, modern typography, and smooth microinteractions.',
  },
  {
    icon: Zap,
    title: 'Interactive cover',
    desc: 'The Spline hero responds to your input with a subtle, red ripple effect.',
  },
  {
    icon: Shield,
    title: 'Type-safe ready',
    desc: 'Easily extend with your favorite tooling and component libraries.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need to say hello</h2>
          <p className="mt-3 text-gray-700">Small, focused components with great defaults so you can launch faster.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                <f.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
