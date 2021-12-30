import React from "react";
import Tracklist from "../Tracklist";
import "./Playlist.css";

export class Playlist extends React.Component{
    render(){
        return (
            <div className="Playlist">
                <input defaultValue={'New Playlist'}/>
                <Tracklist />
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}