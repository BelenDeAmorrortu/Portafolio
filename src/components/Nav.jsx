import React from 'react'
import '../style-sheets/Nav.css'

export default function Nav(){

    return(

        <div className='nav_container'>

            <nav>
                        
                <ul>
            
                    <li id='homeLi'>Home</li>
                    <li id='projectsLi'>Projects</li>
                    <li id='skillsLi'>{'Skills & Tools'}</li>
                    <li id='aboutMeLi'>About Me</li>
                    <li id='experienceLi'>Experience</li>
                    <li id='contactLi'>Contact</li>
            
            
                </ul>

        
            </nav>

            <a href='https://github.com/BelenDeAmorrortu/Portafolio' target={'_blank'}><button>Portafolio's Code</button></a>

        </div>
    )


}