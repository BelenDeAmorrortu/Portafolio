import React from "react";
import Language from './Language.jsx'
import '../style-sheets/Languages.css'
import HTML from '../img/HTML.png'
import CSS from '../img/CSS.png'
import JavaScript from '../img/JavaScript.png'
import ReactIMG from '../img/React.png'
import Redux from '../img/Redux.png'
import Git from '../img/Git.png'
import GitHub from '../img/GitHub.png'
import NodeJS from '../img/NodeJS.png'
import Bootstrap from '../img/Bootstrap.png'
import Less from '../img/Less.png'
import Webpack from '../img/Webpack.png'
import VSCode from '../img/VSCode.png'
import Express from '../img/express.png'
import Sass from '../img/Sass.png'
import Json from '../img/Json.png'

export default function Languages(){

    return(

        <div className="languages_container">
            <Language name='HTML' img={HTML} />
            <Language name='CSS' img={CSS} />
            <Language name='JavaScript' img={JavaScript} />
            <Language name='React' img={ReactIMG} />
            <Language name='Redux' img={Redux} />
            <Language name='Node.js' img={NodeJS} />
            <Language name='Express.js' img={Express} />
            <Language name='Json' img={Json} />
            <Language name='Git' img={Git} />
            <Language name='GitHub' img={GitHub} />
            <Language name='Webpack' img={Webpack} />
            <Language name='Sass' img={Sass} />
            <Language name='Less' img={Less} />
            <Language name='Bootstrap' img={Bootstrap} />
            <Language name='VS Code' img={VSCode} />



        </div>
    )
}