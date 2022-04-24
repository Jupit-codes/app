import '../../assets/css/settings/profile.css'
import {FaEnvelope} from 'react-icons/fa'
import {BsTelephone} from 'react-icons/bs'
import { reactLocalStorage } from 'reactjs-localstorage'
import { useEffect, useState } from 'react'
import { Tab } from './tab'
import AccountSettings from './AccountSettings'
import NotificationSettings from './NotificationSettings'
import SecuritySetting from './SecuritySettings'
import axios from 'axios'

const Index=()=>{
    const [Kyc,setKyc] = useState();
    const [active,setactive] = useState('Account-Settings');
    const [kycLevel1,setkycLevel1] = useState('');
    const [kycLevel2,setkycLevel2] = useState('');
    const [kycLevel3,setkycLevel3] = useState('');
    const [primaryAcctname,setprimaryAcctname] = useState("NULL");
    const [primaryAcctnum,setprimaryAcctnum] = useState("NULL");
    const [bank,setbank] = useState("NULL");
    // console.log('Active',active)
    const _renderComponent = ()=>{
        switch(active){
            case 'Account-Settings':
                return <AccountSettings/>
                break;
            case 'Notification-Settings':
                return <NotificationSettings/>
                break;
            case 'Security-Settings':
                return <SecuritySetting/>
                break;
        }
    }

    const loadKYC = async ()=>{
        let _id = reactLocalStorage.getObject('user')._id;
        await axios({
            method: "POST",
            url: `https://myjupit.herokuapp.com/users/kyc`,
            headers:{
                'Content-Type':'application/json',
                
                'Authorization':reactLocalStorage.get('token')
            },
            data:JSON.stringify({userid:_id})
        })
        .then((res)=>{
            // console.log(res.data)
            setkycLevel1(res.data.level1[0].status);
            setkycLevel2(res.data.level2[0].event_status)
            

            
            
        })
        .catch((err)=>{

            console.log(err)
            
            
        })

    }

    const loadBank = async ()=>{
        let email = reactLocalStorage.getObject('user').email;
        await axios({
            method: "POST",
            url: `https://myjupit.herokuapp.com/users/bank`,
            headers:{
                'Content-Type':'application/json',
                
                'Authorization':reactLocalStorage.get('token')
            },
            data:JSON.stringify({email:email})
        })
        .then((res)=>{
            // console.log(res.data)
            setprimaryAcctname(res.data.account_name);
            setprimaryAcctnum(res.data.account_number)
            setbank(res.data.bank_code)
            

            
            
        })
        .catch((err)=>{

            console.log(err)
            
            
        })

    }

    useEffect(()=>{
       setkycLevel1(reactLocalStorage.getObject('kyc').level1[0].status);
       setkycLevel2(reactLocalStorage.getObject('kyc').level2[0].event_status);
    //    setkycLevel3(reactLocalStorage.getObject('kyc').level3[0].status);
       
       if(kycLevel1 === "Verified"){
           setKyc('Level 1')
       }
       if(kycLevel1 === "Verified" && kycLevel2 === "customeridentification.success" ){
           setKyc('Level 2')
       }
       if(kycLevel1 === "Verified" && kycLevel2 === "customeridentification.success" && kycLevel3 === "Verified"){
           setKyc('Level 3')
       }

    },[kycLevel1])

    useEffect(()=>{
        loadKYC();
        loadBank();
    },[])
    return (
        <div className="settings-profile">
            <div className="profile">
               <Tab Active={setactive} currentActiveState={active}/>
              { active && _renderComponent()} 
            </div>
            <div className="myprofile">
                
                <div className="profile-pic">

                </div>
                <div className="profile-name">{reactLocalStorage.getObject('user').username}</div>
                <div className="email"> <FaEnvelope size={15} style={{marginRight:10}}/>{reactLocalStorage.getObject('user').email}</div>
                <div className="phonenumber"> <BsTelephone size={15} style={{marginRight:10}}/> {reactLocalStorage.getObject('user').phonenumber}</div>
                <div className="kyc-level"> KYC LEVEL :{Kyc}</div>

                <div className="acct"> PRIMARY BANK ACCOUNT :
                    <span>Bank:{bank} </span>
                    <span>Account Number:{primaryAcctnum} </span>
                </div>
                <div className="acct"> Account Name :
                    <span>{primaryAcctname} </span>
                    {/* <span>NULL </span> */}
                </div>
            </div>
        </div>
    )
}

export default Index;