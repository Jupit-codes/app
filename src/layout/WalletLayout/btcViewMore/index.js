import { useState,useContext,useEffect } from 'react';
import {BsArrowLeftCircle} from 'react-icons/bs'
import '../../../assets/css/Wallet/walletdefault.css'
import empty from '../../../assets/images/empty.png'
import Marketprice from '../../../context/actions/marketprice'
import { GlobalContext } from "../../../context/Provider";
import Icon from "react-crypto-icons";
const Index = (props)=>{
    const [rate, setrate]=useState([])
    const [btcprice, setbtcprice]= useState()
    const [percentageBTC, setpercentageBTC]= useState()
    const [usdtprice, setusdtprice]= useState()
    const [percentageUSDT ,setpercentageUSDT]= useState()
    const {priceState:{price:{data}},priceDispatch} = useContext(GlobalContext);
  
    const _renderRate =()=>{
        if(percentageBTC <0){
            return <div className='bullish'><span>{percentageBTC}%</span></div>
        }
        else if(percentageBTC == 0){
            return <div className='neutral'><span>{percentageBTC}%</span></div>
        }
        else if(percentageBTC > 0){
            return <div className='bearish'><span>{percentageBTC}%</span></div>
        }
    }

    useEffect(()=>{
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



    return (
        <div className='btcmoreClass'>
            <div className='back' onClick={()=>{props.Screen('Default')}}><BsArrowLeftCircle size={25} color='#3498db' /><span>Return to Wallet</span></div>
            <div className='flexMoreDetails'>
                <div className='walletInfor slideInLeft'>
                    <div className='sideCard'>
                        <div>
                            <Icon name="btc" size={25} /> <span>Bitcoin Wallet</span>
                            <div className='current_price'><span className='rateText'>Rate:&nbsp;</span><span>&#36;{btcprice}&nbsp;(USD/BTC)</span></div>
                        </div>
                        <div className='wallet-balance-crypto'>
                            <div className='available-balance-btc'>Available Wallet Balance:</div>
                            <div className='balance-btc'>
                                0.000000 BTC
                            </div>
                            <div className='bookbalance'>USD EQUIVALENT:&#36;0:00</div>
                        </div>
                    </div>

                    <div className='sideCardIII'>
                        <div className='rate'>
                            {_renderRate()}
                        </div>
                        <div className='sendreceive'>
                            <input type="submit" value="Send"/> <input type="submit" value="Receive"/>
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