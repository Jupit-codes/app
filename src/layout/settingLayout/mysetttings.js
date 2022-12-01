import '../../assets/css/settings/profile.css'
import {FaEnvelope} from 'react-icons/fa'
import {BsTelephone} from 'react-icons/bs'
import { reactLocalStorage } from 'reactjs-localstorage'
import { useEffect, useState } from 'react'
import { Tab } from './tab'
import AccountSettings from './AccountSettings'
import NotificationSettings from './NotificationSettings'
import SecuritySetting from './SecuritySettings'
import KycLayout from '../KycLayout'
import axios from 'axios'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {MdContentCopy} from 'react-icons/md'
import { GetPublicAccessBlockCommand } from '@aws-sdk/client-s3'
import { ToastContainer, toast } from 'react-toastify';
const Index=()=>{
    const [Kyc,setKyc] = useState();
    const [active,setactive] = useState('Account-Settings');
    const [kycLevel1,setkycLevel1] = useState('');
    const [kycLevel2,setkycLevel2] = useState('');
    const [kycLevel3,setkycLevel3] = useState('');
    const [primaryAcctname,setprimaryAcctname] = useState("NULL");
    const [primaryAcctnum,setprimaryAcctnum] = useState("NULL");
    const [bank,setbank] = useState();
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
            case 'Verification':
                return <KycLayout/>
                break;
        }
    }

    const banks = [
        { "id": "1", "name": "Access Bank" ,"code":"044" },
        { "id": "2", "name": "Citibank","code":"023" },
        { "id": "3", "name": "Diamond Bank","code":"063" },
        { "id": "4", "name": "Dynamic Standard Bank","code":"" },
        { "id": "5", "name": "Ecobank Nigeria","code":"050" },
        { "id": "6", "name": "Fidelity Bank Nigeria","code":"070" },
        { "id": "7", "name": "First Bank of Nigeria","code":"011" },
        { "id": "8", "name": "First City Monument Bank","code":"214" },
        { "id": "9", "name": "Guaranty Trust Bank","code":"058" },
        { "id": "10", "name": "Heritage Bank Plc","code":"030" },
        { "id": "11", "name": "Jaiz Bank","code":"301" },
        { "id": "12", "name": "Keystone Bank Limited","code":"082" },
        { "id": "13", "name": "Providus Bank Plc","code":"101" },
        { "id": "14", "name": "Polaris Bank","code":"076" },
        { "id": "15", "name": "Stanbic IBTC Bank Nigeria Limited","code":"221" },
        { "id": "16", "name": "Standard Chartered Bank","code":"068" },
        { "id": "17", "name": "Sterling Bank","code":"232" },
        { "id": "18", "name": "Suntrust Bank Nigeria Limited","code":"100" },
        { "id": "19", "name": "Union Bank of Nigeria","code":"032" },
        { "id": "20", "name": "United Bank for Africa","code":"033" },
        { "id": "21", "name": "Unity Bank Plc","code":"215" },
        { "id": "22", "name": "Wema Bank","code":"035" },
        { "id": "23", "name": "Zenith Bank","code":"057" }
    ]
    
    const loadKYC = async ()=>{
        let _id = reactLocalStorage.getObject('user')._id;
        const Base_url = process.env.REACT_APP_BACKEND_URL;
        await axios({
            method: "POST",
            url: `${Base_url}/users/kyc`,
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

            // console.log(err)
            
            
        })

    }

    const loadBank = async ()=>{
        let email = reactLocalStorage.getObject('user').email;
        const Base_url = process.env.REACT_APP_BACKEND_URL;
        await axios({
            method: "POST",
            url: `${Base_url}/users/bank`,
            headers:{
                'Content-Type':'application/json',
                
                'Authorization':reactLocalStorage.get('token')
            },
            data:JSON.stringify({email:email})
        })
        .then((res)=>{
           
            setprimaryAcctname(res.data.account_name);
            setprimaryAcctnum(res.data.account_number);
            setbank(res.data.bank_code) 
        })
        .catch((err)=>{

            // console.log(err)
            
            
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

    const getBank = (code)=>{

        //   banks.map((d)=>{
        //     if(d.code === code.toString()){
        //         setbank(d.name)
        //     }
        //     else{
        //         setbank('unknown');
        //     }
        // })
    }

    useEffect(()=>{
        loadKYC();
        loadBank();
    },[])

    const _renderBank = ()=>{
        return banks.map((d)=>{
            if(d.code == bank){
                return d.name
            }
        })
    }
    const handlereferral = ()=>{
        toast.success('Link Copied','success')
    }
    
    return (
        <div className="settings-profile">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
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
                    <span>Bank:&nbsp;{_renderBank()} </span>
                    <span>Account Number:&nbsp;{primaryAcctnum} </span>
                </div>
                <div className="acct"> Account Name :
                    <span>{primaryAcctname} </span>
                    {/* <span>NULL </span> */}
                </div>
                <div className='acct'><b>Referral Code :</b>
                <div>
                    {reactLocalStorage.getObject('user').username}
                </div>
                 <CopyToClipboard text={reactLocalStorage.getObject('user').username}>
                        <MdContentCopy className='referrallink' onClick={()=>{handlereferral()}}/>
                </CopyToClipboard>
                

                </div>
            </div>
        </div>
    )
}

export default Index;