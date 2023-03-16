import React from "react";
import Gif from "../Gif/Gif";
import './style.css'
export default function ListOfGifs ({gifs}) {
    return <div className="listOfGifs">
        {
            gifs.map(setGifs =>
                <Gif
                    key={setGifs.id}
                    title={setGifs.title}
                    url={setGifs.url}
                    id={setGifs.id}
                />
            )
        }
    </div>
}