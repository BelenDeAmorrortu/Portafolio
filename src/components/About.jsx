import React from 'react'
import style from '../style-sheets/About.module.css'

export default function About() {

    return (

        <div className={style.about_container}  id='about_me'>

            <p>Hi! My name is <span>Belén</span>.</p>
            <p>I am an argentinian <span>full stack developer</span> currently seeking a remote job in the tech industry.</p>

            <div className={style.description}>
                <div>Well organized</div>
                <div>Detail-oriented</div>
                <div>Constant drive to learn and grow professionally and personally</div>
            </div>    
        
        </div>
    )
}
