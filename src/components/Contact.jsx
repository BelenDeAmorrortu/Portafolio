import React from 'react'
import {GitHub, Email, LinkedIn} from '../img/index'
import style from '../style-sheets/Contact.module.css'

export default function Contact() {

    return (

        <div className={style.contact_container} id='contact'>

            <p>Feel free to contact me if you are interested!<br className={style.small}/> <span className={style.twinkle}>Click to follow the link</span></p>

            <div className={style.social}>
                
                <a href='https://github.com/BelenDeAmorrortu' target='_blank'><div>
                    <img src={GitHub} alt='Github Logo' />
                    <p>BelenDeAmorrortu</p>
                </div></a>
                
                <a href='https://linkedin.com/in/belen-de-amorrortu' target='_blank'><div>
                    <img src={LinkedIn} alt='Linked Logo' />
                    <p>Belén de Amorrortu</p>
                </div></a>

                <a href="mailto:belendeamorrortu.developer@gmail.com"><div className={style.full}>
                    <img src={Email} alt='Email Logo' />
                    <p>belendeamorrortu.developer@gmail.com</p>

                </div></a>

            </div>
        
        </div>
    )
}
