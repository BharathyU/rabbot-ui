import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Button from '@material-ui/core/Button';
import SignInSide from './SignInSide';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from './Routes';

const browserHistory = createBrowserHistory();

//axios.defaults.baseURL = 'http://localhost:9080/';

axios.defaults.baseURL = 'https://rabbot-codepattern-service-rabbot-test.sandbox-ocp431-one-89dadfe96916fcd27b299431d0240c37-0000.eu-gb.containers.appdomain.cloud/';

function App() {
 return (

     <Router history={browserHistory}>
             <Routes />
           </Router>

  );
}

export default App;
