import { useEffect, useState ,useContext} from 'react'
import '../../assets/css/Wallet/walletdefault.css'
import Marketprice from '../../context/actions/marketprice'
import { GlobalContext } from "../../context/Provider";
const Index = ()=>{
    const [rate, setrate]=useState([])
    const [btcprice, setbtcprice]= useState()
    const [usdtprice, setusdtprice]= useState()
    const {priceState:{price:{data}},priceDispatch} = useContext(GlobalContext);
    
    console.log('btcprice',btcprice);
    console.log('usdtprice',usdtprice)

    useEffect(()=>{
         Marketprice()(priceDispatch);
         if(data){
             setbtcprice(data.BTC.USD);
             setusdtprice(data.USDT.USD);
            
            
         }
         

    },[data])


    return(
        <div className="walletdefault">
            <div className="naira-wallet">
                Naira Wallet
            </div>
            <div className="btc-wallet">
                BTC Wallet
            </div>
            <div className="usdt-wallet">
                BTC Wallet
            </div>
            
        </div>
    )
}

export default Index;