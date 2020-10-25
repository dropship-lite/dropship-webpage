import React, { useState, } from 'react';
import Homepage from './home/homepage/homepage'
import './App.css';
import Firefly from './home/fireflies/fireflies'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import DonationPage from './donate/donate'
import AfterDonate from './donate/after-donate';
import ReactGA from 'react-ga'

function App(){

  React.useEffect(() => {
    ReactGA.initialize('UA-180756841-1')

    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])
  
  return (
    <Router  basename={process.env.PUBLIC_URL}>
    <Switch>
      <div className='page-container' style={{height:'100vh'}}>
        <div className='page-content'>
          {/* <div className='footer' style={{position:'absolute',}}>
            <Footer/>
          </div> */}
          <div style={{position:'absolute',}}>
            <Firefly/>
          </div>
          <div style={{position:'absolute',}}>
              <Route path='/thank-you' exact render={props=><AfterDonate/>} component={AfterDonate} ></Route>
              <Route path='/donate' exact render={props=><DonationPage/>} component={DonationPage} ></Route>
              <Route path='/' exact render={props=><Homepage/>} component={Homepage} ></Route>
             
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
    </Switch>
    </Router>
  );
}

export default App;
