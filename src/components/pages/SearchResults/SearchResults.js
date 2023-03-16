import React, { useCallback ,useEffect, useRef } from 'react';
import ListOfGifs from 'components/ListOfGifs';
import {useGifs} from 'hooks/useGifs';
import useNearScreen from 'hooks/useNearScreen';
import debounce from 'just-debounce-it';
export default function SearchResults({ params }) {
    
    const {keyword} = params
    const {loading, gifs, setPage} = useGifs({ keyword })
    const externalRef = useRef()
    const {isNearScreen} = useNearScreen(
        {
            externalRef: loading ? null : externalRef,
            once: false
        })
    
    console.log(isNearScreen)
    //const handleNextPage = () => console.log('next page')
    
    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 200
    ), [setPage])

    useEffect(function () {
        console.log(isNearScreen)
        if (isNearScreen) debounceHandleNextPage()
    }, [debounceHandleNextPage, isNearScreen])

    return <>
        {loading 
            ? <h1>Cargando...</h1> 
            : <>
            <h3>{decodeURI(keyword)}</h3>
            <ListOfGifs gifs ={gifs} />
            <div id='visor' ref={externalRef}></div>
            </>
        }
        <br/>
        <button onClick={debounceHandleNextPage}>Get Next Page</button>
    </>
}