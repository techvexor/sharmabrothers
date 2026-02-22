import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Phone,
  MapPin,
  ChevronUp,
} from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Service Area', href: '#service-area' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-primary/95 backdrop-blur-md shadow-xl'
          : 'bg-primary'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-lg">SB</span>
            </div>
            <div>
              <h1 className="text-white font-bold text-lg leading-tight tracking-tight">
                SHARMA BROTHERS
              </h1>
              <p className="text-surface-100 text-[10px] tracking-widest uppercase">
                Industrial & Hardware
              </p>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-surface-50 hover:text-accent px-3 py-2 text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+919999999999"
              className="ml-4 bg-accent hover:bg-accent-100 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2"
            >
              <Phone size={14} />
              Call Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-primary border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-surface-50 hover:text-accent hover:bg-white/5 px-4 py-3 rounded-lg text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+919999999999"
              className="block mt-3 bg-accent hover:bg-accent-100 text-white px-4 py-3 rounded-lg text-sm font-semibold text-center transition-all"
            >
              <Phone size={14} className="inline mr-2" />
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
