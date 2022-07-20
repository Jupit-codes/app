import jupit from '../../../assets/images/utility/jupit.png'
import cardType from '../../../assets/images/utility/mastercard.png'
import { reactLocalStorage } from 'reactjs-localstorage'
import { useState,useEffect,useContext } from 'react'
import axios from 'axios'
import { GlobalContext } from "../../../context/Provider";
import Marketprice from '../../../context/actions/marketprice'
const Index = ({comp})=>{

    const [userBtc,setuserBtc] = useState()
    const [refresh,setrefreshing] = useState()
    const [btcprice,setbtcprice] = useState()
    const {priceState:{price:{data}},priceDispatch} = useContext(GlobalContext);
    const getbalance = async(_id,cancel)=>{
        
            try{
                
                setrefreshing('refreshing balance..')
                await axios({
                    method: "POST",
                    url: `https://myjupit.herokuapp.com/users/refresh`,
                    headers:{
                        'Content-Type':'application/json',
                        'Authorization':reactLocalStorage.get('token')
                    },
                    data:JSON.stringify({_id:_id})
                })
                .then((res)=>{
                    
                    setrefreshing('') 
                    // setuserBtc(res.data.user.btc_wallet[0].balance.$numberDecimal);
                    setuserBtc(5000.012145);
                    reactLocalStorage.remove('user')
                    reactLocalStorage.setObject('user',res.data.user)
                    
                
                })
                .catch((err)=>{
                    setrefreshing('')
                    console.log(err.response)
                    
                })
        
            }
            catch(error){
                if (axios.isCancel(error)) {
                } else {
                    throw error
                }
            }
        
    }

    useEffect(()=>{
        let x = reactLocalStorage.getObject('user');
        
        // setuserBtc(x.btc_wallet[0].balance.$numberDecimal);
        Marketprice()(priceDispatch);
        if(data){
            let xBTC = ((data.BTC.USD.PRICE - data.BTC.USD.OPEN24HOUR) / data.BTC.USD.OPEN24HOUR) * 100
            let xUSDT = ((data.USDT.USD.PRICE - data.USDT.USD.OPEN24HOUR) / data.USDT.USD.OPEN24HOUR) * 100
            
            // setpercentageBTC(parseFloat(xBTC).toFixed(5));
            // setpercentageUSDT(parseFloat(xUSDT).toFixed(5));
            setbtcprice(parseFloat(data.BTC.USD.PRICE) - 150);
            // setusdtprice(data.USDT.USD.PRICE);
        }
        

   },[data])


     useEffect(()=>{
        const source = axios.CancelToken.source();

         setuserBtc(reactLocalStorage.getObject('user').btc_wallet[0].balance.$numberDecimal)
         let _id = reactLocalStorage.getObject('user')._id;
        getbalance(_id);

        
     },[])

    return (
        <div className='designcover slideCardLeft'>
                            <div className='cardNairaCover'>
                                <div className='overlay'>

                                </div>
                                <div className='cardNairaBTC'>
                                    <div className='card_section_a'>
                                        <div >
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
                                            {userBtc && userBtc.toLocaleString('en-US',{maximumFractionDigits:2})}&nbsp;BTC <br/>
                                            <div className='card_section_balance_equivalent'>
                                                USD&nbsp;{parseFloat(userBtc * btcprice).toLocaleString('en-US',{maximumFractionDigits:2})}
                                                <div>{refresh}</div>
                                            </div>
                                            <div>{refresh}</div>

                                        </div>
                                    </div>
                                    <div className='card_section_c'>
                                        <div>
                                            VALID THRU<br/>
                                            03/09
                                        </div>
                                        <div>
                                            CARD HOLDER<br/>
                                            {reactLocalStorage.getObject('user').username.toUpperCase()}
                                        </div>
                                        <div className='cardtype'>
                                            <img src={cardType} />
                                        </div>
                                    </div>


                                </div>
                            
                            </div>
                            <div className='cardDesign'>
                                <div className='cardNAIRA'>
                                        
                                </div>
                                <div className='cardUSDT'>
                                        
                                </div>
                            </div>
                        </div>
    )
}

export default Index