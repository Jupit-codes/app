import '../../../assets/css/Body/section1.css'
import BTC from '../../../assets/images/utility/btc.svg'
import USDT from '../../../assets/images/utility/usdt.svg'
import Equivalent from '../../../assets/images/utility/equivalent.png'
import Upward from '../../../assets/images/utility/upward.svg'
import Growth from '../../../assets/images/utility/growth.svg'
import Down from '../../../assets/images/utility/down.svg'
import Downward from '../../../assets/images/utility/No.svg'
import Marketprice from '../../../context/actions/marketprice'
import { GlobalContext } from "../../../context/Provider";
import { reactLocalStorage } from 'reactjs-localstorage';
import { useContext, useEffect, useState } from 'react'
import NumberFormat from 'react-number-format'
import {FcBearish,FcBullish} from 'react-icons/fc'
import {AiOutlineFall,AiOutlineRise} from 'react-icons/ai'
import {FaBtc} from 'react-icons/fa'
import Icon from "react-crypto-icons";


function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
const Index = ()=>{
    const [percentageBTC, setpercentageBTC]= useState()
    const [percentageUSDT ,setpercentageUSDT]= useState()
    const [usdtprice, setusdtprice]= useState();
    const [btcprice, setbtcprice]= useState();
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    const {priceState:{price:{data}},priceDispatch} = useContext(GlobalContext);

    useEffect(()=>{
        let x = reactLocalStorage.getObject('user');
        
        // setuserBtc(x.btc_wallet[0].balance.$numberDecimal);
       
        setTimeout(()=>{
            Marketprice()(priceDispatch);
        },5000)
        
        if(data){
           
            
            // let xBTCPercentage = ((data[0].current_price - data[0].low_24h) / data[0].current_price) * 100
            // let xUSDTPercentage = ((data[1].current_price - data[1].low_24h) / data[0].current_price) * 100
            // let xBTC = data[0].current_price
            // let xUSDT = data[1].current_price

            // console.log(xBTC,xUSDT)
            // setpercentageBTC(parseFloat(xBTCPercentage).toFixed(5));
            // setpercentageUSDT(parseFloat(xUSDTPercentage).toFixed(5));
            // setbtcprice(parseFloat(xBTC)- 150);
            // setusdtprice(parseFloat(xUSDT) );
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

   const seperate = (amount)=>{
    var delimiter = ","; // replace comma if desired
	var a = amount.split('.',2)
	var d = a[1];
	var i = parseInt(a[0]);
	if(isNaN(i)) { return ''; }
	var minus = '';
	if(i < 0) { minus = '-'; }
	i = Math.abs(i);
	var n = new String(i);
	var a = [];
	while(n.length > 3) {
		var nn = n.substr(n.length-3);
		a.unshift(nn);
		n = n.substr(0,n.length-3);
	}
	if(n.length > 0) { a.unshift(n); }
	n = a.join(delimiter);
	if(d.length < 1) { amount = n; }
	else { amount = n + '.' + d; }
	amount = minus + amount;
	return amount;
   }

   const _renderRateBig =()=>{
    if(percentageBTC <0){
        // return <img src={Down}/>
        return <FcBearish size={windowDimensions.width > 0 && windowDimensions.width <=800 ? 40 : 50}/>
    }
    else if(percentageBTC == 0){
        return <FcBullish size={windowDimensions.width > 0 && windowDimensions.width <=800 ? 40 : 50}/>
        // return <img src={Growth}/>
    }
    else if(percentageBTC > 0){
        return <FcBullish size={windowDimensions.width > 0 && windowDimensions.width <=800 ? 40 : 50}/>
        // return <img src={Growth}/>
    }
}

const _renderRate =()=>{
    if(percentageBTC <0){
        return <div className='bullish'><span><AiOutlineFall color="#ff0000" size={windowDimensions.width > 0 && windowDimensions.width <=800 ? 12 : 20}/>&nbsp;{percentageBTC}%</span></div>
    }
    else if(percentageBTC == 0){
        return <div className='neutral'><span>{percentageBTC}%</span></div>
    }
    else if(percentageBTC > 0){
        return <div className='bearish'><span><AiOutlineRise color="#2b9f7b" size={windowDimensions.width > 0 && windowDimensions.width <=800 ? 12 : 20}/>&nbsp;{percentageBTC}%</span></div>
    }
}

const _renderRateUsdt =()=>{
    if(percentageUSDT <0){
        return <div className='bullish'><span><AiOutlineFall color="#ff0000" size={windowDimensions.width > 0 && windowDimensions.width <=800 ? 12 : 20}/>&nbsp;{percentageUSDT}%</span></div>
    }
    else if(percentageUSDT == 0){
        return <div className='neutral'><span>{percentageUSDT}%</span></div>
    }
    else if(percentageUSDT > 0){
        return <div className='bearish'><span><AiOutlineRise color="#2b9f7b" size={windowDimensions.width > 0 && windowDimensions.width <=800 ? 12 : 20}/>&nbsp;{percentageUSDT}%</span></div>
    }
}

const _renderRateUsdtBig =()=>{
    if(percentageUSDT <0){
        // FcBearish,FcBullish
        return <FcBearish size={windowDimensions.width > 0 && windowDimensions.width <=800 ? 40 : 50}/>
    }
    else if(percentageUSDT == 0){
        return <FcBullish size={windowDimensions.width > 0 && windowDimensions.width <=800 ? 40 : 50}/>
    }
    else if(percentageUSDT > 0){
        return <FcBullish size={windowDimensions.width > 0 && windowDimensions.width <=800 ? 40 : 50}/>
    }
}

useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


    return(
        <div className="body_section1">
            <div className='cardSection1'>
                <div className='imagepart'>
                    <div className='asset-img-div'>
                        <Icon name="btc" size={windowDimensions.width > 0 && windowDimensions.width <=800 ? 25 : 30} />
                    </div>
                    <div className='asset-to-usd'>
                        <span>BTC</span><span><img src={Equivalent}/></span><span>USD</span>
                    </div>
                    <div className='asset-value'>
                        {/* {btcprice} */}
                        <NumberFormat value={btcprice} displayType={'text'} thousandSeparator={true} prefix={'$'} />
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
                         {/* <img src={USDT}  /> */}
                         <Icon name="usdt" size={windowDimensions.width > 0 && windowDimensions.width <=800 ? 25 : 30} />
                    </div>
                    <div className='asset-to-usd'>
                        <span>USDT</span><span><img src={Equivalent}/></span><span>USD</span>
                    </div>
                    <div className='asset-value'>
                       {/* {usdtprice} */}
                       <NumberFormat value={usdtprice} displayType={'text'} thousandSeparator={true} prefix={'$'} />
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