import React from "react";
import Project from "./Project.jsx";
import style from '../style-sheets/Projects.module.css'
import WeatherAppImg from '../img/WeatherApp.png'
import Pokemon from '../img/Pokemon.png'

export default function Projects(){

    return(

        <div className={style.projects_container} id='projects'>

            <div id='project1'>
                <Project name="Weather App" img={WeatherAppImg} codeUrl={'https://github.com/BelenDeAmorrortu/Weather-App'} projectUrl={'https://weather-app-belendeamorrortu.netlify.app/'} />
            </div>

            
            <div id='project2'>
                <Project name="Poke-dex" img={Pokemon} codeUrl={'https://www.google.com.ar/'} projectUrl={'https://pokedex-belendeamorrortu.netlify.app'} />
            </div>

{/*          PROJECTS IN PROGRESS

            <div id='project3'>
                <Project name="e-commerce" img={WeatherAppImg} codeUrl={'https://www.google.com.ar/'} projectUrl={'https://www.google.com.ar/'} />
            </div>

            
            <div id='project4'>
                <Project name="Study Advisor" img={WeatherAppImg} codeUrl={'https://www.google.com.ar/'} projectUrl={'https://www.google.com.ar/'} />
            </div> */}
            
        
        </div>

    )
}