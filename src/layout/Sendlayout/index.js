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
const Index =()=>{
    const [lowFee, setlowFee]= useState();
    const [mediumFee, setmediumFee]= useState();
    const [highFee, sethighFee]= useState();
    const [customdisable, setcustomdiasble]=useState(true)
    const [ReceipentAddress,setReceipentAddress] = useState('')
    const [TransactionType, setTransactionType] = useState();
    const[currentRate,setcurrentRate]=useState();
    const {checkaddressState:{checkaddress:{loading,dataAddr,error}},checkaddressDispatch} = useContext(GlobalContext);
    const {priceState:{price:{data}},priceDispatch} = useContext(GlobalContext);
    const [btcamount,setbtcamount] = useState('');
    const [usdamount,setusdamount] = useState('');
    const history = useHistory();
    useEffect(()=>{
        Marketprice()(priceDispatch);
        if(data){
            setcurrentRate(data.BTC.USD.PRICE);
            
        }

        if(error){
            console.log(error);
            if(error === "Token Not Found"){
                reactLocalStorage.remove('user');
                reactLocalStorage.remove('token');
                history.push('/client/login')
            }
        }
        

    },[dataAddr,error,data])

    const handleChangeFee = (e)=>{
        if(e.target.classList.contains('low')){
            sethighFee(false);
            setmediumFee(false);
            setlowFee(true);
        }
        else if(e.target.classList.contains('medium')){
            sethighFee(false);
            setmediumFee(true);
            setlowFee(false);
        }
        else if(e.target.classList.contains('high')){
            sethighFee(true);
            setmediumFee(false);
            setlowFee(false);
        }
    }
    const _handleReceipent = (e)=>{
        setReceipentAddress(e.target.value);
        const items = {
            receipent_address:ReceipentAddress,
            wallet_type:'BTC'
        }
        CheckAddress(items)(checkaddressDispatch)
        // setcustomdiasble(!customdisable)
        
    }
    const BTCAmount = (e)=>{
        setbtcamount(e.target.value);
        let pat = currentRate * e.target.value
        setusdamount(pat)
    }
    const USDAmount=(e)=>{
        setusdamount(e.target.value);
        let pat = e.target.value / currentRate 
        setbtcamount(pat)
    }
    const CopyData = (e)=>{
       
        setReceipentAddress(e.clipboardData.getData('Text'))
    }
    const _selectFee = ()=>{
        // getAutoFee()()0.00000001
        return (
            <div className=''>
                <div className='sendBTCFrom'>Select Fee</div>
                <div className='selectFee'>
                    <div className='selectedbox low' onClick={handleChangeFee}>
                        <div>{lowFee && <HiCheckCircle size={15} color="#8be78b"/>}</div>
                        <div className='selectedtype low'>low Fee</div>
                        <div className='selectedAmount low'>0.000005 SATOCHI</div>
                            
                    </div>
                    <div className="selectedbox medium" onClick={handleChangeFee}>
                        <div>{mediumFee && <HiCheckCircle size={15} color="#8be78b"/>}</div>
                        <div className='selectedtype medium'>Medium Fee</div>
                         <div className='selectedAmount medium'>0.00000100 SATOCHI</div>
                    </div>
                    <div className='selectedbox high' onClick={handleChangeFee}>
                        <div>{highFee && <HiCheckCircle size={15} color="#8be78b"/>}</div>
                        <div className='selectedtype high'>High Fee</div>
                         <div className='selectedAmount high'>0.00000100 SATOCHI</div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="sendBTC">
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
                            <input type="text"  onPaste={CopyData} placeholder='Paste Receipent BTC Address' value={ReceipentAddress} onChange={_handleReceipent}/>
                            <small>{loading && <img src={Loader} style={{width:30,paddingLeft:10}}/>}</small>
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
                        {dataAddr && dataAddr === "Non-JupitCustomer" && _selectFee()}
                    </div>
                    <div className={customdisable? 'sendFund disabled': 'sendFund'} >
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
                            <div className='sendBTCFrom'>Network Fee</div>
                            <div className='receipentAddr-TextInfor'>
                                {btcamount}
                            </div>
                    </div>
                    <div className='TextInformation'>
                            <div className='sendBTCFrom'>Total Fee</div>
                            <div className='receipentAddr-TextInfor'>
                                {parseFloat({btcamount}) + 0.05}
                            </div>
                    </div>
                </div>
                    
                </div>
        </div>
    )
}

export default Index;