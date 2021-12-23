import '../../assets/css/settings/profile.css'
import {FaEnvelope} from 'react-icons/fa'
import {BsTelephone} from 'react-icons/bs'
const Index=()=>{
    return (
        <div className="settings-profile">
            <div className="profile">
                Profile
            </div>
            <div className="myprofile">
                
                <div className="profile-pic">

                </div>
                <div className="profile-name">Temiloluwa Odewumi</div>
                <div className="email"> <FaEnvelope size={15} style={{marginRight:10}}/> bigdevtemy@gmail.com</div>
                <div className="phonenumber"> <BsTelephone size={15} style={{marginRight:10}}/> 07060934005</div>
                <div className="kyc-level"> KYC LEVEL :0</div>

                <div className="acct"> PRIMARY BANK ACCOUNT :
                    <span>Access Bank PLC </span>
                    <span>0690086425 </span>
                </div>
                <div className="acct"> ALTERNATE BANK ACCOUNT :
                    <span>Access Bank PLC </span>
                    <span>0690086425 </span>
                </div>
            </div>
        </div>
    )
}

export default Index;