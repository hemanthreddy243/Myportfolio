import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css'; // Add the CSS styling

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email via EmailJS
    emailjs
      .sendForm('service_nmsuk4m', 'template_79bapre', e.target, '0CeXVXh4uU2_Tx8fc')
      .then(
        (result) => {
          console.log(result.text);
          alert('Message Sent Successfully');
        },
        (error) => {
          console.log(error.text);
          alert('Error: ' + error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact-container">
      <h1 className="sectionTitle">Contact</h1>
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
