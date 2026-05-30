import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for a more polished experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-navy-900 flex items-center justify-center z-50">
        <div className="text-center">
          <h1 className="font-serif text-5xl text-gold-500 mb-4 animate-pulse">AURUM</h1>
          <p className="text-white text-sm tracking-widest uppercase">Capital Partners</p>
          <div className="mt-8 w-32 h-1 bg-navy-700 mx-auto rounded-full overflow-hidden">
            <div className="h-full bg-gold-500 animate-loading"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
