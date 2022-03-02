import '../../../assets/css/settings/account.css'
import {AiOutlineEdit} from 'react-icons/ai'
import {RiLockPasswordFill} from 'react-icons/ri'
import {Si1Password} from 'react-icons/si'
import { reactLocalStorage } from 'reactjs-localstorage';
import { useEffect, useState } from 'react';
import TWO_FAmodal from '../../../utils/modal/2FAmodal'
import axios from 'axios';
import { Check } from 'react-bootstrap-icons';
import { toast,ToastContainer } from 'react-toastify';
const Index = ()=>{

    const [TwoFA,setTwoFA] = useState(false)
    const [status,setStatus] = useState(null)
    const [qrcode,setqrcode] = useState()
    const [err,setErr]  = useState();
    const Base_url = process.env.REACT_APP_BACKEND_URL
    const get2fa= async ()=>{
        await axios({
            method: "POST",
            url: `${Base_url}/get2FA`,
            headers:{
                'Content-Type':'application/json',
                'Authorization':reactLocalStorage.get('token')
            },
            data:JSON.stringify({userid:reactLocalStorage.getObject('user')._id})
        })
        .then((res)=>{
            
            reactLocalStorage.setObject('2fa',res.data)
            console.log('here',res.data)
          
        })
        .catch((err)=>{
            console.log(err);
            setErr(err.response? err.response.data:'NO Connecetion')
            
        })
    }
    const CheckStatus = ()=>{
        if(status){
            
            toast.info('Kindly do a mail to support@jupit.app, to disable this feature.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        else{
            setTwoFA(true)
        }
    }

    useEffect(()=>{
        get2fa();
    },[])

    useEffect(()=>{
        if(reactLocalStorage.getObject('2fa')){
            setStatus(reactLocalStorage.getObject('2fa').activated)
        }

    },[reactLocalStorage.getObject('2fa')])
        return(
        <div className="TabBodySecurity">
            <ToastContainer/>
            {TwoFA && <TWO_FAmodal closeModal={setTwoFA} />}
            <div className='CoverDIvSecurity'>
                <div className='reset'>Reset Your Password</div>
                <small>Click on the Button Below To Change Password</small>
                <div className='TabInput SubmitModal'>
                    <RiLockPasswordFill size={20} style={{marginRight:10}}/> Change Password
                
                </div>
            </div>

            <div className='CoverDIvSecurity'>
                <div className='reset'>{status ? 'Disable 2FA': ' Enable 2FA'}</div>
                <small>Click on the Button Below</small>
                <div className={status ? 'TabInput SubmitModalDisable': 'TabInput SubmitModal'} onClick={()=>CheckStatus()}>
                 
                    <Si1Password size={20} style={{marginRight:10}}/>{status ? 'Disable 2FA': ' Enable 2FA'}
                </div>
            </div>
           
             
        </div>
    )
}

export default Index;