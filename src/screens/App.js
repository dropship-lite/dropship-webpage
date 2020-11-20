import React, { useState, } from 'react';
import './App.css';
import Navbar from './components/navbar'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import DonationPage from './donate/donate';
import ReactGA from 'react-ga';
import HomePage from './home/home-main';
import more from '../assets/logos/more-arrow.png';

function App(){
  return(
    <>
    <Router>
      <div className="header">
        <Navbar/>
      </div>
      <div className="body">
        <Switch>
          <Route path="/donate" exact component={DonationPage}/>
          <Route path="/" exact component={HomePage}/>
        </Switch>
      </div>
      <div className="footer">
        
      </div>
    </Router>
    </>
  );
}

export default App;