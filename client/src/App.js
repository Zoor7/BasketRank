import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Header from './Componenets/Header/Header'
import Routes from './Routes/Routes';


import './App.scss'


function App() {


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
