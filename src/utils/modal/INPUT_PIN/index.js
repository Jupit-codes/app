import {useState,useEffect} from 'react'
import React from 'react'
import '../../../assets/css/Modal/modal.css'
import {IoClose} from 'react-icons/io5'
import { reactLocalStorage } from 'reactjs-localstorage'

import WALLETPIN from './walletpin.js'
const Index = ({closeModal})=>{

    const [page,setpage]= useState('step1');
    const [pin,setpin]= useState('');
    const [error,seterror] = useState('');
   


    return (
        <div className="modalBackground">
            <div className='modalContainerCreatepin'>
                <div className='modalHeader'>
                    <div className='modalText'>
                        <div className='receiveText'>
                            Provide Wallet Pin
                        </div>
                        
                        <IoClose size={25} onClick={()=>{closeModal(false)}} />
                    </div>
                    
                    <div><hr/></div>
                </div>
                
                <div className='modalbodyPin'>
                   

                    <WALLETPIN/>
                   

                
                </div>
                <div className='modalFooter'>
                   
                </div>
                
            </div>
        </div>
    )
}

export default Index;