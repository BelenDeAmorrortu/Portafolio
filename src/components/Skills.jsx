import React from "react";
import Skill from './Skill.jsx'
import style from '../style-sheets/Skills.module.css'
import {Bootstrap, CSS, Express, Firebase, Git, GitHub, HTML, JavaScript, Json, Less, Mongo, NodeJS, Postman, PostgreSQL, ReactIMG, Redux, REST_API, Sass, Sequelize, VS_Code} from '../img/index'


export default function Skills(){

    return(

        <div className={style.skills_container}  id='technical_skills_and_tools'>
            <Skill name='HTML' img={HTML} />
            <Skill name='CSS' img={CSS} />
            <Skill name='JavaScript' img={JavaScript} />
            <Skill name='React' img={ReactIMG} />
            <Skill name='Redux' img={Redux} />
            <Skill name='Node.js' img={NodeJS} />
            <Skill name='Express.js' img={Express} />
            <Skill name='Json' img={Json} />
            <Skill name='Git' img={Git} />
            <Skill name='GitHub' img={GitHub} />
            <Skill name='Sass' img={Sass} />
            <Skill name='Less' img={Less} />
            <Skill name='Bootstrap' img={Bootstrap} />
            <Skill name='VS Code' img={VS_Code} />
            <Skill name='PostgreSQL' img={PostgreSQL} />
            <Skill name='Sequelize' img={Sequelize} />
            <Skill name='Mongo DB' img={Mongo} />
            <Skill name='Firebase' img={Firebase} />
            <Skill name='Postman' img={Postman} />
            <Skill name='REST API' img={REST_API} />
        </div>
    )
}