import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.gif'
import android from '../../assets/logos/android.png'
import './navbar.css';

import {Col, Container, Row} from 'react-bootstrap';

function Navbar() {
    const downloadHandle = () => {
        window.location.href = 'https://www.google.com';
    };
    
    return (
        <>
            <div className="navigation">
                <div className="brand-container">
                    <div className="brand-logo">
                        <img src={logo} alt="" className="logo"/>
                    </div>
                    <div className="brand-title">
                        DROPSHIP LITE
                    </div>
                </div>
                <div className="nav-menu">
                    <ul className="nav-cont">
                        <li className="nav-items">
                            <Link to='/' className="nav-links">
                                Home
                            </Link>
                        </li>
                        <li className="nav-items">
                            <Link to='/donate' className="nav-links">
                                Donate
                            </Link>
                        </li>
                        <li className="nav-items">
                            <button className="download">
                                <img src={android} alt="" className="android"/>
                                <div className="sized-box"></div>
                                <div className="download-label">
                                    Download
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
