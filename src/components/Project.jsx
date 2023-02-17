import React from "react";
import style from '../style-sheets/Project.module.css'
import Swal from "sweetalert2/dist/sweetalert2.all.min.js";
import { useProject } from "../context/ProjectContext";
import { useState } from "react";
import { useEffect } from "react";

export default function Project( {project} ){

    const { setCurrentProject } = useProject()

    const {name, img, projectUrl, alert} = project

    const [image, setImage] = useState(typeof img === 'object' ? img[0] : img)

    useEffect(()=>{

        if(typeof img === 'object'){

            const int = setInterval(()=> image === img[0] ? setImage(img[1]) : setImage(img[0]), 3500)

            return ()=> clearInterval(int)
        }
    })

    function handleClick(){

        if(!alert) window.open(projectUrl, '_blank')

        else {

            Swal.fire({
                text: `Some features on this website require a user, admin, or subscription account. 
                There is a video demonstrating some of this sections for you to see the full functionality.`,
                icon: "info",
                iconColor: "#5969fe",
                showCloseButton: true,
                showDenyButton: true,
                denyButtonText: "Go to website",
                confirmButtonText: "Watch demo",
                allowEnterKey: false,
                customClass: {
                  popup: "Alert",
                  closeButton: "closeButton",
                  confirmButton: "confirmButton",
                  denyButton: "denyButton"
                },
            }).then((result) => {

                if (result.isDenied) window.open( projectUrl, '_blank');
                if(result.isConfirmed) setCurrentProject(project)
            });    
        }
    }

    return(

        <>
            <div className={style.project_container} key={name.length}>

                <div className={style.image_container}  style={{backgroundImage: `url(${image})`}}>
                        
                    <div className={style.buttons_container}>

                        {projectUrl && <button onClick={handleClick}>View Project</button>}
                        <button onClick={()=> setCurrentProject(project)}>About</button>

                    </div> 

                </div>
                
                <h4>{name}</h4>

                <div className={style.buttons_container_responsive}>

                    {projectUrl && <button onClick={handleClick}>View Project</button>}
                    <button className={!projectUrl ? style.onlyChild : null} onClick={()=> setCurrentProject(project)}>About</button>

                </div> 

            </div>

        </>  
    )
}