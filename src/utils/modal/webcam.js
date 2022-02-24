import {useState,useEffect} from 'react'
import React from 'react'
import '../../assets/css/Modal/modal.css'
import {IoClose} from 'react-icons/io5'
import axios from 'axios'
import { reactLocalStorage } from 'reactjs-localstorage'
import moment from 'moment'
import Spinner from '../../assets/images/spinner.gif'
import WebcamCapture from '../../layout/KycLayout/WebCam'
const Index = ({closeModal,CapturedImage})=>{
 
    const [captured,setcapture] = useState();
    useEffect(()=>{
        if(captured && captured !="undefined"){
            CapturedImage(captured)
            closeModal(false)
        }
    },[captured])
    return (
        <div className="modalBackground">
            <div className='modalContainerII'>
                <div className='modalHeader'>
                    <div className='modalText'>
                        <div className='receiveText'>
                            Take Selfie With Your Passport
                        </div>
                        
                            <IoClose size={25} onClick={()=>closeModal(!closeModal)} />
                    </div>
                    
                    <div><hr/></div>
                </div>
                
                <div className='camerabody '>
                    <WebcamCapture  captured={setcapture} />
                   
                </div>
                <div className='modalFooter'>
                   
                </div>
                {/* <div className='modalClose' >
                    <input type="submit" value="Close" onClick={()=>closeModal(!closeModal)} />
                </div> */}
            </div>
        </div>
    )
}

export default Index;