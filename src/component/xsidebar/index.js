import '../../assets/css/xsidebar/xsidebar.css'
import logo from '../../assets/images/utility/logo.png'
import Dashboard from '../../assets/images/utility/dashboard.png'
import Exchange from '../../assets/images/utility/exchange.png'
import Settings from '../../assets/images/utility/settings.png'
import Library from '../../assets/images/utility/library.png'
import Schedule from '../../assets/images/utility/schedule.png'
import Payout from '../../assets/images/utility/payout.png'
import Security from '../../assets/images/utility/security.png'
const Index = ()=>{
    return (
        <div className="xsidebar">
            <div className='logoContainer'>
                <img src={logo} className='logo'/>
            </div>
            <div className='navigationContainer'>
                <div className='navigation'>
                   <div className='navigationIcon'> <img src={Dashboard}/> </div> <div className='navigationText'>Dashboard</div>
                </div>
                <div className='navigation'>
                   <div className='navigationIcon'> <img src={Exchange}/> </div> <div className='navigationText'>Exchange</div>
                </div>
                <div className='navigation'>
                   <div className='navigationIcon'> <img src={Library}/> </div> <div className='navigationText'>Library</div>
                </div>
                <div className='navigation'>
                   <div className='navigationIcon'> <img src={Schedule}/> </div> <div className='navigationText'>Schedules</div>
                </div>
                <div className='navigation'>
                   <div className='navigationIcon'> <img src={Payout}/> </div> <div className='navigationText'>Payout</div>
                </div>
                <div className='navigation'>
                   <div className='navigationIcon'> <img src={Settings}/> </div> <div className='navigationText'>Settings</div>
                </div>
            </div>

            <div className='securityCaution'>
                <div className='caution'>
                    <div className='securityImg'>
                         <img src={Security}/>
                    </div>
                    <div className='keep'>
                        Keep You Safe!.
                    </div>
                    <div className='tips'>
                            <div> Update Your security password</div>
                            <div> Keep your Acccount Safe</div>
                    </div>
                    <div className='update-privacy'>
                        Update Privacy
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}
    
export default Index;
