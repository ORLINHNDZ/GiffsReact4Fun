
import './App.css';
import SearchResults from './components/pages/SearchResults/SearchResults';
import { Link, Route } from "wouter"
import Header from 'components/Header';
import Home from './components/pages/Home';
import Detail from './components/pages/Detail';
import Category from './components/Category';
import { UserContextProvider } from 'context/UserContext';
import { GifsContextProvider } from './context/GifsContext';
import Login from 'components/pages/Login';
function App() {



  return (
    <UserContextProvider>
    <div className="App">
      <section className="App-content">
        <Header/>
        <Link to='/'><h1>Awesome Giff React App</h1></Link>
        <GifsContextProvider>
        <Route component={Home} path="/" />
        <Route component={Detail} path="/gif/:id" />
        <Route path = "/gif/:keyword/:rating?" component = {SearchResults}/>
        <Route path = "/404" component = {() => <h1>ERROR 404</h1>}/>
        <Route path='/login' component={Login}/>

        </GifsContextProvider>
      </section>
    </div>
   </UserContextProvider>
  );
}

export default App;
