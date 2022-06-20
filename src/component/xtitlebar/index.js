import '../../assets/css/xtitlebar/xtitlebar.css'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {BiSupport} from 'react-icons/bi'
import {IoIosChatbubbles} from 'react-icons/io'
import {IoLogoWhatsapp} from 'react-icons/io'
import ProfileImage from '../../assets/images/utility/profile-pic.png'
import {reactLocalStorage} from 'reactjs-localstorage';
import { useEffect,useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import {Badge,Dropdown} from 'react-bootstrap'
import axios from 'axios'
import {AiOutlinePoweroff} from 'react-icons/ai'

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
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { Link } from "react-router-dom";
const Index = ()=>{
    const history = useHistory();
    const [salutation, setsalutation] = useState();
    const[userInfor,setUserInfor] = useState();
    const [notification,setnotification] = useState()

    const location = useLocation();
    const pathname = location.pathname.split('/');

    
    
    const logout =()=>{
        reactLocalStorage.remove('user');
        reactLocalStorage.remove('token');
        reactLocalStorage.remove('kyc');
        reactLocalStorage.remove('2fa');
        history.push('/client/login')
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
        await axios({
            method: "POST",
            url: `https://myjupit.herokuapp.com/threshold/notification/fetch/title`,
            headers:{
                'Content-Type':'application/json',
                
                'Authorization':reactLocalStorage.get('token')
            },
            data:JSON.stringify({addressBTC:reactLocalStorage.getObject('user').btc_wallet[0].address,addressUSDT:reactLocalStorage.getObject('user').usdt_wallet[0].address,userid:_id,email:reactLocalStorage.getObject('user').email})
        })
        .then((res)=>{
            
            
            // if(notification != res.data.length){
            //     setnotification(res.data.length)
            // }
            
            setnotification(res.data.length)
            
        })
        .catch((err)=>{
            console.log(err);
            
            setnotification('Error');
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

       return actualDate +`(${actualtime})`
    }
    const whatsapChat = ()=>{
        window.open('https://wa.me/2348088213177');
    }

    const _rendermobileTab =()=>{
        return <div className="tabCustom">
                    <div>
                        <Link to="/client">
                            <img src={!pathname[2] ? DashboardActive: Dashboard}/>
                        </Link>
                        
                    </div>
                    <Link to="/client/kyc">
                        <img src={pathname[2]=== "kyc"? LibraryActive : Library}/>
                    </Link>
                         
                    <div>
                        <Link to='/client/wallet'>
                            <img src={pathname[2]=== "wallet"? ExchangeActive : Exchange}/>
                        
                        </Link>
                       
                    </div>
                    
                    <div>
                        <Link to='/client/settings'>
                            <img src={pathname[2]=== "settings"? SettingsActive : Settingx}/>
                        
                        </Link>
                        
                    </div>
                    

               </div>
    }

    return (
        <div className="xtitle">
            {_rendermobileTab()}
                <div className='WelcomeClass'>
                    <div className='Hello'>
                        {salutation}, {userInfor}.
                    </div>
                    <div className='dateHello'>
                        {dateandtime()}
                    </div>

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