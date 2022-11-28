import '../../assets/css/xtitlebar/xtitlebar.css'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {BiSupport} from 'react-icons/bi'
import {IoIosChatbubbles} from 'react-icons/io'
import {IoLogoWhatsapp} from 'react-icons/io'
import ProfileImage from '../../assets/images/utility/profile-pic.png'
import {reactLocalStorage} from 'reactjs-localstorage';
import { useEffect,useState } from 'react'

import {Badge,Dropdown} from 'react-bootstrap'
import axios from 'axios'
import {AiOutlinePoweroff} from 'react-icons/ai'

import Dashboard from '../../assets/images/utility/dashboard.png'
import Exchange from '../../assets/images/utility/exchange.png'
import Settingx from '../../assets/images/utility/settings.png'
import Library from '../../assets/images/utility/kyc.png'
import Schedule from '../../assets/images/utility/transaction.png'
import WalletActive from '../../assets/images/utility/active/wallet-active.png'
import Wallet from '../../assets/images/utility/wallet.png'
import DashboardActive from '../../assets/images/utility/active/newer/dashboard-active.ico'
import ExchangeActive from '../../assets/images/utility/active/newer/exchange-active.ico'
import SettingsActive from '../../assets/images/utility/active/newer/settings-active.ico'
import LibraryActive from '../../assets/images/utility/active/newer/kyc-active.png'
import ScheduleActive from '../../assets/images/utility/active/newer/transaction-active.ico'

