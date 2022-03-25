import React from "react";
import '../../../assets/css/Home/section7.css'
import {GrBitcoin} from 'react-icons/gr'
import {BsBank2} from 'react-icons/bs'
import {FaCoins} from 'react-icons/fa'
import { Link } from "react-router-dom";
import { Link as NewLink } from "react-scroll";
import Path from '../../../assets/images/section11/Path 4.3.png'
const Index = ()=>{
    return(
        <section className="section7" id="aboutus">
            <h1>About Jupit</h1>
            <div className="aboutUsText">
                {/* At Jupit, we get it that advanced digital currency can be adopted with fair facilitate channel and that's why we've done a few exceptionally curiously things as a group, from community vibes to work ethics that engage improvement. Jupit has preeminent astonishing values. */}
                <p>We're all about simplifying your daily exchange.<br/>
                Beyond operating a secure channel, we're dedicated to providing you with the best service,<br/> with a focus on dependability matched with satisfaction.</p>
            </div>
            <NewLink to='what_defines_us' spy={true} smooth={true} ><button className="aboutusbtn">Read More</button></NewLink>
            <div className="curve">
                
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
                    <path fill="#fff" fill-opacity="1" d="M0,224L34.3,218.7C68.6,213,137,203,206,176C274.3,149,343,107,411,90.7C480,75,549,85,617,106.7C685.7,128,754,160,823,181.3C891.4,203,960,213,1029,197.3C1097.1,181,1166,139,1234,128C1302.9,117,1371,139,1406,149.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                </svg>
            </div>
           
           
        </section>
    )
}

export default Index;