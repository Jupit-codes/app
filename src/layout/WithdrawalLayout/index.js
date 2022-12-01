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
// import GetAutoFee from '../../context/actions/getAutofee.js'
import { ToastContainer, toast } from 'react-toastify';
import ProcessCoin from '../../context/actions/sendcoin'
import 'react-toastify/dist/ReactToastify.css';
import LoaderOverlay from '../../utils/loader/mainLoader'
import UserDetailsRefresh from '../../context/actions/userdetails.js'
import { USER_DETAILS_LOADING } from '../../constants/actionTypes';
import { useRef } from 'react';
import axios from 'axios';
import getNotification from '../../context/actions/getNotification';
import { fabClasses } from '@mui/material';
import CreatePinModal from '../../utils/modal/CREATE_PIN'
import EnterPinModal from '../../utils/modal/INPUT_PIN/'
import { getAllByPlaceholderText } from '@testing-library/react';
import {AiOutlineReload} from 'react-icons/ai'

const Index =()=>{
    const [lowFee, setlowFee]= useState();
    const [mediumFee, setmediumFee]= useState();
    const [highFee, sethighFee]= useState();
    const [blockaverage, setblockaverage]= useState(0);

    const [lowFeeRate, setlowFeeRate]= useState('');
    const [mediumFeeRate, setmediumFeeRate]= useState('');
    const [highFeeRate, sethighFeeRate]= useState('');
    const [mount,setMount] = useState(false)

    const [networkFee,setNetworkFee] = useState(100);
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
    const [btcamount,setbtcamount] = useState(0);
    const [usdamount,setusdamount] = useState(0);
    const [ngnamount,setngnamount] = useState(0);
    const [Balance,setBalance] = useState(0);
    const [mountBalance,setMountBalance] = useState(false)
    const isMounted = useRef(false);
    const history = useHistory();
    const [kycLevel1,setkycLevel1] = useState('')
    const [kycLevel2,setkycLevel2] = useState('')
    const [kycLevel3,setkycLevel3] = useState('')
    const[createPin,setcreatePin] =  useState()
    const [openModal,setopenModal] = useState(false);
    const [success,setsuccess] = useState(false)
    const [InputwalletPIn,setInputwalletPIn] = useState(false)
    const [mywallet,setmywallet] = useState('')
    const [dataAutofee,setdataAutofee] = useState();
    const [addamount,setaddamount] = useState();
    const [buyrate,setbuyrate] = useState();
    const [reloadRate,setReloadRate] = useState(false)
    const [disableBTN,setDisableBTN] = useState(true)
    const [loader,setLoader] = useState(false);
    const [failedRequest,setFailedRequest] = useState(false)
    const [dailytransactioncount,setdailytransactioncount] = useState()
    const [withdrawalcheck,setwithdrawalcheck] = useState()
    const [withdrawalCounter,setwithdrawalCounter] = useState();
    const [charge,setcharge] = useState(100)

//    useEffect(()=>{
//        let _id = reactLocalStorage.getObject('user')._id;
       
//         UserDetailsRefresh(_id)(userdetailsDispatch)
    
//             if(USER_data ){
//                 if(Balance != USER_data.naira_wallet[0].balance.$numberDecimal){
//                     setBalance(parseFloat(USER_data.naira_wallet[0].balance.$numberDecimal));
                    
                    
//                 }
//                 setcreatePin(USER_data.Pin_Created);
//                 setmywallet(USER_data.wallet_pin);
                    
                
                
//             }
//             // console.log('TestServer',USER_data)

//    },[])


   const retrieveAutoFee = ()=>{
    const Base_url = process.env.REACT_APP_BACKEND_URL;
        axios({
            method: "POST",
            url: `${Base_url}/threshold/getautofee`,
            headers: {
            "Content-Type": "application/json",
            "Authorization":`Bearer ${reactLocalStorage.get('token')}`

            },
            data:JSON.stringify({walletType:'BTC',email:reactLocalStorage.getObject('user').email})
        })
        .then(res=>{
        console.log(res.data);
       
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
        console.log(err.response)
        {err.response ? toast.error('Network Fee :'+ err.response.data.message,'Network Fee Error'): toast.error('Network Fee:NO Connection To Server','Network Fee Error') }
        
        // toast.error(err.response,'Error')
        // dispatch({
        //     type:AUTO_FEE_ERROR,
        //     payload:err.response ? err.response.data : 'NO NETWORK CONNECTIONs'
        // })
        // console.log(err.response)

        
    })

   }

   const withdrawalcheckNo  = (_id)=>{
    const Base_url = process.env.REACT_APP_BACKEND_URL;
    axios({
        method: "POST",
        url: `${Base_url}/verify/getwithrawal/count`,
        headers:{
            'Content-Type':'application/json',
            
            'Authorization':reactLocalStorage.get('token')
        },
        data:JSON.stringify({_id:_id})
    })
    .then((res)=>{
       console.log(res.data.length)
     setwithdrawalCounter(res.data.length)
    })
    .catch((err)=>{
        
        console.log('error',err.response)
        setwithdrawalCounter('error')
        
    })
   }

   const getTransactionCount = (_id)=>{
    const Base_url = process.env.REACT_APP_BACKEND_URL;
    axios({
        method: "POST",
        url: `${Base_url}/verify/getwithrawal/count`,
        headers:{
            'Content-Type':'application/json',
            
            'Authorization':reactLocalStorage.get('token')
        },
        data:JSON.stringify({_id:_id})
    })
    .then((res)=>{
    //    console.log(res.data)
        setdailytransactioncount(res.data.length)
    })
    .catch((err)=>{
        
        console.log('error',err.response)
        
    })
   }

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
            console.log(res.data)
            setwithdrawalcheck(res.data.bankCheck);
            if(Balance !== res.data.user.naira_wallet[0].balance.$numberDecimal ){
                setBalance(parseFloat(res.data.user.naira_wallet[0].balance.$numberDecimal));
                setcreatePin(res.data.user.Pin_Created);
                setmywallet(res.data.user.wallet_pin);
            }
            
        })
        .catch((err)=>{
            
            console.log('error',err.response)
            
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
            
            console.log('error',err.response)
            
        })
    }
    const getRate = async()=>{
        setReloadRate(false);
        const Base_url = process.env.REACT_APP_BACKEND_URL;
        axios({
            method: "GET",
            url: `${Base_url}/verify/get/current/rate`,
            headers:{
                'Content-Type':'application/json',
                'Authorization':reactLocalStorage.get('token')
            }
            
        })
        .then((res)=>{
            setReloadRate(false)
            setbuyrate(res.data.message[0].btc[0].buy);

        })
        .catch((err)=>{
            
            setReloadRate(true);

            if(err.response){
                setReloadRate(true);
               
            }
            // console.log('error',err.response)
            
        })
    }

    

    useEffect(()=>{
        const _id = reactLocalStorage.getObject('user')._id;
        getbalance(_id);
        _getKyc(_id);
        getRate();
        getTransactionCount(_id);
        withdrawalcheckNo(_id);

    },[])
   

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
            console.log(SEND_COIN_error.Message);
            // toast.error(SEND_COIN_error.Message,"ERROR")
        }

    },[SEND_COIN_data,SEND_COIN_error])

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

    // useEffect(()=>{
        
    //    retrieveAutoFee();
        
    // },[])

    useEffect(()=>{
        
        if(ReceipentAddress){
            const items = {
                receipent_address:ReceipentAddress,
                wallet_type:'BTC'
            }
            CheckAddress(items)(checkaddressDispatch)
        }
        
        
        
    },[ReceipentAddress])

    const handleSend = ()=>{
        history.push({
            pathname:'/client/wallet',
            state:{wallettype:'Naira'}
        })
    }
    const handleChangeFee = (e)=>{
        if(e.target.classList.contains('low')){
            sethighFee(false);
            setmediumFee(false);
            setlowFee(true);
            let x =parseFloat(lowFeeRate * 226 * 0.00000001 ).toFixed(8);
            setNetworkFee(x)
            setblockaverage(100);
            
              
            
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
        CheckAddress(items)(checkaddressDispatch)
        // setcustomdiasble(!customdisable)
        
    }
   
    // const BTCAmount = (e)=>{
    //     setbtcamount(e.target.value);
        
    //     let pat = currentRate * e.target.value
    //     setusdamount(pat)
        
    //     if(dataAddr === "Internal Transfer"){
    //         setNetworkFee(0)
            
    //     }
        
    // }
    // const USDAmount=(e)=>{
    //     console.log('Test',kycLevel1)
    //     setusdamount(e.target.value);
    //     let pat = e.target.value / currentRate 
    //     setbtcamount(pat)
    //     if(dataAddr === "Internal Transfer"){
    //         setNetworkFee(0)
            
    //     }
    // }
    const BTCAmount = (e)=>{
        setbtcamount(e.target.value)
        setusdamount(parseFloat(e.target.value) * currentRate);
        setngnamount(parseFloat(buyrate) * parseFloat(e.target.value) * currentRate )
    }

    const USDAmount = (e)=>{
        setusdamount(e.target.value);
        setngnamount(parseFloat(e.target.value) * parseFloat(buyrate))
        setbtcamount(parseFloat(e.target.value)/parseFloat(currentRate))
    }
    const NGNAmount=(e)=>{
        
        const {value} = e.target;
        if(value){
            const formattedValue = (Number(value.replace(/\D/g, '')) || '').toLocaleString();
            setngnamount(formattedValue);
            console.log(formattedValue)
            setusdamount((parseFloat(value.replace(/,/g, ''))/parseFloat(buyrate)).toFixed(3))
            setbtcamount((parseFloat(usdamount)/currentRate).toFixed(8))
            if(Balance >= value.replace(/,/g, '')){
                setDisableBTN(false)
            }
            else if(value.replace(/,/g, '') > Balance){
                setDisableBTN(true)
            }
        }
        else{
            setngnamount('')
        }
        

       
    }

  
   
    const buycoin = ()=>{
        
        
        if(!withdrawalcheck){
            toast.error('Sorry, your account details has not been linked. Kindly conclude your KYC Level 2.');
            return false;
        }

        if(withdrawalCounter && withdrawalCounter !="error" && withdrawalCounter > 5){
            toast.error('Sorry, you have exceeded your 5 times withdrawal limit for the day.');
            return false;
        }
        


        let kycprogress = 0
        if(kycLevel1 === "Verified"){
            
            kycprogress += 25
        }

        if(kycLevel2 === "customeridentification.success"){
            kycprogress += 30
        }
        if(kycLevel3 === "Verified"){
            kycprogress += 45
        }

       if(kycprogress === 25 && ngnamount > 10000){
        toast.error("You can not transact more than N10,000 per transaction on this KYC LEVEL.","KYC Restriction");
        return false;
       }
       if(kycprogress === 55 && ngnamount > 200000){
        toast.error("Sorry,you can not transact more than N200,000 per transaction on this KYC LEVEL.");
        return false;
       }

       if(kycprogress === 100 && ngnamount > 1000000){
        toast.error("Sorry,you can not transact more than N1,000,000 per transaction on this KYC LEVEL.");
        return false;
       }

        
       if(dailytransactioncount >5){
        toast.error("Sorry, you have exceeded your five withdrawal limit for the day...");
        return false;
       }
       
       if(ngnamount == "" || ngnamount === 0 ){
        toast.error("Input Amount","ERROR")
        return false;
        }
        if( parseFloat(parseFloat(check(ngnamount)) + parseFloat(charge)) > parseFloat(Balance)){
            toast.error("Insufficent Wallet Balance","ERROR")
            return false;
        }
        else{
             
            if(createPin){
                    setInputwalletPIn(true)
            }
            else{
                setopenModal(true);
                
            }
                
           
        }

    
        // toast('Coin Successfully Sent');
        
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

    const Withdrawal = async ()=>{

        const BaseUrl = process.env.REACT_APP_BACKEND_URL  
        let value = check(ngnamount);
        setLoader(true)
        console.log('value',value)
        await axios({
        
            url:`${BaseUrl}/verify/client/withdrawal`,
            method:'POST',
            headers:{
              'Content-Type':'application/json',  
              'Authorization': reactLocalStorage.get('token')
            },
            data:JSON.stringify({
                userid:reactLocalStorage.getObject('user')._id,
                amount:value,
                charge:charge,
                firstname: reactLocalStorage.getObject('user').firstname,
                lastname: reactLocalStorage.getObject('user').lastname,
                email:reactLocalStorage.getObject('user').email,
                phonenumber:reactLocalStorage.getObject('user').phonenumber
            })
            
          })
          .then((res)=>{
            console.log(res.data)
            setngnamount('')
            setLoader(false)
            toast.success(res.data,'Success');
            getbalance(reactLocalStorage.getObject('user')._id)
      
          })
          .catch((err)=>{
            setLoader(false);
            console.log(err)
            console.log(err.response.data);

            toast.error(err.response ? err.response.data : 'Failed Request','Error')
                
               
                
          })
    }

        useEffect(()=>{
            if(success){
              
                Withdrawal();
                   
            }

        },[success])
    
    return (
        <div className="sendBTC">
            { loader && <LoaderOverlay/>}
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
            <div className='back' onClick={()=>handleSend()}><BsArrowLeftCircle size={25} color='#3498db' /><span>Return to Naira Wallet</span></div>
            <div className='SendBody'>
                <div className='SendBodyI'>
                    <div className='currentRate'></div>
                    <div className='sendBTCFrom'>Withdrawal</div>
                    <div className='fromBTC'>
                        <div>
                        &#x20A6;<span>aira Wallet</span>
                        </div>
                        <div>
                            {/* Balance:{USER_loading && reactLocalStorage.getObject('user').btc_wallet[0].balance.$numberDecimal} */}
                            Balance:&#x20A6;{Balance && Balance > 1 ? Balance.toLocaleString('en-US'): Balance}
                        </div>
                    </div>
                    {/* <div className='toBTC'>
                        <div className='sendBTCFrom'>To</div>
                        <div>
                            <input type="text"  onChange={_handleReceipent} placeholder='Paste Receipent BTC Address' value={ReceipentAddress} />
                            <small>{ReceipentAddress && loading && <img src={Loader} style={{width:30,paddingLeft:10}}/>}</small>
                            {ReceipentAddress && error && <small className='errorBTCAddr'>{error}</small>}
                            {ReceipentAddress  && dataAddr && <small className='dataBTCAddr'>{dataAddr}</small>}
                            
                        </div>
                    </div> */}
                    <div>
                        <div className='sendBTCFrom'>Amount</div>
                        <div className='amount'>
                            {reloadRate && <div onClick={()=>{getRate()}}>Click here to Reload <AiOutlineReload/> </div>}
                            {buyrate && 
                                <>

                                   
                                    <input type="text"  placeholder='NGN'  pattern="[+-]?\d+(?:[.,]\d+)?" value={ngnamount || ''} onChange={NGNAmount}/>
                                </>
                            

                            }
                            
                        </div>
                    </div>
                    <div>
                        
                      
                       
                    </div>
                    {/* {ngnamount && ngnamount > Balance && <div className='errorBTCAddr pt-4'>Amount Inputted is Greater than Available Balance({Balance})</div> } */}
                    <div className='sendFund'  onClick={buycoin}>
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
                            <div className='sendBTCFrom'>Amount(In Naira)</div>
                            <div className='receipentAddr-TextInfor'>
                                {ngnamount}
                            </div>
                    </div>
                    <div className='TextInformation'>
                            <div className='sendBTCFrom'>Withdrawal Fee ( In Naira)</div>
                            <div className='receipentAddr-TextInfor'>
                                {ngnamount && charge}
                            </div>
                    </div>
                    <div className='TextInformation'>
                            <div className='sendBTCFrom'>Total  (In Naira)</div>
                            <div className='receipentAddr-TextInfor'>
                                
                                {ngnamount && parseFloat(parseFloat(check(ngnamount)) + parseFloat(charge)).toLocaleString('en-US')}
                            </div>
                    </div>
                </div>
                    
                </div>
        </div>
    )
}

export default Index;