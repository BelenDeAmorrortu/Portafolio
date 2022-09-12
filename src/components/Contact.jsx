import React from 'react'
import Github from '../img/GitHub.png'
import Email from '../img/Email.png'
import LinkedIn from '../img/LinkedIn.png'
import style from '../style-sheets/Contact.module.css'

export default function Contact() {

    return (

        <div className={style.contact_container} id='contact'>

            <p>Click to follow the link</p>

            <a href='https://github.com/BelenDeAmorrortu' target='_blank'>
            <div>
                <img src={Github} alt='Github Logo' />
                <h3>BelenDeAmorrortu</h3>
            </div>
            </a>

            <div>
                <img src={Email} alt='Email Logo' />
                <h3>belendeamorrortu.developer@gmail.com</h3>
            </div>

            <a href='https://linkedin.com/in/belen-de-amorrortu' target='_blank'>
            <div>
                <img src={LinkedIn} alt='Linked Logo' />
                <h3>Belén de Amorrortu</h3>
            </div>
            </a>

        
        </div>
    )
}
