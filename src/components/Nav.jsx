import React from 'react'
import style from '../style-sheets/Nav.module.css'

export default function Nav(){

    return(

        <div className={style.nav_container}>

            <h3 id='name' >Belén de Amorrortu</h3>

            <nav>
                        
                <ul>
            
                    <li id='homeLi'className='navLi'><a href='#home'>Home</a></li>
                    <li id='projectsLi' className='navLi'><a href='#projects'>Projects</a></li>
                    <li id='skillsLi' className='navLi'><a href='#technical_skills_and_tools' >{'Skills & Tools'}</a></li>
                    <li id='aboutMeLi'className='navLi'><a href='#about_me'>About Me</a></li>
                    <li id='experienceLi'className='navLi'><a href='#experience'>Experience</a></li>
                    <li id='contactLi' className='navLi'><a href='#contact'>Contact</a></li>
            
            
                </ul>

        
            </nav>

            <button onClick={()=> window.open( 'https://github.com/BelenDeAmorrortu/Portafolio', '_blank')}>Portfolio's Code</button>

        </div>
    )


}