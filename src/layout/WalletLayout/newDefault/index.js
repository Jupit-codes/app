import { useEffect, useState } from 'react'
import '../../../assets/css/newWallet/newWallet.css'
import '../../../assets/css/Body/section2.css'
import Naira from '../../BodyLayout/Section2/NAIRA.js'
import Btc from '../../BodyLayout/Section2/BTC'
import Usdt from '../../BodyLayout/Section2/USDT'
import jupit from '../../../assets/images/utility/jupit.png'
import cardType from '../../../assets/images/utility/mastercard.png'
import { ProgressBar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import NairaWalletChart from '../../../utils/Charts/nairawalletChart'
import BtcWalletChart from '../../../utils/Charts/btcwalletchart'
import UsdtWalletChart from '../../../utils/Charts/usdtwalletchart'
import {BsArrowUpSquare,BsArrowDownSquare} from 'react-icons/bs'
import NairaWallet from './defaultNairaWallet.js'
import UsdtWallet from './defaultUsdtWallet.js'
import BtcWallet from './defaultBtcWallet.js'
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { reactLocalStorage } from 'reactjs-localstorage'
import ReceiveModal from '../../../utils/modal/customModal.js'
import ReceiveModalUsdt from '../../../utils/modal/usdtreceivemodal.js'
import axios from 'axios'
const Index = ()=>{
   const location =  useLocation()
   const history = useHistory();
    const [component,setComponent] = useState('Naira');
    const[showButton,setshowButton]=useState(false)
    const [openModal,setopenModal] = useState(false);
    const [openModalUsdt,setopenModalUsdt] = useState(false);
    const [activeButton,setActivebutton] = useState('Naira')
    
    // console.log(reactLocalStorage.getObject('kyc'))
    const [kycLevel1,setkycLevel1] = useState('');
    const [kycLevel2,setkycLevel2] = useState('');
    const [kycLevel3,setkycLevel3] = useState('');
    const [progressbar,setprogressbar] = useState('')
    const now = 80;

    
    // useEffect(()=>{
       
    //     if(reactLocalStorage.getObject('kyc').level1[0].status === "Verified"){
            
    //         kycprogress += 25
    //     }

    //     if(reactLocalStorage.getObject('kyc').level2[0].event_status === "customeridentification.success"){
    //         kycprogress += 30
    //     }

    //     setprogressbar(kycprogress);
    //     console.log(kycprogress)
        
    // },[kycprogress])

    useEffect(()=>{
        setkycLevel1(reactLocalStorage.getObject('kyc').level1[0].status);
        setkycLevel2(reactLocalStorage.getObject('kyc').level2[0].event_status)
       
    },[])



    const kycProgressBar = ()=>{
        let kycprogress = 0
        
        if(kycLevel1 === "Verified"){
            
            kycprogress += 25
        }

        if(kycLevel2 === "customeridentification.success"){
            kycprogress += 30
        }

        return kycprogress
    }
    const kycProgressBarVariant = ()=>{
        let kycprogress = 0
        if(kycLevel1 === "Verified"){
            
            kycprogress += 25
        }

        if(kycLevel2 === "customeridentification.success"){
            kycprogress += 30
        }

        switch(kycprogress){
            case 25:
                return 'info'
            case 55:
                return 'secondary'
            case 100:
                return 'success'
        }
    }

    const kycTransaction = ()=>{
        let kycprogress = 0
        if(kycLevel1 === "Verified"){
            
            kycprogress += 25
        }

        if(kycLevel2 === "customeridentification.success"){
            kycprogress += 30
        }

        switch(kycprogress){
            case 25:
                return '100 USD'
            case 55:
                return '500 USD'
            case 100:
                return 'Limitless'
        }
    }

    const loadKYC = async ()=>{
        let _id = reactLocalStorage.getObject('user')._id;
        await axios({
            method: "POST",
            url: `https://myjupit.herokuapp.com/users/kyc`,
            headers:{
                'Content-Type':'application/json',
                
                'Authorization':reactLocalStorage.get('token')
            },
            data:JSON.stringify({userid:_id})
        })
        .then((res)=>{
           
            setkycLevel1(res.data.level1[0].status);
            setkycLevel2(res.data.level2[0].event_status)
            

            
            
        })
        .catch((err)=>{

            console.log(err)
            
            
        })

    }

    useEffect(()=>{
        loadKYC();
    })
    

    useEffect(()=>{
        if(location.state){
           
            if(location.state.wallettype != "undefined"){
                setComponent(location.state.wallettype)
                setActivebutton(location.state.wallettype)
            }
        }
        
    },[location])
    
    const _renderComponent = ()=>{
        switch (component) {
            case 'Naira':
                return <NairaWallet comp={setComponent}/>
                break;
            case 'Btc':
                return <BtcWallet comp={setComponent}/>
                break;
            case 'Usdt':
                return <UsdtWallet comp={setComponent}/>
                break;
        
            default:
                break;
        }
    }
    const _renderChartComponent = ()=>{
        switch (component) {
            case 'Naira':
                return <NairaWalletChart comp={setComponent}/>
                break;
            case 'Btc':
                return <BtcWalletChart comp={setComponent}/>
                break;
            case 'Usdt':
                return <UsdtWalletChart comp={setComponent}/>
                break;
        
            default:
                break;
        }
    }
    const _selectClass=()=>{
        if(component === "Naira"){
            return 'TopUp NairaTopUp';
        }
        else if(component === "Btc"){
            return 'TopUp BtcTopUp';
        }
        else if(component === "Usdt"){
            return 'TopUp UsdtTopUp';
        }
    }

    const _selectClassWithdrawal=()=>{
        if(component === "Naira"){
            return 'TopUp NairaWithdrawal';
        }
        else if(component === "Btc"){
            return 'TopUp BtcWithdrawal';
        }
        else if(component === "Usdt"){
            return 'TopUp UsdtWithdrawal';
        }
    }
    const _showTopUP = ()=>{
        if(component === "Naira"){
            return  <div className='TopUpSpace'>
                         <div>
                            TopUp<br/>
                            <span>Click To Top up your account.</span>
                        </div>
                        <div className='TopupIcon'>
                            <BsArrowUpSquare color='#fff' size={20}/>
                        </div>
                    </div>
                   
        }
        else if(component === "Btc"){
            return  <div className='TopUpSpace'>
                         <div>
                            Send BTC<br/>
                            <span>Click To Send Funds.</span>
                        </div>
                        <div className='TopupIcon'>
                            <BsArrowUpSquare color='#fff' size={20} onClick={sendBtc}/>
                        </div>
                    </div>
                   
        }
        else if(component === "Usdt"){
            return  <div className='TopUpSpace'>
                         <div>
                            Send USDT<br/>
                            <span>Click To Send funds.</span>
                        </div>
                        <div className='TopupIcon'>
                            <BsArrowUpSquare color='#fff' size={20} onClick={sendUsdt}/>
                        </div>
                    </div>
                   
        }
    }

    const sendBtc = ()=>{
        history.push('/client/sendbtc')
    }
    const sendUsdt = ()=>{
        history.push('/client/sendusdt')
    }
    const _showWithdrawal = ()=>{

        if(component === "Usdt"){
            return      <div className='TopUpSpace'>
                        <div>
                            Receive USDT<br/>
                            <span>Click to Receive USDT</span>
                        </div>

                        <div className='TopupIcon'>
                            <BsArrowDownSquare color='#fff' size={20} onClick={()=>setopenModalUsdt(true)}/>
                        </div>
                    </div>
        }
        else if(component === "Btc"){
            return  <div className='TopUpSpace'>
                        <div>
                            Receive BTC<br/>
                            <span>Click to Receive BTC</span>
                        </div>

                        <div className='TopupIcon'>
                            <BsArrowDownSquare color='#fff' size={20} onClick={()=>setopenModal(true)}/>
                        </div>
                    </div>
        }
        else if(component === "Naira"){
            return  <div className='TopUpSpace'>
                        <div>
                            Withdrawal<br/>
                            <span>Withdrawal To Your Bank Acct</span>
                        </div>

                    <div className='TopupIcon'>
                        <BsArrowDownSquare color='#fff' size={20}/>
                    </div>
                     </div>
        }
        
    }
    const changeTransTo = (trans)=>{
        setActivebutton(trans);
        setComponent(trans)
    }

    return(
        <div className="newWalletDiv">
            
           <div>
           {openModal && <ReceiveModal closeModal={setopenModal}/>}
           {openModalUsdt && <ReceiveModalUsdt closeModal={setopenModalUsdt}/>}
                <div className='cardClassTab'>
                    <div className='cardClassTab-flex1'>
                        Wallet Assets
                    </div>
                    <div className='cardClassTab-flex2'>
                        <div className={activeButton === 'Naira'? 'trans transFlexNAIRA':'trans'} onClick={()=>{changeTransTo('Naira')}}>
                                    NAIRA WALLET
                        </div>
                        <div className={activeButton === 'Btc'? 'trans transFlexBTC':'trans'} onClick={()=>{changeTransTo('Btc')}}>
                                    BTC WALLET
                        </div>
                        <div className={activeButton === 'Usdt'? 'trans transFlexUSDT':'trans'} onClick={()=>{changeTransTo('Usdt')}} >
                                    USDT WALLET 
                        </div>
                        
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#1c1c93" class="bi bi-three-dots-vertical" viewBox="0 0 16 16" onClick={()=>{setshowButton(!showButton)}} >
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        </svg> */}
                    </div>
                </div>
                <div className={showButton ? 'type showtype':'type'} >
                        <div onClick={()=>{setComponent('Btc');setshowButton(!showButton)}}>BTC WALLET</div>
                        <div onClick={()=>{setComponent('Usdt');setshowButton(!showButton)}}>USDT WALLET</div>
                        <div onClick={()=>{setComponent('Naira');setshowButton(!showButton)}}>NAIRA WALLET</div>
                    </div>
                    <div className='xClass'>
                   
                       {_renderComponent()}
                        
                    </div>
                    <div className='YClass'>
                        <div className='myKyc'>
                            <div>
                                Transaction Limit <span><b>({kycTransaction()})</b></span>
                            </div>
                            <div>
                                KYC LEVEL({kycProgressBar()}%)
                            </div>
                        </div>
                        
                         <ProgressBar now={kycProgressBar()} label={`${kycProgressBar()}%`} style={{height:40,width:'100%'}} variant={kycProgressBarVariant()} />
                        {/* <div className='progressbar'>
                             
                            
                        </div> */}
                    </div>

                   
                    
                    

           </div>

           <div>
               <div className='Transaction-TopUp'>
                    <div className={_selectClass()}>
                        {_showTopUP()}
                    </div>
                    <div className={_selectClassWithdrawal()}>
                        {_showWithdrawal()}

                    </div>
                </div>
                <div className='overviewMarket'>
                    <div>
                        Overview Balance<br/>
                        <span>Wallet Transaction processed on monthly basis</span>
                    </div>
                </div>
                <div>
                    {_renderChartComponent()}
                    
                </div>
               
           </div>
        </div>
    )
}

export default Index;