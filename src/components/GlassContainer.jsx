import React from 'react'
import style from '../style-sheets/GlassContainer.module.css'

export default function GlassContainer({title, content, passRef}){
    
    return(

        <section className={style.glass_container_section} ref={passRef} >

                
            <div className={style.glass_container}>


                <h3>{title}</h3>

                <div className={style.line}><hr /></div>

                <div className={style.div_content}>

                    {content}

                </div>


            </div>


        </section>

    )
}