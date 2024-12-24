import React, { useState } from 'react';

// Contact form
const Contact = () => {
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
      <h2 className="heading">Contact Me</h2>
      <form action="sendmail.php" method="post" onSubmit={handleSubmit}>
        <div className="input-box">
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="input-box">
          <input type="number" name="phone" placeholder="Mobile Number" value={formData.phone} onChange={handleChange} />
          <input type="text" name="subject" placeholder="Email Subject" value={formData.subject} onChange={handleChange} required/>
        </div>
        <textarea name="message" cols="30" rows="10" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
        <input type="submit" value="Send Message" className="btn" />
      </form>
      {reponseMessage && <p>{reponseMessage}</p>}
    </section>
  );
};

export default Contact;