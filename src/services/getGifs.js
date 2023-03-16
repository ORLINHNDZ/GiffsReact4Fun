import {API_KEY, API_URL}from './settings'
export default function getGifs ({limit= 5, keyword = 'morty', page = 0} = {}){

    const apiUrl = `${API_URL}gifs/search?api_key=${API_KEY}=${keyword}&limit=${limit}&offset=${page * limit}&rating=pg-13&lang=en`

    return fetch(apiUrl)
      .then(res => res.json())
      .then(response => {
        const {data} = response
        const gifs = data.map(image => {
        const {images, title, id} = image
        const {url} = image.images.downsized_medium
        return { images, title, id, url}
        
        })
        return gifs
      })
}
