import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Main from './Main';
import Compare from './Compare';
import NSubscribe from './NewSubscribe';
import Subscribe from './Subscribe';
import Login from './Login/Login_page';
import Community_page from './Community/Community_page';


function App() {
  return (
    
    <Router>
      <Route exact path="/" component={Main}/>
      <Route exact path="/compare" component={Compare}/>
      <Route exact path="/subscribe" component={NSubscribe}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/community" component={Community_page}/>
    </Router>

  );
}

export default App;
