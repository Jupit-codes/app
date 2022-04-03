import '../../assets/css/xtitlebar/xtitlebar.css'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {BiSupport} from 'react-icons/bi'
import {IoIosChatbubbles} from 'react-icons/io'
import ProfileImage from '../../assets/images/utility/profile-pic.png'
import {reactLocalStorage} from 'reactjs-localstorage';
import { useEffect,useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
const Index = ()=>{
    const history = useHistory();
    const [salutation, setsalutation] = useState();
    const[userInfor,setUserInfor] = useState();

    const logout =()=>{
        reactLocalStorage.remove('user');
        reactLocalStorage.remove('token');
        reactLocalStorage.remove('kyc');
        reactLocalStorage.remove('2fa');
        history.push('/client/login')
     }
    
    useEffect(()=>{
        let x = reactLocalStorage.getObject('user');
        
        setUserInfor(x.username.toUpperCase())
        
        let hour = new Date().getHours();
        console.log(hour)
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
    const dateandtime = ()=>{
       let date =  new Date();
       const actualtime = date.toLocaleTimeString(); 
       const actualDate =  date.toDateString();

       return actualDate +`(${actualtime})`
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

                        <div className='Notification'>
                            <IoIosNotificationsOutline size={20} color="#1c1c93"/>
                        </div>
                        <div className='Notification'>
                            <BiSupport size={20} color="#1c1c93"/>
                        </div>
                        <div className='Notification'>
                            <IoIosChatbubbles size={20} color="#1c1c93"/>
                        </div>
                        {/* <div className='ProfileName'>
                            Geoffrey
                        </div> */}
                        
                        <div className='profileImage' onClick={logout}>
                           <img src={ProfileImage}/>
                        </div>

                    </div>
                    

                </div>
        </div>
    )
}

export default Index