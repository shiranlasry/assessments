import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <Services />
      <About />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
