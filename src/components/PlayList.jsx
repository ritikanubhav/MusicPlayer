import React from "react"
import "./playlist.css"
import PlayListSong from "./PlayListSong"
export default function PlayList(props){
    const songs=props.music
    const {active,setActive,prevIndex,setPrevIndex}=props
    return(
        <div className="playList">
        <h2 className="heading">ALL SONGS</h2>
            <ul>
            {
                songs.map((song,index)=>(
                <li>
                    <PlayListSong
                        index={index}
                        currentIndex={props.index}
                        setIndex={props.setIndex}
                        prevIndex={prevIndex}
                        setPrevIndex={setPrevIndex}
                        active={active}
                        setActive={setActive}
                        title={song.title}
                        author={song.author}
                        duration={song.duration}
                        url={song.url}
                        img={song.img}
                    />
                </li>))
                
            }
            </ul>
        </div>
    )
}