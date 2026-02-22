import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const areas = [
  { name: 'Jewar', desc: 'Primary Service Area' },
  { name: 'Greater Noida', desc: 'Industrial Zones' },
  { name: 'Yamuna Expressway', desc: 'Industrial Zone' },
  { name: 'Gautam Buddha Nagar', desc: 'Full District Coverage' },
  { name: 'Construction Sites', desc: 'Nearby Areas' },
  { name: 'Factory Zones', desc: 'Industrial Belts' },
];

export default function ServiceArea() {
  return (
    <section id="service-area" className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-1.5 mb-4">
              <MapPin size={14} className="text-accent" />
              <span className="text-accent text-xs font-semibold tracking-wide uppercase">
                Service Area
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-primary mb-4 leading-tight">
              Delivering Across{' '}
              <span className="text-accent">Jewar & Beyond</span>
            </h2>

            <p className="text-secondary text-lg mb-8 leading-relaxed">
              We serve industrial clients across Jewar, Greater Noida, Yamuna
              Expressway Industrial Zone, and the entire Gautam Buddha Nagar
              district. Fast delivery to construction sites and factory areas.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {areas.map((area) => (
                <div
                  key={area.name}
                  className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 shadow-sm"
                >
                  <Navigation
                    size={16}
                    className="text-accent mt-0.5 flex-shrink-0"
                  />
                  <div>
                    <p className="text-primary font-semibold text-sm">{area.name}</p>
                    <p className="text-secondary text-xs">{area.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              title="Sharma Brothers Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28128.073925088456!2d77.54!3d28.12!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43e000001%3A0x1c0e3e4baf943b38!2sJewar%2C%20Uttar%20Pradesh%20203135!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
