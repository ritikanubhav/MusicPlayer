import MusicData from "./MusicData"
import React,{useState,useRef}from  "react"
import Player from "./components/Player.jsx"
import Navbar from "./components/Navbar.jsx"
export default function App()
{
  const[music]=useState(MusicData)
  const[index,setIndex]=useState(0);
  console.log("app rendered");
  return(
    <div className="app">
        <Navbar />
        <Player
          index={index}
          setIndex={setIndex}
          music={music}
        />
    </div>
  )
}