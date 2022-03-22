import '../../../assets/css/newHero/hero.css'
import React, { useState } from 'react';

import Slider1 from '../../../assets/images/landingpage/bg/slider-1.jpg'
import Slider2 from '../../../assets/images/landingpage/bg/slider-2.jpg'
import Slider3 from '../../../assets/images/landingpage/bg/slider-3.jpg'
import { Dot } from 'react-bootstrap-icons';
import { useEffect } from 'react';
import SliderText from './sliderText'
import SliderTextII from './sliderTextII'

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
               Temi
           </div>
           <div className='cardHero'>
               <div className='heroCard'>
                        <div className='jupitIco'>
                            Jupit ICO:
                        </div>
                        <div className='discount'>
                            Discount 33% from final price
                        </div>

                        <div className='progressHigh'>
                                <div class="progress-bar">
                                        
                                </div> 
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