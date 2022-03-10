import { useState,useContext,useEffect } from 'react';
import {BsArrowLeftCircle} from 'react-icons/bs'
import '../../../assets/css/Wallet/walletdefault.css'
import empty from '../../../assets/images/empty.png'
import Marketprice from '../../../context/actions/marketprice'
import { GlobalContext } from "../../../context/Provider";
import Icon from "react-crypto-icons";
import { reactLocalStorage } from "reactjs-localstorage";
import ReceiveModal from '../../../utils/modal/customModal'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import Tether from '../../../assets/images/tether.png'
const Index = (props)=>{
    const history = useHistory();
    const [userBtc ,setuserBtc]= useState();
    const [userUsdt ,setuserUsdt]= useState();
    const [rate, setrate]=useState([])
    const [btcprice, setbtcprice]= useState()
    const [percentageBTC, setpercentageBTC]= useState()
    const [usdtprice, setusdtprice]= useState()
    const [percentageUSDT ,setpercentageUSDT]= useState()
    const [openModal, setopenModal] = useState(false);
    const {priceState:{price:{data}},priceDispatch} = useContext(GlobalContext);
  
    const _renderRate =()=>{
        if(percentageBTC <0){
            return <div className='bullish'><span>{percentageUSDT}%</span></div>
        }
        else if(percentageBTC == 0){
            return <div className='neutral'><span>{percentageUSDT}%</span></div>
        }
        else if(percentageBTC > 0){
            return <div className='bearish'><span>{percentageUSDT}%</span></div>
        }
    }

    useEffect(()=>{
        let x = reactLocalStorage.getObject('user');
        
        // setuserBtc(x.btc_wallet[0].balance.$numberDecimal);
        Marketprice()(priceDispatch);
        if(data){
            let xBTC = ((data.BTC.USD.PRICE - data.BTC.USD.OPEN24HOUR) / data.BTC.USD.OPEN24HOUR) * 100
            let xUSDT = ((data.USDT.USD.PRICE - data.USDT.USD.OPEN24HOUR) / data.USDT.USD.OPEN24HOUR) * 100
            
            setpercentageBTC(parseFloat(xBTC).toFixed(5));
            setpercentageUSDT(parseFloat(xUSDT).toFixed(5));
            setbtcprice(data.BTC.USD.PRICE);
            setusdtprice(data.USDT.USD.PRICE);
        }
        

   },[data])

   const getbalance = (_id)=>{
        
    axios({
        method: "POST",
        url: `https://myjupit.herokuapp.com/users/refresh`,
        headers:{
            'Content-Type':'application/json',
            'Authorization':reactLocalStorage.get('token')
        },
        data:JSON.stringify({_id:_id})
    })
    .then((res)=>{
        
        // setuserBtc(res.data.btc_wallet[0].balance.$numberDecimal);
        setuserUsdt(res.data.usdt_wallet[0].balance.$numberDecimal)  
      
    })
    .catch((err)=>{
    
        console.log(err.response)
        
    })
}
 useEffect(()=>{
     let _id = reactLocalStorage.getObject('user')._id;
     getbalance(_id)
 },[userBtc])


   

  const SendBTC = ()=>{
      history.push('/client/sendbtc')
  }

    return (
        <div className='btcmoreClass'>
            <div className=''>
                {openModal && <ReceiveModal closeModal={setopenModal} />}
            </div>
            <div className='back' onClick={()=>{props.Screen('Default')}}><BsArrowLeftCircle size={25} color='#3498db' /><span>Return to Wallet</span></div>
            <div className='flexMoreDetails'>
                <div className='walletInfor slideInLeft'>
                    <div className='sideCard'>
                        <div>
                            <img src={Tether}/> <span>USDT Wallet</span>
                            <div className='current_price'><span className='rateText'>Rate:&nbsp;</span><span>&#36;{usdtprice}&nbsp;(USD/USDT)</span></div>
                        </div>
                        <div className='wallet-balance-crypto'>
                            <div className='available-balance-btc'>Available Wallet Balance:</div>
                            <div className='balance-usdt'>
                               {userUsdt}TETHER
                            </div>
                            <div className='bookbalance'>USD EQUIVALENT:&#36;&nbsp;{parseFloat(userUsdt * usdtprice).toFixed(3)}</div>
                        </div>
                    </div>

                    <div className='sideCardIII'>
                        <div className='rate'>
                            {_renderRate()}
                        </div>
                        <div className='sendreceive'>
                            <input type="submit" value="Send" onClick={SendBTC}/> <input type="button" value="Receive" onClick={()=>{setopenModal(true)}}/>
                        </div>
                        <div className='buysell'>
                        <input type="submit" value="Buy Bitcoin" className='buy'/>
                         <input type="submit" value="Sell Bitcoin" className='sell'/>
                        </div>
                    </div>
                        
                </div>
                <div className='walletInfor slideInRight advert-btc'></div>
            </div>

            <div className="transaction">
                <div className="th-title">
                        All Transactions
                </div>
                <div className="empty">
                    <img src={empty}/>
                    <div>No Transaction</div>
                </div>
            </div>
           
            
        </div>
    )
}


export default Index;