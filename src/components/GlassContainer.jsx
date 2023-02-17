import React from 'react'
import { useProject } from '../context/ProjectContext'
import style from '../style-sheets/GlassContainer.module.css'
import { Chevron, ChevronLeft } from '../img/index'

export default function GlassContainer({title, content, passRef}){

    const {currentProject, setCurrentProject} = useProject()
    
    return(

        <section className={style.glass_container_section} ref={passRef} >
  
            <div className={style.glass_container}>                

                <div className={style.title}>
                    {title !== 'Projects' || currentProject === false ? 
                        <h3>{title}</h3> 
                    :
                    <>
                        <h3><span onClick={()=> setCurrentProject(false)}>{title} </span><img src={Chevron}/> {currentProject.name}</h3>
                        <button onClick={()=> setCurrentProject(false)}><img src={ChevronLeft}/> Go Back</button>
                    </>}
                </div>

                <div className={style.line}><hr /></div>

                <div className={style.div_content}>
                    {content}
                </div>

            </div>

        </section>
    )
}