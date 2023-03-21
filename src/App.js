
import './App.css';
import SearchResults from './components/pages/SearchResults/SearchResults';
import { Link, Route } from "wouter"
import Home from './components/pages/Home';
import Detail from './components/pages/Detail';
import StaticContext from './context/StaticContext';
import Category from './components/Category';
import { GifsContextProvider } from './context/GifsContext';
function App() {



  return (
    <StaticContext.Provider value={{
    name : "Santiago",
    suscribeteAlCanal : true
    }
    }>
    <div className="App">
      <section className="App-content">
        <Link to='/'><h1>Awesome Giff React App</h1></Link>
        <GifsContextProvider>
        <Route component={Home} path="/" />
        <Route component={Detail} path="/gif/:id" />
        <Route path = "/gif/:keyword" component = {SearchResults}/>
        <Route path = "/404" component = {() => <h1>ERROR 404</h1>}/>
        </GifsContextProvider>
      </section>
    </div>
    </StaticContext.Provider>
  );
}

export default App;
