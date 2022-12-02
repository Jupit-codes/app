import jupit from '../../../assets/images/utility/jupit.png'
import cardType from '../../../assets/images/utility/mastercard.png'
import { useState,useContext,useEffect } from 'react';
import {BsArrowLeftCircle} from 'react-icons/bs'
import '../../../assets/css/Wallet/walletdefault.css'
import empty from '../../../assets/images/empty.png'
import Marketprice from '../../../context/actions/marketprice'
import { GlobalContext } from "../../../context/Provider";
import Icon from "react-crypto-icons";
import { reactLocalStorage } from "reactjs-localstorage";
import ReceiveModal from '../../../utils/modal/customModal'
import ReceiveUSDT from '../../../utils/modal/usdtreceivemodal'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import Tether from '../../../assets/images/tether.png'
const Index = ()=>{
    const history = useHistory();
    const [userBtc ,setuserBtc]= useState();
    const [userUsdt ,setuserUsdt]= useState(0);
    const [rate, setrate]=useState([])
    const [btcprice, setbtcprice]= useState()
    const [percentageBTC, setpercentageBTC]= useState()
    const [usdtprice, setusdtprice]= useState()
    const [percentageUSDT ,setpercentageUSDT]= useState()
    const [openModal, setopenModal] = useState(false);
    const {priceState:{price:{data}},priceDispatch} = useContext(GlobalContext);
    const [refresh,setrefresh] = useState()
  
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
            // let xBTC = ((data.BTC.USD.PRICE - data.BTC.USD.OPEN24HOUR) / data.BTC.USD.OPEN24HOUR) * 100
            // let xUSDT = ((data.USDT.USD.PRICE - data.USDT.USD.OPEN24HOUR) / data.USDT.USD.OPEN24HOUR) * 100
            
            // setpercentageBTC(parseFloat(xBTC).toFixed(5));
            // setpercentageUSDT(parseFloat(xUSDT).toFixed(5));
            // setbtcprice(data.BTC.USD.PRICE);
            // setusdtprice(data.USDT.USD.PRICE);
            let xBTCPercentage = ((data[0].current_price - data[0].low_24h) / data[0].current_price) * 100
            let xUSDTPercentage = ((data[1].current_price - data[1].low_24h) / data[0].current_price) * 100
            let xBTC = data[0].current_price
            let xUSDT = data[1].current_price

            console.log(xBTC,xUSDT)
            setpercentageBTC(parseFloat(xBTCPercentage).toFixed(5));
            setpercentageUSDT(parseFloat(xUSDTPercentage).toFixed(5));
            setbtcprice(parseFloat(xBTC)- 150);
            setusdtprice(parseFloat(xUSDT) );
        }
        

   },[data])

   const getbalance = (_id)=>{
        setrefresh('refreshing balance');
        const Base_url = process.env.REACT_APP_BACKEND_URL;
    axios({
        method: "POST",
        url: `${Base_url}/users/refresh`,
        headers:{
            'Content-Type':'application/json',
            'Authorization':reactLocalStorage.get('token')
        },
        data:JSON.stringify({_id:_id})
    })
    .then((res)=>{
        
        // setuserBtc(res.data.btc_wallet[0].balance.$numberDecimal);
        setuserUsdt(res.data.user.usdt_wallet[0].balance.$numberDecimal);
        
        reactLocalStorage.remove('user')
        reactLocalStorage.setObject('user',res.data.user)  
        setrefresh('')
      
    })
    .catch((err)=>{
    
        // console.log(err.response)
        
    })
}
 useEffect(()=>{
    setuserBtc(reactLocalStorage.getObject('user').usdt_wallet[0].balance.$numberDecimal)
     let _id = reactLocalStorage.getObject('user')._id;
     
     getbalance(_id)
 },[])


   //1 SUN = 0.199

  const SendUSDT = ()=>{
      history.push('/client/sendusdt')
  }

    return(
        <div>
             <div className='newRate'>
                    <div>
                        <img src={Tether} style={{width:25}}/> <span>USDT Wallet</span>
                        <div className='newRating'><span>Rate:&nbsp;</span><span>&#36;{usdtprice && usdtprice.toLocaleString('en-US')}&nbsp;(USD/USDT)</span></div>
                    </div>
                    <div>
                        {_renderRate()}
                    </div>
                </div>
             <div className='VerveCover'>
                            {/* <div className='verve cardBtcReplace'>
                               
                            </div> */}
                            <div className='master'>
                                <div class="master-child cardUsdtReplace">
                                <div className='card_section_a'>
                                        <div>
                                            <img src={jupit}/>
                                        </div>
                                        <div className='cardnumber'>
                                            **** **** **** 0808
                                        </div>

                                    </div>
                                    <div className='card_section_b'>
                                        <div className='card_section_main'>
                                            USDT Balance

                                        </div>
                                        <div className='card_section_balance'>
                                            {userUsdt &&  userUsdt > 1 ? parseFloat(userUsdt).toFixed(6).toLocaleString('en-US',{maximumFractionDigits:2 },{minimumFractionDigits:2 }) : userUsdt}&nbsp;USDT
                                            <div>{refresh}</div>
                                        </div>
                                    </div>
                                    <div className='card_section_c'>
                                        <div>
                                            VALID THRU<br/>
                                            00/00
                                        </div>
                                        <div>
                                            CARD HOLDER<br/>
                                            {reactLocalStorage.getObject('user').username.toUpperCase()}
                                        </div>
                                        <div className='cardimg'>
                                            <img src={cardType} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className='visa cardNairaReplace coat'>
                                
                            </div> */}
                        </div>

                        <div class="btn_open_more">
                            <div className='btn_open_moreBTN cardUsdtReplace' onClick={SendUSDT}>
                                View More
                            </div>
                        </div>
        </div>
    )
}

export default Index;