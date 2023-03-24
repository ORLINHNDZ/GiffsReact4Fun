import useUser from "hooks/useUser";
import React, { useEffect, useState } from "react";
import { useLocation } from "wouter";


export default function Login() {
    const [username, setusername] = useState('')
    const[password, setPassword] = useState('')
    const [, navigate] = useLocation()
    const {isLoginLoading, hasLogError, login, isLogged} = useUser()

    useEffect(() => {
        if(isLogged){
            navigate('/')
        }
    },[isLogged])

    const handleSubmit = (e) => {
        e.preventDefault()
        login({username, password})
    }

    return (
        <>
        <h2>Login</h2>
        {isLoginLoading && <strong>Checking credentials...</strong>}
        {!isLoginLoading && 
        <form onSubmit={handleSubmit}>
            <input placeholder="username" onChange={e => setusername(e.target.value)} value={username} />
            <input type='password' placeholder="password" onChange = {e=> setPassword(e.target.value)} value={password} />
            <button onClick={handleSubmit}>Login</button>
        </form>
        }
        {
            hasLogError && <strong>Credential are invalid</strong>
        }
        </>
    )

}