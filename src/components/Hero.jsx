import React from 'react';
import '../styles/Herocss.css';
import myimg from '../assets/myimg.jpeg';
import githubdark from '../assets/github-dark.svg';
import githublight from '../assets/github-light.svg';
import linkedlight from '../assets/linkedin-light.svg';
import linkeddark from '../assets/linkedin-dark.svg';
import leetcode from '../assets/leetcode.svg';
import leetcodedark from '../assets/leetcodedark.png';
import CV from '../assets/resume.pdf';

import { useTheme } from '../common/ThemeContext';

export default function Hero() {
    const { theme } = useTheme();
    const linkedinicon = theme === 'light' ? linkedlight : linkeddark;
    const githubicon = theme === 'light' ? githublight : githubdark;
    const leetcodeicon = theme === 'light' ? leetcode : leetcodedark;

    return (
        <section id="hero" className="hero-container">
            <div className="info">
                <h1>
                    Hemanth Reddy <br /> Mudireddy
                </h1>
                <p>
                Hi, I'm a Computer Science and Engineering student at VIGNAN, aspiring to become a software engineer. I’m persistent, hardworking, and always eager to explore—whether it's the latest tech trends or new travel destinations.

I love coding and am passionate about learning and applying new technologies in this ever-evolving field.

When I'm not immersed in tech, I channel my creativity into portraiture and design, blending artistic expression with my technical skills.
                </p>
                <span>
                    <a
                        href="https://www.linkedin.com/in/hemanth-reddy-900215262/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={linkedinicon} alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/hemanthreddy243" target="_blank" rel="noopener noreferrer">
                        <img src={githubicon} alt="Github" />
                    </a>
                    <a href="https://leetcode.com/u/mudireddyhemanthreddy243/" target="_blank" rel="noopener noreferrer">
                        <img src={leetcodeicon} alt="Leetcode" />
                    </a>
                </span>
               
            </div>
            <div className="hero-image">
                <img className="hero" src={myimg} alt="Profile picture of Hemanth Reddy Mudireddy" />
            </div>
        </section>
    );
}
