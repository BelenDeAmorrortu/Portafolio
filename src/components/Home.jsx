import React from "react";
import style from '../style-sheets/Home.module.css'
import {Portrait} from '../img/index'

export default function Home({passRef}){


    return(

        <section ref={passRef} id='home'>

            <div className={style.home}>

                <img src={Portrait} />

                <h1>{ `< / Full Stack Developer >` }</h1>

            </div>

        </section>

    )

}