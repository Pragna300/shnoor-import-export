import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Solutions from '../components/Solutions';
import Trust from '../components/Trust';
import TrackingBanner from '../components/TrackingBanner';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen scroll-smooth">
      <Navbar />
      <Hero />
      <Services />
      <Solutions />
      <Trust />
      <TrackingBanner />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
