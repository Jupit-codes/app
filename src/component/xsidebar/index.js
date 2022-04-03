import '../../assets/css/xsidebar/xsidebar.css'
import logo from '../../assets/images/utility/logo.png'
import Dashboard from '../../assets/images/utility/dashboard.png'
import Exchange from '../../assets/images/utility/exchange.png'
import Settings from '../../assets/images/utility/settings.png'
import Library from '../../assets/images/utility/library.png'
import Schedule from '../../assets/images/utility/schedule.png'
import Payout from '../../assets/images/utility/payout.png'
import Security from '../../assets/images/utility/security.png'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
const Index = ()=>{
    const location = useLocation();
    const pathname = location.pathname.split('/');
    console.log(pathname[2])
    
    return (
        <div className="xsidebar">
            <div className='logoContainer'>
                <img src={logo} className='logo'/>
            </div>
            <div className='navigationContainer'>
                <Link to="/client">
                    <div className='navigation'>
                        <div className='navigationIcon'> <img src={Dashboard}/> </div> <div className='navigationText'>Dashboard</div>
                    </div>
                </Link>
                <Link to='/client/wallet'>
                    <div className='navigation'>
                    <div className='navigationIcon'> <img src={Exchange}/> </div> <div className='navigationText'>Exchange</div>
                    </div>
                </Link>
                <Link to='/client/kyc'>
                    <div className='navigation'>
                    <div className='navigationIcon'> <img src={Library}/> </div> <div className='navigationText'>Kyc</div>
                    </div>
                </Link>
                <Link to='/client/transactions-history'>
                    <div className='navigation'>
                    <div className='navigationIcon'> <img src={Schedule}/> </div> <div className='navigationText'>Transactions</div>
                    </div>
                </Link>
                <Link to="/client/settings">
                    <div className='navigation'>
                    <div className='navigationIcon'> <img src={Settings}/> </div> <div className='navigationText'>Settings</div>
                    </div>
                </Link>
                {/* <div className='navigation'>
                   <div className='navigationIcon'> <img src={Payout}/> </div> <div className='navigationText'>Payout</div>
                </div> */}
                
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
