import React from "react";

import AboutMe from '/src/components/AboutMe.jsx';
import Projects from '/src/components/Projects';
import Skills from '/src/components/Skills';
import Education from '/src/components/Education';
import Contact from '/src/components/Contact';

function Home() {
  return (
    <>
      <section className="home" id="home">
        <div className="home-content">
          <h1>Ivan Kukshyn</h1>
          <h3>Web Developer</h3>
          <p>Junior Web and Mobile Web Developers. Looking for a work-study program. Date: April 22
            april 2025 to April 22, 2026.</p>
          <div className="btn-container">
            <a href="#contact"><button className="btn">Contact me</button></a>
            <a href="src/assets/doc/CV-Ivan-Kukshyn.pdf" download="CV Ivan Kukshyn" aria-label="Download CV">
              <button className="btn-download-cv">Download CV</button>
            </a>
          </div>
          <div className="contactMe">
            <a href="mailto:ivan.kukshyn@gmail.com"><i className="fa fa-envelope"></i>ivan.kukshyn@gmail.com</a>
            <a href="tel:+33753056671"><i className="fa fa-phone"></i>+33753056671</a>
          </div>
          <div className="social-media">
            <a className="circle" href="https://www.instagram.com/ivankukshyn/" target="_blank"><i
              className="fa-brands fa-instagram"></i></a>
            <a className="circle" href="https://x.com/ivankukshyn" target="_blank"><i
              className="fa-brands fa-x-twitter"></i></a>
            <a className="circle" href="https://www.linkedin.com/in/ivan-kukshyn-4ab3172a9/" target="_blank"><i
              className="fa-brands fa-linkedin"></i></a>
            <a className="circle" href="https://github.com/Ivan-Kukshyn" target="_blank"><i
              className="fa-brands fa-github"></i></a>
          </div>
        </div>
        <div className="home-img">
          <img src="https://img.freepik.com/free-vector/coming-soon-background-with-focus-light-effect-design_1017-27277.jpg?ga=GA1.1.1111192493.1730467593&semt=ais_hybrid" alt="Мое изображение" />
        </div>
      </section>
      <AboutMe />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </>
  );
};

export default Home;