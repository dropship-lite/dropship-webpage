import React, { Component, useEffect, useRef } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import android from '../../assets/logos/android.png'
import arrow from '../../assets/logos/more-arrow.png'
import up_arrow from '../../assets/logos/up-arrow.png'
import './home.css';
import Navigation from '../components/navbar';

import $ from 'jquery';

import login from '../../assets/images/apps/login.png';
import home_new from '../../assets/images/apps/home-new-dark.png';
import reg_stockist from '../../assets/images/apps/reg-stockist.png';
import profile from '../../assets/images/apps/profile.png';
import home_month from '../../assets/images/apps/home-month.png';
import home_daily from '../../assets/images/apps/home-daily.png';
import agents from '../../assets/images/apps/agent.png';
import req_item from '../../assets/images/apps/rq-item.png';
import chats from '../../assets/images/apps/chat.png';

function HomePage(){

    window.onscroll = function (e) {
        var height = window.innerHeight;
        if(this.scrollY > (height/10) && this.scrollY < height){
            // console.log('toppu')
            document.getElementById('up').style.display ="none";
            document.getElementById('floating-button').style.display ="none";
            document.getElementById('down').style.display ="flex";
            // document.getElementById('lower-moon').style.paddingTop ="150px";
        }else if(this.scrollY >= height){
            document.getElementById('up').style.display ="none";
            document.getElementById('down').style.display ="none";
            document.getElementById('floating-button').style.display ="flex";
            // document.getElementById('lower-moon').style.paddingTop ="50px";
        }else{
            document.getElementById('up').style.display ="flex";
            document.getElementById('down').style.display ="flex";
            document.getElementById('floating-button').style.display ="none";
        }

        this.oldScroll = this.scrollY;
    }

    const moreApps = () => {
        var height = window.innerHeight;
        console.log('clicked ' + height);
        window.scroll({top: height, behavior:'smooth'});
    }

    const backTop = () => {
        window.scroll({top: 0, behavior:'smooth'});
    }

    const downloadHandle = () => {
        window.location.href = 'https://firebasestorage.googleapis.com/v0/b/dropship-lite.appspot.com/o/app-related%2Fdropshiplite.apk?alt=media&token=0d184cf5-1149-4d06-9d04-851b1a142821';
    };

    useEffect(() => {
        Aos.init({duration: 3000});
    }, [])

    return (
        <div className="homepage">
            <div className="floating-button" id="floating-button" onClick={backTop}>
                <div className="floating-container">
                    <img src={up_arrow} alt="" className="floating-arrow"/>
                </div>
            </div>
            <div className="fade-section">
                <div data-aos="fade-up" className="upper-moon" id="upper-moon">
                    <div className="container">
                        <div className="upper">
                            {/* expand ur business */}
                            MANAGE YOUR BUSINESS SEAMLESSLY WITH US
                        </div>
                        <div className="content-container">
                            <div className="content">
                                {/* download button */}
                                <div className="text">
                                    Experience it now!
                                </div>
                                <div className="sized-box-width"></div>
                                <div className="download-container">
                                    <button className="download" onClick={downloadHandle}>
                                        <img src={android} alt="" className="android"/>
                                        <div className="sized-box-width"></div>
                                        <div className="download-label">
                                            Download
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="lower">
                            {/* thank you for downloading */}
                            Thank you for downloading
                        </div>
                    </div>
                </div>
            </div>
            <div className="more" id='more'>
                <div className="container"></div>
                <div className="up" id="up"  onClick={moreApps}>
                    <img src={arrow} alt="" className="arrow"/>
                </div>
                <div className="down" id="down" onClick={backTop}>
                    <img src={up_arrow} alt="" className="arrow"/>
                </div>
            </div>
            <div className="fade-section">
                <div className="lower-moon" id="lower-moon">
                    {/* tempat tunjuk screenshot */}
                    <div className="more-sections">
                        <div className="container">
                            <div data-aos="fade-right" className="app-label">
                                SIMPLE STEP TO REGISTER <br/> WITH YOUR SOCIAL ACCOUNTS
                            </div>
                            <div data-aos="fade-up-left" className="app-image">
                                <img src={login} alt="" className="image"/>
                            </div>
                        </div>
                    </div>
                    <div className="more-sections">
                        <div className="container">
                            <div data-aos="fade-up-right" className="app-image">
                                <img src={profile} alt="" className="image"/>
                            </div>
                            <div data-aos="fade-down-left" className="app-label">
                                CUSTOMIZE YOUR PROFILE AND KEEP TRACK ON YOUR DROPSHIP LITE SUBSCRIPTION
                            </div>
                        </div>
                    </div>
                    <div className="more-sections">
                        <div className="container">
                            <div data-aos="fade-down-right" className="app-label">
                                YOU ARE A STOCKIST? REGISTER YOURSELF AS STOCKIST EASILY BY ONLY A CLICK ON A BUTTON
                            </div>
                            <div data-aos="fade-up-left" className="app-image">
                                <img src={reg_stockist} alt="" className="image"/>
                            </div>
                        </div>
                    </div>
                    <div className="more-sections">
                        <div data-aos="fade-up" className="container">                            
                            <div className="app-image">
                                <div className="app-home">
                                    <img src={home_daily} alt="" className="image"/>
                                    <img src={home_month} alt="" className="image"/>
                                </div>
                            </div>
                            <div className="app-label">
                                VISUALLY TRACK YOUR SALES BASED ON DAILY OR MONTHLY
                            </div>
                        </div>
                    </div>
                    <div className="more-sections">
                        <div data-aos="fade-down" className="container">
                            <div className="app-label">
                                REQUEST TO RESTOCK PRODUCT FROM YOUR STOCKIST WITHIN DROPSHIP LITE
                            </div>
                            <div data-aos="zoom-out-up" className="app-image">
                                <img src={req_item} alt="" className="image"/>
                            </div>
                        </div>
                    </div>
                    <div className="more-sections">
                        <div className="container">                        
                            <div data-aos="fade-up-right" className="app-image">
                                <img src={agents} alt="" className="image"/>
                            </div>
                            <div data-aos="fade-up-left" className="app-label">
                                EXPAND YOUR BUSINESS REACH BY ADVERTISING YOUR JOB VACANCY IN DROPSHIP LITE
                            </div>
                        </div>
                    </div>
                    <div className="more-sections">
                        <div className="container"> 
                            <div data-aos="fade-up-right" className="app-label">
                                INTRESTED TO JOIN DROPSHIPPING BUSINESS? FIND YOURSELF A BEST SUITED PRODUCT FOR YOU TO SELL
                            </div>                       
                            <div data-aos="fade-down-left" className="app-image">
                                <img src={home_new} alt="" className="image"/>
                            </div>
                        </div>
                    </div>
                    <div className="more-sections">
                        <div className="container">                        
                            <div data-aos="zoom-in-right" className="app-image">
                                <img src={chats} alt="" className="image"/>
                            </div>
                            <div data-aos="zoom-in-left" className="app-label">
                                CONNECT WITHIN YOUR BUSINESS GROUP FROM DROPSHIP LITE
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;