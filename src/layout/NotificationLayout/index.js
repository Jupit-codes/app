import {AiOutlineRise} from 'react-icons/ai'
import {AiOutlineFall} from 'react-icons/ai'
import {Button} from 'react-bootstrap'
import { useContext, useEffect, useState } from 'react'
import FetchNotification from '../../context/actions/getNotification'
import { reactLocalStorage } from 'reactjs-localstorage'
import {GlobalContext} from '../../context/Provider'
import Spinner from '../../assets/images/spinner.gif'

const Index = ()=>{

    const [notificationData,setnotificationData] = useState()
    const {getnotificationState:{getnotification:{loadingNotification,dataNotification,errorNotification}}, getnotificationDispatch} = useContext(GlobalContext)
    console.log('loader',loadingNotification)
    useEffect(()=>{
        const addressBTC = reactLocalStorage.getObject('user').btc_wallet[0].address;
        const addressUSDT = reactLocalStorage.getObject('user').usdt_wallet[0].address
        const item ={
            addressBTC:addressBTC,
            addressUSDT:addressUSDT
        }
        FetchNotification(item)(getnotificationDispatch)
    },[dataNotification])

    return (
        
            <div className="transaction">
               {loadingNotification && <img src={Spinner}/>}
                <div className="notifyDiv">
                    <div className='notify-flex-1'>
                        <div style={{color:'red'}}>Withdrawal Alert</div>
                        <div className="notifyAmount">BTC 0.0005 <span><AiOutlineRise color='red' size={30}/></span> </div>
                        <small>You have Initiated Transfer of 0.0005 BTC to yuyuinbjgnbngnnbbnbnbnbnb Address</small>
                    </div>
                    <div className='notify-flex-2'>
                       <Button>View Details</Button>
                    </div>
                     
                </div>


                <div className="notifyDiv">
                    <div className='notify-flex-1'>
                        <div style={{color:'green'}}>Deposit Alert</div>
                        <div className="notifyAmount">BTC 0.0005 <span><AiOutlineFall color='green' size={30} /></span> </div>
                        <small>You have received a  Transfer of 0.0005 BTC from yuyuinbjgnbngnnbbnbnbnbnb Address</small>
                    </div>
                    <div className='notify-flex-2'>
                       <Button>View Details</Button>
                    </div>
                     
                </div>
                
        </div>
        
    )
}

export default Index;