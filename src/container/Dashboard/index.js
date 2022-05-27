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
import SendUSDT from '../../container/SendUsdt'
import GiftCard from '../../container/Giftcard'
import '../../assets/css/Dashboard/dashboard.css'
import { useLocation } from "react-router";
import { reactLocalStorage } from "reactjs-localstorage";
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
                return <Send openClose={open} settrigger={settrigger} trigger={trigger}/>
                break;
            case '/client/sellusdt':
                return <Send openClose={open} settrigger={settrigger} trigger={trigger}/>
                break;
            case '/client/sellbuy':
                return <Send openClose={open} settrigger={settrigger} trigger={trigger}/>
                break;
            
            
            

            default:
              
        }
        return component
    }

    return (
        <div className="dashboard">
                <Sidebar openClose={open} notify={x}/>
                <TitleBar  handle={setOpen} currentHandle={open} handletrigger={trigger}/>
              
                {/* <Sidebar openClose={open} notify={x}/> */}
                
                {_renderBodyComponent()}
        </div>
    )
}


export default Index;