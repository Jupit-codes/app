import {MdOutlineSecurity} from 'react-icons/md'

import QRcode from 'qrcode'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { reactLocalStorage } from 'reactjs-localstorage';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast,ToastContainer } from 'react-toastify'
import LoaderModal from '../../../loader/loader.js'
import axios from 'axios';
const Index = ({Next})=>{
    
    const [src,setSrc]= useState('')
    const [address, setAddress] = useState('');
    const [copied,setCopied] = useState(false)
    const [qrcode, setqrcode] = useState();
    const [token, setToken] = useState('');
    const [data, setdata] = useState();
    const [err, seterr] = useState();
    const [Loader, setLoader] = useState(false)
    const Base_url = process.env.REACT_APP_BACKEND_URL
   const Finalize2FA = async ()=>{
       setLoader(true)
        let userid = reactLocalStorage.getObject('user')._id;

        await axios({
            method: "POST",
            url: `${Base_url}/activate/2FA`,
            headers:{
                'Content-Type':'application/json',
                'Authorization':reactLocalStorage.get('token')
            },
            data:JSON.stringify({userid:userid,token:token})
        })
        .then((res)=>{
            setLoader(false)
            setdata(res.data)
            setToken('')
            Next('Section5');
            
          
        })
        .catch((err)=>{
            setLoader(false)
            seterr(err.response? err.response.data:'NO Connecetion')
            
        })
    }

//    const _handleToken = (e)=>{
//        setToken(e.target.value)
//    }



    useEffect(()=>{
        if(data){
            console.log(data);
            reactLocalStorage.setObject('2fa',data.new2fa)
            toast.success(data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }

        if(err){
            toast.error(err, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }
        
    },[data,err])

  

    return(
        <div>
            <ToastContainer/>
            {Loader && <LoaderModal/>}
            <div className='welcome2fa-section slide-right'>
                 <p>
                    - Input Token Generated From the Authenticatior App.
                </p> 
                
                <div className='barcodeAuth'>
                    <input type="text" value={token} onChange={(e)=>setToken(e.target.value)} />
                </div>      
            </div>

            <div className='TabInput SubmitModal mt-4' onClick={()=>Finalize2FA()}>
               Confirm
            </div>
        </div>
    )
}
export default Index;