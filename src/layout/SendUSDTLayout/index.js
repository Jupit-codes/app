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
import LoaderOverlay from '../../utils/loader/mainLoader'
import UserDetailsRefresh from '../../context/actions/userdetails.js'
import { USER_DETAILS_LOADING } from '../../constants/actionTypes';
import { useRef } from 'react';
import axios from 'axios';
import getNotification from '../../context/actions/getNotification';
import Tether from '../../assets/images/tether.png'
import CreatePinModal from '../../utils/modal/CREATE_PIN'
import EnterPinModal from '../../utils/modal/INPUT_PIN'
import NumberFormat from 'react-number-format';
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
    // const [actualNetworkFee,setactualNetworkFee] = useState(0);
    const [ButtonDisable,setButtonDisable] = useState(null)
    const [customdisable, setcustomdiasble]=useState(true)
    const [ReceipentAddress,setReceipentAddress] = useState('')
    const [selectedAmountType, setselectedAmountType] = useState('');
    const[currentRate,setcurrentRate]=useState('');
    const {checkaddressState:{checkaddress:{loading,dataAddr,error}},checkaddressDispatch} = useContext(GlobalContext);
    const {priceState:{price:{data}},priceDispatch} = useContext(GlobalContext);
    //const {autofeeState:{autofee:{loadingAutofee,dataAutofee,errorAutofee}},autofeeDispatch} = useContext(GlobalContext);
    const {sendcoinState:{sendcoin:{SEND_COIN_loading,SEND_COIN_data,SEND_COIN_error}},sendcoinDispatch} = useContext(GlobalContext);
    const {userdetailsState:{userdetails:{USER_loading,USER_error,USER_data}},userdetailsDispatch} = useContext(GlobalContext);
    const {getnotificationState,getnotificationDispatch} = useContext(GlobalContext)
    // console.log('sendCoindata',SEND_COIN_data);
    // console.log('sendCoinError',SEND_COIN_error);
    const [btcamount,setbtcamount] = useState('');
    const [usdamount,setusdamount] = useState('');
    const [Balance,setBalance] = useState(0);
    const [mountBalance,setMountBalance] = useState(false)
    const isMounted = useRef(false);
    const history = useHistory();
    const [kycLevel1,setkycLevel1] = useState('')
    const [kycLevel2,setkycLevel2] = useState('')
    const [kycLevel3,setkycLevel3] = useState('')
    const[createPin,setcreatePin] =  useState(false);
    const [checkpincreation, setcheckpincreation] = useState()
    const [openModal,setopenModal] = useState(false);
    const [success,setsuccess] = useState(false)
    const [dataAutofee,setdataAutofee] = useState();
    const [userrefresh,setUserRefresh] = useState();
  
    const [InputwalletPIn,setInputwalletPIn] = useState(false)
    const [mywallet,setmywallet] = useState()
    const [Rate,setRate] = useState(0);
    const [chargeBlockChain,setchargeBlockChain] = useState()
    const [chargeInternal,setchargeInternal] = useState()
    
   useEffect(()=>{
       let _id = reactLocalStorage.getObject('user')._id;
       
        UserDetailsRefresh(_id)(userdetailsDispatch)
    
            // if(USER_data){
                
            //         setBalance(USER_data.user.usdt_wallet[0].balance.$numberDecimal);
            //         setcreatePin(USER_data.user.Pin_Created);
            //         setmywallet(USER_data.user.wallet_pin);
                    
                
               
            // }
   },[])

    const getbalance = (_id)=>{
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
            
            if(Balance !== res.data.user.usdt_wallet[0].balance.$numberDecimal ){
                setBalance(res.data.user.usdt_wallet[0].balance.$numberDecimal);
                setcreatePin(res.data.user.Pin_Created);
                setmywallet(res.data.user.wallet_pin);
                setcheckpincreation(res.data.user.Pin_Created)

                
            }
                
               
            
        })
        .catch((err)=>{
            
            // console.log('error',err.response)
            
        })
    }

    
