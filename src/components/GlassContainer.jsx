import React from 'react'
import '../style-sheets/GlassContainer.css'

export default function GlassContainer({title, content, passRef}){
    
    return(

        <section className='glass_container_section' ref={passRef} >

                
            <div className='glass_container'>


                <h3>{title}</h3>

                <div className='line'><hr /></div>

                <div className='div_content'>

                    {content}

                </div>


            </div>


        </section>

    )
}