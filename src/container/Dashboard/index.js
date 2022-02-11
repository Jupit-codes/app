import React,{useEffect, useState} from "react";
import TitleBar from '../../component/titleBar'
import Sidebar from '../../component/sidebar'
import Start from '../../container/Body'
import KYC from  '../../container/Kyc'
import Transactions from  '../../container/Transactions'
import Notification from  '../../container/Notification'
import Settings from  '../../container/Settings'
import Wallets from  '../../container/Wallets'
import '../../assets/css/Dashboard/dashboard.css'
import { useLocation } from "react-router";
const Index=()=>{
    const location = useLocation();
    const path = location.pathname;
    const [open, setOpen] = useState(true);
    const [navigation, setNavigation] = useState('');
    const handleCallback =(value)=>{
        setOpen(value)
    }
    
    const _renderBodyComponent=()=>{
        let component;
        switch(path){
            case '/client':
                return <Start openClose={open}/>
            case '/client/kyc':
                return <KYC openClose={open}/>
            case '/client/transactions-history':
                return <Transactions openClose={open}/>
            case '/client/settings':
                return <Settings openClose={open}/>
            case '/client/notification':
                return <Notification openClose={open}/>
            case '/client/wallet':
                return <Wallets openClose={open}/>
            

            default:
              
        }
        return component
    }

    return (
        <div className="dashboard">
                <TitleBar  handle={handleCallback}/>
                <Sidebar openClose={open}/>
                {_renderBodyComponent()}
        </div>
    )
}


export default Index;