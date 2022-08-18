import React from "react";
import Project from "./Project.jsx";
import '../style-sheets/Projects.css'
import WeatherAppImg from '../img/WeatherApp.png'

export default function Projects(){

    return(

        <div className="projects_container">

            <div id='project1'>
                <Project name="Weather App" img={WeatherAppImg} codeUrl={'https://github.com/BelenDeAmorrortu/Weather-App'} projectUrl={'https://weather-app-belendeamorrortu.netlify.app/'} />
            </div>

            
            <div id='project2'>
                <Project name="Weather App" img={WeatherAppImg} codeUrl={'https://www.google.com.ar/'} projectUrl={'https://www.google.com.ar/'} />
            </div>

            
            <div id='project3'>
                <Project name="Weather App" img={WeatherAppImg} codeUrl={'https://www.google.com.ar/'} projectUrl={'https://www.google.com.ar/'} />
            </div>

            
            <div id='project4'>
                <Project name="Weather App" img={WeatherAppImg} codeUrl={'https://www.google.com.ar/'} projectUrl={'https://www.google.com.ar/'} />
            </div>
            
        
        </div>

    )
}