import React from "react";
import { useTranslation } from 'react-i18next';

function Skills() {
    const { t } = useTranslation();

    const hardskills = [
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
        { name: 'ReactJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
        { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg' },
        { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
        { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg' },
    ];

    const softskills = [
        { icon: 'bx bx-timer' },
        { icon: 'bx bx-clipboard' },
        { icon: 'bx bx-happy-alt' },
        { icon: 'fa-brands fa-teamspeak' },
        { icon: 'fa-solid fa-language' },
    ];

    return (
        <section className="skills" id="skills">
            {/* Hard Skills */}
            <h2 className="heading">{t('Skills.hardskills.title')}</h2>
            <div className="hardskills-container">
                {hardskills.map((skill, index) => (
                    <div className="hardskills-card" key={index}>
                        <img src={skill.icon} alt={skill.name} />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
            {/* Soft Skills */}
            <h2 className="heading">{t('Skills.softskills.title')}</h2>
            <div className="softskills-container">
                {softskills.map((skill, index) => (
                    <div className="softskills-card" key={index}>
                        <i className={skill.icon}></i>
                        <h3>{t(`Skills.softskills.card_${index + 1}.heading`)}</h3>
                        <p>{t(`Skills.softskills.card_${index + 1}.description`)}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;