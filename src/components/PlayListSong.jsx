import React from 'react';
import { useEffect } from 'react';
import "./playListSong.css"
import {AiOutlineHeart} from "react-icons/ai"
import {BsThreeDotsVertical} from "react-icons/bs"
export default function PlayListSong(props){
    const duration=props.duration
    const {active,setActive}=props
    function formatter(myNumber){
        myNumber=Math.floor(myNumber%60)
        return ("0" + myNumber).slice(-2);
    }

    useEffect(()=>{
        if(active.isPlaying===true) 
            document.getElementById(`play-gif${props.currentIndex}`).style.visibility="visible";
        else if (active.isPlaying===false )
            document.getElementById(`play-gif${props.currentIndex}`).style.visibility="hidden";
        if(props.prevIndex>=0 && props.currentIndex!=props.prevIndex ) // && active.isPlaying===false
        {
            document.getElementById(`play-gif${props.prevIndex}`).style.visibility="hidden"
        }
    },[active,props.currentIndex])

    function playSong(){

        props.setIndex(props.index)
        document.getElementById(`play-gif${props.currentIndex}`).style.visibility="visible";
        props.setPrevIndex(props.currentIndex);
        setActive(function(prev){
            return({
                ...prev,
                isPlaying:true
            })
        })
    }

    return(
        <div className="playListSong" onClick={playSong}>
            <div className="img-detail">
                        <img src={props.img}/>
                        <div className="song-detail">
                            <h3>{props.title}</h3>
                            <p>{props.author}</p>
                        </div>
                    </div>
                    <img src="./images/play7.gif" id={`play-gif${props.index}`} className="play-gif" style={{width:'35px'}}/>
                    <AiOutlineHeart className="icon heart"/>
                    <p className='duration'>{Math.floor(duration/60)}:{formatter(duration)}</p>
                    <BsThreeDotsVertical className="more-option"/>
        </div>
    )
}