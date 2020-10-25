import React, { useState } from 'react'
import moduleName from './homepage-style.css'
import ReactGA from 'react-ga'
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'


function Homepage(){
    function click(){
        ReactGA.event({
            category: 'Button',
            action: 'download dropshiplite'
        })
        window.location.href = 'https://firebasestorage.googleapis.com/v0/b/dropship-lite.appspot.com/o/dropshipLite%2Fdropship-lite-v1.apk?alt=media&token=0c9ed85a-7eae-44ca-b63a-60c36f2ad564'
    }
    const headerlogo = require('../../assets/images/logo.gif') 
    return (
        <section className='hp'>
            <div className='header'>
                <div className='title'>
                    <img src={headerlogo} width='200px' height='200px'/>
                    <h1>DROPSHIP LITE</h1>
                </div>
                <div className='content'>
                    <p className='subtitle'>Expand your business without worries</p>
                    <div className='divider' style={{width:'50%'}}></div>
                    <div className='subcontent'>
                        <p className='text'>Supported platform</p>
                        <div className='button'>
                            <button className='download' onClick= {click} disabled='true'>Android</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hp-body'>
                <div className='text'>
                    The download link will be disabled for quite a while due to some critical maintainence need to be done along side assignments that needed to be done at the same time. 
                    I sacrificed times to do the maintainence in exchange to be able to focus on my final year of study.
                </div>
            </div>

            <div className='foot'>
                <div className='content'>
                    <p className='text'>DROPSHIP LITE - A PROJECT BY IRFAN ZAHIR</p>
                    <div className='divider'></div>
                    <div className='pengemis'>
                        <Link to='/donate'>I'm a student that need money to maintain this application</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Homepage;