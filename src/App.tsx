import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import ServiceArea from './components/ServiceArea';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <WhyChooseUs />
      <ServiceArea />
      <Contact />
      <Footer />
      <FloatingButtons />

      {/* JSON-LD Schema Markup for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Sharma Brothers',
            description:
              'GST Registered Industrial Hardware & Welding Supplier in Jewar. Bulk Supply of Bearings, Safety Equipment, Cutting Wheels, Tools & Factory Consumables.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Moh. Rawatiya, Near Dauji Temple',
              addressLocality: 'Jewar',
              addressRegion: 'Uttar Pradesh',
              postalCode: '203135',
              addressCountry: 'IN',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 28.12,
              longitude: 77.54,
            },
            telephone: '+919999999999',
            priceRange: '$$',
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
              ],
              opens: '09:00',
              closes: '20:00',
            },
          }),
        }}
      />
    </div>
  );
}
