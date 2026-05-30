import React from 'react';
import { Droplet, ShieldCheck, Sparkles, Truck } from 'lucide-react';

export default function Services() {
  const servicesList = [
    {
      icon: <Droplet size={30} strokeWidth={1.5} />,
      title: "Eco Wet Wash",
      desc: "Delicate botanical detergent washes utilizing advanced computerized temperature and mechanical cycles to protect natural cottons, linens, and blended fabrics."
    },
    {
      icon: <ShieldCheck size={30} strokeWidth={1.5} />,
      title: "Artisan Dry Clean",
      desc: "Gentle solvent-free cleaning processes designed specifically for high-end couture, silks, fine wools, and tailored suits, ensuring absolute shape and fiber integrity."
    },
    {
      icon: <Sparkles size={30} strokeWidth={1.5} />,
      title: "Couture Restoration",
      desc: "Detailed fabric rejuvenation, expert stain lifting, custom leather & suede care, and delicate beadwork reinforcement by certified garment preservationists."
    },
    {
      icon: <Truck size={30} strokeWidth={1.5} />,
      title: "Express Valet",
      desc: "Convenient scheduled pickup and professional hanger delivery in custom breathing garment bags, bringing five-star service directly to your doorstep."
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="accent-bar"></div>
      <span className="section-subtitle">Services</span>
      
      <div className="services-intro">
        <h2>What We Do.</h2>
        <p>
          We provide high-precision, bespoke garment care solutions tailored to the unique fabric chemistry and preservation requirements of your luxury wardrobe.
        </p>
      </div>

      <div className="grid-4">
        {servicesList.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon-wrapper">
              {service.icon}
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
