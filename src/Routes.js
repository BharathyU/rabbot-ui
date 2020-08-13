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
                          <Route path="/takeInterview">
                                       <TakeInterview />
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


function TakeInterview() {
  return (
    <div>
      <h2>Interview</h2>
      <div>
     <iframe src="https://web-chat.global.assistant.watson.cloud.ibm.com/preview.html?region=us-south&integrationID=283f7085-59e2-4208-af3b-512e651fbd04&serviceInstanceID=6db5e63c-1ba7-4f5a-b0c4-c2eb02a1af91"  height="800" width="1800"   ></iframe>
      </div>
    </div>
  );
}
export default Routes;