import '../../../assets/css/settings/account.css'
import {AiOutlineEdit} from 'react-icons/ai'
import {FaEdit} from 'react-icons/fa'
import { reactLocalStorage } from 'reactjs-localstorage';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../../../utils/loader/loader.js'
import { toast,ToastContainer } from 'react-toastify';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {MdContentCopy} from 'react-icons/md'

const Index = ()=>{
    const [phone, setphone]=  useState('')
    const [button,setbutton] = useState('Edit Profile');
    const [startloader,setstartloader] = useState(false)
    const [disable, setdisable] = useState(true)
    const [kycLevel1,setkycLevel1] = useState('');
    const [kycLevel2,setkycLevel2] = useState('');
    const [kycLevel3,setkycLevel3] = useState('');
    const [Kyc,setKyc] = useState('');
    const [primaryAcctname,setprimaryAcctname] = useState('');
    const [primaryAcctnum,setprimaryAcctnum] = useState('');
    const [bank,setbank] = useState('');
    let counter = 0;
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

    const handlereferral = ()=>{
        toast.success('Link Copied','success')
    }
    
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

            console.log(err)
            
            
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
            _renderBank(res.data.bank_code)
             

        })
        .catch((err)=>{

            console.log(err)
            
            
        })

    }

    const handleEdit = ()=>{
        setbutton('Submit')
        setdisable(false)
        counter++;

        if(counter === 1 && button === "Submit" && !disable ){
            counter=0;
            const Base_url = process.env.REACT_APP_BACKEND_URL;
            let _id = reactLocalStorage.getObject('user')._id;
                setstartloader(true);
                axios({
                    method: "POST",
                    url: `${Base_url}/threshold/update/phonenumber`,
                    headers:{
                        'Content-Type':'application/json',
                        
                        'Authorization':reactLocalStorage.get('token')
                    },
                    data:JSON.stringify({userid:_id,newphonenumber:phone})
                })
                .then((res)=>{
    
                    setbutton('Edit');
                    setstartloader(false)
                    setdisable(true)
                    toast.success(res.data,'SUCCESS');
                    
                })
                .catch((err)=>{
                    setstartloader(false);
                    toast.error(err.response && err.response.data,'ERROR');
                    console.log(err.response)
                    
                    
                })

        }


        // if(button === "Submit"){

        //     let _id = reactLocalStorage.getObject('user')._id;
        //     setstartloader(true)
        //     axios({
        //         method: "POST",
        //         url: `https://myjupit.herokuapp.com/threshold/update/phonenumber`,
        //         headers:{
        //             'Content-Type':'application/json',
                    
        //             'Authorization':reactLocalStorage.get('token')
        //         },
        //         data:JSON.stringify({userid:_id,newphonenumber:phone})
        //     })
        //     .then((res)=>{

        //         setbutton('Edit');
        //         setstartloader(false)
        //         toast.success(res.data,'SUCCESS');
                
        //     })
        //     .catch((err)=>{
    
        //         console.log(err)
                
                
        //     })
        // }
    }

    const handle_phonenumber = (e)=>{
        setphone(e.target.value)
    }

    useEffect(()=>{
        loadKYC();
        loadBank();
    },[])

    const _renderBank = (bankcode)=>{
        console.log(bankcode)
        return banks.map((d)=>{
            if(d.code == bankcode){
                setbank(d.name);
                return true;
        
            }
        })
    }

    useEffect(()=>{
        setphone(reactLocalStorage.getObject('user').phonenumber)
    },[])

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

         

    return(
        <div className="TabBodySecurity">
           <div>
            {startloader && <Loader/>}
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
                <div className='TabInput'>
                    <label>Username</label>
                    <input type="text" className='form-control' placeholder='' value={reactLocalStorage.getObject('user').username} disabled/>
                </div>
                <div className='TabInput'>
                    <label>Email Address</label>
                    <input type="text" className='form-control' placeholder='' value={reactLocalStorage.getObject('user').email} disabled/>
                </div>

                <div className='TabInput'>
                    <label>Phonenumber</label>
                    <input type="text" className='form-control' placeholder='' value={phone} onChange={handle_phonenumber} disabled={disable}/>
                </div>
                <div className='TabInput SubmitModal' onClick={handleEdit}>
                    <FaEdit size={20}/>{button}
                
                </div>
           </div>

           <div className='other-infor'>
               <div className='otherInfo'> Other Information</div> 
                <div className='TabInput'>
                    <label>KYC LEVEL</label>
                    <input type="text" className='form-control' placeholder='' value={Kyc}  disabled={disable}/>
                </div>
                <div className='TabInput'>
                    <label>Bank</label>
                    <input type="text" className='form-control' placeholder='' value={bank || ''} disabled={disable}/>
                </div>

                <div className='TabInput'>
                    <label>Account Number</label>
                    <input type="text" className='form-control' placeholder='' value={primaryAcctnum || ''}  disabled={disable}/>
                </div>
                <div className='TabInput'>
                    <label>Account Name</label>
                    <input type="text" className='form-control' placeholder='' value={primaryAcctname || ''}  disabled={disable}/>
                </div>
                <div className='TabInput'>
                    <label>Referral Code</label>
                    <div className='mobile-ref'>
                        <input type="text" className='form-control' placeholder='' value={reactLocalStorage.getObject('user').username}  disabled={disable}/>
                        <CopyToClipboard className="ref-icon" text={reactLocalStorage.getObject('user').username}>

                            <MdContentCopy className='referrallink' onClick={()=>{handlereferral()}}/>
                        </CopyToClipboard>

                    </div>
                    
                </div>
                
           </div>
           
        </div>
        
    )
}

export default Index;