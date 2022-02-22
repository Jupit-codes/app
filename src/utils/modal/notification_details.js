import {useState,useEffect} from 'react'
import React from 'react'
import '../../assets/css/Modal/modal.css'
import {IoClose} from 'react-icons/io5'
import axios from 'axios'
import { reactLocalStorage } from 'reactjs-localstorage'
import moment from 'moment'
const Index = ({closeModal,userid})=>{
 
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
           data:JSON.stringify({userid:userid})
       })
       .then((res)=>{
         
          setData(res.data)
          console.log(res.data)
         
       })
       .catch((err)=>{
          
           setError(err.response);
           
       })
   }


    useEffect(()=>{
        _fetch();
    },[])
    

    const _renderBody = ()=>{
      return data &&  
        
        <div className='modalNotification'>
            <div className='list'>
                <div>Asset</div> <div className='listValue'>{data.asset}</div>
                
            </div>
            <div className='list'>
                <div>Amount</div> <div className='listValue'>{data.amount}</div>
            </div>
            <div className='list'>
                <div>Transfer Type</div> <div className='listValue'>{data.transfertype}</div>
            </div>
            <div className='list'>
                <div>Type</div> <div className='listValue'>{data.type === "1" && 'Deposit'} {data.type === "2" && 'Withdrawal'}</div>
            </div>
            <div className='list'>
                <div>From_address</div> <div className='listValue'>{data.from_address}</div>
            </div>
            <div className='list'>
                <div>To_address</div> <div className='listValue'>{data.to_address}</div>
            </div>
            <div className='list'>
                <div>Status</div> <div className='listValue'>{data.status}</div>
            </div>
            <div className='list'>
                <div>Updated</div> <div className='listValue'>{moment(data.updated).format("YYYY/MM/DD kk:mm:ss")}</div>
            </div>
            
            
        </div>
    
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
                    {!userid &&  
                        <div>
                                <h2>Transaction Currently Unavailable</h2>
                                <small>{userid}</small>
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