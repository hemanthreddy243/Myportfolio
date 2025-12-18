import React from 'react';
import '../styles/Educationstyles.css'; // Create a separate CSS file for styling
import educationImage from '../assets/eduimg.png'; // Replace with an actual image file

function Education() {
    return (
        
        <section id="education" className="education-container">
            <h2 className="sectionTitle">EDUCATION</h2>
            <div className="education-content">
                <div className="education-details">
                    <h4>VIGNAN INSTITUTE OF TECHNOLODGY AND SCIENCE</h4>
                    <p>
                        <strong>2022 - 2026</strong><br />
                        Bachelor of Technology in Computer Science and Engineering, Hyderabad, India
                    </p>
                    <p>
                        <strong>CGPA: 8.5</strong>
                    </p>
                </div>
                <img className="education-image" src={educationImage} alt="Education" />
            </div>
        </section>
    );
}

export default Education;
