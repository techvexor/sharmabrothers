import React from 'react';
import { Phone, FileText, ChevronDown, Shield, Truck, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebb6681?w=1600&q=80"
          alt="Industrial warehouse"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        {/* Metallic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-1.5 mb-6">
            <Shield size={14} className="text-accent" />
            <span className="text-accent text-xs font-semibold tracking-wide uppercase">
              GST Registered · Bulk Orders Welcome
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Complete Industrial &{' '}
            <span className="text-accent">Hardware Solutions</span>{' '}
            Under One Roof
          </h1>

          <p className="text-lg sm:text-xl text-surface-100 mb-8 leading-relaxed max-w-2xl">
            Bulk Supplier of Welding, Safety, Tools & Industrial Consumables in
            Jewar & Nearby Industrial Areas. Serving Factories, Contractors &
            Construction Companies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-100 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5"
            >
              <FileText size={20} />
              Get Bulk Quote
            </a>
            <a
              href="tel:+919999999999"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl text-lg font-bold transition-all hover:-translate-y-0.5"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <Award size={20} className="text-accent flex-shrink-0" />
              <span className="text-white/80 text-sm font-medium">Genuine Industrial Brands</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <Truck size={20} className="text-accent flex-shrink-0" />
              <span className="text-white/80 text-sm font-medium">Fast Local Delivery</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <Shield size={20} className="text-accent flex-shrink-0" />
              <span className="text-white/80 text-sm font-medium">GSTIN: 09MIZPK9114N1ZX</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
