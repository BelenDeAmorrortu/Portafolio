import React from "react";
import '../style-sheets/Project.css'

export default function Project( {name, img, codeUrl, projectUrl} ){

    return(

        <div className="project_container">

            {/* <img src={img} alt={`${name} preview`}/> */}

            <div className="image_container"  style={{backgroundImage: `url(${img})`}}>
                    
                <div className="buttons_container">

                    <a href={projectUrl} target='_blank'><button>View Project</button></a>
                    <a href={codeUrl} target='_blank'><button>View Code</button></a>

                </div> 

            </div>

            <h4>{name}</h4>

            <div className="buttons_container_responsive">

                <a href={projectUrl} target='_blank'><button>View Project</button></a>
                <a href={codeUrl} target='_blank'><button>View Code</button></a>

            </div> 
            
        </div>
    )
}