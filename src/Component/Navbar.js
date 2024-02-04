import React from 'react';

function Navbar() {
  // Function to handle smooth scrolling to a specific section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Function to handle click on navigation links
  const handleNavigation = (id, event) => {
    event.preventDefault();
    scrollToSection(id);
  };

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    const menuLinks = document.querySelector('.menu-links');
    menuLinks.classList.toggle('open');
  };

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Farhan Yousaf</div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about" onClick={(e) => handleNavigation('about', e)}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => handleNavigation('projects', e)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleNavigation('contact', e)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Farhan Yousaf</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li>
              <a href="#about" onClick={(e) => { handleNavigation('about', e); toggleMenu(); }}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => { handleNavigation('projects', e); toggleMenu(); }}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => { handleNavigation('contact', e); toggleMenu(); }}>
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
