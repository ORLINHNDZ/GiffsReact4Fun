import React, { useReducer, useState } from "react"
import { useLocation } from "wouter"
import css from "./SearchForm.module.css"
import useForm from "./hook"

const RATINGS = ['g', 'pg', 'pg-13', 'r']


export default function SearchForm({
     initialKeyword='',
     initialRating='g'
    }) {

    const {keyword, rating, times, updateKeyword, updateRating} = useForm({ 
        initialKeyword, 
        initialRating })

    const [_, pushLocation] = useLocation()

    const handleChange = evt => {
        updateKeyword(evt.target.value)
        
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        pushLocation(`/gif/${keyword}/${rating}`)
    }

      const handleChangeRating = evt => {
        updateRating(evt.target.value)
    }

    
    return (
        <>
            <form onSubmit={handleSubmit} className={css["c-search"]}>
                <button>Search</button>
                <input
                    className={css["c-search-input"]}
                    placeholder="Search a gif here..."
                    onChange={handleChange}
                    type="text"
                    value={keyword}
                />
                <select  onChange={handleChangeRating} value={rating}>
                    <option className="c-option" disabled>Rating Type</option>
                    {RATINGS.map(rating => <option key={rating}>{rating}</option>)}
                </select>
                
            </form>
        </>
    )
}