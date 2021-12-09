import React from 'react'

import '../../../assets/css/About/abouthero.css'
import path from '../../../assets/images/About/Path4.png'
const Index =()=>{
    return(
        <div className="aboutusHero">
            <div className="overlay">
                <div>
                    <div className="bannertext_sm">ABOUT US</div>
                    <div className="bannertext_lg">About Us</div>
                    <div className="hr"><hr/></div>
                </div>
                
            </div>
            <div className="pathDiv">
              <img src={path}/>
            </div>
            <div className="CEO_welcome">
                <div> We’re a bunch of misfits who believe that crypto can be simplified into its easiest form. Together, we have created a really interesting place to work. From our lollipop moments to our ambiance and work ethics that encourage growth, Patricia has the best company culture style in Africa..<br/><br/>  <span >- Femi Somoye (CEO Jupit).</span> </div>
            </div>
        </div>
    )
}

export default Index