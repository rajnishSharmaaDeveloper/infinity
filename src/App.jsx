import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MenuDrawer from './components/MenuDrawer';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import FeaturedProjects from './components/FeaturedProjects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => setIsMenuOpen(true);
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <>
      {/* Sticky Header Navigation */}
      <Navbar onOpenMenu={handleOpenMenu} />

      {/* Sliding Side Navigation Drawer */}
      <MenuDrawer isOpen={isMenuOpen} onClose={handleCloseMenu} />

      {/* Hero Section */}
      <Hero />

      {/* Main Sections */}
      <main>
        {/* About Section */}
        <About />

        {/* Services Section */}
        <Services />

        {/* Featured Projects Gallery */}
        <FeaturedProjects />

        {/* Testimonials */}
        <Testimonials />

        {/* Contact Form & Info */}
        <Contact />
      </main>

      {/* Multi-Column Footer */}
      <Footer />
    </>
  );
}

export default App;
