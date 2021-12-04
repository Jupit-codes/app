import React from "react";
import '../../../assets/css/Home/hero2.css'
import Phone from '../../../assets/images/phone.png'

const Index = ()=>{
    return(
        <div className="Hero">
            <div className="HeroFlex">
            
                <div className="bannerText">
                    <div className="HeroText">World Easiest Cryto Exchange App</div>
                        {/* <small>Join millions of people globally, to buy and sell cryptocurrencies <br/>the secure and seamless way</small> */}
                        <div className="buttonSlider">
                            <div className="create-button-getstarted">Get Started</div>
                            <div className="create-button-readmore">Register</div>
                        </div>
                      
                </div>
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
                
            </div>
            


            
        </div>
    )
}

export default Index;