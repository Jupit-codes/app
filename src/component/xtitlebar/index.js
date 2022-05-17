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
const Index = ()=>{
    const history = useHistory();
    const [salutation, setsalutation] = useState();
    const[userInfor,setUserInfor] = useState();
    const [notification,setnotification] = useState()

    
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
            console.log(err.response);

            setnotification(0);
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
    return (
        <div className="xtitle">
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
                        
                        <div className='profileImage' >
                           {/* <img src={ProfileImage}/> */}
                           <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic" variant=''>
                                    <img src={ProfileImage}/>
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