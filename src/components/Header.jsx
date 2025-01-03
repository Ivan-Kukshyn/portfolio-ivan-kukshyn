import React, { useState, useEffect } from 'react';
import LanguageSelector from './languages-selector';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t, i18n } = useTranslation();

  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(localStorage.getItem('theme') === 'dark');
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('');

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
          setActiveSection(id);  // Active section state
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

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <a className="logo" href="#">Ivan Kukshyn</a>
      <div className="nav-container">
        <nav className={`navbar ${isMenuActive ? 'active' : ''}`}>
          <a className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={handleNavLinkClick} href="/#home">{t("Header.navbar.home")}</a>
          <a className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={handleNavLinkClick} href="/#about">{t("Header.navbar.about")}</a>
          <a className={`nav-link ${activeSection === 'project' ? 'active' : ''}`} onClick={handleNavLinkClick} href="/#project">{t("Header.navbar.projects")}</a>
          <a className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} onClick={handleNavLinkClick} href="/#skills">{t("Header.navbar.skills")}</a>
          <a className={`nav-link ${activeSection === 'education' ? 'active' : ''}`} onClick={handleNavLinkClick} href="/#education">{t("Header.navbar.education")}</a>
          <a className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={handleNavLinkClick} href="/#contact">{t("Header.navbar.contact")}</a>
        </nav>
        <i className={`theme-toggle fa-solid ${isDarkTheme ? 'fa-sun' : 'fa-moon'}`} onClick={toggleTheme} title={isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'} id="theme-toggle"></i>
        <LanguageSelector onChange={handleLanguageChange} />
        <i className="fa-solid fa-bars" id="menu-icon" onClick={toggleMenu}></i>
      </div>
    </header>
  );
};

export default Header;