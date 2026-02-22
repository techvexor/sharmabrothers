import React, { useState, useEffect, useCallback } from 'react';
import {
  Phone,
  FileText,
  ChevronDown,
  Shield,
  Truck,
  Award,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=85',
    alt: 'Industrial warehouse with hardware supplies',
    title: 'Complete Industrial',
    highlight: 'Hardware Solutions',
    description: 'Bulk Supplier of Quality Industrial Products',
  },
  {
    image:
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=85',
    alt: 'Welding and industrial tools',
    title: 'Premium Welding &',
    highlight: 'Safety Equipment',
    description: 'Top-Quality Products for Every Project',
  },
  {
    image:
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebb6681?w=1920&q=85',
    alt: 'Factory and construction equipment',
    title: 'Trusted by',
    highlight: 'Factories & Contractors',
    description: 'Reliable Supply & Fast Local Delivery',
  },
  {
    image:
      'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1920&q=85',
    alt: 'Bearings and industrial parts',
    title: 'Bearings, Tools &',
    highlight: 'Industrial Consumables',
    description: 'Competitive Wholesale Prices & Quality Assured',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const goToSlide = useCallback(
    (index: number, dir: 'left' | 'right' = 'right') => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setDirection(dir);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning]
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length, 'right');
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(
      (currentSlide - 1 + slides.length) % slides.length,
      'left'
    );
  }, [currentSlide, goToSlide]);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-all duration-700 ease-in-out"
          style={{
            opacity: currentSlide === index ? 1 : 0,
            transform:
              currentSlide === index
                ? 'scale(1)'
                : direction === 'right'
                ? 'scale(1.08)'
                : 'scale(0.95)',
            zIndex: currentSlide === index ? 1 : 0,
          }}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Enhanced Gradient Overlays - More transparent for better image visibility */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-primary/65 via-primary/35 to-transparent" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-primary/20 via-primary/30 to-primary/65" />

      {/* Animated Particle Dots */}
      <div className="absolute inset-0 z-[3] overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out ${
                Math.random() * 2
              }s infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Slide Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-accent/80 text-white border border-white/20 hover:border-accent rounded-full p-2 md:p-3 transition-all duration-300 backdrop-blur-sm group"
        aria-label="Previous slide"
      >
        <ChevronLeft
          size={24}
          className="group-hover:scale-110 transition-transform"
        />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-accent/80 text-white border border-white/20 hover:border-accent rounded-full p-2 md:p-3 transition-all duration-300 backdrop-blur-sm group"
        aria-label="Next slide"
      >
        <ChevronRight
          size={24}
          className="group-hover:scale-110 transition-transform"
        />
      </button>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 bg-accent/25 border border-accent/40 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm hover:bg-accent/35 transition-all"
            style={{ animation: 'fadeInUp 0.6s ease-out' }}
          >
            <Shield size={14} className="text-accent" />
            <span className="text-accent text-xs font-semibold tracking-wide uppercase">
              GST Registered · Bulk Orders Welcome
            </span>
          </div>

          {/* Dynamic Slide Text - Minimal and Clean */}
          {slides.map((slide, index) => (
            <div
              key={index}
              className="transition-all duration-500"
              style={{
                display: currentSlide === index ? 'block' : 'none',
                animation:
                  currentSlide === index ? 'fadeInUp 0.6s ease-out' : 'none',
              }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
                {slide.title}{' '}
                <span className="relative inline-block">
                  <span className="text-accent">{slide.highlight}</span>
                  <span className="absolute -bottom-3 left-0 w-full h-1.5 bg-gradient-to-r from-accent via-accent/70 to-transparent rounded-full" />
                </span>
              </h1>

              <p className="text-xl sm:text-2xl text-white/90 mb-8 leading-relaxed font-light">
                {slide.description}
              </p>
            </div>
          ))}

          {/* CTA Buttons - Enhanced Styling */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-12"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-accent to-accent-100 hover:from-accent-100 hover:to-accent text-white px-10 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-accent/35 hover:shadow-accent/50 hover:-translate-y-1 hover:scale-[1.03]"
            >
              <FileText
                size={20}
                className="group-hover:rotate-6 transition-transform"
              />
              Get Bulk Quote
            </a>
            <a
              href="tel:+919997259734"
              className="group inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border-2 border-white/30 hover:border-white/50 px-10 py-4 rounded-xl text-lg font-bold transition-all hover:-translate-y-1 hover:scale-[1.03] backdrop-blur-md"
            >
              <Phone
                size={20}
                className="group-hover:animate-pulse transition-transform"
              />
              Call Now
            </a>
          </div>

          {/* Trust Indicators - Enhanced */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            style={{ animation: 'fadeInUp 1s ease-out 0.4s both' }}
          >
            <div className="flex items-center gap-3 bg-white/8 border border-white/15 rounded-lg px-4 py-3 backdrop-blur-md hover:bg-white/12 hover:border-accent/40 transition-all duration-300 group">
              <Award
                size={20}
                className="text-accent flex-shrink-0 group-hover:scale-110 transition-transform"
              />
              <span className="text-white/85 text-sm font-medium group-hover:text-white transition-colors">
                Genuine Brands
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white/8 border border-white/15 rounded-lg px-4 py-3 backdrop-blur-md hover:bg-white/12 hover:border-accent/40 transition-all duration-300 group">
              <Truck
                size={20}
                className="text-accent flex-shrink-0 group-hover:scale-110 transition-transform"
              />
              <span className="text-white/85 text-sm font-medium group-hover:text-white transition-colors">
                Fast Delivery
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white/8 border border-white/15 rounded-lg px-4 py-3 backdrop-blur-md hover:bg-white/12 hover:border-accent/40 transition-all duration-300 group">
              <Shield
                size={20}
                className="text-accent flex-shrink-0 group-hover:scale-110 transition-transform"
              />
              <span className="text-white/85 text-sm font-medium group-hover:text-white transition-colors">
                GST: 09MIZPK9114N1ZX
              </span>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex items-center gap-3 mt-12 justify-start">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() =>
                goToSlide(
                  index,
                  index > currentSlide ? 'right' : 'left'
                )
              }
              className={`relative h-2 rounded-full transition-all duration-500 ${
                currentSlide === index
                  ? 'w-10 bg-accent'
                  : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {currentSlide === index && (
                <span className="absolute inset-0 rounded-full bg-accent animate-pulse opacity-50" />
              )}
            </button>
          ))}
          <span className="text-white/40 text-xs font-mono ml-3">
            {String(currentSlide + 1).padStart(2, '0')} /{' '}
            {String(slides.length).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/50 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </a>

      {/* Keyframe Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.2;
          }
          100% {
            transform: translateY(-30px) translateX(15px);
            opacity: 0.6;
          }
        }
      `}</style>
    </section>
  );
}
