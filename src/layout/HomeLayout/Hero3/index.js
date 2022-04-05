import '../../../assets/css/newHero/hero.css'
import React, { useState } from 'react';

import Slider1 from '../../../assets/images/landingpage/bg/slider-1.jpg'
import Slider2 from '../../../assets/images/landingpage/bg/slider-2.jpg'
import Slider3 from '../../../assets/images/landingpage/bg/slider-3.jpg'
import { Dot } from 'react-bootstrap-icons';
import { useEffect } from 'react';
import SliderText from './sliderText'
import SliderTextII from './sliderTextII'
import {BiCheckCircle} from 'react-icons/bi'
import {FaCcVisa} from 'react-icons/fa'
import {FaCcMastercard} from 'react-icons/fa'

import {BsPaypal} from 'react-icons/bs'
import ProgressBar from 'react-bootstrap/ProgressBar'
import Typewriter from 'typewriter-effect';
const Index = ()=>{
   
    const [animateImg, setanimateImg] = useState(0)
    const [stateComponent,setstateComponent] = useState();
    
    // useEffect(()=>{
    //     const intervalId = setInterval(changeHero,10000)
    //     return () => clearInterval(intervalId);
    // },[animateImg])

    const Herotext = ()=>{
        return  <span style={{color:'#0050C2'}}>
                        <Typewriter
                            options={{
                            // strings: ['Hello', 'World'],
                            autoStart: true,
                            loop: true,
                            }}
                        onInit={(typewriter) => {
                            typewriter.typeString("<strong>safest</strong>")
                            .pauseFor(2500)
                            .deleteChars(7)
                            .typeString('<strong>easiest</strong>')
                            .pauseFor(2500)
                            .deleteChars(8)
                            .typeString('<strong>secure</strong>')
                            .pauseFor(2500)
                            .start();
                            
                        }}
                    />
            
                </span>
    }


    return (
        <div className='hero' id='hero'>
           {/* <div className='content'>
                        
            <div className='cryptoText'>The &nbsp;{Herotext()}</div>
            <div className='cryptoText'>crypto exchange app.</div>

             <div className='title slide-left '>
                The Trusted
            </div>
            <div className='text slide-right'>
                Digital Money Exchange
            </div>
            <div className='button slide-up'>
                <button>Read More</button>
            </div>
               

              

           </div> */}
           <div className='cardText'>
               <div className='cardTextTitle'>Jupit</div>
                <div className='typewriterEffect'>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("Simplifying your exchange.")
                            .pauseFor(10)
                            .deleteChars(9)
                            .typeString('<strong>daily exchange.</strong>')
                            .start();
                            
                        }}
                />
                </div>
           </div>
           <div className='cardHero'>
               <div className='heroCard'>
                        <div className='jupitIco'>
                            {/* Jupit ICO: */}
                            Something Awesome Is In The Work
                        </div>
                        <div className='discount'>
                            {/* Discount 33% from final price */}
                        </div>
                        
                        <div className='heroFlex'>
                        {/* <div className='counter'>
                                <div className='rulerI'>
                                    <BiCheckCircle size={15} color="green" /><span>900K</span>
                                </div>
                                <div className='rulerII'>
                                    <BiCheckCircle size={15} color="green" /><span>5M</span>
                                </div>
                            </div> */}
                            <div className='fixedprogressbar'>
                                    
                                     <ProgressBar animated now={75}  variant='#1c1c93' style={{height:50,backgroundColor:'transparent'}}/>
                                    
                            </div>
                            
                            {/* <div className='progressHigh'>
                               
                                    <div class="progress-bar">
                                        <div class="progress-bar-value"></div>
                                    </div> 
                                    <div className='amountHeroCard'>
                                        12M USD
                                    </div>
                                    <div class="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '75%'}}></div>
                                    </div>
                                   
                                    
                            </div> */}
                            <div className='fixedtoken'>
                                {/* Fixed token edition 3,000.000BITS */}
                                Our exchange infrastructure is still under development. <br/><br/>
                                For business and enquiries, please reach out to us through the WhatsApp or Instagram link below.
                                
                            </div>
                            {/* <div className='token'>
                                    Buy Token
                                    
                            </div> */}
                            {/* <div className='mastercard'>
                            
                                    <FaCcVisa size={25} color="#9da8b6"/><FaCcMastercard size={25} color="#9da8b6"/><BsPaypal size={25} color="#9da8b6" />

                            </div> */}
                        </div>
                        
                        {/* <div class="demo-container">
                            <div class="progress-bar">
                                <div class="progress-bar-value"></div>
                            </div>
                        </div> */}
               </div>

           </div>
        </div>
    )
}

export default Index