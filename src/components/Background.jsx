import React from 'react'
import style from '../style-sheets/Background.module.css'

export default function Background(){

    return (

        <div className={style.sparks_container}>

            <div className={style.sparks} >

                {[11,14,17,13,20,15,16,12,18,21,30,24,22,23,15,27,26,29,14,12,13,17,15,20,18,21,19,24,22,23,28,26,25].map( n =>{
                    return <span style={{"--i": n }}></span>
                })}

            </div>
            
        </div>
    )
}