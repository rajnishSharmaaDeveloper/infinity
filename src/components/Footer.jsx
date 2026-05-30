import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Thank you for subscribing to Infiniti fabric care guides!");
    e.target.reset();
  };

  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* About column */}
        <div className="footer-col">
          <h3>About Infiniti</h3>
          <p>
            Infiniti Services delivers five-star, luxury laundry and organic fabric preservation directly to your doorstep. Care that elevates, preserves, and honors every thread of your collection.
          </p>
        </div>

        {/* Links column */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-col footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#works">Works</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter column */}
        <div className="footer-col">
          <h3>Get Notified</h3>
          <p>
            Subscribe to get premium fabric care guides, seasonal garment storage tips, and priority valet valet slot releases.
          </p>
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="newsletter-input" 
              required 
            />
            <button type="submit" className="newsletter-btn" aria-label="Subscribe">
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div>
          &copy; Copyright Infiniti Services 2026.
        </div>
        <div>
          Distributed by <a href="#home" className="text-gold">Infiniti Care</a> | Design Inspired by styleshout.
        </div>
      </div>
    </footer>
  );
}
