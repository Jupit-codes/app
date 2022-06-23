import '../../assets/css/xsidebar/xsidebar.css'
import logo from '../../assets/images/utility/logo.png'
import collapselogo from '../../assets/images/logo_1.png'
import Dashboard from '../../assets/images/utility/dashboard.png'
import Exchange from '../../assets/images/utility/exchange.png'
import Settings from '../../assets/images/utility/settings.png'
import Library from '../../assets/images/utility/kyc.png'
import Schedule from '../../assets/images/utility/transaction.png'

import DashboardActive from '../../assets/images/utility/active/dashboard-active.png'
import ExchangeActive from '../../assets/images/utility/active/exchange-active.png'
import SettingsActive from '../../assets/images/utility/active/settings-active.png'
import LibraryActive from '../../assets/images/utility/active/kyc-active.png'
import ScheduleActive from '../../assets/images/utility/active/transaction-active.png'
import Payout from '../../assets/images/utility/payout.png'
import Security from '../../assets/images/utility/security.png'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import { Dash } from 'react-bootstrap-icons'
const Index = ()=>{
    const location = useLocation();
    const pathname = location.pathname.split('/');
 
    
    return (
        <div className="xsidebar">
            <div className='logoContainer'>
                <img src={logo} className='logoxbar'/>
                <img src={collapselogo} className="logoybar"/>
            </div>
            <div className='navigationContainer'>
                <Link to="/client"  style={{textDecoration:"none"}}>
                    <div className='navigation'>
                        <div className='navigationIcon'> <img src={!pathname[2] ? DashboardActive: Dashboard}/> </div> <div className={ !pathname[2] ? 'navigationText active': 'navigationText nonactive'}>Dashboard</div>
                    </div>
                </Link>
                <Link to='/client/wallet'  style={{textDecoration:"none"}}>
                    <div className='navigation'>
                        <div className='navigationIcon'> <img src={pathname[2]=== "wallet"? ExchangeActive : Exchange}/> </div> <div className={pathname[2]=== "wallet" ? 'navigationText active': 'navigationText nonactive'}>Exchange</div>
                    </div>
                </Link>
                <Link to='/client/kyc'  style={{textDecoration:"none"}}>
                    <div className='navigation'>
                    <div className='navigationIcon'> <img src={pathname[2]=== "kyc"? LibraryActive : Library}/> </div> <div  className={pathname[2]=== "kyc" ? 'navigationText active': 'navigationText nonactive'} >Kyc</div>
                    </div>
                </Link>
                <Link to='/client/transactions-history'  style={{textDecoration:"none"}}>
                    <div className='navigation'>
                    <div className='navigationIcon'> <img src={pathname[2] === "transactions-history" ? ScheduleActive :Schedule}/> </div> <div  className={pathname[2]=== "transactions-history" ? 'navigationText active': 'navigationText nonactive'}>Transactions</div>
                    </div>
                </Link>
                <Link to="/client/settings"  style={{textDecoration:"none"}}>
                    <div className='navigation'>
                    <div className='navigationIcon'> <img src={pathname[2]=== "settings" ? SettingsActive : Settings}/> </div> <div  className={pathname[2]=== "settings" ? 'navigationText active': 'navigationText nonactive'}>Settings</div>
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
