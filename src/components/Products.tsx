import React from 'react';
import {
  Flame,
  CircleDot,
  Wrench,
  HardHat,
  Building,
  Paintbrush,
  Ruler,
  Briefcase,
} from 'lucide-react';

const categories = [
  {
    icon: Flame,
    title: 'Welding Materials',
    description:
      'Welding Rods (Mangalam, Fastcoat, Vira), Diffuser, Nozzle, Gel, Holder & all welding consumables.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: CircleDot,
    title: 'Cutting & Grinding',
    description:
      'Cutting Wheels (Xtra Power, Norton, Bosch), Grinding Blades and abrasive discs for heavy duty use.',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Wrench,
    title: 'Hand Tools',
    description:
      'Premium tools from Taparia, Addison, Sandvik. Complete range of Nuts, Bolts, Screws & Fasteners.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: HardHat,
    title: 'Safety Equipment',
    description:
      'Helmets, Gloves (Knitted & Leather), Safety Glasses, Goggles, Uniforms for workplace safety.',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: Building,
    title: 'Industrial Components',
    description:
      'Bearings (NBC, ARB, SKF), Pulleys, Couplings, Belts, Flanges, Reducers, Gaskets, O-rings, Oil Seals.',
    color: 'from-purple-500 to-violet-500',
  },
  {
    icon: Paintbrush,
    title: 'Paint & Packaging',
    description:
      'Paints, Putty, Thinner, Electrical Tape, BOPP Packing Tape and all packaging solutions.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Ruler,
    title: 'Measuring Tools',
    description:
      'Precision Measuring Tape from Freemans, Markway and other trusted brands for accurate work.',
    color: 'from-cyan-500 to-sky-500',
  },
  {
    icon: Briefcase,
    title: 'Office & General Supplies',
    description:
      'Stationery Items, Old Cloth / Cleaning Materials, Hinges and general hardware accessories.',
    color: 'from-slate-500 to-gray-500',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-accent text-xs font-semibold tracking-wide uppercase">
              Our Products
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-primary mb-4 leading-tight">
            Industrial Product{' '}
            <span className="text-accent">Categories</span>
          </h2>
          <p className="text-secondary text-lg">
            From welding rods to safety gear — everything your factory, workshop
            or construction site needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
              >
                <cat.icon size={24} className="text-white" />
              </div>

              <h3 className="text-primary font-bold text-lg mb-2">{cat.title}</h3>
              <p className="text-secondary/80 text-sm leading-relaxed mb-5">
                {cat.description}
              </p>

              <a
                href="#contact"
                className="inline-flex items-center text-accent font-semibold text-sm hover:gap-3 gap-1.5 transition-all"
              >
                Request Quote
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
          ))}
        </div>

        {/* Bulk Order Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary to-primary-50 rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
              🏭 Bulk Orders Welcome
            </h3>
            <p className="text-white/70 mb-6 max-w-xl mx-auto">
              Special pricing for factories, contractors & bulk buyers. Get a
              custom quote for your industrial requirements.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-100 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-accent/25"
            >
              Get Custom Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
