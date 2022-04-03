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
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { reactLocalStorage } from 'reactjs-localstorage'
const Index = ()=>{
   const location =  useLocation()
   
    const [component,setComponent] = useState('Naira');
    const[showButton,setshowButton]=useState(false)
    console.log(reactLocalStorage.getObject('kyc'))
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
    const kycProgressBar = ()=>{
        let kycprogress = 0
        if(reactLocalStorage.getObject('kyc').level1[0].status === "Verified"){
            
            kycprogress += 25
        }

        if(reactLocalStorage.getObject('kyc').level2[0].event_status === "customeridentification.success"){
            kycprogress += 30
        }

        return kycprogress
    }
    const kycProgressBarVariant = ()=>{
        let kycprogress = 0
        if(reactLocalStorage.getObject('kyc').level1[0].status === "Verified"){
            
            kycprogress += 25
        }

        if(reactLocalStorage.getObject('kyc').level2[0].event_status === "customeridentification.success"){
            kycprogress += 30
        }

        switch(kycprogress){
            case 25:
                return 'info'
            case 55:
                return 'warning'
            case 100:
                return 'success'
        }
    }

    const kycTransaction = ()=>{
        let kycprogress = 0
        if(reactLocalStorage.getObject('kyc').level1[0].status === "Verified"){
            
            kycprogress += 25
        }

        if(reactLocalStorage.getObject('kyc').level2[0].event_status === "customeridentification.success"){
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

    useEffect(()=>{
        if(location.state){
            if(location.state.wallettype != "undefined"){
                setComponent(location.state.wallettype)
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

    return(
        <div className="newWalletDiv">
           <div>
                <div className='cardClassTab'>
                    <div className='cardClassTab-flex1'>
                        Wallet Assets
                    </div>
                    <div className='cardClassTab-flex2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#1c1c93" class="bi bi-three-dots-vertical" viewBox="0 0 16 16" onClick={()=>{setshowButton(!showButton)}} >
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                        </svg>
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
                    <div className='TopUp'>
                        <div>
                            TopUp<br/>
                            <span>Click To Top up your account.</span>
                        </div>
                        <div className='TopupIcon'>
                            <BsArrowUpSquare color='#fff' size={20}/>
                        </div>
                    </div>
                    <div className='Withdrawal'>
                        <div>
                            Withdrawal<br/>
                            <span>Click to withdraw fund to your registered account.</span>
                        </div>

                        <div className='TopupIcon'>
                            <BsArrowDownSquare color='#fff' size={20}/>
                        </div>

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