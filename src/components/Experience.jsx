import React from 'react'
import style from '../style-sheets/Experience.module.css'
import Henry from '../img/Henry.png'
import Amanecer from '../img/Escuela-Amanecer.png'

export default function Experience() {

    return(
        
        <div className={style.experience_container}>

            <div className={style.experience}>

                <div>
                    <div className={style.img_and_title}>
                        <img src={Henry} alt='Henry Logo' />
                        <h4>{'Henry Hero (Code Review Lecturer)'}</h4>
                    </div>
                    <ul>
                        <li>Explaining and analyzing different solutions to technical JavaScript exercises.</li>
                        <li>Answering doubts and questions about the homework.</li>
                        <li>Organizing the lecture with fellow Henry Heroes</li>
                    </ul>

                </div>

                <div>

                    <div className={style.img_and_title}>
                        <img src={Amanecer} alt='Amanecer Kindergarten Logo'/>
                        <h4>Auxiliary Kindergarten Teacher</h4>
                    </div>
                    <ul>
                        <li>At first covered a two week job for the summer programme, then was asked to stay permanently.</li>
                        <li>Helped expedite daily basis activities, making the children's and other teachers' routine run smoother.</li>
                        <li>Accompanied children based on their needs.</li>
                    </ul>

                </div>

            </div>

            <div className={style.education}>

                <h4>Education</h4>

            </div>
        
        </div>
    )
}
