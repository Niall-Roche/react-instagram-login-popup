import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './Main'
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={Main} />
        <Route exact path='/login' render={Login} />
        <Route exact path='/login/*' render={Login} />
      </Switch>
      </BrowserRouter>
  );
}

export default App;
