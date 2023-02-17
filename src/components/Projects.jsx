import React from "react";
import Project from "./Project.jsx";
import style from '../style-sheets/Projects.module.css'
import { useProject } from "../context/ProjectContext.jsx";
import projects from '../data/Projects'
import ProjectDetail from "./ProjectDetail.jsx";

export default function Projects(){

    const {display} = useProject()

    return(

        <>
            <div className={style.projects_container} id='projects' style={{display: display === 'flex' ? 'none' : 'flex'}}>

                { projects.map( p =>  <div><Project project={p}/></div>) }

            </div>

            <ProjectDetail />
        </>
    )
}