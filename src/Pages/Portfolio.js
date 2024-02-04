import React from 'react'
import Navbar from '../Component/Navbar'
import ProfileSection from '../Component/ProfileSection'
import AboutSection from '../Component/AboutSection '
import ProjectsSection from '../Component/ProjectsSection'
import ContactSection from '../Component/ContactSection'
import Footer from '../Component/Footer'
const Portfolio = () => {
  return (
    <div>
      <Navbar/>
        <ProfileSection/>
        <AboutSection/>
        <ProjectsSection/>
        <ContactSection/>
        <Footer/>

    </div>
  )
}

export default Portfolio
