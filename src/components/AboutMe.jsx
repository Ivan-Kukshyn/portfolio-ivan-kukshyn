import React from "react";
import {useTranslation} from 'react-i18next';

function AboutMe() {
  const {t} = useTranslation();
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src="https://img.freepik.com/free-vector/coming-soon-background-with-focus-light-effect-design_1017-27277.jpg?ga=GA1.1.1111192493.1730467593&semt=ais_hybrid" alt={t("AboutMe.hero_photo.alt")} />
      </div>

      <div className="about-content">
        <h2 className="heading">{t('AboutMe.about.about_heading')}</h2>
        <p><strong>{t('AboutMe.about.about_p1')}</strong></p>
        <p>{t('AboutMe.about.about_p2')}</p>
        <br />
        <p>{t('AboutMe.about.about_p3')}</p>
        <br />
        <p>{t('AboutMe.about.about_p4')}</p>
        <br />
        <p>{t('AboutMe.about.about_p5')} <strong>{t('AboutMe.about.about_p5_strong')}</strong></p>
      </div>
    </section>
  );
};

export default AboutMe;