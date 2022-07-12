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
// import ReceiveModal from '../../../utils/modal/customModal'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';
import ReceiveModal from '../../../utils/modal/receiveModal.js'

const Index = ({comp})=>{

    const history = useHistory();
    const [userBtc ,setuserBtc]= useState(0);
    const [rate, setrate]=useState([]);
    const [btcprice, setbtcprice]= useState()
    const [percentageBTC, setpercentageBTC]= useState()
    const [usdtprice, setusdtprice]= useState()
    const [percentageUSDT ,setpercentageUSDT]= useState()
    const [openModal, setopenModal] = useState(false);
    const {priceState:{price:{data}},priceDispatch} = useContext(GlobalContext);
    const [refresh,setrefresh] = useState()
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
        let x = reactLocalStorage.getObject('user');
        
        // setuserBtc(x.btc_wallet[0].balance.$numberDecimal);
        Marketprice()(priceDispatch);
        if(data){
            let xBTC = ((data.BTC.USD.PRICE - data.BTC.USD.OPEN24HOUR) / data.BTC.USD.OPEN24HOUR) * 100
            let xUSDT = ((data.USDT.USD.PRICE - data.USDT.USD.OPEN24HOUR) / data.USDT.USD.OPEN24HOUR) * 100
            
            setpercentageBTC(parseFloat(xBTC).toFixed(5));
            setpercentageUSDT(parseFloat(xUSDT).toFixed(5));
            setbtcprice(parseFloat(data.BTC.USD.PRICE) - 150);
            setusdtprice(data.USDT.USD.PRICE);
        }
        

   },[data])

   const getbalance = (_id)=>{
        setrefresh('refreshing balance')
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
        setrefresh('')
        console.log('jhjkhkj',res.data)
        setuserBtc(res.data.user.btc_wallet[0].balance.$numberDecimal);
        reactLocalStorage.remove('user');
        reactLocalStorage.setObject('user',res.data.user)
        
      
    })
    .catch((err)=>{
    
        console.log(err.response)
        
    })
}
 useEffect(()=>{
     let _id = reactLocalStorage.getObject('user')._id;
     getbalance(_id)
 },[])


   

  const SendBTC = ()=>{
      history.push('/client/sendbtc')
  }



    return(
        <div>
            
                <div className='newRate'>
                    
                    <div>
                        <Icon name="btc" size={25} /> <span>Bitcoin Wallet</span>
                        <div className='newRating'><span>Rate:&nbsp;</span><span>&#36;{btcprice && btcprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}&nbsp;(USD/BTC)</span></div>
                    </div>
                    <div className='ratepercentage'>
                        {_renderRate()}
                    </div>
                </div>
                
             <div className='VerveCover'>
                            {/* <div className='verve cardNairaReplace' onClick={()=>{comp('Naira')}}>
                            
                            </div> */}
                            <div className='master'>
                                <div class="master-child master-child-btc">
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
                                            BTC Balance

                                        </div>
                                        <div className='card_section_balance'>
                                        {userBtc && userBtc > 1 ? userBtc.toString().replace(/(?<!\.\d+)\B(?=(\d{3})+\b)/g, ","): userBtc}&nbsp;BTC
                                        </div>
                                        <div className='card_section_balance_equivalent'>
                                            USD&nbsp;{parseFloat(userBtc * btcprice).toFixed(3).toString().replace(/(?<!\.\d+)\B(?=(\d{3})+\b)/g, ",")}
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
                                        <div className="cardimg">
                                            <img src={cardType} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className='visa cardNaira' onClick={()=>{comp('Usdt')}}>
                                
                            </div> */}
                        </div>

                        <div class="btn_open_more ">
                            <div className='btn_open_moreBTN cardBtcReplace' onClick={SendBTC}>
                                View More
                            </div>
                        </div>
        </div>
    )
}

export default Index;