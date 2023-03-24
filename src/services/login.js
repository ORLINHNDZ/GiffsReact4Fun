const ENDPOINT = 'http:localhost:8080'

export default function loginService({username, password}) {
    return fetch(`${ENDPOINT}/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body : JSON.stringify({username, password})
    }).then(res => {
        if(!res.ok) throw new Error('Response not ok')
        return res.json
    }).then(res => {
        const {jwt} = res
        return jwt
    })
}