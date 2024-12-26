import React from 'react';
import { useTranslation } from 'react-i18next';

function Education() {
    const { t } = useTranslation();

    const education = [
        { logo: 'src/assets/images/CCI.svg' },
        { logo: 'src/assets/images/Politechnika.png' },
    ];

    return (
        <section className="education" id="education">
            <h2 className="heading">{t('Education.title')}</h2>
            <div className="education-container">
                {education.map((skill, index) => (
                    <div className="education-card" key={index}>
                        <div className="education-logo">
                            <img src={skill.logo} alt={t(`Education.card_${index + 1}.alt`)} />
                        </div>
                        <div className="education-info">
                            <h3>{t(`Education.card_${index + 1}.title`)}</h3>
                            <p>{t(`Education.card_${index + 1}.data`)}</p>
                            <p>{t(`Education.card_${index + 1}.job`)}</p>
                            <p>{t(`Education.card_${index + 1}.description`)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section >
    );
};

export default Education;