import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your pickup request, ${formData.name}! We will reach out to you shortly.`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-intro">
        <div className="accent-bar"></div>
        <span className="section-subtitle">Contact</span>
        <h2>Get In Touch.</h2>
        <p>
          Ready to schedule a pickup or have queries about specialized fabric care? Send us a message or contact our luxury customer service.
        </p>
      </div>

      <div className="contact-grid">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <input 
            type="text" 
            name="name" 
            placeholder="YOUR NAME" 
            className="contact-input" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
          <div className="contact-form-row">
            <input 
              type="email" 
              name="email" 
              placeholder="YOUR EMAIL" 
              className="contact-input" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
            <input 
              type="text" 
              name="subject" 
              placeholder="SUBJECT / SERVICE TYPE" 
              className="contact-input" 
              value={formData.subject}
              onChange={handleChange}
              required 
            />
          </div>
          <textarea 
            name="message" 
            placeholder="YOUR MESSAGE (Include address for pickup if applicable)" 
            className="contact-textarea" 
            value={formData.message}
            onChange={handleChange}
            required 
          ></textarea>
          <button type="submit" className="btn-gold" style={{ alignSelf: 'flex-start', width: '100%', marginTop: '10px' }}>
            Submit Request
          </button>
        </form>

        {/* Contact Information */}
        <div className="contact-info-block">
          <div className="info-item">
            <h4>Where to Find Us</h4>
            <p>
              Vibhav Khand, Gomti Nagar<br />
              Lucknow, UP 226010
            </p>
          </div>

          <div className="info-item">
            <h4>Email Us</h4>
            <p>
              <a href="mailto:no-reply@infinitiservices.com">no-reply@infinitiservices.com</a><br />
              <a href="mailto:support@infinitiservices.com">support@infinitiservices.com</a>
            </p>
          </div>

          <div className="info-item">
            <h4>Call Us</h4>
            <p>
              Phone: (+91) 9335935072<br />
              Mobile: (+91) 9335935072<br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
