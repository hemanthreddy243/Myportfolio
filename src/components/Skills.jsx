import React from 'react';
import '../styles/Skills.css'; // Add the CSS styles

function Skills() {
    return (
        <section id="skills" className="skills-container">
            <h1 className="sectionTitle">Skills</h1>

            <div className="skills-content">
                <div className="skills-category">
                    <h3>Programming Languages</h3>
                    <ul>
                        <li>C</li>
                        <li>Python</li>
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>SQL</li>
                    </ul>
                </div>

                <div className="skills-category">
                    <h3>Web Development</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>NodeJS</li>
                        <li>Express</li>
                    </ul>
                </div>

                <div className="skills-category">
                    <h3>Databases</h3>
                    <ul>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul>
                </div>

                <div className="skills-category">
                    <h3>Data Analysis & Machine Learning</h3>
                    <ul>
                        <li>NumPy</li>
                        <li>Pandas</li>
                        <li>Scikit-learn</li>
                        <li>Power BI</li>
                        <li>Tableau</li>
                    </ul>
                </div>

                <div className="skills-category">
                    <h3>Tools & Software</h3>
                    <ul>
                        <li>VSCode</li>
                        <li>SQL Workbench</li>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Eclipse</li>
                        <li>Microsoft Office</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Skills;
