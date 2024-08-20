import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section id="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange} 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange} 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleChange} 
        />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default ContactForm;
