import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import SignInSide from './SignInSide';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from './Routes';

const browserHistory = createBrowserHistory();

function App() {
 return (

     <Router history={browserHistory}>
             <Routes />
           </Router>

  );
}

export default App;
