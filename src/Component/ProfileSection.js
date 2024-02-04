import React from 'react';
import profilePic from '../assets/pic.jpg';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';
import resumePdf from '../assets/resume-example.pdf';

function ProfileSection() {
  const openResume = () => {
    window.open(resumePdf);
  };

  const redirectToContact = () => {
    window.location.href = './#contact';
  };

  return (
    <section id="profile">
      <div className="section__pic-container">
        <img src={profilePic} alt="John Doe profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Farhan Yousaf </h1>
        <p className="section__text__p2">MERN Stack  Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            onClick={openResume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={redirectToContact}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <a
            href="https://www.linkedin.com/in/farhan-yousaf-5955a4229/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedinIcon}
              alt="My LinkedIn profile"
              className="icon"
            />
          </a>
          <a
            href="https://github.com/FarhanYousaf1234"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={githubIcon}
              alt="My Github profile"
              className="icon"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProfileSection;
