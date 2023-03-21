import React from "react";
import Gif from "components/Gif/Gif";
import useSingleGif from "hooks/useSingleGif";
import { Redirect } from "wouter";
import {Helmet} from "react-helmet";

export default function Detail ({params}){
    const {gif, isLoading, isError} = useSingleGif({id: params.id})
    const title = gif ? gif.title : ""
    
    if (isLoading) {
        return <>
        <Helmet>
            <title>Cargando....</title>
        </Helmet>
        <h1>Cargando...</h1>
        </>  
    }
    
    if (!gif) return null

    return <>
        <Helmet>
            <title>{title}| Giff</title>
        </Helmet>
        <Gif {...gif} />
        </>
}