import React from 'react';
import {
  ShieldCheck,
  Award,
  IndianRupee,
  Truck,
  Store,
  Users,
} from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'GST Registered Supplier',
    desc: 'Fully compliant with GST norms. Proper invoicing for all B2B transactions.',
  },
  {
    icon: Award,
    title: 'Genuine Industrial Brands',
    desc: 'We stock only trusted brands like NBC, Taparia, Bosch, SKF, Norton and more.',
  },
  {
    icon: IndianRupee,
    title: 'Competitive Wholesale Pricing',
    desc: 'Best bulk rates for factories, contractors and industrial clients.',
  },
  {
    icon: Truck,
    title: 'Fast Local Delivery',
    desc: 'Quick dispatch & delivery across Jewar, Greater Noida & Yamuna Expressway zone.',
  },
  {
    icon: Store,
    title: 'One-Stop Hardware Store',
    desc: 'All your industrial needs under one roof — from welding to safety to tools.',
  },
  {
    icon: Users,
    title: 'Serving Factories & Contractors',
    desc: 'Trusted by construction companies, fabrication units & real estate developers.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-accent text-xs font-semibold tracking-wide uppercase">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-primary mb-4 leading-tight">
            Why <span className="text-accent">Sharma Brothers</span>?
          </h2>
          <p className="text-secondary text-lg">
            Trusted by industrial clients across Jewar and beyond for reliability,
            quality and competitive pricing.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, i) => (
            <div
              key={item.title}
              className="relative group bg-surface rounded-2xl p-8 hover:bg-primary transition-all duration-300 border border-gray-100 hover:border-primary"
            >
              <div className="w-14 h-14 bg-accent/10 group-hover:bg-accent rounded-xl flex items-center justify-center mb-5 transition-colors">
                <item.icon
                  size={24}
                  className="text-accent group-hover:text-white transition-colors"
                />
              </div>
              <h3 className="text-primary group-hover:text-white font-bold text-lg mb-2 transition-colors">
                {item.title}
              </h3>
              <p className="text-secondary group-hover:text-white/70 text-sm leading-relaxed transition-colors">
                {item.desc}
              </p>

              {/* Number */}
              <span className="absolute top-6 right-6 text-5xl font-black text-gray-100 group-hover:text-white/5 transition-colors">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>

        {/* Serving Industrial Clients Ribbon */}
        <div className="mt-16 flex flex-wrap justify-center gap-4 text-sm">
          {[
            'Factories',
            'Contractors',
            'Construction Companies',
            'Fabrication Units',
            'Industrial Workshops',
            'Real Estate Developers',
          ].map((client) => (
            <span
              key={client}
              className="bg-primary/5 text-primary px-5 py-2.5 rounded-full font-medium border border-primary/10"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
