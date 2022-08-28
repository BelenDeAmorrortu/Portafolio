import React, { useEffect, useRef } from 'react';
import './App.css';
import Nav from './components/Nav.jsx'
import Background from './components/Background.jsx'
import GlassContainer from './components/GlassContainer';
import Home from './components/Home';
import Languages from './components/Languages.jsx';
import Projects from './components/Projects';
import { useInView } from 'react-intersection-observer';
import About from './components/About';


function App() {

  const { ref: techSkillsandTools, inView: skillsIsVisible } = useInView({threshold: 0.5})
  const { ref: projects, inView: projectIsVisible } = useInView({threshold: 0.5})
  const { ref: home, inView: homeIsVisible } = useInView({threshold: 0.5})
  const { ref: aboutMe, inView: aboutMeIsVisible } = useInView({threshold: 0.5})
  const { ref: experience, inView: experienceIsVisible } = useInView({threshold: 0.5})
  const { ref: contact, inView: contactIsVisible } = useInView({threshold: 0.5})

  
  useEffect(()=>{
    
    let homeLi = document.querySelector('#homeLi')
    let projectLi = document.querySelector(`#projectsLi`)
    let skillsLi = document.querySelector('#skillsLi')
    let aboutMeLi = document.querySelector('#aboutMeLi')
    let experienceLi = document.querySelector('#experienceLi')
    let contactLi = document.querySelector('#contactLi')
    let borderStyle = '2px solid #f5f5f5'

    if(homeIsVisible) homeLi.style.borderBottom = borderStyle
    else homeLi.style.borderBottom = 'none'

    if(projectIsVisible) projectLi.style.borderBottom = borderStyle
    else projectLi.style.borderBottom = 'none'

    if(skillsIsVisible) skillsLi.style.borderBottom = borderStyle
    else skillsLi.style.borderBottom = 'none'

    if(aboutMeIsVisible) aboutMeLi.style.borderBottom = borderStyle
    else aboutMeLi.style.borderBottom = 'none'
    
    if(experienceIsVisible) experienceLi.style.borderBottom = borderStyle
    else experienceLi.style.borderBottom = 'none'

    if(contactIsVisible) contactLi.style.borderBottom = borderStyle
    else contactLi.style.borderBottom = 'none'

  }, [skillsIsVisible, projectIsVisible, homeIsVisible, aboutMeIsVisible, experienceIsVisible, contactIsVisible]) 
  
  return (

    <div className="App_container">

      <Background />
      <Nav />

      <main>

        <Home passRef={home}/>
        <GlassContainer title={'Projects'} content={<Projects />}  passRef={projects} />
        <GlassContainer title={'Technical Skills & Tools'} content={<Languages />} id='technical_skills_and_tools' passRef={techSkillsandTools} />
        <GlassContainer title={'About Me'} content={<About />} id='about_me' passRef={aboutMe} />
        <GlassContainer title={'Experience'} content={null} id='experience' passRef={experience} />
        <GlassContainer title={'Contact'} content={null} id='contact' passRef={contact} />

      </main>

    </div>
    

  );
}

export default App;