const retrieveAutoFee = ()=>{
    const Base_url = process.env.REACT_APP_BACKEND_URL;
        axios({
            method: "POST",
            url: `${Base_url}/threshold/getautofee`,
            headers: {
            "Content-Type": "application/json",
            "Authorization":`Bearer ${reactLocalStorage.get('token')}`

            },
            data:JSON.stringify({walletType:'USDT'})
        })
        .then(res=>{
        

        res.data.message.auto_fees.forEach((d)=>{
                            
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

        setdataAutofee(true)
    
    
    })
    .catch(err=>{
        // console.log(err.response)
        {err.response ? toast.error('Network Fee :'+ err.response.data.message,'Network Fee Error'): toast.error('Network Fee:NO Connection To Server','Network Fee Error') }
        
    })

   }
    const _getKyc = (_id)=>{
        const Base_url = process.env.REACT_APP_BACKEND_URL;
        axios({
            method: "POST",
            url: `${Base_url}/users/kyc`,
            headers:{
                'Content-Type':'application/json',
                
                'Authorization':reactLocalStorage.get('token')
            },
            data:JSON.stringify({userid:_id})
        })
        .then((res)=>{
            setkycLevel1(res.data.level1[0].status);
            setkycLevel2(res.data.level2[0].event_status);
        })
        .catch((err)=>{
            
            // console.log('error',err.response)
            
        })
    }

    const _checkuser = ()=>{
        const Base_url = process.env.REACT_APP_BACKEND_URL;
        axios({
            method: "POST",
            url: `${Base_url}/users/refresh`,
            headers:{
                'Content-Type':'application/json',
                
                'Authorization':reactLocalStorage.get('token')
            },
            data:JSON.stringify({_id:reactLocalStorage.getObject('user')._id})
        })
        .then((res)=>{
            setcreatePin(res.data.Pin_Created)
            setmywallet(res.data.wallet_pin);
            
        })
        .catch((err)=>{
            
            // console.log('error',err.response)
            
        })
    }


    useEffect(()=>{
        const _id = reactLocalStorage.getObject('user')._id;
        getbalance(_id);
        _getKyc(_id);
        _checkuser();
    },[Balance])
   

    useEffect(()=>{
        if(SEND_COIN_data){
                
            ReceipentAddress && btcamount && toast.success(SEND_COIN_data.Message,'SUCCESS')
                setReceipentAddress('');
                setbtcamount('');
                setusdamount('');
                setNetworkFee('');
                setBalance(0);
                getNotification(4)(getnotificationDispatch)
        }

        if(SEND_COIN_error){
            ReceipentAddress && btcamount && toast.error(SEND_COIN_error.Message,'ERROR')
            // console.log(SEND_COIN_error.Message);
            toast.error(SEND_COIN_error,"ERROR")
        }

    },[SEND_COIN_data,SEND_COIN_error])

    useEffect(()=>{
        setTimeout(()=>{  Marketprice()(priceDispatch)},5000)
    },[])


    useEffect(()=>{
        
    
        if(data){
            
            setcurrentRate(data[1].current_price);
            let chargeCalBlockChainCal = parseFloat(5)/ parseFloat(currentRate);
            setchargeBlockChain(chargeCalBlockChainCal);
            let chargeCalInternalCal = parseFloat(2)/ parseFloat(currentRate);
            setchargeInternal(chargeCalInternalCal)
          
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
        retrieveAutoFee();
        getrate();
        
    },[])
// 1 TRX = 1,000,000 SUN
// xtrx = 9,8000,000SUN



    useEffect(()=>{
        
        if(ReceipentAddress){
            const items = {
                receipent_address:ReceipentAddress,
                wallet_type:'USDT'
            }
            CheckAddress(items)(checkaddressDispatch)
            let x = parseFloat(mediumFeeRate *  0.000001  ).toFixed(6);
            setNetworkFee(x)
            
        }
        
        
    },[ReceipentAddress])
    const handleSend = ()=>{
        history.push({
            pathname:'/client/wallet',
            state:{wallettype:'Usdt'}
        })
    }
    const handleChangeFee = (e)=>{
        if(e.target.classList.contains('low')){
            sethighFee(false);
            setmediumFee(false);
            setlowFee(true);
            // console.log('lowRate',lowFeeRate)
            let x =parseFloat(lowFeeRate *  0.000001 ).toFixed(8);
            setNetworkFee(x)
            setblockaverage(100);
            
              
            
        }
        else if(e.target.classList.contains('medium')){
            sethighFee(false);
            setmediumFee(true);
            setlowFee(false);
            let x =parseFloat(mediumFeeRate *  0.000001  ).toFixed(8);
            setNetworkFee(x)
            setblockaverage(50)
        }
        else if(e.target.classList.contains('high')){
            sethighFee(true);
            setmediumFee(false);
            setlowFee(false);
            let x =parseFloat(highFeeRate * 0.000001 ).toFixed(8);
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


        const { value } = e.target;
        if(value){
            setbtcamount(value);
            
            let pat = parseFloat(value.replace(/,/g, '') * currentRate).toFixed(2)
            setusdamount(pat)
        }
        else{
            setbtcamount('');
            setusdamount('');
        }
        
    }
    const USDAmount = (e)=>{
        const {value } = e.target;
        if(value){
            setusdamount(value);
        
            let pat = parseFloat(value.replace(/,/g, '') / currentRate).toFixed(8)
            setbtcamount(pat)
        }
        else{
            setbtcamount('');
            setusdamount('');
        }
        
    }



    // const USDAmount=(e)=>{
       
    //     const {value} = e.target
    //     if(value){
    //         const formattedValue = (Number(value.replace(/\D/g, '')) || '').toLocaleString();
    //         setusdamount(parseFloat(value.replace(/\D/g, '')))
    //         let pat = value.replace(/,/g, '') / currentRate 
    //         setbtcamount(pat)
    //         // if(dataAddr === "Internal Transfer"){
    //         //     setNetworkFee(0)
                
    //         // }
    //     }
    //     else{
    //         setbtcamount('');
    //         setusdamount('');
           
    //     }
    // }
    const CopyData = (e)=>{
       
        setReceipentAddress(e.clipboardData.getData('Text'))
        const items = {
            receipent_address:ReceipentAddress,
            wallet_type:'USDT'
        }
        CheckAddress(items)(checkaddressDispatch)
    }
    const _addAmount = ()=>{
        return parseFloat(btcamount) + parseFloat(networkFee)
    }
    const _selectFee = ()=>{
        
        return (
            <div className=''>
                
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
   
    const sendCoin = ()=>{

    //     let kycprogress = 0
    //     if(kycLevel1 === "Verified"){
            
    //         kycprogress += 25
    //     }

    //     if(kycLevel2 === "customeridentification.success"){
    //         kycprogress += 30
    //     }

    //    if(kycprogress === 25 && usdamount > 100){
    //     toast.error("You can not transact more than 100 USD on this KYC LEVEL.","KYC Restriction");
    //     return false;
    //    }
    //    if(kycprogress === 55 && usdamount > 500){
    //     toast.error("Sorry,you can not transact more than 500 USD on this KYC LEVEL.");
    //     return false;
    //    }
    let charge = dataAddr == "BlockChain Transfer" ? chargeBlockChain : chargeInternal;
       let x = parseFloat(btcamount) + parseFloat(networkFee) + parseFloat(charge)
        
        
       if(x > Balance){
        toast.error("Insufficent Wallet Balance","ERROR")
        return false;
        }
        else{
            
            if(createPin){
                setsuccess(false)
                setInputwalletPIn(true);
            }
            else{
                setsuccess(false)
                setopenModal(true);
                
            }
                
        
        }

        
    }
    const check = (value)=>{
        let valuex;
        if (value.toString().indexOf(',') > -1) { 
            valuex = value.replace(/\D/g, '');
          }
          else{
              valuex=value
          }
          return valuex;
    }

    const getrate = ()=>{
        const Base_url = process.env.REACT_APP_BACKEND_URL;
        axios({
            method: "GET",
            url: `${Base_url}/threshold/rate`,
            headers:{
                'Content-Type':'application/json',
                
                'Authorization':reactLocalStorage.get('token')
            }
            
        })
        .then((res)=>{
            setRate(res.data) 
        })
        .catch((err)=>{
            
            // console.log('error',err.response)
            
        })
    }
    
    useEffect(()=>{
        if(success){
            let charge = dataAddr == "BlockChain Transfer" ? chargeBlockChain : chargeInternal;
            let valuebtc = check(btcamount);
            let valueusd = check(usdamount);
            const items={
                ReceipentAddress:ReceipentAddress,
                networkFee:networkFee,
                userid:reactLocalStorage.getObject('user')._id,
                amount:valuebtc,
                block_average:blockaverage,
                wallet_type:"USDT",
                charge:charge,
                transferType:dataAddr,
                senderAddress:reactLocalStorage.getObject('user').usdt_wallet[0].address,
                usdvalue:valueusd,
                nairavalue:parseFloat(valueusd) * parseFloat(Rate),
                rate:Rate,
                email:reactLocalStorage.getObject('user').email
    
            }
            // console.log(success);
    
            ProcessCoin(items)(sendcoinDispatch);
            setsuccess(false);
            getbalance(); 
        }

    },[success])

    const networkFeeFlow = ()=>{
        if(dataAddr === "BlockChain Transfer"){
            let totalSumFee = parseFloat(chargeBlockChain) + parseFloat(networkFee); 
            return totalSumFee;
        }
        else if(dataAddr === "Internal Transfer"){
            let totalSumFee = parseFloat(chargeInternal) + parseFloat(networkFee); 
            return totalSumFee;
        }
    }


    return (
        <div className="sendBTC">
            { SEND_COIN_loading && <LoaderOverlay/>}
            {openModal && <CreatePinModal closeModal={setopenModal} callback={setsuccess}/>}
            { InputwalletPIn && <EnterPinModal closeModal={setInputwalletPIn} mywalletpin={mywallet} callback={setsuccess} /> }
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
            <div className='back' onClick={()=>handleSend()}><BsArrowLeftCircle size={25} color='#3498db' /><span>Return to USDT Wallet</span></div>
            <div className='SendBody'>
                <div className='SendBodyI'>
                    <div className='currentRate'>&#36;{currentRate.toLocaleString('en-US')}</div>
                    <div className='sendBTCFrom'>Send USDT From</div>
                    <div className='fromBTC'>
                        <div>
                            <img src={Tether} width="30"/> <span>USDT Wallet (TRC-20)</span>
                        </div>
                        <div>
                            {/* Balance:{USER_loading && reactLocalStorage.getObject('user').btc_wallet[0].balance.$numberDecimal} */}
                            Balance: {Balance && parseFloat(Balance).toFixed(6).toLocaleString('en-US',{maximumFractionDigits:2 })} USDT
                        </div>
                    </div>
                    <div className='toBTC'>
                        <div className='sendBTCFrom'>To</div>
                        <div>
                            <input type="text"  onChange={_handleReceipent} placeholder='Paste Recipient USDT Address' value={ReceipentAddress} />
                            <small>{ReceipentAddress && loading && <img src={Loader} style={{width:30,paddingLeft:10}}/>}</small>
                            {ReceipentAddress && error && <small className='errorBTCAddr'>{error}</small>}
                            {ReceipentAddress  && dataAddr && <small className='dataBTCAddr'>{dataAddr == "BlockChain Transfer" ? 'Onchain Transfer': dataAddr}</small>}
                            
                        </div>
                    </div>
                    <div>
                        <div className='sendBTCFrom'>Amount</div>
                        <div className='amount'>
                           
                            <NumberFormat 
                                thousandSeparator={','} 
                                decimalSeparator={'.'} 
                                placeholder="USD"
                                value={usdamount || ''} 
                                renderText={(value, props) => <div {...props}>{value}</div>} 
                                onChange={USDAmount}
                            />
                            <img src={Equivalent}/>
                            <NumberFormat 
                                thousandSeparator={','} 
                                decimalSeparator={'.'} 
                                placeholder="USDT"
                                value={btcamount || ''} 
                                renderText={(value, props) => <div {...props}>{value}</div>} 
                                onChange={BTCAmount}
                            />
                            
                        </div>
                        {/* <NumberFormat
                            value={usdamount && usdamount}
                            className="foo"
                            displayType={'number'}send
                            thousandSeparator={true}
                            prefix={'$'}
                            onChange={USDAmount}
                            renderText={(value, props) => <div {...props}>{value}</div>}
                            /> */}
                        
                    </div>
                    <div>
                        {/* {ReceipentAddress && dataAddr && dataAddr === "BlockChain Transfer" && _selectFee()} */}
                        {/* <small>{loadingAutofee && <img src={Loader} style={{width:30,paddingLeft:10}}/>}</small> */}
                        {/* {errorAutofee && <span className='errorBTCAddr'>{errorAutofee}</span>} */}
                       
                    </div>
                    {/* {btcamount && btcamount > Balance && <div className='errorBTCAddr pt-4'>Amount Inputted is Greater than Available Balance</div> } */}
                    <div className={dataAddr && dataAddr === "Internal Transfer" && btcamount && btcamount < Balance  ? 'sendFund': dataAddr && dataAddr === "BlockChain Transfer" && btcamount && networkFee ? 'sendFund': 'sendFund disabled'  }  onClick={sendCoin}>
                            Continue
                    </div>
                   
                </div>
                <div className='SendBodyII'>
                    <div className='TextInformation'>
                            <div className='sendBTCFrom'>Recipient</div>
                            <div className='receipentAddr-TextInfor'>
                                {ReceipentAddress}
                            </div>
                    </div>
                    <div className='TextInformation'>
                            <div className='sendBTCFrom'>Amount(In USDT)</div>
                            <div className='receipentAddr-TextInfor'>
                                {btcamount}
                            </div>
                    </div>
                    <div className='TextInformation'>
                            <div className='sendBTCFrom'>Network Fee ( In USDT)</div>
                            <div className='receipentAddr-TextInfor'>
                                {ReceipentAddress  && dataAddr && btcamount && networkFeeFlow()}
                                {/* {ReceipentAddress  && dataAddr && btcamount && charge } */}
                            </div>
                    </div>
                    <div className='TextInformation'>
                            <div className='sendBTCFrom'>Total Amount (In USDT)</div>
                            <div className='receipentAddr-TextInfor'>
                                
                                {dataAddr && dataAddr === "Internal Transfer" ? btcamount && parseFloat(parseFloat(networkFeeFlow()) + parseFloat(btcamount)).toFixed(6) : dataAddr === "BlockChain Transfer" && btcamount && parseFloat(parseFloat(networkFeeFlow()) +parseFloat(btcamount)).toFixed(6)  }
                          
                            </div>
                    </div>
                </div>
                    
                </div>
        </div>
    )
}

export default Index;