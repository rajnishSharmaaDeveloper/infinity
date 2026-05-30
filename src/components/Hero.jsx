import React from 'react';

export default function Hero() {
  const bgImage = `${import.meta.env.BASE_URL}hero-bg.jpg`;

  return (
    <section 
      id="home" 
      className="hero-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="hero-overlay"></div>

      {/* Social Links on Left */}
      <div className="social-left">
        <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">Fb</a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">Tw</a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">In</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">Li</a>
      </div>

      {/* Hero Core Content */}
      <div className="hero-content animate-fade-in">
        <span className="hero-subtitle">We Are Infiniti</span>
        <h1 className="hero-title">
          Expert Laundry Care<br />Delivered to Your Door.
        </h1>
        <a href="#contact" className="btn-outline">
          Book A Pickup
        </a>
      </div>

      {/* Scroll indicator on Right */}
      <div className="scroll-right">
        <span>Scroll Down</span>
      </div>
    </section>
  );
}
