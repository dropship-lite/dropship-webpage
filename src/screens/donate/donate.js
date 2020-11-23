import React, { useRef, useState } from 'react'
import style from './donate.css'
import logo_dsl from '../../assets/logos/dropship-logo.png'
import CurrencyInput from "react-number-format";
import logo_paypal from "../../assets/logos/paypal.png";
import { Component } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

class DonationPage extends Component{

    constructor(){
        super()
        this.state = {
            data:''
        }

        Aos.init({duration: 3000});
    }

    handle(amount){
        this.setState({
            data: amount.target.value
        })
        const val = amount.target.value
        console.log(val)
        return val
    }

    sendToPaypal(value){
        let amount = value.target.value
        console.log('send '+amount)
        window.location.href = `https://www.paypal.com/paypalme/dropshiplite/${amount}`
    }
    
    render(){
        return (
            <>
                <div className="donate">
                    <div className="container">
                        <div data-aos="zoom-out-up" className="paypal">
                            <div className="header">
                                <div className="header-container">                    
                                    {/* logo here */}
                                    <div className="brand-logo">
                                        <img src={logo_dsl} alt="" className="logo"/>
                                    </div>
                                    <div className="brand-label">
                                        DROPSHIP LITE
                                    </div>
                                </div>
                            </div>
                            <div className="content">
                                {/* input here */}
                                <div className="form">
                                    <div className="form-label">
                                        RM            
                                    </div>
                                    <div className="form-input">
                                        <div className="input">
                                            <CurrencyInput onChange = { this.handle.bind(this)} thousandSeparator={true} isNumericString={true} allowNegative={false} placeholder='0.00' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="foot">
                                {/* button here */}
                                <div className="button-container">
                                    <button className="button" onClick={this.sendToPaypal} value={this.state.data} disabled={!this.state.data} id='link_paypal'>
                                        <img src={logo_paypal} alt="" className="logo-paypal"/>
                                        
                                        DONATE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    
}

export default DonationPage



// <div className='Donate'>
// <div style={{position:'absolute',}}>
//     <Fireflies/>
// </div>
//     <div className='container' style={{position:'absolute',}}>
//         <div className='Paypal'>
//             <div className='header'>
//                 <img src={logo_dsl} width='200px' height='200px'/>
//             </div>
//             <div className='content'>
//                     <div className='form'>
//                         <label>RM</label>
//                         <CurrencyInput onChange = { this.handle.bind(this)} thousandSeparator={true} isNumericString={true} allowNegative={false} placeholder='0.00' />
//                     </div>
//             </div>
//             <div className='footer'>
//                 <button onClick={this.sendToPaypal} value={this.state.data} disabled={!this.state.data} id='link_paypal'>
//                     <div className='button'>
//                         <img height='45px' width='45px' src={logo_paypal} />
//                         <label>
//                             DONATE
//                         </label>
//                     </div>
//                 </button>
//             </div>
//         </div>
//     </div>
// </div>