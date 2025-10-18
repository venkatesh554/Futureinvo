import React, { useState } from 'react';
import './ContactForm.css';
import speak from "./Speak.png"
export default function ContactForm() {
  const owner = {
    name: 'FutureInvo',
    phone: '7981107131',
    email: 'Info@futureinvo.com',
  };

  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone' && value.replace(/\D/g, '').length > 10) return;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const err = {};
    if (!form.name.trim()) err.name = 'Name is required';
    if (!form.email.trim()) err.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = 'Email is invalid';
    if (!form.phone.trim()) err.phone = 'Phone is required';
    else if (form.phone.replace(/\D/g, '').length !== 10) err.phone = 'Phone number must be exactly 10 digits';
    if (!form.message.trim()) err.message = 'Message is required';
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      try {
        const key = 'contactFormSubmissions';
        const existing = JSON.parse(localStorage.getItem(key) || '[]');
        const entry = { ...form, submittedAt: new Date().toISOString() };
        existing.push(entry);
        localStorage.setItem(key, JSON.stringify(existing));
        setSubmitted(true);
        setForm({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setSubmitted(false), 4000);
      } catch (err) {
        console.error('Failed to save submission', err);
      }
    }
  };

  return (
    <div className="contact-form-wrapper contact-grid">
      <aside className="contact-card">
        <h3>Contact</h3>
        <p><strong>{owner.name}</strong></p>
        <p>Phone: <a href={`tel:${owner.phone}`}>{owner.phone}</a></p>
        {owner.email ? <p>Email: <a href={`mailto:${owner.email}`}>{owner.email}</a></p> : <p>Email: (not provided)</p>}
        <p className="contact-note"></p>
                <img src={speak}/>

      </aside>

      <form className="contact-form-services" onSubmit={handleSubmit} noValidate>
        <h2>Talk To Our Experts</h2>
        {submitted && <div className="success">Thanks — your message was sent.</div>}

        <label>
          <span>Name</span>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
          />
          {errors.name && <small className="error">{errors.name}</small>}
        </label>

        <label>
          <span>Email</span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
          {errors.email && <small className="error">{errors.email}</small>}
        </label>

        <label>
          <span>Phone</span>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="1234567890"
            maxLength="14"
          />
          {errors.phone && <small className="error">{errors.phone}</small>}
        </label>

        <label>
          <span id="mmee">Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            placeholder="Write your message..."
          />
          {errors.message && <small className="error">{errors.message}</small>}
        </label>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}


