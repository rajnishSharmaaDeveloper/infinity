import React from 'react';

export default function FeaturedProjects() {
  const projects = [
    {
      img: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=600&auto=format&fit=crop",
      category: "Wet Cleaning",
      title: "Flowing Silks & Satins"
    },
    {
      img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=600&auto=format&fit=crop",
      category: "Artisan Pressing",
      title: "Tailored Bespoke Suits"
    },
    {
      img: "https://images.unsplash.com/photo-1616627561950-9f746e330187?q=80&w=600&auto=format&fit=crop",
      category: "Fabric Care",
      title: "Premium Organic Linens"
    },
    {
      img: `${import.meta.env.BASE_URL}laundry-fold.jpg`,
      category: "Restoration",
      title: "Eco stain-lifting Solutions"
    },
    {
      img: `${import.meta.env.BASE_URL}laundry-stack.jpg`,
      category: "State of Art",
      title: "Advanced Wash Chemistry"
    },
    {
      img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=600&auto=format&fit=crop",
      category: "Premium Wardrobe",
      title: "Complete Fashion Care"
    }
  ];

  return (
    <section id="works" className="works-section">
      <div className="works-intro">
        <div className="accent-bar"></div>
        <span className="section-subtitle">Our Portfolio</span>
        <h2>Featured Care Projects.</h2>
        <p>
          Explore a curation of our pristine garment preservation successes. We handle every fabric with delicate craftsmanship and organic chemistry.
        </p>
      </div>

      <div className="gallery-grid">
        {projects.map((project, index) => (
          <div key={index} className="gallery-item">
            <img 
              src={project.img} 
              alt={project.title} 
              className="gallery-image"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <span className="gallery-overlay-subtitle">{project.category}</span>
              <h3 className="gallery-overlay-title">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
