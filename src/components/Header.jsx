import React, { useState, useEffect } from 'react';

function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(localStorage.getItem('theme') === 'dark');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    // Load theme from localStorage
    document.body.classList.toggle('dark-theme', isDarkTheme);
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
  }, [isDarkTheme]);

  useEffect(() => {
    const handleScroll = () => {
      // Sticky navbar
      setIsSticky(window.scrollY > 100);

      // Active section link
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (window.scrollY >= offset && window.scrollY < offset + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  const handleNavLinkClick = () => {
    setIsMenuActive(false);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <a className="logo" href="#">Ivan Kukshyn</a>
      <div className="nav-container">
        <nav className={`navbar ${isMenuActive ? 'active' : ''}`}>
          <a className="nav-link" onClick={handleNavLinkClick} href="/#home">Home</a>
          <a className="nav-link" onClick={handleNavLinkClick} href="/#about">About</a>
          <a className="nav-link" onClick={handleNavLinkClick} href="/#project">Projects</a>
          <a className="nav-link" onClick={handleNavLinkClick} href="/#skills">Skills</a>
          <a className="nav-link" onClick={handleNavLinkClick} href="/#education">Education</a>
          <a className="nav-link" onClick={handleNavLinkClick} href="/#contact">Contact</a>
        </nav>
        <i className={`theme-toggle fa-solid ${isDarkTheme ? 'fa-sun' : 'fa-moon'}`} onClick={toggleTheme}
          title={isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'} id="theme-toggle"></i>
        <i className="fa-solid fa-bars" id="menu-icon" onClick={toggleMenu}></i>
      </div>
    </header>
  );
};

export default Header;