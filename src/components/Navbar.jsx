import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenMenu }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <a href="#home" className="nav-logo" aria-label="Infiniti Home">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 7c-2.3 0-4.3 1.8-5 4.1C11.3 8.8 9.3 7 7 7c-3.3 0-6 2.7-6 6s2.7 6 6 6c2.3 0 4.3-1.8 5-4.1.7 2.3 2.7 4.1 5 4.1 3.3 0 6-2.7 6-6s-2.7-6-6-6zm-10 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm10 0c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/>
        </svg>
        <span>Infinity</span>
      </a>

      <button className="menu-trigger" onClick={onOpenMenu} aria-label="Open menu">
        <span className="menu-trigger-text">Menu</span>
        <div className="menu-trigger-bars">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </header>
  );
}
