import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useGifs } from "../../../hooks/useGifs";
import ListOfGifs from "../../ListOfGifs";
import Category from "../../Category";
import './style.css'
import TrendingSearches from "../../TrendingSearches";
const POPULAR_GIFS = ["Attack of Titans", "Kimetsu", "Naruto", "Boku No Hero", "Spy Family"]

export default function Home () {
    const [keyword, SetKeyword] = useState('')
    const [path, SetPath] = useLocation()
    const {loading, gifs} = useGifs()
    
    


    const handleSubmit = evt => {
        evt.preventDefault()
        console.log(keyword)
        SetPath(`/gif/${keyword}`)
    }

    const handleChange = evt => {
        SetKeyword(evt.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input placeholder="Search for a Gif..." onChange={handleChange} type='text' value={keyword} /> 
                <button>Buscar</button>
            </form>
            <h3>Top Animes Represented by consuming a Gif's API</h3>

            <ul className="center-content">
                {POPULAR_GIFS.map((popularGif) => (
                    <ol key={popularGif}>
                        <Link to = {`/gif/${popularGif}`}>{popularGif}</Link>
                    </ol>
                ))}
            </ul>
            <h3>Popular Categories</h3>
            <div className="categoryInputs">
                <Category options={POPULAR_GIFS}/>
            </div>
            
            <h3 className="center-content"> Ultima busqueda</h3>
            <ListOfGifs gifs={gifs}/>
            <TrendingSearches className='trending'/>
        </div>
    )
}