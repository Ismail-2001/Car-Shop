import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Services from './components/Services';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-neutral-200 font-sans selection:bg-gold-600 selection:text-black">
      <Navbar />
      <Hero />
      <Introduction />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;