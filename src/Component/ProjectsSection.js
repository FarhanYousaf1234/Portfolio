import React from 'react';
import project1Img from '../assets/Project-1.PNG';
import project2Img from '../assets/chatgpt-clone-application.jpg';
import project3Img from '../assets/Project-3.PNG';
import Arrow from '../assets/arrow.png';

const ProjectsSection = () => {
  const redirectToGitHub = (url) => {
    window.open(url, '_blank');
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
};

const redirectToContact = (event) => {
    event.preventDefault(); // Prevents default link behavior
    scrollToContact(); // Scrolls to the contact section
};


  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={project1Img}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Chat App</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => redirectToGitHub('https://github.com/FarhanYousaf1234/Chat-App')}
              >
                Github
              </button>
            </div>
          </div>

          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={project2Img}
                alt="Project 2"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Chat Gpt Clone </h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => redirectToGitHub('https://github.com/FarhanYousaf1234/Chat-Gpt-Clone')}
              >
                Github
              </button>
            </div>
          </div>

          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={project3Img}
                alt="Project 3"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Workout Buddy</h2>
            <div className="btn-container">
              <button
                className="btn btn-color-2 project-btn"
                onClick={() => redirectToGitHub('https://github.com/FarhanYousaf1234/Workout-Project')}
              >
                Github
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        src={Arrow}
        alt="Arrow icon"
        className="icon arrow"
        onClick={redirectToContact}
      />
    </section>
  );
};

export default ProjectsSection;
