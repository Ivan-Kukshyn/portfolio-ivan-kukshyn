import React from 'react';
import { useTranslation } from 'react-i18next';

function Education() {
    const { t } = useTranslation();

    const education = [
        { logo: 'https://i.hellowork.com/7E055BnrsGB41Qb5nLwgmSwgqCWR8J9-U8DmjV9mj6M/w:300/h:200/rt:fit/g:sm/bG9jYWw6Ly8vZWR0ZWNoL2V0YWJsaXNzZW1lbnQvbG9nby81MTEvZmE3ZTA5MWEtZTlhMy00Y2Q0LWJiMGYtZDNiMDBlZmYyNTU2LnN2Zw.svg' },
        { logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSgjn9OMFDy-4sbMsDS9rbMTU_rX3qsPoKyQ&s' },
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