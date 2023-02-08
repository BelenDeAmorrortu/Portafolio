import React from 'react'
import style from '../style-sheets/Experience.module.css'
import {Henry, Cambridge, FreeCodeCamp, Hogarth} from '../img/index'

export default function Experience() {

    return(
        
        <div className={style.experience_container} id='experience'>

            <div className={style.experience}>
                <div>
                    <div className={style.img_and_title}>
                        <img src={Hogarth} alt='Hogarth Logo'/>
                        <h4>Front End Developer (Dec 2022 - Current)</h4>
                    </div>
                    <ul>
                        <li>Hogarth - Full Time</li>
                        <li>Development, maintenance and localization of websites for a leading client in the technological field.</li>
                        <li>HTML, CSS, JavaScript, Apache, Slack, Microsoft Teams.</li>
                    </ul>
                </div>

                <div>
                    <div className={style.img_and_title}>
                        <img src={Henry} alt='Henry Logo' />
                        <h4>Code Review Lecturer (Sep - Nov 2022)</h4>
                    </div>
                    <ul>
                        <li>Giving live lectures for more than 40 Henry Bootcamp applicants.</li>
                        <li>Explaining and analyzing different solutions to JavaScript, HTML and CSS exercises.</li>
                        <li>Answering doubts and questions about the homework.</li>
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
                    <img src={FreeCodeCamp} alt='freeCodeCamp Logo' />
                    <h4>JavaScript Algorithms and Data Structures</h4>
                </div>
            </div>
    
        </div>
    )
}
