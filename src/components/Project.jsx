import React from "react";
import style from '../style-sheets/Project.module.css'
import Swal from "sweetalert2/dist/sweetalert2.all.min.js";


export default function Project( {name, img, codeUrl, projectUrl, alert, videoUrl} ){

    
    function handleAlert(){

        Swal.fire({
            text: `Some features on this website require a user, admin, or subscription account. 
            There is a video demonstrating some of this sections for you to see the full functionality.`,
            icon: "info",
            iconColor: "#5969fe",
            showCloseButton: true,
            showDenyButton: true,
            confirmButtonText: "Go to website",
            denyButtonText: "Watch demo",
            allowEnterKey: false,
            customClass: {
              popup: "Alert",
              closeButton: "closeButton",
              confirmButton: "confirmButton",
              denyButton: "denyButton"
            },
          }).then((result) => {
            if (result.isConfirmed) {
              window.open( projectUrl, '_blank');
            }

            if(result.isDenied){
                window.open( videoUrl, '_blank');
            }
          });
  
    }

    return(

        <div className={style.project_container}>


            <div className={style.image_container}  style={{backgroundImage: `url(${img})`}}>
                    
                <div className={style.buttons_container}>

                    {
                        !alert ?
                        <a href={projectUrl} target='_blank'>
                            <button>View Project</button>
                        </a>

                        :

                        <button onClick={handleAlert}>View Project</button>

                    }
                    <a href={codeUrl} target='_blank'><button>View Code</button></a>



                </div> 

            </div>

            <h4>{name}</h4>



            <div className={style.buttons_container_responsive}>

                {
                    !alert ?
                    <a href={projectUrl} target='_blank'>
                        <button>View Project</button>
                    </a>

                    :

                    <button onClick={handleAlert}>View Project</button>

                }

                <a href={codeUrl} target='_blank'><button>View Code</button></a>

            </div> 

            
        </div>
    )
}