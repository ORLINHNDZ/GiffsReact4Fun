import React from "react";
import {Link} from 'wouter'
import './Gif.css'

export default function Gif ({title, id, url}) {
    return (
      <Link to={`/gif/${id}`} className="Gif-link">
        <h4>{title}</h4>
        <img  loading="lazy" alt ={title} src={url}/>
       </Link>  
    )
    
}