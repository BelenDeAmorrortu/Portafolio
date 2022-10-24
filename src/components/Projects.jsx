import React from "react";
import Project from "./Project.jsx";
import style from '../style-sheets/Projects.module.css'
import WeatherAppImg from '../img/WeatherApp.png'
import Pokemon from '../img/Pokemon.png'
import Moviefy from '../img/Moviefy.png'

export default function Projects(){

    return(

        <div className={style.projects_container} id='projects'>

            <div>
                <Project name="Moviefy +" img={Moviefy} codeUrl={'https://www.google.com.ar/'} projectUrl={'https://hpfc.netlify.app/'} videoUrl={'https://drive.google.com/file/d/19ey-bygD9MnvCcw-gbhGIvLaGLZsv9G0/view'} alert={true} />
            </div>

            <div>
                <Project name="Poke-dex" img={Pokemon} codeUrl={'https://github.com/BelenDeAmorrortu/Poke-dex'} projectUrl={'https://pokedex-belendeamorrortu.netlify.app'} />
            </div>

            <div>
                <Project name="Weather App" img={WeatherAppImg} codeUrl={'https://github.com/BelenDeAmorrortu/Weather-App'} projectUrl={'https://weather-app-belendeamorrortu.netlify.app/'} />
            </div>

            {/* PROJECTS IN PROGRESS

            <div id='project4'>
                <Project name="Study Advisor" img={WeatherAppImg} codeUrl={'https://www.google.com.ar/'} projectUrl={'https://www.google.com.ar/'} />
            </div> */}
            
        
        </div>

    )
}