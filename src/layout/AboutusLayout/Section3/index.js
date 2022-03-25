import React from 'react'

import '../../../assets/css/About/abouthero.css'
import Image from '../../../assets/images/About/easy.svg'
const Index =()=>{
    return(
        <div className="mission">
            <div>
               <div className='mission-title'>Providing Reliable Solution</div> 
               <div className='mission-main'>
                    Our platform is intended mainly to simplify your daily exchange in a most reliable and secured way.
               </div>
               <div className='mission-text'>
                   Mission
               </div>
            </div>
            <div className='imgIcon'>
               <img src={Image} className="missionImg"/>
            </div>
            
        </div>
    )
}

export default Index