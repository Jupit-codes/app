import React,{useEffect, useState} from "react";
import TitleBar from '../../component/titleBar'
import Sidebar from '../../component/sidebar'
import Start from '../../container/Body'
import KYC from  '../../container/Kyc'
import Transactions from  '../../container/Transactions'
import Notification from  '../../container/Notification'
import Settings from  '../../container/Settings'
import Wallets from  '../../container/Wallets'
import Send from '../../container/Send'
import '../../assets/css/Dashboard/dashboard.css'
import { useLocation } from "react-router";
import { reactLocalStorage } from "reactjs-localstorage";
import axios from "axios";

const Index=()=>{
    const location = useLocation();
    const path = location.pathname;
    const [open, setOpen] = useState(true);
    const [navigation, setNavigation] = useState('');
    const handleCallback =(value)=>{
        setOpen(value)
    }
   
    const x =1
    const _renderBodyComponent=()=>{
        let component;
        switch(path){
            case '/client':
                return <Start openClose={open}/>
                break;
            case '/client/kyc':
                return <KYC openClose={open}/>
                break;
            case '/client/transactions-history':
                return <Transactions openClose={open}/>
                break;
            case '/client/settings':
                return <Settings openClose={open}/>
                break;
            case '/client/notification':
                return <Notification openClose={open}/>
                break;
            case '/client/wallet':
                return <Wallets openClose={open}/>
                break;
            case '/client/sendbtc':
                return <Send openClose={open}/>
                break;

            default:
              
        }
        return component
    }

    return (
        <div className="dashboard">
                <TitleBar  handle={handleCallback}/>
                <Sidebar openClose={open} notify={x}/>
                {_renderBodyComponent()}
        </div>
    )
}


export default Index;