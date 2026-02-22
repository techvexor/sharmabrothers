import React from 'react';
import { MessageCircle, Phone, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919999999999?text=Hi%20Sharma%20Brothers%2C%20I%20need%20a%20quote%20for%20industrial%20supplies."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-xl whatsapp-pulse transition-all hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} className="text-white" />
      </a>

      {/* Click to Call */}
      <a
        href="tel:+919999999999"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-accent hover:bg-accent-100 rounded-full flex items-center justify-center shadow-xl transition-all hover:scale-110"
        aria-label="Call Now"
      >
        <Phone size={24} className="text-white" />
      </a>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-24 right-6 z-50 w-10 h-10 bg-primary/80 hover:bg-primary rounded-full flex items-center justify-center shadow-lg transition-all"
          aria-label="Scroll to top"
        >
          <ChevronUp size={20} className="text-white" />
        </button>
      )}
    </>
  );
}
