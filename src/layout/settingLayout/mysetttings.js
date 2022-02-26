import '../../assets/css/settings/profile.css'
import {FaEnvelope} from 'react-icons/fa'
import {BsTelephone} from 'react-icons/bs'
import { reactLocalStorage } from 'reactjs-localstorage'
import { useEffect, useState } from 'react'
import { Tab } from './tab'
import AccountSettings from './AccountSettings'
const Index=()=>{
    const [Kyc,setKyc] = useState();
    useEffect(()=>{
       var kyc_level1 =  reactLocalStorage.getObject('kyc').level1[0].status;
       var kyc_level2 =  reactLocalStorage.getObject('kyc').level2[0].event_status;
       var kyc_level3 =  "Undefined"
       if(kyc_level1 === "Verified"){
           setKyc('Level 1')
       }
       else if(kyc_level1 === "Verified" && kyc_level2 === "Verified" ){
           setKyc('Level 2')
       }
       else if(kyc_level1 === "Verified" && kyc_level2 === "Verified" && kyc_level3 === "Verified"){
           setKyc('Level 3')
       }
    },[])
    return (
        <div className="settings-profile">
            <div className="profile">
               <Tab/>
               <AccountSettings/>
            </div>
            <div className="myprofile">
                
                <div className="profile-pic">

                </div>
                <div className="profile-name">{reactLocalStorage.getObject('user').username}</div>
                <div className="email"> <FaEnvelope size={15} style={{marginRight:10}}/>{reactLocalStorage.getObject('user').email}</div>
                <div className="phonenumber"> <BsTelephone size={15} style={{marginRight:10}}/> {reactLocalStorage.getObject('user').phonenumber}</div>
                <div className="kyc-level"> KYC LEVEL :{Kyc}</div>

                <div className="acct"> PRIMARY BANK ACCOUNT :
                    <span>Bank:NULL </span>
                    <span>Account Number:NULL </span>
                </div>
                <div className="acct"> ALTERNATE BANK ACCOUNT :
                    <span>NULL </span>
                    {/* <span>NULL </span> */}
                </div>
            </div>
        </div>
    )
}

export default Index;