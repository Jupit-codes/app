import {AiOutlineRise} from 'react-icons/ai'
import {AiOutlineFall} from 'react-icons/ai'
import {Button} from 'react-bootstrap'
import { useContext, useEffect, useState } from 'react'
import FetchNotification from '../../context/actions/getNotification'
import { reactLocalStorage } from 'reactjs-localstorage'
import {GlobalContext} from '../../context/Provider'
import Spinner from '../../assets/images/spinner.gif'
import empty from '../../assets/images/empty.png'
import Details from '../../utils/modal/notification_details'
import moment from 'moment'
import axios from 'axios'
import { IoCompassOutline } from 'react-icons/io5'
import {IoIosMail} from 'react-icons/io'
const Index = ()=>{

    const [notificationData,setnotificationData] = useState()
    const [modal,setmodal] = useState(false)
    const [userid,setuserid] = useState('')
    const [state, setState] = useState();
    const[id,setid] = useState();
    const [myLoader, setmyLoader] = useState(true);
    const {getnotificationState:{getnotification:{loadingNotification},dataNotification,errorNotification}, getnotificationDispatch} = useContext(GlobalContext)
    const all_ids=[];
    
    const Base_url = process.env.REACT_APP_BACKEND_URL;

    const updateRead =  async () =>{
      
        id.map((d)=>{
            all_ids.push(d._id)
        })

        await axios({
           method: "POST",
           url: `${Base_url}/threshold/update/read`,
           headers:{
               'Content-Type':'application/json',
               'Authorization':reactLocalStorage.get('token')
           },
        //    data:JSON.stringify({userid:reactLocalStorage.getObject('user')._id})
           data:all_ids
       })
       .then((res)=>{
         
         
        
         
       })
       .catch((err)=>{
          
           console.log("err",err.response)
           
       })
   }

   const myNotification =  async () =>{

    const addressBTC = reactLocalStorage.getObject('user').btc_wallet[0].address;
    const addressUSDT = reactLocalStorage.getObject('user').usdt_wallet[0].address
    const email = reactLocalStorage.getObject('user').email
    const Base_url = process.env.REACT_APP_BACKEND_URL;
    await axios({
            method: "POST",
            url: `${Base_url}/threshold/notification/fetch`,
            headers: {
            "Content-Type": "application/json",
            "Authorization":`Bearer ${reactLocalStorage.get('token')}`
            },
            data:JSON.stringify({addressBTC:addressBTC,addressUSDT:addressUSDT,email})
        })
        .then(res=>{
            console.log('test',res.data)
            setState(res.data)
            setmyLoader(false)

            // console.log('Best',res.data)
            // console.log('State',state.length)
    
        })
        .catch(err=>{
            console.log("err",err)
        })
    
  
    }

    const getIds =  async () =>{

        const addressBTC = reactLocalStorage.getObject('user').btc_wallet[0].address;
        const addressUSDT = reactLocalStorage.getObject('user').usdt_wallet[0].address
        const email = reactLocalStorage.getObject('user').email
        const Base_url = process.env.REACT_APP_BACKEND_URL;
        await axios({
                method: "POST",
                url: `${Base_url}/threshold/notification/fetch/title`,
                headers: {
                "Content-Type": "application/json",
                "Authorization":`Bearer ${reactLocalStorage.get('token')}`
                },
                data:JSON.stringify({addressBTC:addressBTC,addressUSDT:addressUSDT,email})
            })
            .then(res=>{
                
                setid(res.data)
                
    
                // console.log('Best',res.data)
                // console.log('State',state.length)
        
            })
            .catch(err=>{
                console.log("err",err)
            })
        
      
        }



    
    useEffect(()=>{

        myNotification();
        getIds();
       
    },[])
    useEffect(()=>{
       id && updateRead();
    },[id])

    const handleModal =(id)=>{

        setuserid(id)
        setmodal(true);

    }   

    const _renderNotification =()=>{
        
        if(state && state.length > 0){
            
            
            return state.map((d,index)=>{

                if(d.type == 7){
                    return (    
                        <div key={index} className="notifyDiv">

 
                            <div className='notify-flex-1'>
                                <div className='red'>Withdrawal</div>
                                <div className="notifyMessage"><div>{d.transfertype}</div></div>
                                <small>You have successfully withdrawal a sum of &#8358;{d.asset} from your naira wallet </small>
                                
                                
                                <div>{moment(d.date_created).format("YYYY/MM/DD kk:mm:ss")}</div>
                            </div>
                            {/* <div className='notify-flex-2'>
                                <Button onClick={()=>{setmodal(true);setuserid(d._id)}}>View Details</Button>
                            </div> */}

                        </div>
                    
                    
                    )
                }

                if(d.type == 5){
                    return (    
                        <div key={index} className="notifyDiv">

 
                            <div className='notify-flex-1'>
                                <div className={d.transfertype === "Buy"? 'green':'red'}>{d.transfertype == "Buy"? 'Buy Alert':'Sell Alert'}</div>
                                <div className="notifyMessage"><div>{d.transfertype}</div></div>
                                {d.transfertype=== 'Buy' &&<small>You have successfully bought	&#8358;{d.from_address} equivalent of {d.asset} ({d.initiator}) </small>}
                                {d.transfertype=== 'Sell' &&<small>You have successfully sold {d.initiator}{d.asset} which is equivalents to &#8358;{d.from_address} </small>}
                                
                                <div>{moment(d.date_created).format("YYYY/MM/DD kk:mm:ss")}</div>
                            </div>
                            {/* <div className='notify-flex-2'>
                                <Button onClick={()=>{setmodal(true);setuserid(d._id)}}>View Details</Button>
                            </div> */}

                        </div>
                    
                    
                    )
                }

                if(d.type === "3"){
                    console.log(d)
                    return (    
                        <div key={index} className="notifyDiv">

 
                            <div className='notify-flex-1'>
                                {
                                  d.asset == "WebhookCallBack" 
                                  ?
                                  <>
                                        <div className="notifyMessage"><IoIosMail color={d.transfertype === "customeridentification.success"? 'green':'red'} size={20}/><div>KYC LEVEL (ACCOUNT VERIFICATION)</div></div>
                                        <small>Your KYC AccountLinkage Verification was <span className={d.transfertype === "customeridentification.success"? 'green':'red'} >{d.transfertype === "customeridentification.success"? 'Successful':'Unsuccessful'}</span></small>
                                        
                                        <div>{moment(d.date_created).format("YYYY/MM/DD kk:mm:ss")}</div>
                                </>
                                  :
                                  <>
                                        <div className="notifyMessage"><IoIosMail color={d.transfertype === "Verified"? 'green':'red'} size={20}/><div>KYC LEVEL 3 (IDCARD VERIFICATION)</div></div>
                                        <small>Your KYC IDcard Verification was <span className={d.transfertype === "Verified"? 'green':'red'} >{d.transfertype === "Verified"? 'Successful':'Unsuccessful'}</span></small>
                                        
                                        <div>{moment(d.date_created).format("YYYY/MM/DD kk:mm:ss")}</div>
                                </>
                                  
                                }
                                <div className='info'>Message Alert</div>
                                

                            
                                
                            </div>
                            {/* <div className='notify-flex-2'>
                                <Button onClick={()=>{setmodal(true);setuserid(d._id)}}>View Details</Button>
                            </div> */}

                        </div>
                    
                    
                    )
                }
                if(d.type === "4"){
                    if(d.status === "Processing"){
                        return (    
                            <div key={index} className="notifyDiv">
    
     
                                <div className='notify-flex-1'>
                                    <div className='info'>Incoming Deposit Alert</div>
                                    <div className="notifyMessage"><IoIosMail color={d.transfertype === "BTC"? '#d4af37':'#259c77'} size={20}/><div>INCOMING DEPOSIT ALERT</div></div>
                                    <small>A sum amount of {parseFloat(d.initiator) / 100000000} {d.transfertype} has been initiated on blockchain from wallet_address {d.from_address}.<br/> The current status is <span class="warning">{d.status}</span></small>
                                    <div>{moment(d.date_created).format("YYYY/MM/DD kk:mm:ss")}</div>
                                </div>
                               
    
                            </div>
                        
                        
                        )
                    }

                    if(d.status === "Transaction Completed"){
                        return (    
                            <div key={index} className="notifyDiv">
    
                                <div className='notify-flex-1'>
                                    <div className='info'>Deposit Alert (BlockChain)</div>
                                    <div className="notifyMessage"><IoIosMail color={d.transfertype === "BTC"? '#d4af37':'#259c77'} size={20}/><div>DEPOSIT ALERT (BLOCKCHAIN)</div></div>
                                    <small>A sum amount of {d.initiator} {d.transfertype} was received from wallet address {d.from_address} processed from Blockchain.<br/> The current status is <span class="warning">{d.status}</span></small>
                                    <div>{moment(d.date_created).format("YYYY/MM/DD kk:mm:ss")}</div>
                                </div>
                               
    
                            </div>
                        
                        
                        )
                    }


                   
                }
                if(d.type === "12"){
                    if(d.asset === "BTC"){
                        if(d.from_address === reactLocalStorage.getObject('user').btc_wallet[0].address){
                            return (    
                                <div key={index} className="notifyDiv">
        
         
                                    <div className='notify-flex-1'>
                                        <div className='red'>Withdrawal Alert</div>
                                        <div className="notifyAmount">{d.asset} {d.amount} <span>{d.type === "2" ? <AiOutlineRise color={d.type === "2"? 'red':'green'} size={30}/> : <AiOutlineFall color={d.type === "2"? 'red':'green'} size={30}/>}</span> </div>
                                        <small>You have successfully transferred the sum amount of {d.amount} {d.asset} to {d.to_address} Address </small>
                                        <div>{moment(d.date_created).format("YYYY/MM/DD kk:mm:ss")}</div>
                                    </div>
                                    <div className='notify-flex-2'>
                                    <Button onClick={()=>{setmodal(true);setuserid(d._id)}}>View Details</Button>
                                    </div>
        
                                </div>
                            
                            
                            )
                        }
                        else if(d.to_address === reactLocalStorage.getObject('user').btc_wallet[0].address){
                            return (    
                                <div key={index} className="notifyDiv">
        
         
                                    <div className='notify-flex-1'>
                                        <div className='green'>Deposit Alert</div>
                                        <div className="notifyAmount">{d.asset} {d.amount} <span>{d.type === "2" ? <AiOutlineRise color={d.type === "2"? 'red':'green'} size={30}/> : <AiOutlineFall color={d.type === "2"? 'red':'green'} size={30}/>}</span> </div>
                                        <small>You have received a sum amount of {d.amount} {d.asset} from  ${d.from_address} Address </small>
                                        <div>{moment(d.date_created).format("YYYY/MM/DD kk:mm:ss")}</div>
                                    </div>
                                    <div className='notify-flex-2'>
                                    <Button onClick={()=>{setmodal(true);setuserid(d._id)}}>View Details</Button>
                                    </div>
        
                                </div>
                            
                            
                            )
                        }
                    }
                    if(d.asset === "USDT"){
                        if(d.from_address === reactLocalStorage.getObject('user').usdt_wallet[0].address){
                            return (    
                                <div key={index} className="notifyDiv">
        
         
                                    <div className='notify-flex-1'>
                                        <div className='red'>Withdrawal Alert</div>
                                        <div className="notifyAmount">{d.asset} {d.amount} <span>{d.type === "2" ? <AiOutlineRise color={d.type === "2"? 'red':'green'} size={30}/> : <AiOutlineFall color={d.type === "2"? 'red':'green'} size={30}/>}</span> </div>
                                        <small>You have successfully transferred the sum amount of {d.amount} {d.asset} to {d.to_address} Address </small>
                                        <div>{moment(d.date_created).format("YYYY/MM/DD kk:mm:ss")}</div>
                                    </div>
                                    <div className='notify-flex-2'>
                                    <Button onClick={()=>{setmodal(true);setuserid(d._id)}}>View Details</Button>
                                    </div>
        
                                </div>
                            
                            
                            )
                        }
                        else if(d.to_address === reactLocalStorage.getObject('user').usdt_wallet[0].address){
                            return (    
                                <div key={index} className="notifyDiv">
        
         
                                    <div className='notify-flex-1'>
                                        <div className='green'>Deposit Alert</div>
                                        <div className="notifyAmount">{d.asset} {d.amount} <span>{d.type === "2" ? <AiOutlineRise color={d.type === "2"? 'red':'green'} size={30}/> : <AiOutlineFall color={d.type === "2"? 'red':'green'} size={30}/>}</span> </div>
                                        <small>You have received a sum amount of {d.amount} {d.asset} from  ${d.from_address} Address </small>
                                        <div>{moment(d.date_created).format("YYYY/MM/DD kk:mm:ss")}</div>
                                    </div>
                                    <div className='notify-flex-2'>
                                    <Button onClick={()=>{setmodal(true);setuserid(d._id)}}>View Details</Button>
                                    </div>
        
                                </div>
                            
                            
                            )
                        }
                    }
                    
                }
    
           })
        }
        else{
            return   <div className='empty'>
                            <h1>EMPTY NOTIFICATION</h1>
                            <img src={empty}/>
                     </div>
        }
    }

    return (
        
            <div className="history">
                {modal && <Details closeModal={setmodal} userid={userid}/>}
                <div className='notifyTitle'>NOTIFICATION</div>
               {myLoader && <img src={Spinner}/>}
               <div className='vNotification'>
                    {!myLoader && state && _renderNotification()}       
            
                </div>
               
                


                {/* <div className="notifyDiv">
                    <div className='notify-flex-1'>
                        <div style={{color:'green'}}>Deposit Alert</div>
                        <div className="notifyAmount">BTC 0.0005 <span><AiOutlineFall color='green' size={30} /></span> </div>
                        <small>You have received a  Transfer of 0.0005 BTC from yuyuinbjgnbngnnbbnbnbnbnb Address</small>
                    </div>
                    <div className='notify-flex-2'>
                       <Button>View Details</Button>
                    </div>
                     
                </div> */}
                
        </div>
        
    )
}

export default Index;