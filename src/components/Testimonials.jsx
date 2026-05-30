import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "To become the most trusted and convenient laundry service, delivering exceptional garment care while saving our customers time and effort through reliable, affordable, and eco-friendly solutions.",
      avatar: `${import.meta.env.BASE_URL}munna.jpg`,
      name: "Munna Gupta",
      role: "Founder, Infinity"
    }
  ];

  const current = testimonials[0];

  const brands = [
    "Sartorial", "Vogue Care", "Silk Union", "Linen Lab", "EcoCert"
  ];

  return (
    <section className="testimonials-section">
      <div className="accent-bar"></div>
      <span className="section-subtitle">Vision</span>

      <div className="testimonial-quote">
        <p>{current.quote}</p>
      </div>

      <div className="testimonial-author">
        <img 
          src={current.avatar} 
          alt={current.name} 
          className="testimonial-avatar"
          loading="lazy"
        />
        <div className="testimonial-name">
          {current.name}
          <div className="testimonial-title">{current.role}</div>
        </div>
      </div>

      {/* Brand Partners / Certifications */}
      <div className="partner-logos">
        {brands.map((brand, idx) => (
          <div key={idx} className="partner-logo">
            {brand}<span>.</span>
          </div>
        ))}
      </div>
    </section>
  );
}
