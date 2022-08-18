import React, { useEffect } from 'react';
import './App.css';
import Nav from './components/Nav.jsx'
import Background from './components/Background.jsx'
import GlassContainer from './components/GlassContainer';
import Home from './components/Home';
import Languages from './components/Languages.jsx';
import Projects from './components/Projects';
import { useInView } from 'react-intersection-observer';


function App() {

  const { ref: techSkillsandTools, inView: skillsIsVisible } = useInView({threshold: 0.5})
  const { ref: projects, inView: projectIsVisible } = useInView({threshold: 0.5})
  const { ref: home, inView: homeIsVisible } = useInView({threshold: 0.5})
  const { ref: aboutMe, inView: aboutMeIsVisible } = useInView({threshold: 0.5})

  
  useEffect(()=>{
    
    let homeLi = document.querySelector('#homeLi')
    let projectLi = document.querySelector(`#projectsLi`)
    let skillsLi = document.querySelector('#skillsLi')
    let aboutMe = document.querySelector('#aboutMe')
    let borderStyle = '2px solid #f5f5f5'

    if(homeIsVisible) homeLi.style.borderBottom = borderStyle
    else homeLi.style.borderBottom = 'none'

    if(projectIsVisible) projectLi.style.borderBottom = borderStyle
    else projectLi.style.borderBottom = 'none'

    if(skillsIsVisible) skillsLi.style.borderBottom = borderStyle
    else skillsLi.style.borderBottom = 'none'

    if(aboutMeIsVisible) aboutMe.style.borderBottom = borderStyle
    else aboutMe.style.borderBottom = 'none'
    
  }, [skillsIsVisible, projectIsVisible, homeIsVisible, aboutMeIsVisible]) 
  
  return (

    <div className="App_container">

      <Background />
      <Nav />

      <main>

        <Home passRef={home}/>
        <GlassContainer title={'Projects'} content={<Projects />}  passRef={projects} />
        <GlassContainer title={'Technical Skills & Tools'} content={<Languages />} id='technical_skills_and_tools' passRef={techSkillsandTools} />
        <GlassContainer title={'About Me'} content={null} id='about_me' passRef={aboutMe} />
 

      </main>

    </div>
    

  );
}

export default App;
