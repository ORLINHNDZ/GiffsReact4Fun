import Context from "context/UserContext";
import { useCallback, useContext, useState } from "react";
import loginService from "services/login";

export default function useUser () {
    const {jwt, setJwt} = useContext(Context)
    const [state, setState] = useState({loading: false, error: false})
    const login = useCallback(({username, password}) => {
        setState({loading:true, error:false})
        loginService({username, password})
        .then(jwt => {
            setJwt(jwt)
        })
        .catch(err => {
            setState({loading:false, error:true})
            console.error(err)
        })
    }, [setJwt])


    const logout = useCallback(() => {
        setJwt(null)
    },[setJwt]) 
    return {
        isLogged: Boolean(jwt),
        isLoginLoading: state.loading,
        hasLogError: state.error,
        login,
        logout
    }
}