import { Link,useHistory,useLocation,useNavigate } from "react-router-dom";
import {RiDashboardFill,RiWalletFill,RiExchangeBoxFill,RiSettings2Fill} from 'react-icons/ri'
import {MdOutlineHistory} from 'react-icons/md'
import {BsWallet2} from 'react-icons/bs'
const Index = ()=>{
    
    const [salutation, setsalutation] = useState();
    const[userInfor,setUserInfor] = useState();
    const [notification,setnotification] = useState()

    const location = useLocation();
    const pathname = location.pathname.split('/');
    const history = useHistory()
    
    
    const logout =()=>{
        reactLocalStorage.remove('user');
        reactLocalStorage.remove('token');
        reactLocalStorage.remove('kyc');
        reactLocalStorage.remove('2fa');
        history.push('/client/login',{replace:true})
     }

     const notify = ()=>{
        history.push('/client/notification');
     }
    
     useEffect(()=>{
        NotificationCount();

       const interval =  setInterval(()=>{
            NotificationCount();
        },10000);

        return ()=>clearInterval(interval);

    },[])

    useEffect(()=>{

        if(reactLocalStorage.getObject('user')  ){
                
            let x = reactLocalStorage.getObject('user');
            
            setUserInfor(x.username.toUpperCase())
            
            let hour = new Date().getHours();
            
            if(hour < 12){
                setsalutation('Good Morning')
            }
            else if(hour < 18 ){
                setsalutation('Good Afternoon')
            }
            else {
                setsalutation('Good Evening')
            }
            
        }
       
        
    },[])

    const NotificationCount = async ()=>{
        let _id = reactLocalStorage.getObject('user')._id;
        const Base_url = process.env.REACT_APP_BACKEND_URL;
        await axios({
            method: "POST",
            url: `${Base_url}/threshold/notification/fetch/title`,
            headers:{
                'Content-Type':'application/json',
                
                'Authorization':reactLocalStorage.get('token')
            },
            data:JSON.stringify({addressBTC:reactLocalStorage.getObject('user').btc_wallet[0].address,addressUSDT:reactLocalStorage.getObject('user').usdt_wallet[0].address,userid:_id,email:reactLocalStorage.getObject('user').email,virtual_account:reactLocalStorage.getObject('user').virtual_account})
        })
        .then((res)=>{
            
            
            // if(notification != res.data.length){
            //     setnotification(res.data.length)
            // }
            
            setnotification(res.data.length)
            
        })
        .catch((err)=>{
            console.log(err);
            
            setnotification('');
            if(err.response){
                if(err.response.status === 403){
                    reactLocalStorage.clear();
                    window.location='client/signin'
                }
            }
            // if(err.response){
            //     if(err.response.status == 403){
            //         reactLocalStorage.clear();
            //         window.location = 'client/signin'
            //     }
            // }
            

            
            
        })
    }

    


    const dateandtime = ()=>{
       let date =  new Date();
       const actualtime = date.toLocaleTimeString(); 
       const actualDate =  date.toDateString();

       return actualDate +` (${actualtime})`
    }
    const whatsapChat = ()=>{
        window.open('https://wa.me/2348088213177');
    }

    const _rendermobileTab =()=>{
        return <div className="tabCustom">
                    <div>
                        <Link to="/client">
                            {/* <img src={!pathname[2] ? DashboardActive: Dashboard}/> */}
                            <RiDashboardFill size={20} color={!pathname[2]? '#0d6efd':'#000'}/>
                        </Link>
                        
                    </div>

                    <div>
                        <Link to='/client/wallet'>
                            {/* <img src={pathname[2]=== "wallet"? WalletActive : Wallet}/> */}
                            <RiWalletFill size={25}  color={pathname[2] === "wallet" ? '#0d6efd':'#000'}/>
                        </Link>
                       
                    </div>
                    <div className='cruise'>
                        <Link to="/client/exchange">
                            {/* <img src={pathname[2]=== "exchange"? ExchangeActive : Exchange}/> */}
                            <RiExchangeBoxFill className='cruise-exchange' size={25} color={pathname[2] === "exchange" ? '#0d6efd':'#000'}/>
                        </Link>

                    </div>
                    <div>
                        <Link to="/client/transactions-history">
                            {/* <img src={pathname[2]=== "exchange"? ExchangeActive : Exchange}/> */}
                            <MdOutlineHistory size={25} color={pathname[2] === "transactions-history" ? '#0d6efd':'#000'}/>
                        </Link>

                    </div>
                    <div>
                        <Link to='/client/settings'>
                            {/* <img src={pathname[2]=== "settings"? SettingsActive : Settingx}/> */}
                            <RiSettings2Fill size={25}  color={pathname[2] === "settings" ? '#0d6efd':'#000'}/>
                        </Link>
                        
                    </div>
                    

               </div>
    }

    return (
        <div className="xtitle">
           
                <div className='WelcomeClass'>
                    <div className='Hello'>
                        {salutation}, {userInfor}
                    </div>
                    <div className='dateHello'>
                        {dateandtime()}
                    </div>

                </div>

                <div className='Notification hidenotify'  onClick={notify}>
                            <IoIosNotificationsOutline size={20} color="#1c1c93"/> 
                            <Badge pill bg="danger" className='notify'>{notification}</Badge>
                </div>
                <div className='profilesection'>
                    <div className='xcode'>  

                        <div className='Notification'  onClick={notify}>
                            <IoIosNotificationsOutline size={20} color="#1c1c93"/> 
                            <Badge pill bg="danger" className='notify'>{notification}</Badge>
                        </div>
                        {/* <div className='Notification'>
                            <BiSupport size={20} color="#1c1c93"/>
                        </div> */}
                        <div className='Notification'>
                            <IoLogoWhatsapp size={20} color="#25D366" onClick={whatsapChat}/>
                        </div>
                        {/* <div className='ProfileName'>
                            Geoffrey
                        </div> */}
                        
                        <div className='Notification' >
                           {/* <img src={ProfileImage}/> */}
                           <Dropdown style={{top:0}}>
                                <Dropdown.Toggle id="dropdown-basic" variant=''>
                                    {/* <img src={ProfileImage}/> */}
                                    <AiOutlinePoweroff size={20} className="iconprofile"/>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                                
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                    </div>
                    

                </div>

               

                
        </div>
    )
}

export default Index