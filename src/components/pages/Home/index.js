import { useGifs } from "../../../hooks/useGifs";
import ListOfGifs from "../../ListOfGifs";
import Category from "../../Category";
import './style.css'
import TrendingSearches from "../../TrendingSearches";
import { Helmet } from "react-helmet";
import SearchForm from "components/SearchForm";
const POPULAR_GIFS = ["Attack of Titans", "Kimetsu", "Naruto", "Boku No Hero", "Spy Family"]

export default function Home () {
    const {gifs} = useGifs()
    
    
   
    return (
        <div>
            <Helmet>
                <title>Home | Giff</title>
            </Helmet>
           <header>
            <SearchForm/>
           </header>
            <h3>Top Animes Represented by consuming a Gif's API</h3>
            <h3>Popular Categories</h3>
            <div className="categoryInputs">
                <Category options={POPULAR_GIFS}/>
            </div>
            
            <h3 className="center-content"> Your Last Search </h3>
            <ListOfGifs gifs={gifs}/>
            <TrendingSearches className='trending'/>
        </div>
    )
}