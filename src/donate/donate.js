import React, { useRef, useState } from 'react'
import style from './donate.css'
import logo from '../assets/logos/dropship-logo.png'
import CurrencyInput from "react-number-format";
import paypal from "../assets/logos/paypal.png";
import { Component } from 'react';

class DonationPage extends Component{

    constructor(){
        super()
        this.state = {
            data:''
        }
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
            <div className='Donate'>
                <div className='container'>
                    <div className='Paypal'>
                        <div className='header'>
                            <img src={logo} width='200px' height='200px'/>
                        </div>
                        <div className='content'>
                                <div className='form'>
                                    <label>RM</label>
                                    <CurrencyInput onChange = { this.handle.bind(this)} thousandSeparator={true} isNumericString={true} allowNegative={false} placeholder='0.00' />
                                </div>
                        </div>
                        <div className='footer'>
                            <button onClick={this.sendToPaypal} value={this.state.data} disabled={!this.state.data} id='link_paypal'>
                                <div className='button'>
                                    <img height='45px' width='45px' src={paypal} />
                                    <label>
                                        DONATE
                                    </label>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default DonationPage