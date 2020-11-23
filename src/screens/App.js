import React, { useState, } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import DonationPage from './donate/donate';
import ReactGA from 'react-ga';
import more from '../assets/logos/more-arrow.png';

import HomePage from './home/home-main';
import Navbar from './components/navbar';
import Footer from './footer/footer';

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
        <Footer/>
      </div>
    </Router>
    </>
  );
}

export default App;