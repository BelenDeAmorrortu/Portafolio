import React from 'react'
import style from '../style-sheets/About.module.css'

export default function About() {

    return (

        <div className={style.about_container}  id='about_me'>

            <p>Hi! My name is <span>Belén</span> and I am an argentinian <span>Full Stack Developer</span>.</p>
            <p>For me coding is not just a source of work, but also a hobby. I enjoy spending my evenings developing projects, learning new skills, and even refining the ones I already have.</p> 

            <div className={style.description}>
                <div>Problem solving</div>
                <div>Detail-oriented</div>
                <div>Autodidact</div>
            </div>    
        
        </div>
    )
}
