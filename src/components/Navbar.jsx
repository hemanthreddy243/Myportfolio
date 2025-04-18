import React, { useState } from 'react';
import { useTheme } from '../common/ThemeContext';
import '../styles/Navbar.css';
import logo from '../assets/N.png';


export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleNavClick = (sectionId) => {
        setIsDropdownOpen(false);
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <img className='logoimage' src={logo}/>
            </div>
            <ul className={`nav-links ${isDropdownOpen ? 'open' : ''}`}>
                <li onClick={() => handleNavClick('#hero')}>Home</li>
                <li onClick={() => handleNavClick('#education')}>Education</li>
                <li onClick={() => handleNavClick('#skills')}>Skills</li>
                <li onClick={() => handleNavClick('#projects')}>Projects</li>
                <li onClick={() => handleNavClick('#contact')}>Contact</li>
            </ul>
            <div className="nav-controls">
                <button className="theme-toggle" onClick={toggleTheme}>
                    {theme === 'light' ? '🌙' : '☀️'}
                </button>
                <button className="dropdown-toggle" onClick={toggleDropdown}>
                    ☰
                </button>
            </div>
        </nav>
    );
}
