import React from 'react';
import { Switch,Route, Redirect,Link } from 'react-router-dom';

import SignInSide from './SignInSide';
import Dashboard from './Dashboard';
import SignUp from './SignUp';


const Routes = () => {
  return (
  <div>

     <Switch>
             <Route exact path="/">
               <SignInSide />
             </Route>

              <Route exact path="/signInSide">
                            <SignInSide />
                          </Route>


             <Route path="/about">
               <About />
             </Route>
             <Route path="/dashboard">
               <Dashboard />
             </Route>
               <Route path="/signUp">
                            <SignUp />
                          </Route>

           </Switch>
           </div>
  );
};


function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}



export default Routes;