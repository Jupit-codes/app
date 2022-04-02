import '../../../assets/css/Body/section1.css'
import BTC from '../../../assets/images/utility/btc.png'
import USDT from '../../../assets/images/utility/usdt.png'
import Equivalent from '../../../assets/images/utility/equivalent.png'
import Upward from '../../../assets/images/utility/upward.png'
import Growth from '../../../assets/images/utility/growth.png'
import Down from '../../../assets/images/utility/down.png'
import Downward from '../../../assets/images/utility/No.png'
import Marketprice from '../../../context/actions/marketprice'
import { GlobalContext } from "../../../context/Provider";
import { reactLocalStorage } from 'reactjs-localstorage';
import { useContext, useEffect, useState } from 'react'
const Index = ()=>{
    const [percentageBTC, setpercentageBTC]= useState()
    const [percentageUSDT ,setpercentageUSDT]= useState()
    const [usdtprice, setusdtprice]= useState();
    const [btcprice, setbtcprice]= useState();

    const {priceState:{price:{data}},priceDispatch} = useContext(GlobalContext);

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

   const _renderRateBig =()=>{
    if(percentageBTC <0){
        return <img src={Down}/>
    }
    else if(percentageBTC == 0){
        return <img src={Growth}/>
    }
    else if(percentageBTC > 0){
        return <img src={Growth}/>
    }
}

const _renderRate =()=>{
    if(percentageBTC <0){
        return <div className='bullish'><span><img src={Downward}/>&nbsp;{percentageBTC}%</span></div>
    }
    else if(percentageBTC == 0){
        return <div className='neutral'><span>{percentageBTC}%</span></div>
    }
    else if(percentageBTC > 0){
        return <div className='bearish'><span><img src={Upward}/>&nbsp;{percentageBTC}%</span></div>
    }
}

const _renderRateUsdt =()=>{
    if(percentageUSDT <0){
        return <div className='bullish'><span><img src={Downward}/>&nbsp;{percentageUSDT}%</span></div>
    }
    else if(percentageUSDT == 0){
        return <div className='neutral'><span>{percentageUSDT}%</span></div>
    }
    else if(percentageUSDT > 0){
        return <div className='bearish'><span><img src={Upward}/>&nbsp;{percentageUSDT}%</span></div>
    }
}

const _renderRateUsdtBig =()=>{
    if(percentageUSDT <0){
        return <img src={Down}/>
    }
    else if(percentageUSDT == 0){
        return <img src={Growth}/>
    }
    else if(percentageUSDT > 0){
        return <img src={Growth}/>
    }
}
    return(
        <div className="body_section1">
            <div className='cardSection1'>
                <div className='imagepart'>
                    <div className='asset-img-div'>
                         <img src={BTC}/>
                    </div>
                    <div className='asset-to-usd'>
                        <span>BTC</span><span><img src={Equivalent}/></span><span>USD</span>
                    </div>
                    <div className='asset-value'>
                        {btcprice}
                    </div>
                    <div className='trend-div'>
                        {_renderRate()}
                    </div>
                </div>
                <div className='trend'>
                    {_renderRateBig()}
                </div>
            </div>
            <div className='cardSection1'>
            <div className='imagepart'>
                    <div className='asset-img-div'>
                         <img src={USDT}/>
                    </div>
                    <div className='asset-to-usd'>
                        <span>USD</span><span><img src={Equivalent}/></span><span>USD</span>
                    </div>
                    <div className='asset-value'>
                       {usdtprice}
                    </div>
                    <div className='trend-div'>
                        {/* <img src={Downward}/><span>{percentageUSDT}%</span> */}
                        {_renderRateUsdt()}
                    </div>
                </div>
                <div className='trend'>
                    {/* <img src={Down}/> */}
                    {_renderRateUsdtBig()}
                </div>
            </div>
        </div>
    )
}

export default Index;