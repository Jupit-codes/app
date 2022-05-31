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
import Loader from '../../../utils/loader/loader.js'
import ChangePinModal from '../../../utils/modal/CHANGEPIN'
const Index = ()=>{

    const [TwoFA,setTwoFA] = useState(false)
    const [status,setStatus] = useState(null)
    const [qrcode,setqrcode] = useState()
    const [err,setErr]  = useState();
    const [createpinStatus,setcreatepinStatus] = useState();
    const [myloader,setmyloader] = useState(false)
    const [openChangeModal,setopenChangeModal] = useState(false)
    const [visibility,setvisibility] = useState(false)
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
            // console.log('here',res.data)
          
        })
        .catch((err)=>{
            console.log(err);
            setErr(err.response? err.response.data:'NO Connecetion')
            
        })
    }

    const getUser = async()=>{
        await axios({
            method: "POST",
            url: `${Base_url}/users/refresh`,
            headers:{
                'Content-Type':'application/json',
                'Authorization':reactLocalStorage.get('token')
            },
            data:JSON.stringify({_id:reactLocalStorage.getObject('user')._id})
        })
        .then((res)=>{
            
           setcreatepinStatus(res.data.Pin_Created);
          
          
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
        setcreatepinStatus(reactLocalStorage.getObject('user').Pin_Created)
        console.log(reactLocalStorage.getObject('user').Pin_Created);
        get2fa();
        getUser();
    },[])

    useEffect(()=>{
        if(reactLocalStorage.getObject('2fa')){
            setStatus(reactLocalStorage.getObject('2fa').activated)
        }

    },[reactLocalStorage.getObject('2fa')])

        const handleChangePassword = ()=>{
           
            setmyloader(true);
            sendpasswordlink();
        }

        const sendpasswordlink = async ()=>{
            await axios({
                method: "POST",
                url: `${Base_url}/verify/changepassword`,
                headers:{
                    'Content-Type':'application/json',
                    'Authorization':reactLocalStorage.get('token')
                },
                data:JSON.stringify({userid:reactLocalStorage.getObject('user')._id})
            })
            .then((res)=>{
                
                setmyloader(false)
                console.log(res.data)
                toast.success(res.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
              
            })
            .catch((err)=>{
                setmyloader(false)
                console.log(err.response)
                toast.error(err.response, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                setErr(err.response? err.response.data:'NO Connecetion')
                
            })
        }

        const handlePinChange =()=>{
            
            if(createpinStatus){
               
                setopenChangeModal(true)
            }
            else{
                toast.info('Kindly Carry out your first transaction to create a pin','info')
            }
        }
        const makeVisible = ()=>{
            setvisibility(!visibility)
        }
        return(
        <div className="TabBodySecurity">
            <ToastContainer/>
            {myloader && <Loader/>}
            {TwoFA && <TWO_FAmodal closeModal={setTwoFA} />}
            {openChangeModal && <ChangePinModal closeModal={setopenChangeModal} openmodal={openChangeModal}/>}
            <div className='CoverDIvSecurity'>
                <div className='reset'>Reset Your Password</div>
                <small>Click on the Button Below To Change Password</small>
                <div className='TabInput SubmitModal' onClick={()=>handleChangePassword()}>
                    <RiLockPasswordFill size={20} style={{marginRight:10}}/> <span>Change Password</span>
                
                </div>
            </div>

            <div className='CoverDIvSecurity'>
                <div className='reset'>{status ? 'Disable 2FA': ' Enable 2FA'}</div>
                <small>Click on the Button Below</small>
                <div className={status ? 'TabInput SubmitModalDisable': 'TabInput SubmitModal'} onClick={()=>CheckStatus()}>
                 
                    <Si1Password size={20} style={{marginRight:10}}/>{status ? 'Disable 2FA': ' Enable 2FA'}
                </div>
            </div>

            <div className='CoverDIvSecurity'>
                <div className='reset'>{createpinStatus ? 'Change Pin': ' Create Pin'}</div>
                <small>Click on the Button Below</small>
                <div className={status ? 'TabInput SubmitModalDisable': 'TabInput SubmitModal'} onClick={()=>{handlePinChange()}} >
                 
                    <RiLockPasswordFill size={20} style={{marginRight:10}}/> {createpinStatus ? 'Change Pin': ' Create Pin'}
                </div>
            </div>
           
             
        </div>
    )
}

export default Index;