import React from 'react';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import ServiceArea from './ServiceArea';
import Process from './Process';
import SocialProof from './SocialProof';
import Portfolio from './Portfolio';
import Contact from './Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <ServiceArea />
      <Process />
      <SocialProof />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;
