import { useContext ,useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import  GifsContext  from "../context/GifsContext";

const INITIAL_PAGE = 0
export function useGifs ({ keyword  } =  {keyword : localStorage.getItem('lastKeyword') || 'random' } ) {
    const [loading, setLoading] = useState(false);
    const [loadingNextPage, setLaodingNextPage] = useState(false)
    const [page, setPage] = useState(INITIAL_PAGE)
    const {gifs, setGifs} = useContext(GifsContext)


    const keywordToUse = keyword ||  localStorage.getItem('lastKeyword') || 'random'

    useEffect(function () {
        
        setLoading(true)
        
        
        getGifs({ keyword: keywordToUse })
        .then(gifs => {
            setGifs(gifs)
            setLoading(false)
        localStorage.setItem('lastKeyword', keyword)
        })
        console.log(keywordToUse)
    }, [keyword, keywordToUse, setGifs])

    useEffect(function () {
        if (page === INITIAL_PAGE ) return 
        setLaodingNextPage(true)
        getGifs({keyword: keywordToUse, page})
        .then(nextGifs => {
            setGifs(prevGifs => prevGifs.concat(nextGifs))
            setLaodingNextPage(false)
        })
    }, [keywordToUse, page])

    return {loading, loadingNextPage, gifs, setPage}
}