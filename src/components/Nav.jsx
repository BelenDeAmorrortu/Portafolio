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
                    <li id='aboutMe'>About Me</li>
                    <li>Contact</li>
            
            
                </ul>

        
            </nav>

            <button>Portafolio's Code</button>

        </div>
    )


}