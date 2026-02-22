import React from 'react';
import {
  CheckCircle,
  Building2,
  Users,
  Truck,
  Award,
  ShieldCheck,
} from 'lucide-react';

const highlights = [
  { icon: Building2, text: 'Trusted Local Supplier' },
  { icon: Truck, text: 'Bulk Orders Available' },
  { icon: ShieldCheck, text: 'Fast Supply' },
  { icon: Award, text: 'Quality Brands' },
  { icon: CheckCircle, text: 'Industrial Grade Materials' },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
                alt="Industrial tools and hardware"
                className="w-full h-[400px] object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-4 sm:right-4 bg-accent text-white rounded-xl px-6 py-4 shadow-xl">
              <p className="text-3xl font-black">10+</p>
              <p className="text-sm font-medium opacity-90">Years of Trust</p>
            </div>
            {/* Accent border */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-accent rounded-tl-2xl" />
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-1.5 mb-4">
              <span className="text-accent text-xs font-semibold tracking-wide uppercase">
                About Us
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-primary mb-6 leading-tight">
              Your Trusted Industrial{' '}
              <span className="text-accent">Hardware Partner</span>
            </h2>

            <p className="text-secondary text-lg leading-relaxed mb-8">
              <strong>SHARMA BROTHERS</strong> is a GST-registered industrial
              hardware and consumables supplier serving Jewar and nearby
              industrial zones. We provide high-quality tools, welding materials,
              safety equipment, bearings, and factory essentials at competitive
              bulk prices.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 bg-surface rounded-xl px-4 py-3"
                >
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon size={16} className="text-accent" />
                  </div>
                  <span className="text-primary font-medium text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl border border-primary/10">
              <ShieldCheck size={24} className="text-accent flex-shrink-0" />
              <div>
                <p className="text-primary font-bold text-sm">GST Registered Business</p>
                <p className="text-secondary text-xs">GSTIN: 09MIZPK9114N1ZX · Proprietorship</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
