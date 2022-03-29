import '../../assets/css/xtitlebar/xtitlebar.css'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {BiSupport} from 'react-icons/bi'
import {IoIosChatbubbles} from 'react-icons/io'
import ProfileImage from '../../assets/images/utility/profile-pic.png'
const Index = ()=>{
    return (
        <div className="xtitle">
                <div className='WelcomeClass'>
                    <div className='Hello'>
                        Good Morning, Geoffrey.
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