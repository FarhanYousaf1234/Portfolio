import React from 'react';

const Footer = () => {
  const scrollToSection = (id, event) => {
    event.preventDefault(); // Prevents default link behavior
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li>
              <a href="#about" onClick={(e) => scrollToSection('about', e)}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={(e) => scrollToSection('projects', e)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => scrollToSection('contact', e)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <p>Copyright &#169; 2023 Farhan Yousaf. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
