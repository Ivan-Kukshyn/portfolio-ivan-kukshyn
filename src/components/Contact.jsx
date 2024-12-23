import React from "react";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact Me</h2>
      <form action="send.php" method="post">
        <div className="input-box">
          <input type="text" name="name" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Email Address" required />
        </div>
        <div className="input-box">
          <input type="number" name="phone" placeholder="Mobile Number" />
          <input type="text" name="subject" placeholder="Email Subject" />
        </div>
        <textarea name="message" cols="30" rows="10" placeholder="Your Message"></textarea>
        <input type="submit" value="Send Message" className="btn" />
      </form>
    </section>
  );
};

export default Contact;