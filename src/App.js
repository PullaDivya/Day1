/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
import { BrowserRouter,Routes,Route } from 'react-router-dom';
//import CardList from './cardlist';
import { createContext,useState } from 'react';
import Profile from './profile';
import Ass3 from './project';
import Home from './Home';

export const globalContext=createContext();

function App(){
  const [globalCount,setGlobalCount]=useState(0);
  const [globalUserObject,setglobalUserObject]=useState({});
    return(
      <globalContext.Provider value={{globalCount,setGlobalCount,globalUserObject,setglobalUserObject}}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/project" element={<Ass3/>}/>
                <Route path="/profile" element={<Profile/>}/>

            </Routes>
        </BrowserRouter>
        </globalContext.Provider>
    );
}
export default App;