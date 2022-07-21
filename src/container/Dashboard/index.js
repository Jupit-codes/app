import React,{useEffect, useState} from "react";
import TitleBar from '../../component/xtitlebar'
import Sidebar from '../../component/xsidebar'
import Start from '../../container/Body'
import KYC from  '../../container/Kyc'
import Transactions from  '../../container/Transactions'
import Notification from  '../../container/Notification'
import Settings from  '../../container/Settings'
import Wallets from  '../../container/Wallets'
// import Send from '../../container/Send'
// import BuyBTC from '../../container/Buybtc'
// import BuyUSDT from '../../container/Buyusdt'
// import SendUSDT from '../../container/SendUsdt'
import GiftCard from '../../container/Giftcard'
import '../../assets/css/Dashboard/dashboard.css'
// import SellUSDT from '../../container/SellUsdt'
// import SellBTC from '../../container/SellBtc'
// import Withdrawal from '../../container/Withdrawal'
// import Exchange from '../../container/Exchange'
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import { Offcanvas } from "react-bootstrap"; 
import axios from "axios";
import {RiDashboardFill,RiWalletFill,RiExchangeBoxFill,RiSettings2Fill, RiMoreLine} from 'react-icons/ri'
import {MdOutlineHistory} from 'react-icons/md'
import {BsWallet2} from 'react-icons/bs'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {BiLogOut} from 'react-icons/bi'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Index=()=>{
    const location = useLocation();
    const history = useHistory()
    const path = location.pathname;
    const [open, setOpen] = useState(true);
    const [trigger, settrigger] = useState(false);
    const [navigation, setNavigation] = useState('');
    const pathname = location.pathname.split('/');
    const [close,setClose] = useState(false)
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
            case '/client/exchange':
                return <Exchange openClose={open} settrigger={settrigger} trigger={trigger}/>
                break;
            
            
            

            default:
              
        }
        return component
    }

    const handleClose = ()=>{
        setClose(!close)
    }

    const logout =()=>{
        reactLocalStorage.remove('user');
        reactLocalStorage.remove('token');
        reactLocalStorage.remove('kyc');
        reactLocalStorage.remove('2fa');
        history.push('/client/login')
     }
     const whatsapChat = ()=>{
        window.open('https://wa.me/2348088213177');
    }

    
    const _rendermobileTab =()=>{
        return <div className="tabCustom">
                    <div>
                        <Link to="/client" >
                            {/* <img src={!pathname[2] ? DashboardActive: Dashboard}/> */}
                            <RiDashboardFill size={20} color={!pathname[2]? '#1c1c93':'#9c9c9c'}/>
                            
                        </Link>
                        <div>dashboard</div>
                        
                    </div>

                    <div>
                        <Link to='/client/wallet'>
                            {/* <img src={pathname[2]=== "wallet"? WalletActive : Wallet}/> */}
                            <RiWalletFill size={25}  color={pathname[2] === "wallet" ? '#1c1c93':'#9c9c9c'}/>
                        </Link>
                        <div>wallet</div>
                       
                    </div>
                    <div className='cruise'>
                        <Link to="/client/exchange">
                            {/* <img src={pathname[2]=== "exchange"? ExchangeActive : Exchange}/> */}
                            <RiExchangeBoxFill className='cruise-exchange' size={25} color={pathname[2] === "exchange" ? '#1c1c93':'#9c9c9c'}/>
                        </Link>
                        <div>exchange</div>

                    </div>
                    <div>
                        <Link to="/client/transactions-history">
                            {/* <img src={pathname[2]=== "exchange"? ExchangeActive : Exchange}/> */}
                            <MdOutlineHistory size={25} color={pathname[2] === "transactions-history" ? '#1c1c93':'#9c9c9c'}/>
                        </Link>
                        <div>transaction</div>

                    </div>
                   
                    <div onClick={()=>{handleClose()}}>
                        
                            {/* <img src={pathname[2]=== "settings"? SettingsActive : Settingx}/> */}
                            < RiMoreLine size={25}  color='#9c9c9c'/>
                        
                        
                    </div>

                    <Offcanvas show={close} onHide={handleClose} placement='end' className='myoffcanvas'>
                        <Offcanvas.Header closeButton>
                        <Offcanvas.Title style={{color:'#fff'}}>More</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                             <div className="moreDiv" onClick={()=>{history.push('/client/settings')}}>
                                
                                <div>
                                    <RiSettings2Fill size={25}  color={pathname[2] === "settings" ? '#9c9c9c':'#fff'}/>
                                </div>
                                <div>
                                    Settings
                                </div>

                             </div>
                             <div className="moreDiv" onClick={()=>whatsapChat()}>
                                
                                <div><AiOutlineWhatsApp size={25}  color='#25D366'/></div>
                                <div>Whatsapp</div>
                             </div>
                             <div className="moreDiv" onClick={()=>logout()}>
                                
                                    <div>
                                        <BiLogOut size={25}  color='#fff'/>
                                    </div>
                                    <div>
                                        Logout
                                    </div>
                             </div>
                            
                            
                        </Offcanvas.Body>
                    </Offcanvas>

                   


                    

               </div>
    }



    return (
        <div className="dashboard">
                {_rendermobileTab()}
                <Sidebar openClose={open} notify={x}/>
                <TitleBar  handle={setOpen} currentHandle={open} handletrigger={trigger}/>
                {_renderBodyComponent()}
                
                
        </div>
    )
}


export default Index;