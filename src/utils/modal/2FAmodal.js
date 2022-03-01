import {useState,useEffect} from 'react'
import React from 'react'
import '../../assets/css/Modal/modal.css'
import {IoClose} from 'react-icons/io5'

import axios from 'axios'
import { reactLocalStorage } from 'reactjs-localstorage'
import moment from 'moment'
import Section1 from './2FA_STEPS/section1'
import Section2 from './2FA_STEPS/section2'
import Section3 from './2FA_STEPS/section3'
import Section4 from './2FA_STEPS/section4'
import Section5 from './2FA_STEPS/section5'
const Index = ({closeModal})=>{
 
    const [step,setstep] = useState('Section1');

    const _renderStep = ()=>{
        switch(step){
            case 'Section1':
                return <Section1 Next={setstep}/>
                break;
            case 'Section2':
                    return <Section2 Next={setstep}/>
                    break;
            case 'Section3':
                return <Section3 Next={setstep} />
                break;
            case 'Section4':
                return <Section4 Next={setstep}  />
                break;
            case 'Section5':
                return <Section5 Next={setstep}  close={closeModal}  />
                break;

        }
    }
    
    return (
        <div className="modalBackground">
            <div className='modalContainerII'>
                <div className='modalHeader'>
                    <div className='modalText'>
                        <div className='receiveText'>
                            TWO FACTOR AUTHENTICATION SET UP
                        </div>
                        
                            <IoClose size={25} onClick={()=>closeModal(!closeModal)} />
                    </div>
                    
                    <div><hr/></div>
                </div>
                
                <div className='fa'>
                    {_renderStep()}
                    {/* <Section1/> */}
                   
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