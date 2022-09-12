import React from 'react'
import style from '../style-sheets/Nav.module.css'

export default function Nav(){

    return(

        <div className={style.nav_container}>

            <h3 id='name' >Belén de Amorrortu</h3>

            <nav>
                        
                <ul>
            
                    <li id='homeLi'><a href='#home'>Home</a></li>
                    <li id='projectsLi'><a href='#projects'>Projects</a></li>
                    <li id='skillsLi'><a href='#technical_skills_and_tools' >{'Skills & Tools'}</a></li>
                    <li id='aboutMeLi'><a href='#about_me'>About Me</a></li>
                    <li id='experienceLi'><a href='#experience'>Experience</a></li>
                    <li id='contactLi'><a href='#contact'>Contact</a></li>
            
            
                </ul>

        
            </nav>

            <a href='https://github.com/BelenDeAmorrortu/Portafolio' target={'_blank'}><button>Portafolio's Code</button></a>

        </div>
    )


}