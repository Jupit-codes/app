import {useState,useEffect} from 'react'
import React from 'react'
import '../../../assets/css/Modal/modal.css'
import {IoClose} from 'react-icons/io5'
import { reactLocalStorage } from 'reactjs-localstorage'

import WALLETPIN from './walletpin.js'
import { toast } from 'react-toastify'
const Index = ({closeModal,mywalletpin,callback})=>{

    const [page,setpage]= useState('step1');
    const [pin,setpin]= useState('');
    const [error,seterror] = useState('');
    const [walletpin,setwalletpin] =useState('')

    const handleWalletPin = (e)=>{
        setwalletpin(e.target.value)
    }

    const pincheck = ()=>{
        if(walletpin){
            if(walletpin === mywalletpin){
                toast.success('PIN accepted','SUCCESS')
                callback(true);
                closeModal(false)
            }
            else{
                toast.error('INVALID PIN','ERROR')
            }
        }
    }


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
                   
                <div className='PinInputDiv'>
                    <div className='pin-info'>
                            <strong> Enter Your Wallet PIN</strong>

                    </div>
                    <input type="number"  className='form-control' placeholder='Wallet PIN' value={walletpin} onChange={handleWalletPin} max={4}/>
                    <input type="submit" value="Confirm"  className="buttonNext" onClick={pincheck} />
                </div>
                    
                   

                
                </div>
                <div className='modalFooter'>
                   
                </div>
                
            </div>
        </div>
    )
}

export default Index;