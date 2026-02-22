import React from 'react';
import { Phone, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="metallic-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg">SB</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">SHARMA BROTHERS</h3>
                <p className="text-white/50 text-[10px] tracking-widest uppercase">
                  Industrial & Hardware
                </p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              GST-registered industrial hardware and consumables supplier
              serving Jewar and nearby industrial zones since 2014.
            </p>
            <div className="flex items-center gap-2 text-xs text-white/40">
              <ShieldCheck size={14} />
              GSTIN: 09MIZPK9114N1ZX
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-white/80">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#hero' },
                { label: 'About Us', href: '#about' },
                { label: 'Products', href: '#products' },
                { label: 'Why Choose Us', href: '#why-us' },
                { label: 'Service Area', href: '#service-area' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-white/80">
              Products
            </h4>
            <ul className="space-y-3">
              {[
                'Welding Materials',
                'Cutting & Grinding',
                'Hand Tools',
                'Safety Equipment',
                'Industrial Components',
                'Paint & Packaging',
              ].map((cat) => (
                <li key={cat}>
                  <a
                    href="#products"
                    className="text-white/50 hover:text-accent text-sm transition-colors"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-5 text-white/80">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-0.5 flex-shrink-0" />
                <p className="text-white/50 text-sm leading-relaxed">
                  Moh. Rawatiya, Near Dauji Temple, Jewar,
                  <br />
                  Gautam Buddha Nagar, UP – 203135
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-accent flex-shrink-0" />
                <a
                  href="tel:+919999999999"
                  className="text-white/50 hover:text-accent text-sm transition-colors"
                >
                  +91 99999 99999
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Sharma Brothers. All rights reserved.
            Proprietor: Mohit Kumar
          </p>
          <a
            href="#hero"
            className="flex items-center gap-2 text-white/40 hover:text-accent text-xs transition-colors"
          >
            Back to top
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
