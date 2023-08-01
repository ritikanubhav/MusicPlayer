import React,{useState,useEffect} from 'react';
import {MdLightMode,MdDarkMode} from "react-icons/md"
import './navbar.css'
import 'animate.css';
export default function(){
    const [darkMode,setDarkMode]= useState(false)
    return(
        <div className="navbar">
            <img className="logo animate__animated animate__rubberBand animate__slow" src="./images/logo2.png" />
            <div className="typewriter">
                <h1>Music Heals Soul</h1>
            </div>
            {!(darkMode) ? <MdLightMode className='darkmode' /> : <MdDarkMode className="button"/>}
        </div>
    )
}