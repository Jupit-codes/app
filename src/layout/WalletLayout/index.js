import { useEffect, useState ,useContext} from 'react'
import '../../assets/css/Wallet/walletdefault.css'
import Marketprice from '../../context/actions/marketprice'
import { GlobalContext } from "../../context/Provider";
import Icon from "react-crypto-icons";
import naira from '../../assets/images/wallet/naira.svg'
const Index = ()=>{
    const [rate, setrate]=useState([])
    const [btcprice, setbtcprice]= useState()
    const [percentageBTC, setpercentageBTC]= useState()

    const [usdtprice, setusdtprice]= useState()
    const [percentageUSDT ,setpercentageUSDT]= useState()
    const {priceState:{price:{data}},priceDispatch} = useContext(GlobalContext);
  
    const _renderRate =()=>{
        if(percentageBTC <0){
            return <div className='bullish'><span>{percentageBTC}</span></div>
        }
        else if(percentageBTC == 0){
            return <div className='neutral'><span>{percentageBTC}</span></div>
        }
        else if(percentageBTC > 0){
            return <div className='bearish'><span>{percentageBTC}</span></div>
        }
    }

    const _renderRateUsdt =()=>{
        if(percentageUSDT <0){
            return <div className='bullish'><span>{percentageUSDT}</span></div>
        }
        else if(percentageUSDT == 0){
            return <div className='neutral'><span>{percentageUSDT}</span></div>
        }
        else if(percentageUSDT > 0){
            return <div className='bearish'><span>{percentageUSDT}</span></div>
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


    return(
        <div className="walletdefault">
            <div className="naira-wallet">
                <div className='wallet-title'>
                    <img src={naira} /> <span>Naira Wallet</span>
                </div>
                <div className='wallet-balance'>
                    <div>Available Wallet Balance:</div>
                    <div className='balance'>
                        &#x20A6;0:00
                    </div>
                    <div className='bookbalance'>Book Balance: &#x20A6;0:00</div>
                </div>
                <div className='more'>
                         More Details
                </div>
            <div>
                    
                </div>
            </div>
            <div className="btc-wallet">
                <div className='btc-wallet-title'>
                     <div>
                         <Icon name="btc" size={25} /> <span>Bitcoin Wallet</span>
                         <div className='current_price'><span className='rateText'>Rate:&nbsp;</span><span>&#36;{btcprice}&nbsp;(USD/BTC)</span></div>
                     </div>
                     <div className='rate'>
                         {_renderRate()}
                     </div>
                </div>
                <div className='wallet-balance-crypto'>
                    <div>Available Wallet Balance:</div>
                    <div className='balance-cypto'>
                        0.000000BTC
                    </div>
                    <div className='bookbalance'>USD EQUIVALENT:&#36;0:00</div>
                </div>
                <div className='more morebtc'>
                         More Details
                </div>
               
            </div>
            <div className="usdt-wallet">
                <div className='usdt-wallet-title'>
                     <div>
                         <Icon name="usdt" size={25} /> <span>USDT Wallet</span>
                         <div className='current_price_usdt'><span className='rateText'>Rate:</span><span>&#36;{usdtprice}&nbsp;(USD/USDT)</span></div>
                     </div>
                     <div className='rate'>
                         {_renderRateUsdt()}
                     </div>
                </div>
                <div className='wallet-balance-crypto'>
                    <div>Available Wallet Balance:</div>
                    <div className='balance-cypto-usdt'>
                        0.000000TETHER
                    </div>
                    <div className='bookbalance'>USD EQUIVALENT:&#36;0:00</div>
                </div>
                <div className='more moreusdt'>
                         More Details
                </div>
               
            </div>
            
            
        </div>
    )
}

export default Index;