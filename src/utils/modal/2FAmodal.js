import {useState,useEffect} from 'react'
import React from 'react'
import '../../assets/css/Modal/modal.css'
import {IoClose} from 'react-icons/io5'
import {MdOutlineSecurity} from 'react-icons/md'
import axios from 'axios'
import { reactLocalStorage } from 'reactjs-localstorage'
import moment from 'moment'

const Index = ({closeModal})=>{
 
    
    return (
        <div className="modalBackground">
            <div className='modalContainerII'>
                <div className='modalHeader'>
                    <div className='modalText'>
                        <div className='receiveText'>
                           2FA
                        </div>
                        
                            <IoClose size={25} onClick={()=>closeModal(!closeModal)} />
                    </div>
                    
                    <div><hr/></div>
                </div>
                
                <div className='fa'>
                    <div className=''>
                    <MdOutlineSecurity size={100} color="#3498db"/>
                    </div>
                    <div className='welcome2fa'>
                        Welcome to Jupit 2FA Authentication SetUp.
                        Click on the Button Below to get Started, while we walk you through a seamless pipeline to activating the process.
                    </div>

                    <div className='TabInput SubmitModal'>
                      Activate 2FA
                
                    </div>
                   
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