import React from "react";
import '../../../assets/css/Home/hero.css'
import Phone from '../../../assets/images/phone.png'

const Index = ()=>{
    return(
        <div className="Hero">
            <div className="HeroFlex">
                <div className="spinner">
                    <div className="coin">
                        <div className="coin__front"></div>
                        <div className="coin__edge">
                            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>

                        </div>
                        <div className="coin__back"></div>
                        <div className="coin__shadow"></div>
                    </div> 
                </div>
                <div className="bannerText">
                    <div className="text1">
                        {/* <div className="typewriter"><h1>World Easiest Cryto Exchange App</h1></div> */}
                        <div className="HeroText">World Easiest<br/> Crypto Exchange App</div>
                        <small>Join millions of people globally, to buy and sell cryptocurrencies <br/>the secure and seamless way</small>
                        <div className="buttonSlider">
                            <div className="create-button-getstarted">Get Started</div>
                            <div className="create-button-readmore">Register</div>
                        </div>
                    </div>
                    <div className="text2">
                        <img src={Phone} id='phone'/>
                    </div>
                      
                </div>
            </div>
            


            
        </div>
    )
}

export default Index;