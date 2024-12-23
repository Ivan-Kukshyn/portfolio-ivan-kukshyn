import React from "react";

const projects = [
    { img: './src/assets/images/projects/project1.png', name: 'Project', title: 'Cité du numerique', description: 'Projet d`équipe sur demande CD41 pour La Cité du Numérique a Blois.', link: 'https://thibaut.gaudinat.v70208.campus-centre.fr/citedunumerique/' },
    { img: './src/assets/images/projects/project2.png', name: 'Project', title: 'Portfolio', description: 'Un projet de portfolio personnel utilisant l`intégration de HTML, CSS et JavaScript.', link: '#' },
    { img: './src/assets/images/projects/project3.png', name: 'Project', title: 'Portfolio (Wordpress)', description: 'Un projet de portfolio personnel utilisant WordPress.', link: '#' },
];

function Projects() {
    return (
        <section className="project" id="project">
            <h2 className="heading">Project</h2>
            <div className="project-container">
                {projects.map((skill, index) => (
                    <div className="project-box" key={index}>
                        <img src={skill.img} alt={skill.name} />
                        <div className="project-layer">
                            <h4>{skill.title}</h4>
                            <p>{skill.description}</p>
                            <a href={skill.link} target="_blank" rel="noopener noreferrer">
                                <i className="bx bx-link-external"></i></a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;