import React, { useState } from 'react'
import { useProject } from '../context/ProjectContext'
import ReactPlayer from 'react-player'
import style from '../style-sheets/ProjectDetail.module.css'
import {GitHub, Website} from '../img/index'


export default function ProjectDetail() {

    const {display, currentProject} = useProject()

    const {videoUrl, codeUrl, technologies, description, projectUrl, features} = currentProject

    const [screenWidth, setScreenWidth] = useState(document.body.clientWidth)

    window.addEventListener('resize', ()=>{

        setScreenWidth(document.body.clientWidth)
    })
    
    return (

        <div className={style.project_detail} style={{display: display}}>

            <div className={style.content}>

                <div className={style.player}>
                    {screenWidth > 550 ? <ReactPlayer url={videoUrl} controls={true} width='100%'/> : <ReactPlayer url={videoUrl} controls={true} width='100%' height='100%' />}
                </div>

                {!projectUrl && !codeUrl ? null :

                    <div className={style.buttons}>
                        <h4>View More:</h4>
                        <button onClick={()=> window.open(projectUrl, '_blank')} style={{display: projectUrl ? 'flex' : 'none'}}><img src={Website}/>View Project</button>
                        <button onClick={()=> window.open(codeUrl, '_blank')} style={{display: codeUrl ? 'flex' : 'none'}}><img src={GitHub}/>View Repository</button>
                    </div>
                }

            </div>

            <div className={style.about}>

                <h4>About</h4>
                {description}
                <h4>Project Features</h4>
                <p>{features}</p>
                <h4>Used Technologies</h4>
                <p>{technologies}</p>

            </div>

        </div>
    )
    
}
