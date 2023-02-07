import React from 'react'
import style from '../style-sheets/Skill.module.css'

export default function Skill({img, name}){

    return(

        <div className={style.skill_container}>
            <img src={img} alt={name}></img>
            <h6>{name}</h6>
        </div>
    )
}