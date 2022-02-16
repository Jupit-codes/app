import '../../assets/css/Send/send.css'
import {BsArrowLeftCircle} from 'react-icons/bs'
import Icon from "react-crypto-icons";
import Equivalent from '../../assets/images/equivalent.svg'
import {HiCheckCircle} from 'react-icons/hi'
import { useContext, useEffect, useState } from 'react';
import CheckAddress from '../../context/actions/checkaddress.js'
import { GlobalContext } from '../../context/Provider';
import { reactLocalStorage } from 'reactjs-localstorage';
import Loader from '../../assets/images/loader.svg'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Marketprice from '../../context/actions/marketprice.js'
import GetAutoFee from '../../context/actions/getAutofee.js'
import { ToastContainer, toast } from 'react-toastify';
import ProcessCoin from '../../context/actions/sendcoin'
import 'react-toastify/dist/ReactToastify.css';
import LoaderOverlay from '../../utils/loader/loader.js'
const Index =()=>{
    const [lowFee, setlowFee]= useState();
    const [mediumFee, setmediumFee]= useState();
    const [highFee, sethighFee]= useState();
    const [blockaverage, setblockaverage]= useState(0);

    const [lowFeeRate, setlowFeeRate]= useState('');
    const [mediumFeeRate, setmediumFeeRate]= useState('');
    const [highFeeRate, sethighFeeRate]= useState('');
    const [mount,setMount] = useState(false)

    const [networkFee,setNetworkFee] = useState(0);
    const [ButtonDisable,setButtonDisable] = useState(null)
    const [customdisable, setcustomdiasble]=useState(true)
    const [ReceipentAddress,setReceipentAddress] = useState('')
    const [selectedAmountType, setselectedAmountType] = useState('');
    const[currentRate,setcurrentRate]=useState('');
    const {checkaddressState:{checkaddress:{loading,dataAddr,error}},checkaddressDispatch} = useContext(GlobalContext);
    const {priceState:{price:{data}},priceDispatch} = useContext(GlobalContext);
    const {autofeeState:{autofee:{loadingAutofee,dataAutofee,errorAutofee}},autofeeDispatch} = useContext(GlobalContext);
    const {sendcoinState:{sendcoin:{SEND_COIN_loading,SEND_COIN_data,SEND_COIN_error}},sendcoinDispatch} = useContext(GlobalContext);
    
    const [btcamount,setbtcamount] = useState('');
    const [usdamount,setusdamount] = useState('');
    const history = useHistory();
    useEffect(()=>{
        
        Marketprice()(priceDispatch);
       
        if(data){
            setcurrentRate(data.BTC.USD.PRICE);
            
        }
        

        if(error){
            // console.log(error);
            if(error === "Token Not Found"){
                reactLocalStorage.remove('user');
                reactLocalStorage.remove('token');
                history.push('/client/login')
            }
        }
        

    },[error,data])

    useEffect(()=>{
        GetAutoFee()(autofeeDispatch)
        if(!mount){
                if(dataAutofee){
                    
                    dataAutofee.message.auto_fees.forEach((d)=>{
                        
                        if(d.block_num === 1){
                            sethighFeeRate(d.auto_fee)
                        }
                        else if(d.block_num === 50){
                            setmediumFeeRate(d.auto_fee)
                        }
                        else if(d.block_num === 100){
                            setlowFeeRate(d.auto_fee)
                        }
                    })
                    setMount(true)
            }
        }
        
    },[dataAutofee,mount])

    useEffect(()=>{
        
        if(ReceipentAddress){
            const items = {
                receipent_address:ReceipentAddress,
                wallet_type:'BTC'
            }
            CheckAddress(items)(checkaddressDispatch)
        }
        
        
        
    },[ReceipentAddress])

    const handleChangeFee = (e)=>{
        if(e.target.classList.contains('low')){
            sethighFee(false);
            setmediumFee(false);
            setlowFee(true);
            let x =parseFloat(lowFeeRate * 226 * 0.00000001 ).toFixed(8);
            setNetworkFee(x)
            setblockaverage(100)
              
            
        }
        else if(e.target.classList.contains('medium')){
            sethighFee(false);
            setmediumFee(true);
            setlowFee(false);
            let x =parseFloat(mediumFeeRate * 226 * 0.00000001 ).toFixed(8);
            setNetworkFee(x)
            setblockaverage(50)
        }
        else if(e.target.classList.contains('high')){
            sethighFee(true);
            setmediumFee(false);
            setlowFee(false);
            let x =parseFloat(highFeeRate * 226 * 0.00000001 ).toFixed(8);
            setNetworkFee(x)
            setblockaverage(1)
        }
    }
    const _handleReceipent = (e)=>{
        setReceipentAddress(e.target.value);
        const items = {
            receipent_address:ReceipentAddress,
            wallet_type:'BTC'
        }
        setbtcamount('');
        setusdamount('')
        // CheckAddress(items)(checkaddressDispatch)
        // setcustomdiasble(!customdisable)
        
    }
   
    const BTCAmount = (e)=>{
        setbtcamount(e.target.value);
        let pat = currentRate * e.target.value
        setusdamount(pat)
        if(dataAddr === "Internal Transfer"){
            setNetworkFee(0)
            
        }
        
    }
    const USDAmount=(e)=>{
        setusdamount(e.target.value);
        let pat = e.target.value / currentRate 
        setbtcamount(pat)
        if(dataAddr === "Internal Transfer"){
            setNetworkFee(0)
            
        }
    }
    const CopyData = (e)=>{
       
        setReceipentAddress(e.clipboardData.getData('Text'))
       
        
        const items = {
            receipent_address:ReceipentAddress,
            wallet_type:'BTC'
        }
        CheckAddress(items)(checkaddressDispatch)
    }
    const _addAmount = ()=>{
        return parseFloat(btcamount) + parseFloat(networkFee)
    }
    const _selectFee = ()=>{
        // getAutoFee()()0.00000001
        // console.log('dataloadfee',dataAutofee)
        return (
            <div className=''>
                <ToastContainer/>
                <div className='sendBTCFrom'>Select Fee</div>
                <div className='selectFee'>
                    <div className='selectedbox low' onClick={handleChangeFee}>
                        <div>{lowFee && <HiCheckCircle size={15} color="#8be78b"/>}</div>
                        <div className='selectedtype low'>low Fee</div>
                        <div className='selectedAmount low'>100 Blocks</div>
                        <div className='selectedAmount high'>16.6Hours</div> 
                    </div>
                    <div className="selectedbox medium" onClick={handleChangeFee}>
                        <div>{mediumFee && <HiCheckCircle size={15} color="#8be78b"/>}</div>
                        <div className='selectedtype medium'>Medium Fee</div>
                         <div className='selectedAmount medium'>50 Blocks</div>
                         <div className='selectedAmount high'>8.3Hours</div>
                    </div>
                    <div className='selectedbox high' onClick={handleChangeFee}>
                        <div>{highFee && <HiCheckCircle size={15} color="#8be78b"/>}</div>
                        <div className='selectedtype high'>High Fee</div>
                         <div className='selectedAmount high'>1 Block</div>
                         <div className='selectedAmount high'>10mins</div>
                    </div>
                </div>
            </div>
        )
    }
    // useEffect(()=>{
    //     if(dataAddr && dataAddr === "Internal Transfer" && btcamount)
    //     {
    //         setButtonDisable (false);
    //     }
    //     else if(dataAddr && dataAddr === "BlockChain Transfer" && btcamount && networkFee){
    //         setButtonDisable (false);
    //     }
    // },[dataAddr])
    const sendCoin = ()=>{
        const items={
            ReceipentAddress:ReceipentAddress,
            networkFee:networkFee,
            userid:reactLocalStorage.getObject('user')._id,
            amount:btcamount,
            block_average:blockaverage,
            wallet_type:"BTC",
            transferType:dataAddr,
            SenderAddress:reactLocalStorage.getObject('user') .btc_wallet[0].address

        }
        
        console.log(items)

        ProcessCoin(items)(checkaddressDispatch);

        // toast('Coin Successfully Sent');


        
    }
    return (
        <div className="sendBTC">
            { SEND_COIN_loading && <LoaderOverlay/>}
            <div className='back'><BsArrowLeftCircle size={25} color='#3498db' /><span>Return to BTC Wallet</span></div>
            <div className='SendBody'>
                <div className='SendBodyI'>
                    <div className='currentRate'>&#36;{currentRate}</div>
                    <div className='sendBTCFrom'>Send BTC From</div>
                    <div className='fromBTC'>
                        <div>
                            <Icon name="btc" size={30} /> <span>BTC Wallet</span>
                        </div>
                        <div>
                            Balance:0.0000000
                        </div>
                    </div>
                    <div className='toBTC'>
                        <div className='sendBTCFrom'>To</div>
                        <div>
                            <input type="text"  onChange={_handleReceipent} placeholder='Paste Receipent BTC Address' value={ReceipentAddress} />
                            <small>{ReceipentAddress && loading && <img src={Loader} style={{width:30,paddingLeft:10}}/>}</small>
                            {ReceipentAddress && error && <small className='errorBTCAddr'>{error}</small>}
                            {ReceipentAddress  && dataAddr && <small className='dataBTCAddr'>{dataAddr}</small>}
                            
                        </div>
                    </div>
                    <div>
                        <div className='sendBTCFrom'>Amount</div>
                        <div className='amount'>
                            <input type="number"  placeholder='BTC' pattern="[+-]?\d+(?:[.,]\d+)?" onChange={BTCAmount} value={btcamount}/>
                            <img src={Equivalent}/>
                            <input type="number"  placeholder='USD'  pattern="[+-]?\d+(?:[.,]\d+)?" value={usdamount} onChange={USDAmount}/>
                        </div>
                    </div>
                    <div>
                        {ReceipentAddress && dataAddr && dataAddr === "BlockChain Transfer" && _selectFee()}
                        {/* <small>{loadingAutofee && <img src={Loader} style={{width:30,paddingLeft:10}}/>}</small> */}
                        {/* {errorAutofee && <span className='errorBTCAddr'>{errorAutofee}</span>} */}
                       
                    </div>
                    <div className={dataAddr && dataAddr === "Internal Transfer" && btcamount  ? 'sendFund': dataAddr && dataAddr === "BlockChain Transfer" && btcamount && networkFee ? 'sendFund': 'sendFund disabled'  }  onClick={sendCoin}>
                            Continue
                    </div>
                </div>
                <div className='SendBodyII'>
                    <div className='TextInformation'>
                            <div className='sendBTCFrom'>Receipent</div>
                            <div className='receipentAddr-TextInfor'>
                                {ReceipentAddress}
                            </div>
                    </div>
                    <div className='TextInformation'>
                            <div className='sendBTCFrom'>Amount(In BTC)</div>
                            <div className='receipentAddr-TextInfor'>
                                {btcamount}
                            </div>
                    </div>
                    <div className='TextInformation'>
                            <div className='sendBTCFrom'>Network Fee ( In BTC)</div>
                            <div className='receipentAddr-TextInfor'>
                                {networkFee}
                            </div>
                    </div>
                    <div className='TextInformation'>
                            <div className='sendBTCFrom'>Total Fee (In BTC)</div>
                            <div className='receipentAddr-TextInfor'>
                                
                                {dataAddr && dataAddr === "Internal Transfer" && btcamount && _addAmount()}
                                {dataAddr && dataAddr === "BlockChain Transfer" && btcamount && networkFee && _addAmount()}
                            </div>
                    </div>
                </div>
                    
                </div>
        </div>
    )
}

export default Index;