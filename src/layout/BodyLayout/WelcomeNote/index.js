import React, { useState } from "react";
import '../../../assets/css/Body/welcome.css'
import Offcanvas from 'react-bootstrap/Offcanvas'
import {Button} from 'react-bootstrap'
import logo from '../../../assets/images/jupit_100.png'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {FaBusinessTime} from 'react-icons/fa'


const Index=()=>{

    return(
        <div className="welcome">
            <div className="welcome_text round">
                Dear Temiloluwa,<br/>
                Congratulations on the successful creation of your account.<br/>
                Kindly click on the Link below to complete your KYC documentation.<br/>
                <button className="btn btn-md btn-secondary mt-2">Kyc Documentation</button>
            </div>
            <div className="progress_div shadow-lg round">
                <CircularProgressbarWithChildren value={66}>
                    {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                    {/* <img style={{ width: 20, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" /> */}
                    <FaBusinessTime  size={30} color="#90ee90"/>
                    <div style={{ fontSize: 12, marginTop: -5 }}>
                        <strong>66%</strong> KYC
                    </div>
                </CircularProgressbarWithChildren>
            </div>
            
        </div>
    
    )
}
export default Index;