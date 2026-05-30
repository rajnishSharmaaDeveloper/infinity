import React from 'react';

export default function MenuDrawer({ isOpen, onClose }) {
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Works', href: '#works' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`drawer-backdrop ${isOpen ? 'open' : ''}`} 
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`menu-drawer ${isOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div className="drawer-logo">
            Infinity<span>.</span>
          </div>
          <button className="drawer-close" onClick={onClose} aria-label="Close menu">
            &times;
          </button>
        </div>

        <nav>
          <ul className="drawer-links">
            {links.map((link) => (
              <li key={link.label}>
                <a 
                  href={link.href} 
                  className="drawer-link"
                  onClick={onClose}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
