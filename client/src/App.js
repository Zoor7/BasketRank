import {useContext} from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './Componenets/Header/Header'
import Routes from './Routes/Routes';


import './App.scss'
import UserContext from './context/userContext';


function App() {

  const {userState}= useContext(UserContext)
  console.log(userState);


  return (
    <Router>
      <div className="app">
        <header>
          <Header />
        </header>
        <main>
          <Switch>
            <Route path='*'>
              <Routes />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
