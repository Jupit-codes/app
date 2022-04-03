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


   //1 SUN = 0.199

  const SendUSDT = ()=>{
      history.push('/client/sendusdt')
  }

    return(
        <div>
             <div className='newRate'>
                    <div>
                        <img src={Tether} style={{width:25}}/> <span>USDT Wallet</span>
                        <div className='newRating'><span>Rate:&nbsp;</span><span>&#36;{usdtprice}&nbsp;(USD/USDT)</span></div>
                    </div>
                    <div>
                        {_renderRate()}
                    </div>
                </div>
             <div className='VerveCover'>
                            <div className='verve cardBtcReplace'>
                               
                            </div>
                            <div className='master'>
                                <div class="master-child cardUsdtReplace">
                                <div className='card_section_a'>
                                        <div>
                                            <img src={jupit}/>
                                        </div>
                                        <div>
                                            **** **** **** 0808
                                        </div>

                                    </div>
                                    <div className='card_section_b'>
                                        <div className='card_section_main'>
                                            USDT Balance

                                        </div>
                                        <div className='card_section_balance'>
                                            {userUsdt}&nbsp;TETHER
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
                                        <div>
                                            <img src={cardType} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='visa cardNairaReplace coat'>
                                
                            </div>
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