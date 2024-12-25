import React from "react";
import { useTranslation } from 'react-i18next';

const projects = [
    { img: './src/assets/images/projects/project1.png', link: 'https://thibaut.gaudinat.v70208.campus-centre.fr/citedunumerique/' },
    { img: './src/assets/images/projects/project2.png', link: '#' },
    { img: './src/assets/images/projects/project3.png', link: '#' },
];

function Projects() {
    const { t } = useTranslation();
    return (
        <section className="project" id="project">
            <h2 className="heading">{t('Projects.title')}</h2>
            <div className="project-container">
                {projects.map((project, index) => (
                    <div className="project-box" key={index}>
                        <img src={project.img} alt={t(`Projects.project_${index + 1}.alt`)} />
                        <div className="project-layer">
                            <h4>{t(`Projects.project_${index + 1}.title`)}</h4>
                            <p>{t(`Projects.project_${index + 1}.description`)}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <i className="bx bx-link-external"></i></a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;