import React from 'react';
import '../styles/Projectstyles.css';
import viberr from '../assets/viberr.png';
import h4l from '../assets/heaven4life.png';
import ml from '../assets/ml.png';
import eveco from '../assets/eveco.png';
function Projects() {
    const projects = [
        {
            id: 3,
            image: eveco,
            title: "EVECO- MERN stack",
            description:
                "Eveco is an eCommerce web application built with the MERN stack, designed to sell, collect, and recycle sustainable items. It aims to promote sustainability by providing a platform for users to buy eco-friendly products and participate in recycling initiatives.",
            link: "https://github.com/hemanthreddy243/Eveco",
        },
        
        
    ];

    return (
        <section id="projects" className="projects-container">
            <h1 className="sectionTitle">Projects</h1>
            <div className="projects-list">
                {projects.map((project) => (
                    <div className="project-card" key={project.id}>
                        <img
                            className="project-image"
                            src={project.image}
                            alt={`${project.title} Thumbnail`}
                        />
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="view-project-btn">View Project</button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
