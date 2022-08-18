import React from "react";
import '../style-sheets/Home.css'

export default function Home({passRef}){


    return(

        <section id='home' ref={passRef}>

            <div className="home">


                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCrXxFLXgIfd93CbRazceWHSB8f4fTWYkTPDIE9Pv79huTINOEVN2A62c9t7NHBxGN2Fg&usqp=CAU" alt="Foto Belén de Amorrortu" />

                <h1>{ `< / Full Stack Developer >` }</h1>


            </div>


        </section>

    )

}