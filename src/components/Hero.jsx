import React from 'react';

export default function Hero() {
  // A premium golden architectural ceiling image from Unsplash that mimics the leading lines and golden tones of the user's mockup
  const bgImage = "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1974&auto=format&fit=crop";

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
          We Craft Pristine<br />Garment Experiences.
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
