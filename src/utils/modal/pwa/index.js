import { useState } from "react"
import { IoClose } from "react-icons/io5"
import maskedlogo from '../../../assets/images/maskable.png'

const Index=({closePWA})=>{
    return (
        <div className="modalBackground">
        <div className='modalContainerCreatepin'>
            <div className='modalHeader'>
                <div className='modalText'>
                    <div className='receiveText'>
                        Attention
                    </div>
                    
                    <IoClose size={25} onClick={()=>{closePWA(false)}} />
                </div>
                
                <div><hr/></div>
            </div>
            
            <div className='modalbodypwa'>
               
                <div>
                    <img src={maskedlogo}/>
                </div>
                <div>
                    <p>Install Jupit App<br/>
                        <small>Publisher: Jupit.app</small>
                    </p>
                    <p>
                        This web app can be installed as an application. its will open on its on window and safely integrate with all platform devices features. 
                    </p>



                </div>

 
            </div>
            <div className='modalFooter'>
               
            </div>
            
        </div>
    </div>
    )
}

export default Index