import React from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "The service at Infiniti is absolutely unparalleled. My designer woolens and tailored silks return with a fresh texture and color intensity that is better than brand new.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop",
      name: "Charlotte Rose",
      role: "Creative Director, Atelier V"
    }
  ];

  const current = testimonials[0];

  const brands = [
    "Sartorial", "Vogue Care", "Silk Union", "Linen Lab", "EcoCert"
  ];

  return (
    <section className="testimonials-section">
      <div className="accent-bar"></div>
      <span className="section-subtitle">Testimonials</span>

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
