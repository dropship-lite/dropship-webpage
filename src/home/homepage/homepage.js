import React, { useState } from 'react'
import moduleName from './homepage-style.css'


function Homepage(){
    function click(){
        window.location.href = 'https://firebasestorage.googleapis.com/v0/b/dropship-lite.appspot.com/o/dropshipLite%2Fdropship-lite.apk?alt=media&token=c68f5453-bb0c-406a-a0f7-c7706fa9c7f6'
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
                            <button className='download' onClick= {click} >Android</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hp-body'>
            </div>
        </section>
    );
}

export default Homepage;