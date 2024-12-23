import React from 'react';

function Education() {

    const education = [
        { logo: 'src/assets/images/CCI.svg', name: 'CCI Campus Centre', title: 'La F@brique Numerique 41', data: '2024 - Present', job: 'Student', description: 'Professional Title: Web and Mobile Web Developer' },
        { logo: 'src/assets/images/Politechnika.png', name: 'Université polytechnique d`Odessa', title: 'Université polytechnique d`Odessa', data: '2022 – Present', job: 'Second-year Student', description: 'Major: Information Systems and Technology' },
    ];

    return (
        <section className="education" id="education">
            <h2 className="heading">Education</h2>
            <div className="education-container">
                {education.map((skill, index) => (
                    <div className="education-card" key={index}>
                        <div className="education-logo">
                            <img src={skill.logo} alt={skill.name} />
                        </div>
                        <div className="education-info">
                            <h3>{skill.title}</h3>
                            <p>{skill.data}</p>
                            <p>{skill.job}</p>
                            <p>{skill.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section >
    );
};

export default Education;