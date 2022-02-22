import {useState,useEffect} from 'react'
import React from 'react'
import '../../assets/css/Modal/modal.css'
import {IoClose} from 'react-icons/io5'
import axios from 'axios'
import { reactLocalStorage } from 'reactjs-localstorage'
const Index = ({closeModal,orderid})=>{
   console.log("orderid",orderid)
    const [src,setSrc]= useState('')
    const [address, setAddress] = useState();
    const [data,setData] = useState();
    const [error,setError] = useState()
    const [loader,setloader] = useState(true)
    const Base_url = process.env.REACT_APP_BACKEND_URL;

    const _fetch =  async () =>{
        await axios({
           method: "POST",
           url: `${Base_url}/threshold/notification/details`,
           headers:{
               'Content-Type':'application/json',
               'Authorization':reactLocalStorage.get('token')
           },
           data:JSON.stringify({orderid:orderid})
       })
       .then((res)=>{
         
          setData(res.data)
         
       })
       .catch((err)=>{
          
           setError(err.response);
           
       })
   }


    useEffect(()=>{
        _fetch();
    },[])
    

    const _renderBody = ()=>{
        if(orderid && orderid !== "N/A"){
            
        }
        
    }
    return (
        <div className="modalBackground">
            <div className='modalContainer'>
                <div className='modalHeader'>
                    <div className='modalText'>
                        <div className='receiveText'>
                            Notification Details
                        </div>
                        
                        <IoClose size={25} onClick={()=>closeModal(!closeModal)} />
                    </div>
                    
                    <div><hr/></div>
                </div>
                
                <div className='modalbody '>
                  
                   
                    { closeModal &&_renderBody()}
                    {orderid && orderid === "N/A" && 
                        <div>
                                <h2>Transaction Currently Unavailable</h2>
                                <small>{orderid}</small>
                        </div> 
                    }
                </div>
                <div className='modalFooter'>
                   
                </div>
                <div className='modalClose' >
                    <input type="submit" value="Close" onClick={()=>closeModal(!closeModal)} />
                </div>
            </div>
        </div>
    )
}

export default Index;