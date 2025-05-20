import React, { useState } from 'react';


function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!'); // replace with real action
    console.log(form);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Your Full Name
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Your Phone Number
          <input
            type="tel"
            name="phone"
            placeholder="e.g. +65 9123 4567"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Your Email
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          How can we help you?
          <textarea
            name="message"
            placeholder="Write your message here…"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className="submit-button">
          SUBMIT
        </button>
      </form>
    </div>
  );
}

export default Contact;
