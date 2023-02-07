import React from "react";
import Project from "./Project.jsx";
import style from '../style-sheets/Projects.module.css'
import {WeatherApp, Pokedex, Moviefy} from '../img/index'

export default function Projects(){

    return(

        <div className={style.projects_container} id='projects'>

            <div>
                <Project name="Moviefy +" img={Moviefy} codeUrl={'https://github.com/BelenDeAmorrortu/PF-Henry-Front'} projectUrl={'https://hpfc.netlify.app/'} videoUrl={'https://drive.google.com/file/d/19ey-bygD9MnvCcw-gbhGIvLaGLZsv9G0/view'} alert={true} />
            </div>

            <div>
                <Project name="Poke-dex" img={Pokedex} codeUrl={'https://github.com/BelenDeAmorrortu/Poke-dex'} projectUrl={'https://pokedex-belendeamorrortu.netlify.app'} />
            </div>

            <div>
                <Project name="Weather App" img={WeatherApp} codeUrl={'https://github.com/BelenDeAmorrortu/Weather-App'} projectUrl={'https://weather-app-belendeamorrortu.netlify.app/'} />
            </div>

            {/* PROJECTS IN PROGRESS

            <div id='project4'>
                <Project name="Study Advisor" img={WeatherAppImg} codeUrl={'https://www.google.com.ar/'} projectUrl={'https://www.google.com.ar/'} />
            </div> */}
            
        
        </div>

    )
}