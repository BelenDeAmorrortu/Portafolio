import React from 'react'
import Github from '../img/GitHub.png'
import Email from '../img/Email.png'
import LinkedIn from '../img/LinkedIn.png'
import style from '../style-sheets/Contact.module.css'

export default function Contact() {

    return (

        <div className={style.contact_container} id='contact'>

            <p>Feel free to contact me if you are interested! <span className={style.twinkle}>Click to follow the link</span></p>

            <div className={style.social}>
                
                <a href='https://github.com/BelenDeAmorrortu' target='_blank'><div>
                    <img src={Github} alt='Github Logo' />
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
