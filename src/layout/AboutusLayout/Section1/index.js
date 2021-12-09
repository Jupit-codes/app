import React from 'react'
import aboutus from '../../../assets/images/About/aboutus.png'
import Qualities from '../../../assets/images/About/Qualities.png'
import '../../../assets/css/About/section_aboutus.css'
const Index =()=>{
    return(
        <div className="section_aboutus">
            <div className="aboutusImg">
                <img src={aboutus}/>
            </div>
            <div className="Aboutjupit">
                <div className="Aboutjupit_title">About Jupit</div>

                <div className="Aboutjupit_content">
                    <p>Jupit is an online site and a p2 admin platforms that allows users to buy and sell bitcoin and ustd crypto assets or exchange digital  and fiat asset safely.<br/>
                        Owned and managed by Jupit Business established and incorporated in Nigeria. </p>
                </div>

                <div className="qualities"><img src={Qualities}/></div>

            </div>
            
        </div>
    )
}

export default Index