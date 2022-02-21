import {useState,useEffect} from 'react'
import React from 'react'
import '../../assets/css/Modal/modal.css'
import {IoClose} from 'react-icons/io5'

const Index = ({closeModal})=>{
    
    const [src,setSrc]= useState('')
    const [address, setAddress] = useState();
  
    return (
        <div className="modalBackground">
            <div className='modalContainer'>
                <div className='modalHeader'>
                    <div className='modalText'>
                        <div className='receiveText'>
                            Notification Details
                        </div>
                        
                        <IoClose size={25} onClick={()=>{closeModal(false)}} />
                    </div>
                    
                    <div><hr/></div>
                </div>
                
                <div className='modalbody'>
                    <img src={src}/>
                </div>
                <div className='modalFooter'>
                   <h1>Footer</h1>
                </div>
                <div className='modalClose' >
                    <input type="submit" value="Close" onClick={()=>{closeModal(false)}}/>
                </div>
            </div>
        </div>
    )
}

export default Index;