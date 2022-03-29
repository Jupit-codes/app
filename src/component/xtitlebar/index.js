import '../../assets/css/xtitlebar/xtitlebar.css'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {BiSupport} from 'react-icons/bi'
import {IoIosChatbubbles} from 'react-icons/io'
import ProfileImage from '../../assets/images/utility/profile-pic.png'
import {reactLocalStorage} from 'reactjs-localstorage';
import { useEffect,useState } from 'react'
const Index = ()=>{
    const [salutation, setsalutation] = useState();
    const[userInfor,setUserInfor] = useState();
    
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
    return (
        <div className="xtitle">
                <div className='WelcomeClass'>
                    <div className='Hello'>
                        {salutation}, {userInfor}.
                    </div>
                    <div className='dateHello'>
                        12:22pm, 29 March 2022.
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
                        
                        <div className='profileImage'>
                           <img src={ProfileImage}/>
                        </div>

                    </div>
                    

                </div>
        </div>
    )
}

export default Index