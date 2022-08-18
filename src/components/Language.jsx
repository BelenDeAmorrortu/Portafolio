import React from 'react'
import style from '../style-sheets/Language.module.css'

export default function Language({img, name}){

    return(

        <div className={style.language_container}>
            <img src={img} alt={name}></img>
            <h6>{name}</h6>
        </div>
    )


}