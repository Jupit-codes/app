import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../assets/css/Auth/auth.css'
import logoArea from '../../assets/images/IMG.png'
import Jupit from '../../assets/images/logo.png'
import sendLogin from '../../context/actions/sendLogin'
import Loader from '../../utils/loader/loader'
import {GlobalContext} from '../../context/Provider'
import AlertDismissible from '../../utils/alert/alertDisplay'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {reactLocalStorage} from 'reactjs-localstorage';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Section1 from './section1'
import Section2 from './section2'
const Index=()=>{
    const {authDispatch,authState:{auth:{loading,data,error,errorAlert}}} = useContext(GlobalContext)
    const [section,setsection] = useState('Section1');
    const [emailSection,setEmailSection] = useState();
    const [passwordSection,setPasswordSection] = useState();
    const [check,setcheck] =useState(true)

    const show_pwa = ()=>{
        
        window.addEventListener('beforeinstallprompt', (e) => {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault();
            // Stash the event so it can be triggered later.
            let deferredPrompt = e;

            console.log("Def",deferredPrompt)
            console.log("Event",e)
            setcheck(false)
            // Update UI to notify the user they can add to home screen
            // addBtn.style.display = 'block';
          
            //addBtn.addEventListener('click', (e) => {
              // hide our user interface that shows our A2HS button
             // addBtn.style.display = 'none';
              // Show the prompt
            //   deferredPrompt.prompt();
              // Wait for the user to respond to the prompt
            //   deferredPrompt.userChoice.then((choiceResult) => {
            //       if (choiceResult.outcome === 'accepted') {
            //         console.log('User accepted the A2HS prompt');
            //       } else {
            //         console.log('User dismissed the A2HS prompt');
            //       }
            //       deferredPrompt = null;
            //     });
           // });
          });
    }

    const _renderSection = ()=>{
        switch(section){
            case 'Section1':
                return <Section1 Next={setsection} 
                     
                    setUserEmail={setEmailSection}

                    setUserPassword={setPasswordSection}
                 
                 />
                break;
            case 'Section2':
                return <Section2 Next={setsection} userEmail={emailSection} userPassword={passwordSection}/>
                break;
            default:
                return null
        }
    }

    return(
        <div className="auth">
            {check && show_pwa()}
            
            { loading && <Loader/>}
            <div className="logoArea">
                <img src={logoArea}/>
                
            </div>
            <div className="formarea">
                <div className="mobile-logo"><Link to='/'><img src={Jupit} /></Link></div>
                <div>{errorAlert && <AlertDismissible itemData={error} itemState={errorAlert}/>}</div>
                <div className="desktop-logo"><Link to='/'><img src={Jupit} /></Link></div>
               
                <div className="welcome-back">Welcome Back!</div>
                <div className="logincred">Kindly provide your login credentials.</div>
                <div>
                    {_renderSection()}
                </div>
               

            </div>
        </div>
    )
}

export default Index;