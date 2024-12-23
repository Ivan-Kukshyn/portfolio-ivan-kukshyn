import React from "react";

function AboutMe() {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="https://img.freepik.com/free-vector/coming-soon-background-with-focus-light-effect-design_1017-27277.jpg?ga=GA1.1.1111192493.1730467593&semt=ais_hybrid" alt="Ivan Kukshyn" />
      </div>

      <div className="about-content">
        <h2 className="heading">Who i am? What i want?</h2>
        <p className="p-1"><strong>Hello, my name is Ivan Kukshyn.</strong></p>
        <p className="p-2">I'm 19 years old and I'm studying web and mobile development at the “La F@brique
          Numérique 41” in Blois.</p>
        <br />
        <p className="p-3">I'm from Ukraine and I'm now looking for a work-study opportunity in a company where I can
          apply my knowledge and skills to real-life projects and gain valuable experience
          working in a team of professionals. My future goal is to become a
          qualified backend developer.</p>
        <br />
        <p className="p-4">My current stack includes HTML, CSS, JavaScript. I'm actively learning WordPress, Bootstrap
          and
          JavaScript. I'm always looking to improve my skills. I'm willing to learn from experienced
          and contribute to the success of projects.</p>
        <br />
        <p className="p-5">I speak many languages: <strong>English, French, Russian and Ukrainian.</strong></p>
      </div>
    </section>
  );
};

export default AboutMe;