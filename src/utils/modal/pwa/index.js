import { useState } from "react"
import { IoClose } from "react-icons/io5"
import { reactLocalStorage } from "reactjs-localstorage"
import maskedlogo from '../../../assets/images/maskable.png'
import usePWA from 'react-pwa-install-prompt'
import { NoncurrentVersionExpiration } from "@aws-sdk/client-s3"
import { MdOutlineNorthWest } from "react-icons/md"
import '../../../assets/css/pwa-modal.css'
const Index=({closePWA,sendresponse,action,installLib})=>{

    const { isStandalone, isInstallPromptSupported, promptInstall } = usePWA()
const handleresponse = async (response)=>{
    if(response === "install"){
        
        action.prompt();
        // Find out whether the user confirmed the installation or not
        const { outcome } = await action.userChoice;
        // The deferredPrompt can only be used once.
        action = null;
        // Act on the user's choice
        if (outcome === 'accepted') {
          console.log('User accepted the install prompt.');
        //   reactLocalStorage.set('pwa-data',response)
        } else if (outcome === 'dismissed') {
          console.log('User dismissed the install prompt');
          reactLocalStorage.set('pwa-data',response)
        }
        closePWA(false);
    }
    else{
        closePWA(false)
    }
    
}


const onClickInstall = async () => {
    const didInstall = await promptInstall()
    if (didInstall) {
      // User accepted PWA install
      console.log('User accepted  Installation')
      closePWA(false)
    }
    else{
        console.log('User denied the installation')
        closePWA(false)
    }
  }

  const Notnow =()=>{
    if(reactLocalStorage.get('pwa')){
        closePWA(false)
    }
    else{
        reactLocalStorage.set('pwa','notready');
        closePWA(false)
    }
  }

    return (
        <div className="modalBackground">
        <div className='modalContainerCreatePWA'>
            <div className='modalHeader'>
                <div className='modalText'>
                   
                    
                    
                </div>
                
               
            </div>
            
            <div className='modalbodypwa'>
               
                <div>
                    <img src={maskedlogo}/>
                </div>
                <div>
                    <p className="install_pwa_msg">Install Jupit App<br/>
                        <small>Publisher: Jupit</small>
                    </p>
                    <p>
                        This web app can be installed as an application.<br/> It will open on its on window and safely integrate with all platform devices features. 
                    </p>
                    <div className="installer_button">
                        <div onClick={()=>{Notnow()}}>Not now</div>
                        <div  onClick={installLib}>Install</div>
                    </div>



                </div>

 
            </div>
            <div className='modalFooter'>
               
            </div>
            
        </div>
    </div>
    )
}

export default Index