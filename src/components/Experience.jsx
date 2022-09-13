import React from 'react'
import style from '../style-sheets/Experience.module.css'
import Henry from '../img/Henry.png'
import Amanecer from '../img/Escuela-Amanecer.png'
import Cambridge from '../img/cambridge.jpg'
import freeCodeCamp from '../img/freeCodeCamp.png'

export default function Experience() {

    return(
        
        <div className={style.experience_container} id='experience'>

            <div className={style.experience}>

                <div>
                    <div className={style.img_and_title}>
                        <img src={Henry} alt='Henry Logo' />
                        <h4>{'Henry Hero (Code Review Lecturer) - Current'}</h4>
                    </div>
                    <ul>
                        <li>Explaining and analyzing different solutions to JavaScript, HTML and CSS exercises.</li>
                        <li>Answering doubts and questions about the homework.</li>
                        <li>Organizing the lecture with fellow Henry Heroes</li>
                    </ul>

                </div>

                <div>

                    <div className={style.img_and_title}>
                        <img src={Amanecer} alt='Amanecer Kindergarten Logo'/>
                        <h4>Kindergarten Auxiliary Teacher - Feb to Jul 2022</h4>
                    </div>
                    <ul>
                        <li>At first covered a two week job for the summer programme, then was asked to stay permanently.</li>
                        <li>Helped simplify daily basis activities, which resulted in a more fluent routine for the children and other colleagues.</li>
                        <li>Accompanied children based on their needs.</li>
                    </ul>

                </div>

            </div>

            <div className={style.education}>

                <h4 className={style.title}>Education</h4>

                <div>
                    <img src={Henry} alt='Henry Logo' />
                    <h4>Henry Bootcamp</h4>
                </div>

                <div>
                    <img src={Cambridge} alt='Cambridge Logo' />
                    <h4>Certificate in Advanced English - C1</h4>
                </div>

                <div>
                    <img src={freeCodeCamp} alt='freeCodeCamp Logo' />
                    <h4>JavaScript Algorithms and Data Structures</h4>
                </div>

            </div>
        
        </div>
    )
}
