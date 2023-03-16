
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
        <h1>App</h1>
        <GifsContextProvider>
        <Route component={Home} path="/" />
        <Route component={Detail} path="/gif/:id" />
        <Route path = "/gif/:keyword" component = {SearchResults}/>
           
        </GifsContextProvider>
      </section>
    </div>
    </StaticContext.Provider>
  );
}

export default App;
