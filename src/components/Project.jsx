import React from "react";
import style from '../style-sheets/Project.module.css'

export default function Project( {name, img, codeUrl, projectUrl} ){

    return(

        <div className={style.project_container}>


            <div className={style.image_container}  style={{backgroundImage: `url(${img})`}}>
                    
                <div className={style.buttons_container}>

                    <a href={projectUrl} target='_blank'><button>View Project</button></a>
                    <a href={codeUrl} target='_blank'><button>View Code</button></a>

                </div> 

            </div>

            <h4>{name}</h4>

            <div className={style.buttons_container_responsive}>

                <a href={projectUrl} target='_blank'><button>View Project</button></a>
                <a href={codeUrl} target='_blank'><button>View Code</button></a>

            </div> 
            
        </div>
    )
}