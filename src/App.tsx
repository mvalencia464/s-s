import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ServiceArea from './components/ServiceArea';
import Process from './components/Process';
import SocialProof from './components/SocialProof';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <ServiceArea />
      <Process />
      <SocialProof />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;