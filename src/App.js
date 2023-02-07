import React, { useEffect } from 'react';
import './App.css';
import Nav from './components/Nav.jsx'
import Background from './components/Background.jsx'
import GlassContainer from './components/GlassContainer';
import Home from './components/Home';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects';
import { useInView } from 'react-intersection-observer';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { handleSectionChange } from './components/underlineHandler';

function App() {

  const { ref: techSkillsandTools, inView: skillsIsVisible } = useInView({threshold: 0.5})
  const { ref: projects, inView: projectIsVisible } = useInView({threshold: 0.5})
  const { ref: home, inView: homeIsVisible } = useInView({threshold: 0.5})
  const { ref: aboutMe, inView: aboutMeIsVisible } = useInView({threshold: 0.5})
  const { ref: experience, inView: experienceIsVisible } = useInView({threshold: 0.5})
  const { ref: contact, inView: contactIsVisible } = useInView({threshold: 0.5})

  
  useEffect(()=>{
    
    handleSectionChange(skillsIsVisible, projectIsVisible, homeIsVisible, aboutMeIsVisible, experienceIsVisible, contactIsVisible)

  }, [skillsIsVisible, projectIsVisible, homeIsVisible, aboutMeIsVisible, experienceIsVisible, contactIsVisible]) 
  
  return (

    <div className="App_container">

      <Background />
      <Nav />

      <main>

        <Home passRef={home}/>
        <GlassContainer title={'Projects'} content={<Projects />}  passRef={projects} />
        <GlassContainer title={'Technical Skills & Tools'} content={<Skills />} passRef={techSkillsandTools} />
        <GlassContainer title={'About Me'} content={<About />} passRef={aboutMe} />
        <GlassContainer title={'Experience'} content={<Experience />} id='experience' passRef={experience} />
        <GlassContainer title={'Contact'} content={<Contact />} id='contact' passRef={contact} />

      </main>

    </div>
    

  );
}

export default App;
