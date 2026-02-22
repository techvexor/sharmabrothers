import React, { useState } from 'react';
import {
  Phone,
  MapPin,
  Mail,
  Clock,
  Send,
  ShieldCheck,
  MessageCircle,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    requirement: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', company: '', phone: '', requirement: '' });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-4 py-1.5 mb-4">
            <Phone size={14} className="text-accent" />
            <span className="text-accent text-xs font-semibold tracking-wide uppercase">
              Contact Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-primary mb-4 leading-tight">
            Need Industrial Supplies?{' '}
            <span className="text-accent">Get a Fast Bulk Quote Today!</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info Cards */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-surface rounded-2xl p-6 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-primary font-bold mb-1">Call Us</h4>
                  <a
                    href="tel:+919997259734"
                    className="text-secondary hover:text-accent transition-colors text-sm"
                  >
                    +91 99972 59734
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-surface rounded-2xl p-6 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-primary font-bold mb-1">WhatsApp</h4>
                  <a
                    href="https://wa.me/919997259734"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-accent transition-colors text-sm"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-surface rounded-2xl p-6 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-primary font-bold mb-1">Address</h4>
                  <p className="text-secondary text-sm leading-relaxed">
                    Moh. Rawatiya, Near Dauji Temple,
                    <br />
                    Jewar, Gautam Buddha Nagar,
                    <br />
                    Uttar Pradesh – 203135
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-surface rounded-2xl p-6 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={20} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-primary font-bold mb-1">GSTIN</h4>
                  <p className="text-secondary text-sm font-mono">
                    09MIZPK9114N1ZX
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-surface rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-6">
                Send Your Inquiry
              </h3>

              {submitted && (
                <div className="mb-6 bg-green-50 border border-green-200 text-green-700 rounded-xl p-4 text-sm font-medium">
                  ✅ Thank you! We'll get back to you soon with a quote.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-primary font-medium text-sm mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-primary font-medium text-sm mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder="Your company"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-primary font-medium text-sm mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-primary font-medium text-sm mb-1.5">
                    Your Requirement *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.requirement}
                    onChange={(e) =>
                      setFormData({ ...formData, requirement: e.target.value })
                    }
                    placeholder="Describe the products you need, quantity, delivery timeline..."
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-100 text-white py-4 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent/25 hover:shadow-accent/40"
                >
                  <Send size={18} />
                  Submit Inquiry & Get Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
