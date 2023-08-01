import React from "react"
import "./verticalnavbar.css"
import {AiFillHome} from "react-icons/ai"
import {PiPlaylistBold} from "react-icons/pi"
import {MdLibraryMusic,MdContactSupport} from "react-icons/md"
export default function VerticalNavbar(){
    return(
        <div className="vertical-navbar">
            <div className="menu">
                <AiFillHome className="icon"/>
                <p>HOME</p>
            </div>
            <div className="menu">
                   <MdLibraryMusic className="icon"/>
                   <p>ALL SONGS</p>
            </div>
            <div className="menu">
               <PiPlaylistBold className="icon"/>
               <p>PLAYLIST</p>
            </div>
            <div className="menu">
                <MdContactSupport className="icon"/>
                <p>INFO</p>
            </div>
        </div>
    )
}