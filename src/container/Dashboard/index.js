import React,{useEffect, useState} from "react";
import TitleBar from '../../component/xtitlebar'
import Sidebar from '../../component/xsidebar'
import Start from '../../container/Body'
import KYC from  '../../container/Kyc'
import Transactions from  '../../container/Transactions'
import Notification from  '../../container/Notification'
import Settings from  '../../container/Settings'
import Wallets from  '../../container/Wallets'
import Send from '../../container/Send'
import BuyBTC from '../../container/Buybtc'
import BuyUSDT from '../../container/Buyusdt'
import SendUSDT from '../../container/SendUsdt'
import GiftCard from '../../container/Giftcard'
import '../../assets/css/Dashboard/dashboard.css'
import SellUSDT from '../../container/SellUsdt'
import SellBTC from '../../container/SellBtc'
import Withdrawal from '../../container/Withdrawal'
import { useLocation } from "react-router";
import { reactLocalStorage } from "reactjs-localstorage";

import Dashboard from '../../assets/images/utility/dashboard.png'
import Exchange from '../../assets/images/utility/exchange.png'
import Settingx from '../../assets/images/utility/settings.png'
import Library from '../../assets/images/utility/kyc.png'
import Schedule from '../../assets/images/utility/transaction.png'

import DashboardActive from '../../assets/images/utility/active/dashboard-active.png'
import ExchangeActive from '../../assets/images/utility/active/exchange-active.png'
import SettingsActive from '../../assets/images/utility/active/settings-active.png'
import LibraryActive from '../../assets/images/utility/active/kyc-active.png'
import ScheduleActive from '../../assets/images/utility/active/transaction-active.png'
import axios from "axios";

const Index=()=>{
    const location = useLocation();
    const path = location.pathname;
    const [open, setOpen] = useState(true);
    const [trigger, settrigger] = useState(false);
    const [navigation, setNavigation] = useState('');
    const handleCallback =(value)=>{
        setOpen(value)
    }
   console.log("okay",path);
    const x =1
    const _renderBodyComponent=()=>{
        let component;
        switch(path){
            case '/client':
                return <Start openClose={open} settrigger={settrigger} trigger={trigger}/>
                break;
            case '/client/kyc':
                return <KYC openClose={open} settrigger={settrigger} trigger={trigger}/>
                break;
            case '/client/transactions-history':
                return <Transactions openClose={open} trigger={settrigger}settrigger={settrigger}/>
                break;
            case '/client/settings':
                return <Settings openClose={open} settrigger={settrigger} trigger={trigger}/>
                break;
            case '/client/notification':
                return <Notification openClose={open} settrigger={settrigger} trigger={trigger}/>
                break;
            case '/client/wallet':
                return <Wallets openClose={open} settrigger={settrigger} trigger={trigger}/>
                break;
            case '/client/sendbtc':
                return <Send openClose={open} settrigger={settrigger} trigger={trigger}/>
                break;
            case '/client/sendusdt':
                return <SendUSDT openClose={open} settrigger={settrigger} trigger={trigger}/>
                break;
            case '/client/tradegiftcard':
                return <GiftCard openClose={open} settrigger={settrigger} trigger={trigger}/>
            break;
            case '/client/buybtc':
                return <BuyBTC openClose={open} settrigger={settrigger} trigger={trigger}/>
                break;
            case '/client/buyusdt':
                return <BuyUSDT openClose={open} settrigger={settrigger} trigger={trigger}/>
                break;
            case '/client/sellusdt':
                return <SellUSDT openClose={open} settrigger={settrigger} trigger={trigger}/>
                break;
            case '/client/sellbtc':
                return <SellBTC openClose={open} settrigger={settrigger} trigger={trigger}/>
                break;
            case '/client/withdrawal':
                return <Withdrawal openClose={open} settrigger={settrigger} trigger={trigger}/>
                break;
            
            
            

            default:
              
        }
        return component
    }

    const _rendermobileTab =()=>{
        return <div className="tabCustom">
                    <div>
                        <img src={DashboardActive}/>
                    </div>
                    <div>
                        <img src={Library}/>
                    </div>
                    <div>
                        <img src={Exchange}/>
                    </div>
                    <div>
                        <img src={Settingx}/>
                    </div>

               </div>
    }
    return (
        <div className="dashboard">
               
                <Sidebar openClose={open} notify={x}/>
                <TitleBar  handle={setOpen} currentHandle={open} handletrigger={trigger}/>

                {
                    _rendermobileTab()
                }
                
                {_renderBodyComponent()}
                
                
        </div>
    )
}


export default Index;