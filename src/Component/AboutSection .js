import React from 'react';
import aboutPic from '../assets/pics.jpg';
import experienceIcon from '../assets/experience.png';
import educationIcon from '../assets/education.png';
import arrowIcon from '../assets/arrow.png';

const AboutSection = () => {
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
        <section id="about">
            <p className="section__text__p1">Get To Know More</p>
            <h1 className="title">About Me</h1>
            <div className="section-container">
                <div className="section__pic-container">
                    <img
                        src={aboutPic}
                        alt="Profile picture"
                        className="about-pic"
                    />
                </div>
                <div className="about-details-container">
                    <div className="about-containers">
                        <div className="details-container">
                            <img
                                src={experienceIcon}
                                alt="Experience icon"
                                className="icon"
                            />
                            <h3>Experience</h3>
                            <p>2+ years <br />MERN stack Development</p>
                        </div>
                        <div className="details-container">
                            <img
                                src={educationIcon}
                                alt="Education icon"
                                className="icon"
                            />
                            <h3>Education</h3>
                            <p>B.Sc. Bachelors Degree<br /></p>
                        </div>
                    </div>
                    <div className="text-container">
                        <p>
                            "Passionate about crafting awesome apps with MongoDB, Express.js, React, and Node.js, we're a team dedicated to creating user-friendly experiences. We blend our creativity with tech skills to build smooth digital products. Always learning, we strive to make the web a better place, one app at a time!"
                        </p>
                    </div>
                </div>
            </div>
            <img
                src={arrowIcon}
                alt="Arrow icon"
                className="icon arrow"
                onClick={redirectToContact}
            />
        </section>
    );
};

export default AboutSection;
