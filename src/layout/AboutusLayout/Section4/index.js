import React from 'react'

import '../../../assets/css/About/abouthero.css'
import Image from '../../../assets/images/About/mission.svg'
const Index =()=>{
    return(
        <div className="mission">
           
            <div className='imgIcon'>
               <img src={Image} className="missionImg"/>
            </div>
            <div>
               <div className='mission-title'>Freedom For All</div> 
               <div className='mission-main'>
                It is our vision to advance the use of borderless currency within the African communities. We want to make sure anyone and everyone who wants to engage in borderless payments gets fair treatment and without hassle.
               </div>
               <div className='mission-text'>
                   Vision
               </div>
            </div>
            
        </div>
    )
}

export default Index