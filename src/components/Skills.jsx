import React from "react";

function Skills() {

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
        { icon: 'bx bx-timer', title: 'Punctual', description: 'I am always on time and meet set deadlines.' },
        { icon: 'bx bx-clipboard', title: 'Organized', description: 'I plan my tasks efficiently to maximize productivity.' },
        { icon: 'bx bx-happy-alt', title: 'Stress Management', description: 'I stay calm and focused even under pressure.' },
        { icon: 'fa-brands fa-teamspeak', title: 'Teamwork', description: 'I collaborate well with others and contribute positively to the team.' },
        { icon: 'fa-solid fa-language', title: 'Languages', description: 'English (B1), French (B1), Ukrainian (native), Russian (native)' },
    ];

    return (
        <section className="skills" id="skills">
            {/* Hard Skills */}
            <h2 className="heading hardskills-titre">Hard-Skills</h2>
            <div className="hardskills-container">
                {hardskills.map((skill, index) => (
                    <div className="hardskills-card" key={index}>
                        <img src={skill.icon} alt={skill.name} />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
            {/* Soft Skills */}
            <h2 className="heading softskills-titre">Soft-Skills</h2>
            <div className="softskills-container">
                {softskills.map((skill, index) => (
                    <div className="softskills-card" key={index}>
                        <i className={skill.icon}></i>
                        <h3>{skill.title}</h3>
                        <p>{skill.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;