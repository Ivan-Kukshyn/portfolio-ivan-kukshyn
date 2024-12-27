import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Contact form
const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [reponseMessage, setReponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/sendmail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setReponseMessage(result.message);
    } catch (error) {
      setReponseMessage('Failed to send message.');
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">{t('Contact.title')}</h2>
      {/* <div className="contactForm">
        <a href="mailto:ivan.kukshyn@gmail.com"><i className="fa fa-envelope"></i><strong>ivan.kukshyn@gmail.com</strong></a>
        <a href="tel:+33753056671"><i className="fa fa-phone"></i><strong>+33753056671</strong></a>
        <p>{t('Contact.text')}</p>  
      </div> */}

      <form action="/sendmail.php" method="post" onSubmit={handleSubmit}>
        <div className="input-box">
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="input-box">
          <input type="number" name="phone" placeholder="Mobile Number" value={formData.phone} onChange={handleChange} />
          <input type="text" name="subject" placeholder="Email Subject" value={formData.subject} onChange={handleChange} required />
        </div>
        <textarea name="message" cols="30" rows="10" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
        <input type="submit" value="Send Message" className="btn" />
      </form>
      {reponseMessage && <p>{reponseMessage}</p>}
    </section>
  );
};

export default Contact;