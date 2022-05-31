import {useState,useEffect} from 'react'
import React from 'react'
import '../../../assets/css/Modal/modal.css'
import {IoClose} from 'react-icons/io5'
import { reactLocalStorage } from 'reactjs-localstorage'

import WALLETPIN from './walletpin.js'
import { toast } from 'react-toastify'
import axios from 'axios'

const Index = ({closeModal,mywalletpin,callback})=>{

    const [page,setpage]= useState('step1');
    const [pin,setpin]= useState('');
    const [error,seterror] = useState('');
    const [walletpin,setwalletpin] =useState('')
    const [Confirm,setConfirm] = useState('Confirm')
    const handleWalletPin = (e)=>{
        setwalletpin(e.target.value)
    }

    const pincheck = async ()=>{
        if(walletpin){
            
            // if(walletpin === mywalletpin){
            //     toast.success('PIN accepted','SUCCESS')
            //     callback(true);
            //     closeModal(false)
            // }
            // else{
            //     toast.error('INVALID PIN','ERROR')
            // }
            if(Confirm === "Confirm"){
                    const BaseUrl = process.env.REACT_APP_BACKEND_URL  
                    setConfirm('Checking');
                    await axios({
                
                    url:`${BaseUrl}/verify/check/pin`,
                    method:'POST',
                    headers:{
                    'Content-Type':'application/json',  
                    'Authorization': reactLocalStorage.get('token')
                    },
                    data:JSON.stringify({
                        userid:reactLocalStorage.getObject('user')._id,
                        walletpin
                    })
                    
                })
                .then((res)=>{
                    console.log(res.data)
                    setConfirm('Confirm');
                    if(res.data.status){
                        toast.success('PIN accepted','SUCCESS')
                        callback(true);
                        closeModal(false)
                    }
            
                })
                .catch((err)=>{
                console.log(err.response)
                    setConfirm('Confirm');
                    toast.error(err.response.data.message,'Error')
                    
                        
                })
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
                    <input type="password"  className='form-control' placeholder='Wallet PIN' value={walletpin} onChange={handleWalletPin} max={4}/>
                    <input type="submit" value={Confirm}  className="buttonNext" onClick={pincheck} />
                </div>
                    
                   

                
                </div>
                <div className='modalFooter'>
                   
                </div>
                
            </div>
        </div>
    )
}

export default Index;