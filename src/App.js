import React, { useState, } from 'react';
import Homepage from './home/homepage/homepage'
import './App.css';
import Firefly from './home/fireflies/fireflies'
import Footer from './home/homepage/footer'
import {Route, BrowserRouter as Router, Switch, Link} from 'react-router-dom'
import DonationPage from './donate/donate'
import AfterDonate from './donate/after-donate';

function App(){
  return (
    <Router>
      <div className='page-container' style={{height:'100vh'}}>
        <div className='page-content'>
          <div style={{position:'absolute',}}>
            <Footer/>
          </div>
          <div style={{position:'absolute',}}>
            <Firefly/>
          </div>
          <div style={{position:'absolute',}}>
            <Switch>
              <Route path='/thank-you' component={AfterDonate} />
              <Route path='/donate' component={DonationPage} />
              <Route path='/' component={Homepage} />
            </Switch>
          </div>
        </div>
        <div className='page-link' style={{position:'absolute'}}>
          <nav>
            <ul>
              <li>
                <Link to='/' >Home</Link>
              </li>
              <li>
                <Link to='/donate' >Donate</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Router>
  );
}

export default App;
